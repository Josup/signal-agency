'use client';
import { motion, useReducedMotion } from 'framer-motion';
import FoldSection from './FoldSection';
import { InkBleedButton } from './Hero';

const TIERS = [
  {
    name: 'Basic', build: '$1,500', monthly: '$400',
    features: ['1-page Next.js website', 'Schema.org setup', 'Google Search Console', '15 blog posts/month'],
    recommended: false,
  },
  {
    name: 'Standard', build: '$2,500', monthly: '$600',
    features: ['Multi-page website', 'Full Schema.org + AI optimization', 'Search Console + GBP setup', '30 blog posts/month', 'Monthly performance report'],
    recommended: true,
  },
  {
    name: 'Premium', build: '$3,500', monthly: '$900',
    features: ['Everything in Standard', '45 blog posts/month', 'Schema.org updates as AI evolves', 'Quarterly site audit', 'Priority 24h support'],
    recommended: false,
  },
];

export default function Services() {
  const reduced = useReducedMotion();
  return (
    <FoldSection id="pricing" className="relative" style={{ borderBottom: '1px solid var(--rule)' } as React.CSSProperties}>
      <span className="section-num hidden lg:block" aria-hidden="true">03 PRICING</span>
      <div className="mx-auto max-w-site px-5 md:px-12 py-24 md:py-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)] mb-4">Pricing</p>
          <h2 className="font-display font-bold text-[var(--ink)] leading-[1.05]"
            style={{ fontSize: 'clamp(32px,4vw,48px)', fontVariationSettings: '"opsz" 72' }}>
            Straightforward pricing.
          </h2>
          <p className="font-serif text-[17px] text-[var(--ink-dim)] leading-[1.65] mt-3 max-w-lg">
            No lock-in. No surprises. A website that works while you sleep.
          </p>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block border border-[var(--rule)] overflow-hidden">
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--rule)' }}>
            {TIERS.map((t, i) => (
              <motion.div key={t.name}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25,0,0,1] }}
                className="p-8 flex flex-col gap-4"
                style={{
                  borderLeft: i > 0 ? '1px solid var(--rule)' : undefined,
                  borderTop: t.recommended ? '3px solid var(--red)' : '3px solid transparent',
                }}>
                {t.recommended && (
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--red)]">Most Popular</span>
                )}
                <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--ink-dim)]">{t.name}</p>
                <div>
                  <p className="font-display font-black text-[var(--ink)] leading-none"
                    style={{ fontSize: '42px', fontVariationSettings: '"opsz" 72' }}>
                    {t.monthly}<span className="font-serif font-normal text-[17px] text-[var(--ink-dim)]">/mo</span>
                  </p>
                  <p className="font-mono text-[11px] text-[var(--ink-dim)] mt-1">+ {t.build} to build</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1 mt-2">
                  {t.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[var(--red)] font-mono text-[11px] mt-0.5">✓</span>
                      <span className="font-serif text-[14px] leading-snug text-[var(--ink-dim)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <InkBleedButton href="/audit" primary={t.recommended} className="w-full text-center">
                    Get Started
                  </InkBleedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col border border-[var(--rule)]">
          {TIERS.map((t, i) => (
            <div key={t.name} className="p-7 flex flex-col gap-4"
              style={{ borderTop: i > 0 ? '1px solid var(--rule)' : undefined, borderLeft: t.recommended ? '3px solid var(--red)' : '3px solid transparent' }}>
              {t.recommended && <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--red)]">Most Popular</span>}
              <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--ink-dim)]">{t.name}</p>
              <p className="font-display font-black leading-none text-[var(--ink)]"
                style={{ fontSize: '38px', fontVariationSettings: '"opsz" 72' }}>
                {t.monthly}<span className="font-serif font-normal text-[16px] text-[var(--ink-dim)]">/mo</span>
              </p>
              <ul className="flex flex-col gap-1.5">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[var(--red)] font-mono text-[11px] mt-0.5">✓</span>
                    <span className="font-serif text-[13px] leading-snug text-[var(--ink-dim)]">{f}</span>
                  </li>
                ))}
              </ul>
              <InkBleedButton href="/audit" primary={t.recommended}>Get Started</InkBleedButton>
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] text-[var(--ink-dim)] mt-4 opacity-60">Month-to-month. Cancel any time.</p>
      </div>
    </FoldSection>
  );
}
