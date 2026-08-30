---
title: "Reverse Engineer a Competitor's Citation Surface Without Paid Tools"
date: "2026-08-30"
slug: reverse-engineer-competitor-citations
description: "Find which sources cite your competitor, how they structure their data, and what queries they rank forusing only free tools."
category: "Playbook"
subcategory: "Citations"
read_time: 8
---

# Reverse Engineer a Competitor's Citation Surface Without Paid Tools

You don't need a paid citation platform to understand which sources cite your competitor and why. A free browser, a search engine, and structured thinking will show you exactly which queries they own, which sources name them, and what markup they're using to earn those citations. You can replicate the logic in an afternoon.

## Start with the query they own

Open a browser. Search for the exact neighborhood + service combination your competitor dominates. For example, if they own "optometrist Crown Heights" on Google and ChatGPT, search that phrase on both. Look at the URLs cited in the first three results. Note the domain, the page type (blog, directory, local listing), and the anchor text. Do this five times with slight variations: "optometry Crown Heights," "eye doctor near Crown Heights," "vision exam Brooklyn." You'll see a pattern. Some sources appear in all five searches. Those are the citation anchors. Write them down.

## Check their Google Business Profile for clues

Visit your competitor's Google Business Profile directly. You don't need their login. Search their business name on Google Maps or Google Search and click the knowledge panel on the right. Look at:
- The "People also search for" suggestions. These reveal adjacent queries they rank for.
- The linked website in the top-right. Visit it.
- The "About" section. Note the description word choice—that's their keyword signal to Google.

This takes three minutes and tells you what Google believes they are.

## Audit their homepage markup without tools

Right-click their homepage. Select "View Page Source." Search the source code for `"@type": "LocalBusiness"` or `"@type": "MedicalBusiness"` (use Ctrl+F or Cmd+F). When you find it, select the entire JSON-LD block—everything between the opening and closing `<script>` tags. Paste it into a text editor. You now have their schema. Check for:
- `name`, `address`, `telephone`, `url`, `image`
- `areaServed`—if they have this, they're targeting specific neighborhoods
- `knowsAbout`—medical businesses sometimes declare expertise here
- `sameAs`—links to their social profiles or citation pages

Do the same for their service pages. Are they using `Service` schema? `FAQPage`? This tells you what data structure they've chosen to emphasize.

## Find their citation sources by searching their name

Go to Google Search. Type their business name in quotes: `"Nostrand Optical"`. Add each major platform one at a time:
- `"Nostrand Optical" site:yelp.com`
- `"Nostrand Optical" site:healthgrades.com`
- `"Nostrand Optical" site:google.com/maps`
- `"Nostrand Optical" site:apartmenttherapy.com`
- `"Nostrand Optical" site:instagram.com`

This query structure shows you every public page that names them. Write down the URL and the context. Is it a review site? A news mention? A directory listing? A social profile? The distribution tells you where their authority comes from.

## Check their blog for retrieval patterns

If they have a blog, open it. Scan the titles and publish dates. Look for:
- How often they publish (weekly, monthly, sporadic)
- What topics they choose (neighborhood guides, service explainers, patient FAQs)
- Whether they write long-form or short snippets
- The URL structure (do they use category prefixes like `/blog/` or `/guide/`)

Open their three most recent posts. Check the markup in each by viewing the source again and searching for `"@type": "BlogPosting"` and `"articleBody"`. Do they mark up the content? Do they include `author`, `datePublished`, `image`? This reveals their investment in retrieval-grade content.

## Test their content retrieval directly

Open ChatGPT or Perplexity. Ask a query you saw them rank for: "Who's the best optometrist in Crown Heights?" or "Where can I get an eye exam in Crown Heights?" See if they're cited. If they are, note the exact quote ChatGPT or Perplexity used. That tells you which piece of their content was retrieval-worthy and why. If they're not cited, that's also data—it means their content isn't structured in a way engines choose to extract.

## Map their neighborhood footprint

If they serve multiple neighborhoods, search their name + each neighborhood: `"Nostrand Optical" Williamsburg`, `"Nostrand Optical" Prospect Heights`, `"Nostrand Optical" Park Slope`. Note which neighborhoods appear in search results and which don't. Then check their `areaServed` schema from step three. Is it `["Crown Heights", "Williamsburg"]` or is it broader? Do they have dedicated pages for each neighborhood, or do they try to rank one homepage across multiple areas? [A generative engine optimization strategy](/what-is-geo.html) that spreads one page across five neighborhoods will lose to a competitor with five focused pages, one per neighborhood.

## Document what you find

Create a simple table:

| Element | Their approach | Your current approach | Action |
|---|---|---|---|
| Primary schema type | MedicalBusiness + LocalBusiness | LocalBusiness only | Add MedicalBusiness |
| FAQ markup | Yes, 12 Q&A pairs | No | Build FAQ section |
| Blog frequency | Weekly | Monthly | Increase cadence |
| Citation sources | Yelp, HealthGrades, Psychology Today | Google Maps only | Submit to directories |
| areaServed | 3 neighborhoods | 1 (too broad) | Create neighborhood pages |
| First mention in ChatGPT | Yes (41-day content window) | No | Audit content recency |

This table is your audit. It shows you exactly what they're doing that you're not.

## Why this matters for your Brooklyn business

You don't need to match your competitor's moves exactly—you need to understand the logic behind them. If they're cited in ChatGPT and you're not, it's rarely because they're better. It's usually because [they've built a citation surface](/index.html#work) that an engine can actually extract and trust: structured data, consistent naming across directories, a content rhythm that feeds the retrieval window, and neighborhood-specific pages instead of one overstuffed homepage. You now know what to build.

Start with their schema. Pull it, understand it, adapt it to your business. Then audit your own markup against theirs. The gap you find is your roadmap.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)