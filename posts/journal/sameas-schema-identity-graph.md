---
title: "SameAs Is the Identity Graph Most Local Sites Never Fill In"
date: "2026-08-23"
slug: sameas-schema-identity-graph
description: "SameAs markup tells AI engines which profiles and sites belong to the same business. Most local sites skip it. Here's why it matters."
category: "Schema"
subcategory: "Identity"
read_time: 7
---

# SameAs Is the Identity Graph Most Local Sites Never Fill In

AI search engines need to know that your website, your Google Business Profile, your Instagram, and your Yelp listing are all the same business. Without `sameAs` markup, they treat them as separate entities competing for the same retrieval slot. `sameAs` is a single Schema.org property that solves this—and almost nobody uses it.

## The Identity Problem

When you have a storefront in Crown Heights, a GBP listing, and a website, you've created three digital profiles. An AI engine crawling the web sees them independently. It doesn't automatically assume the "Brooklyn Optical" on your site is the same as the "Brooklyn Optical" on Google Maps. Citation engines have to guess. They often guess wrong—or they treat your profiles as separate entities, fragmenting your citation surface across platforms.

`sameAs` is a property that lives in your Schema.org markup and points outward. It says: "This business also exists here, and here, and here." You add it once to your site's LocalBusiness or Organization schema, and you're telling every engine that indexes you: these profiles are one entity.

## How SameAs Works in Markup

`sameAs` is an array of URLs. Add it to your LocalBusiness schema like this:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nostrand Optical",
  "url": "https://nostrandoptical.com",
  "sameAs": [
    "https://www.google.com/maps/place/nostrand-optical",
    "https://www.instagram.com/nostrandoptical",
    "https://www.yelp.com/biz/nostrand-optical-brooklyn"
  ]
}
```

Each URL in the array tells the engine: this business also exists at this address. The engine uses these connections to stitch your profiles together into a single identity graph. When one profile gets a citation, the engine understands it's citing the same business that appears on your site.

## Where Your Profiles Actually Live

Before you write markup, audit your actual presence. Most local businesses in Brooklyn have:

- Your website
- Google Business Profile
- Instagram or Facebook business page
- Yelp listing
- Apple Maps (auto-pulled from GBP data)
- Local directory listings (if you're in Yelp, you're indexed by citation aggregators)

Not all of these need to be in `sameAs`. Include only profiles you actively control or that appear in the top 10 results when someone searches your business name. Skip the aggregator directories—they pull your data from GBP or your site anyway, and including hundreds of URLs dilutes the signal.

For a Brooklyn independent business, start with four: your site, GBP, Instagram (if you use it), and Yelp (if you're there). That's enough to establish identity coherence.

## Why Engines Care About Identity

AI search relies on retrieval-augmented generation. When a user asks "best optometry in Crown Heights," the engine pulls sources it trusts. If your website, GBP, and Yelp look like separate businesses because they're not connected, the engine has to evaluate them independently. It might cite your GBP but not your site, or vice versa. You lose coherence.

With `sameAs` declared, the engine sees your profile strength across all platforms at once. A high-quality review on Yelp reinforces your authority on your site. Your site's structured data strengthens your GBP eligibility. Citations to any one profile become citations to all of them—because the engine knows they're one entity.

## The GBP URL Problem

Getting the Google Business Profile URL right is the hardest part. GBP URLs are not always obvious. Here's how to find yours:

1. Open your GBP dashboard.
2. Click the business name at the top.
3. Click "View Business." This opens your public GBP page.
4. Copy the full URL from the address bar.

That URL goes into `sameAs`. It often looks like `https://www.google.com/maps/place/business-name` or a shorter Google Maps link. Use the full path, not a shortened URL.

## Testing and Validation

Once you've added `sameAs` to your LocalBusiness schema, validate it:

1. Go to [Google's Rich Results Test](https://search.google.com/test/rich-results).
2. Paste your site's URL.
3. Look for the LocalBusiness structured data card.
4. Expand the "sameAs" field—it should list every URL you added.

If `sameAs` appears but the URLs are malformed or missing, the markup is broken. Fix the URLs and re-test.

Google doesn't show a separate rich result for `sameAs` presence. It's invisible to users. But it changes how the engine indexes your business and how it decides which profile to cite when answering a local query.

## What This Means for Your Business

If you're a solo operator or a small independent business in Brooklyn, `sameAs` is one of the cheapest wins in schema markup. It takes 10 minutes to audit your profiles, find the URLs, and add them to your existing LocalBusiness schema. It requires no external tools and no paid services.

The payoff is coherence. Your profiles stop competing. They reinforce each other. When an AI engine retrieves your business for a neighborhood-specific query, it sees all your profiles as one entity—stronger, more authoritative, harder to confuse with a competitor.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)