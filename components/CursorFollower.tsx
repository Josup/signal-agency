'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isTouch, setIsTouch] = useState(true); // default true to avoid SSR flash
  const [reducedMotion, setReducedMotion] = useState(false);

  const rawX = useSpring(0, { stiffness: 150, damping: 20 });
  const rawY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Detect touch-only devices
    const touchQuery = window.matchMedia('(hover: none)');
    setIsTouch(touchQuery.matches);

    const handleTouchChange = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    touchQuery.addEventListener('change', handleTouchChange);

    // Detect reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      touchQuery.removeEventListener('change', handleTouchChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [rawX, rawY]);

  // Don't render on touch-only devices
  if (isTouch) return null;

  // If reduced motion, skip the spring — use instant position
  const x = reducedMotion ? rawX : rawX;
  const y = reducedMotion ? rawY : rawY;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
