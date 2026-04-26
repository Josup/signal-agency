'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FoldSection({ children, className = '', id, style }: { children: ReactNode; className?: string; id?: string; style?: React.CSSProperties }) {
  const reduced = useReducedMotion();
  return (
    <div style={{ perspective: '1400px' }} id={id}>
      <motion.div
        className={className}
        style={{ transformOrigin: 'top center', ...style }}
        initial={reduced ? { opacity: 0 } : { opacity: 0, rotateX: -6, y: 32 }}
        whileInView={reduced ? { opacity: 1 } : { opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.25, 0, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
