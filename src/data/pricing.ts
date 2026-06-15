export interface PricingPlan {
  name: string;
  price: number;
  desc: string;
  color: string;
  featured: boolean;
  badge?: string;
  features: string[];
  idealFor: string;
}

export const plans: PricingPlan[] = [
  {
    name: 'Starter Growth',
    price: 349,
    desc: 'For startups and local businesses building their online presence.',
    color: '#06b6d4',
    featured: false,
    badge: 'BEST VALUE',
    features: [
      'Social Media Strategy Setup',
      'Management of 2 Platforms',
      '12 Custom Graphic Posts',
      '4 Professional Reels / Short Videos',
      'Content Calendar Planning',
      'Caption Writing & Hashtag Research',
      'Scheduling & Publishing',
      'Community Management (Comments & Messages)',
      'Monthly Performance Report',
      'Dedicated Account Manager',
    ],
    idealFor: 'Small businesses, restaurants, local services, personal brands',
  },
  {
    name: 'Pro Growth',
    price: 599,
    desc: 'For businesses focused on generating leads and growing faster.',
    color: '#66C7C0',
    featured: true,
    badge: '⭐ MOST POPULAR',
    features: [
      'Everything in Starter',
      'Management of 3 Platforms',
      '20 Custom Graphic Posts',
      '8 Professional Reels / Short Videos',
      'Advanced Audience Targeting',
      'Facebook & Instagram Ad Management',
      'Lead Generation Campaign Setup',
      'Competitor Analysis',
      'Monthly Strategy Call',
      'Priority Support',
      'Dedicated Account Manager',
    ],
    idealFor: 'Marketing agencies, law firms, healthcare clinics, real estate, e-commerce',
  },
  {
    name: 'Premium Domination',
    price: 999,
    desc: 'A complete growth solution designed for aggressive scaling.',
    color: '#7c3aed',
    featured: false,
    badge: 'BEST RESULTS',
    features: [
      'Everything in Pro',
      'Management of 5 Platforms',
      '30 Custom Graphic Posts',
      '12 Professional Reels / Short Videos',
      'Full Advertising Management',
      'Google Business Profile Optimization',
      'Local SEO & Google Ranking Improvements',
      'Website Conversion Optimization',
      'Landing Page Improvements',
      'Advanced Retargeting Campaigns',
      'Monthly Marketing Strategy Session',
      'Detailed Analytics Dashboard',
      '2 Dedicated Project Managers',
      'VIP Priority Support',
    ],
    idealFor: 'Established businesses, multi-location companies, high-growth brands',
  },
];
