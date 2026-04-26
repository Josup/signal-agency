# Signal Agency — Design Spec: The Ledger

**Direction:** THE LEDGER (Council verdict 2026-04-25)  
**Status:** Ready to implement  
**Replaces:** 2026-04-24-signal-agency-design.md (dark/amber direction — rejected)

---

## Concept

*Authority without arrogance.* Signal is not a startup. It is an operator. This site looks like a financial institution that hired a great designer — not a design studio that learned marketing.

Cultural reference: The palette and structure of institutions that have been around long enough to stop trying. The New York Times. The Standard hotel. Barbuto. Signal belongs in that conversation.

---

## Typography

| Role | Font | Weight | Size (desktop) | Size (mobile) | Leading | Tracking |
|------|------|--------|----------------|---------------|---------|----------|
| Display (H1) | Fraunces | 900 (variable, opsz=144) | 88px | 52px | 1.05 | -0.01em |
| H2 / section headers | Fraunces | 700 (opsz=72) | 48px | 32px | 1.1 | -0.005em |
| Body | Syne | 400 | 16px | 16px | 1.65 | 0 |
| Body emphasis | Syne | 600 | 16px | 16px | 1.65 | 0 |
| CTA label | Syne | 600 | 15px | 15px | 1 | 0.02em |
| Mono / labels | DM Mono | 400 | 13px | 12px | 1.5 | 0.02em |
| Eyebrow / nav | DM Mono | 400 | 12px | 12px | 1 | 0.06em |

**Google Fonts imports:** `Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900`, `Syne:wght@400;600;700`, `DM+Mono:wght@400`

**Why this works:** Fraunces was designed for editorial use. On a local SEO site, a heavy variable serif at 88px feels like a newspaper front page — it signals taste without screaming "creative agency." Syne pairs without competing. DM Mono keeps query badges and stats in the machine register.

---

## Color Palette

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `--surface` | `#F5F2ED` | Bone | Page background, card backgrounds |
| `--ink` | `#0D0D0D` | Near-black | All body type, borders, ruled lines |
| `--signal` | `#C41E3A` | Cardinal red | CTAs, stat numbers, active states |
| `--ink-muted` | `#0D0D0D99` | Near-black 60% | Eyebrow labels, muted subheads |
| `--signal-hover` | `#A01830` | Cardinal dark | CTA hover state |

**WCAG AA validation:**
- Body text: `#0D0D0D` on `#F5F2ED` → **16.4:1** (passes AAA)
- CTA button: `#FFFFFF` on `#C41E3A` → **5.6:1** (passes AA for normal text)
- Muted text: `#0D0D0D99` on `#F5F2ED` → ~6.5:1 (passes AA)

**Cultural logic:** Bone + near-black + cardinal red is not a design trend — it's an editorial tradition. Business owners read trust. Designers notice the restraint.

**Banned from this build:** amber, gold, yellow, purple gradients, teal, dark backgrounds as primary surface.

---

## Layout Architecture

- **Grid:** 12 columns, 24px gutters, max-width 1440px, side padding 48px desktop / 20px mobile
- **Rhythm:** Every section has a ruled top border — 1px `#0D0D0D` line, full bleed edge to edge. Like a ledger.
- **Section numbers:** `01`, `02`, `03`... in DM Mono 11px, rotated 90° CW, positioned in left margin (absolute, left: 12px). Visible only above 1024px. Text color `#0D0D0D/30%`.
- **Alternating density:** Hero + Proof are content-rich. Problem + HowItWorks breathe wide. No section has the same density as its neighbor.
- **Mobile reflow:** Right column (proof card) collapses below CTAs at 768px. Ruled borders remain full-width. Section numbers hidden below 1024px.

---

## Animation

**Motion language:** Slow is confident. Nothing bounces. Nothing decorates.

