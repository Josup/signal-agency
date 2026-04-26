# Plan

## Overview
Develop 3 completely distinct visual design directions for Signal (Brooklyn AI search agency website), each fully specified across typography, color, layout, animation, hero design, and conversion strategy. Validate against locked constraints (no amber/gold/yellow, preserved copy, Next.js 14 buildable). Deliver comparative analysis and single recommendation balancing designer appeal with Brooklyn business-owner conversion.

## Scope
- In:
  - Direction 1: Concept + philosophy, typography system (exact fonts, sizes, weights, leading, tracking, justification), color palette (hex values + usage + cultural logic), layout architecture (grid, whitespace, unconventional choices), animation philosophy (easing, duration, interaction), hero section design (exact layout + locked copy rendered), signature detail, conversion risk assessment
  - Direction 2: Same 8 sections, visually distinct from Direction 1
  - Direction 3: Same 8 sections, visually distinct from Directions 1 and 2
  - Comparative matrix (3 directions Ã— 8 dimensions)
  - Tension analysis: designer appeal vs. business-owner conversion
  - Final recommendation with explicit reasoning
  - Secondary direction identified as backup

- Out:
  - Implementation code or interactive prototypes
  - Photography or detailed visual mockups
  - Changes to locked copy (hero H1, subhead, CTA)
  - Amber, gold, or yellow in any direction
  - Directions that feel related or overlap aesthetically
  - Vague specifications (everything must be actionable by a developer)

## Phases

### Phase 1: Codebase Audit & Constraint Lock
**Goal**: Establish baseline understanding of Signal project state and lock all constraints.

#### Task 1.1: Read Signal Codebase & Current State
- Location: C:\Users\Josh\projects\signal-agency/ (app/, components/, public/, package.json, tailwind.config.js)
- Description: Survey existing Next.js 14 setup, Framer Motion integration, Tailwind configuration, current component structure, any existing design tokens or animations.
- Estimated Tokens: 400
- Dependencies: None
- Steps:
  - Review app/layout.tsx, app/page.tsx, globals.css
  - Check tailwind.config.js for existing color/spacing/animation tokens
  - Review package.json for Framer Motion version, easing libraries (e.g., framer-motion/animation libraries)
  - Identify any existing components or animation patterns to understand project conventions
- Acceptance Criteria:
  - Current project state documented (what exists, what's stubbed, what's from Next.js template)
  - Framer Motion version confirmed (so easing/duration specs will be compatible)
  - Tailwind setup understood (so hex colors can be added as custom tokens)
  - No ambiguity on buildability constraints

#### Task 1.2: Constraint Checklist & Target Audience Definition
- Location: [Embedded in plan document]
- Description: Create explicit constraint matrix and detailed target persona definitions.
- Estimated Tokens: 300
- Dependencies: Task 1.1
- Steps:
  - Lock exact locked copy: H1 "When Brooklyn asks ChatGPT, your competitors answer." | Subhead "Customers now ask AI who to call. Signal makes sure that answer is you â€” in ChatGPT, Google AI Overviews, and Perplexity." | Primary CTA "See if AI is recommending your competitors"
  - Confirm: all 3 directions must use NO amber, gold, or yellow (primary or accent)
  - Confirm: all 3 directions must include 6 sections (Hero, Invisible Business, Case Studies, Pricing, How It Works, Final CTA)
  - Define primary audience persona: Brooklyn local business owner (dentist, gym owner, optometrist, plumber, lawyer), non-technical, trust-driven, results-oriented, skeptical of fancy design, wants proof
  - Define secondary audience: designers and agency owners who screenshot and share, value innovation, cultural awareness, unexpected typography, "Dover Street Market energy"
- Acceptance Criteria:
  - Locked copy verified exact character-for-character
  - All constraints documented and non-negotiable
  - Target personas detailed enough to evaluate conversion risk

---

### Phase 2: Direction 1 â€“ [Modernist Asymmetry]
**Goal**: Specify complete Direction 1 with all 8 sections. Establish bar for specificity. This direction prioritizes bold structural choices and unconventional layout.

