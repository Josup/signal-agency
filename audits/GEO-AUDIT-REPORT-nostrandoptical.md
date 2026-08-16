# GEO Audit Report — Nostrand Optical
**Domain:** nostrandoptical.com  
**Audit Date:** 2026-04-29  
**Business Type:** Local Service — Optometry Practice  
**Location:** 1018C Nostrand Ave, Crown Heights, Brooklyn, NY 11225  
**Practitioner:** Dr. Alexander Shlivko, OD  
**Audited By:** Signal AI Agency

---

## Composite GEO Score: 45 / 100 — Poor

> The site has a technically solid foundation (SSG rendering, clean sitemap, permissive crawler access) and genuinely substantive blog content — but is held back by zero brand entity presence, broken schema markup, no llms.txt, missing meta descriptions, and no third-party review signals. Every major AI search platform currently lacks the entity confirmation data needed to cite this practice confidently.

---

## Score Breakdown

| Category | Weight | Score | Weighted | Grade |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 45/100 | 11.2 | Poor |
| Brand Authority Signals | 20% | 18/100 | 3.6 | Critical |
| Content Quality & E-E-A-T | 20% | 58/100 | 11.6 | Fair |
| Technical Foundations | 15% | 68/100 | 10.2 | Fair |
| Structured Data | 10% | 44/100 | 4.4 | Poor |
| Platform Optimization | 10% | 38/100 | 3.8 | Critical |
| **Composite** | **100%** | **45/100** | **44.8** | **Poor** |

### Sub-Scores

| Sub-Category | Score |
|---|---|
| Citability (passage quality) | 48/100 |
| AI Crawler Access | 90/100 |
| llms.txt | 0/100 |
| Brand Mentions (verified) | 18/100 |
| Google AI Overviews Readiness | 46/100 |
| ChatGPT Web Search Readiness | 32/100 |
| Perplexity AI Readiness | 41/100 |
| Google Gemini Readiness | 35/100 |
| Bing Copilot Readiness | 36/100 |
| Technical SEO | 68/100 |
| E-E-A-T | 52/100 |
| Schema Implementation | 44/100 |

---

## 1. AI Citability & Visibility

**Score: 45/100**

### Citability Assessment (48/100)

The site's best citation-ready passages are on the blog posts and services page, not the homepage:

| Passage | Page | Citability | Why |
|---|---|---|---|
| Insurance + service area block | Blog | 60/100 | Names specific insurers and neighborhoods; self-contained; directly answers "what optometrists in Crown Heights take Medicaid?" |
| Dry Eye mechanism block | /services | 57/100 | Clinical subtypes named (evaporative, aqueous-deficient, MGD); self-contained |
| Glaucoma Screening block | /services | 57/100 | Procedure description + stat-adjacent claim; answer-format |
| Patient case detail block | Blog | 52/100 | Specific names, ages, neighborhoods — but formulaic arc reduces authenticity signal |
| About page mission | /about | 41/100 | Lacks quantitative anchors; "thousands of families" too vague |
| Homepage hero | / | 22/100 | Tagline only — not an answer block |

**Major citability gaps:**
- No FAQ structure anywhere on site — FAQ-format content is the highest-yield citability format for local health businesses
- Zero original statistics or proprietary data points
- No quantitative proof (patient count, years in practice, frame inventory)
- Homepage H1 is absent from the rendered DOM (confirmed by technical audit)

### AI Crawler Access (90/100)

```
User-Agent: *
Allow: /
Sitemap: https://nostrandoptical.com/sitemap.xml
```

All AI crawlers confirmed accessible: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, Cohere-ai, CCBot, Bytespider, Applebot-Extended. No crawler is blocked. Sitemap is declared and valid. No crawl-delay throttling.

Minor gap: No explicit named Allow directives for individual AI bots — wildcard covers them but explicit declarations are a minor best-practice improvement.

### llms.txt (0/100)

**Status: ABSENT** — HTTP 404 at `https://nostrandoptical.com/llms.txt`

