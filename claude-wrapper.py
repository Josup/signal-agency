#!/usr/bin/env python3
"""
Wrapper to call claude.cmd on Windows without shell=True.
Reads the prompt from stdin (avoids Windows command-line newline issues)
and passes it to claude via --print with stdin piping.
"""
import subprocess
import sys
import json

# Force utf-8 on both stdin and stdout — Windows defaults to cp1252
sys.stdin = open(sys.stdin.fileno(), mode="r", encoding="utf-8", errors="replace")
sys.stdout = open(sys.stdout.fileno(), mode="w", encoding="utf-8", buffering=1)

CLAUDE_CMD = r"C:\Users\Josh\AppData\Roaming\npm\claude.cmd"

prompt = sys.stdin.read()
extra_args = sys.argv[1:]

# Disable tools to prevent models from trying to read files (causes max-turns errors)
args = [CLAUDE_CMD, "--print", "--tools", ""] + extra_args

result = subprocess.run(
    args,
    input=prompt,
    capture_output=True,
    text=True,
    encoding="utf-8",
)
raw = result.stdout.strip()

# Try single JSON object (--print + --output-format json → {"type":"result","result":"..."})
try:
    obj = json.loads(raw)
    if isinstance(obj, dict):
        text = obj.get("result", "")
        if text:
            print(text)
            sys.exit(0)
except (json.JSONDecodeError, TypeError):
    pass

# Try JSON array (legacy -p mode)
start = raw.find("[")
end = raw.rfind("]")
if start != -1 and end != -1:
    try:
        events = json.loads(raw[start:end + 1])
        if isinstance(events, list):
            for item in reversed(events):
                if isinstance(item, dict) and item.get("type") == "result":
                    text = item.get("result", "")
                    if text:
                        print(text)
                        sys.exit(0)
            for item in reversed(events):
                if isinstance(item, dict) and item.get("type") == "assistant":
                    msg = item.get("message", {})
                    for block in msg.get("content", []):
                        if isinstance(block, dict) and isinstance(block.get("text"), str):
                            print(block["text"])
                            sys.exit(0)
    except (json.JSONDecodeError, TypeError):
        pass

print(raw, end="")
if result.returncode not in (0, 1):
    sys.exit(result.returncode)
