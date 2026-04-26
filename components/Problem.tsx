'use client';
import { motion, useReducedMotion } from 'framer-motion';
import FoldSection from './FoldSection';

const LINES = [
  { text: 'A patient in Park Slope opens ChatGPT and types "best optometrist near me in Brooklyn."', note: 'This happens 340×/day in Brooklyn alone.' },
  { text: "Three names appear. Yours isn’t one of them.", note: 'Position 1 gets 71% of clicks.' },
  { text: 'She calls the first one.', note: null },
];

export default function Problem() {
  const reduced = useReducedMotion();
  return (
    <FoldSection id="invisible-business" className="relative ledger-rule" style={{ borderBottom: '1px solid var(--rule)' } as React.CSSProperties}>
      <span className="section-num hidden lg:block" aria-hidden="true">01 THE INVISIBLE BUSINESS</span>
      <div className="mx-auto max-w-site px-5 md:px-12 py-24 md:py-32">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)] mb-14">
          The Invisible Business
        </motion.p>
        <div className="max-w-[800px] flex flex-col gap-0">
          {LINES.map((line, i) => (
            <div key={i} className="relative">
              {/* Marginalia */}
              {line.note && (
                <motion.div
                  className="marginalia hidden xl:block"
                  style={{ top: '4px' }}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
                  whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.25, 0, 0, 1] }}>
                  {line.note}
                </motion.div>
              )}
              <motion.p
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.25, 0, 0, 1] }}
                className="font-serif text-[22px] md:text-[26px] leading-[1.65] text-[var(--ink)] py-6"
                style={{ borderBottom: i < LINES.length - 1 ? '1px solid var(--rule-hair)' : undefined }}>
                {line.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </FoldSection>
  );
}
