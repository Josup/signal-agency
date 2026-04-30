# Signal — Agency Website

## Project Overview
Premium agency website for Signal, a local SEO and AI search agency based in Brooklyn, NY. Helps local businesses show up when customers ask ChatGPT or Google AI "best [service] near me."

## Core Positioning
"Your customers are asking AI who to call. We make sure they find you."

## Tech Stack
- Next.js 14, TypeScript, Tailwind CSS
- Framer Motion for animations
- Deployed on Vercel
- Schema.org structured data (Organization, Service, FAQPage)

## Design Direction — THE LEDGER (Council verdict 2026-04-25)
- Full spec: `docs/superpowers/specs/2026-04-25-signal-agency-the-ledger.md`
- Concept: authority without arrogance — institutional editorial, not startup SaaS
- Background (surface): `#F5F2ED` (Bone — off-white, warm)
- Ink (type + borders): `#0D0D0D` (near-black)
- Accent (CTAs + stats): `#C41E3A` (Cardinal red) — NO amber, NO gold, NO yellow
- Display font: Fraunces 900 variable (editorial serif — unexpected on an agency site)
- Body font: Syne 400/600 (geometric, warm)
- Mono font: DM Mono 400 (labels, query badges, eyebrows)
- Layout: 12-column, 24px gutters, every section has a 1px #0D0D0D ruled top border (ledger structure)
- CTA button: 0px border-radius (flat rectangle — the signature move)
- Hero: 65/35 split — left column H1+subhead+CTA, right column sticky proof card
- Animations: slow and confident (cubic-bezier(0.25,0,0,1)), no bounce, no decoration
- Hero entrance: clip-path line-by-line reveal per H1 line, 800ms/line, 120ms stagger
- Removed from old direction: grain overlay, cursor follower, dark background, amber, Instrument Serif, Inter

## Sections

### 1. Hero
- Dramatic entrance animation on load (text reveal, particle burst, or cinematic fade)
- Headline: "Your customers are asking AI who to call."
- Subheadline: "We make sure they find you."
- Two CTAs: "See Our Work" and "Book a Call"
- Animated background: subtle grid or particle system

### 2. The Problem
- Most local business websites are invisible to AI search
- When someone asks ChatGPT "best dentist in Brooklyn" — your client doesn't appear
- Competitors are getting cited. You're not.
- Stats: 60%+ of search journeys now touch AI, 0% of local businesses have proper Schema.org markup

### 3. Services + Pricing
Three tiers — display as cards with hover animations:

**Basic — $1,500 build + $400/month**
- 1-page website
- Schema.org setup
- Google Search Console
- 15 blog posts/month

**Standard — $2,500 build + $600/month** (highlighted as recommended)
- Multi-page website
- Full Schema.org + AI search optimization
- Google Search Console + GBP setup
- 30 blog posts/month
- Monthly performance report

**Premium — $3,500 build + $900/month**
- Everything in Standard
- 45 blog posts/month
- Schema.org updates as AI search evolves
- Quarterly site audit and improvements
- Priority support

### 4. Case Studies
Two case studies with real results:

**Nostrand Optical — Brooklyn Optometry Practice**
- Built production Next.js website with Schema.org LocalBusiness, MedicalBusiness, FAQPage structured data
- 4 valid rich results on Google Rich Results Test on launch day
- Targeting "optometrist Crown Heights" in Google AI Overviews
- Automated SEO blog generating 4 posts/week

**Brooklyn BJJ Lessons**
- One-page booking site with Calendly, Klaviyo email capture, Schema.org Person + LocalBusiness
- Automated SEO blog with 10+ posts live
- Google Business Profile verified and active
- Showing up in AI search for "BJJ private lessons Brooklyn"

### 5. About
- Solo founder, Brooklyn-based
- MS in AI & Business Analytics, Baruch College (4.0 GPA)
- Built real production systems — not templates
- Specializes in GEO (Generative Engine Optimization) — the emerging field of optimizing for AI search
- Every site built with Next.js, TypeScript, Schema.org — not Wix or Squarespace

### 6. FAQ
- What is AI search optimization?
- How long until I show up in ChatGPT results?
- Do you work with any type of business?
- What's the difference between this and regular SEO?
- Do I need to provide content?

### 7. Contact
- Simple contact form (name, email, business name, message)
- "Book a Discovery Call" button linking to Calendly
- Response time: within 24 hours

## Schema.org
Implement Organization + Service + FAQPage schemas

## Animations (must have)
- Page load: cinematic entrance sequence
- Hero text: staggered word reveal
- Scroll: sections fade + slide up on enter
- Buttons: magnetic hover effect
- Stats: count up animation when in view
- Cursor: custom cursor follower on desktop
- Service cards: 3D tilt on hover

