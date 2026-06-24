import { Target, Globe, BarChart3, Zap, Handshake, FlaskConical } from 'lucide-react';

export interface Reason {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const reasons: Reason[] = [
  {
    icon: <Target size={26} strokeWidth={1.8} color="#66C7C0" />,
    title: 'Guaranteed ROI Focus',
    desc: 'Every campaign is optimized for maximum return. We measure success in engagement, not just impressions.',
  },
  {
    icon: <Globe size={26} strokeWidth={1.8} color="#7C5CFC" />,
    title: 'Increase Your Reach',
    desc: 'Multi-platform strategy puts your brand in front of millions of potential customers worldwide.',
  },
  {
    icon: <BarChart3 size={26} strokeWidth={1.8} color="#F59E0B" />,
    title: 'Significant Growth',
    desc: 'Data-driven approach consistently delivers 3x or more in engagement and conversions for our clients.',
  },
  {
    icon: <Zap size={26} strokeWidth={1.8} color="#EF4444" />,
    title: 'Amplify Your Impact',
    desc: 'Build lasting brand authority that continues to drive engagement long after campaigns end.',
  },
  {
    icon: <Handshake size={26} strokeWidth={1.8} color="#10B981" />,
    title: 'Dedicated Support',
    desc: 'Your personal marketing team is always available - no bots, no delays, real experts.',
  },
  {
    icon: <FlaskConical size={26} strokeWidth={1.8} color="#3B82F6" />,
    title: 'Proven Strategies',
    desc: 'Battle-tested campaigns refined from 500+ successful brand marketing journeys.',
  },
];
