---
title: "How to Mark Up Your Google Business Profile Hours in Schema.org"
date: "2026-05-03"
slug: schema-business-hours-markup
description: "Schema.org openingHoursSpecification lets AI engines read your hours directly from your site. Here's how to mark them up correctly for local search."
category: "Schema"
subcategory: "Citations"
read_time: 6
---

# How to Mark Up Your Google Business Profile Hours in Schema.org

Your Google Business Profile hours and your website hours are two separate signals. When they don't match in structured data, AI engines either skip your business or surface the wrong information. The fix is `openingHoursSpecification` on your LocalBusiness schema block.

## Why Hours Markup Matters More Than Most Owners Think

Google AI Overviews, ChatGPT, and Perplexity all pull operating hours from structured data when it's present. When it's not, they fall back to whatever text appears on the page, your GBP listing, or third-party directories. That fallback chain introduces errors.

We've audited over 30 Brooklyn business sites in the past eight months. Fewer than 15% had machine-readable hours on their website. The other 85% had hours buried in footer text, an image, or a table that no crawler can reliably parse. Those businesses are invisible to AI search at one of the most important query moments: "is [business] open right now?"

"Is [business name] open" queries carry high intent. Someone asking that question is ready to walk in. Getting that answer wrong costs a visit.

## The Difference Between GBP Hours and Schema Hours

Your Google Business Profile hours are managed inside Google's ecosystem. Schema.org hours live on your own website. They're not the same thing, and they're not automatically synced.

GBP hours are what Google surfaces in the knowledge panel and Maps. Schema hours are what structured-data-aware systems read when they crawl your site. When the two match, AI systems treat your hours as confirmed. When they conflict, AI systems either hedge, pick one, or omit hours entirely.

The goal is alignment. Your site's schema should mirror your GBP exactly, including holiday exceptions and seasonal variations.

## The Correct openingHoursSpecification Format

Schema.org uses `openingHoursSpecification` as a property on `LocalBusiness`. Each day or range of days gets its own object. Here's what a complete weekly schedule looks like in JSON-LD:

```json
{
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "15:00"
    }
  ]
}
```

Time values use 24-hour format. Days use full names from Schema.org's `DayOfWeek` enumeration: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. If you're closed a day, omit it entirely. Don't include a closed-day object with empty strings. That pattern confuses validators.

For businesses open past midnight, like a bar or a late-night restaurant, set `closes` to a time past `opens` using the next calendar day's time. A bar open until 2am uses `"closes": "02:00"` on the following day's specification, not `"closes": "26:00"`. Schema.org doesn't support extended time notation.

## Handling Holiday Closures and Special Hours

`openingHoursSpecification` supports `validFrom` and `validThrough` date properties. This is how you handle holiday closures, summer hours, and seasonal schedules.

To mark a business closed on a specific date:

```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": "Monday",
  "opens": "00:00",
  "closes": "00:00",
  "validFrom": "2026-07-04",
  "validThrough": "2026-07-04"
}
```

Opening and closing at `00:00` on the same date signals a full-day closure. This matches Google's own GBP special hours behavior.

Nostrand Optical in Crown Heights runs adjusted hours on Jewish holidays. Their schema includes date-specific override blocks that correspond exactly to the closures in their GBP. When we added that alignment on launch, their hours appeared correctly in Google's rich result preview within 48 hours. No ambiguity, no "hours may vary" caveat in the AI response.

## Validating Your Markup Before It Goes Live

Two tools catch errors before they cost you citations.

Google's Rich Results Test at search.google.com/test/rich-results reads your URL or raw JSON and shows exactly what structured data Google can parse. Run it against your homepage and any page that contains your hours.

Schema.org's validator at validator.schema.org checks conformance against the Schema.org specification itself. It's stricter than Google's tool. A result that passes both is production-ready.

Common failures we see in audits:

- `dayOfWeek` listed as an array when only one day is specified. Single-day entries should be a string, not an array.
- `opens` and `closes` formatted as 12-hour time with AM/PM. Schema.org requires 24-hour format.
- Hours block placed on a contact page only, not the homepage. AI crawlers prioritize the homepage. Hours schema belongs there.

We run a free 15-minute structured data audit that checks your hours markup, your LocalBusiness block, and six other schema types that affect AI citation rates. Book one at [signalai.agency/#audit](https://signalai.agency/#audit).

## What Happens When You Get It Right

Brooklyn BJJ Lessons in Williamsburg had hours listed only in their GBP when we first audited the site. No schema, no machine-readable hours on the page. After adding a complete `openingHoursSpecification` block alongside their LocalBusiness schema, their class schedule started appearing in structured form in Google's knowledge panel within two weeks.

More importantly, Perplexity began surfacing their hours accurately when users asked about jiu-jitsu classes in Williamsburg. Before the markup, Perplexity was either omitting hours entirely or pulling inconsistent data from a third-party directory. After, it pulled directly from their site.

The mechanism is simple. AI systems prefer authoritative, machine-readable sources. Your own website, marked up correctly, outranks a Yelp page that scraped your hours six months ago.

## What This Means for Brooklyn Independent Businesses

Most Brooklyn business owners treat their GBP as the source of truth and let the website lag behind. That worked in 2022. It doesn't work when AI engines are deciding which business to surface in a conversational answer.

Your site needs to confirm what your GBP says. Schema.org is how it does that. `openingHoursSpecification` is not optional markup for advanced sites. It's the minimum standard for a business that wants to appear correctly in AI-generated local answers.

Update your hours schema every time you update your GBP. Treat them as one action, not two.