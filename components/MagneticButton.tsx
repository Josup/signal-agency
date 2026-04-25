'use client';

import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    x.set(deltaX / 4);
    y.set(deltaY / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    'inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors duration-200 select-none';

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#F59E0B] text-black hover:bg-amber-300'
      : 'bg-transparent border border-[#F59E0B] text-[#F59E0B] hover:bg-[rgba(245,158,11,0.08)]';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  const motionProps = {
    ref: ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    style: { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: combinedClasses,
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