No mechanism exists to communicate content hierarchy to LLMs that honor this protocol. See Section 9 for ready-to-deploy llms.txt.

### Brand Mention Presence (18/100)

| Platform | Status | Notes |
|---|---|---|
| Wikipedia | Absent | No article for Nostrand Optical or Dr. Shlivko |
| Wikidata | Absent | No entity record |
| Reddit | Unconfirmed | Access blocked during audit; likely absent given digital footprint |
| Yelp | Unconfirmed | Access blocked; probably exists but owner-verification status unknown |
| Healthgrades | Absent | No confirmed profile found |
| Zocdoc | Absent | No confirmed profile found |
| LinkedIn | Absent | No company page found or linked from site |
| Google Business Profile | Probable | Not verifiable externally; a 25-year-old practice at a fixed address almost certainly has a GBP but completeness/verification unknown |
| YouTube | Absent | No channel found |

The brand has virtually no confirmed structured entity presence in AI training corpora or on the platforms AI models preferentially cite for local healthcare queries.

---

## 2. Brand Authority Signals

**Score: 18/100**

This is the most critical gap in the entire audit. AI models (especially ChatGPT and Perplexity) resolve local business entities primarily through third-party directory presence and community validation. Nostrand Optical currently has:

- **0 confirmed third-party profiles** accessible during this audit
- **0 sameAs links** in the site's schema markup
- **0 review signals** surfaced on-site or via accessible platforms
- **No Wikipedia/Wikidata entity** — the gold standard for AI entity resolution

A 25-year-old Crown Heights optometry practice should have a meaningful review footprint. The absence isn't a brand problem — it's a digital infrastructure problem. The practice exists in the physical world but is nearly invisible to the entity graph that AI models use.

**Estimated score with GBP properly claimed and optimized:** ~35/100  
**Estimated score after adding Yelp + Healthgrades + Zocdoc:** ~48/100

---

## 3. Platform Readiness

**Average: 38/100**

| Platform | Score | Primary Gap |
|---|---|---|
| Google AI Overviews | 46/100 | No schema, no FAQPage markup, no author attribution |
| Perplexity AI | 41/100 | No community validation (Reddit, Yelp), no datetime HTML attributes on posts |
| Bing Copilot | 36/100 | No Bing Webmaster Tools, no meta descriptions, no LinkedIn |
| Google Gemini | 35/100 | No YouTube presence, no verified GBP, no Knowledge Graph entity |
| ChatGPT Web Search | 32/100 | No Wikipedia entity, no Organization sameAs, no author bylines |

### Google AI Overviews (46/100)
Blog posts have question-answer H2 structure, long-form depth (2,400–2,600 words), and outbound citations to AOA/AAO/NIH. This is a genuine strength. But no FAQPage schema means Google cannot render FAQ rich results — a direct AIO sourcing path. No meta descriptions means Google must infer page summaries from body text.

### ChatGPT Web Search (32/100)
The weakest platform score. No Wikipedia article, no Wikidata entity, no Organization schema with sameAs links, no author bylines with credentials. The entity is essentially invisible to ChatGPT's entity resolution layer. The Yahoo email address (nsoptical@yahoo.com) undermines professional entity coherence.

### Perplexity AI (41/100)
Sitemap freshness is excellent (9 posts April 5–26, 2026). But no Reddit or Nextdoor presence, no Yelp reviews accessible, and no `<time datetime="...">` attributes on publication dates prevent Perplexity from programmatically parsing freshness.

### Google Gemini (35/100)
No YouTube, no verified Knowledge Panel pathway, no multi-format content. The blog posts are text-only — no images, no video, no diagrams. Gemini strongly weights multi-format content for health topics.

### Bing Copilot (36/100)
No msvalidate.01 meta tag confirmed (Bing Webmaster Tools verification), no IndexNow, no LinkedIn company page. Bing uses LinkedIn as its primary entity confirmation for professional services — equivalent to how Google uses Wikipedia.

---

## 4. Technical Foundations

**Score: 68/100**

