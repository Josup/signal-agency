<#
  Signal - ship the 2026-08-16 pass.

  Verifies before deploying, deploys, verifies the live site, then tells you what
  is left.

      cd C:\Users\Josh\projects\signal-agency
      .\ship.ps1 -CheckOnly      # verify only, no deploy
      .\ship.ps1                 # verify -> deploy -> verify live
      .\ship.ps1 -SkipPreflight  # deploy even if a check fails (don't)

  ASCII only, on purpose. Windows PowerShell 5.1 reads .ps1 as ANSI unless the
  file carries a UTF-8 BOM, so any box-drawing or smart punctuation in here
  becomes a parser error.

  The deploy is the only step that changes anything the public can see.
#>
param(
    [switch]$CheckOnly,
    [switch]$SkipPreflight
)

$ErrorActionPreference = 'Stop'

$SITE    = 'C:\Users\Josh\projects\signal-agency'
$MACHINE = 'C:\Users\Josh\projects\signal-seo-machine'
$PY      = 'C:\Python314\python.exe'
$CANON   = 'https://www.signalai.agency'

function Head($t) {
    Write-Host ''
    Write-Host ('== ' + $t + ' ' + ('=' * [Math]::Max(0, 60 - $t.Length))) -ForegroundColor Cyan
}
function Ok($t)   { Write-Host '  PASS  ' -ForegroundColor Green -NoNewline; Write-Host $t }
function Bad($t)  { Write-Host '  FAIL  ' -ForegroundColor Red   -NoNewline; Write-Host $t }
function Info($t) { Write-Host ('        ' + $t) -ForegroundColor DarkGray }

$script:Failures = 0
function Check($name, $condition, $detail) {
    if ($condition) {
        Ok $name
    } else {
        Bad $name
        if ($detail) { Info $detail }
        $script:Failures++
    }
}

Set-Location $SITE

# ------------------------------------------------------------- PRE-FLIGHT ---
Head 'Pre-flight'

$pages = @('index.html','about.html','journal.html','privacy.html','404.html','audit.html','what-is-geo.html') |
         Where-Object { Test-Path $_ }
$posts = @(Get-ChildItem -Path 'posts\journal' -Filter '*.html' -File -ErrorAction SilentlyContinue)
$all   = $pages + $posts.FullName

# 1. every canonical points at the www host (the target of the Vercel 301)
$canonHosts = @(Select-String -Path $all -Pattern 'rel="canonical" href="(https://[^/]+)' -AllMatches |
    ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique)
Check 'canonical host is www everywhere' `
      ($canonHosts.Count -eq 1 -and $canonHosts[0] -eq $CANON) `
      ('found: ' + ($canonHosts -join ', '))

# 2. sitemap and robots agree with it
$smHosts = @(Select-String -Path 'sitemap.xml' -Pattern '<loc>(https://[^/]+)' -AllMatches |
    ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique)
Check 'sitemap <loc> host is www' `
      ($smHosts.Count -eq 1 -and $smHosts[0] -eq $CANON) `
      ('found: ' + ($smHosts -join ', '))

