# Plan

## Overview
Position Signal as a fear-and-proof agency that makes Brooklyn business owners viscerally feel they are losing customers to competitors recommended by ChatGPT *right now*. The single most important decision: **lead with outcome (fear of AI invisibility), back with verifiable proof artifacts, never lead with method**. Schema.org and GEO terminology are banned above the fold and appear no earlier than section 5. The entire site funnels to one CTA â€” a free 30-minute "AI Visibility Audit" â€” gated by a 3-question intake.

## Scope
- In: Positioning lock, hero copy and structure, primary CTA strategy, narrative arc, case study presentation, voice rules, trust signals, qualifying intake, MVP launch scope and rollback.
- Out: Component implementation, brand identity, pricing page, blog/content strategy, paid acquisition, email sequences, post-call sales scripts.

## Phases

### Phase 0: Pre-Launch Gates

**Goal**: Resolve dependencies that block the entire strategy before any copy is written.

#### Task 0.1: Secure named case study consent and capture artifacts
- Location: `content/case-studies/` (markdown + image assets)
- Description: Confirm written consent from Nostrand Optical and Brooklyn BJJ for named, public case studies including screenshots. Capture and date-stamp the proof artifacts.
- Estimated Tokens: 400
- Dependencies: None
- Steps:
  - Obtain written consent (email is sufficient) from each client to use business name, neighborhood, and screenshots publicly.
  - Capture: (a) ChatGPT/Perplexity answer screenshot for the target query, (b) Google Rich Results Test screenshot for Nostrand, (c) blog index screenshot for Brooklyn BJJ.
  - Save originals plus dated copies (`nostrand-chatgpt-2026-04.png`, etc.).
  - If consent is not granted, fall back to anonymized category labels ("Brooklyn optometrist") and collect a written testimonial as the proof floor.
- Acceptance Criteria:
  - Two case studies have either named consent + screenshot, or anonymized testimonial.
  - Every screenshot is dated and stored as a static asset.

### Phase 1: Positioning Lock

**Goal**: Codify the single rule that governs all subsequent copy and design decisions.

#### Task 1.1: Write the positioning and voice doc
- Location: `docs/positioning.md`, `docs/voice.md`
- Description: Document the outcome-led, proof-backed positioning, the psychological trigger, and the vocabulary rules.
- Estimated Tokens: 1000
- Dependencies: Task 0.1
- Steps:
  - Positioning rule: outcome in headline, proof in section 2â€“3, method in section 5, never reverse the order.
  - Psychological trigger: loss aversion + social proof of absence â€” the customer is *already* losing, the competitor is *already* winning, the AI is *already* answering without them.
  - Banned vocabulary above the fold: "Schema.org", "structured data", "JSON-LD", "GEO", "LLM", "RAG", "rich snippets", and marketing fluff ("synergy", "leverage", "unlock", "cutting-edge", "in today's digital landscape").
  - Required vocabulary above the fold: "ChatGPT", "AI", "customers", "competitors", "Brooklyn", "invisible", "recommended".
  - Voice posture: first-person ("I", not "we"), name specifics (neighborhoods, tools, dates), 8â€“14 word sentences, two-sentence paragraphs maximum.
  - Evidence rule: every numeric or comparative claim has an adjacent screenshot or live outbound link, or is removed.
- Acceptance Criteria:
  - A grep over rendered HTML returns zero hits on the banned-phrase list above the fold.
  - Founder is named on the homepage in first person.

### Phase 2: Hero & Above-the-Fold

**Goal**: In <5 seconds on a 375px mobile screen, make a Brooklyn business owner feel they are losing customers to AI right now.

#### Task 2.1: Hero headline and subhead
- Location: `app/page.tsx` hero block, `content/copy/hero.md`
- Description: Lock the headline, subhead, and eyebrow tag.
- Estimated Tokens: 600
- Dependencies: Task 1.1
- Steps:
  - Eyebrow (mono, muted): **"Local SEO for the AI era Â· Brooklyn, NY"**
  - Primary headline (â‰¤9 words): **"When Brooklyn asks ChatGPT, your competitors answer."**
  - Subhead (one sentence): **"Customers now ask AI who to call. Signal makes sure that answer is you â€” in ChatGPT, Google AI Overviews, and Perplexity."**
- Acceptance Criteria:
  - Headline â‰¤ 9 words, contains "ChatGPT" and locality (via subhead).
  - No technical term above the fold.
  - 5-second test: 4 of 5 non-technical local owners can paraphrase the offer without prompting.

