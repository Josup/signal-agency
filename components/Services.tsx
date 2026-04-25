'use client';

import { useRef } from 'react';
import {
  motion,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  text: string;
}

interface Tier {
  name: string;
  buildPrice: string;
  monthlyPrice: string;
  features: Feature[];
  recommended?: boolean;
  cta: string;
  ctaHref: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIERS: Tier[] = [
  {
    name: 'Basic',
    buildPrice: '$1,500',
    monthlyPrice: '$400',
    features: [
      { text: '1-page website, custom-built in Next.js' },
      { text: 'Schema.org structured data setup' },
      { text: 'Google Search Console integration' },
      { text: '15 SEO blog posts/month (automated)' },
    ],
    cta: 'Get Started',
    ctaHref: '/audit',
  },
  {
    name: 'Standard',
    buildPrice: '$2,500',
    monthlyPrice: '$600',
    recommended: true,
    features: [
      { text: 'Multi-page website' },
      { text: 'Full Schema.org + AI search optimization' },
      { text: 'Google Search Console + Google Business Profile setup' },
      { text: '30 SEO blog posts/month (automated)' },
      { text: 'Monthly performance report' },
    ],
    cta: 'Get Started',
    ctaHref: '/audit',
  },
  {
    name: 'Premium',
    buildPrice: '$3,500',
    monthlyPrice: '$900',
    features: [
      { text: 'Everything in Standard' },
      { text: '45 SEO blog posts/month (automated)' },
      { text: 'Schema.org updates as AI search evolves' },
      { text: 'Quarterly site audit + improvements' },
      { text: 'Priority support (24-hour response)' },
    ],
    cta: 'Get Started',
    ctaHref: '/audit',
  },
];

// ─── Checkmark icon ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
      style={{
        background: 'rgba(245,158,11,0.12)',
        color: '#F59E0B',
        border: '1px solid rgba(245,158,11,0.25)',
      }}
    >
      ✓
    </span>
  );
}

// ─── Tilt card ────────────────────────────────────────────────────────────────

function TiltCard({
  tier,
  index,
  prefersReducedMotion,
}: {
  tier: Tier;
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Springs for smooth tilt
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    // ±8 deg max
    rotateX.set(-(dy / rect.height) * 8 * 2);
    rotateY.set((dx / rect.width) * 8 * 2);
    scale.set(1.015);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const isRecommended = tier.recommended === true;

  // Card border style
  const borderStyle = isRecommended
    ? '2px solid #F59E0B'
    : '1px solid rgba(255,255,255,0.08)';

  // Scroll-in animation per card
  const cardVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 40 },
    visible: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.35, delay: index * 0.15 } }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            delay: index * 0.15,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
          },
        },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        scale: prefersReducedMotion ? 1 : scale,
        perspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col rounded-2xl"
      // Recommended card sits slightly higher on desktop
    >
      {/* Outer wrapper — handles border + glow */}
      <div
        className="relative flex flex-col h-full rounded-2xl"
        style={{
          background: '#111111',
          border: borderStyle,
          borderRadius: 16,
          padding: 32,
          boxShadow: isRecommended
            ? '0 0 0 1px rgba(245,158,11,0.15), 0 24px 64px rgba(245,158,11,0.12)'
            : '0 8px 32px rgba(0,0,0,0.4)',
          transition: 'box-shadow 0.35s ease',
        }}
      >
        {/* "Most Popular" badge */}
        {isRecommended && (
          <div className="flex items-center mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.4)',
                color: '#F59E0B',
                fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
              }}
            >
              ★ Most Popular
            </span>
          </div>
        )}

        {/* Tier name */}
        <p
          className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{
            color: isRecommended ? '#F59E0B' : 'rgba(255,255,255,0.35)',
            fontFamily: 'var(--font-inter), ui-monospace, monospace',
          }}
        >
          {tier.name}
        </p>

        {/* Build price */}
        <p
          className="text-sm mb-1"
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
          }}
        >
          {tier.buildPrice}{' '}
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>build</span>
        </p>

        {/* Monthly price */}
        <div className="flex items-baseline gap-1.5 mb-6">
          <span
            className="text-4xl font-bold"
            style={{ color: '#F59E0B', fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif' }}
          >
            {tier.monthlyPrice}
          </span>
          <span
            className="text-sm"
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
            }}
          >
            /mo
          </span>
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: 1, background: 'rgba(255,255,255,0.07)' }}
        />

        {/* Feature list */}
        <ul className="flex flex-col gap-3 flex-1 mb-8">
          {tier.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="text-sm leading-relaxed"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
                }}
              >
                {feat.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto">
          <MagneticButton
            href={tier.ctaHref}
            variant={isRecommended ? 'primary' : 'secondary'}
          >
            {tier.cta}
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  const headerVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: (delay: number) =>
      prefersReducedMotion
        ? { opacity: 1, transition: { duration: 0.3, delay } }
        : {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay,
              ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
            },
          },
  };

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Subtle radial ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(245,158,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* ── Section header ── */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView={headerVariants.visible(0)}
            viewport={{ once: true, margin: '-60px' }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{
              color: '#F59E0B',
              fontFamily: 'var(--font-inter), ui-monospace, monospace',
            }}
          >
            PRICING
          </motion.p>

          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView={headerVariants.visible(0.1)}
            viewport={{ once: true, margin: '-60px' }}
            className="text-4xl md:text-5xl text-white mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-instrument), Georgia, serif' }}
          >
            Straightforward pricing for real results.
          </motion.h2>

          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView={headerVariants.visible(0.2)}
            viewport={{ once: true, margin: '-60px' }}
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
            }}
          >
            No lock-in. No surprises. Just a website that works while you sleep.
          </motion.p>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((tier, i) => (
            <TiltCard
              key={tier.name}
              tier={tier}
              index={i}
              prefersReducedMotion={prefersReducedMotion ?? false}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xs mt-12"
          style={{
            color: 'rgba(255,255,255,0.25)',
            fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
          }}
        >
          All plans include hosting setup guidance. Month-to-month — cancel any time.
        </motion.p>
      </div>
    </section>
  );
}