Check 'robots.txt sitemap is www' `
      (Select-String -Path 'robots.txt' -Pattern ([regex]::Escape("Sitemap: $CANON/sitemap.xml")) -Quiet)

# 3. every post carries canonical + BlogPosting
$noCanon  = @($posts | Where-Object { -not (Select-String -Path $_.FullName -Pattern 'rel="canonical"' -Quiet) })
$noSchema = @($posts | Where-Object { -not (Select-String -Path $_.FullName -Pattern 'BlogPosting'      -Quiet) })
Check ('all ' + $posts.Count + ' posts have a canonical') ($noCanon.Count  -eq 0) ($noCanon.Name  -join ', ')
Check ('all ' + $posts.Count + ' posts have BlogPosting') ($noSchema.Count -eq 0) ($noSchema.Name -join ', ')

# 4. no CTA is JS-only. href="#" with an onclick is invisible to crawlers.
$deadCta = @(Select-String -Path 'index.html' -Pattern 'href="#" onclick' -AllMatches |
    ForEach-Object { $_.Matches }).Count
Check 'no JS-only CTAs on the homepage' ($deadCta -eq 0) ($deadCta.ToString() + ' remaining')

# 5. og:image is referenced AND exists
Check 'og-image.jpg exists on disk' (Test-Path 'og-image.jpg')

# 6. GA4 key events wired.
#    The audit modal moved out of index.html into assets\audit-modal.js on
#    26 Aug 2026, so grepping index.html for 'signalTrack' stopped proving
#    anything and this check failed on a site whose tracking was fine. Verify
#    the real thing instead: both key event names present in each file that
#    fires them, and index.html actually loading the shared component.
$ga4Missing = @()
foreach ($f in @('assets\audit-modal.js', 'audit.html')) {
    if (-not (Test-Path $f)) { $ga4Missing += "$f missing"; continue }
    foreach ($ev in @('qualify_lead', 'close_convert_lead')) {
        if (-not (Select-String -Path $f -Pattern $ev -Quiet)) { $ga4Missing += "$f lacks $ev" }
    }
}
if (-not (Select-String -Path 'index.html' -Pattern 'assets/audit-modal\.js' -Quiet)) {
    $ga4Missing += 'index.html does not load assets/audit-modal.js'
}
Check 'GA4 conversion events wired' ($ga4Missing.Count -eq 0) ($ga4Missing -join '; ')

# 7. sitemap covers the posts on disk
$smCount = @(Select-String -Path 'sitemap.xml' -Pattern '<loc>' -AllMatches |
    ForEach-Object { $_.Matches }).Count
Check ('sitemap has ' + $smCount + ' urls for ' + $posts.Count + ' posts + statics') ($smCount -ge $posts.Count)

# 8. nothing extra under posts\ - the deploy copies posts\ whole, so anything
#    parked in there ships. The 43 pruned posts live in _quarantine-2026-08-16\
#    at the repo root for exactly this reason.
$strays = @(Get-ChildItem -Path 'posts' -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Extension -eq '.html' -and $_.Directory.FullName -ne (Join-Path $SITE 'posts\journal') })
Check 'no stray html under posts\' ($strays.Count -eq 0) (($strays.FullName) -join '; ')

Write-Host ''
if ($script:Failures -gt 0) {
    Write-Host ('  ' + $script:Failures + ' check(s) failed.') -ForegroundColor Yellow
    if (-not $SkipPreflight -and -not $CheckOnly) {
        Write-Host '  Not deploying. Fix the above, or re-run with -SkipPreflight.' -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host '  All pre-flight checks passed.' -ForegroundColor Green
}

if ($CheckOnly) { if ($script:Failures -gt 0) { exit 1 } else { exit 0 } }

# ----------------------------------------------------------------- DEPLOY ---
Head 'Deploy'

# vercel.json sets framework=null, buildCommand="echo done", outputDirectory=".".
# So Vercel serves the REPO ROOT. `vercel --prod --yes` from here is the deploy
# that has actually been producing the live site - it is what auto_write.py has
# always called.
#
# CLAUDE.md documented a --prebuilt flow against .vercel\output\static instead.
# That directory has been stale since 8 July 2026 and still holds 43 of the
# fabricated posts. Deploying --prebuilt would have put them back live. Do not
# reintroduce it without emptying that directory first.

if (Test-Path '.vercel\output\static\posts\journal') {
    $stale = @(Get-ChildItem '.vercel\output\static\posts\journal' -Filter '*.html' -File).Count
    if ($stale -gt 0) {
        Info "note: .vercel\output\static holds $stale stale post files from an old"
        Info "      --prebuilt flow. Not used by this deploy. Safe to delete."
    }
}

# Rebuild bundle.js only if either source is newer than it.
$needBundle = $true
if (Test-Path 'bundle.js') {
    $b = (Get-Item 'bundle.js').LastWriteTime
    $srcNewest = (Get-Item 'tweaks-panel.jsx','signal-tweaks.jsx' |
                  Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime
    $needBundle = $srcNewest -gt $b
}
if ($needBundle) {
    if (Test-Path 'node_modules\.bin\esbuild.cmd') {
        Write-Host '  rebuilding bundle.js'
        Get-Content 'tweaks-panel.jsx','signal-tweaks.jsx' | Set-Content '_combined.jsx'
        & 'node_modules\.bin\esbuild.cmd' '_combined.jsx' '--outfile=bundle.js' '--define:process.env.NODE_ENV="production"' '--minify'
        Remove-Item '_combined.jsx'
    } else {
        Info 'esbuild not found in node_modules; keeping existing bundle.js'
    }
} else {
    Info 'bundle.js is current; skipping esbuild'
}

Write-Host '  deploying...'
npx vercel --prod --yes
if ($LASTEXITCODE -ne 0) {
    Bad "vercel exited $LASTEXITCODE - deploy did NOT succeed"
    exit 1
}
Ok 'vercel reported success'

# ------------------------------------------------------------ VERIFY LIVE ---
Head 'Verify live'

Start-Sleep -Seconds 10

# vercel.json sets s-maxage=86400, so the CDN will happily serve a 24-hour-old
# copy. A unique query string bypasses it, otherwise a good deploy looks failed.
$bust = 'cb=' + [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()

function Probe($url, $expect) {
    try {
        $sep = '?'; if ($url.Contains('?')) { $sep = '&' }
        $r = Invoke-WebRequest -Uri ($url + $sep + $bust) -Method Head -MaximumRedirection 0 -UseBasicParsing -ErrorAction Stop
        $code = [int]$r.StatusCode
        $loc  = $null
    } catch {
        $resp = $_.Exception.Response
        if ($resp) {
            $code = [int]$resp.StatusCode
            $loc  = $resp.Headers['Location']
        } else {
            Bad ('ERR  ' + $url); Info $_.Exception.Message; return
        }
    }
    if ($code -eq $expect) {
        $suffix = ''
        if ($loc) { $suffix = ' -> ' + $loc }
        Ok ($code.ToString() + '  ' + $url + $suffix)
    } else {
        Bad ($code.ToString() + '  ' + $url + '  (expected ' + $expect + ')')
    }
}

Probe "$CANON/"             200
Probe "$CANON/journal.html" 200
Probe "$CANON/about.html"   200
Probe "$CANON/og-image.jpg" 200
Probe "$CANON/sitemap.xml"  200
Probe "$CANON/robots.txt"   200
Probe "$CANON/llms.txt"     200
Probe "$CANON/audit.html"   200
Probe "$CANON/what-is-geo.html" 200

# The apex must redirect to www with a PERMANENT code. vercel.json's
# "permanent": true emits 308; 301 is equally fine. A 307 or 302 is temporary:
# Google keeps the apex as its own indexing candidate instead of consolidating
# on www, which is the split this whole pass exists to close.
# NOTE: Windows PowerShell 5.1's web stack does not treat 308 as a redirect,
# so a 308 response lands in the TRY branch (no exception) while 301/302/307
# throw into CATCH. Both branches must therefore grade the status code.
function Grade-ApexRedirect([int]$code, $loc) {
    if ($code -eq 301 -or $code -eq 308) {
        Ok ($code.ToString() + '  apex -> ' + $loc + '  (permanent)')
    } elseif ($code -eq 302 -or $code -eq 307) {
        Bad ($code.ToString() + '  apex -> ' + $loc + '  TEMPORARY redirect')
        Info 'Google treats this as temporary and may keep indexing the apex'
        Info 'separately instead of consolidating on www. Fix in the Vercel'
        Info 'dashboard: Project > Settings > Domains > signalai.agency,'
        Info 'set the redirect to www as Permanent (308).'
    } else {
        Bad ('apex did NOT redirect (got ' + $code + ')')
    }
}
try {
    $r = Invoke-WebRequest -Uri "https://signalai.agency/?$bust" -Method Head -MaximumRedirection 0 -UseBasicParsing -ErrorAction Stop
    Grade-ApexRedirect ([int]$r.StatusCode) $r.Headers['Location']
} catch {
    $resp = $_.Exception.Response
    if (-not $resp) { Bad 'apex probe failed'; }
    else {
        Grade-ApexRedirect ([int]$resp.StatusCode) $resp.Headers['Location']
    }
}

# a pruned post must be gone, not still live
Probe "$CANON/posts/journal/citation-velocity-rapid-growth.html" 404

# and the live sitemap must match what is on disk, not a cached older one
try {
    $liveSm = (Invoke-WebRequest -Uri "$CANON/sitemap.xml`?$bust" -UseBasicParsing).Content
    $liveCount = ([regex]::Matches($liveSm, '<loc>')).Count
    $localCount = @(Select-String -Path 'sitemap.xml' -Pattern '<loc>' -AllMatches |
        ForEach-Object { $_.Matches }).Count
    if ($liveCount -eq $localCount) {
        Ok "live sitemap has $liveCount urls, matching disk"
    } else {
        Bad "live sitemap has $liveCount urls, disk has $localCount"
        Info 'CDN cache is s-maxage=86400. If this just deployed, give it a minute and re-check.'
    }
} catch {
    Bad 'could not fetch the live sitemap'
}

