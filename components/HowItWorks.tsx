'use client';
import { motion, useReducedMotion } from 'framer-motion';
import FoldSection from './FoldSection';

const STEPS = [
  {
    number: '01',
    headline: 'I rewrite your site so AI can read it.',
    body: 'Most local sites are invisible to AI — built for humans, not machines. I rebuild yours in Next.js: fast, clean, structured.',
    note: 'Next.js + TypeScript. Never Wix or Squarespace.',
  },
  {
    number: '02',
    headline: 'I add the invisible markup AI needs.',
    body: 'Schema.org tells ChatGPT, Google AI, and Perplexity exactly what your business is, where you are, and why to recommend you. Visitors never see it. AI does.',
    note: 'Validated on Google Rich Results Test on day 1.',
  },
  {
    number: '03',
    headline: 'I publish content AI cites.',
    body: 'Every week: new posts answering the questions your customers ask AI. Over time, you become the answer.',
    note: 'Automated. Keyword-targeted. Brooklyn-specific.',
  },
];

export default function HowItWorks() {
  const reduced = useReducedMotion();
  return (
    <FoldSection id="how-it-works" className="relative" style={{ borderBottom: '1px solid var(--rule)' } as React.CSSProperties}>
      <span className="section-num hidden lg:block" aria-hidden="true">04 HOW IT WORKS</span>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'HowTo',
          name: 'How Signal Makes Your Business Visible to AI',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: String(i + 1), name: s.headline, text: s.body })),
        }),
      }} />

      <div className="mx-auto max-w-site px-5 md:px-12 py-24 md:py-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)] mb-4">The Process</p>
          <h2 className="font-display font-bold text-[var(--ink)] leading-[1.05]"
            style={{ fontSize: 'clamp(32px,4vw,48px)', fontVariationSettings: '"opsz" 72' }}>
            Three things. That&rsquo;s it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[var(--rule)]">
          {STEPS.map((step, i) => (
            <motion.div key={step.number}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0, 0, 1] }}
              className="relative flex flex-col gap-5 p-8 md:p-10"
              style={{
                borderRight: i < 2 ? '1px solid var(--rule)' : undefined,
                borderTop: i > 0 ? '1px solid var(--rule)' : undefined,
              }}>
              {/* Marginalia note */}
              <motion.div
                className="marginalia hidden xl:block"
                style={{ top: '40px' }}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
                whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0, 0, 1] }}>
                {step.note}
              </motion.div>

              <span className="font-mono text-[13px] tracking-[0.04em] text-[var(--red)]">{step.number}</span>
              <h3 className="font-display font-bold text-[var(--ink)] leading-snug"
                style={{ fontSize: '21px', fontVariationSettings: '"opsz" 36' }}>
                {step.headline}
              </h3>
              <p className="font-serif text-[15px] leading-[1.7] text-[var(--ink-dim)]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </FoldSection>
  );
}
