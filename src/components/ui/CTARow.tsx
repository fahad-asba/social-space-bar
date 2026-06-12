'use client';
import type { ReactNode } from 'react';
import Link from 'next/link';

interface CTAButton {
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'btn-primary' | 'btn-outline' | 'btn-ghost';
}

interface CTARowProps {
  primary: CTAButton;
  secondary?: CTAButton;
  tertiary?: CTAButton;
  align?: 'center' | 'left';
  className?: string;
}

export default function CTARow({
  primary,
  secondary,
  tertiary,
  align = 'center',
  className,
}: CTARowProps) {
  const renderBtn = (btn: CTAButton, defaultVariant: string) => {
    const cls = btn.variant || defaultVariant;
    const content = (
      <>
        {btn.icon}
        {btn.label}
      </>
    );

    if (btn.onClick) {
      return (
        <button type="button" onClick={btn.onClick} className={cls}>
          {content}
        </button>
      );
    }

    if (btn.href?.startsWith('/')) {
      return (
        <Link href={btn.href} className={cls}>
          {content}
        </Link>
      );
    }

    return (
      <a href={btn.href} className={cls}>
        {content}
      </a>
    );
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {renderBtn(primary, 'btn-primary')}
      {secondary && renderBtn(secondary, 'btn-outline')}
      {tertiary && renderBtn(tertiary, 'btn-ghost')}
    </div>
  );
}
