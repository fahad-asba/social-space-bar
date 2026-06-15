import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
      <ModalProvider>
      <Navbar />
      <main>
        <Hero />
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


    </>
  );
}
