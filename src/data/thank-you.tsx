import { BarChart3, ClipboardCheck, Heart, Search, TrendingUp, Users } from 'lucide-react';
import { ReactNode } from 'react';

export interface ThankYouStep {
  step: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface ThankYouStat {
  value: string;
  label: string;
  icon: ReactNode;
}

export const steps: ThankYouStep[] = [
  {
    step: 'Step 1',
    title: 'Request Submitted',
    desc: 'Your request has been received and logged into our system.',
    icon: <ClipboardCheck size={24} />,
  },
  {
    step: 'Step 2',
    title: 'Team Reviews Requirements',
    desc: 'A marketing specialist carefully reviews your brand details and goals.',
    icon: <Search size={24} />,
  },
  {
    step: 'Step 3',
    title: 'Marketing Consultation',
    desc: 'We reach out to discuss your goals and craft a custom marketing strategy.',
    icon: <Users size={24} />,
  },
  {
    step: 'Step 4',
    title: 'Marketing Strategy',
    desc: 'Finalize your marketing plan with clear next steps and timelines.',
    icon: <BarChart3 size={24} />,
  },
];

export const trustStats: ThankYouStat[] = [
  {
    value: '500+',
    label: 'Clients Served',
    icon: <Users size={22} />,
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    icon: <Heart size={22} />,
  },
  {
    value: '3X',
    label: 'Average Engagement Growth',
    icon: <TrendingUp size={22} />,
  },
];