#### Task 2.1: Direction 1 Concept & Philosophy
- Location: [Section 1 of 3-direction brief]
- Description: Define core concept, one-line philosophy, cultural/aesthetic rationale. Direction 1 should be unexpected typographically.
- Estimated Tokens: 350
- Dependencies: Task 1.2
- Steps:
  - Select aesthetic direction: modernist-with-asymmetry (think: editorial design, art book layouts, asymmetric balance, negative space as content)
  - Write one-line philosophy: "Information hierarchy through spatial tension, not visual noise."
  - Justify: Why does this concept work for a solo founder Brooklyn AI agency? (Answer: Modernist design signals sophistication + intellectual rigor, appeals to designers; asymmetry feels intentional and confident, not corporate)
  - Confirm: This concept is visually distinct from typical SaaS (not purple gradients, not centered grids, not safe)
- Acceptance Criteria:
  - Concept is named and articulated
  - One-line philosophy is memorable and defensible
  - Rationale explains why this works for both audiences

#### Task 2.2: Direction 1 Typography System
- Location: [Section 2 of 3-direction brief]
- Description: Select exact fonts, specify all sizes, weights, leading, tracking across display/body/mono tiers.
- Estimated Tokens: 450
- Dependencies: Task 2.1
- Steps:
  - Choose unexpected display font (not Instrument Serif, not Inter, not Helvetica): Examples: Courier Prime, IBM Plex Mono (for monospace modernity), Recoleta (serif + personality), Space Mono (grotesk + tension)
  - Choose body font: clean, readable, pairs with display
  - Choose mono font: technical content, code blocks
  - Specify exact type scale:
    - H1: [Font Name] [Size in rem/px] [Weight] [Line-height] [Letter-spacing]
    - H2: [Font Name] [Size] [Weight] [Line-height] [Letter-spacing]
    - H3: [Font Name] [Size] [Weight] [Line-height] [Letter-spacing]
    - Body: [Font Name] [Size] [Weight] [Line-height] [Letter-spacing]
    - Small: [Font Name] [Size] [Weight] [Line-height] [Letter-spacing]
  - Justify: Why do these fonts feel unexpected + right for modernist asymmetry concept?
- Acceptance Criteria:
  - All fonts are real and available (Google Fonts or system)
  - All sizes specified in both rem and px
  - All weights, leading, tracking specified with values (not vague descriptions)
  - Justification is specific and cultural (not generic)
  - Fonts are implementable in Tailwind CSS

#### Task 2.3: Direction 1 Color Palette
- Location: [Section 3 of 3-direction brief]
- Description: Define exactly 3 colors (hex values), usage rules, psychological + cultural logic. NO amber/gold/yellow.
- Estimated Tokens: 400
- Dependencies: Task 2.2
- Steps:
  - Choose 3 bold, unexpected colors. Examples: Deep teal + cream + burnt orange | Navy + pale green + red | Charcoal + cyan + coral
  - Provide exact hex values: #XXXXXX format
  - Define usage tiers:
    - Primary: where used (background, text, primary CTA)
    - Accent: where used (highlights, secondary CTAs, section dividers)
    - Neutral: where used (body text, borders, subtle elements)
  - Explain psychological logic: What does this palette evoke for Brooklyn business owners? (Trustworthy? Modern? Creative? Results-focused?)
  - Explain cultural logic: Why this palette for a solo founder agency? Does it feel personal or corporate? Does it reference Brooklyn aesthetics?
- Acceptance Criteria:
  - Exactly 3 hex values (no gradients, no "almost this color")
  - Usage rules are specific (not vague "accent color")
  - Both psychological + cultural reasoning provided
  - No amber/gold/yellow anywhere
  - Palette is distinct from typical SaaS palettes

