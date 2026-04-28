# GEO Audit Report — signalai.agency
**Date:** 2026-04-28
**Auditor:** Signal GEO Skill (5-agent parallel analysis)

---

## Composite GEO Score: 49/100 — Fair

> The content is already good enough to be cited. The entity is not yet established enough to be trusted.

| Category | Weight | Score | Weighted |
|---|---|---|---|
| AI Citability & Visibility | 25% | 54/100 | 13.5 |
| Brand Authority Signals | 20% | 8/100 | 1.6 |
| Content Quality & E-E-A-T | 20% | 67/100 | 13.4 |
| Technical Foundations | 15% | 74/100 | 11.1 |
| Structured Data | 10% | 38/100 | 3.8 |
| Platform Optimization | 10% | 57/100 | 5.7 |
| **Total** | | | **49.1/100** |

---

## The Core Diagnosis

Signal has built genuinely citation-ready content — among the best-structured content for a solo-founder agency at the 14-article stage. The case studies are specific, verifiable, and technically authoritative. The journal is structured for AI retrieval. The homepage schema foundation is correct.

The score is dragged to 49 by a single systemic failure: **Signal's own site is missing the exact infrastructure it sells to clients.**

- Signal installs `sameAs` on client sites. Signal's own site has zero `sameAs`.
- Signal installs `BlogPosting` schema on client content. Signal's 14 journal articles have zero structured data (except 1 newest article).
- Signal tells clients to fix homepage stats rendering. Signal's own stat block renders as "0%, $0.0B" because JS counters aren't in crawlable HTML.
- Signal charges to build `llms.txt`. Signal has no `llms.txt`.
- Signal tells clients to get on Clutch and LinkedIn. Signal has no LinkedIn company page, no Clutch listing.

Fixing this isn't just a GEO win — it's a credibility win. Any GEO-literate prospect who audits the agency before hiring it will find these gaps immediately.

---

## Platform Readiness

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 72/100 | Good |
| Perplexity AI | 61/100 | Fair |
| ChatGPT Web Search | 52/100 | Fair |
| Google Gemini | 48/100 | Poor |
| Bing Copilot | 38/100 | Poor |

**Best platform:** Google AIO — FAQPage schema is well-formed, question-form headings are strong, ProfessionalService schema is correct.  
**Worst platform:** Bing Copilot — No IndexNow, no Bing WMT verification, no LinkedIn, canonical mismatch.

---

## Critical Issues (Fix This Week)

### 1. No `sameAs` on Organization schema — AI models cannot resolve Signal as an entity
**Impact:** ChatGPT, Gemini, Perplexity — all platforms  
**Fix:** Create a LinkedIn company page (free, 30 min), create a Crunchbase profile (free), then add both URLs to `sameAs` in the Organization JSON-LD on the homepage. This is the single highest cross-platform ROI action.

```json
"sameAs": [
  "https://www.linkedin.com/company/signal-ai-agency",
  "https://www.crunchbase.com/organization/signal-ai-agency",
  "https://www.youtube.com/@signalaiagency"
]
```

### 2. Zero schema on ~13 of 14 journal articles
**Impact:** Every journal article is unattributed text to AI crawlers  
**Fix:** Add `BlogPosting` + `BreadcrumbList` + `speakable` JSON-LD to every article. Template (fill in per article):

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "[ARTICLE-URL]#article",
  "headline": "[TITLE]",
  "datePublished": "[DATE]",
  "dateModified": "[DATE]",
  "author": {
    "@type": "Person",
    "@id": "https://signalai.agency/#josh",
    "name": "Josh [LastName]",
    "url": "https://signalai.agency/about"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://signalai.agency/#organization"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", "p:first-of-type"]
  }
}
```

### 3. No `llms.txt` file
**Impact:** AI crawlers have no curated page index. For a GEO agency, absence is a credibility gap.  
**Fix:** Create `/llms.txt` at the domain root. Deploy template:

```
# Signal AI Agency

> GEO (Generative Engine Optimization) agency helping Brooklyn local businesses
> get cited by ChatGPT, Perplexity, and Google AI Overviews. Founded 2025.

## Services

