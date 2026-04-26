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
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function AuditForm() {
  const [step, setStep] = useState<Step>(1);
  const [value, setValue] = useState('');
  const [answers, setAnswers] = useState<Answers>({
    businessType: '',
    neighborhood: '',
    websiteUrl: '',
  });

  useEffect(() => {
    if (step !== 'done') return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
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

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-5 py-20"
      style={{ backgroundColor: '#F5F2ED', color: '#0D0D0D' }}
    >
      {/* Header */}
      <div className="text-center mb-14 max-w-lg w-full">
        <p
          className="text-[11px] tracking-[0.06em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-dm-mono)', color: 'rgba(13,13,13,0.4)' }}
        >
          Free Audit
        </p>
        <h1
          className="leading-[1.05] mb-5"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 900,
            fontVariationSettings: '"opsz" 144',
            color: '#0D0D0D',
          }}
        >
          Is AI recommending your competitors?
        </h1>
        <p
          className="text-base leading-[1.65]"
          style={{ fontFamily: 'var(--font-syne)', color: 'rgba(13,13,13,0.6)' }}
        >
          Answer 3 quick questions and book a call. I&apos;ll show you exactly where you stand.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-lg">
        {step !== 'done' && (
          <>
            <p
              className="text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-dm-mono)', color: '#C41E3A' }}
            >
              Step {stepNumber} of 3
            </p>
            <div className="w-full h-px mb-10" style={{ backgroundColor: 'rgba(13,13,13,0.1)' }}>
              <motion.div
                className="h-full"
                style={{ backgroundColor: '#C41E3A' }}
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label
                className="block text-xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                What type of business do you run?
              </label>
              <input
                autoFocus
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. dental practice, gym, law firm..."
                className="w-full text-base p-4 focus:outline-none"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: 'transparent',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  borderRadius: 0,
                }}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className="btn-ledger mt-4 w-full py-4 font-semibold text-sm tracking-[0.02em] disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: '#C41E3A',
                  color: '#F5F2ED',
                  borderRadius: 0,
                  border: 'none',
                }}
              >
                Next →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label
                className="block text-xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                What neighborhood are you in?
              </label>
              <input
                autoFocus
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Park Slope, Astoria, Crown Heights..."
                className="w-full text-base p-4 focus:outline-none"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: 'transparent',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  borderRadius: 0,
                }}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className="btn-ledger mt-4 w-full py-4 font-semibold text-sm tracking-[0.02em] disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: '#C41E3A',
                  color: '#F5F2ED',
                  borderRadius: 0,
                  border: 'none',
                }}
              >
                Next →
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <label
                className="block text-xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                What&apos;s your website URL?
              </label>
              <input
                autoFocus
                type="url"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="https://yourbusiness.com"
                className="w-full text-base p-4 focus:outline-none"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: 'transparent',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  borderRadius: 0,
                }}
              />
              <button
                onClick={handleNext}
                disabled={!value.trim()}
                className="btn-ledger mt-4 w-full py-4 font-semibold text-sm tracking-[0.02em] disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'var(--font-syne)',
                  backgroundColor: '#C41E3A',
                  color: '#F5F2ED',
                  borderRadius: 0,
                  border: 'none',
                }}
              >
                Show me my audit →
              </button>
            </motion.div>
          )}

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
                className="leading-[1.05] mb-5"
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 'clamp(26px, 4vw, 36px)',
                  fontWeight: 700,
                  fontVariationSettings: '"opsz" 72',
                }}
              >
                Book your free AI visibility audit
              </h2>

              <div
                className="inline-flex flex-col items-start gap-1 mb-10 px-5 py-4 text-sm text-left"
                style={{ border: '1px solid rgba(13,13,13,0.15)' }}
              >
                {[
                  ['Business', answers.businessType],
                  ['Location', answers.neighborhood],
                  ['Website', answers.websiteUrl],
                ].map(([label, val]) => (
                  <span key={label} style={{ fontFamily: 'var(--font-syne)', color: 'rgba(13,13,13,0.7)' }}>
                    <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#C41E3A', fontSize: '11px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}:</span>{' '}
                    {val}
                  </span>
                ))}
              </div>

              <div
                className="calendly-inline-widget w-full overflow-hidden"
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
