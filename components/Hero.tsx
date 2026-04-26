'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const QUERIES = [
  'best dentist in Park Slope',
  'optometrist Crown Heights Brooklyn',
  'gym near me Williamsburg',
  'plumber Bed-Stuy Brooklyn',
  'lawyer near me Brooklyn Heights',
  'chiropractor Cobble Hill',
];

const SCENARIOS = [
  { platform: 'ChatGPT', query: 'best dentist in Williamsburg Brooklyn', result: 'Williamsburg Dental Group', yours: false },
  { platform: 'Google AI Overviews', query: 'optometrist Crown Heights', result: 'Nostrand Optical', yours: true },
  { platform: 'Perplexity', query: 'BJJ classes near me Brooklyn', result: 'Brooklyn BJJ', yours: true },
];

function useTypewriter(text: string, speed = 45, active = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!active) return;
    setDisplayed(''); setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, active]);
  return { displayed, done };
}

function PromptTicker() {
  const reduced = useReducedMotion();
  const [qi, setQi] = useState(0);
  const [phase, setPhase] = useState<'typing'|'pause'|'erasing'>('typing');
  const [text, setText] = useState('');
  const q = QUERIES[qi];

  useEffect(() => {
    if (reduced) return;
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < q.length) {
        timeout = setTimeout(() => setText(q.slice(0, text.length + 1)), 50);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1800);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 400);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(t => t.slice(0, -1)), 28);
      } else {
        setQi(i => (i + 1) % QUERIES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, text, q, reduced]);

  return (
    <div className="flex items-center gap-3 py-3 px-4 border border-[var(--rule-soft)] bg-[var(--paper-2)]">
      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-dim)]">Brooklyn asks AI →</span>
      <span className="font-mono text-[13px] text-[var(--ink)]">
        &ldquo;{reduced ? QUERIES[0] : text}&rdquo;
      </span>
      {!reduced && <span className="cursor-blink" aria-hidden="true" />}
    </div>
  );
}

function CitationTheatre() {
  const reduced = useReducedMotion();
  const [si, setSi] = useState(0);
  const scenario = SCENARIOS[si];
  const { displayed: qText, done: qDone } = useTypewriter(scenario.query, 40, !reduced);
  const { displayed: rText } = useTypewriter(scenario.yours ? '1. ' + scenario.result : '1. [competitor]\n2. [competitor]\n3. ' + scenario.result, 30, !reduced && qDone);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setSi(i => (i + 1) % SCENARIOS.length), 5000);
    return () => clearTimeout(id);
  }, [si, reduced]);

  const Icon = scenario.platform === 'ChatGPT' ? '●' : scenario.platform === 'Google AI Overviews' ? '◆' : '▲';

  return (
    <div className="border border-[var(--rule)] bg-[var(--paper)] overflow-hidden">
      {/* Platform bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--rule-soft)] bg-[var(--paper-2)]">
        <span className="font-mono text-[10px] text-[var(--red)]">{Icon}</span>
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--ink-dim)]">{scenario.platform}</span>
        <div className="ml-auto flex gap-1">
          {SCENARIOS.map((_, i) => (
            <button key={i} onClick={() => setSi(i)}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ background: i === si ? 'var(--red)' : 'var(--rule-soft)' }}
              aria-label={`Scenario ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Query */}
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--ink-dim)] mb-1">User prompt:</p>
        <p className="font-serif text-[15px] text-[var(--ink)]">
          &ldquo;{reduced ? scenario.query : qText}&rdquo;
          {!reduced && !qDone && <span className="cursor-blink" aria-hidden="true" />}
        </p>
      </div>
      {/* Result */}
      <div className="px-4 pb-4">
        <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--ink-dim)] mb-2">AI response:</p>
        <div className={`border-l-2 pl-3 py-1 ${scenario.yours ? 'border-[var(--red)]' : 'border-[var(--rule-soft)]'}`}>
          {(reduced ? (scenario.yours ? '1. ' + scenario.result : '1. [competitor]') : rText).split('\n').map((line, i) => (
            <p key={i} className={`font-serif text-[14px] leading-relaxed ${i === (scenario.yours ? 0 : 2) ? 'text-[var(--red)] font-semibold' : 'text-[var(--ink-dim)]'}`}>
              {line}
            </p>
          ))}
          {!reduced && <span className="cursor-blink" aria-hidden="true" />}
        </div>
        {scenario.yours && (
          <p className="font-mono text-[10px] tracking-[0.06em] uppercase text-[var(--red)] mt-2">
            ↑ Signal client — showing up #1
          </p>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative ledger-rule" style={{ borderTop: 'none' }}>
      <span className="section-num hidden lg:block" aria-hidden="true">00 HERO</span>
      <div className="mx-auto max-w-site px-5 md:px-12 pt-20 pb-0">
        {/* Prompt ticker */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <PromptTicker />
        </motion.div>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)]">
            Signal · Brooklyn, NY · Est. 2026
          </motion.p>

          <h1 className="font-display font-black leading-[1.0] text-[var(--ink)]"
            style={{ fontSize: 'clamp(48px,7vw,96px)', fontVariationSettings: '"opsz" 144' }}>
            {['When Brooklyn', 'asks ChatGPT,', 'your competitors', 'answer.'].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" initial={reduced ? { opacity: 0 } : { y: '105%' }}
                  animate={reduced ? { opacity: 1 } : { y: '0%' }}
                  transition={{ duration: 0.85, delay: 0.3 + i * 0.1, ease: [0.25, 0, 0, 1] }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="font-serif text-[18px] leading-[1.7] text-[var(--ink-dim)] max-w-[500px]">
            Customers now ask AI who to call. Signal makes sure that answer is
            you — in ChatGPT, Google AI Overviews, and Perplexity.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 items-start">
            <InkBleedButton href="/audit" primary>
              See if AI is recommending your competitors
            </InkBleedButton>
            <a href="#proof" className="font-mono text-[12px] tracking-[0.04em] text-[var(--ink-dim)] underline underline-offset-4 hover:text-[var(--ink)] transition-colors pt-4 sm:pt-0 self-center">
              or see client results →
            </a>
          </motion.div>
        </div>

        {/* Right — citation theatre */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease: [0.25,0,0,1] }}>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-dim)] mb-3">Live AI results</p>
          <CitationTheatre />
          <p className="font-mono text-[10px] text-[var(--ink-dim)] mt-2 opacity-60">
            Scenarios cycle every 5s — click dots to switch
          </p>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="ledger-rule" />
    </section>
  );
}

export function InkBleedButton({ children, href, primary = false, className = '' }: {
  children: React.ReactNode; href?: string; primary?: boolean; className?: string;
}) {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const cls = `btn-ink ${primary ? '' : 'btn-ink-outline'} ${className}`;
  if (href) return (
    <a href={href} className={cls} onMouseMove={handleMove}><span>{children}</span></a>
  );
  return <button className={cls} onMouseMove={handleMove}><span>{children}</span></button>;
}
