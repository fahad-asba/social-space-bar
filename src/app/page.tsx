import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesMarquee from './components/ServicesMarquee';
import ModalProvider from './components/ModalProvider';
import FloatingChatButton from './components/FloatingChatButton';

const Services = dynamic(() => import('./components/Services'));
const Solutions = dynamic(() => import('./components/Solutions'));
const Portfolio = dynamic(() => import('./components/Portfolio'));
const Process = dynamic(() => import('./components/Process'));
const WhyUs = dynamic(() => import('./components/WhyUs'));
const Pricing = dynamic(() => import('./components/Pricing'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const SocialMediaPlatforms = dynamic(() => import('./components/SocialMediaPlatforms'));
const OurGuarantee = dynamic(() => import('./components/OurGuarantee'));
const FAQ = dynamic(() => import('./components/FAQ'));
const ContactSection = dynamic(() => import('./components/ContactSection'));
const Footer = dynamic(() => import('./components/Footer'));

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
        <OurGuarantee />
        <FAQ />
        <ContactSection />
      </main>
      <FloatingChatButton />
      </ModalProvider>
      <Footer />


    </>
  );
}
