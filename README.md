# Aqua-Tots Knowledge Base (Chunks)

เอกสารใน Google Drive ที่แปลงเป็น Markdown แบบแบ่ง chunk สำหรับ Chatbot (RAG)
แหล่งข้อมูลต้นทาง: [Google Drive folder](https://drive.google.com/drive/folders/1kmqSXJ3rAkUhauMF2OGb-sPCohtUP0wb)

รวม 23 เอกสาร, 102 chunks

## โครงสร้าง

- `sources/<doc_id>.md`: เนื้อหาที่ทำความสะอาดแล้วของแต่ละเอกสาร แบ่งหัวข้อด้วย `<!-- chunk: ... -->`
- `knowledge-base/<doc_id>/<doc_id>-NNN.md`: 1 ไฟล์ = 1 chunk มี YAML front matter (`chunk_id`, `doc_title`, `section`, `source_url` ฯลฯ) และบรรทัด **แหล่งอ้างอิง** ท้ายไฟล์

แก้ไขเนื้อหาที่ `sources/` แล้วสร้าง chunk ใหม่ด้วย `python scripts/build_chunks.py`

## รายการเอกสาร

| เอกสาร | หมวด | chunks | ลิงก์ต้นฉบับ |
| --- | --- | --- | --- |
| `faq`: คำถามที่พบบ่อย (Q&A AT) | FAQ / ข้อมูลลูกค้า | 10 | [เปิดเอกสาร](https://drive.google.com/file/d/1pVZRQ6vpJEutW06LGd22p9-ogS39p6RO/view) |
| `level-assessment-questions`: แนะนำคำถามการประเมินเลเวล (Level 1–8) | FAQ / ข้อมูลลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/185iWryl_lAvs81VqRvaKHTkmT0ItZkOJ/view) |
| `customer-type-classification`: SOP การแยกประเภทลูกค้า (ลูกค้าใหม่ / ลูกค้าเก่า / ลูกค้าทดลองเรียน) | Front Desk / บริการลูกค้า | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1FEjizHaqE535-zglALOZ5Rveleonnphh/view) |
| `first-day-family-experience`: First Day Family Experience Process Sheet (ประสบการณ์ครอบครัววันแรก) | Front Desk / บริการลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/10VPmRnc2nIVNxkLkt23InbareerVu9R5/view) |
| `in-water-evaluation-front-desk`: In-Water Evaluation (IWE) - Front Desk SOP (การประเมินทักษะในน้ำ / ทดลองเรียน) | Front Desk / บริการลูกค้า | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/1duWiks_u2zMMcDa4wS755Q1c5sI0plTi/view) |
| `new-family-tour-checklist`: New Family Tour Checklist SOP (เช็กลิสต์พาทัวร์ครอบครัวใหม่) | Front Desk / บริการลูกค้า | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1dBEAZRhsXKwIq5rI11ckMMZIbhv4UBde/view) |
| `ten-minute-check-in`: 10-Minute Check-In SOP (การเช็กอินผู้ปกครองนาทีที่ 10) | Front Desk / บริการลูกค้า | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1TEiG5D8sFaunA-gUlmhbtXLRI5h3RPVu/view) |
| `incident-management`: TH Communication and Incident Management | SOP ความปลอดภัย / การจัดการเหตุการณ์ | 6 | [เปิดเอกสาร](https://drive.google.com/file/d/1wbhfii5uMMwKiJN62GOg96_mO7V7IlBX/view) |
| `pike13-report-sop`: SOP ดึง Report (Pike13) | SOP ระบบ Pike13 / Front Desk | 10 | [เปิดเอกสาร](https://drive.google.com/file/d/1gGZteQwQigar7uVoBLl4fsU0XixrYFGo/view) |
| `pike13-work-system-sop`: SOP ระบบการทำงาน (Pike13 / Digipay / ATU) | SOP ระบบ Pike13 / Front Desk | 11 | [เปิดเอกสาร](https://drive.google.com/file/d/1Tpw0ohMNTZGQN4VHv5lWSG27udxw1vD_/view) |
| `care-sale`: Care Sale (คู่มือการขายและการรักษาลูกค้า) | การขาย / บริการลูกค้า | 9 | [เปิดเอกสาร](https://drive.google.com/file/d/1uBu5h_1vp30UPGc6194qhFyX0lvtI5gz/view) |
| `aqua-tots-experience-coaching-form`: Creating the Aqua-Tots Experience Coaching Form SOP (แบบฟอร์มโค้ชชิ่ง Front Desk) | การบริหารบุคลากร / โค้ชชิ่ง | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/10SKYBxIysvvVd5bpFClmY2YZZiYgb0KX/view) |
| `new-school-opening`: New School Opening Facility Completion Tasks | การเปิดสาขาใหม่ | 5 | [เปิดเอกสาร](https://drive.google.com/file/d/10F8JOalTWeBXEsHVcIKj2DWl-E1mS_Jp/view) |
| `customer-appreciation-week`: Customer Appreciation Week SOP (สัปดาห์ขอบคุณลูกค้า) | กิจกรรม / อีเวนต์ | 5 | [เปิดเอกสาร](https://drive.google.com/file/d/1sIsLSYEObt-58Ou6Ahv6V6SV5-5s3zyY/view) |
| `makeup-donation-drive`: Make-Up Lesson Donation Drive SOP (กิจกรรมบริจาคคลาสเรียนเมคอัพ) | กิจกรรม / อีเวนต์ | 7 | [เปิดเอกสาร](https://drive.google.com/file/d/1U3-jiNWO0ggIiLyFhm3MXGrxVcUtZv3X/view) |
| `valentines-day`: Valentine's Day SOP (กิจกรรมวันวาเลนไทน์) | กิจกรรม / อีเวนต์ | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1knoYuFOLjBCD2FOYN3_gNvi1Wb-YBrWY/view) |
| `water-safety-week`: Water Safety Week SOP (สัปดาห์ความปลอดภัยทางน้ำ) | กิจกรรม / อีเวนต์ | 5 | [เปิดเอกสาร](https://drive.google.com/file/d/177y4eaYQL27uE76qGTBJm_nDXdg3oMg3/view) |
| `jd-office-manager`: Job Description - Office Manager (OM) ผู้จัดการสำนักงาน | ตำแหน่งงาน / Job Description | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1EI_zaU7mMKpQwyQmsYhR8eaFW8UODimY/view) |
| `jd-wsi-co-teacher`: Job Description - AT-WSI Co-Teacher (ครูผู้สอนร่วม) | ตำแหน่งงาน / Job Description | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1d1ZB-w0Q5k71gJ3TszFOQJzBQhazXjsB/view) |
| `atu-adding-group-to-course`: ATU - Adding a Group to a Course SOP (เพิ่มกลุ่มเข้าหลักสูตร Aqua-Tots University) | ระบบ / เครื่องมือ | 1 | [เปิดเอกสาร](https://drive.google.com/file/d/1v72fxKvmHOtGDO7Uev8ks9QPm7RDyhNq/view) |
| `disciplinary-letter`: จดหมายแจ้งบทลงโทษ (คำสั่งมาตรการทางวินัยกรณีพนักงานสาขา) | วินัย / ความปลอดภัย | 2 | [เปิดเอกสาร](https://drive.google.com/file/d/1To2-FzCJZcZLr_sivdNARg76ibd1BHm4/view) |
| `refund-form`: แบบฟอร์มขอคืนเงินลูกค้า (Customer Refund Request Form) | แบบฟอร์ม / การเงิน | 3 | [เปิดเอกสาร](https://drive.google.com/file/d/1J19X0OpWaed_4U9nlQYC7NgNUY1pr8Jl/view) |
| `fast-track`: Fast Track SOP (คอร์สเรียนเร่งรัด Fast Track) | โปรแกรมการเรียน / การขาย | 4 | [เปิดเอกสาร](https://drive.google.com/file/d/1B9sbynAbgAjf5mHVDC9GUUUOL63vMn9b/view) |