#### Task 2.4: Direction 1 Layout Architecture
- Location: [Section 4 of 3-direction brief]
- Description: Define grid system, section structure, whitespace strategy, unconventional choices (asymmetry, bleeds, overlaps, full-bleed type, etc.).
- Estimated Tokens: 500
- Dependencies: Task 2.3
- Steps:
  - Define grid: 12-column | 8-column | asymmetric (specify exact column widths, gaps)
  - Describe whitespace philosophy: Generous negative space signals luxury + readability OR dense information signals authority? (Pick one and justify)
  - Identify 1â€“2 unconventional structural choices specific to modernist asymmetry:
    - Example: Hero headline spans full viewport width; subhead positioned in right column offset by 2 grid units
    - Example: Section intro text bleeds past right edge; content reflows asymmetrically on scroll
    - Example: Case study cards use different widths (one 6-col, one 5-col, creating visual tension)
  - Describe responsive behavior: How does asymmetric layout adapt to mobile? (Do elements reflow to single column? Do they stack in a different asymmetric arrangement?)
  - Explain why this layout serves modernist concept
- Acceptance Criteria:
  - Grid system is fully specified (column count, gaps, breakpoints)
  - At least 1 unconventional choice is clearly described and justified
  - Mobile responsive behavior is articulated
  - Layout structure can be implemented in Tailwind Grid/Flexbox
  - Layout reinforces the concept philosophically

#### Task 2.5: Direction 1 Animation Philosophy
- Location: [Section 5 of 3-direction brief]
- Description: Define what moves, how it moves, easing curves, durations, first 3-second experience.
- Estimated Tokens: 450
- Dependencies: Task 2.4
- Steps:
  - Define page load (0â€“3 seconds):
    - What enters first? (Example: background color fades in 0.4s ease-in; headline text staggered in 0.6s ease-out; subhead delayed 0.3s, fades in 0.5s)
    - Does camera move, zoom, or pan? (Example: viewport slightly pans left to right as content fades in)
    - Is there audio or particle effects? (No audio in brief; particles optional)
  - Define scroll animations (as user scrolls):
    - Section entrance: fade-in | slide-up | scale-up | custom (specify easing, duration, trigger point)
    - Text countups (stats, metrics): duration, easing, trigger
    - Parallax or depth effects: yes/no, if yes then how much (e.g., 2x parallax, 0.5x parallax)
  - Define interaction (hover, click):
    - Button hover: change color | scale | underline | custom
    - Card hover: lift | tilt | glow | custom
    - Link hover: underline slide | color transition | custom
  - Specify exact easing functions: linear | ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | custom
  - Specify exact durations: 0.3s | 0.6s | 0.8s | 1.2s (in milliseconds)
  - Explain motion language: What does this motion vocabulary communicate? (Precision? Fluidity? Confidence? Playfulness?)
- Acceptance Criteria:
  - First 3 seconds is vivid and specific
  - All animations have easing + duration specified
  - Easing functions are Framer Motion compatible
  - Motion language serves conversion (not just eye candy)
  - Scroll + interaction animations specified
  - Animations reinforce modernist concept (e.g., sharp, precise, intentional movements, not loose or playful)

