# Aqua-Tots Knowledge Base (Chunks)

เอกสารใน Google Drive ที่แปลงเป็น Markdown แบบแบ่ง chunk สำหรับ Chatbot (RAG)
แหล่งข้อมูลต้นทาง: [Google Drive folder](https://drive.google.com/drive/folders/17TwLCihdnOmxw03F2joAI-EcPpwSBwub)

รวม 46 เอกสาร, 172 chunks

## โครงสร้าง

- `sources/<doc_id>.md`: เนื้อหาที่ทำความสะอาดแล้วของแต่ละเอกสาร แบ่งหัวข้อด้วย `<!-- chunk: ... -->`
- `knowledge-base/<doc_id>/<doc_id>-NNN.md`: 1 ไฟล์ = 1 chunk มี YAML front matter (`chunk_id`, `doc_title`, `section`, `source_url` ฯลฯ) และบรรทัด **แหล่งอ้างอิง** ท้ายไฟล์

แก้ไขเนื้อหาที่ `sources/` แล้วสร้าง chunk ใหม่ด้วย `python scripts/build_chunks.py`

## รายการเอกสาร

| เอกสาร | หมวด | chunks | ลิงก์ต้นฉบับ |
| --- | --- | --- | --- |
| `faq`: คำถามที่พบบ่อย (Q&A AT) | FAQ / ข้อมูลลูกค้า | 10 | [เปิดเอกสาร](https://drive.google.com/file/d/1PBlvJ7jvDtQDuFre-J2imC2VfycBW9-O/view) |
| `level-assessment-questions`: แนะนำคำถามการประเมินเลเวล (Level 1–8) | FAQ / ข้อมูลลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/13txZWrNB3pKJi9Up5U3OGEyM_dKmoNDq/view) |
| `school-policy-script`: Step การพูดกฎระเบียบและขั้นตอนการแจ้งนโยบายจ่ายเงิน | FAQ / ข้อมูลลูกค้า | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1CW-XCeSA-u5bvhTkNlk0K6f05jsb4hzJ/view) |
| `client-withdrawal-process`: Client Withdrawal Process (กระบวนการลาออกของนักเรียน) | Front Desk / บริการลูกค้า | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1EQ1xrvyEm-NeCJriWrMtg64OYC-CvPtb/view) |
| `customer-type-classification`: SOP การแยกประเภทลูกค้า (ลูกค้าใหม่ / ลูกค้าเก่า / ลูกค้าทดลองเรียน) | Front Desk / บริการลูกค้า | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/15zk2gDvVQAAVI3-0ebO2mozyWpQX1wOj/view) |
| `daily-task-list`: Swim School Daily Task List Form (รายการงานประจำวันของโรงเรียน) | Front Desk / บริการลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1KJSXAKlMYiiuqPKLa7HoaPGiltgZMwf4/view) |
| `downtime-tasks-sec`: Downtime Tasks (S.E.C.) – Front Desk (งานช่วงว่างของ Front Desk) | Front Desk / บริการลูกค้า | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1gnC0JoHMrrvuXpWuHdZDG2RB7uyI49JA/view) |
| `first-day-family-experience`: First Day Family Experience Process Sheet (ประสบการณ์ครอบครัววันแรก) | Front Desk / บริการลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/13_30NSo2Jv7ZBleMhfyLpxLuwSdOT7SD/view) |
| `in-water-evaluation-front-desk`: In-Water Evaluation (IWE) - Front Desk SOP (การประเมินทักษะในน้ำ / ทดลองเรียน) | Front Desk / บริการลูกค้า | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/1Su3TZLSnHromgXFFx-_lceK2ESB-aFQ0/view) |
| `new-family-tour-checklist`: New Family Tour Checklist SOP (เช็กลิสต์พาทัวร์ครอบครัวใหม่) | Front Desk / บริการลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/103nRB7ZFUtsUPcYH-aFVMZTKQN3NQ7Jh/view) |
| `ten-minute-check-in`: 10-Minute Check-In SOP (การเช็กอินผู้ปกครองนาทีที่ 10) | Front Desk / บริการลูกค้า | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1lcPUSRlnyYCihHzSaZihdWRFwfBW40dM/view) |
| `incident-management`: TH Communication and Incident Management | SOP ความปลอดภัย / การจัดการเหตุการณ์ | 6 | [เปิดเอกสาร](https://docs.google.com/document/d/12wy6yQTsW44uZPepjfXOH3WPqjPMsCNelZzUOSpc6Zw/edit) |
| `pike13-report-sop`: SOP ดึง Report (Pike13) | SOP ระบบ Pike13 / Front Desk | 10 | [เปิดเอกสาร](https://drive.google.com/file/d/1c1_Z7YWzWgCf4Cf_Xn1FMPs_xVjIvZ80/view) |
| `pike13-work-system-sop`: SOP ระบบการทำงาน (Pike13 / Digipay / ATU) | SOP ระบบ Pike13 / Front Desk | 11 | [เปิดเอกสาร](https://drive.google.com/file/d/1iSfAyLHbM0oiR6y4Yrb4w9-dKE1BdcrV/view) |
| `care-coaching-form`: C.A.R.E. Coaching Form (แบบฟอร์มการประเมินกระบวนการขาย C.A.R.E.) | การขาย / บริการลูกค้า | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/1R6AxUkYf-tQbnxeSm98cs37sN1yBzpqD/view) |
| `care-sale`: Care Sale (คู่มือการขายและการรักษาลูกค้า) | การขาย / บริการลูกค้า | 9 | [เปิดเอกสาร](https://drive.google.com/file/d/1Fkzq9GtU030gTGVZGQAyXqOyUV_lZN6t/view) |
| `care-sales-training`: C.A.R.E Sales (คู่มืออบรมกระบวนการขาย C.A.R.E. และ Retention) | การขาย / บริการลูกค้า | 8 | [เปิดเอกสาร](https://drive.google.com/file/d/120njkIjVws2Tc-2B9NZennQFf6nysI4W/view) |
| `phone-call-monitoring-form`: Phone Call Monitoring Form (แบบฟอร์มการตรวจสอบการรับโทรศัพท์ A.Q.U.A) | การขาย / บริการลูกค้า | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1_HFqMPUFp9E3K8s-LwEi-NBNyMBuX9sY/view) |
| `aqua-tots-experience-coaching-form`: Creating the Aqua-Tots Experience Coaching Form SOP (แบบฟอร์มโค้ชชิ่ง Front Desk) | การบริหารบุคลากร / โค้ชชิ่ง | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1aUmTDLs_L4GlqUg4sP2ow6sKb_fJfRRI/view) |
| `coach-hours-allocation`: การจัดสรรชั่วโมงลงน้ำของโค้ช กรณีโค้ชลา / ขาด | การบริหารบุคลากร / โค้ชชิ่ง | 2 | [เปิดเอกสาร](https://docs.google.com/document/d/1TJB3xPxph1NSjgngc1d6pTM0ARUoMLMgmL8mmXiLhpU/edit) |
| `front-desk-staff-assessment`: Front Desk Staff Assessment (แบบประเมินตำแหน่งพนักงานต้อนรับ) | การบริหารบุคลากร / โค้ชชิ่ง | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/1WJHSzqtfekBJ3dCquThu3nlfrQQnOxeb/view) |
| `positive-school-culture`: Building A Positive School Culture (การสร้างวัฒนธรรมเชิงบวกในโรงเรียน) | การบริหารบุคลากร / โค้ชชิ่ง | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/19O_F9ZrL9tZT3lAg2y2n1KKC8-HGnOY4/view) |
| `recruitment-process`: Recruitment Process Sheet (ขั้นตอนการสรรหาและว่าจ้างพนักงาน) | การบริหารบุคลากร / โค้ชชิ่ง | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1HxPPCSifqgA9XJoYX9ug-dXSa4DlCaIy/view) |
| `team-building-activity`: How to Plan and Facilitate a Team-Building Activity (การวางแผนและจัดกิจกรรม Team Building) | การบริหารบุคลากร / โค้ชชิ่ง | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1OqdgSormXeoFOkNiRpRCesX7mHorMOOK/view) |
| `the-ollies-event`: The Ollies Event SOP (งานมอบรางวัลประจำปีให้ทีมงาน) | การบริหารบุคลากร / โค้ชชิ่ง | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1NESQC9p7mVALlOeGlZe6WGBCOYO72oRg/view) |
| `new-school-opening`: New School Opening Facility Completion Tasks | การเปิดสาขาใหม่ | 5 | [เปิดเอกสาร](https://docs.google.com/document/d/1cyQZv9EHyoJ59KSu8IhnS_hcJNwUtuj7OkfSWLWO2jY/edit) |
| `customer-appreciation-week`: Customer Appreciation Week SOP (สัปดาห์ขอบคุณลูกค้า) | กิจกรรม / อีเวนต์ | 5 | [เปิดเอกสาร](https://drive.google.com/file/d/1FYN4hzhV-Cw1HApgXNKk4GlpIV-gLphf/view) |
| `makeup-donation-drive`: Make-Up Lesson Donation Drive SOP (กิจกรรมบริจาคคลาสเรียนเมคอัพ) | กิจกรรม / อีเวนต์ | 7 | [เปิดเอกสาร](https://drive.google.com/file/d/1OMa70r0_RkQ9QwMk2Ijhc2zLNwEXs3Ep/view) |
| `swim-meet-process-sheet`: Swim Meet Process Sheet (ขั้นตอนการจัดกิจกรรม Swim Meet) | กิจกรรม / อีเวนต์ | 8 | [เปิดเอกสาร](https://drive.google.com/file/d/1SuFwo-4MpxM71W4GgsufM4XDURN9K29x/view) |
| `swim-meet-rules-2025`: ระเบียบการแข่งขัน Swim Meet 2025 (สาขาทวีวัฒนา) | กิจกรรม / อีเวนต์ | 6 | [เปิดเอกสาร](https://drive.google.com/file/d/17vo1uqvA3crDAxNmwt96DzpvXdCNeRZI/view) |
| `valentines-day`: Valentine's Day SOP (กิจกรรมวันวาเลนไทน์) | กิจกรรม / อีเวนต์ | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1SbJcUOJXNvh5SHH5RsutG7QkCWwSxti1/view) |
| `water-safety-week`: Water Safety Week SOP (สัปดาห์ความปลอดภัยทางน้ำ) | กิจกรรม / อีเวนต์ | 5 | [เปิดเอกสาร](https://drive.google.com/file/d/1JaSzvgD6bS_qeyhyslG43go5JJB7H89W/view) |
| `front-desk-responsibilities-by-position`: Front Desk Staff Responsibilities by Positions (หน้าที่ AT-FDS ตามตำแหน่ง) | ตำแหน่งงาน / Job Description | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1INksEuhM-BN3g2SaVXvhTQgfiMo7bmRl/view) |
| `jd-aquatic-manager`: Job Description - Aquatic Manager (AM) ผู้จัดการฝ่ายสระ | ตำแหน่งงาน / Job Description | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1DkJoxXAaon_kMiMbwTjf3PD42zcrbcO3/view) |
| `jd-deck-supervisor`: Job Description - Deck Supervisor (หัวหน้าดูแลขอบสระ) | ตำแหน่งงาน / Job Description | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1TdtETXo-xrGHGt2-ORV-Ps6s7dz3OTU2/view) |
| `jd-general-manager`: Job Description - General Manager (GM) ผู้จัดการทั่วไป | ตำแหน่งงาน / Job Description | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1b3lkuWEjmzBeg9MCOtOG-awuQb4TatiW/view) |
| `jd-office-manager`: Job Description - Office Manager (OM) ผู้จัดการสำนักงาน | ตำแหน่งงาน / Job Description | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/14qD5BtFLt8oMKfdkUEnGK-a9z3GN4iBh/view) |
| `jd-water-watcher`: Job Description - Water Watcher (ผู้เฝ้าระวังความปลอดภัยขอบสระ) | ตำแหน่งงาน / Job Description | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1EwbZjbFm9Sn6m_F2aaGXt4_emQt6k1OL/view) |
| `jd-wsi-co-teacher`: Job Description - AT-WSI Co-Teacher (ครูผู้สอนร่วม) | ตำแหน่งงาน / Job Description | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1wiR10I1Rhx-gBzgRgUzD0tZJFbIjNok3/view) |
| `lead-on-duty`: Lead on Duty Role and Responsibilities (หัวหน้าประจำกะ) | ตำแหน่งงาน / Job Description | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/13YPrqivsYpGDY0dVTXUcUYrMZ-KE1XaJ/view) |
| `atu-adding-group-to-course`: ATU - Adding a Group to a Course SOP (เพิ่มกลุ่มเข้าหลักสูตร Aqua-Tots University) | ระบบ / เครื่องมือ | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1B_MZs-YnRc2ikWcfrbbgoe-c0iHjCxsv/view) |
| `disciplinary-letter`: จดหมายแจ้งบทลงโทษ (คำสั่งมาตรการทางวินัยกรณีพนักงานสาขา) | วินัย / ความปลอดภัย | 2 | [เปิดเอกสาร](https://docs.google.com/document/d/1ZvDVPCpyFumoDuR7d4HybsTC_jRKU7SWGZDIxPFuDp4/edit) |
| `branch-transfer-form`: ฟอร์มนักเรียนย้ายสาขา | แบบฟอร์ม / การเงิน | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1GepmhGjjN2aUAUvLhAoisWVGOq7X-MDj/view) |
| `refund-form`: แบบฟอร์มขอคืนเงินลูกค้า (Customer Refund Request Form) | แบบฟอร์ม / การเงิน | 4 | [เปิดเอกสาร](https://docs.google.com/document/d/1Taoawh4tRJjHIUGzSccE1rrzYeh1VnaR0E-mny2RWFw/edit) |
| `fast-track`: Fast Track SOP (คอร์สเรียนเร่งรัด Fast Track) | โปรแกรมการเรียน / การขาย | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/195Bg3MULI_eLmmTZI3v5rVZtZSjCgnSg/view) |
| `promotion-snap`: Promotion SNAP (นักเรียนที่ต้องการโปรแกรมแบบปรับเฉพาะบุคคล) | โปรแกรมการเรียน / การขาย | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1dTa7ISVEevvBw9nengF3Gk9c4o72JEgX/view) |
