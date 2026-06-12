import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}

export default function Badge({ children, className, dot }: BadgeProps) {
  return (
    <div className={`section-label${dot ? ' section-label-dot' : ''}${className ? ` ${className}` : ''}`}>
      {dot && <span className="badge-dot" />}
      {children}
    </div>
  );
}
