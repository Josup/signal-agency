'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

interface Stat {
  number: string
  label: string
}

interface CaseStudy {
  queryBadge: string
  businessName: string
  businessType: string
  stats: Stat[]
  resultSnippet: string
  artifactTitle: string
  artifactUrl: string
  artifactDescription: string
  liveLink: string
}

const caseStudies: CaseStudy[] = [
  {
    queryBadge: '"best optometrist Crown Heights" → ChatGPT',
    businessName: 'Nostrand Optical',
    businessType: 'Brooklyn Optometry Practice',
    stats: [
      { number: '4', label: 'valid rich results on Google on launch day' },
      { number: '10+', label: 'blog posts live, automated' },
    ],
    resultSnippet:
      'Targeting \'optometrist Crown Heights\' in Google AI Overviews. 4 rich results verified on Google Rich Results Test on day 1.',
    artifactTitle: 'Nostrand Optical | Crown Heights Eye Care',
    artifactUrl: 'nostrandoptical.com › crown-heights-optometrist',
    artifactDescription:
      'Comprehensive eye care in Crown Heights, Brooklyn. Schedule your exam today — accepting new patients. LocalBusiness · MedicalBusiness · FAQPage structured data verified.',
    liveLink: 'Built with Next.js + Schema.org',
  },
  {
    queryBadge: '"BJJ private lessons Brooklyn" → ChatGPT',
    businessName: 'Brooklyn BJJ',
    businessType: 'Private Lessons — Jiu Jitsu',
    stats: [
      { number: '10+', label: 'SEO blog posts live' },
      { number: '1', label: 'Google Business Profile verified' },
    ],
    resultSnippet:
      'One-page site with Calendly booking, Klaviyo email capture, Schema.org Person + LocalBusiness. Showing in AI search.',
    artifactTitle: 'Brooklyn BJJ Lessons | Private Jiu Jitsu Training',
    artifactUrl: 'brooklynbjjlessons.com › private-lessons',
    artifactDescription:
      'Private and semi-private BJJ lessons in Brooklyn. Book online — flexible scheduling, all levels welcome. Person · LocalBusiness schema verified.',
    liveLink: 'Built with Next.js + Schema.org',
  },
]

interface CaseStudyCardProps {
  study: CaseStudy
  delay: number
  reducedMotion: boolean
}

function CaseStudyCard({ study, delay, reducedMotion }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      style={{
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '32px',
        transition: 'border-color 0.25s ease',
        willChange: 'transform',
      }}
      className="flex flex-col gap-6 group"
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          'rgba(245,158,11,0.4)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          'rgba(255,255,255,0.08)'
      }}
    >
      {/* Query Badge */}
      <span
        className="inline-block self-start text-sm font-mono rounded-full px-3 py-1"
        style={{
          backgroundColor: 'rgba(245,158,11,0.15)',
          color: '#F59E0B',
        }}
      >
        {study.queryBadge}
      </span>

      {/* Business Name + Type */}
      <div>
        <h3
          className="text-2xl md:text-3xl text-white leading-tight"
          style={{ fontFamily: 'var(--font-instrument)', fontStyle: 'italic' }}
        >
          {study.businessName}
        </h3>
        <p
          className="mt-1 text-sm"
          style={{
            fontFamily: 'var(--font-inter)',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          {study.businessType}
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-8">
        {study.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span
              className="text-4xl font-semibold leading-none"
              style={{
                color: '#F59E0B',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {stat.number}
            </span>
            <span
              className="text-xs leading-snug max-w-[120px]"
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Result Snippet */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-inter)',
        }}
      >
        {study.resultSnippet}
      </p>

      {/* Proof Artifact — mock Google search result card */}
      <div
        className="rounded-lg p-4 flex flex-col gap-1"
        style={{
          backgroundColor: '#0A0A0A',
          border: '1px solid rgba(245,158,11,0.15)',
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-4 h-4 rounded-full flex-shrink-0"
            style={{ backgroundColor: 'rgba(245,158,11,0.2)' }}
            aria-hidden="true"
          />
          <span
            className="text-xs truncate"
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {study.artifactUrl}
          </span>
        </div>
        <p
          className="text-sm font-medium leading-snug"
          style={{ color: '#F59E0B', fontFamily: 'var(--font-inter)' }}
        >
          {study.artifactTitle}
        </p>
        <p
          className="text-xs leading-relaxed mt-1"
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-inter)',
          }}
        >
          {study.artifactDescription}
        </p>
      </div>

      {/* Live Link */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-medium mt-auto"
        style={{
          color: 'rgba(245,158,11,0.75)',
          fontFamily: 'var(--font-inter)',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.color = '#F59E0B'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.color =
            'rgba(245,158,11,0.75)'
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 7h10M7 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {study.liveLink}
      </a>
    </motion.div>
  )
}

export default function CaseStudies() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="proof"
      className="relative py-24 md:py-32 px-4 md:px-8"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Ambient amber glow — top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{
              color: '#F59E0B',
              fontFamily: 'var(--font-inter)',
              letterSpacing: '0.18em',
            }}
          >
            Proof
          </p>
          <h2
            className="text-4xl md:text-5xl text-white leading-tight"
            style={{
              fontFamily: 'var(--font-instrument)',
              fontStyle: 'italic',
            }}
          >
            Real businesses. Real results.
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Every site is hand-built in Next.js with structured data verified
            on launch day — not templated, not outsourced.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.businessName}
              study={study}
              delay={i === 0 ? 0.1 : 0.3}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Ambient amber glow — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(245,158,11,0.1), transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
