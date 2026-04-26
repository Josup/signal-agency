'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { InkBleedButton } from './Hero';

const FOOTER_TEXT = 'Be the answer.';

function AnimatedFooterLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || reduced) { setDisplayed(FOOTER_TEXT); setDone(true); return; }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(FOOTER_TEXT.slice(0, i));
      if (i >= FOOTER_TEXT.length) { clearInterval(id); setDone(true); }
    }, 60);
    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <div ref={ref} className="relative inline-block">
      <span className="font-display font-black leading-none text-[var(--paper)]"
        style={{ fontSize: 'clamp(48px,8vw,120px)', fontVariationSettings: '"opsz" 144', fontStyle: 'italic' }}>
        {displayed}
        {!done && !reduced && <span className="cursor-blink" style={{ background: 'var(--paper)' }} aria-hidden="true" />}
      </span>
      {done && (
        <motion.div
          className="absolute bottom-1 left-0 h-1 bg-[var(--red)]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        />
      )}
    </div>
  );
}

export default function FinalCTA() {
  const reduced = useReducedMotion();
  return (
    <section id="contact" style={{ backgroundColor: '#15110D' }}>
      <div className="mx-auto max-w-site px-5 md:px-12 py-32 md:py-48">
        <div className="max-w-[680px]">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.1em] uppercase mb-10"
            style={{ color: 'rgba(245,242,237,0.4)' }}>
            Ready?
          </motion.p>

          <motion.h2
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0, 0, 1] }}
            className="font-display font-black leading-[1.02] mb-8"
            style={{ fontSize: 'clamp(36px,5vw,60px)', fontVariationSettings: '"opsz" 144', color: '#F5F2ED' }}>
            Not sure if this applies to you?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-[18px] leading-[1.7] mb-12"
            style={{ color: 'rgba(245,242,237,0.6)' }}>
            Book a 30-minute call. I&rsquo;ll run your business through an AI search
            audit live — no pitch, no pressure. You&rsquo;ll leave knowing exactly where you stand.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
            <InkBleedButton href="/audit" primary>
              See if AI is recommending your competitors
            </InkBleedButton>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="font-serif text-[14px] italic mt-6"
            style={{ color: 'rgba(245,242,237,0.3)' }}>
            No pitch. No script. Just an honest look at your AI visibility.
          </motion.p>
        </div>
      </div>

      {/* Footer masthead */}
      <div style={{ borderTop: '1px solid rgba(245,242,237,0.1)' }}>
        <div className="mx-auto max-w-site px-5 md:px-12 py-16">
          <AnimatedFooterLine />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10"
            style={{ borderTop: '1px solid rgba(245,242,237,0.1)', paddingTop: '24px' }}>
            <p className="font-mono text-[10px] tracking-[0.08em] uppercase" style={{ color: 'rgba(245,242,237,0.25)' }}>
              Signal · Est. 2026 · Brooklyn, NY
            </p>
            <p className="font-mono text-[10px]" style={{ color: 'rgba(245,242,237,0.15)' }}>
              Built by a human. For humans who want to be found by machines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
