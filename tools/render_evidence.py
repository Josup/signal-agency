#!/usr/bin/env python3
"""
tools/render_evidence.py — rebuild the ledger table inside evidence.html from
evidence/ledger.json. Run after tools/record_evidence.py, or by hand.

    C:\\Python314\\python.exe tools\\render_evidence.py

The table lives between two HTML comment markers; everything else on the page
is hand-written and untouched. Rows are rendered newest-recorded first.
"""
from __future__ import annotations

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEDGER = ROOT / "evidence" / "ledger.json"
PAGE = ROOT / "evidence.html"
START, END = "<!-- LEDGER:START -->", "<!-- LEDGER:END -->"


def esc(v) -> str:
    return html.escape("" if v is None else str(v))


def row(e: dict) -> str:
    if e.get("cited") is True:
        res_cls, res_txt = "res-yes", "Cited"
    elif e.get("cited") is False:
        res_cls, res_txt = "", "Not cited"
    else:
        res_cls, res_txt = "", "—"
    ev = f'<a href="{esc(e["evidence_url"])}">{esc(e["evidence"])}</a>' if e.get("evidence_url") else esc(e.get("evidence"))
    shot = f'<a href="{esc(e["screenshot"])}">screenshot</a>' if e.get("screenshot") else "none on file"
    return (
        "<tr>"
        f"<td>{esc(e['recorded'])}</td>"
        f"<td><a href=\"{esc(e['client_url'])}\" rel=\"noopener\">{esc(e['client'])}</a></td>"
        f"<td>{esc(e['kind'])}</td>"
        f"<td>{esc(e['engine'])}</td>"
        f"<td>{esc(e['prompt'])}</td>"
        f"<td>{esc(e['checked'])}</td>"
        f"<td class=\"{res_cls}\">{res_txt}</td>"
        f"<td>{esc(e['result'])}</td>"
        f"<td>{ev} · {shot}</td>"
        "</tr>"
    )


def main() -> int:
    data = json.loads(LEDGER.read_text(encoding="utf-8"))
    entries = sorted(data["entries"], key=lambda e: e["recorded"], reverse=True)
    table = (
        '<table class="ledger"><thead><tr>'
        "<th>Recorded</th><th>Client</th><th>Kind</th><th>Engine</th><th>Prompt / URL</th>"
        "<th>Checked</th><th>Cited</th><th>Result</th><th>Evidence</th>"
        "</tr></thead><tbody>\n" + "\n".join(row(e) for e in entries) + "\n</tbody></table>"
        f'\n<p class="ledger-count">{len(entries)} row(s). Last recorded {esc(entries[0]["recorded"]) if entries else "—"}.</p>'
    )
    page = PAGE.read_text(encoding="utf-8")
    if START not in page or END not in page:
        print("markers missing in evidence.html", file=sys.stderr)
        return 1
    page = re.sub(re.escape(START) + r".*?" + re.escape(END), START + "\n" + table + "\n" + END, page, flags=re.S)
    PAGE.write_text(page, encoding="utf-8")
    print(f"rendered {len(entries)} row(s) into {PAGE.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
