import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ServicesMarquee from './components/ServicesMarquee';
import ModalProvider from './components/ModalProvider';

const Services = dynamic(() => import('./components/Services'), { ssr: true });
const Solutions = dynamic(() => import('./components/Solutions'), { ssr: true });
const Portfolio = dynamic(() => import('./components/Portfolio'), { ssr: true });
const Process = dynamic(() => import('./components/Process'), { ssr: true });
const WhyUs = dynamic(() => import('./components/WhyUs'), { ssr: true });
const Pricing = dynamic(() => import('./components/Pricing'), { ssr: true });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: true });
const SocialMediaPlatforms = dynamic(() => import('./components/SocialMediaPlatforms'), { ssr: true });
const Distribution = dynamic(() => import('./components/Distribution'), { ssr: true });
const FAQ = dynamic(() => import('./components/FAQ'), { ssr: true });
const ContactSection = dynamic(() => import('./components/ContactSection'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: 'Social Space Bar - Expert Social Media Marketing Services',
  description:
    'Professional social media marketing services to grow your brand, boost engagement, and build your online presence. Expert Facebook, Instagram, LinkedIn, Twitter, YouTube & TikTok marketing.',
  alternates: { canonical: 'https://www.socialspacebar.com/' },
  openGraph: { url: 'https://www.socialspacebar.com/' },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <ModalProvider>
      <main>
        <Hero />
        <StatsCounter />
        <ServicesMarquee />
        <Services />
        <Solutions />
        <Portfolio />
        <Process />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <SocialMediaPlatforms />
        <Distribution />
        <FAQ />
        <ContactSection />
      </main>
      </ModalProvider>
      <Footer />

      <div className="seo-links">
        <div className="container seo-links-inner">
          <a href="https://socialspacebar.com/services/facebook-marketing/" target="_blank" rel="noopener noreferrer">Facebook Marketing</a>
          <a href="https://socialspacebar.com/services/instagram-marketing/" target="_blank" rel="noopener noreferrer">Instagram Marketing</a>
          <a href="https://socialspacebar.com/services/linkedin-marketing/" target="_blank" rel="noopener noreferrer">LinkedIn Marketing</a>
          <a href="https://socialspacebar.com/services/twitter-marketing/" target="_blank" rel="noopener noreferrer">Twitter Marketing</a>
          <a href="https://socialspacebar.com/services/youtube-marketing/" target="_blank" rel="noopener noreferrer">YouTube Marketing</a>
          <a href="https://socialspacebar.com/services/tiktok-marketing/" target="_blank" rel="noopener noreferrer">TikTok Marketing</a>
        </div>
      </div>

      <style>{`
        .seo-links { padding: 24px 0; background: var(--section-gradient); transition: background 0.3s ease; }
        .seo-links-inner { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 24px; }
        .seo-links-inner a { color: var(--foreground-muted); font-size: 0.78rem; text-decoration: none; transition: color 0.2s ease; }
        .seo-links-inner a:hover { color: #66C7C0; }
        @media (max-width: 600px) {
          .seo-links { padding: 16px 0; }
          .seo-links-inner a { font-size: 0.72rem; }
        }
      `}</style>
    </>
  );
}
