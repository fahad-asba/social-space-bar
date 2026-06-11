import { ArrowUpRight } from 'lucide-react';

interface ArrowIconProps {
  size?: number;
}

export default function ArrowIcon({ size = 14 }: ArrowIconProps) {
  return <ArrowUpRight size={size} />;
}
