---
title: "Organization schema hierarchy. What parent company markup actually declares."
date: "2026-08-23"
slug: organization-schema-hierarchy-parent-markup
description: "Parent company markup tells AI which business entity owns a location. Get the hierarchy wrong and you're invisible to citations."
category: "Schema"
subcategory: "Architecture"
read_time: 7
---

# Organization schema hierarchy. What parent company markup actually declares.

Parent company markup tells an AI engine whether a location is a franchise, a subsidiary, or an independent operation. Get the hierarchy wrong and you're invisible to citations. The schema difference between a single Brooklyn optometry practice and a regional chain is not cosmetic — it changes what a retrieval engine considers the authoritative entity.

## Why hierarchy matters to retrieval

An AI engine needs to know what it's citing. If you run a single location in Crown Heights, your markup says "this LocalBusiness is the whole thing." If you're part of a regional chain, your markup says "this LocalBusiness belongs to an Organization that owns multiple locations." The engine uses that distinction to decide whether to cite your storefront or the parent company's national page.

A retrieval system does not want to cite a location page and a parent page simultaneously. It picks one. If your hierarchy is ambiguous, you lose citations to the parent — or worse, you don't get cited at all because the engine can't resolve which entity is actually responsible for the business claim you're making.

## Single location: you are the organization

If you run one storefront and you own it outright, your LocalBusiness schema does not need a parent. You declare yourself as an independent entity. The `name`, `address`, `telephone`, and `areaServed` fields define the whole business.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nostrand Optical",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Nostrand Avenue",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11216"
  },
  "telephone": "+1-718-555-0123"
}
```

This tells the engine: "Nostrand Optical is the business." No parent. No organizational ambiguity. When an engine retrieves an optometry query in Crown Heights, it can cite this entity directly because the schema declares it as a standalone operator.

## Franchise or subsidiary: declare the parent

If you're a franchise location or a subsidiary, your LocalBusiness markup includes a `parentOrganization` field that points to the parent entity. The parent is an Organization schema object, separate from your location.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nostrand Optical Crown Heights",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Nostrand Avenue",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11216"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Nostrand Optical",
    "url": "https://nostrandoptical.com",
    "sameAs": ["https://www.facebook.com/nostrandoptical"]
  }
}
```

The engine now knows: "This location belongs to a larger entity." It can cite the location for neighborhood-specific queries ("optometry Crown Heights") and the parent for broader ones ("optical near me").

## The sameAs field locks identity

A parent Organization needs a `sameAs` field to declare its canonical URL. Without it, the engine treats your parent markup as floating — it has no anchor to retrieve against. With it, the engine can resolve: "This parent Organization is the same thing as this website."

`sameAs` accepts an array. Use it to link to your primary domain, your social profiles, and any other canonical identity declarations.

```json
"sameAs": [
  "https://nostrandoptical.com",
  "https://www.facebook.com/nostrandoptical",
  "https://www.linkedin.com/company/nostrand-optical"
]
```

If your location page and your parent page use different domains (a franchise location on a subdomain, for example), make sure both point to the same parent via `sameAs`. Conflicting parents confuse retrieval.

## Multiple locations: use Organization, not LocalBusiness for the parent

A common mistake: declaring the parent as a LocalBusiness with multiple address fields. That's structurally wrong. The parent should be an Organization, and each location should be a separate LocalBusiness that references it.

Wrong:
```json
{
  "@type": "LocalBusiness",
  "name": "Nostrand Optical",
  "address": [
    { "streetAddress": "1234 Nostrand Avenue", "addressLocality": "Brooklyn" },
    { "streetAddress": "5678 Park Slope", "addressLocality": "Brooklyn" }
  ]
}
```

Right:
```json
{
  "@type": "Organization",
  "name": "Nostrand Optical",
  "url": "https://nostrandoptical.com"
}
```

Then create a separate LocalBusiness for each location:

```json
{
  "@type": "LocalBusiness",
  "name": "Nostrand Optical Brooklyn",
  "address": { "streetAddress": "1234 Nostrand Avenue" },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Nostrand Optical",
    "url": "https://nostrandoptical.com"
  }
}
```

The Organization is the entity. The LocalBusiness instances are the proof points. An engine retrieves and cites the location, not a confused hybrid schema.

## What gets cited depends on the query

A retrieval engine uses your hierarchy to decide scope. If someone asks "optometry in Crown Heights," the engine cites the specific location. If someone asks "Nostrand Optical near me," the engine cites the location that's closest to them, but knows it's part of the Nostrand organization.

If you don't declare the hierarchy clearly, the engine has to guess. It might cite the parent page instead of your location. It might refuse to cite either because the relationship is ambiguous. Clarity in hierarchy gets you citations at the right scope.

The hierarchy also matters for verification. If you run a single location and you claim to be independent via LocalBusiness markup, but your parent company also claims you via their site, the engine sees the conflict. If both markup sets declare the same parent Organization, the engine trusts both.

## One thing to check tomorrow

Open your site's structured data in Google's Rich Results Test. If you see a LocalBusiness, check whether it has a `parentOrganization` field. If you're a franchise or subsidiary, it should. If you're independent, it shouldn't. If you're a multi-location business and each location has its own page, make sure each location declares the same parent with `sameAs` pointing to your main domain.

A single wrong hierarchical declaration costs you citations across your whole location network.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)