---
doc_id: pike13-report-sop
title: SOP ดึง Report (Pike13)
category: SOP ระบบ Pike13 / Front Desk
source_type: docx
url: https://drive.google.com/file/d/1gGZteQwQigar7uVoBLl4fsU0XixrYFGo/view
modified: 2026-09-29
---
<!-- chunk: ดึงรายชื่อนักเรียนที่ยังไม่เซ็น Waiver (Waiver not signed) -->

ใช้ดึงรายชื่อนักเรียนที่ยังไม่เซ็นรับทราบกฎระเบียบในระบบ Pike13

**ขั้นตอนดึง Report**

1. Click **Reporting > Clients & Staff > Clients With No Signed Waivers**
2. **Details > Filters** จะเจอกล่องที่ตั้ง Filters ไว้อยู่แล้ว ให้กด **+New filters** เลื่อนหา **Has membership? > is > Yes**
3. **+New filters > Account managers > Not empty**
4. กด **Finish**

Report ที่ได้จะเป็นรายชื่อน้องทุกคนที่ยังไม่ได้กดเซ็นยินยอมรับกฎระเบียบของโรงเรียน

**ขั้นตอนตรวจสอบและบันทึกการเซ็น**

1. เช็คควบคู่กับใบสมัคร ให้แน่ใจว่าผู้ปกครองได้เซ็นรับทราบกฎระเบียบด้านหลังใบสมัครครบทุกข้อ
2. คลิกที่ชื่อน้องใน Report
3. ช่องบนสุดซ้ายมือ **Important notices** จะขึ้นลิงก์ชื่อนักเรียน พร้อมข้อความ **"hasn't completed a waiver"** กดลิงก์เข้าไปจะมี 3 ตัวเลือก:
   - กล่องแรก: เซ็นผ่านหน้าเว็บไซต์ Pike13
   - กล่องที่สอง: เซ็นผ่าน E-mail
   - กล่องที่สาม: เซ็นแบบ offline ในกระดาษหรือในใบสมัคร
4. หากเช็คใบสมัครเรียบร้อยแล้ว ให้กด **กล่องที่สาม** ได้เลย

<!-- chunk: เช็คนักเรียนที่มาทดลองเรียนย้อนหลัง (In-water evaluation) -->

1. กดกราฟ Report
2. Click **Reporting > Clients & Staff > Enrollments > Details > Filters**
3. Click **New filters > Paid with > contains > evaluation**
4. Click **New filters > Service date > is between > Jump to…** แล้วเปลี่ยนเป็นช่วงวันที่ที่ต้องการ
5. Click **New filters > Status > is > Completed** แล้วกด **Finish**

จำนวนที่ขึ้น คือจำนวนนักเรียนที่มาใช้ in-water evaluation

- กรณีนี้ใช้ได้ต่อเมื่อมีการ check-in ใช้ in-water แล้วเท่านั้น
- หากอยากทราบว่านักเรียนที่ทดลองเรียนแล้ว ลงทะเบียนเรียนกับเราหรือไม่ ให้กดเข้าไปที่รายชื่อเพื่อเช็คได้

<!-- chunk: เช็คนักเรียนที่มาเรียนครั้งแรก (First Visits) -->

1. กดกราฟ Report
2. Click **Reporting** จะเจอหน้าต่างรายการ Report
3. Click **First Visits**
4. Click **Details > Filters** เปลี่ยนวันที่ ……… ถึงวันที่ ……… ที่ต้องการทราบ แล้วกด **Finish**

กรณีนี้ใช้ดูนักเรียนที่จะเข้ามาโรงเรียนครั้งแรก

<!-- chunk: เช็คนักเรียนที่ลงคอร์สเรียนแล้ว (First Memberships) -->

1. กดกราฟ Report
2. Click **Reporting** จะเจอหน้าต่างรายการ Report
3. Click **First Memberships**
4. Click **Details > Filters** เปลี่ยนวันที่ ……… ถึงวันที่ ……… ที่ต้องการทราบ แล้วกด **Finish**

กรณีนี้สามารถนำรายชื่อไปเปรียบเทียบกับ Report First Visits ได้ว่า นักเรียนที่มาเรียนครั้งแรกสมัครเป็น Membership กี่คน

<!-- chunk: เช็คนักเรียนที่จะมีวันเกิดในเดือนถัดไป -->

