<#
  Commit the 2026-08-16 pass across both repos.

      cd C:\Users\Josh\projects\signal-agency
      .\commit.ps1            # stage, show the diffstat, prompt, commit (no push)
      .\commit.ps1 -Yes       # skip the prompt
      .\commit.ps1 -Push      # ...and push

  Shows you what it is about to do and asks before committing. Nothing is pushed
  unless you pass -Push.
#>
param([switch]$Push, [switch]$Yes)

$ErrorActionPreference = 'Stop'

$repos = @(
    @{
        Path = 'C:\Users\Josh\projects\signal-agency'
        Msg  = @'
site pass: canonical host, schema, internal links, GA4 events

- canonical + og:url forced to the www host on all 20 pages; robots.txt
  sitemap directive matched. Eleven pages previously declared a canonical
  pointing at the apex, which 301s -- the cause of "Alternate page with
  proper canonical tag" and "Page with redirect" in Search Console.
- BlogPosting + canonical on all 15 journal posts (43 of 58 had none).
- 45 internal links via a Related block on every post (GSC reported 0).
- 8 audit CTAs given a real href; qualify_lead / close_convert_lead now
  fire. GA4 had all three key events at "No stream data detected".
- og-image.jpg created and referenced (the meta tag pointed at a file
  that never existed); 404.html gets GA4, noindex and recovery links.
- llms.txt rewritten with facts, editorial policy and per-article
  descriptions.
- 43 posts making fabricated claims moved to _quarantine-2026-08-16/.
- CLAUDE.md rewritten: stale ink token, retired pricing, a Next.js stack
  that has never deployed.
- ship.ps1: pre-flight verification, deploy, live verification.
'@
    },
    @{
        Path = 'C:\Users\Josh\projects\signal-seo-machine'
        Msg  = @'
publish gate: fix topic dedupe, add fact rubric, rewrite prompt

- pick_topic_from_queue() now takes the already-claimed line indices.
  It was called N times before any topic was marked [x], so every
  --count 4 run wrote four articles on one topic: 37 topics produced
  58 posts, roughly half of them duplicates.
- gate_article(): deterministic, fails closed. Dedupes against disk and
  published-log.json; rejects invented client counts, case studies about
  businesses that are not clients, first-party research claims with a
  number, unsourced sample sizes, and out-of-range structure.
- context/gate-rubric.md read at runtime by both the writer and the gate.
- SYSTEM_PROMPT rewritten. It previously required "at least one real
  number, percentage, or timeline per major section" with no dataset to
  draw on, which is what produced the fabrications. brand-voice.md
  reinforced it and carried invented stats as examples of good writing.
- make_post_html() now emits canonical, og:*, and BlogPosting. A May fix
  patched the posts that existed then but never the template, so every
  post written afterwards regressed.
- topics.md: 13 topics removed that could only be written by inventing
  data; refill and topic-search prompts now refuse that shape.
- audit_posts.py (retroactive gate over an archive), relink.py (internal
  link graph), PAUSED kill switch.
'@
    }
)

foreach ($r in $repos) {
    Write-Host ''
    Write-Host ('=== ' + (Split-Path $r.Path -Leaf) + ' ' + ('=' * 40)) -ForegroundColor Cyan
    Set-Location $r.Path

    # Two things have been silently breaking git in signal-agency:
    #
    #   1. a stale .git\index.lock (one was left from 11 July), which makes every
    #      write operation fail with "another git process seems to be running"
    #   2. registered worktrees under .claude\worktrees\ whose directories are
    #      gone. git then aborts `status` with "fatal: not a git repository",
    #      which is why the tree looked committed when it was not.
    #
    # Both are cleared here before anything else.

    $lock = Join-Path $r.Path '.git\index.lock'
    if (Test-Path $lock) {
        Write-Host '  Stale .git\index.lock found. Removing.' -ForegroundColor Yellow
        Remove-Item $lock -Force
    }

    $wt = @(git worktree list --porcelain 2>$null | Select-String '^worktree ')
    if ($wt.Count -gt 1) {
        Write-Host '  Pruning stale worktree registrations.' -ForegroundColor Yellow
        git worktree prune -v
    }

    git status --porcelain > $null 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host '  git status still failing here. Fix that before committing:' -ForegroundColor Red
        git status
        continue
    }

    git add -A
    git status --short
    Write-Host ''
    git diff --cached --stat | Select-Object -Last 1

    Write-Host ''
    if (-not $Yes) {
        Write-Host '  Type y to commit. Anything else (including Enter) skips this repo.' -ForegroundColor Gray
        $ans = Read-Host '  Commit'
        if ($ans -ne 'y') { Write-Host '  Skipped - nothing committed.' -ForegroundColor Yellow; continue }
    }

    git commit -m $r.Msg
    if ($LASTEXITCODE -ne 0) {
        Write-Host '  COMMIT FAILED - see the error above. Nothing was committed.' -ForegroundColor Red
        continue
    }
    Write-Host ('  committed ' + (git rev-parse --short HEAD)) -ForegroundColor Green
    if ($Push) {
        git push
        if ($LASTEXITCODE -ne 0) { Write-Host '  PUSH FAILED.' -ForegroundColor Red }
    } else {
        Write-Host '  Not pushed. Re-run with -Push, or: git push' -ForegroundColor Gray
    }
}

Write-Host ''
Write-Host 'Done.' -ForegroundColor Green
