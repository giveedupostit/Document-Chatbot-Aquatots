/**
 * Google Drive → Discord notifier (Google Apps Script)
 *
 * ตรวจโฟลเดอร์ Google Drive เป็นระยะ แล้วแจ้งเตือนเข้า Discord เมื่อ
 *   - มีไฟล์ใหม่ (รวมไฟล์ที่ถูกย้ายเข้ามา และไฟล์ในโฟลเดอร์ย่อย)
 *   - (เลือกได้) มีการแก้ไขไฟล์เดิม
 *
 * วิธีติดตั้งดูที่ README.md ในโฟลเดอร์เดียวกัน
 */

// ===== ตั้งค่า =====
const FOLDER_ID = '17TwLCihdnOmxw03F2joAI-EcPpwSBwub';
const CHECK_EVERY_MINUTES = 10;     // 1, 5, 10, 15 หรือ 30
const NOTIFY_UPDATES = true;        // true = แจ้งเตือนเมื่อมีการแก้ไขไฟล์เดิมด้วย
const INCLUDE_SUBFOLDERS = true;
// Discord Webhook URL เก็บใน Script Properties ชื่อ DISCORD_WEBHOOK_URL (ไม่ต้องใส่ในโค้ด)

const SEEN_PREFIX = 'seen_';

/** รันครั้งแรกครั้งเดียว: จำไฟล์ที่มีอยู่แล้ว (ไม่แจ้งเตือน) และสร้างตัวตั้งเวลา */
function setup() {
  getWebhookUrl_(); // ตรวจว่าตั้ง webhook แล้ว
  const props = PropertiesService.getScriptProperties();
  const files = listFiles_(DriveApp.getFolderById(FOLDER_ID), '');
  const seen = {};
  files.forEach(f => { seen[SEEN_PREFIX + f.id] = String(f.updated); });
  props.setProperties(seen);

  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'checkForChanges')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('checkForChanges').timeBased().everyMinutes(CHECK_EVERY_MINUTES).create();

  postToDiscord_([{
    title: '✅ เริ่มติดตามโฟลเดอร์ Google Drive แล้ว',
    description: `พบไฟล์ปัจจุบัน ${files.length} ไฟล์ จะตรวจทุก ${CHECK_EVERY_MINUTES} นาที`,
    url: 'https://drive.google.com/drive/folders/' + FOLDER_ID,
    color: 0x2ecc71,
  }]);
}

/** ตัวตั้งเวลาเรียกฟังก์ชันนี้อัตโนมัติ */
function checkForChanges() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;
  try {
    const props = PropertiesService.getScriptProperties();
    const stored = props.getProperties();
    const files = listFiles_(DriveApp.getFolderById(FOLDER_ID), '');
    const embeds = [];
    const updates = {};

    files.forEach(f => {
      const key = SEEN_PREFIX + f.id;
      const prev = stored[key];
      if (prev === undefined) {
        embeds.push(embed_(f, '🆕 ไฟล์ใหม่', 0x3498db));
      } else if (NOTIFY_UPDATES && Number(prev) < f.updated) {
        embeds.push(embed_(f, '✏️ มีการแก้ไข', 0xf1c40f));
      }
      if (prev !== String(f.updated)) updates[key] = String(f.updated);
    });

    if (embeds.length) postToDiscord_(embeds);
    // บันทึกหลังส่งสำเร็จเท่านั้น ถ้าส่งไม่ผ่านรอบหน้าจะลองใหม่
    if (Object.keys(updates).length) props.setProperties(updates);
  } finally {
    lock.releaseLock();
  }
}

/** หยุดการแจ้งเตือน */
function stop() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'checkForChanges')
    .forEach(t => ScriptApp.deleteTrigger(t));
}

// ===== ฟังก์ชันภายใน =====

function listFiles_(folder, path) {
  const out = [];
  const it = folder.getFiles();
  while (it.hasNext()) {
    const file = it.next();
    out.push({
      id: file.getId(),
      name: file.getName(),
      url: file.getUrl(),
      path: path,
      owner: ownerEmail_(file),
      created: file.getDateCreated().getTime(),
      updated: file.getLastUpdated().getTime(),
    });
  }
  if (INCLUDE_SUBFOLDERS) {
    const sub = folder.getFolders();
    while (sub.hasNext()) {
      const f = sub.next();
      out.push(...listFiles_(f, path ? path + ' / ' + f.getName() : f.getName()));
    }
  }
  return out;
}

function ownerEmail_(file) {
  try {
    const o = file.getOwner();
    return o ? o.getEmail() : '';
  } catch (e) {
    return '';
  }
}

function embed_(f, label, color) {
  const fields = [];
  if (f.path) fields.push({ name: 'โฟลเดอร์', value: f.path, inline: true });
  if (f.owner) fields.push({ name: 'เจ้าของไฟล์', value: f.owner, inline: true });
  return {
    title: `${label}: ${f.name}`.slice(0, 256),
    url: f.url,
    color: color,
    fields: fields,
    timestamp: new Date(f.updated).toISOString(),
  };
}

function getWebhookUrl_() {
  const url = PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK_URL');
  if (!url) throw new Error('ยังไม่ได้ตั้ง Script Property ชื่อ DISCORD_WEBHOOK_URL');
  return url;
}

function postToDiscord_(embeds) {
  const url = getWebhookUrl_();
  // Discord รับได้สูงสุด 10 embeds ต่อข้อความ
  for (let i = 0; i < embeds.length; i += 10) {
    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ username: 'Aqua-Tots Drive', embeds: embeds.slice(i, i + 10) }),
      muteHttpExceptions: true,
    };
    let res = UrlFetchApp.fetch(url, options);
    for (let retry = 0; res.getResponseCode() === 429 && retry < 3; retry++) {
      Utilities.sleep(2000); // โดน rate limit รอแล้วส่งใหม่
      res = UrlFetchApp.fetch(url, options);
    }
    const code = res.getResponseCode();
    if (code >= 300) throw new Error('Discord webhook error ' + code + ': ' + res.getContentText());
  }
}
