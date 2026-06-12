import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  children: ReactNode;
  description?: string;
  descriptionClass?: string;
  className?: string;
  headingStyle?: React.CSSProperties;
  labelDot?: boolean;
}

export default function SectionHeader({
  label,
  children,
  description,
  descriptionClass = 'section-desc',
  className,
  headingStyle,
  labelDot,
}: SectionHeaderProps) {
  return (
    <>
      <div className={`section-label${className ? ` ${className}` : ''}`}>
        {labelDot && <span className="badge-dot" />}
        {label}
      </div>
      <h2 className="section-heading" style={{ marginBottom: '20px', ...headingStyle }}>
        {children}
      </h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </>
  );
}
