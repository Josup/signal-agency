# RETIRED 2026-09-07. Do not use.
#
# This script deployed a PREBUILT copy under .vercel/output, which lets stale
# generated HTML go live even after the source pages were fixed, and it ran none
# of the claim gate / push-before-deploy safeguards. The operating path is:
#
#     .\ship.ps1
#
# which gates every page with check_claims.py, commits, pushes origin HEAD, and
# only then runs `npx vercel --prod --yes` from source. The old script is kept
# next to this one as deploy.ps1.retired-2026-09-07 for reference only.
Write-Host "deploy.ps1 is retired. Run .\ship.ps1 instead." -ForegroundColor Red
exit 1
