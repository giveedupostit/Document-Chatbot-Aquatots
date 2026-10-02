"""Generate chunked Markdown files for the chatbot knowledge base.

Each source document lives in sources/<doc_id>.md: a simple front matter block
(doc_id, title, category, source_type, url, modified) followed by sections
separated by `<!-- chunk: Section title -->` markers.

Every section is written to knowledge-base/<doc_id>/<doc_id>-NNN.md with YAML
front matter (including the source Google Drive link) so a RAG pipeline can
cite where the answer came from. Run: python scripts/build_chunks.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "sources"
OUT = ROOT / "knowledge-base"
DRIVE_FOLDER = "https://drive.google.com/drive/folders/17TwLCihdnOmxw03F2joAI-EcPpwSBwub"

CHUNK_MARKER = re.compile(r"^<!-- chunk: (.+?) -->\s*$", re.MULTILINE)


def parse_source(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    _, header, body = text.split("---\n", 2)
    doc = {}
    for line in header.strip().splitlines():
        key, value = line.split(":", 1)
        doc[key.strip()] = value.strip()
    pieces = CHUNK_MARKER.split(body)
    # pieces = [preamble, title1, body1, title2, body2, ...]
    doc["chunks"] = [
        (pieces[i].strip(), pieces[i + 1].strip()) for i in range(1, len(pieces), 2)
    ]
    if not doc["chunks"]:
        raise ValueError(f"{path} has no chunk markers")
    return doc


def yaml_str(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def render_chunk(doc: dict, index: int, section: str, body: str) -> str:
    total = len(doc["chunks"])
    meta = {
        "chunk_id": f"{doc['doc_id']}-{index:03d}",
        "doc_id": doc["doc_id"],
        "doc_title": doc["title"],
        "section": section,
        "chunk_index": index,
        "total_chunks": total,
        "category": doc["category"],
        "source_type": doc["source_type"],
        "source_url": doc["url"],
        "source_folder": DRIVE_FOLDER,
        "last_modified": doc["modified"],
        "language": "th",
    }
    lines = ["---"]
    for key, value in meta.items():
        lines.append(f"{key}: {value if isinstance(value, int) else yaml_str(value)}")
    lines += [
        "---",
        "",
        f"# {doc['title']}: {section}",
        "",
        body,
        "",
        f"**แหล่งอ้างอิง:** [{doc['title']}]({doc['url']}) (ส่วนที่ {index}/{total})",
        "",
    ]
    return "\n".join(lines)


def render_index(docs: list) -> str:
    total = sum(len(d["chunks"]) for d in docs)
    lines = [
        "# Aqua-Tots Knowledge Base (Chunks)",
        "",
        "เอกสารใน Google Drive ที่แปลงเป็น Markdown แบบแบ่ง chunk สำหรับ Chatbot (RAG)",
        f"แหล่งข้อมูลต้นทาง: [Google Drive folder]({DRIVE_FOLDER})",
        "",
        f"รวม {len(docs)} เอกสาร, {total} chunks",
        "",
        "## โครงสร้าง",
        "",
        "- `sources/<doc_id>.md`: เนื้อหาที่ทำความสะอาดแล้วของแต่ละเอกสาร แบ่งหัวข้อด้วย `<!-- chunk: ... -->`",
        "- `knowledge-base/<doc_id>/<doc_id>-NNN.md`: 1 ไฟล์ = 1 chunk มี YAML front matter "
        "(`chunk_id`, `doc_title`, `section`, `source_url` ฯลฯ) และบรรทัด **แหล่งอ้างอิง** ท้ายไฟล์",
        "",
        "แก้ไขเนื้อหาที่ `sources/` แล้วสร้าง chunk ใหม่ด้วย `python scripts/build_chunks.py`",
        "",
        "## รายการเอกสาร",
        "",
        "| เอกสาร | หมวด | chunks | ลิงก์ต้นฉบับ |",
        "| --- | --- | --- | --- |",
    ]
    for doc in sorted(docs, key=lambda d: (d["category"], d["doc_id"])):
        lines.append(
            f"| `{doc['doc_id']}`: {doc['title']} | {doc['category']} | "
            f"{len(doc['chunks'])} | [เปิดเอกสาร]({doc['url']}) |"
        )
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    docs = [parse_source(p) for p in sorted(SOURCES.glob("*.md"))]
    for doc in docs:
        doc_dir = OUT / doc["doc_id"]
        doc_dir.mkdir(parents=True, exist_ok=True)
        for old in doc_dir.glob("*.md"):
            old.unlink()
        for i, (section, body) in enumerate(doc["chunks"], start=1):
            path = doc_dir / f"{doc['doc_id']}-{i:03d}.md"
            path.write_text(render_chunk(doc, i, section, body), encoding="utf-8")
    (ROOT / "README.md").write_text(render_index(docs), encoding="utf-8")
    total = sum(len(d["chunks"]) for d in docs)
    print(f"Wrote {total} chunks from {len(docs)} documents")


if __name__ == "__main__":
    main()
