export function getSchemaMarkup(): string {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://signalbrooklyn.com/#organization",
        name: "Signal",
        url: "https://signalbrooklyn.com",
        description:
          "Signal is a Brooklyn-based local SEO and AI search optimization agency that helps local service businesses appear in ChatGPT, Google AI Overviews, and Perplexity answers.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brooklyn",
          addressRegion: "NY",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: "Brooklyn",
        },
        founder: {
          "@type": "Person",
          name: "Josh",
          jobTitle: "Founder",
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Baruch College, CUNY",
          },
        },
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://signalbrooklyn.com/#service",
        name: "AI Search Optimization & Local SEO",
        serviceType: "GEO — Generative Engine Optimization",
        description:
          "We optimize local business websites so they appear in AI-generated answers on ChatGPT, Google AI Overviews, and Perplexity — using Schema.org structured data, content strategy, and technical SEO.",
        provider: {
          "@id": "https://signalbrooklyn.com/#organization",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Brooklyn",
          },
          {
            "@type": "City",
            name: "New York City",
          },
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Basic",
            price: "400",
            priceCurrency: "USD",
            description:
              "1-page website, Schema.org setup, Google Search Console, 15 blog posts/month. One-time build fee: $1,500.",
          },
          {
            "@type": "Offer",
            name: "Standard",
            price: "600",
            priceCurrency: "USD",
            description:
              "Multi-page website, full Schema.org + AI search optimization, GBP setup, 30 blog posts/month. One-time build fee: $2,500.",
          },
          {
            "@type": "Offer",
            name: "Premium",
            price: "900",
            priceCurrency: "USD",
            description:
              "Everything in Standard plus 45 blog posts/month, quarterly site audits, priority support, and Schema.org updates as AI search evolves. One-time build fee: $3,500.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://signalbrooklyn.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is AI search optimization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI search optimization — also called GEO (Generative Engine Optimization) — is the practice of structuring your website and content so that AI systems like ChatGPT, Google AI Overviews, and Perplexity cite your business when people ask about services in your area. Unlike traditional SEO, which targets blue-link rankings, GEO targets the AI-generated summaries that now appear at the top of search results and inside AI chat interfaces. It involves Schema.org structured data, authoritative content strategy, and technical signals that help AI models understand and trust your business.",
            },
          },
          {
            "@type": "Question",
            name: "How long until I show up in ChatGPT results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typically 60–90 days. AI models like ChatGPT pull from web-crawled data and indexed content, so it takes time for new structured data and content to be discovered, indexed, and weighted. Google AI Overviews can appear faster — sometimes within 4–6 weeks — once your Schema.org markup is validated and your pages are indexed. We track your visibility across all major AI platforms monthly and report progress.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with any type of business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on local service businesses in New York City — particularly in Brooklyn, Manhattan, and Queens. Ideal clients include medical practices, law firms, fitness studios, restaurants, tradespeople, beauty professionals, and other businesses that depend on local customers finding them online. If your business serves a local area and relies on word-of-mouth or search traffic, Signal can help you capture the next wave of AI-driven discovery.",
            },
          },
          {
            "@type": "Question",
            name: "What's the difference between this and regular SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Traditional SEO is designed to rank pages in the blue-link results on Google. It focuses on keywords, backlinks, and page authority. AI search optimization goes further: it structures your content and data so that AI models — which read and summarize the web differently than search engines — actually cite your business in their answers. When someone asks ChatGPT 'best dentist in Brooklyn,' the AI doesn't show a list of links — it summarizes and recommends. Signal makes sure your business is in those recommendations, not just the rankings below.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to provide content?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Signal handles all content creation from start to finish. We research the questions your target customers are asking AI, write SEO and GEO-optimized blog posts, service pages, and FAQ content, and publish it on a consistent schedule. For our Standard plan, that's 30 posts per month; Premium includes 45. You review and approve before anything goes live, but you never have to write a word.",
            },
          },
        ],
      },
    ],
  };

  return JSON.stringify(schema);
}
