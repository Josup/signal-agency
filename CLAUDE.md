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

## Design Direction
- Reference sites: Linear.app, Vercel.com, Stripe.com
- Dark background: #0A0A0A
- Accent: warm amber
- Typography: Instrument Serif (display) + Inter (body)
- Film grain overlay
- Premium, minimal, typographically strong
- Over-the-top entrance animation when site loads
- Scroll-triggered animations on every section
- Magnetic hover effects on buttons
- Smooth cursor follower
- Counter animations on stats

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
6. Run `npx vercel --prod` when complete
