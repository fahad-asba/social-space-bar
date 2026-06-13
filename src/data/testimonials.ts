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
  {
    quote: 'Working with SocialSpaceBar has been a game-changer for us. Their understanding of social media trends and how to position our brand was outstanding. We\'ve gone from inconsistent posting to a fully managed, professional online presence.',
    name: 'Vivian Richards',
    role: 'Entrepreneur',
    initials: 'VR',
    color: '#f59e0b',
    stars: 5,
    image: 'https://sm.socialspacebar.com/wp-content/uploads/2025/10/team_8.jpg',
  },
  {
    quote: 'The team at SocialSpaceBar truly knows how to deliver results. They designed campaigns that not only looked amazing but also brought in real business. Their professionalism and communication were top-notch.',
    name: 'Edward Lawson',
    role: 'Small Business Owner',
    initials: 'EL',
    color: '#ef4444',
    stars: 5,
    image: 'https://sm.socialspacebar.com/wp-content/uploads/2025/10/team_5.jpg',
  },
  {
    quote: 'SocialSpaceBar transformed our online presence completely. From strategy to execution, everything was handled with precision and creativity. Our engagement rates have never been higher.',
    name: 'Jonathan Chen',
    role: 'Bank Executive',
    initials: 'JC',
    color: '#8b5cf6',
    stars: 5,
    image: 'https://sm.socialspacebar.com/wp-content/uploads/2025/10/team_8.jpg',
  },
];

export const stats: Stat[] = [
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '3x', label: 'Avg Engagement Growth' },
  { value: '4.9★', label: 'Client Rating' },
];
