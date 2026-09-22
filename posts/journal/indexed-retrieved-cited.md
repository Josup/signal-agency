---
title: "Indexed, Retrieved, Cited. Three Different Things."
date: "2026-09-13"
slug: indexed-retrieved-cited
description: "Being on Google's index isn't retrieval. Being retrieved isn't citation. Most Brooklyn sites confuse them."
category: "Field Notes"
subcategory: "Performance"
read_time: 7
---

# Indexed, Retrieved, Cited. Three Different Things.

Your site is indexed. That doesn't mean an AI engine will retrieve it. And retrieval doesn't mean it will cite you. Most Brooklyn independent businesses conflate all three and then wonder why their structured data isn't working.

The distinction matters because the fixes are completely different. Index a page wrong and it never sees daylight. Retrieve a page and an engine may not know how to extract from it. Make it citable and you win the retrieval bet.

## Indexing: The Engine Saw Your Page

Indexing means a search engine's crawler visited your site, parsed the HTML, and stored a record of it.

You can verify this in Google Search Console: a page listed under Coverage as "Indexed" has passed the crawl gate. The engine knows it exists.

But indexing is only permission to *consider* your page. It doesn't mean the engine will pull from it when answering a question. It means the page is in the stack of candidates.

Most Brooklyn business sites are indexed. The problem isn't indexing.

## Retrieval: The Engine Selected Your Page

Retrieval is the moment an AI engine decides your page is relevant enough to read when answering a specific query.

It's the second gate. The engine searched its index, ranked candidates by relevance, and picked yours. It now has your page open, reading it.

Retrieval happens for only a narrow slice of the queries that match your business category and location. A plumbing site in Crown Heights gets retrieved for "emergency plumber Crown Heights" but not for "best plumber in New York." An optometry site in Nostrand gets retrieved for "eye exam near me" but not for "contact lens technology."

You can't see retrieval directly in Search Console. You infer it when an AI engine cites you or includes you in an answer. No citation usually means no retrieval. Retrieval failed silently.

The fix for retrieval is different than the fix for indexing. A page can be indexed and never retrieved. The structured data has to match the query intent. The page has to be topically coherent. The markup has to declare what the page actually contains.

Nostrand Optical's site included four rich-result types because the markup declared what each page answered: the FAQ, the business location and hours, the services offered, and the doctors on staff. An engine retrieving the site for "optometry Crown Heights" had a menu of signals to choose from. It didn't have to guess what the page was about.

## Citation: The Engine Named You

Citation is the third gate. The engine retrieved your page, extracted a fact or opinion, and included your site's name or link in the answer.

Citation is the only one you care about.

A page can be retrieved and not cited. If an engine reads your content but finds three other sources saying the same thing more clearly, it cites one of the three. You're retrieved. You're not cited. You get no traffic.

Citation happens when:
1. Your page was retrieved.
2. The information on your page is relevant and factual.
3. The page's authority (based on backlinks, citation volume, and topical consistency) signals that it's a safe choice to attribute.
4. The information is easier to quote from your page than from a competitor's.

The last point matters more than most people realize. A page with schema.org markup that marks up a specific fact—a phone number, an address, a service description, an FAQ answer—is cheaper for an engine to cite. The information is pre-tagged. The engine doesn't have to interpret prose. It can lift the field, attribute you, and move on.

That's why [FAQPage schema is the citation cheat code](/journal.html). An FAQ with proper markup gives an engine a complete Q&A pair it can cite without paraphrasing. A prose paragraph forces the engine to assemble an answer from scattered sentences. The marked-up page is more quotable.

Brooklyn BJJ Lessons got its first ChatGPT citation at 41 days because the site was small, focused, and marked up. The Person schema was clean. The LocalBusiness schema was complete. The service descriptions were specific to Brooklyn and to the sport. When ChatGPT indexed the site (gate one), retrieved it for "BJJ lessons Brooklyn" (gate two), the information was so clearly extracted and relevant that citation (gate three) followed.

## Why You're Probably Stuck at Gate Two

Most Brooklyn independent sites pass indexing and fail at retrieval.

Google sees the page. The engine's crawler visits it. But when an AI search engine runs a query, your site doesn't make the retrieval cut. You're not in the answer.

The reasons:
- Your markup doesn't declare what the page is about. No LocalBusiness schema. No service-area radius. No FAQPage on the Q&A content.
- Your content is too generic. You wrote "We're an optometry practice in Brooklyn," and your competitor wrote "We specialize in contact lens fittings and keratoconus management. We serve Crown Heights and Prospect Heights." The second page is more retrievable.
- Your topical focus is too wide. If your site is about optometry, haircuts, and notary services, an engine won't retrieve you confidently for any single one. You're noisy.
- Your site speed is slow. Retrieval considers crawlability. A slow site is harder to read and less likely to be selected.

You can fix retrieval without fixing indexing. The page is already indexed. You're adding or clarifying the markup and content that make retrieval more likely.

## How You Know You're Stuck

- You're indexed (Search Console confirms it).
- You get zero or one citations per month across ChatGPT, Perplexity, and Google AI Overviews.
- Your competitor, who has less traffic and fewer backlinks, gets cited twice as often.

That's retrieval failure, not indexing failure.

The fix: audit your structured data against what an AI search engine actually needs to retrieve you. A [free AI search audit](/audit.html) checks whether your markup matches the queries you're targeting and whether your content is tight enough to be extractable.

Citation—the third gate—follows from retrieval done right.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)