| Element | Animation | Duration | Easing | Delay |
|---------|-----------|----------|--------|-------|
| Hero H1 (per line) | `translateY(100%)→0` behind clip-path mask | 800ms | `cubic-bezier(0.25, 0, 0, 1)` | 120ms stagger per line |
| Hero subhead | `opacity 0→1` | 600ms | `cubic-bezier(0.25, 0, 0, 1)` | After last H1 line + 80ms |
| Hero CTA | `opacity 0→1` | 400ms | `ease` | After subhead + 60ms |
| Scroll sections | `opacity 0→1, translateY(16px→0)` | 600ms | `cubic-bezier(0.25, 0, 0, 1)` | 0ms (trigger on enter) |
| Stat counters | count up (numeric) | proportional to value | `ease-out` | on enter viewport |
| CTA hover | bottom rule draws L→R | 200ms | `ease-out` | 0ms |
| CTA bg | `#C41E3A → #A01830` | 200ms | `ease` | 0ms |

**prefers-reduced-motion:** All translateY and clip-path animations become instant opacity cuts. Stat counters display final value immediately. Rule draw on hover becomes instant.

---

## Hero Section

**Background:** `#F5F2ED` full bleed

**Layout:** 2-column split (65% left / 35% right on desktop, single column on mobile)

### Left column:
```
LOCAL SEO · BROOKLYN NY
```
→ DM Mono 12px, `#0D0D0D` at 50% opacity, letter-spacing 0.06em, top of section

```
When Brooklyn asks ChatGPT,
your competitors answer.
```
→ Fraunces 900, opsz 144, 88px desktop / 52px mobile, `#0D0D0D`  
→ Desktop line break: after "ChatGPT," (natural comma break)  
→ Mobile line break: "When Brooklyn asks / ChatGPT, your / competitors answer."  
→ Entrance: each line reveals via `translateY(100%)` behind a `overflow: hidden` wrapper, 800ms per line, 120ms stagger

24px gap

```
Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.
```
→ Syne 400, 18px, `#0D0D0D` at 70% opacity, max-width 480px, leading 1.65  
→ Entrance: opacity 0→1, 600ms, after H1 complete

40px gap

**CTA button:**
- Text: "See if AI is recommending your competitors"
- Font: Syne 600, 15px, letter-spacing 0.02em
- Background: `#C41E3A`
- Text color: `#FFFFFF`
- Padding: `px-10 py-4` (40px / 16px)
- Border-radius: **0px** (sharp rectangle — the move)
- Hover: background → `#A01830`, bottom rule draws L→R in 200ms (1px `#FFFFFF` line at very bottom edge of button)
- Links to: `/audit`

**Proof artifact (below CTA on desktop, below CTA stack on mobile):**
- Small bordered card, `1px solid #0D0D0D`, `#F5F2ED` bg
- Contains: ChatGPT mockup showing a Brooklyn search query with competitor names appearing — Signal's client absent
- Label above in DM Mono 11px: "DATED PROOF · APR 2025"
- Caption below in Syne 400 12px, `#0D0D0D/60%`: "Screenshot of actual ChatGPT results before Signal engagement"

### Right column (desktop only):
- Proof card (larger version) — `position: sticky, top: 24px` — stays pinned until Problem section begins
- Border: `1px solid #0D0D0D`
- Background: `#F5F2ED`
- Contains ChatGPT UI mockup (no real screenshot — designed placeholder)

**Ruled line** below hero, full-width, `1px solid #0D0D0D`

---

## Signature Detail

**The 0px-radius CTA button with drawing underline.**

The CTA is a flat rectangle — no softness, no rounding. Every other agency in 2026 uses 8–12px radius buttons. This one doesn't. On hover, instead of a color flash, a 1px cardinal line draws across the absolute bottom edge of the button from left to right in 200ms using a CSS pseudo-element with `width: 0% → 100%` transition. 

This is the only animated element above the fold. It is also the only truly unexpected element. The drawing line makes the action feel earned.

