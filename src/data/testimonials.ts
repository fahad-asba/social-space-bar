export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  stars: number;
  image?: string;
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
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'The team was professional and very supportive throughout our campaign. We saw a noticeable boost in engagement and conversions. They truly understand the social media landscape.',
    name: 'Emily Carter',
    role: 'Brand Manager',
    initials: 'EC',
    color: '#7c3aed',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'Social Space Bar knows how to position a brand in front of the right audience. Their campaign helped us gain the attention we truly deserved. Highly recommended!',
    name: 'David Richardson',
    role: 'CEO, TechStart',
    initials: 'DR',
    color: '#06b6d4',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'The attention to detail and personalized approach sets them apart. Our brand went from unknown to industry-recognized. Their team really cares about their clients.',
    name: 'Sarah Mitchell',
    role: 'Founder, Mitchell Co.',
    initials: 'SM',
    color: '#10b981',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'Working with SocialSpaceBar has been a game-changer for us. Their understanding of social media trends and how to position our brand was outstanding. We\'ve gone from inconsistent posting to a fully managed, professional online presence.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face',
    name: 'Vivian Richards',
    role: 'Entrepreneur',
    initials: 'VR',
    color: '#f59e0b',
    stars: 5,
  },
  {
    quote: 'The team at SocialSpaceBar truly knows how to deliver results. They designed campaigns that not only looked amazing but also brought in real business. Their professionalism and communication were top-notch.',
    name: 'Edward Lawson',
    role: 'Small Business Owner',
    initials: 'EL',
    color: '#ef4444',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'SocialSpaceBar transformed our online presence completely. From strategy to execution, everything was handled with precision and creativity. Our engagement rates have never been higher.',
    name: 'Jonathan Chen',
    role: 'Bank Executive',
    initials: 'JC',
    color: '#8b5cf6',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },
];

export const stats: Stat[] = [
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '3x', label: 'Avg Engagement Growth' },
  { value: '4.9★', label: 'Client Rating' },
];