### Strengths
- **Full SSG rendering confirmed** (`X-Nextjs-Prerender: 1`) — AI crawlers see complete HTML without JS execution
- Sitemap: 14 URLs, freshly dated, correct priority weighting
- URL structure: clean, lowercase, hyphenated, max 2 levels deep
- Mobile-first responsive design (Tailwind CSS confirmed)
- HTTPS on both www and non-www

### Critical Issues

**1. www/non-www redirect mismatch (307 Temporary → should be 301 Permanent)**
- `https://nostrandoptical.com` → 307 → `https://www.nostrandoptical.com`
- But canonical tags on all pages declare `https://nostrandoptical.com` (non-www)
- Sitemap, og:url, and JSON-LD @id all use non-www
- A 307 signals the redirect is temporary — search engines may not consolidate link equity

**Fix (vercel.json):**
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{"type": "host", "value": "nostrandoptical.com"}],
      "destination": "https://www.nostrandoptical.com/:path*",
      "permanent": true
    }
  ]
}
```
Then update all canonical tags, og:url, and schema @id values to use `https://www.nostrandoptical.com`.

**2. Missing meta descriptions on all pages**
Confirmed absent on homepage, /services, /about, /insurance, and blog posts. Bing Copilot especially uses meta descriptions as primary citation text.

**3. Missing og:image and twitter:image**
`summary_large_image` Twitter card is declared but no `twitter:image` URL exists — X/Twitter falls back to a text card. Social shares and AI previews cannot display an image.

**4. Missing security headers**
`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` are all absent. Fix in `next.config.js`:

```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }]
}
```

**5. Blog title duplication**
`eye-exam-crown-heights-brooklyn` has title: `Eye Exam Crown Heights Brooklyn | Nostrand Optical | Nostrand Optical` — brand name appended twice. Fix the `title.template` in Next.js metadata config.

**6. JSON-LD image URL points to staging domain**
`"image": "https://nostrand-optical.vercel.app/images/storefront.jpg"` — this staging domain URL is in every page's schema. Update to `https://www.nostrandoptical.com/images/storefront.jpg`.

---

## 5. Content Quality & E-E-A-T

**Score: 58/100 | E-E-A-T: 52/100**

| Dimension | Score | Key Gap |
|---|---|---|
| Experience | 10/25 | Patient vignettes present but formulaic; no first-person voice from Dr. Shlivko; no real clinical outcomes data |
| Expertise | 13/25 | OD credential present; clinical terminology accurate; no linked author bio page; no external credential verification |
| Authoritativeness | 12/25 | Est. 2001, AOA/AAO/NIH citations; zero third-party review signals; no professional memberships visible |
| Trustworthiness | 17/25 | HTTPS, NAP consistent, insurance plans named, dates present; **no privacy policy** (HIPAA-adjacent site — critical gap); Yahoo email undermines professionalism |

### Content Metrics

| Page | Word Count | Assessment |
|---|---|---|
| /about | ~320 words | **Thin** — insufficient for the primary E-E-A-T page |
| Blog posts (each) | ~2,200–2,600 words | Strong depth for a local SMB practice |
| /services | Moderate | Well-structured; service descriptions adequate |

### Structural Strengths
- Blog post heading hierarchy is technically sound (H1 → H2 → H3)
- External citations: AOA, AAO, NIH, NYC DOH, NEI — better sourcing than typical local practice
- Internal linking: 8–12 links per post with good cross-referencing
- Fresh content: all 9 posts published April 5–26, 2026

### Structural Weaknesses
- **No author bylines** on individual blog posts — posts credited to "Dr. Shlivko and the Nostrand Optical team" at header level, not individual post level
- **No images on any page** — complete absence of visual content across all reviewed pages
- **No privacy policy** — a legal and trust-signal requirement for a healthcare site collecting patient data
- **AI content indicators** — formulaic patient vignette arcs, no first-person practitioner voice, no proprietary clinical data; likely AI-generated with human-added local details
- /about page (320 words) describes the doctor in third person with no school, residency, or continuing education details

---

## 6. Schema & Structured Data

**Score: 44/100**