- [AI Search Audit](https://signalai.agency/#pricing): Free 20-minute audit. Three service tiers from $299/month.

## Case Studies

- [Brooklyn BJJ Lessons](https://signalai.agency/posts/journal/brooklyn-bjj-lessons-chatgpt-citation-41-days.html): First ChatGPT citation within 41 days of launch.
- [Nostrand Optical](https://signalai.agency/posts/journal/nostrand-optical-zero-to-rich-results.html): #1 in 14 of 18 tracked AI prompts within 60 days.

## Journal

- [How AI Engines Decide Who to Cite](https://signalai.agency/posts/journal/how-ai-engines-decide-who-to-cite.html)
- [FAQPage Schema Is the Citation Cheat Code Nobody Is Using](https://signalai.agency/posts/journal/faqpage-schema-citation-cheat-code.html)
- [Why Near Me Is Dying](https://signalai.agency/posts/journal/near-me-dying-ai-search-prompt-patterns.html)
- [Crown Heights vs. Williamsburg](https://signalai.agency/posts/journal/crown-heights-vs-williamsburg-ai-search-gap.html)
- [Journal Index](https://signalai.agency/journal.html): All 14 published GEO articles.

## Contact

- Location: Brooklyn, NY
- Email: josh@signalai.agency
- Free AI audit: https://signalai.agency/#contact
```

### 4. Canonical/www redirect mismatch — affects all platforms
**Impact:** HTML canonical says `https://signalai.agency/` (non-www). Server 307-redirects to `www`. Every page sends mixed signals to every crawler.  
**Fix:** Pick one canonical host. Either:
- Option A: Update all `<link rel="canonical">` and `og:url` tags to `https://www.signalai.agency/` to match what the server serves
- Option B: Configure Vercel to serve content at non-www and remove the www redirect

Change the 307 to a 308 permanent redirect (or 301) regardless of which option is chosen.

### 5. Homepage stats rendering as zeros
**Impact:** The stat block (citing Yext, Semrush) shows "0%, $0.0B" in raw HTML because JS counters aren't loaded for crawlers.  
**Fix:** Hardcode the final stat values as static HTML text. The counter animation can still run visually — but the HTML source must contain the real numbers, not empty spans.

---

## High Priority (Fix This Month)

### 6. Add author byline + credentials to every article
Zero author attribution on 13 articles. No `byline` visible, no credentials, no /about page.  
**Fix:** Add "By Josh [LastName], Founder of Signal | MS in AI & Business Analytics, Baruch College" to every article header. Create `/about` page. Update all BlogPosting schema `author.name` to full name.

### 7. Add privacy policy
Missing entirely. Required for any site collecting contact info or running GA.  
**Fix:** Add a basic privacy policy page and link it from the footer on every page.

### 8. Add `lastmod` dates to sitemap
All 16 sitemap entries lack `<lastmod>`. Crawlers can't determine freshness.  
**Fix:** Add `<lastmod>YYYY-MM-DD</lastmod>` for each URL, matching actual file modification dates.

### 9. Add canonical + OG tags to all older journal articles
~12 of 14 articles are missing `<link rel="canonical">`, Open Graph tags, and Twitter Card tags. Only the newest article (`how-ai-engines-decide-who-to-cite.html`) has them.  
**Fix:** Apply the template from the newest article retroactively to all older articles. This is a deploy-time templating fix.

### 10. Person schema for Josh
No Person schema anywhere on the site. E-E-A-T is invisible at the schema level.  
**Fix:**
```json
{
  "@type": "Person",
  "@id": "https://signalai.agency/#josh",
  "name": "Josh [LastName]",
  "jobTitle": "Founder",
  "worksFor": { "@id": "https://signalai.agency/#organization" },
  "sameAs": ["https://www.linkedin.com/in/[handle]"],
  "knowsAbout": ["Generative Engine Optimization", "Schema.org", "Local SEO", "AI Search"]
}
```

### 11. Add explicit AI crawler directives to robots.txt
Current `Allow: /` is permissive but implicit. Add named entries for the major AI bots.  
**Fix:**
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### 12. Verify site in Bing Webmaster Tools + implement IndexNow
No BWT verification detected. No IndexNow. New articles discovered by Bing on its own schedule (potentially weeks late).  
**Fix:** Add `<meta name="msvalidate.01" content="[key]">` to homepage, submit sitemap via BWT, implement IndexNow ping in deploy script.

---

## Medium Priority (Next Quarter)

### 13. Add HowTo schema to the five-step audit post
The post (`five-step-schema-audit-brooklyn.html`) has Step 1–5 H2s that are perfect HowTo anchors. Add HowTo JSON-LD — this is a direct AIO extraction target.

### 14. Get listed on Clutch with at least 1 verified review
Clutch is one of the most frequently cited agency directories in AI responses. One verified review from Nostrand Optical or Brooklyn BJJ creates an external corroboration point, a backlink, and an entity validation record.

### 15. Reddit presence strategy
Perplexity indexes Reddit heavily. Post condensed versions of "Why Near Me Is Dying" and "Death of Page Two" to r/SEO, r/LocalSEO, r/Brooklyn. Even 2–3 upvoted threads linking to signalai.agency materially improves Perplexity trust score.

### 16. Rewrite H2 headings into question form (top 5 articles)
"What FAQPage Schema Actually Does" → "What Does FAQPage Schema Do?" — AIO weights question-form headings significantly higher for featured snippet candidacy.

### 17. Add `sameAs` to Organization schema (OG image fix)
`/og-image.jpg` returns a 307 redirect, not a direct 200. Social crawlers don't follow image redirects. Verify the OG image resolves directly at the canonical host.

### 18. Security headers via vercel.json
Add `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, CSP headers. No code changes — just a `headers` block in `vercel.json`.

### 19. Add 3–5 external citations to the explainer article
"How AI Engines Decide Who to Cite" cites nothing externally. Link to Google's documentation on structured data, Perplexity's indexing methodology, or Schema.org spec. A GEO article about AI citation credibility that cites no sources is a trust contradiction.

### 20. Create a YouTube channel
Gemini cross-references YouTube for business entities. One 3-minute screen recording of an AI search audit before/after creates a multi-format signal.

---

## Quick Wins Summary (30-minute tasks)

| Task | Platform Impact | Effort |
|---|---|---|
| Create LinkedIn company page | ChatGPT, Gemini, Bing | 30 min |
| Create `/llms.txt` | All AI crawlers | 30 min |
| Add named AI bot rules to robots.txt | All AI crawlers | 15 min |
| Fix homepage stat rendering (hardcode values) | All crawlers | 30 min |
| Add BWT `msvalidate.01` meta tag | Bing Copilot | 15 min |
| Create Crunchbase profile | ChatGPT, Gemini | 20 min |
| Add privacy policy page | Trust/E-E-A-T | 45 min |

---

## Schema Additions (Complete JSON-LD)

Full ready-to-deploy schema blocks are in the Schema Audit subagent report. Key additions needed:

1. **Organization block:** Add `sameAs`, `logo`, `telephone`, `image`, `geo`, `postalCode` to existing ProfessionalService node
2. **Person block:** New `@graph` node for Josh with `sameAs` → LinkedIn
3. **BlogPosting block:** Apply to all 14 journal articles (template above)
4. **BreadcrumbList:** Add to all article pages
5. **speakable:** Add to homepage WebPage node and all articles

---

## Score Projections After Fixes

| Category | Current | After Quick Wins | After All High Priority |
|---|---|---|---|
| AI Citability & Visibility | 54 | 72 | 82 |
| Brand Authority Signals | 8 | 25 | 52 |
| Content Quality & E-E-A-T | 67 | 75 | 82 |
| Technical Foundations | 74 | 82 | 88 |
| Structured Data | 38 | 55 | 78 |
| Platform Optimization | 57 | 68 | 76 |
| **Composite** | **49** | **62** | **76** |

---

## The Strategic Summary

Signal is a 49 today because entity recognition is near-zero. The content is already in the 70s. Close the entity gap — LinkedIn, `sameAs`, `llms.txt`, Clutch, blog schema — and the composite score crosses 70 without writing a single new article.

The fastest path to 70+:
1. LinkedIn company page → add to `sameAs` (1 hour)
2. `llms.txt` at root (30 minutes)
3. BlogPosting schema on all articles (2 hours)
4. Fix canonical/www mismatch (30 minutes)
5. Add author byline + /about page (2 hours)
6. Hardcode homepage stats in HTML (30 minutes)
7. Privacy policy page (45 minutes)

**Total estimated effort: ~8 hours. Projected score lift: 49 → 70+.**