1. กดกราฟ Report
2. Click **Reporting > Clients > Details > Filters**
3. Click **New filters > Days Until Birthday > is less than** แล้วพิมพ์เลข **30**
4. Click **New filters > Has membership? > is > Yes** แล้วกด **Finish**

**หมายเหตุเรื่องตัวเลขวัน:** ตัวเลขขึ้นอยู่กับว่าดึงวันไหนและต้องการดูกี่วันข้างหน้า เช่น ถ้าดึงวันที่ 25 ของเดือนนี้ ต้องใส่ 35 วันข้างหน้า จึงจะครอบคลุมนักเรียนที่เกิดเดือนหน้าทั้งเดือน

<!-- chunk: เช็คบิลที่ต้องเก็บเงินในเดือนถัดไป -->

ปกติ FDS (Front Desk) จะต้องดึง Report นี้ล่วงหน้าก่อนสิ้นเดือนประมาณ 1–2 สัปดาห์ เพื่อให้มีเวลาแจ้งลูกค้าขณะที่ลูกค้ายังมาที่โรงเรียนอยู่

**ขั้นตอน**

Click **Insights > Reporting > Financials > Invoice Item > Details > Filters > Invoice due date > is between > Jump to…** เลือกวันที่เริ่มต้น – วันที่สิ้นสุดที่ต้องการ แล้วกด **Finish**

<!-- chunk: เช็คจำนวนแพลนที่ถูกเปิดใช้ทั้งหมด (Client Passes & Plans) -->

ใช้ดูว่านักเรียนในโรงเรียนใช้แพลนอะไรอยู่บ้าง

1. Click **Insights > Reporting > Client passes & Plans > Details > Filters > Membership? > is > Yes**
2. **+New filters > Available? > is > Yes**
3. **+New filters > Plan name > contains > Group lessons**
4. **+New filters > Plan name > contains > Private**
5. **+New filters > Plan name > contains > Fast Track**

**หมายเหตุ:** ชื่อแพลนต้องเขียนให้ตรงกับแพลนที่สร้างไว้ หากมีแพลนที่ชื่อไม่มีคำข้างต้น (เช่น ไม่มีคำว่า Group lessons) ต้องกด +New filters เพิ่มอีกกล่องสำหรับชื่อแพลนนั้น

<!-- chunk: เช็คยอดขายรายวันและรายเดือน -->

1. เข้า **Reporting**
2. เข้า **Financials** ที่แถบเครื่องมือด้านขวา
3. เลือกหัวข้อ **Transactions by Invoice Item**
4. คลิก **Details** (สัญลักษณ์รูปแว่นขยาย)
5. คลิก **Filters** (สัญลักษณ์รูปกรวย)

**ยอดขายรายวัน:** **+New Filter > On > Jump to…** เลือกวันที่ที่ต้องการดู แล้วกด **Finish**
ผลที่แสดงจะเป็นรายการซื้อภายในวันนั้น ๆ หากต้องการให้ระบบรวมยอดให้ ให้กดที่คำว่า **Summary** แล้วดูตาม **Payment Methods > Revenue Category**

**ยอดขายรายเดือน:** **+New Filter > is between > Jump to…** เลือกวันที่เริ่มต้น – วันสุดท้ายของเดือน แล้วกด **Finish**

<!-- chunk: ดึงจำนวนนักเรียนที่เรียนอยู่ในแต่ละเลเวล ณ ปัจจุบัน -->

ตัวอย่าง: หานักเรียนที่เรียนในเลเวล 4 ที่ยังเรียนอยู่ ณ ปัจจุบัน

1. กดกราฟ Report
2. Click **Reporting > Clients > Details**
3. **Filters > +New filter > Has membership? > is > Yes**
4. **+New filter > Last completed visit service > is > 4 - Seahorses** แล้วกด **Finish**

เปลี่ยนชื่อเลเวลในข้อ 4 ตามเลเวลที่ต้องการดึง

<!-- chunk: ดึงรายชื่อนักเรียนที่มีตารางเรียนในแต่ละวัน -->

1. ไปที่แถบเครื่องมือการนำทางของ Pike13
2. คลิกไอคอนกราฟ **Reporting**
3. เลือก **Clients & Staff**
4. เลือก **Enrollments**
5. เลือก **Details**
6. คลิก **Filters**
7. เพิ่มตัวกรอง **Service date > on > Jump to…** เลือกวันที่ที่ต้องการดึง
8. คลิก **Finish**
