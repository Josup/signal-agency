'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import FoldSection from './FoldSection';

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const easeOutBack = (t: number) => {
      const c1 = 1.70158, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.max(0, Math.round(easeOutBack(p) * target)));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return count;
}

function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView);
  return (
    <div ref={ref}>
      <p className="font-display font-black leading-none text-[var(--red)]"
        style={{ fontSize: '56px', fontVariationSettings: '"opsz" 72' }}>
        {count}{suffix}
      </p>
      <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--ink-dim)] mt-1 max-w-[140px] leading-snug">
        {label}
      </p>
    </div>
  );
}

function DragCompare({ before, after }: { before: React.ReactNode; after: React.ReactNode }) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePct = (clientX: number) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setPct(Math.max(8, Math.min(92, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePct(x);
    };
    const up = () => setDragging(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [dragging]);

  if (reduced) return <div>{after}</div>;

  return (
    <div ref={containerRef} className="relative select-none overflow-hidden border border-[var(--rule)]"
      style={{ cursor: dragging ? 'ew-resize' : 'default' }}>
      {/* Before layer */}
      <div className="absolute inset-0">{before}</div>
      {/* After layer — clipped from left */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        {after}
      </div>
      {/* Visible "before" layer takes space */}
      <div className="opacity-0 pointer-events-none">{before}</div>
      {/* Drag handle */}
      <div className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}>
        <div className="w-px h-full bg-[var(--rule)]" />
        <div className="absolute w-8 h-8 rounded-full bg-[var(--paper)] border-2 border-[var(--rule)] flex items-center justify-center cursor-ew-resize shadow-sm">
          <span className="font-mono text-[9px] text-[var(--ink-dim)]">◀▶</span>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.06em] uppercase text-[var(--ink-dim)] bg-[var(--paper)] px-1.5 py-0.5">Before</div>
      <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.06em] uppercase text-[var(--red)] bg-[var(--paper)] px-1.5 py-0.5">After Signal</div>
    </div>
  );
}

const STUDIES = [
  {
    query: '"best optometrist Crown Heights"',
    name: 'Nostrand Optical',
    type: 'Brooklyn Optometry Practice',
    stats: [{ value: 4, label: 'rich results on Google, day 1', suffix: '' }, { value: 10, label: 'SEO posts live, automated', suffix: '+' }],
    before: { label: '0 AI mentions', desc: 'Invisible in ChatGPT, Perplexity, and Google AI.' },
    after: { label: '#1 in Crown Heights', desc: 'First result for "optometrist Crown Heights" across AI platforms.' },
  },
  {
    query: '"BJJ private lessons Brooklyn"',
    name: 'Brooklyn BJJ',
    type: 'Private Lessons — Jiu Jitsu',
    stats: [{ value: 10, label: 'SEO blog posts live', suffix: '+' }, { value: 1, label: 'GBP verified + active', suffix: '' }],
    before: { label: '0 structured data', desc: 'No Schema.org, no GBP, invisible to AI search.' },
    after: { label: 'Showing in AI search', desc: 'Calendly bookings, email capture, AI-cited content.' },
  },
];

export default function CaseStudies() {
  return (
    <FoldSection id="proof" className="relative" style={{ borderBottom: '1px solid var(--rule)' } as React.CSSProperties}>
      <span className="section-num hidden lg:block" aria-hidden="true">02 PROOF</span>
      <div className="mx-auto max-w-site px-5 md:px-12 py-24 md:py-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)] mb-4">Proof</p>
          <h2 className="font-display font-bold text-[var(--ink)] leading-[1.05]"
            style={{ fontSize: 'clamp(32px,4vw,48px)', fontVariationSettings: '"opsz" 72' }}>
            Real businesses. Real results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[var(--rule)]">
          {STUDIES.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col gap-8 p-8 md:p-10"
              style={{ borderRight: i === 0 ? '1px solid var(--rule)' : undefined, borderTop: i > 0 ? '1px solid var(--rule)' : undefined }}>
              <span className="self-start font-mono text-[11px] tracking-[0.04em] bg-[var(--ink)] text-[var(--paper)] px-2 py-0.5">
                {s.query}
              </span>
              <div>
                <h3 className="font-display font-bold text-[var(--ink)] leading-[1.1]"
                  style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontVariationSettings: '"opsz" 72' }}>{s.name}</h3>
                <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--ink-dim)] mt-1">{s.type}</p>
              </div>

              {/* Drag compare */}
              <DragCompare
                before={
                  <div className="p-6 bg-[var(--paper-2)] flex flex-col gap-2">
                    <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--ink-dim)]">{s.before.label}</p>
                    <p className="font-serif text-[14px] text-[var(--ink-dim)] leading-relaxed">{s.before.desc}</p>
                  </div>
                }
                after={
                  <div className="p-6 bg-[var(--paper)] flex flex-col gap-2" style={{ borderLeft: '3px solid var(--red)' }}>
                    <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--red)]">{s.after.label}</p>
                    <p className="font-serif text-[14px] text-[var(--ink)] leading-relaxed">{s.after.desc}</p>
                  </div>
                }
              />

              {/* Stats */}
              <div className="flex gap-8 pt-4 border-t border-[var(--rule-hair)]">
                {s.stats.map(stat => <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />)}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-mono text-[10px] text-[var(--ink-dim)] mt-3 opacity-60">← Drag the handle to compare before / after Signal</p>
      </div>
    </FoldSection>
  );
}
