---
title: "Service Area Radius in Schema.org. How to Declare It Without Diluting Citations Across Boroughs."
date: "2026-08-17"
slug: service-area-radius-schema
description: "Service area markup without borders confuses AI search. Here's how to declare your radius so engines cite you locally, not citywide."
category: "Schema"
subcategory: "Local SEO"
read_time: 7
---

# Service Area Radius in Schema.org. How to Declare It Without Diluting Citations Across Boroughs.

Most service-area businesses declare their territory too broadly in structured data. An electrician in Crown Heights who serves Brooklyn, Queens, and parts of the Bronx gets cited for "plumbers in New York City" instead of "emergency electrician in Crown Heights." The engine sees the radius, not the neighborhood. You lose local specificity and the citation that matters.

The fix is precise: use `areaServed` with explicit geographic boundaries, not a radius in miles. Pair it with `serviceArea` for neighborhoods you actually serve. AI search picks the tighter geographic claim.

## The Radius Problem: Why Miles Dilute Citations

`areaServed` accepts two formats: a list of named locations (neighborhoods, zip codes, cities) or a `GeoCircle` object with a center point and radius in kilometers.

The radius approach feels clean. You drop a pin on your shop and declare "I serve 5 miles in every direction." An engine ingests this as a citywide service area. When someone asks "electrician near me" from Manhattan, the engine sees your 5-mile radius includes upper Manhattan. You get pulled into a Manhattan answer. You're competing against Manhattan electricians in a market where you don't actually work.

The named-location approach is more specific. "Crown Heights," "Prospect Heights," "Park Slope," "Bed-Stuy" are signals. An engine reads these as your actual market. When a user queries from Crown Heights, you rank higher. When they query from Astoria, you don't appear.

Specificity wins in AI search because the engine is optimizing for relevance, not coverage. A citation that's accurate is worth more than a citation that's broad.

## How to Structure `areaServed` for Local Strength

Use the `areaServed` field with an array of named areas. Each one should be a place you actually service—neighborhoods, not boroughs.

```json
"areaServed": [
  {
    "@type": "City",
    "name": "Crown Heights"
  },
  {
    "@type": "City",
    "name": "Prospect Heights"
  },
  {
    "@type": "City",
    "name": "Park Slope"
  },
  {
    "@type": "City",
    "name": "Flatbush"
  }
]
```

This is more granular than "Brooklyn." An engine sees that you serve specific neighborhoods, not the whole borough. When it assembles an answer for "electrician near me" from someone in Park Slope, it pulls you—not because you serve Park Slope, but because Park Slope is in your declared service areas and the user is in Park Slope.

The same markup keeps you out of a Williamsburg answer. Williamsburg isn't in your list.

## When a Radius Makes Sense (And When It Doesn't)

A `GeoCircle` radius works for delivery services or mobile services where the boundary is genuinely distance-based. A pizza place that delivers 2 miles from the shop. A plumber who responds to calls within a service territory.

Even then, name the neighborhoods inside that radius in addition to the radius itself.

```json
"areaServed": [
  {
    "@type": "City",
    "name": "Crown Heights"
  },
  {
    "@type": "City",
    "name": "Prospect Heights"
  },
  {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.6620",
      "longitude": "-73.9776"
    },
    "geoRadius": "3.2" 
  }
]
```

The kilometers matter here. Schema uses kilometers, not miles. 5 miles is roughly 8 kilometers. Don't round up. If you serve 3 miles, declare 4.8 kilometers. Precision signals intentionality to the engine.

But don't stop there. The named neighborhoods are what AI search actually cites. The radius is a fallback.

## The `serviceArea` Field: Neighborhood-Level Targeting

`serviceArea` is a cousin of `areaServed`. It's used less often but it's cleaner for local businesses. Where `areaServed` is "I serve these places," `serviceArea` is "I operate in these places."

A therapist who runs a practice in Williamsburg but takes remote clients across New York uses `serviceArea` to declare "Williamsburg" as the physical location, then uses `areaServed` to declare the remote territories.

For a brick-and-mortar service business, `serviceArea` should match your actual neighborhoods. Don't declare a 10-mile radius here. Declare where you work.

```json
"serviceArea": [
  {
    "@type": "City",
    "name": "Crown Heights"
  },
  {
    "@type": "City",
    "name": "Prospect Heights"
  }
]
```

An engine reads this as "this business operates in these neighborhoods." The citation it generates is neighborhood-specific.

## Zip Codes: Precise But Less Useful

You can declare `areaServed` as a list of zip codes instead of neighborhoods.

```json
"areaServed": ["11213", "11238", "11215", "11218"]
```

This works. It's precise. But AI search doesn't cite by zip code. It cites by neighborhood or "near X." A zip-code-only declaration gives the engine the geography but not the language to cite you naturally.

Zip codes belong in your GBP service areas, not in your schema.org service areas.

## What You Check: Google's Rich Results Test

You can't directly validate service area markup in the Rich Results Test. But you can check that your `LocalBusiness` schema renders cleanly and includes the `areaServed` field with no syntax errors.

Paste your schema into the [Google Rich Results Test](https://search.google.com/test/rich-results). Look for the `areaServed` array. It should list neighborhoods, not a single radius. If the test doesn't show it, check your JSON syntax.

A schema that's valid but doesn't mention service areas at all is worse than silent. The engine infers your service territory from your address. If you're in Crown Heights and you declare no service areas, the engine assumes you only serve Crown Heights. That's sometimes right and sometimes wrong. Declaring your true territories is the correction.

## The Borough Problem: Why Broader Isn't Better

A contractor who declares "Brooklyn" as the service area instead of specific neighborhoods gets pulled into answers that aren't local. "Contractor in Brooklyn" is a 70-square-mile answer. "Contractor in Crown Heights" is 0.7 square miles.

An engine optimizes for the tighter answer because it's more likely to be useful. When it sees your markup says "I serve Crown Heights, Prospect Heights, Park Slope," it knows which of those three neighborhoods to cite you in. It doesn't cite you in all three for every query. It cites you in the neighborhood where the user is asking.

The tradeoff is clear: you lose potential visibility across the broader borough, but you gain citation strength in the neighborhoods where you actually work.

For most independent service businesses, that's the right tradeoff. One strong local citation beats three weak citywide ones.

## What This Means for Your Site

If you're a service-area business right now and your schema says "I serve [City Name]" or "I serve [Borough]," you're diluting your citations. An engine that pulls you for Manhattan or Astoria when you don't serve there is a wasted citation.

Rewrite your `areaServed` to list the neighborhoods where you actually work. Use the exact names AI search engines use: Crown Heights, Prospect Heights, Williamsburg, Park Slope, Bed-Stuy, Flatbush. Not "Brooklyn." Not "New York City."

Check your markup in the Rich Results Test. Make sure it renders with no warnings.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)