'use client';

import { motion, useReducedMotion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Problem() {
  const reduced = useReducedMotion();

  const variant = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: reduced
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 px-4 md:px-8"
      style={{ backgroundColor: '#080808' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-3xl md:text-5xl leading-tight italic text-white"
          style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A patient in Park Slope opens ChatGPT and types &ldquo;best optometrist near me in Brooklyn.&rdquo;
        </motion.p>

        <motion.p
          className="text-3xl md:text-5xl leading-tight italic text-white mt-8 md:mt-12"
          style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          Three names appear. Yours isn&rsquo;t one of them.
        </motion.p>

        <motion.p
          className="text-3xl md:text-5xl leading-tight italic text-white mt-8 md:mt-12"
          style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          She calls the first one.
        </motion.p>
      </div>
    </section>
  );
}
