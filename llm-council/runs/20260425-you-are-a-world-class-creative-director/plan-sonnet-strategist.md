# Plan

## Overview

Three entirely distinct visual identities for Signal — a Brooklyn AI search agency. Each direction rejects the expected SaaS agency aesthetic. No amber. No gradients that feel like a 2022 Dribbble shot. Each direction starts from a cultural position, not a color picker. The recommendation resolves the central tension: a Brooklyn dentist needs to feel trust and urgency, while a Brooklyn designer needs to feel the urge to screenshot. The winning direction earns both without compromising either.

## Scope

- In: 3 complete visual directions (typography, color, layout, animation, hero design, signature detail, conversion risk); recommendation with explicit reasoning; developer-ready specs (exact hex codes, font names, easing curves, layout rules)
- Out: Code implementation; real photography; changes to locked copy; amber, gold, or yellow in any form

---

## Phases

### Direction 1 — "THE LEDGER"

**Concept:** *Authority without arrogance.* Signal is not a startup. It is an operator. This site looks like a financial institution that hired a great designer, not a design studio that learned marketing.

**Typography System**
- Display: `Fraunces` — variable font, heavy weight (900), optical size lg. A serif with personality — editorial, confident, slightly literary. At 96px it feels like a newspaper front page. Not what you expect on an agency site.
- Body: `Syne` — 400/16px, leading 1.65. Geometric but warm. Pairs with Fraunces without competing.
- Mono: `DM Mono` — 400/13px, tracking 0.02em. Used for query badges, labels, stat callouts.
- Why unexpected: Fraunces was designed for editorial use. On a local SEO site, a heavy variable serif feels like a statement — this person knows what they're doing. It signals taste without screaming "creative."

**Color Palette**
- `#F5F2ED` — Bone. The background. Not white. Off-white with warmth, like old newsprint. Feels premium without being clinical.
- `#0D0D0D` — Near-black for all type and borders.
- `#C41E3A` — Cardinal red. The single accent. Used only on CTAs, stat numbers, and the active audit button. A color that means urgency, emergency, action. Brooklyn business owners respond to urgency. Designers notice the restraint.
- Cultural logic: Bone + near-black + cardinal red is the palette of institutions that have been around long enough to stop trying. The New York Times. The Standard hotel. Barbuto. Signal belongs in that conversation.

**Layout Architecture**
- 12-column grid, 24px gutters
- Every section has a ruled top border — 1px `#0D0D0D` line edge-to-edge, like a ledger
- Hero: left column (65%) contains headline + body + CTA; right column (35%) contains the proof artifact card, pinned to the top of the viewport on scroll until the problem section begins
- Sections alternate between full-bleed white and bone — creating rhythm without color
- Case study cards: newspaper-column layout, 2-col on desktop, text-heavy, dates/query strings in mono above each card
- Pricing section: structured like a financial comparison table, not a "card deck"
- One unconventional move: the section numbers (`01 PROBLEM`, `02 PROOF`, etc.) are set vertically in the left margin, rotated 90°, in DM Mono at 11px — visible on desktop, hidden on mobile

**Animation Philosophy**
- Slow is confident. No snap, no bounce.
- Scroll reveal: `opacity 0→1`, `translateY 16px→0`, duration `600ms`, easing `cubic-bezier(0.25, 0, 0, 1)` (custom decelerate) — heavy, lands with weight
- Hero entrance: Fraunces headline splits by line, each line slides up from `translateY(100%)` behind a clip-path mask — a classic editorial reveal, 800ms per line, 120ms stagger
- Stat counters: count up when in view, duration proportional to number, no bounce
- CTA hover: cardinal red deepens to `#A01830`, underline draws left to right in 200ms
- Zero decorative motion — everything that moves communicates something

**Hero Section**
- Background: `#F5F2ED` full bleed
- Left column: 
  - `LOCAL SEO · BROOKLYN NY` in DM Mono 12px, tracked, `#0D0D0D/50%`, top of section
  - H1: "When Brooklyn asks ChatGPT," — Fraunces 900, 88px desktop / 52px mobile, `#0D0D0D`, line 1
  - H1 line 2: "your competitors answer." — same style
  - 24px gap
  - Subhead in Syne 400 18px, `#0D0D0D/70%`, max-width 480px
  - 40px gap
  - CTA button: cardinal `#C41E3A` background, white Syne 600 text, `px-10 py-4`, no border-radius (sharp rectangle — 0px radius is unexpected on a modern site), hover: `#A01830`
