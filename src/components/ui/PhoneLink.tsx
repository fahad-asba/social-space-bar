import { Phone, MessageCircle } from 'lucide-react';

interface PhoneLinkProps {
  label?: string;
  mobileLabel?: string;
  className?: string;
  iconSize?: number;
  showIcon?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

const PHONE = '+1 (210) 493-8277';
const PHONE_HREF = 'tel:+12104938277';

export default function PhoneLink({
  label = PHONE,
  mobileLabel,
  className = 'btn-ghost',
  iconSize = 16,
  showIcon = true,
  ariaLabel,
  onClick,
}: PhoneLinkProps) {
  const content = (
    <>
      {showIcon && mobileLabel ? (
        <>
          <MessageCircle size={iconSize} className="pl-icon-chat" />
          <Phone size={iconSize} className="pl-icon-phone" />
        </>
      ) : (
        showIcon && <Phone size={iconSize} />
      )}
      {mobileLabel ? (
        <>
          <span className="pl-desktop">{label}</span>
          <span className="pl-mobile">{mobileLabel}</span>
        </>
      ) : (
        label
      )}
    </>
  );

  if (onClick) {
    return (
      <>
        {mobileLabel && <style>{chatStyles}</style>}
        <button type="button" className={className} aria-label={ariaLabel || label} onClick={onClick}>
          {content}
        </button>
      </>
    );
  }

  return (
    <>
      {mobileLabel && <style>{chatStyles}</style>}
      <a href={PHONE_HREF} className={className} aria-label={ariaLabel || label}>
        {content}
      </a>
    </>
  );
}

const chatStyles = `
  .pl-desktop { display: inline; }
  .pl-mobile { display: none; }
  .pl-icon-chat { display: inline; }
  .pl-icon-phone { display: none; }
  @media (max-width: 600px) {
    .pl-desktop { display: none; }
    .pl-mobile { display: inline; }
    .pl-icon-chat { display: none; }
    .pl-icon-phone { display: inline; }
  }
`;
