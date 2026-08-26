---
title: "Service Schema: Making Your Offering Visible to AI Search"
date: "2026-08-23"
slug: service-schema-distinct-offering
description: "Service schema tells AI engines what you offer separately from page text. Here's how to mark it up so Perplexity and ChatGPT cite you as a specific solution."
category: "Schema"
subcategory: "Local SEO"
read_time: 7
---

# Service Schema: Making Your Offering Visible to AI Search

When a customer asks ChatGPT "where can I get bookkeeping for my Brooklyn salon," the engine needs to know you offer bookkeeping as a distinct service, not just infer it from reading your homepage paragraph. Service schema tells AI search engines exactly what you do — and retrieval engines cite specificity. A marked-up service is citable; unmarked text is not.

Most Brooklyn businesses describe their services in prose. "We offer web design, logo work, and brand strategy." An AI engine reads that as three separate things only if you structure them separately. Without markup, the engine assembles its answer from context, guessing. With Service schema, you declare each offering explicitly. That declaration is what gets cited.

## Why Service Schema Matters Now

AI search engines operate on citation. When Perplexity answers "web designers in Brooklyn," it pulls businesses with strong proof that web design is their offering. A service marked `http://schema.org/Service` with a name, description, and areaServed is proof. A paragraph is not.

Nostrand Optical didn't just have "eye exams" mentioned on the homepage. We marked each service — eye exams, contact lens fitting, eyewear consultation — as discrete Service objects within their LocalBusiness schema. The engine knew exactly what Nostrand offered without assembling it from surrounding text. That clarity made citation faster and more precise.

Service schema also controls eligibility. If you offer both residential and commercial plumbing, marking them separately means you'll show up for "commercial plumbing in Williamsburg" instead of diluting both queries with one unmarked description. The engine sees two distinct services and can weight which one to cite based on the prompt.

## The Schema Structure

Service schema lives inside LocalBusiness. Each service gets its own object with a name, description, and areaServed field.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Studio North",
  "url": "https://studionorth.com",
  "hasService": [
    {
      "@type": "Service",
      "name": "Logo Design",
      "description": "Custom brand identity design including logo mark, wordmark, and brand guidelines.",
      "areaServed": {
        "@type": "City",
        "name": "Brooklyn"
      }
    },
    {
      "@type": "Service",
      "name": "Brand Strategy",
      "description": "Positioning, messaging, and visual direction for early-stage startups.",
      "areaServed": {
        "@type": "City",
        "name": "Brooklyn"
      }
    }
  ]
}
```

The name field is what the engine treats as the service offering. The description is what it can cite or pull into an AI response. The areaServed tells it where you deliver that service — critical for neighborhood-level AI search answers.

Without the schema, an engine reads your homepage and infers "Studio North probably does design." With the schema, it knows "Studio North explicitly offers Logo Design and Brand Strategy in Brooklyn." That explicitness is what makes you retrievable for specific service queries.

## The areaServed Field Matters

Many Brooklyn businesses offer services across the city, or even beyond it. But AI search engines increasingly resolve at neighborhood level, not borough level. When you mark areaServed as "Brooklyn" for every service, you're saying "I serve all of Brooklyn equally." That's often true, but it dilutes you.

If you primarily serve Crown Heights but will travel to Williamsburg for large projects, mark two separate service areas. If you're a tutoring service and you work online with students across the tristate, mark areaServed as the larger geography. The engine will then consider you for "tutoring in New Jersey" and "online math tutor," not just Brooklyn-local answers.

The areaServed field is where your service schema meets geography. Get it wrong and you're invisible to neighborhood-specific queries. Get it right and you're a candidate for both local and regional answers.

## Service Type Specificity

The Service name should be specific enough that someone searching for it would find you. "Consulting" is too broad. "Small business tax consulting" is better. "Tax strategy for freelancers in Brooklyn" is what you'd write in a description, but the name should stay at service-name level: "Tax Consulting for Freelancers."

An engine uses the name field to match intent. When a prompt includes "freelancer tax help in Brooklyn," it looks for Service objects with "tax" and "freelancer" nearby in the schema. A service named "Consulting" will not match as cleanly as one named "Tax Consulting."

The description is where you add context and evidence. Include specifics: the problem you solve, the audience you serve, the outcome you deliver. "We help Brooklyn freelancers manage quarterly taxes, reduce liability, and keep better records" is citable. "We do tax stuff" is not.

## When to Mark Services vs. Products

Service schema applies to services you deliver — work, labor, expertise, time. If you sell products, use Product schema instead. If you sell both (a salon that sells hair care products and also cuts hair), mark services with Service and products with Product separately.

Confusion here causes problems. Brooklyn BJJ Lessons marked their offering with Person and LocalBusiness schema because the service is the instruction itself — the relationship between instructor and student. A product-based business would need a different approach.

If you're uncertain, ask: am I selling my time and expertise, or a manufactured object? Time and expertise is Service. Objects are Product. Some businesses do both, and that's fine — mark them separately so engines understand the difference.

## Testing Your Service Schema

The [Google Rich Results Test](https://search.google.com/test/rich-results) will validate your Service schema if it's nested correctly inside LocalBusiness. Run it. If your services don't appear in the results preview, the markup is either malformed or incomplete.

Common errors: forgetting areaServed entirely, or marking it as a string ("Brooklyn") instead of a proper Place object. Engines are forgiving about many schema mistakes, but areaServed matters — get it right.

Your goal is simple: every service you mark up should be queryable separately. When someone asks ChatGPT "where do I find X service in Brooklyn," your business should appear because X matches your marked Service name and Brooklyn matches your areaServed. Prose cannot do that work. Schema can.

---

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)