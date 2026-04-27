# signal-agency

The website for [Signal AI Agency](https://signalai.agency). Static HTML/CSS, deployed to Vercel.

## What this site is

Signal AI Agency is a Brooklyn-based agency focused on **Generative Engine Optimization (GEO)** — the work of getting independent local businesses cited inside ChatGPT, Perplexity, and Google AI Overviews.

The site is the editorial home of *The Ledger*, Signal's working journal about AI search and local SEO. Posts are written and shipped by the [signal-seo-machine](../signal-seo-machine/) repo, deployed automatically.

**Live URL:** [signalai.agency](https://signalai.agency)

## Design system — The Ledger

The visual system is intentionally print-feeling: a working journal, not a marketing landing page.

| Token | Value |
| --- | --- |
| Bone (paper) | `#F5F2ED` |
| Cardinal red (accent) | `#C41E3A` |
| Ink (body) | `#15110D` |
| Display font | Fraunces 900 (italic on accent words) |
| Body serif | Source Serif 4 |
| Mono | JetBrains Mono |
| Border radius | `0px` everywhere — no rounded corners |
| Rule lines | Single 1px ink, occasional 3px double ink for section breaks |
| Section labels | Mono, 11px, `0.22em` letter-spacing, uppercase, red |

The hard rules: zero rounded corners, zero gradients, zero drop shadows, em-dashes only as italic decorative pieces inside headlines (`<em>`-wrapped), never inside body copy.

## Repo structure

```
signal-agency/
  index.html                Home + all marketing sections
  journal.html              The Ledger archive (auto-updated by signal-seo-machine)
  404.html                  Brand-matched 404
  signal.css                All site styles
  posts/journal/            Generated journal posts (markdown + HTML, written by signal-seo-machine)
  robots.txt
  sitemap.xml               Generated, includes every post
  tweaks-panel.jsx          Source-only React tweaks UI (developer-mode overlay)
  signal-tweaks.jsx         Same — bundled into bundle.js at build time
  bundle.js                 Bundled output of the tweaks panel
```

## Deploy command

PowerShell-friendly, single block. Copy and run from the repo root.

```powershell
cp -r posts/ .vercel/output/static/ ; cat tweaks-panel.jsx signal-tweaks.jsx > _combined.jsx ; node_modules/.bin/esbuild _combined.jsx --outfile=bundle.js --define:process.env.NODE_ENV='"production"' --minify ; rm _combined.jsx ; cp index.html signal.css journal.html bundle.js 404.html robots.txt sitemap.xml .vercel/output/static/ ; npx vercel deploy --prebuilt --prod
```

(Note: PowerShell uses `;` not `&&` to chain commands. The same command works in bash with `&&` substituted.)

## How the SEO machine connects

[signal-seo-machine](../signal-seo-machine/) writes journal posts directly into `signal-agency/posts/journal/`, updates `journal.html` (cards, counts, issue numbers), and runs `npx vercel --prod` to redeploy. The schedule is **Sunday 5am**, 4 posts per run.

The seo machine never modifies `index.html` or any of the marketing pages. It only adds posts and updates the journal index.

## Real clients

Two named clients are referenced in posts and the journal:

- **Nostrand Optical** — Crown Heights optometry. 4 valid rich results on launch day.
- **Brooklyn BJJ Lessons** — Williamsburg jiu-jitsu. Cited #1 in ChatGPT for "BJJ private lessons Brooklyn" in 41 days.

Never fabricate stats, client counts, or case study data inside any post. The SEO machine is configured to refuse this, but the safeguard is editorial, not technical — review new posts after deploy.

## Contact

Josh Supitskiy — josh@signalai.agency
