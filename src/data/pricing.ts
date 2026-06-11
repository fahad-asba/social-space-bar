export interface PricingPlan {
  name: string;
  subtitle: string;
  desc: string;
  color: string;
  featured: boolean;
  badge?: string;
  features: string[];
}

export const plans: PricingPlan[] = [
  {
    name: 'Starter',
    subtitle: 'Social Media Marketing & Brand Building',
    desc: 'Perfect for brands starting their journey.',
    color: '#06b6d4',
    featured: false,
    features: [
      'Social Media Marketing on 4 major platforms',
      'Custom Design Posts & Short Videos',
      'Scheduled posting of professional content',
      'Campaign optimization for maximum reach',
      'Free Brand Website',
      'Content creation & brand promotion',
      'Engaging ad campaigns to attract customers',
    ],
  },
  {
    name: 'Pro',
    subtitle: 'Everything in Starter, plus Advanced Ad Optimization',
    desc: 'Ideal for brands ready to scale their presence.',
    color: '#66C7C0',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Includes all Starter Package features',
      'Advanced Social Media Ad Management',
      'Multi-Platform Ad Campaigns & Optimization',
      'SEO for Brand Visibility',
      'Keyword Planning for maximum discoverability',
      'Performance Tracking & Analytics',
      'Reputation Management & Engagement Boost',
    ],
  },
  {
    name: 'Premium',
    subtitle: 'All-in-One Marketing + Growth Guarantee',
    desc: 'For brands aiming for top visibility and guaranteed growth.',
    color: '#7c3aed',
    featured: false,
    badge: 'Best Results',
    features: [
      'Includes Starter & Pro Package features',
      'Growth Guarantee',
      'Engagement Acceleration',
      'Advanced Marketing Campaigns',
      'Multi-platform brand promotion',
      'Priority support & campaign management',
    ],
  },
];