### What Was Found (3 JSON-LD blocks — same block repeated on every page)

Schema is present but has **6 active errors** that prevent effective AI entity resolution:

| Error | Severity | Impact |
|---|---|---|
| `physician` is not a valid Schema.org property | Critical | Dr. Shlivko's entity data is invisible to AI models |
| `image` URL uses staging domain (`nostrand-optical.vercel.app`) | High | AI crawlers get a broken image reference |
| Zero `sameAs` links | Critical | No platform entity anchoring — AI models cannot resolve the business to known entities |
| No `description` on LocalBusiness entity | High | AI summaries must guess what the business does |
| No `logo` property | Medium | Google Knowledge Panel cannot display logo |
| `speakable` CSS selectors reference IDs (`#hero-phone`, `#hero-tagline`) not found in DOM | Medium | Speakable markup partially non-functional |

### What Is Missing

| Schema Type | Pages | GEO Impact |
|---|---|---|
| `sameAs` on LocalBusiness | All | **Critical** — highest-leverage single addition |
| Person node for Dr. Shlivko | All | **High** — fixes the broken `physician` property |
| Article / BlogPosting | 9 blog posts | **High** — activates rich results, signals authorship |
| FAQPage | Blog posts, services | **High** — direct AIO sourcing path |
| BreadcrumbList | All non-home | Medium |
| WebSite + SearchAction | Homepage | Low |
| MedicalProcedure (per service) | /services | Low |
| `foundingDate` | Homepage | Low |

---

## 7. Prioritized Action Plan

### Quick Wins (1–4 hours total, highest ROI)

**QW1 — Fix JSON-LD: Replace `physician` with proper Person node + add `sameAs`**  
*Time: 1 hour | Platforms: All | Score impact: +8–12 pts*  
The `physician` property doesn't exist in Schema.org — it makes Dr. Shlivko's entity data invisible. Replace it with a proper `Person` node (template in Section 8). Then add `sameAs` links to every third-party profile that exists (GBP, Yelp, Healthgrades). This is the single change that moves the most platforms simultaneously.

**QW2 — Write meta descriptions for all 14 pages**  
*Time: 30 min | Platforms: Google AIO, Bing Copilot, ChatGPT | Score impact: +3–5 pts*  
Currently zero exist sitewide. For the homepage, use: *"Eye exams, contact lenses, and dry eye treatment in Crown Heights, Brooklyn. Dr. Alexander Shlivko, OD — accepting Medicaid, Medicare, and most insurance. Call (718) 773-9391."*

**QW3 — Fix the 307 redirect to 301 + align all canonical URLs to www**  
*Time: 30 min | Platforms: All | Score impact: +3 pts technical*  
One `vercel.json` entry + update canonical tags, sitemap, og:url, and JSON-LD @id to use `https://www.nostrandoptical.com`.

**QW4 — Add og:image and twitter:image**  
*Time: 30 min | Platforms: ChatGPT, Social | Score impact: minor*  
A `summary_large_image` card with no image is a broken declaration. Add a 1200×630px representative image (storefront or Dr. Shlivko).

**QW5 — Fix staging domain in JSON-LD image field**  
*Time: 5 min | Platforms: All | Score impact: minor but active error*  
Change `nostrand-optical.vercel.app/images/storefront.jpg` → `www.nostrandoptical.com/images/storefront.jpg`.

**QW6 — Deploy llms.txt**  
*Time: 15 min | Platforms: LLM crawlers | Score impact: +4 pts AI Visibility*  
See ready-to-deploy template in Section 9.

---

### Medium-Term (1–2 weeks, high impact)

