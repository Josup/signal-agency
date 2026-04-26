# Judge Report

## Scores
- Plan 1: 7/10
- Plan 2: N/A (not provided)
- Plan 3: N/A (not provided)

## Comparative Analysis
Only one plan was supplied, so comparative scoring is limited. Plan 1 is thorough and well-structured: it covers all 8 required dimensions per direction, locks constraints (no amber, preserved copy, Next.js + Framer Motion buildability), and includes a comparative matrix + recommendation phase. Strengths: explicit acceptance criteria, mobile responsiveness flagged, conversion-risk task per direction, and a useful self-critique about the "medium-medium" trap. Weaknesses: verbose with repeated scaffolding (Phases 3 and 4 are stubbed as "replicate Phase 2" rather than seeded with concrete differentiation), token estimates drift high, the constraint task contains REDACTED placeholders where actual brand names belong, and some tasks read as process-for-process-sake rather than producing artifacts. There is no test that the three directions are emotionally tied to Dover Street Market without being literal Abloh references â€” a key creative guardrail.

## Missing Steps
- No explicit guardrail check against literal Virgil Abloh / OFF-WHITE motifs (quotation marks, Helvetica labels, industrial belt, hazard tape) â€” the brief explicitly forbids these.
- No "Dover Street Market emotional reference" validation step â€” the brief makes this the emotional anchor.
- No check that typography excludes Inter / Space Grotesk (explicitly banned in constraints).
- No accessibility / WCAG contrast validation for the 3-color palettes (especially given bold palettes).
- No performance budget consideration (heavy fonts + Framer Motion sequences can tank LCP, which hurts conversion).
- No specification for the "ChatGPT screenshot proof artifact" referenced in CLAUDE.md hero requirements.
- No deliverable format spec (single Markdown file? per-direction files? code-ready tokens?).
- No seeded distinct concept thesis for Directions 2 and 3 â€” they are left as menu options, risking convergence.
- No "solo founder voice" check â€” brief mandates the site feel like a person, not a corporation.

## Contradictions
- Plan locks copy character-for-character, but the constraint task substitutes "[REDACTED]" for ChatGPT/Google/etc. This will corrupt the locked copy if executed literally. Must restore actual brand strings.
- Phase 1 audits the Next.js codebase, but the deliverable is a creative brief (no code). The audit is useful only insofar as it constrains tokens/animations â€” should be scoped to Tailwind/Framer Motion compatibility, not full project survey.
- Task 2.2 lists IBM Plex Mono and Space Mono as "unexpected" display options, but mono-as-display is now a saturated agency trope (close to the banned Inter/Space Grotesk ethos). Risks violating the unexpected-typography constraint.

