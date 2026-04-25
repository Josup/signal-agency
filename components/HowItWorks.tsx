'use client';

import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    number: '01',
    headline: 'I rewrite your site so AI can read it.',
    subtext:
      'Most local business sites are invisible to AI because they\'re built for humans, not machines. I rebuild yours in Next.js — fast, clean, structured.',
  },
  {
    number: '02',
    headline: 'I add the invisible markup AI needs.',
    subtext:
      'Called Schema.org — it\'s a technical layer that tells ChatGPT, Google AI, and Perplexity exactly what your business is, where you are, and why to recommend you. Your visitors never see it. AI does.',
  },
  {
    number: '03',
    headline: 'I publish content AI cites.',
    subtext:
      'Every week, new blog posts optimized for the questions your customers ask AI. Over time, you become the answer.',
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  // Container animation for staggered step appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: 0,
      },
    },
  };

  // Individual step animation
  const stepVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
          },
        },
  };

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 px-4 md:px-8"
      style={{
        backgroundColor: '#060606',
      }}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How Signal Makes Your Business Visible to AI',
            step: [
              {
                '@type': 'HowToStep',
                position: '1',
                name: 'Rebuild Your Site',
                text: 'I rewrite your site so AI can read it. Most local business sites are invisible to AI because they\'re built for humans, not machines. I rebuild yours in Next.js — fast, clean, structured.',
              },
              {
                '@type': 'HowToStep',
                position: '2',
                name: 'Add Schema.org Markup',
                text: 'I add the invisible markup AI needs. Called Schema.org — it\'s a technical layer that tells ChatGPT, Google AI, and Perplexity exactly what your business is, where you are, and why to recommend you. Your visitors never see it. AI does.',
              },
              {
                '@type': 'HowToStep',
                position: '3',
                name: 'Publish Optimized Content',
                text: 'I publish content AI cites. Every week, new blog posts optimized for the questions your customers ask AI. Over time, you become the answer.',
              },
            ],
          }),
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase text-amber-400 mb-4"
          >
            THE PROCESS
          </motion.p>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-instrument text-white"
            style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
          >
            Three things. That's it.
          </motion.h2>
        </div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[calc(33.33% - 8px)] right-[calc(33.33% - 8px)] h-px"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.2), transparent)',
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative flex flex-col gap-4 md:gap-6"
            >
              {/* Step number */}
              <div
                className="text-6xl md:text-7xl font-bold text-amber-400 leading-none"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {step.number}
              </div>

              {/* Headline */}
              <h3
                className="text-xl font-instrument text-white leading-snug"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
              >
                {step.headline}
              </h3>

              {/* Subtext */}
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                {step.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />
    </section>
  );
}
