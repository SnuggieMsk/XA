#!/usr/bin/env python3
"""Regenerate docs/content.js from the markdown in ../study-guide.

Run this whenever you edit the notes/flashcards/questions so the live
site picks up the changes:

    python3 docs/build.py
"""
import json
import pathlib

META = [
    ("01", "Basics of Insurance", "Module 7: Risk Management & Insurance Planning"),
    ("02", "Life Insurance Products", "Module 7: Risk Management & Insurance Planning"),
    ("03", "Non-Life Insurance Products", "Module 7: Risk Management & Insurance Planning"),
    ("04", "Retirement Planning Basics", "Retirement Planning"),
    ("05", "Retirement Products", "Retirement Planning"),
    ("06", "Miscellaneous Aspects of Retirement Planning", "Retirement Planning"),
    ("07", "Concepts in Taxation", "Taxation"),
    ("08", "Capital Gains", "Taxation"),
    ("09", "Income from Other Sources", "Taxation"),
    ("10", "Taxation of Debt Products", "Taxation"),
    ("11", "Taxation of Equity Products", "Taxation"),
    ("12", "Taxation of Other Products", "Taxation"),
    ("13", "Tax Provisions for Special Cases", "Taxation"),
    ("14", "Basics of Estate Planning", "Estate Planning"),
    ("15", "Tools for Estate Planning", "Estate Planning"),
    ("16", "Basics of Behavioural Finance", "Behavioural Finance & Risk Profiling"),
    ("17", "Behavioural Finance in Practice", "Behavioural Finance & Risk Profiling"),
    ("18", "Risk Profiling for Investors", "Behavioural Finance & Risk Profiling"),
    ("19", "Comparison of Products Across Categories", "Putting It All Together"),
    ("20", "Case Studies", "Putting It All Together"),
]

HERE = pathlib.Path(__file__).resolve().parent
BASE = HERE.parent / "study-guide"


def read(rel):
    fp = BASE / rel
    return fp.read_text(encoding="utf-8") if fp.exists() else ""


def main():
    chapters = []
    for num, title, module in META:
        d = f"chapter-{num}"
        chapters.append({
            "num": num, "title": title, "module": module,
            "notes": read(f"{d}/notes.md"),
            "flashcards": read(f"{d}/flashcards.md"),
            "questions": read(f"{d}/questions.md"),
        })
    # Mock papers (study-guide/mock-papers/paper-01.md …)
    papers = []
    mp_dir = BASE / "mock-papers"
    if mp_dir.exists():
        for fp in sorted(mp_dir.glob("paper-*.md")):
            num = fp.stem.split("-")[-1]
            papers.append({"num": num, "md": fp.read_text(encoding="utf-8")})
    data = {"readme": read("README.md"), "chapters": chapters, "papers": papers}
    out = "window.STUDY_CONTENT = " + json.dumps(data, ensure_ascii=False) + ";\n"
    (HERE / "content.js").write_text(out, encoding="utf-8")
    total_q = sum(c["questions"].count("\n**Q") for c in chapters)
    print(f"Wrote content.js: {len(out):,} bytes · {len(chapters)} chapters · ~{total_q} questions · {len(papers)} mock papers")


if __name__ == "__main__":
    main()
