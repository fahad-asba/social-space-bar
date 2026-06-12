import { Phone } from 'lucide-react';

interface PhoneLinkProps {
  label?: string;
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
  className = 'btn-ghost',
  iconSize = 16,
  showIcon = true,
  ariaLabel,
  onClick,
}: PhoneLinkProps) {
  return (
    <a href={PHONE_HREF} className={className} aria-label={ariaLabel} onClick={onClick}>
      {showIcon && <Phone size={iconSize} />}
      {label}
    </a>
  );
}
