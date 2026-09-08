# Signal Agency Deploy — PowerShell version
# Run from project root: .\deploy.ps1

$ErrorActionPreference = "Stop"

# 1. Stage posts/ into the prebuilt output
if (Test-Path .vercel/output/static/posts) {
    Remove-Item -Recurse -Force .vercel/output/static/posts
}
Copy-Item -Recurse -Force posts/ .vercel/output/static/

# 2. Bundle JSX
Get-Content tweaks-panel.jsx, signal-tweaks.jsx | Set-Content _combined.jsx
node_modules/.bin/esbuild _combined.jsx --outfile=bundle.js --define:process.env.NODE_ENV='"production"' --minify
Remove-Item _combined.jsx

# 3. Copy all static assets (incl. about.html, privacy.html, llms.txt)
Copy-Item -Force index.html, signal.css, journal.html, about.html, privacy.html, bundle.js, 404.html, robots.txt, sitemap.xml, llms.txt, vercel.json .vercel/output/static/

# 4. Deploy
npx vercel deploy --prebuilt --prod
