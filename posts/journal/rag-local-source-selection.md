---
title: "How Retrieval-Augmented Generation Actually Selects a Local Source"
date: "2026-09-06"
slug: rag-local-source-selection
description: "RAG pulls from indexed pages, but citation ranking depends on markup quality and content structure. Here's what actually gets selected."
category: "AI Search"
subcategory: "Citations"
read_time: 7
---

# How Retrieval-Augmented Generation Actually Selects a Local Source

When you ask ChatGPT or Perplexity for a local recommendation, the engine doesn't search the open web in real time. It runs retrieval-augmented generation: it pulls candidate pages from an index, ranks them by relevance and authority, and hands the top result to the language model to cite. Most Brooklyn businesses have no idea what happens in that ranking step — and it's where nearly all of them lose.

The retrieval step finds pages. The ranking step decides which page gets cited. They're different mechanisms, and confusing them is why your site shows up in zero AI answers even though it ranks on Google.

## The Index Has To Exist First

RAG can't cite what it hasn't seen. A page has to be crawled, indexed, and tagged with machine-readable metadata before an engine will retrieve it at all.

This is where most independent businesses fail at the retrieval stage. If your site has no schema markup, no structured data, and no clear content hierarchy, the crawler ingests your pages as plain text. A language model can read plain text. But an engine deciding whether to *retrieve* your page in response to a specific query needs signals: what service do you offer, what neighborhood are you in, what's your proof of authority in that category.

We build every client site with structured data rendered server-side — LocalBusiness markup, schema hierarchy, and FAQ blocks — because a client-side render is a coin flip on whether the crawler sees it. If the engine never sees the schema, it can't use it to decide whether to retrieve you.

The index is the floor. Everything below it is invisible.

## Relevance Ranking Happens Before Citation

Once a page is indexed, RAG ranks it against other indexed pages on relevance to the prompt. "Best optometry in Crown Heights" triggers a search for pages tagged with the Service (optometry), the Location (Crown Heights), and supporting content (reviews, hours, credentials).

The ranking doesn't just look at what the page *says*. It looks at what the page *declares about itself* in schema, what the engine can verify about that declaration (Google Business Profile data, citation directories, review velocity), and how recently the page was updated.

A page that says "we're an optometry practice in Crown Heights" in plain text loses to a page that declares it in LocalBusiness schema, has a verified GBP listing with current hours, and published a post about a service (like fitting progressive lenses) in the last 30 days.

This is why Nostrand Optical landed four valid rich results on launch day. The markup was correct, the content was structured, and the GBP was verified and current. The engine had everything it needed to rank that page first for optometry queries in Crown Heights without ambiguity.

## Citation Quality Depends on Content Structure

After ranking, the engine passes the top-ranked page to the language model with a request: cite this source in your answer. The language model then extracts a quotable passage — a sentence, a list, a paragraph — and attributes it to the source.

The page that gets retrieved is not always the page that *gets cited*. An engine might retrieve a page, pass it to the model, and the model might fail to extract anything worth citing because the content is too vague, too sales-y, or structured as a wall of prose instead of scannable sections.

This is where schema type matters. A page with FAQPage markup gives the engine a question-and-answer pair it can quote directly. A prose paragraph on the same topic forces the model to assemble an answer, which is slower and more error-prone. The marked-up page is cheaper to cite — in computational cost and in confidence — so it gets cited more often.

When we [write retrieval-grade content](https://www.signalai.agency/journal.html), we're optimizing for this extraction step. Short declarative sentences. Lists instead of paragraphs. Named entities instead of pronouns. Schema blocks instead of body copy. Every choice is about making it trivial for a language model to quote the page accurately.

## Authority Signals Break Ties

When two pages rank equally on relevance, the engine looks at authority. An optometry practice in Crown Heights that appears in a local citation directory, has a verified GBP with 40+ reviews, and published recent content about eye care beats one with none of those signals — even if both pages have identical schema markup.

This is why citation work and GBP optimization are not separate from AI search optimization. They're the same thing. A language model trained on the public web learns that verified, cited, recently-updated sources are more trustworthy. It weights them higher when deciding which page to retrieve and which passage to quote.

You don't need 100 citations to compete. You need the right ones. A Brooklyn BJJ Lessons appearance in a single fitness directory, with verified GBP and regular content updates, landed its first ChatGPT citation at 41 days. The markup was sound, the authority signals were clean, and the content was structured for extraction. Everything else was unnecessary noise.

## What Gets Left Behind

The ranking step has a hard floor: if your page isn't indexed, it can't be ranked. If it's indexed but has no schema, it's invisible to the relevance algorithm. If it has schema but the content is unstructured prose, it can be retrieved but not easily cited.

Most Brooklyn independent businesses fail at one of these three gates. They skip schema. They write in paragraphs. They don't maintain their GBP. Each miss compounds. A page that clears all three is extremely rare — which is why [a free AI search audit](https://www.signalai.agency/audit.html) usually finds low-hanging fruit within the first 15 minutes.

What this means: your visibility in AI search isn't decided by luck or by what the engine "feels like" citing. It's decided by a deterministic ranking process that privileges schema clarity, content structure, and verified authority signals. You can control all three. Most competitors don't.

[Book a 20-minute AI audit](https://calendar.app.google/jPp55zP1iiFTU7VW9)