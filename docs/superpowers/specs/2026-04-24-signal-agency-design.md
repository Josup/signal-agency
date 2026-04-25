# Signal Agency Website — Design Spec
_2026-04-24_

## Council Verdict
Lead with **outcome (fear of AI invisibility), back with verifiable proof, never lead with method.**
Schema.org/GEO banned above the fold. Single CTA destination site-wide.

## Tech Stack
- Next.js 14, TypeScript, Tailwind CSS
- Framer Motion for all animations
- Deployed on Vercel
- Schema.org: Organization + Service + FAQPage

## Design System
- Background: `#0A0A0A`
- Accent: warm amber (`#F59E0B` / amber-400)
- Typography: Instrument Serif (display) + Inter (body)
- Film grain overlay (SVG noise filter, opacity 0.035)
- Custom cursor follower (desktop only, hidden on touch)
- Contrast ≥ 7:1 throughout

## Animation Philosophy (Emil Design Eng)
- Page load: cinematic entrance — staggered word reveal on hero headline (30ms per word, ease-out cubic-bezier(0.23,1,0.32,1))
- Scroll: sections fade + translateY(24px→0) on IntersectionObserver enter, `once: true`
- Buttons: magnetic hover (mouse delta → transform, useSpring stiffness:150 damping:15)
- Stats/counters: count-up animation when in view
- Service cards: 3D tilt on hover (rotateX/rotateY ±8deg, perspective 800px)
- Cursor follower: useSpring x/y, 20px circle, mix-blend-mode: difference
- All durations: 150–300ms UI, 400–600ms scroll reveals
- Exit animations: 60% of enter duration
- prefers-reduced-motion: remove transforms, keep opacity

## Sections

### 1. Hero
- Eyebrow (mono, amber-400/60): "Local SEO for the AI era · Brooklyn, NY"
- H1 (Instrument Serif, ~72px desktop / 48px mobile): "When Brooklyn asks ChatGPT, your competitors answer."
- Subhead: "Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity."
- Primary CTA button (amber): "See if AI is recommending your competitors"
- Secondary link: "or see how we did it for a Brooklyn optometrist →"
- Proof artifact: screenshot placeholder card (dark border, amber badge "Real ChatGPT result · Apr 2026")
- Background: radial gradient from #111 at center to #0A0A0A, subtle dot grid pattern

### 2. The Invisible Business (agitation)
- ≤80 words, second person, no CTA
- *"A patient in Park Slope opens ChatGPT and types 'best optometrist near me in Brooklyn.' Three names appear. Yours isn't one of them. She calls the first one."*
- Large Instrument Serif italic quote treatment
- Slow fade-in on scroll

### 3. Proof — Case Studies
Two cards side by side (stack on mobile):
- **Nostrand Optical**: query badge, 4 rich results stat, screenshot artifact, live link
- **Brooklyn BJJ**: query badge, AI search citation, blog count, live link
- No % growth claims — artifact-only proof

### 4. Pricing
Three tier cards (Basic / Standard★ / Premium):
- 3D tilt hover effect
- Standard card: amber border + "Most Popular" badge
- Prices clearly displayed, features listed with checkmarks
- Single CTA per card: "Get Started"

### 5. How It Works
- 3 numbered steps, plain English only
- *"I rewrite your site so AI can read it. I add invisible markup (called Schema.org) that tells ChatGPT what your business is and why to recommend it. I publish content AI cites."*
- First and only mention of Schema.org on the page (defined inline)

### 6. Final CTA
- *"Not sure if this applies to you? Book a 30-minute call. I'll run your business through an AI search audit live — no pitch, no pressure."*
- Single amber button: "See if AI is recommending your competitors"

## /audit Page
- 3-question intake (business type, neighborhood, website URL)
- On complete → Calendly embed renders
- Same dark aesthetic

## Schema.org (lib/schema.ts)
- Organization: Signal, Brooklyn NY, founder Josh
- Service: GEO / local SEO optimization
- FAQPage: 5 questions from CLAUDE.md

## File Structure
```
app/
  layout.tsx        — fonts, metadata, cursor, grain overlay
  page.tsx          — section assembly
  audit/page.tsx    — intake form + Calendly
  globals.css       — CSS vars, grain keyframe, custom cursor
components/
  Hero.tsx
  Problem.tsx
  CaseStudies.tsx
  Services.tsx
  HowItWorks.tsx
  FinalCTA.tsx
  CursorFollower.tsx
  GrainOverlay.tsx
  MagneticButton.tsx
lib/
  schema.ts
```

## Accessibility
- Contrast ≥ 7:1 all text
- `prefers-reduced-motion` respected everywhere
- Semantic headings h1→h6 in order
- CTA is real `<a>` or `<button>` with descriptive label
- Alt text on all proof images reads as proof