**MT1 — Add FAQPage schema + FAQ sections to top 3 blog posts and homepage**  
*Platforms: Google AIO, Perplexity | Score impact: +6–8 pts citability*  
FAQ-format content is the highest-yield citability format for local health businesses. The blog posts already have answer-format H2s — wrap them in FAQPage JSON-LD. Priority FAQ pairs:
- "Does Nostrand Optical accept Medicaid?" → *"Yes — Medicaid, Medicare, UnitedHealthcare, Anthem, Health First, Fidelis Care, CareCredit, and most major plans are accepted."*
- "How long does an eye exam take?" → *"Approximately 45 minutes, covering visual acuity, eye pressure, slit-lamp, and dilated fundus exam."*
- "Can I get same-day glasses?" → *"Yes — most standard prescriptions can be filled same-day. Designer frames from Gucci, Versace, Prada, and Dolce & Gabbana are available."*
- "Does Nostrand Optical see children?" → *"Yes — pediatric exams starting at age 7, screening for amblyopia, strabismus, and early myopia."*

**MT2 — Add author byline + Person schema to all blog posts**  
*Platforms: Google AIO, ChatGPT, Perplexity | Score impact: +5 pts E-E-A-T*  
Post-level byline: *"Written by Dr. Alexander Shlivko, OD"* with a link to /about. Implement Person schema with `@id`, `jobTitle`, `hasCredential`, `worksFor` (template in Section 8).

**MT3 — Expand /about page from 320 to 700+ words**  
*Platforms: All | Score impact: +4–6 pts E-E-A-T*  
Add: optometry school + graduation year, specialty training or CE focus, years at this location, languages spoken (Russian?), professional memberships (AOA, NYSOA). This is the primary E-E-A-T page — it is currently the weakest page on the site.

**MT4 — Add privacy policy to site footer**  
*Platforms: All (trust signal) | Score impact: +3 pts trustworthiness*  
A healthcare site collecting patient inquiry data without a privacy policy is both a legal risk (HIPAA-adjacent) and a direct E-E-A-T penalty in Google's Quality Rater Guidelines.

**MT5 — Claim, verify, and complete Healthgrades + Zocdoc profiles for Dr. Shlivko**  
*Platforms: ChatGPT, Perplexity | Score impact: +8–10 pts brand authority*  
These are the two highest-citation-weight healthcare directories used by AI models. Neither confirmed profile exists during this audit. A Zocdoc listing also enables online booking.

**MT6 — Set up Bing Webmaster Tools + submit sitemap**  
*Platforms: Bing Copilot | Score impact: +4 pts platform*  
Add `msvalidate.01` meta tag, verify ownership, submit sitemap. 30-minute setup unlocks IndexNow for real-time index updates.

**MT7 — Add `<time datetime="...">` attributes to all blog post publication dates**  
*Platforms: Perplexity, Google AIO | Score impact: +2 pts freshness*  
Programmatically parseable dates ensure crawlers read freshness without visual parsing.

**MT8 — Fix blog title duplication (double "| Nostrand Optical")**  
*Time: 15 min | Score impact: minor but visible*  
Audit the Next.js `title.template` in the blog slug page metadata export.

---

### Strategic (1–4 months, foundational)

**S1 — Claim and fully optimize Google Business Profile**  
*Platforms: Google Gemini, Google AIO, Perplexity | Score impact: +10–15 pts brand authority*  
Verify the GBP is claimed, matching NAP is exact (1018C Nostrand Ave, Brooklyn, NY 11225 / (718) 773-9391), all 6+ services are listed as GBP service items, 10+ photos uploaded (interior, exterior, frame display, Dr. Shlivko in clinical context), primary category set to "Optometrist," and the website URL points to www.nostrandoptical.com. Link the GBP URL in the schema `sameAs` field.

**S2 — Build a verified Yelp owner listing and solicit reviews from established patients**  
*Platforms: Perplexity, ChatGPT | Score impact: +6–8 pts brand authority*  
For NYC local businesses, Yelp is one of Perplexity's primary sourcing targets. A practice open since 2001 with zero verifiable Yelp reviews represents a significant missed citation surface.

**S3 — Create a LinkedIn company page for Nostrand Optical and link from footer**  
*Platforms: Bing Copilot, ChatGPT | Score impact: +4–6 pts brand authority*  
LinkedIn is Bing Copilot's primary entity confirmation signal for professional service businesses (the Microsoft-ecosystem equivalent of Wikipedia for ChatGPT). Takes 1 hour to create.