#### Task 2.2: Above-the-fold structure
- Location: hero section component
- Description: Lock fold composition. Nothing else competes with the message.
- Estimated Tokens: 600
- Dependencies: Task 2.1
- Steps:
  - Layout, top to bottom (mobile-first, single column; asymmetric on desktop):
    1. Nav: "Signal" logo left, single sticky CTA right. No other nav links above the fold on mobile.
    2. Eyebrow tag.
    3. Headline (heavy weight, left-aligned, white on `#0A0A0A` background).
    4. Subhead (neutral-300, 16â€“18px).
    5. Primary CTA button + secondary text link.
    6. **Live proof artifact**: dated screenshot of ChatGPT answering "best optometrist in Crown Heights Brooklyn" with Nostrand Optical visible.
    7. Mono caption beneath proof: **"Real ChatGPT result Â· JSON-LD validated Â· 4 rich results Â· Apr 2026"** â€” the only place a technical term appears on the fold; threads credibility for technical skimmers without breaking the no-jargon rule.
  - Visual: deep neutral background, single subtle radial gradient, no stock imagery, no hero illustration. Inter or Geist display weight; mono accent for eyebrow and proof caption.
  - Image alt text reads as proof: "ChatGPT answering 'best optometrist in Crown Heights Brooklyn' on April 2026, recommending Nostrand Optical."
- Acceptance Criteria:
  - Mobile fold within 100vh contains exactly: eyebrow, headline, subhead, CTA, proof artifact, caption.
  - Hero LCP < 2.0s on mid-tier mobile; proof artifact AVIF/WebP <120KB.
  - Hero contrast ratio â‰¥ 7:1; CTA has visible focus state.

#### Task 2.3: Primary CTA strategy and qualifying intake
- Location: hero CTA, sticky CTA, `/audit` route
- Description: Single conversion destination, reframed as diagnostic, gated by a 3-question intake to filter tire-kickers.
- Estimated Tokens: 700
- Dependencies: Task 2.2
- Steps:
  - Primary CTA copy: **"See if AI is recommending your competitors"**.
  - Secondary text link: "or see how we did it for a Brooklyn optometrist â†’" (anchors to case study).
  - Destination: `/audit` page hosting Cal.com/Calendly embed framed as a *free 30-minute AI Visibility Audit*.
  - Intake (3 fields, before calendar appears): business type, neighborhood, current website URL. No email-first gate beyond what the calendar tool requires.
  - Sticky CTA: bottom on mobile after 50% scroll; top-right on desktop after hero leaves viewport.
  - Exactly one CTA destination on the entire site. No newsletter, no contact form, no lead magnet.
- Acceptance Criteria:
  - One CTA destination site-wide.
  - Intake completes before calendar embed renders.
  - End-to-end booking test produces a calendar event from mobile and desktop.

### Phase 3: Narrative Arc (MVP Launch)

**Goal**: Ship a 5-section page well rather than a 9-section page thinly. Sections 6â€“8 are post-launch additive.

#### Task 3.1: Lock MVP section order
- Location: `app/page.tsx` section sequence, `content/copy/sections.md`
- Description: Five load-bearing sections for launch. Each earns the next.
- Estimated Tokens: 1500
- Dependencies: Task 2.x, Task 0.1
- Steps:
  - **Section 1 â€” Hero** (Phase 2).
  - **Section 2 â€” The Invisible Business** (agitation, â‰¤80 words, second person): *"A patient in Park Slope opens ChatGPT and types 'best optometrist near me in Brooklyn.' Three names appear. Yours isn't one of them. She calls the first one."* No CTA in this section â€” purely emotional.
  - **Section 3 â€” Proof** (two case study cards):
    - Nostrand Optical: neighborhood, target query "optometrist Crown Heights", side-by-side screenshots (AI answer + Rich Results Test showing 4 valid rich results), dated mono caption, outbound link to live client site.
    - Brooklyn BJJ: target query "BJJ private lessons Brooklyn", AI answer screenshot + blog index showing 10+ posts, dated caption, outbound link.
    - No percentage-growth or vanity metrics. Only artifacts a skeptic can re-run.
    - Transparency note: *"Results verified using Google Rich Results Test and live ChatGPT/Perplexity queries, captured [date]."*
  - **Section 4 â€” How** (the *only* place method appears): three plain-English sentences. *"I rewrite your site so AI can read it. I add the invisible markup (called Schema.org) that tells ChatGPT and Google what your business is, where it is, and why to recommend it. I publish content AI cites."* Schema.org is defined inline; this is the first and only use above the FAQ.
  - **Section 5 â€” Final CTA** (the close): *"Not sure if this applies to your business? Book a 30-minute call. I'll run your business through an AI search audit live and show you exactly where you stand â€” no pitch, no pressure."*
  - Post-launch additive: "The Shift" timeline section, founder bio "Who" section, expanded FAQ. Each is independent; the launch page must work without them.
- Acceptance Criteria:
  - Word "Schema" does not appear before section 4 in DOM order.
  - Each case study is self-contained â€” readable without surrounding copy.
  - Page reads top-to-bottom in under 3 minutes.

#### Task 3.2: Founder credibility (post-launch addition)
- Location: "Who" section
- Description: Convert "solo" from weakness into differentiator when added.
- Estimated Tokens: 400
- Dependencies: Task 3.1
- Steps:
  - First-person bio (â‰¤60 words), real name, photograph, Brooklyn locality.
  - Two technical credentials stated as facts ("I write the Schema.org markup by hand. I read Google Search Central docs the day they update.").
  - Capacity statement: "I take on 3 new local businesses per quarter."
  - Frame as "dedicated expert" not "solo" â€” *"Your project never touches junior staff."*