## File Structure
signal-agency/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Services.tsx
│   ├── CaseStudies.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── lib/
│   └── schema.ts
├── public/
└── CLAUDE.md

## /audit Page
Route: `app/audit/page.tsx`

3-question intake form before Calendly embed renders:
1. What type of business do you run? (text input)
2. What neighborhood are you in? (text input)
3. What is your website URL? (url input)

On submit → show Calendly embed (https://calendly.com) with answers pre-filled in notes.
Form styled to match the dark premium aesthetic. Amber CTA button. Same film grain, same fonts.

## Council-Approved Copy (DO NOT CHANGE)
- Hero headline: "When Brooklyn asks ChatGPT, your competitors answer."
- Subhead: "Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity."
- Primary CTA: "See if AI is recommending your competitors"
- CTA destination: /audit page
- Banned above the fold: Schema.org, structured data, JSON-LD, GEO, LLM
- Required above the fold: ChatGPT, AI, customers, competitors, Brooklyn

## Section Order (Council Spec)
1. Hero — headline + subhead + CTA + dated ChatGPT screenshot proof artifact
2. The Invisible Business — ≤80 words agitation, no CTA, pure fear activation
3. Proof — 2 case study cards (Nostrand Optical + Brooklyn BJJ)
4. Pricing — 3 tiers (Basic/Standard/Premium)
5. How it Works — 3 plain-English sentences, first mention of Schema.org
6. Final CTA — "no pitch, no pressure" audit close

## Instructions for Claude Code
1. Read this CLAUDE.md completely before writing any code
2. Use all installed design skills: ui-ux-pro-max, emil-design-eng, frontend-design, 21st.dev
3. Use Framer Motion for all animations
4. Every animation must feel premium — not cheap or generic
5. Mobile responsive — looks great on phone
6. Deploy using the command in the Deploy section below — NOT `npx vercel --prod` (Vercel's Next.js detection breaks it).

## Journal Article Generation Rules

These rules apply any time Claude generates or edits journal articles in `posts/journal/`.

### Content — Hard Rules
1. **No fabricated statistics.** Never invent numbers, percentages, multipliers, or counts (e.g. "73% drop", "3.4× citation rate", "340% QoQ"). If a stat is needed, cite a real public source (Semrush, BrightLocal, SparkToro, Yext, Google blog, etc.) and attribute it inline.
2. **No invented client counts.** Signal has two named clients: Nostrand Optical and Brooklyn BJJ Lessons. Never write "12 clients", "across the portfolio", or any aggregate that implies more.
3. **No proprietary process exposure.** Do not describe Signal's internal workflow, pricing mechanics, outreach methods, or operational specifics. The reader learns WHAT works, not HOW Signal does it internally.
4. **No made-up case study data.** Only use Nostrand Optical and Brooklyn BJJ results that are already documented in existing articles. Do not invent new before/after numbers.
5. **Educational voice only.** Articles teach the reader how AI search works. They do not position Signal as having secret insider data or exclusive client research.

### What IS allowed
- First-person observations grounded in named clients: "The Nostrand Optical site has seen consistent Perplexity referrals since launch"
- General behavioral observations about AI engines (how ChatGPT cites, how Perplexity retrieves, etc.)
- Publicly sourced industry stats with attribution
- Specific Nostrand Optical and Brooklyn BJJ results already published (41 days to first citation, 4 rich results on launch day, etc.)

### CSS Template
All new articles must use the new-style post template (see `how-ai-engines-decide-who-to-cite.html` for reference). Key requirements:
- `list-style:none` on `ul/ol` with `display:flex;flex-direction:column;gap:10px`
- `display:grid;grid-template-columns:28px 1fr` on `li` with `::before` dash markers
- Never use `margin-left:22px` with default bullet markers (causes stacking bug)

## GEO Audit

To run a full GEO audit on this site:
/geo audit signalai.agency

To check content quality before publishing journal posts:
/seo:content-quality-auditor <post-file>

To run technical SEO check:
/seo:technical-seo-checker signalai.agency

## Deploy

Run this from the project root every time you deploy (includes posts/ subdirectory):

```bash
cp -r posts/ .vercel/output/static/ && cat tweaks-panel.jsx signal-tweaks.jsx > _combined.jsx && node_modules/.bin/esbuild _combined.jsx --outfile=bundle.js --define:process.env.NODE_ENV='"production"' --minify && rm _combined.jsx && cp index.html signal.css journal.html bundle.js 404.html robots.txt sitemap.xml llms.txt about.html privacy.html .vercel/output/static/ && npx vercel deploy --prebuilt --prod
```