**S4 — Add at least one photo per blog post + headshot for Dr. Shlivko on /about**  
*Platforms: Google Gemini, Google AIO | Score impact: +4–5 pts content*  
The complete absence of images across all reviewed pages is the clearest visual signal of AI-generated content. A photo of the slit lamp on the dry eye post, or the frame collection on the designer frames post, converts generic content into demonstrably original content. Dr. Shlivko's headshot on /about is a prerequisite for the Person schema `image` property.

**S5 — Create a short YouTube video (3–5 min, Dr. Shlivko on camera)**  
*Platforms: Google Gemini | Score impact: +4–6 pts platform*  
Smartphone-quality is acceptable. Topic: "What to Expect at Your Eye Exam at Nostrand Optical." This opens the YouTube/Knowledge Panel pathway and satisfies Gemini's multi-format content preference. Upload to a practice YouTube channel and embed on /about or the eye exam blog post.

**S6 — Add `Article`/`BlogPosting` schema to all 9 blog posts**  
*Platforms: Google AIO, ChatGPT | Score impact: +3–4 pts schema*  
With `headline`, `datePublished`, `dateModified`, `author` linked to `#doctor-shlivko`, and `publisher` linked to `#business`. Activates Google Article rich results and signals content authorship to AI citation engines.

**S7 — Replace Yahoo email with domain email**  
*Platforms: All (trust signal) | Score impact: +2 pts trustworthiness*  
`nsoptical@yahoo.com` on a 25-year-old practice undermines professional entity coherence. `appointments@nostrandoptical.com` is a 15-minute setup via Google Workspace or equivalent.

---

## 8. Ready-to-Deploy Schema

### Homepage Schema (Replace Current — Full @graph)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness", "Optician"],
      "@id": "https://www.nostrandoptical.com/#business",
      "name": "Nostrand Optical",
      "description": "Full-service optometry practice in Crown Heights, Brooklyn. Comprehensive eye exams, contact lens fittings, dry eye treatment, glaucoma and cataract screenings, and pediatric exams. Medicaid and Medicare accepted. Serving Brooklyn since 2001.",
      "url": "https://www.nostrandoptical.com",
      "telephone": "(718) 773-9391",
      "email": "nsoptical@yahoo.com",
      "foundingDate": "2001",
      "image": "https://www.nostrandoptical.com/images/storefront.jpg",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nostrandoptical.com/images/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1018C Nostrand Ave",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11225",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.6582,
        "longitude": -73.9499
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "11:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "11:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Medicaid, Medicare, UnitedHealthcare, Anthem, Health First, Fidelis Care, CareCredit",
      "medicalSpecialty": "Optometric",
      "hasMap": "https://maps.google.com/?q=1018C+Nostrand+Ave+Brooklyn+NY+11225",
      "areaServed": {"@type": "City", "name": "Brooklyn"},
      "employee": {"@id": "https://www.nostrandoptical.com/#dr-shlivko"},
      "sameAs": [
        "REPLACE_WITH_GOOGLE_BUSINESS_PROFILE_URL",
        "REPLACE_WITH_YELP_URL",
        "REPLACE_WITH_HEALTHGRADES_URL",
        "REPLACE_WITH_ZOCDOC_URL"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.nostrandoptical.com/#dr-shlivko",
      "name": "Dr. Alexander Shlivko",
      "honorificSuffix": "OD",
      "jobTitle": "Doctor of Optometry",
      "description": "Dr. Alexander Shlivko, OD, is the optometrist at Nostrand Optical in Crown Heights, Brooklyn. He provides comprehensive eye exams, contact lens fittings, and management of dry eye, glaucoma, and cataracts. Serving Crown Heights since 2001.",
      "url": "https://www.nostrandoptical.com/about",
      "image": "REPLACE_WITH_HEADSHOT_URL",
      "worksFor": {"@id": "https://www.nostrandoptical.com/#business"},
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Doctor of Optometry (OD)"
      },
      "knowsAbout": ["Optometry","Eye Exams","Contact Lens Fittings","Dry Eye Treatment","Glaucoma","Cataracts","Pediatric Eye Care"],
      "sameAs": [
        "REPLACE_WITH_HEALTHGRADES_DOCTOR_URL",
        "REPLACE_WITH_ZOCDOC_DOCTOR_URL"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nostrandoptical.com/#website",
      "url": "https://www.nostrandoptical.com",
      "name": "Nostrand Optical",
      "publisher": {"@id": "https://www.nostrandoptical.com/#business"}
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nostrandoptical.com/#webpage",
      "url": "https://www.nostrandoptical.com",
      "name": "Eye Exams & Eyewear in Crown Heights, Brooklyn",
      "isPartOf": {"@id": "https://www.nostrandoptical.com/#website"},
      "about": {"@id": "https://www.nostrandoptical.com/#business"}
    }
  ]
}
</script>
```

### FAQPage Schema (Add to top blog posts — example for optometrist-crown-heights)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Nostrand Optical accept Medicaid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nostrand Optical accepts Medicaid and Medicare, along with UnitedHealthcare, Anthem, Health First, Fidelis Care, CareCredit (0% interest plans), and most major insurance plans. Call (718) 773-9391 to confirm your specific plan."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an eye exam take at Nostrand Optical?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive eye exam at Nostrand Optical takes approximately 45 minutes. It covers visual acuity, intraocular pressure, slit-lamp examination, and a dilated fundus exam when indicated."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get same-day glasses at Nostrand Optical in Crown Heights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most standard prescription eyeglasses can be filled same-day at Nostrand Optical. Designer frames from Gucci, Versace, Prada, and Dolce & Gabbana are available alongside value and Medicaid-covered options."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nostrand Optical see children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nostrand Optical provides pediatric eye exams for children ages 7 and up, screening for amblyopia, strabismus, early myopia, and other conditions that affect learning and development."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Nostrand Optical located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nostrand Optical is located at 1018C Nostrand Ave, Brooklyn, NY 11225 in Crown Heights. Hours are Monday–Friday 11am–7pm and Saturday 11am–5pm. Call (718) 773-9391 or walk in."
      }
    }
  ]
}
</script>
```

