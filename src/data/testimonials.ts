export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  stars: number;
}

export interface Stat {
  value: string;
  label: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Working with Social Space Bar was a game-changer. Their social media strategies skyrocketed our brand visibility and engagement across all platforms. Our followers grew 3x in the first month.',
    name: 'James Walker',
    role: 'Marketing Director',
    initials: 'JW',
    color: '#66C7C0',
    stars: 5,
  },
  {
    quote: 'The team was professional and very supportive throughout our campaign. We saw a noticeable boost in engagement and conversions. They truly understand the social media landscape.',
    name: 'Emily Carter',
    role: 'Brand Manager',
    initials: 'EC',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'Social Space Bar knows how to position a brand in front of the right audience. Their campaign helped us gain the attention we truly deserved. Highly recommended!',
    name: 'David Richardson',
    role: 'CEO, TechStart',
    initials: 'DR',
    color: '#06b6d4',
    stars: 5,
  },
  {
    quote: 'The attention to detail and personalized approach sets them apart. Our brand went from unknown to industry-recognized. Their team really cares about their clients.',
    name: 'Sarah Mitchell',
    role: 'Founder, Mitchell Co.',
    initials: 'SM',
    color: '#10b981',
    stars: 5,
  },
];

export const stats: Stat[] = [
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '3x', label: 'Avg Engagement Growth' },
  { value: '4.9★', label: 'Client Rating' },
];