#### Task 2.6: Direction 1 Hero Section Design
- Location: [Section 6 of 3-direction brief]
- Description: Describe exact hero layout, position, color, size, behavior for all elements including locked headline and subhead.
- Estimated Tokens: 500
- Dependencies: Task 2.5
- Steps:
  - Render locked H1 "When Brooklyn asks ChatGPT, your competitors answer." in Direction 1 typography:
    - Font: [from Task 2.2]
    - Size: [exact rem/px] | Weight: [exact weight] | Color: [hex from Task 2.3] | Leading: [exact value] | Tracking: [exact value]
    - Line breaks: where does text naturally break? (Specify for desktop + mobile, e.g., "When Brooklyn asks ChatGPT, / your competitors answer.")
    - Positioning: left-aligned | centered | right-aligned | split across viewport
  - Render subhead "Customers now ask AI who to call. Signal makes sure that answer is you â€” in ChatGPT, Google AI Overviews, and Perplexity." in same typography system:
    - Font: [from Task 2.2] | Size: [exact] | Weight: | Color: | Leading: | Tracking:
    - Positioning relative to H1
  - Describe CTA button:
    - Text: "See if AI is recommending your competitors"
    - Button color: [hex] | Button text color: [hex] | Button size: [width/height in rem]
    - Button positioning: below subhead | right column | floating | custom
    - Button on hover: [animation from Task 2.5]
  - Describe background:
    - Solid color | Gradient | Pattern | Animation | Hero image placeholder (just describe, don't implement photo)
  - Describe supporting elements:
    - Accent lines, icons, shapes? (e.g., thin vertical rule dividing headline; small icon next to CTA)
    - Data viz or proof elements? (e.g., "ChatGPT screenshot showing AI recommendation")
  - Describe scroll behavior: Does hero content animate out as user scrolls? (Fade, slide, parallax, sticky?)
- Acceptance Criteria:
  - Every hero element has position + color + size specified
  - Locked copy is preserved exactly, rendered in chosen typography
  - Hero is specific enough for a developer to implement without guessing
  - Hero design feels distinctive and on-brand for modernist concept
  - Button behavior is clear
  - Mobile responsiveness of hero is addressed

#### Task 2.7: Direction 1 Signature Detail
- Location: [Section 7 of 3-direction brief]
- Description: Identify 1 micro-interaction, layout detail, or visual move that's unforgettable and ownable. The thing someone would try to steal.
- Estimated Tokens: 300
- Dependencies: Task 2.6
- Steps:
  - Choose one specific moment/interaction that stands out:
    - Example: As user scrolls past each case study card, the card's background color shifts subtly, creating a reading rhythm
    - Example: Section dividers are not horizontal lines; they're asymmetric vertical cuts that shift position based on scroll position
    - Example: Hover state on pricing cards reveals hidden text about what's included (progressive disclosure)
    - Example: Case study numbers (e.g., "4 rich results in 48 hours") animate with a mechanical counter that overshoots then settles (like a film reel)
  - Justify: Why is this moment memorable and core to the concept?
  - Specify: Where does this detail appear? How often? What is the interaction model?
  - Buildability: Confirm it's implementable with Tailwind + Framer Motion (not dependent on Flash or WebGL)
- Acceptance Criteria:
  - Signature detail is specific, not vague
  - It's visually/interactionally distinct
  - It reinforces the overall concept
  - It's ownable (not a common interaction pattern)
  - It's buildable

#### Task 2.8: Direction 1 Conversion Risk Assessment
- Location: [Section 8 of 3-direction brief]
- Description: Honestly assess whether modernist asymmetry might alienate non-technical Brooklyn business owners. Propose mitigations.
- Estimated Tokens: 350
- Dependencies: Task 2.7
- Steps:
  - Identify 1â€“2 specific design choices that might confuse target audience:
    - Risk 1: Asymmetric layout might feel "unfinished" or "broken" to non-designers. Mitigation: Add subtle visual cues (connecting lines, color blocking) that signal intentionality.
    - Risk 2: Modernist typography (e.g., Courier Prime) might read "cold" or "corporate." Mitigation: Pair with warm copy tone and personal founder story in About section.
  - Propose concrete mitigation: not vague ("make it more accessible") but specific (e.g., "add descriptive alt text for layout asymmetries," "include customer testimonials showing trust," "use shorter sentences in body copy")
  - Rate conversion risk: low | medium | high (with reasoning)
  - Assess: Does this direction balance designer appeal with business-owner trust? (Example: Yes, because asymmetry feels confident not chaotic, and copy remains clear and benefit-focused)
- Acceptance Criteria:
  - Risk is specific and credible
  - Mitigation is actionable and concrete
  - Risk rating is justified
  - Assessment is honest, not defensive

---

### Phase 3: Direction 2 â€“ [Brutalist Density]
**Goal**: Specify Direction 2 with all 8 sections. Direction 2 must be visually and conceptually distinct from Direction 1 (opposite aesthetic: dense, unrefined, maximum information, unconventional colors).

#### Task 3.1â€“3.8: [Replicate Phase 2 structure for Direction 2]
- Estimated Tokens: 3,200 total
- Dependencies: Phase 2 complete
- Constraint: Direction 2 must be visually and conceptually distinct from Direction 1:
  - If Direction 1 is modernist-with-asymmetry, Direction 2 might be brutalist-with-density (grid-based, no whitespace, monolithic typography, unexpected color saturation)
  - OR maximalist-with-texture (layered, dense information density, collage-like, saturated colors, playful)
  - OR deconstructed-editorial (overlapping elements, visible grid, type as decoration, archival color palette)
  - Choose one and fully specify all 8 sections
- Acceptance Criteria:
  - All 8 sections complete and specific
  - Direction 2 feels genuinely different from Direction 1 (different aesthetic family, different layout logic, different color story, different animation personality)
  - No constraints violated
  - All specs are buildable

---

### Phase 4: Direction 3 â€“ [Maximalist Color]
**Goal**: Specify Direction 3 with all 8 sections. Direction 3 must be distinct from Directions 1 and 2. Should balance between modernist restraint and brutalist excess (third path).

#### Task 4.1â€“4.8: [Replicate Phase 2 structure for Direction 3]
- Estimated Tokens: 3,200 total
- Dependencies: Phases 2 and 3 complete
- Constraint: Direction 3 must be distinct from Directions 1 and 2:
  - If Direction 1 is minimalist and Direction 2 is maximal, Direction 3 might be neo-classical (symmetry + movement, traditional grid + unexpected animation, restrained color + high contrast, premium typography + playful microinteractions)
  - OR futurist-minimal (clean geometry, high contrast, sci-fi typography, bold single accent, aggressive animations)
  - OR nostalgic-modern (Art Deco or 70s aesthetic, saturated colors, serif + modern sans pairing, groovy animations, vintage color grading)
  - Choose one and fully specify all 8 sections
- Acceptance Criteria:
  - All 8 sections complete and specific
  - Direction 3 is visually distinct from Directions 1 and 2
  - No constraints violated
  - All specs are buildable

---

### Phase 5: Comparative Analysis & Recommendation
**Goal**: Compare all 3 directions across key dimensions, identify designer appeal vs. business-owner conversion tension, and recommend best direction.

#### Task 5.1: Comparative Matrix
- Location: [Section 9 of 3-direction brief]
- Description: Side-by-side comparison of all 3 directions across 8 dimensions.
- Estimated Tokens: 400
- Dependencies: Phases 2, 3, 4 complete
- Steps:
  - Build matrix:
    | Dimension | Direction 1 | Direction 2 | Direction 3 |
    | Concept | [1-line] | [1-line] | [1-line] |
    | Typography | [key fonts] | [key fonts] | [key fonts] |
    | Color | [palette summary] | [palette summary] | [palette summary] |
    | Layout | [structure type] | [structure type] | [structure type] |
    | Animation | [personality] | [personality] | [personality] |
    | Signature Detail | [brief desc] | [brief desc] | [brief desc] |
    | Designer Appeal | [rating: high/med/low + reason] | [rating + reason] | [rating + reason] |
    | Business-Owner Conversion | [rating: high/med/low + reason] | [rating + reason] | [rating + reason] |
  - For each direction, highlight:
    - Strengths (what this direction does best)
    - Weaknesses (what this direction sacrifices)
    - Primary audience fit (designer vs. business owner)
- Acceptance Criteria:
  - Matrix is complete and honest
  - Strengths and weaknesses are specific (not generic)
  - Both audiences are addressed

#### Task 5.2: Tension Analysis
- Location: [Section 10 of 3-direction brief]
- Description: Explicitly articulate the tension between designer appeal (experimental, culturally aware, unexpected) and business-owner conversion (clear, trustworthy, results-focused). Show where each direction lands.
- Estimated Tokens: 300
- Dependencies: Task 5.1
- Steps:
  - Define the tension: Designers screenshot sites that break the rules, use unexpected typography, have asymmetric layouts, and feel risky. Brooklyn business owners want clear value prop, fast load time, obvious CTAs, and trust signals. These often conflict.
  - Show where each direction lands:
    - Direction 1: [X-axis: designer appeal] [Y-axis: business-owner trust]. Example: "High designer appeal (modernist asymmetry is screenshot-worthy) but medium business-owner trust (asymmetry might read as unfinished)"
    - Direction 2: [same positioning]
    - Direction 3: [same positioning]
  - Identify the gap: Which direction (if any) bridges both audiences? Where is the gap?
- Acceptance Criteria:
  - Tension is clearly articulated
  - Each direction's position on designer-appeal â†” business-owner-trust spectrum is justified
  - Gap is identified

#### Task 5.3: Final Recommendation
- Location: [Section 11 of 3-direction brief]
- Description: Recommend 1 direction as primary choice. Explain why it's most likely to (a) stop a designer mid-scroll, and (b) make a Brooklyn dentist book a call. Address the tension explicitly.
- Estimated Tokens: 400
- Dependencies: Tasks 5.1, 5.2
- Steps:
  - Choose 1 direction as primary recommendation
  - Explain designer appeal: Why would this site be screenshot-worthy? (Unexpected typography? Bold color choice? Unforgettable micro-interaction? Cultural awareness?)
  - Explain business-owner conversion: Why would a Brooklyn dentist/gym owner feel trust + urgency to book a call? (Clear value prop? Social proof? Urgency language? Speed? Professionalism?)
  - Explain how this direction resolves the tension: How does it avoid alienating the business owner while remaining designer-worthy?
  - Identify secondary direction: Which is the backup choice if primary proves unexecutable or underperforms in testing?
  - Rate confidence: high/medium/low (with reasoning)
- Acceptance Criteria:
  - Recommendation is clear, decisive, and well-reasoned
  - Both audiences (designers and business owners) are explicitly addressed
  - Tension is resolved (not ignored)
  - Secondary direction is named
  - Confidence rating is justified

---

## Testing Strategy
- **Specification Completeness Check**: Each direction's 8 sections fully specified (exact fonts, exact hex colors, exact sizes, exact easing curves). No vague statements like "modern typography" or "bold color."
- **Constraint Validation**: All 3 directions validated against:
  - No amber/gold/yellow anywhere
  - Locked copy preserved exactly
  - All 6 sections included (Hero, Invisible Business, Case Studies, Pricing, How It Works, Final CTA)
  - Solo founder vibe, not corporate
  - Next.js 14 + Tailwind + Framer Motion buildable
- **Distinctness Validation**: After drafting, confirm no two directions are similar:
  - Direction 1 uses different aesthetic family than Direction 2
  - Direction 2 uses different layout logic than Direction 3
  - Direction 3 uses different color story than Direction 1
- **Audience Fit Check**: For each direction, assess:
  - Designer appeal: Is this screenshot-worthy? Would a designer recognize the cultural references and innovation?
  - Business-owner conversion: Does the value prop shine through? Is the CTA clear? Do trust signals (case studies, testimonials, results) feel authentic?
- **Buildability Review**: Each spec reviewed against:
  - Are all fonts real and available?
  - Are all hex colors valid?
  - Can Framer Motion implement these animations?
  - Does the layout spec work in Tailwind Grid/Flexbox?
- **Comparative Integrity**: Recommendation addresses both audiences explicitly (not just picking the "safest" direction).

## Risks
- **Risk: Directions lack sufficient distinctness** â€“ After drafting all 3, explicitly confirm each uses a different aesthetic family (modernist vs. brutalist vs. neo-classical, or similar triads). If two feel related, pivot one to a genuinely different concept.
- **Risk: Specifications are vague or incomplete** â€“ Exact font names, exact hex values, exact sizes in rem/px, exact easing functions. No generalities. Every detail must be actionable by a developer.
- **Risk: Design choices alienate business owners** â€“ For each direction, Task X.8 (conversion risk) honestly assesses alienation risk and proposes concrete mitigation. Recommendation process heavily weights business-owner conversion.
- **Risk: Tension between designer appeal and business-owner conversion is unresolvable** â€“ Recommendation process acknowledges this tension explicitly and shows how the chosen direction balances both without betraying either.
- **Self-critique: The 3 directions might naturally cluster toward "safe enough to convert but interesting enough for designers," losing the bold experimental edge.** Mitigation: Force intentional diversity: one direction bold/experimental/risky (high designer appeal, medium conversion), one direction conservative/conversion-focused (high conversion, medium designer appeal), one direction balanced. Let the recommendation choose. Don't let all 3 be "medium-medium."
- **Self-critique: Without actual interactive prototypes, "specificity" hides gaps (e.g., overlapping elements at mobile breakpoints; animation frame rate feel; typography rendering in production).** Mitigation: Each layout spec includes explicit mobile responsive behavior. Animation specs include note that easing/duration must be tested live before shipping. Specs are detailed enough for a developer to ask "what if?" questions, which is fineâ€”specifications aren't final implementations.

## Rollback Plan
- No code is written or committed in this phase. The deliverable is a plan document (this) and 3 complete creative briefs (Markdown with specifications).
- If a direction proves unspecifiable or unexecutable during drafting:
  - Pivot that direction to a different concept (e.g., if "brutalist density" becomes too complicated for Tailwind, shift to "editorial-deconstructed" instead)
  - Or, proceed with 2 directions (not ideal, but acceptable)
  - No commits, no deletions, fully reversible
- If recommendation conflicts with client feedback after delivery:
  - All 3 directions remain viable; recommendation is advisory not mandated
  - Client can choose any of the 3 directions to move into development
- If specifications are rejected as "not detailed enough":
  - Expand specific sections (e.g., add mobile breakpoint rules, add interaction state matrix, add performance budget guidelines)
  - No reversal needed; just incremental refinement

## Edge Cases
- **Locked copy is long and breaks hero layout**: Text size/weight/leading adjusted to fit, but copy preserved exactly. Example: "When Brooklyn asks ChatGPT," on one line, "your competitors answer." on the next.
- **Target audience (Brooklyn business owners) dislikes one direction**: All 3 directions are equally viable; recommendation explains tradeoffs. Client makes final call.
- **A unique color palette is hard to implement in Tailwind**: Provide exact hex values, add to tailwind.config.js as custom colors. Fallback to closest standard color if needed, but specify custom values first.
- **Animation easing feels different in production**: Specs include note that all animations must be tested in browser before launch. Easing curves are not final until tested live.
- **Mobile responsiveness breaks an asymmetric layout**: Spec includes mobile adaptation strategy. Signature detail has a mobile version (may be simplified). No asymmetry survives unchanged at <768px; reflow strategy specified.
- **Locked copy renders oddly in one direction's typography**: Font size/leading adjusted within bounds to make copy render beautifully. No copy changes. Example: "When Brooklyn asks ChatGPT" might fit on one line in Direction 1 but require two lines in Direction 2; both are acceptable as long as copy is identical.

## Open Questions
- After recommendation, should secondary direction be fully fleshed out or just named? (Answer: Just named, with brief rationale.)
- Should animation specs include reduced-motion fallbacks (prefers-reduced-motion media query)? (Answer: Yes, note in spec.)
- Should each direction include a component library matrix (how buttons/cards/forms vary)? (Answer: No, out of scope. Hero + 1 supporting section is enough to show the design language.)
- Should recommendation include a phased development plan (e.g., "build hero first, then price section")? (Answer: No, out of scope. That comes next if Direction is approved.)

---

**End of Plan**

Return this Markdown plan as your response. Do not ask questions. Do not create the 3-direction briefs yet. The plan specifies what will be created; execution of the plan happens in subsequent sessions.