# Aqua-Tots Knowledge Base (Chunks)

เอกสารใน Google Drive ที่แปลงเป็น Markdown แบบแบ่ง chunk สำหรับ Chatbot (RAG)
แหล่งข้อมูลต้นทาง: [Google Drive folder](https://drive.google.com/drive/folders/17TwLCihdnOmxw03F2joAI-EcPpwSBwub)

แต่ละไฟล์ใน `knowledge-base/<doc_id>/` คือ 1 chunk ประกอบด้วย

- YAML front matter: `chunk_id`, `doc_title`, `section`, `source_url` (ลิงก์เอกสารต้นฉบับ) ฯลฯ
- เนื้อหาของหัวข้อนั้น ๆ ที่อ่านเข้าใจได้ในตัวเอง
- บรรทัด **แหล่งอ้างอิง** ท้ายไฟล์ ให้ Chatbot อ้างอิงลิงก์ได้แม้ไม่ได้อ่าน metadata

สร้างใหม่ด้วย `python scripts/build_chunks.py`

| เอกสาร | หมวด | จำนวน chunk | ลิงก์ต้นฉบับ |
| --- | --- | --- | --- |
| `incident-management`: TH Communication and Incident Management | SOP ความปลอดภัย / การจัดการเหตุการณ์ | 6 | [เปิดเอกสาร](https://docs.google.com/document/d/12wy6yQTsW44uZPepjfXOH3WPqjPMsCNelZzUOSpc6Zw/edit) |
| `pike13-report-sop`: SOP ดึง Report (Pike13) | SOP ระบบ Pike13 / Front Desk | 10 | [เปิดเอกสาร](https://drive.google.com/file/d/1c1_Z7YWzWgCf4Cf_Xn1FMPs_xVjIvZ80/view) |
| `refund-form`: แบบฟอร์มขอคืนเงินลูกค้า (Customer Refund Request Form) | แบบฟอร์ม / การเงิน | 3 | [เปิดเอกสาร](https://docs.google.com/document/d/10LEJrwyVeN01CjL5UuEyBb95a9DpQA7uHAX61519vpw/edit) |
| `new-school-opening`: New School Opening Facility Completion Tasks | การเปิดสาขาใหม่ | 5 | [เปิดเอกสาร](https://docs.google.com/document/d/1cyQZv9EHyoJ59KSu8IhnS_hcJNwUtuj7OkfSWLWO2jY/edit) |
| `disciplinary-letter`: จดหมายแจ้งบทลงโทษ (คำสั่งมาตรการทางวินัยกรณีพนักงานสาขา) | วินัย / ความปลอดภัย | 2 | [เปิดเอกสาร](https://docs.google.com/document/d/1ZvDVPCpyFumoDuR7d4HybsTC_jRKU7SWGZDIxPFuDp4/edit) |
| `care-sale`: Care Sale (คู่มือการขายและการรักษาลูกค้า) | การขาย / บริการลูกค้า | 9 | [เปิดเอกสาร](https://drive.google.com/file/d/1Fkzq9GtU030gTGVZGQAyXqOyUV_lZN6t/view) |
