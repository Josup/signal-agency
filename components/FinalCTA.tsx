'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';

export function FinalCTA() {
  // Check for prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0A0A] py-32 md:py-48">
      {/* Ambient amber glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-8">
        {/* Decorative amber line above */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 48, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-sm tracking-widest text-amber-400"
        >
          READY?
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 font-[var(--font-instrument)] text-5xl leading-tight text-white md:text-7xl"
        >
          Not sure if this applies to you?
        </motion.h2>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 font-[var(--font-inter)] text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          Book a 30-minute call. I'll run your business through an AI search audit live — no pitch, no pressure. You'll leave knowing exactly where you stand.
        </motion.p>

        {/* CTA Button with pulse animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.02, 1] }}
          transition={prefersReducedMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-6"
        >
          <MagneticButton href="/audit" variant="primary">
            See if AI is recommending your competitors
          </MagneticButton>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          className="font-[var(--font-inter)] text-sm italic text-gray-500"
        >
          No pitch. No sales script. Just an honest look at your AI visibility.
        </motion.p>
      </div>
    </section>
  );
}