- Acceptance Criteria:
  - First-person voice throughout.
  - Capacity statement is true.

## Testing Strategy
- **5-second test**: Show hero only to 5 non-technical local owners. â‰¥4 must state "AI/ChatGPT is recommending businesses and I might be missing" without prompting.
- **Jargon audit**: grep rendered HTML; "Schema.org", "structured data", "JSON-LD", "GEO" must not appear before section 4 in DOM order. Banned-phrase list returns zero hits.
- **CTA audit**: count distinct conversion destinations. Must equal 1.
- **Proof audit**: every numeric or comparative claim has an adjacent screenshot or outbound link.
- **Booking funnel test**: 5 manual end-to-end bookings on `/audit` from mobile and desktop; intake fields persist into the calendar event.
- **Lighthouse**: hero LCP < 2.0s mid-tier mobile; proof image <120KB AVIF/WebP.
- **Accessibility**: contrast â‰¥ 7:1, headline `<h1>`, CTA real `<button>`/`<a>`, visible focus states.
- **Read-aloud**: full page read aloud; any sentence requiring more than one breath is rewritten.
- **Live competitor query**: run "best [dentist/plumber/optometrist] in Brooklyn" in ChatGPT and Perplexity pre-launch; document competitors who appear; refresh monthly.

## Risks
- **Fear-led headline reads as fearmongering** â€” mitigation: every fear claim has an adjacent dated screenshot. The proof is the calibration.
- **Tire-kickers book the free audit and burn solo founder time** â€” mitigation: 3-field qualifying intake (Task 2.3) before the calendar renders; founder script for the call mirrors the site (show live ChatGPT result for *their* business in the first 5 minutes).
- **Proof image fails to load / is illegible on mobile** â€” mitigation: descriptive alt text reads as proof; mono caption beneath restates the artifact in plain text. Pure HTML/CSS hero render without JS.
- **AI results are non-deterministic and screenshots go stale** â€” mitigation: visible date-stamps; monthly re-capture cadence; quarterly case study refresh; never display a stale-dated AI screenshot as current.
- **Method-banned hero loses technically-curious skimmers** â€” mitigation: single mono-font technical aside in the proof caption ("JSON-LD validated Â· 4 rich results Â· Apr 2026") signals competence without breaking the no-jargon rule.
- **Solo positioning reads as capacity risk to multi-location prospects** â€” mitigation: frame as "dedicated expert," not "solo"; address capacity on the call.
- **Self-critique**: The plan presupposes Brooklyn customers already use ChatGPT for local recommendations â€” partially true in 2026. The proof artifact must do heavy lifting; if it fails, the fear premise collapses. The mono caption + alt text fallbacks are the load-bearing safety net.
- **Self-critique**: Banning A/B testing pre-launch (vs. Plan 1) means the headline is locked on judgment, not data. This is the right call given solo-founder traffic volumes, but commit to revisiting after 200 stable sessions.

## Rollback Plan
- All copy in versioned files (`content/copy/*.md`, `docs/*.md`); revert via git without touching components.
- **MVP fallback**: if 5-section launch is at risk, ship Hero + Case Studies + Final CTA only. The agitation section and "How" can be added within a week post-launch.
- **Headline fallback**: if booking rate <1.5% over 200 sessions in 14 days on stable traffic, A/B swap headline only to curiosity-led variant ("Your customers are asking ChatGPT. Here is what it says about you."), holding all other elements constant.
- **CTA destination fallback**: if Cal.com embed breaks, swap href to `mailto:` with pre-filled subject. No code change beyond href.
- **Case study fallback**: if a client revokes consent, swap to anonymized category label ("Brooklyn optometrist") and a written testimonial; never run the site with zero case studies.
- **Stale screenshot**: if a featured client is no longer cited by ChatGPT, replace screenshot within 48 hours or move case study below the fold.

## Edge Cases
- **Visitor outside Brooklyn**: do not geo-gate. Add one FAQ line post-launch: "Most clients are in Brooklyn/NYC; the work applies anywhere."
- **Visitor on slow connection or aggressive ad-blocker**: hero must render headline + subhead + CTA in pure HTML/CSS without JS hydration.
- **Visitor forwards link to their IT vendor**: case study specificity (4 valid rich results, exact query strings, Rich Results Test screenshot) must satisfy a technical reviewer in 30 seconds.
- **Screen reader**: section landmarks present; headline is `<h1>`; CTA is real `<button>`/`<a>` with descriptive text; proof image alt text reads as proof.
- **Competitor agency scrapes copy**: acceptable risk; moat is live dated client artifacts, not headline craft.
- **Returning visitor (booked, no-showed)**: case studies and FAQ must be strong enough to re-convince without first-visit context.
- **Mobile share preview**: static OG image (1200Ã—630) renders headline + proof artifact legibly.
- **Visitor already showing up in ChatGPT**: the audit becomes "improve position / add keywords" rather than "get found"; the call script must accommodate.

## Open Questions
- None blocking. Phase 0 resolves consent; intake fields are specified; preferred booking tool (Cal.com vs. Calendly) is implementation detail and does not change strategy.