## Improvements
- Pre-commit Phase 1 to concrete differentiation: name and seed all three directions up front (e.g., D1 = Editorial-Brutalist, D2 = Civic-Vernacular, D3 = Post-Digital Maximalist) so Phases 2â€“4 are not "replicate" stubs.
- Add an explicit Abloh-spirit validation: each direction reviewed against a "no literal Off-White motifs" checklist.
- Add a Dover Street Market mood test: each direction articulates which DSM quality it channels (curatorial juxtaposition, raw concrete + couture, tribal brand collisions) without copying surface visuals.
- Add a typography blocklist (Inter, Space Grotesk, Helvetica, Instrument Serif since it's in the prior amber direction) and require fonts pulled from genuinely off-trend sources (e.g., Pangram Pangram, Klim, Velvetyne, ABC Dinamo, system fallbacks like Times New Roman re-purposed).
- Add WCAG AA contrast validation per palette and a performance budget note (font-display: swap, animation throttling, prefers-reduced-motion).
- Restore literal brand names (ChatGPT, Google AI Overviews, Perplexity) in the locked-copy task.
- Compress per-task token estimates and remove duplicated "replicate" phases â€” collapse into one phase that produces three distinct briefs in parallel.
- Add a final deliverable artifact spec: one Markdown brief with 3 H2 sections + comparative matrix + recommendation, ready to hand to a developer.
- Add a "solo-founder voice" task that defines tonal anchors (first-person fragments, founder signature, dated artifact) shared across all three directions.

## Final Plan

# Plan

## Overview
Produce a single Markdown creative brief presenting 3 distinct visual directions for the Signal agency site, each spec'd to developer-ready precision (fonts, hex, sizes, easing, layout rules), validated against locked constraints (no amber, locked copy verbatim, no literal Abloh motifs, banned-font list, Next.js 14 + Tailwind + Framer Motion buildable), and closed with a comparative matrix and a recommendation that explicitly resolves the designer-appeal vs. Brooklyn-business-owner-conversion tension.

## Scope
- In:
  - One deliverable Markdown file containing 3 directions Ã— 8 spec sections (concept, typography, color, layout, animation, hero, signature detail, conversion risk)
  - Pre-seeded distinct concept theses for D1/D2/D3 to guarantee non-overlap
  - Locked-copy verification (verbatim ChatGPT, Google AI Overviews, Perplexity strings)
  - Abloh-spirit + Dover Street Market emotional checks (no literal motifs)
  - Banned-font list enforcement (Inter, Space Grotesk, Helvetica, Instrument Serif)
  - WCAG AA contrast validation + performance/reduced-motion notes
  - Comparative matrix, tension analysis, primary recommendation, named secondary
- Out:
  - Production code, prototypes, or commits
  - Real photography (placeholder mockups only)
  - Amber/gold/yellow as primary or accent
  - Literal Off-White references (quotation marks, hazard stripes, Helvetica labels)
  - Component library beyond hero + one supporting section per direction

## Phases

### Phase 1: Constraint Lock & Direction Seeding
**Goal**: Lock all non-negotiables and pre-commit three genuinely distinct concept theses before specification begins.

#### Task 1.1: Constraint & Locked-Copy Manifest
- Location: working brief document, top section
- Description: Record verbatim locked copy with real brand names; enumerate bans and requirements.
- Estimated Tokens: 250
- Dependencies: none
- Steps:
  - Transcribe H1, subhead, CTA exactly with ChatGPT, Google AI Overviews, Perplexity intact
  - List bans: amber/gold/yellow; Inter, Space Grotesk, Helvetica, Instrument Serif; literal Abloh motifs (quote marks as ornament, hazard tape, industrial belt graphic, Helvetica all-caps labels)
  - List requireds: 6 sections (Hero, Invisible Business, Case Studies, Pricing, How It Works, Final CTA), solo-founder voice, dated ChatGPT screenshot proof artifact, Next.js 14 + Tailwind + Framer Motion buildability, prefers-reduced-motion support
- Acceptance Criteria:
  - Copy strings match brief exactly, no redactions
  - Ban and require lists are explicit and testable

#### Task 1.2: Stack Compatibility Snapshot
- Location: package.json, tailwind.config.js, app/globals.css
- Description: Confirm Framer Motion version and Tailwind config so animation/color specs are directly portable.
- Estimated Tokens: 150
- Dependencies: 1.1
- Steps:
  - Read framer-motion version, note supported easing API
  - Note current Tailwind theme tokens to be replaced per direction
- Acceptance Criteria:
  - Version + token surface documented in one paragraph

#### Task 1.3: Three Concept Theses (Seeded for Distinctness)
- Location: brief document
- Description: Pre-commit three concepts from different aesthetic families to prevent convergence.
- Estimated Tokens: 300
- Dependencies: 1.1
- Steps:
  - D1 â€” Editorial-Brutalist: oversized serif + raw grid; channels DSM's concrete-meets-couture
  - D2 â€” Civic-Vernacular: NYC signage / MTA / bodega awning energy reframed as luxury minimalism; channels DSM's curated-found-object juxtaposition
  - D3 â€” Post-Digital Maximalist: archival web + zine collage + saturated risograph; channels DSM's tribal brand collisions
  - For each, write a one-sentence Abloh-spirit articulation and a one-sentence DSM emotional anchor
- Acceptance Criteria:
  - Three theses live in different aesthetic families (typography, color logic, density)
  - Each names its DSM emotional anchor without copying surface visuals
  - None reference Off-White literal motifs

### Phase 2: Specify All Three Directions in Parallel
**Goal**: Produce 8-section spec per direction, written in parallel to keep them genuinely contrastive.

#### Task 2.1: Per-Direction Spec (Ã—3)
- Location: brief document, one H2 section per direction
- Description: For each direction, write all 8 subsections to developer-ready precision.
- Estimated Tokens: 1400 per direction (4200 total)
- Dependencies: 1.3
- Steps (apply to D1, D2, D3):
  - Concept name + one-line philosophy
  - Typography: display + body + mono with exact family (off-trend sources: Klim, Pangram Pangram, Velvetyne, ABC Dinamo, Adobe Originals, system serifs); per-role rem/px size, weight, line-height, letter-spacing for H1/H2/H3/body/small; rationale for "unexpected and right"
  - Color: exactly 3 hex values with names + usage tiers (surface, ink, signal); psychological + Brooklyn cultural logic; WCAG AA contrast confirmed for body and CTA pairings
  - Layout: grid (columns, gutters, breakpoints), density philosophy, â‰¥1 structural surprise (asymmetry, full-bleed, overlap, bleed-past), mobile reflow rule
  - Animation: page-load (0â€“3s) sequence, scroll behavior, hover/click models, exact cubic-bezier and durations, reduced-motion fallback, motion language sentence
  - Hero: locked H1 rendered in spec typography with line-break rule (desktop + mobile), subhead spec, CTA button spec (size, color, hover), background treatment, dated ChatGPT screenshot proof artifact placement, scroll-out behavior
  - Signature detail: one ownable move, where it appears, interaction model, buildability note
  - Conversion risk: 1â€“2 specific alienation risks for non-technical owners + concrete mitigations + risk rating
- Acceptance Criteria:
  - Every typographic, color, and timing value is numeric, not adjectival
  - No banned font; no banned color; locked copy verbatim
  - Each direction passes Abloh-no-literal-motif check and DSM emotional-anchor check
  - Hero spec is implementable without further questions
  - Solo-founder voice signal present in at least one section per direction (founder fragment, dated artifact, first-person line)

### Phase 3: Comparative Matrix, Tension Analysis, Recommendation
**Goal**: Close the brief with a decisive recommendation that resolves the designer â†” business-owner tension.

#### Task 3.1: Comparative Matrix
- Location: brief document, post-direction section
- Description: 8-row Ã— 3-column matrix (concept, type, color, layout, animation, signature, designer appeal, owner conversion) with high/med/low ratings + one-line justification per cell.
- Estimated Tokens: 350
- Dependencies: Phase 2
- Acceptance Criteria: every cell has a rating and a reason

#### Task 3.2: Tension Analysis
- Location: brief document
- Description: Plot each direction on a designer-appeal Ã— owner-trust 2Ã—2; name the gap.
- Estimated Tokens: 200
- Dependencies: 3.1
- Acceptance Criteria: each direction's coordinate is justified in one sentence

#### Task 3.3: Recommendation + Secondary
- Location: brief document, final section
- Description: Pick one primary direction; explain (a) why a designer screenshots it, (b) why a Brooklyn dentist books a call, (c) how it resolves the tension; name secondary as fallback with one-line rationale; rate confidence.
- Estimated Tokens: 350
- Dependencies: 3.1, 3.2
- Acceptance Criteria: both audiences explicitly addressed; tension resolved, not dodged; secondary named

## Testing Strategy
- Constraint sweep: grep brief for "amber", "gold", "yellow", "Inter", "Space Grotesk", "Helvetica", "Instrument Serif", "Off-White", quotation-mark-as-ornament; expect zero matches outside negative declarations.
- Locked-copy verification: byte-compare H1, subhead, CTA against brief.
- Specificity audit: every typography and animation entry has numeric values; every color has a 6-digit hex.
- Distinctness check: no two directions share aesthetic family, layout logic, or color story.
- Contrast check: body and CTA color pairs â‰¥ 4.5:1 (AA).
- Buildability check: fonts available via Google Fonts, foundry licenses, or self-host; easings expressible in Framer Motion; layouts expressible in Tailwind grid/flex; reduced-motion fallback noted.
- Audience fit check: each direction's conversion-risk section names â‰¥1 specific risk and â‰¥1 concrete mitigation.
- Solo-founder voice check: each direction surfaces at least one personal/dated/first-person artifact.

## Risks
- Convergence between directions â†’ Phase 1.3 pre-commits distinct theses; reviewer flags any shared aesthetic family before Phase 2 ships.
- Designer flair alienating owners â†’ Phase 2 conversion-risk subsection per direction; Phase 3.3 weights owner trust as a hard requirement of the recommendation.
- Vague specs slipping through â†’ numeric-only rule for type/color/animation; reviewer rejects any adjectival placeholder.
- Performance regression from heavy fonts/animations â†’ font-display: swap noted, animation budgets noted, reduced-motion fallback required.
- Accidental Off-White cosplay â†’ explicit ban list in 1.1 and explicit per-direction check in 2.1.

## Rollback Plan
- Deliverable is a single Markdown brief; no code commits. If a direction proves unspecifiable, replace its thesis from a backup list (e.g., Civic-Vernacular swapped for Archival-Newsprint) and re-run Phase 2 for that slot only.
- If recommendation is rejected, the other two directions remain fully spec'd and shippable.

## Edge Cases
- Locked copy overruns hero on mobile â†’ adjust size/leading within spec; never edit copy. Provide explicit desktop and mobile line-break rules.
- Custom hex doesn't exist in Tailwind â†’ add to tailwind.config.js theme.extend.colors; provide token names.
- Off-trend font is paid/restricted â†’ name the foundry license tier and a Google Fonts fallback with matching metrics.
- Animation feels different in production â†’ spec marks easings as "to validate live"; reduced-motion path mandatory.
- Asymmetric layout collapses on <768px â†’ each layout subsection states the mobile reflow rule.
- Signature detail unbuildable in Framer Motion â†’ buildability note required in subsection 7; if it requires WebGL, mark as stretch and provide CSS-only fallback.

## Open Questions
- Should the brief include a tokenized handoff (CSS variables / Tailwind theme block) per direction, or only prose specs? Default: prose only; add tokens if developer requests.
- Should secondary direction get a full mini-spec or only a one-line rationale? Default: one-line.
- Is a printable PDF version of the brief required for client review? Default: no, Markdown only.