- Right column: proof card pinned, bordered in `1px #0D0D0D`, bone background, ChatGPT mockup inside
- Ruled line below hero, full-width

**Signature Detail**
The hero CTA is a rectangle with 0px border-radius — flat, institutional, precise. On hover, a thin cardinal red rule draws across the very bottom of the button (like an underline appearing on a text link, but on a button). The rule takes 200ms to draw left-to-right. This is the only animated element above the fold. Every other agency uses rounded buttons. This one doesn't.

**Conversion Risk**
Medium. Bone + cardinal feels unfamiliar to business owners expecting a "tech" aesthetic. Mitigation: the proof artifacts and stat numbers do the heavy lifting. If the visual feels unfamiliar, the words ("your competitors answer") and numbers (4 rich results, 10+ posts) must be unmistakable. The institutional aesthetic actually works in our favor — it signals: this person is legitimate, not a hustler.

---

### Direction 2 — "CONCRETE SIGNAL"

**Concept:** *The infrastructure of the city made legible.* Brooklyn is concrete, steel, water towers, loading docks. Signal made from the same materials. Raw but deliberate.

**Typography System**
- Display: `Unbounded` — wide, heavy (900), all-caps capable. A font that feels like stencil signage, infrastructure labels, industrial design. At large scale it reads like something bolted to a building.
- Body: `Mulish` — 300/16px, leading 1.7. Light and readable — creates maximum contrast with the heavy display.
- Mono: `JetBrains Mono` — 400/12px. Used for technical strings, queries, labels.
- Why unexpected: Unbounded is from the Google Fonts catalog but almost never used on agency sites — it's associated with crypto and streetwear. Recontextualizing it for a Brooklyn local SEO company is the move.
- Size system: H1 at 80px desktop / 48px mobile. Section headers at 48px, all caps, tracked 0.06em.

**Color Palette**
- `#1C1C1E` — Graphite. Darker than #0A0A0A, warmer than pure black. The background of a concrete wall at night.
- `#F0EDE8` — Warm white for all body text and secondary elements.
- `#00E5FF` — Electric cyan. One accent. The color of a neon sign reflected in a wet Brooklyn street. Not safe. Not amber. Completely unexpected on a local SEO site.
- Cultural logic: Graphite + warm white is dignified. The cyan hit is the neon sign in the window. It says: this is Brooklyn, this is 2026, and I know what AI is doing to your business. The combination is warm enough for a dentist and strange enough for a designer.

**Layout Architecture**
- 8-column grid, 32px gutters, full bleed sections
- Each section is separated by a full-width horizontal rule in `#F0EDE8/15%` — subtle but structural
- Hero: centered layout, H1 full-width at maximum size, centered, no left alignment. The headline is not in a box — it exists on the background directly, like a mural.
- Problem section: single column, max-width 680px, centered, massive type — the three lines of copy set at 40px Unbounded, stacked, center-aligned. Like a protest sign.
- Case study cards: concrete texture via `background: repeating-linear-gradient(...)` (subtle, 2% opacity) — cards feel like concrete blocks
- Pricing: Three panels that fill the viewport horizontally. On desktop, they sit side by side. On hover, a panel "expands" — the others compress slightly (using CSS grid `fr` transitions).
- Unconventional move: Between the problem section and proof section, a full-bleed `#00E5FF` band — 100% viewport width, 4px tall. Nothing else. Just a line of cyan that cuts the page like a wire.

**Animation Philosophy**
- Fast and purposeful. Cut, don't glide.
- Scroll reveal: `opacity 0→1` only, duration `400ms`, easing `cubic-bezier(0.4, 0, 0.2, 1)` — no Y transforms. Elements don't float up, they appear.
- Hero headline: letters of each word reveal behind a clip-path that opens left-to-right. Duration 600ms per word, 80ms stagger. Unbounded at 80px revealing letter by letter is hypnotic.
- Cyan accent appears last in the entrance sequence — the line between sections draws from left to right in 1200ms on first scroll past it.
- Pricing hover: the expanding panel effect uses `transition: flex 400ms cubic-bezier(0.4, 0, 0.2, 1)`.
- Stat counters: count up, duration 1200ms, easing `ease-out`.