---

## 9. Ready-to-Deploy llms.txt

Create `/public/llms.txt` in the Next.js project (deploys to `https://www.nostrandoptical.com/llms.txt`):

```
# Nostrand Optical

> Full-service optometry practice at 1018C Nostrand Ave, Crown Heights, Brooklyn, NY 11225. Phone: (718) 773-9391. Founded 2001. Dr. Alexander Shlivko, OD. Services: comprehensive eye exams, contact lens fittings, dry eye treatment, glaucoma and cataract screening, pediatric eye exams, and same-day glasses. Designer frames: Gucci, Versace, Prada, Dolce & Gabbana. Accepts Medicaid, Medicare, UnitedHealthcare, Anthem, Health First, Fidelis Care, CareCredit. Hours: Mon–Fri 11am–7pm, Sat 11am–5pm, Sun closed.

## Core Pages

- [Home](https://www.nostrandoptical.com): Practice overview, contact info, hours, and insurance.
- [Services](https://www.nostrandoptical.com/services): Full list of clinical services including eye exams, contact lenses, dry eye, glaucoma, cataracts, pediatric exams, and same-day glasses.
- [Insurance](https://www.nostrandoptical.com/insurance): Accepted plans including Medicaid, Medicare, and major carriers.
- [About](https://www.nostrandoptical.com/about): Dr. Alexander Shlivko, OD — practice history since 2001 and patient care approach.

## Educational Content

- [Optometrist in Crown Heights Brooklyn](https://www.nostrandoptical.com/blog/optometrist-crown-heights): What to expect as a new patient; services, insurance, and booking.
- [Eye Exam Crown Heights Brooklyn](https://www.nostrandoptical.com/blog/eye-exam-crown-heights-brooklyn): Complete guide to comprehensive eye exams at Nostrand Optical.
- [Dry Eye Treatment Brooklyn](https://www.nostrandoptical.com/blog/dry-eye-treatment-brooklyn): Clinical guide to dry eye types (evaporative, aqueous-deficient, MGD) and treatment options.
- [Dry Eye Treatment Crown Heights](https://www.nostrandoptical.com/blog/dry-eye-treatment-crown-heights): Crown Heights-specific dry eye resource page.
- [Contact Lens Fitting Brooklyn](https://www.nostrandoptical.com/blog/contact-lens-fitting-brooklyn): Specialty lens types (toric, multifocal, daily, extended wear) and fitting process.
- [Pediatric Eye Exam Brooklyn](https://www.nostrandoptical.com/blog/pediatric-eye-exam-brooklyn): Children's vision care starting at age 7; amblyopia, strabismus, myopia screening.
- [Same-Day Glasses Brooklyn](https://www.nostrandoptical.com/blog/same-day-glasses-brooklyn): Same-day prescription eyewear with designer frames in Crown Heights.
- [Optometrist Nostrand Ave Brooklyn](https://www.nostrandoptical.com/blog/optometrist-nostrand-ave-brooklyn): Neighborhood-level optometry resource for Nostrand Ave and Crown Heights.
- [Designer Frames Crown Heights](https://www.nostrandoptical.com/blog/designer-frames-crown-heights): Designer eyewear selection guide; Gucci, Versace, Prada, Dolce & Gabbana.
```

