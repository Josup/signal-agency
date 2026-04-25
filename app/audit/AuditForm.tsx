'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Step = 1 | 2 | 3 | 'done';

interface Answers {
  businessType: string;
  neighborhood: string;
  websiteUrl: string;
}

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function AuditForm() {
  const [step, setStep] = useState<Step>(1);
  const [value, setValue] = useState('');
  const [answers, setAnswers] = useState<Answers>({
    businessType: '',
    neighborhood: '',
    websiteUrl: '',
  });

  // Append Calendly widget script when on "done" step
  useEffect(() => {
    if (step !== 'done') return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [step]);

  const handleNext = () => {
    if (step === 1) {
      setAnswers((prev) => ({ ...prev, businessType: value }));
      setValue('');
      setStep(2);
    } else if (step === 2) {
      setAnswers((prev) => ({ ...prev, neighborhood: value }));
      setValue('');
      setStep(3);
    } else if (step === 3) {
      setAnswers((prev) => ({ ...prev, websiteUrl: value }));
      setValue('');
      setStep('done');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) handleNext();
  };

  const stepNumber = step === 'done' ? 3 : (step as number);
  const progress = step === 'done' ? 100 : ((step as number) / 3) * 100;

  const calendlyUrl = `https://calendly.com/joshuasupino/30min?name=Business&a1=${encodeURIComponent(
    answers.businessType
  )}&a2=${encodeURIComponent(answers.neighborhood)}&a3=${encodeURIComponent(
    answers.websiteUrl
  )}`;

  const inputClass =
    'w-full text-lg p-4 rounded-lg text-white placeholder-white/30 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400';
  const inputStyle = {
    backgroundColor: '#111',
    border: '1px solid rgba(255,255,255,0.15)',
  };
  const buttonClass =
    'mt-4 w-full py-4 rounded-full font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed';

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-16"
      style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
    >
      {/* Page Header — always visible */}
      <div className="text-center mb-12 max-w-lg w-full">
        <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
          FREE AUDIT
        </p>
        <h1
          className="text-4xl sm:text-5xl mb-4 leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Is AI recommending your competitors?
        </h1>
        <p className="text-white/60 text-base leading-relaxed">
          Answer 3 quick questions and book a call. I&apos;ll show you exactly
          where you stand.
        </p>
      </div>

      {/* Form area */}
      <div className="w-full max-w-lg">
        {/* Step counter + progress bar (hidden on done) */}
        {step !== 'done' && (
          <>
            <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
              Step {stepNumber} of 3
            </p>
            <div
              className="w-full h-px mb-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <motion.div
                className="h-full bg-amber-400"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </>
        )}

        <AnimatePresence mode="wait">
          {/* ── Step 1 ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label className="block text-xl font-semibold mb-6">
                What type of business do you run?
              </label>
              <input
                autoFocus
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. dental practice, gym, law firm..."
                className={inputClass}
                style={inputStyle}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className={buttonClass}
              >
                Next →
              </button>
            </motion.div>
          )}

          {/* ── Step 2 ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label className="block text-xl font-semibold mb-6">
                What neighborhood are you in?
              </label>
              <input
                autoFocus
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Park Slope, Astoria, Crown Heights..."
                className={inputClass}
                style={inputStyle}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className={buttonClass}
              >
                Next →
              </button>
            </motion.div>
          )}

          {/* ── Step 3 ── */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label className="block text-xl font-semibold mb-6">
                What&apos;s your website URL?
              </label>
              <input
                autoFocus
                type="url"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="https://yourbusiness.com"
                className={inputClass}
                style={inputStyle}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className={buttonClass}
              >
                Show me my audit →
              </button>
            </motion.div>
          )}

          {/* ── Done — Calendly ── */}
          {step === 'done' && (
            <motion.div
              key="done"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-center"
            >
              <h2
                className="text-3xl sm:text-4xl mb-4"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                }}
              >
                Book your free AI visibility audit
              </h2>

              {/* Collected answers summary */}
              <div
                className="inline-flex flex-col items-start gap-1 mb-8 px-5 py-3 rounded-xl text-sm text-white/60"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <span>
                  <span className="text-amber-400 font-mono">Business:</span>{' '}
                  {answers.businessType}
                </span>
                <span>
                  <span className="text-amber-400 font-mono">Location:</span>{' '}
                  {answers.neighborhood}
                </span>
                <span>
                  <span className="text-amber-400 font-mono">Website:</span>{' '}
                  {answers.websiteUrl}
                </span>
              </div>

              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget w-full rounded-xl overflow-hidden"
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