**Hero Section**
- Background: `#1C1C1E` full bleed
- Center of viewport:
  - `BROOKLYN · AI SEARCH · 2026` in JetBrains Mono 11px, `#F0EDE8/40%`, letter-spacing 0.2em, centered, top padding 20vh
  - H1: "When Brooklyn asks ChatGPT," — Unbounded 900, 80px desktop / 44px mobile, `#F0EDE8`, center-aligned, no max-width
  - H1 line 2: "your competitors answer." — same, but "your competitors" in `#00E5FF`
  - 32px gap
  - Subhead: Mulish 300, 18px, `#F0EDE8/70%`, max-width 560px, centered
  - 48px gap  
  - CTA: Unbounded 700, 14px tracked, all-caps, `#1C1C1E` text on `#00E5FF` background. `px-10 py-5`. 2px border-radius. On hover: background `#00C8E0`, subtle shadow.
  - Centered below copy.
- No right column. Full attention on the words.

**Signature Detail**
"your competitors" in the H1 is set in `#00E5FF` while the rest is `#F0EDE8`. No animation — it's just there, already highlighted, like a search result. Every person who lands on the page immediately reads that phrase differently. Their eyes lock on it. This is the only colored text on the above-the-fold view. It's not a decoration — it's the point.

**Conversion Risk**
High for business owners without design context. "Electric cyan on graphite" reads "tech company" not "local agency I can trust." Mitigation: the centered layout and full-width headline feel BIG and confident — business owners respond to size and authority. The Unbounded font has a solidity to it. And the copy is doing the fear-work. Lead with the message, let the design be the confidence signal.

---

### Direction 3 — "PRINTED MATTER"

**Concept:** *What if the most advanced thing on the internet looked like it was made by hand?* Signal runs counter to every other AI company website. The more AI there is in the world, the more human handcraft signals trust.

**Typography System**
- Display: `Playfair Display` — 900, italic for emphasis, 88px desktop. An old-style serif that feels like a broadsheet. Unexpected on an AI site.
- Body: `Source Sans 3` — 400/17px, leading 1.75. Workhorse legibility.  
- Mono: `Courier Prime` — 400/13px. Old typewriter mono. Used for query strings and price labels.
- Accent inline: italicized Playfair used mid-sentence for emphasis — not a heading style, a rhetorical style.
- Why unexpected: Playfair on an AI company website in 2026 is a statement. Every competitor looks like Linear.app. This looks like a newspaper that understood search before Google did.

**Color Palette**
- `#FAFAF7` — Near-white with green undertone. The warmth of paper under good light.
- `#1A1A18` — Warm near-black. Not flat, not cold.
- `#2D6A4F` — Forest green. The unexpected accent. Calm, established, not corporate. The color of a trusted institution (old money, academia, long-standing practices). 
- Cultural logic: Green as an agency accent in 2026 is genuinely rare. After years of purple and amber and orange, a deep forest green reads as: settled, serious, here to stay. A Brooklyn dentist responds to "settled and serious." A designer notices the restraint and the reference to print culture.

**Layout Architecture**
- 10-column grid with generous margins — 15% left/right on desktop, creating a centered reading zone that feels like a book
- Section headers set in small caps (`font-variant: small-caps`), Playfair, forest green — classical typographic hierarchy
- Case study cards: structured like editorial features — large pull quote in Playfair italic, attribution below, narrow column of details
- Problem section: the three lines of copy set as a poem — each on its own line, ragged right, Playfair italic at 56px, single column, vast whitespace around it
- Pricing: not cards — a comparison table in the style of a magazine's annual report. Forest green headers, ruled rows, Courier Prime for prices.
- Unconventional move: the footer is designed as a broadsheet masthead — "SIGNAL · EST. 2026 · BROOKLYN, NY" in small caps, centered, with a byline: "Built by a human. For humans who want to be found by machines."

**Animation Philosophy**
- Absolutely minimal. Confidence is stillness.
- Scroll reveal: `opacity 0→1` only, duration `800ms`, easing `ease` — slow, settled
- Zero Y transforms. Nothing floats. Everything was already there; we're just looking at it now.
- The only "active" animation: when stats come into view, the number counts up in Courier Prime, as if being typed on a machine. Duration: 1500ms. 
- CTA hover: forest green background deepens 15%, a fine underline appears below the text in 150ms.
- No entrance sequence. The page is simply there. Fully formed. On load.

**Hero Section**
- Background: `#FAFAF7`
- Layout: single column, max-width 760px, centered, top padding 18vh
- Above headline: `Signal` in small-caps Playfair 14px, forest green, with a fine line to its left — like a newspaper section label
- H1: "When Brooklyn asks ChatGPT," — Playfair 900, 80px desktop / 48px mobile, `#1A1A18`, ragged right (not centered), natural line breaks
- H1 line 2: "your competitors answer." — same, but "your competitors" is italicized
- 28px gap
- Subhead: Source Sans 3 400, 19px, `#1A1A18/75%`, max-width 600px, leading 1.7
- 48px gap
- CTA: forest green `#2D6A4F` background, `#FAFAF7` Source Sans 3 600 text, `px-10 py-4`, 4px border-radius
- Below CTA: secondary link in Playfair italic, forest green, underline: "see how we did it for a Brooklyn optometrist →"
- Proof card below (after fold): bordered in `1px #1A1A18/15%`, `#FAFAF7` bg, query badge in forest green small-caps

