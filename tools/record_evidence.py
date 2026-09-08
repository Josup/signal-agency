#!/usr/bin/env python3
"""
tools/record_evidence.py — append one dated row to evidence/ledger.json and
re-render evidence.html.

    C:\\Python314\\python.exe tools\\record_evidence.py ^
        --client "Nostrand Optical" --client-url https://www.nostrandoptical.com/ ^
        --engine ChatGPT --prompt "optometrist Crown Heights that takes Fidelis" ^
        --cited no --result "Named three practices; Nostrand not among them" ^
        --screenshot evidence/shots/2026-09-08-nostrand-chatgpt.png

Rules the tool enforces so the page stays honest:
  * every row is dated today, by the tool, not typed
  * --cited is yes/no/na — no "partial", no "almost"
  * --screenshot must exist on disk if given; otherwise the row says "none on file"
  * rows are append-only; to correct one, add a new row and say so in --note
Only the two named public clients may appear (Nostrand Optical, Brooklyn BJJ
Lessons) plus StayRnR and Elmira Décor by name — the same rule as the journal.
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEDGER = ROOT / "evidence" / "ledger.json"
ALLOWED_CLIENTS = {"Nostrand Optical", "Brooklyn BJJ Lessons", "StayRnR", "Elmira Décor", "Elmira Decor"}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--client", required=True)
    ap.add_argument("--client-url", required=True)
    ap.add_argument("--engine", required=True, help="ChatGPT, Perplexity, Google AI Overviews, Gemini, Google Rich Results Test ...")
    ap.add_argument("--prompt", required=True, help="the exact prompt typed, or the URL tested")
    ap.add_argument("--cited", required=True, choices=["yes", "no", "na"])
    ap.add_argument("--result", required=True, help="what came back, in one sentence")
    ap.add_argument("--kind", default="AI citation check")
    ap.add_argument("--screenshot", help="path relative to the site root, e.g. evidence/shots/2026-09-08-x.png")
    ap.add_argument("--note", default="")
    a = ap.parse_args()

    if a.client not in ALLOWED_CLIENTS:
        print(f"refusing: '{a.client}' is not an approved public client name", file=sys.stderr)
        return 2
    shot = None
    if a.screenshot:
        p = ROOT / a.screenshot
        if not p.is_file():
            print(f"refusing: screenshot not on disk: {p}", file=sys.stderr)
            return 2
        shot = a.screenshot.replace("\\", "/")

    today = dt.date.today().isoformat()
    slug = re.sub(r"[^a-z0-9]+", "-", f"{a.client} {a.engine} {a.prompt}".lower()).strip("-")[:60]
    data = json.loads(LEDGER.read_text(encoding="utf-8"))
    data["entries"].append({
        "id": f"{today}-{slug}",
        "client": a.client,
        "client_url": a.client_url,
        "kind": a.kind,
        "engine": a.engine,
        "prompt": a.prompt,
        "checked": today,
        "recorded": today,
        "result": a.result,
        "cited": {"yes": True, "no": False, "na": None}[a.cited],
        "evidence": "Ledger entry" + (" with screenshot" if shot else ", no screenshot"),
        "evidence_url": None,
        "screenshot": shot,
        "note": a.note,
    })
    LEDGER.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"recorded {data['entries'][-1]['id']}")
    return subprocess.call([sys.executable, str(ROOT / "tools" / "render_evidence.py")])


if __name__ == "__main__":
    sys.exit(main())
