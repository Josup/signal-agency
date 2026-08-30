---
title: "Audit Your Structured Data in Ten Minutes With the Rich Results Test"
date: "2026-08-30"
slug: audit-structured-data-rich-results-test
description: "Use Google's Rich Results Test to check your schema markup in under ten minutes. A step-by-step guide for independent businesses."
category: "Playbook"
subcategory: "Schema"
read_time: 7
---

# Audit Your Structured Data in Ten Minutes With the Rich Results Test

Google's Rich Results Test tells you exactly which schema types your site is rendering, which ones are valid, and which ones are broken. Most Brooklyn independent businesses run this test zero times. Running it once takes ten minutes and will show you every structural gap in your markup.

The test doesn't guess. It crawls your live page, parses the schema, validates it against the Schema.org spec, and tells you which rich results Google will actually display. It's the fastest way to know whether your markup is working.

## What the Rich Results Test Actually Does

The Rich Results Test fetches your page, extracts all schema markup (JSON-LD, microdata, RDFa), checks it against Schema.org definitions, and reports which types are valid. It shows you:

- Every schema type present on the page
- Whether each type is valid or has errors
- Which rich results are eligible (the types Google will actually display as rich results in search)
- The exact markup that passed or failed

The test doesn't measure whether your page ranks. It measures whether your markup is correct and whether it qualifies for rich results display. Ranking happens later. Correctness happens first.

## Where to Find the Test and What You Need

Go to [Google's Rich Results Test](https://search.google.com/test/rich-results). Enter your full page URL (with `https://`, with `www` if your site uses it). Click "Test URL" and wait ten seconds.

You need:
- The live URL of the page you want to audit (homepage, a service page, your about page)
- Nothing else

Do not test staging URLs or draft pages. The test crawls the live web. If the page is not live and public, the test will fail or give you outdated data.

## Reading the Results: What Passes and What Fails

The test shows a green "✓" for valid schema and a red "✗" for errors. Valid doesn't mean eligible for rich results. A `Person` schema can be valid but not eligible for rich results display. An eligible type is what you want.

Look for the "Rich results" label. The types listed under it are the ones Google will display. If your page has `LocalBusiness` markup and it's valid, the test will list `LocalBusiness` under rich results. If your markup is broken, it will show you the error: "missing required property `address`" or "invalid value for `telephone`" or "property not recognized."

Common errors:
- Missing required fields (a `LocalBusiness` without an address, a `FAQPage` without question-answer pairs)
- Wrong data type (a phone number as text when it should be a string, a URL as plain text instead of a structured property)
- Markup on the wrong page (schema for a service area business written as if it's a storefront location)

## The Nostrand Optical Baseline: Four Rich Results on Launch Day

When we launched Nostrand Optical's site, the Rich Results Test showed four valid rich results immediately: `LocalBusiness`, `MedicalBusiness`, `FAQPage`, and `BreadcrumbList`. All four passed validation with zero errors. That baseline tells you what a correct, complete markup stack looks like.

If your test shows zero rich results, or only one, you have gaps. If it shows errors, you have syntax problems. Either way, the test shows you the exact fix needed. "Missing required property `name`" is actionable. You add a name field and retest.

## Running the Test on Every Page That Matters

Run the test on:
- Your homepage (should have at least `LocalBusiness` and `BreadcrumbList`)
- Your main service page (should have `Service` schema if you offer defined services)
- Your about page (should have `Person` or `Organization` depending on business structure)
- Your FAQ page (should have `FAQPage` if you have Q&A content)

You're looking for two things: (1) Is the markup valid? (2) Are the right rich result types showing?

If your homepage shows only `BreadcrumbList` but you have a physical location or you take appointments, you're missing `LocalBusiness` or `AggregateOffer`. The test will not tell you what's missing—it only shows what's there—but you'll see the absence. That's your signal to add it.

## What to Do When the Test Finds Errors

The test reports the error with a line number and property name. If it says "Property `streetAddress` not recognized," your markup uses a Schema.org property that doesn't exist (it's `streetAddress` in some contexts, but `streetAddress` is not valid in `PostalAddress`—it should be wrapped inside an `address` object with `streetAddress` as a sub-property).

Fix the error in your site code, deploy the change, and retest the same URL. The test crawls live pages, so you need the fix live before you retest.

If you don't control your site's code, send the error report to your developer. "Rich Results Test says `streetAddress` is not recognized on line 47, in the `address` property" is clear enough for them to fix it fast.

## Why This Matters for AI Search

AI search engines like ChatGPT and Perplexity don't display rich results the way Google does. They pull from schema markup to understand what a page is about and what proof it carries. Clean, valid markup makes their retrieval safer. A broken `LocalBusiness` schema means an AI engine has to guess whether you're a real business with a real address. Valid markup means it knows.

When you optimize for [generative engine optimization](/what-is-geo.html), the Rich Results Test is your first gate. Pass the test, and your markup is retrievable. Fail it, and you're asking an AI engine to fill in the gaps, which it often gets wrong.

## Run It Today, Then Monthly

Do this audit today. Take ten minutes, test your homepage and your main service page, and note the errors. Then set a calendar reminder to run the test monthly. Schema degrades when you update page content, add new properties, or change how you structure information. Monthly testing catches drift before it accumulates.

If you want a faster way to audit all your schema at once and catch issues across your whole site, a [free AI search audit](/audit.html) will check every page at once and show you gaps no single page test reveals.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)