# --------------------------------------------------------------- INDEXNOW ---
# Bing's index feeds ChatGPT search. IndexNow tells Bing (and Yandex, Seznam)
# about every URL in one POST the moment a deploy lands, instead of waiting
# for a crawl. Informational only - a failed ping never fails the ship.
Head 'IndexNow'
$inKey = '15bad1c9f33403868009939f18dbcb89'
try {
    $locs = @(Select-String -Path 'sitemap.xml' -Pattern '<loc>([^<]+)</loc>' -AllMatches |
        ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value })
    $body = @{
        host        = 'www.signalai.agency'
        key         = $inKey
        keyLocation = "$CANON/$inKey.txt"
        urlList     = $locs
    } | ConvertTo-Json
    $null = Invoke-RestMethod -Uri 'https://api.indexnow.org/indexnow' -Method Post `
        -ContentType 'application/json; charset=utf-8' -Body $body -TimeoutSec 30
    Ok ("IndexNow pinged for " + $locs.Count + " urls")
} catch {
    Info ('IndexNow ping failed (non-fatal): ' + $_.Exception.Message)
}

# ------------------------------------------------------------------- NEXT ---
Head 'Next'
Write-Host ""
Write-Host "  1. Backlinks. Two form fields, today. GSC still shows ZERO external links."
Write-Host "       LinkedIn company page website field -> $CANON"
Write-Host "       Clutch profile website field        -> $CANON"
Write-Host ""
Write-Host "  2. GBP appeal path: DBA filing at Kings County Clerk -> EIN letter ->"
Write-Host "     appeal at support.google.com/business/workflow/13569690"
Write-Host ""
Write-Host "  3. Tell Claude the deploy is live - it verifies the pages and spends"
Write-Host "     the day's Search Console indexing quota (homepage + newest posts)."
Write-Host ""
Write-Host "  4. Cleanup once you are happy:"
Write-Host "       Remove-Item -Recurse $SITE\_quarantine-2026-08-16"
Write-Host "       Remove-Item -Recurse $SITE\_to_delete_stale"
Write-Host "       Remove-Item $SITE\commit-round*.ps1, $SITE\commit-and-ship.ps1"