**Signature Detail**
The problem section's three lines of copy — "A patient in Park Slope opens ChatGPT and types 'best optometrist near me in Brooklyn.'" / "Three names appear. Yours isn't one of them." / "She calls the first one." — are set in Playfair italic at 60px, each on its own line, with the spacing of a poem. Between "Three names appear." and "Yours isn't one of them." — there is a full line of whitespace. The pause is the design. No one else does this. Most agency sites pack content. This one breathes. The whitespace is the argument.

**Conversion Risk**
Low-to-medium. Forest green and editorial typography feel like a trusted professional — exactly right for a dentist or gym owner. The risk: it might feel too quiet. A business owner in a hurry might scroll past without urgency. Mitigation: the problem section's poetic format is actually more alarming than a bulleted list. The pause between lines creates dread. And the proof artifacts (rich results, AI citations) provide the credibility. The CTA stands out clearly on an otherwise text-dominant page.

---

## Testing Strategy

**If launched:**
- A/B test Direction 1 (The Ledger) vs. Direction 3 (Printed Matter) for primary conversion — both are business-owner-safe
- Track: scroll depth to #proof section, CTA click rate, /audit page completion rate
- Qualitative: share each direction on Twitter/design communities and track screenshot/save rate as a proxy for designer approval
- Heuristic: if the bone + cardinal palette causes bounce rates above 65%, switch to Direction 3 within 72 hours

**For design validation before build:**
- Show a static hero mockup of each direction to 3 Brooklyn business owners (no explanation, just ask: "what does this company do? would you trust them?")
- Show same to 3 designers and ask: "does this make you want to know who built it?"

## Risks

1. **Direction 1 (The Ledger)**: Cardinal red CTA may feel aggressive to some business owners. Mitigation: the institutional typography surrounds it with gravitas.
2. **Direction 2 (Concrete Signal)**: Cyan-on-graphite is genuinely polarizing for non-designers. Highest risk direction for business-owner conversion, highest reward for designer attention.
3. **Direction 3 (Printed Matter)**: May read "too quiet" and not activate urgency. Mitigation: the problem section's spacing creates more dread than any animation could.
4. **All directions**: No real photography limits credibility proof. Placeholder mockups must be designed to look intentionally designed, not accidentally empty.

## Rollback Plan

If the winning direction performs poorly (audit page completion < 15%), revert to Direction 3 (Printed Matter). It is the most universally legible, the lowest technical complexity to implement, and the easiest for a non-designer to trust. Keep the copy locked. Change only the visual wrapper.

**Recommended Direction: Direction 1 — "THE LEDGER"**

The tension: designers screenshot bold moves. Business owners trust legibility and authority.

Direction 1 resolves this without compromise. Fraunces at 900 weight is bold enough to stop a designer mid-scroll — it's unexpected, literary, institutional. But bone + near-black + cardinal red is legible to anyone. The 0px-radius CTA button is the only truly "weird" element, and it's in service of action. The ruled borders and ledger structure signal: this person is organized, professional, not a freelancer throwing design at a wall.

Direction 2 (Concrete) is the designer favorite but the business-owner risk. Direction 3 (Printed Matter) is the safest conversion play but risks being too quiet to screenshot.

Direction 1 is the only direction that a Brooklyn dentist could read without hesitation AND that a designer would save to their inspiration folder. It is the recommendation.

## Edge Cases

- **Mobile (375px)**: Fraunces at 52px on a small screen is still powerful. The right column (proof card) collapses below CTAs. Ruled borders remain full-width on mobile — the ledger structure survives.
- **Accessibility**: Bone (`#F5F2ED`) + near-black (`#0D0D0D`) achieves 16:1 contrast ratio. Cardinal red (`#C41E3A`) on white: 5.6:1, meets WCAG AA. All motion respects `prefers-reduced-motion`.
- **No JavaScript**: Static layout is already complete. Animations are progressive enhancement only.
- **Long business names in query badges**: DM Mono handles wrapping gracefully; badges truncate with ellipsis after 2 lines.
- **Calendly embed on /audit**: bone background applies to surrounding page; Calendly widget's own styling is not overridden.
