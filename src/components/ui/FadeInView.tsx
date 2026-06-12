'use client';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  margin?: string;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: 'div' | 'span';
}

export default function FadeInView({
  children,
  y = 40,
  delay = 0,
  duration = 0.5,
  margin = '-50px',
  once = true,
  className,
  style,
  as = 'div',
}: FadeInViewProps) {
  const Tag = as === 'span' ? motion.span : motion.div;

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  );
}