**Implementation:** `button::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #FFFFFF; transition: width 200ms ease-out; } button:hover::after { width: 100%; }`

---

## Per-Section Specs

### The Invisible Business (Problem)
- Background: `#F5F2ED`
- Max-width: 760px, centered
- Copy set in Syne 400 22px, leading 1.7 — ≤80 words, no CTA
- Three statements: each on its own line, with 24px gap between
- `id="invisible-business"`

### Case Studies (Proof)
- Two-column newspaper layout on desktop, single column on mobile
- Above each card: DM Mono 12px label — `NOSTRAND OPTICAL · CROWN HEIGHTS` with query badge
- Card border: `1px solid #0D0D0D`
- Inside: stat numbers in Fraunces 700 48px, `#C41E3A`; descriptions in Syne 16px
- Query strings in DM Mono 13px, `#0D0D0D` bg with `#F5F2ED` text (inverted badge)
- `id="proof"`

### Pricing
- **Not a card deck.** A structured comparison table styled like a financial document.
- Three columns: Basic / Standard / Premium
- Ruled rows: `1px solid #0D0D0D/15%` between each feature row
- Prices in Fraunces 700 40px, `#0D0D0D`
- "Most Popular" label: DM Mono 11px, `#C41E3A`, top of Standard column
- Standard column has a `1px solid #C41E3A` full border
- `id="pricing"`

### How It Works
- Three numbered steps: `01`, `02`, `03` in DM Mono 13px, `#C41E3A`
- Step title: Fraunces 700 28px
- Step body: Syne 400 16px
- Layout: single column max-width 640px centered on desktop; full-width on mobile
- Schema.org HowTo JSON-LD here
- `id="how-it-works"`

### Final CTA
- Background: `#0D0D0D` (only dark section — creates maximum contrast before close)
- Text: `#F5F2ED`
- Headline: Fraunces 900 56px, `#F5F2ED`
- Body: Syne 400 18px, `#F5F2ED/70%`
- CTA button: same 0px-radius treatment, but inverted — `#F5F2ED` bg, `#0D0D0D` text
- Hover: rule draws in `#0D0D0D` across bottom

---

## Stack Notes

- **Next.js 14 App Router** — typography components are server components (no 'use client' needed for static type)
- **Framer Motion** — used for: hero clip-path entrance, scroll reveal (whileInView), stat counters (useMotionValue + useSpring), CTA hover (handled in CSS via pseudo-element, not Framer)
- **Tailwind** — add custom tokens in `tailwind.config.js`:
  ```js
  colors: {
    surface: '#F5F2ED',
    ink: '#0D0D0D',
    signal: '#C41E3A',
    'signal-hover': '#A01830',
  }
  ```
- **CTA underline draw** — CSS pseudo-element only, no JS needed
- **Ruled borders** — Tailwind `border-t border-ink` class (after adding `ink` token)
- **Easing** — `cubic-bezier(0.25, 0, 0, 1)` in Framer Motion: `ease: [0.25, 0, 0, 1] as [number, number, number, number]`
- **Clip-path hero reveal** — each H1 line wrapped in `overflow-hidden` div; inner `motion.span` animates `y: "100%" → 0`
- **Font loading** — `next/font/google`, `display: 'swap'`, subset latin
- **No grain overlay** — removed from new direction
- **No cursor follower** — removed from new direction
- **No amber** — if grep finds amber/gold/yellow outside a negative declaration, it's a bug

---

## CLAUDE.md Updates Required

Update `CLAUDE.md` Design Direction section to reflect:
- Background: `#F5F2ED` (Bone, not dark)
- Accent: Cardinal red `#C41E3A` (not amber)
- Display font: Fraunces 900 (not Instrument Serif)
- Body font: Syne 400 (not Inter)
- Mono font: DM Mono (new addition)
- Direction name: THE LEDGER
- Remove references to: grain overlay, cursor follower, amber, dark background as primary
