---
title: "Site Speed Is a Citation Factor: We Benchmarked Four Platforms"
date: "2026-05-03"
slug: site-speed-citation-factor-platform-benchmark
description: "Signal benchmarked four website platforms for AI citation rates and found load time correlates directly with retrieval frequency. Here's the data."
category: "Field Notes"
subcategory: "Performance"
read_time: 6
---

# Site Speed Is a Citation Factor: We Benchmarked Four Platforms

AI models pull from crawlable, fast-loading pages. Slow sites get indexed less frequently and cited less often. This is what our benchmark across four platforms showed.

## Why We Ran This Test

The assumption most local businesses carry is that site speed matters for Google ranking. That part is documented. What's less discussed is the relationship between page load time and AI retrieval frequency.

We had a hypothesis. AI crawlers, including the ones behind ChatGPT's web search, Perplexity, and Google's AI Overviews indexing pipeline, behave like impatient editors. They visit a URL, wait a short interval, and either parse the content or move on. A page that takes 4.2 seconds to render full content is not the same citation candidate as one that loads in 0.9 seconds.

To test this, we benchmarked the four platforms we see most often among Brooklyn independent business clients: WordPress with a shared hosting stack, Squarespace, Webflow, and Signal's own builds on static infrastructure. We measured Time to First Byte (TTFB), Largest Contentful Paint (LCP), and Total Blocking Time (TBT) across 12 pages per platform. All tests ran from the same East Coast server node.

## What the Benchmark Found

The spread was wider than expected.

WordPress on shared hosting averaged 2.8 seconds LCP and 890ms TTFB. Squarespace came in at 2.1 seconds LCP. Webflow clocked 1.4 seconds LCP when JavaScript-heavy templates were stripped back. Signal's static builds averaged 0.74 seconds LCP and 38ms TTFB.

Those numbers are not marginal differences. A 2.8-second LCP sits in Google's "needs improvement" band. A 0.74-second LCP is in the top percentile of Core Web Vitals scores globally.

The more significant finding: across our active client set, pages with LCP under 1.0 second were cited in AI Overviews at 3.1x the rate of pages with LCP above 2.5 seconds, controlling for content quality and structured data presence. That's not a ranking signal. That's a retrieval signal.

## The Crawl Window Problem

Here's the mechanism we believe is at work. AI retrieval systems don't have unlimited crawl budgets. They prioritize pages that respond quickly, load cleanly, and return parseable HTML without JavaScript dependency.

A Squarespace or WordPress page that requires 2-3 render cycles before the main content block is available presents a harder target. Some crawlers will wait. Many won't. The content that never gets parsed never gets cited.

This is distinct from Google's traditional ranking algorithm, which has more sophisticated rendering infrastructure. ChatGPT's web search and Perplexity's indexer operate on tighter tolerances. We've seen pages disappear from Perplexity citations within a month of a hosting migration that degraded TTFB from 120ms to 980ms. The content didn't change. The speed did.

## The Brooklyn BJJ Lessons Data Point

Brooklyn BJJ Lessons launched on a Signal-built static site. TTFB on their core landing pages: 41ms. LCP: 0.68 seconds. They hit ChatGPT's citation list for "BJJ private lessons Brooklyn" in 41 days.

That result has multiple contributing factors: structured data, content quality, Google Business Profile signals, and citation directory consistency. But the baseline performance created the conditions for those other elements to work. A well-structured page that loads in 4 seconds is a poorly structured page from the perspective of an AI retrieval pipeline that needs to make a decision in under 2 seconds.

We've seen comparable structured data implementations on slower platforms take 90 to 120 days to achieve the same citation frequency. Speed compresses the timeline.

## Your Site Probably Has a TTFB Problem

Most Brooklyn independent business sites we audit sit above 800ms TTFB. The median across our initial audits in 2025 was 1.2 seconds. That number is too slow for reliable AI retrieval.

TTFB is largely a hosting and infrastructure problem, not a content problem. Shared hosting on a crowded server returns slow responses regardless of how clean the page is. A WordPress install with 14 active plugins makes 30-40 server requests before the first byte of visible content renders.

The fix isn't always a platform migration. There are meaningful gains available from moving to a faster host, enabling server-side caching, and eliminating render-blocking scripts. But the ceiling is limited. A platform with inherent architectural drag will not compete with a static site on a CDN.

We run a free audit that checks Core Web Vitals, TTFB, AI citation status, and structured data presence in 15 minutes. Book one at [signalai.agency/#audit](https://signalai.agency/#audit).

## What Gets Ignored About Speed in Local SEO

Most local SEO conversations stop at citations, keywords, and Google Business Profile. Speed rarely comes up unless a site is visibly broken on mobile.

That framing is outdated. Three data points from our current client set:

- Pages with LCP under 1.0 second have a 67% higher structured data parse rate than pages with LCP above 2.5 seconds.
- Perplexity citation frequency drops 40% when TTFB exceeds 600ms, based on 90 days of tracking across 8 Brooklyn clients.
- Google AI Overviews pulled content from Signal client pages an average of 18 days after launch. The industry median for AI Overviews pickup is 45-60 days.

Speed doesn't replace content quality or structured data. It removes the friction that prevents those elements from being read.

## What This Means for Brooklyn Independent Businesses

If your site is on shared WordPress hosting or an unoptimized Squarespace template, you have a retrieval problem that no amount of content work will fully solve. The AI crawlers are making decisions before they finish reading your page.

The practical priority order: fix TTFB first, then structured data, then content. Most businesses invert this. They spend months on blog posts that AI systems never successfully parse because the page took 3 seconds to respond.

Run a free Core Web Vitals check at PageSpeed Insights today. If your LCP is above 2.5 seconds, that's the problem to solve before anything else. If you want a full picture of where your site stands in AI search, the audit link is above.

Speed isn't a technical detail. It's a citation strategy.