---

## 10. Score Projection: If All Quick Wins Implemented

| Category | Current | After QW1–QW6 | After QW + MT | After All |
|---|---|---|---|---|
| AI Citability | 45 | 54 | 64 | 72 |
| Brand Authority | 18 | 22 | 38 | 55 |
| Content & E-E-A-T | 58 | 60 | 72 | 78 |
| Technical | 68 | 74 | 78 | 82 |
| Structured Data | 44 | 62 | 72 | 80 |
| Platform | 38 | 44 | 58 | 68 |
| **Composite** | **45** | **54** | **64** | **72** |

---

## Appendix: Site Inventory

| URL | Title | Meta Description | Schema | Status |
|---|---|---|---|---|
| / | Eye Exams & Eyewear in Crown Heights, Brooklyn | Missing | LocalBusiness (errors) | Issues |
| /services | Our Services — Nostrand Optical | Missing | LocalBusiness (errors) | Issues |
| /insurance | Insurance — Nostrand Optical | Missing | LocalBusiness (errors) | Issues |
| /about | About — Nostrand Optical | Missing | LocalBusiness (errors) | Issues |
| /blog | Blog — Nostrand Optical | Missing | None | Issues |
| /blog/optometrist-crown-heights | Optometrist in Crown Heights Brooklyn | Missing | None | Issues |
| /blog/eye-exam-crown-heights-brooklyn | Eye Exam Crown Heights Brooklyn \| Nostrand Optical \| Nostrand Optical | Missing | None | Title bug |
| /blog/dry-eye-treatment-brooklyn | Dry Eye Treatment Brooklyn | Missing | None | Issues |
| /blog/contact-lens-fitting-brooklyn | Contact Lens Fitting Brooklyn | Missing | None | Issues |
| /blog/pediatric-eye-exam-brooklyn | Pediatric Eye Exam Brooklyn | Missing | None | Issues |
| /blog/same-day-glasses-brooklyn | Same-Day Glasses Brooklyn | Missing | None | Issues |
| /blog/optometrist-nostrand-ave-brooklyn | Optometrist Nostrand Ave Brooklyn | Missing | None | Issues |
| /blog/dry-eye-treatment-crown-heights | Dry Eye Treatment Crown Heights | Missing | None | Issues |
| /blog/designer-frames-crown-heights | Designer Frames Crown Heights | Missing | None | Issues |

---

*Generated by Signal AI Agency · signalai.agency · josh@signalai.agency*  
*GEO Audit methodology: AI Citability (25%) + Brand Authority (20%) + Content E-E-A-T (20%) + Technical (15%) + Structured Data (10%) + Platform Optimization (10%)*
