'use client';

import { useReducedMotion, motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const H1_TEXT = "When Brooklyn asks ChatGPT, your competitors answer.";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Split H1 into words for staggered reveal
  const words = H1_TEXT.split(' ');

  // Helper: returns motion props respecting reduced-motion preference
  const fadeUp = (delay: number, yOffset = 20) =>
    prefersReducedMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, delay },
        }
      : {
          initial: { opacity: 0, y: yOffset },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
          },
        };

  const cardVariant = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 1.2 },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: {
          duration: 0.8,
          delay: 1.2,
          ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
        },
      };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, #111111 0%, #0A0A0A 70%)',
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(245,158,11,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left column: copy + CTAs ── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-mono text-xs tracking-widest uppercase text-amber-400"
            >
              Local SEO for the AI era · Brooklyn, NY
            </motion.p>

            {/* H1 — word-by-word stagger */}
            <h1
              className="font-instrument text-[2.75rem] leading-[1.1] md:text-[4rem] lg:text-[4.5rem] text-white tracking-tight"
              style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  {...(prefersReducedMotion
                    ? {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: {
                          duration: 0.4,
                          delay: 0.4 + i * 0.03,
                        },
                      }
                    : {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.65,
                          delay: 0.4 + i * 0.03,
                          ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
                        },
                      })}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subhead */}
            <motion.p
              {...fadeUp(0.8)}
              className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif' }}
            >
              Customers now ask AI who to call. Signal makes sure that answer is
              you — in ChatGPT, Google AI Overviews, and Perplexity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(1.0)}
              className="flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <MagneticButton href="/audit" variant="primary">
                See if AI is recommending your competitors
              </MagneticButton>

              <a
                href="#proof"
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200 underline-offset-4 hover:underline"
                style={{ fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif' }}
              >
                or see how we did it for a Brooklyn optometrist →
              </a>
            </motion.div>
          </div>

          {/* ── Right column: proof artifact card ── */}
          <motion.div
            {...cardVariant}
            className="w-full"
          >
            <div
              className="rounded-2xl p-1"
              style={{
                background:
                  'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.04) 100%)',
                border: '1px solid rgba(245,158,11,0.3)',
              }}
            >
              <div className="rounded-xl bg-[#0f0f0f] p-6 flex flex-col gap-5">

                {/* Badge */}
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                    style={{
                      background: 'rgba(245,158,11,0.12)',
                      border: '1px solid rgba(245,158,11,0.35)',
                      color: '#F59E0B',
                    }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"
                      style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
                    />
                    Real ChatGPT result · Apr 2026
                  </span>
                </div>

                {/* Card title */}
                <p className="text-white text-sm font-medium leading-snug">
                  ChatGPT showed{' '}
                  <span className="text-amber-400">Nostrand Optical</span> when
                  asked &ldquo;best optometrist in Crown Heights&rdquo;
                </p>

                {/* ChatGPT response mockup */}
                <div
                  className="rounded-xl p-4 flex flex-col gap-3"
                  style={{
                    background: '#171717',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* ChatGPT icon row */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: '#10a37f' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.759a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.768.768 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-neutral-500 font-medium">ChatGPT</span>
                  </div>

                  {/* Simulated AI response lines */}
                  <div className="flex flex-col gap-2">
                    <p className="text-neutral-300 text-xs leading-relaxed">
                      Based on local reviews and location data, here are some top-rated
                      optometrists in Crown Heights, Brooklyn:
                    </p>
                    <div
                      className="rounded-lg p-3 flex flex-col gap-1.5"
                      style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}
                    >
                      <p className="text-amber-400 text-xs font-semibold">
                        1. Nostrand Optical
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        Highly rated independent optometry practice on Nostrand Ave.
                        Known for personalized care, comprehensive eye exams, and
                        a wide selection of frames. Patients frequently mention
                        Dr. Lara&apos;s thoroughness and friendly staff.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="h-2 rounded-full bg-neutral-800 w-3/4" />
                      <div className="h-2 rounded-full bg-neutral-800 w-1/2" />
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <p className="text-neutral-600 text-xs">
                  This is what showing up in AI looks like. We made it happen.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade to section below */}
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
