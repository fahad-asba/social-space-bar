export interface DistributionChannel {
  src: string;
  name: string;
  w: number;
  h: number;
}

export const channels: DistributionChannel[] = [
  { src: '/facebook_icon.webp', name: 'Facebook', w: 100, h: 80 },
  { src: '/Instagram_icon.webp', name: 'Instagram', w: 100, h: 80 },
  { src: '/pintrest-logo.png', name: 'pinterest', w: 100, h: 56 },
  { src: '/linkdein_icon.webp', name: 'LinkedIn', w: 100, h: 80 },
  { src: '/twitter-x_icon.webp', name: 'X (Twitter)', w: 100, h: 80 },
  { src: '/Youtube_logo.webp', name: 'YouTube', w: 120, h: 70 },
  { src: '/tiktok_icon.webp', name: 'TikTok', w: 100, h: 80 },
];
