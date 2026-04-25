'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.section
      id="problem"
      className="relative py-24 md:py-32 px-4 md:px-8"
      style={{
        backgroundColor: '#080808',
      }}
    >
      {/* Subtle top divider with amber glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-3xl md:text-5xl leading-tight font-instrument italic text-white"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={
            prefersReducedMotion
              ? { opacity: 1 }
              : undefined
          }
        >
          A patient in Park Slope opens ChatGPT and types "best optometrist near me in Brooklyn."
        </motion.p>

        <motion.p
          className="text-3xl md:text-5xl leading-tight font-instrument italic text-white mt-8 md:mt-12"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.1,
          }}
          style={
            prefersReducedMotion
              ? { opacity: 1 }
              : undefined
          }
        >
          Three names appear. Yours isn't one of them.
        </motion.p>

        <motion.p
          className="text-3xl md:text-5xl leading-tight font-instrument italic text-white mt-8 md:mt-12"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2,
          }}
          style={
            prefersReducedMotion
              ? { opacity: 1 }
              : undefined
          }
        >
          She calls the first one.
        </motion.p>
      </div>
    </motion.section>
  )
}
