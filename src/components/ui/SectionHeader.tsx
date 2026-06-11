import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  children: ReactNode;
  description?: string;
  descriptionClass?: string;
  labelClass?: string;
  headingStyle?: React.CSSProperties;
}

export default function SectionHeader({
  label,
  children,
  description,
  descriptionClass = 'section-desc',
  labelClass = 'section-label',
  headingStyle,
}: SectionHeaderProps) {
  return (
    <>
      <div className={labelClass}>{label}</div>
      <h2 className="section-heading" style={{ marginBottom: '20px', ...headingStyle }}>
        {children}
      </h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </>
  );
}
