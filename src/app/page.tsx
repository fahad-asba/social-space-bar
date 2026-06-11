import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ServicesMarquee from './components/ServicesMarquee';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import SocialMediaPlatforms from './components/SocialMediaPlatforms';
import Distribution from './components/Distribution';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileFloatingCallBtn from './components/MobileFloatingCallBtn';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency',
  description:
    'Professional social media marketing services to grow your brand, boost engagement, and build your online presence. Expert Facebook, Instagram, LinkedIn, Twitter, YouTube & TikTok marketing.',
  alternates: { canonical: 'https://www.socialspacebar.com/' },
  openGraph: { url: 'https://www.socialspacebar.com/' },
};

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
      <MobileFloatingCallBtn />

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
