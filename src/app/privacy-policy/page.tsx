import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ModalProvider from '@/app/components/ModalProvider';
import PolicyContent from './PolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Social Space Bar. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Social Space Bar',
    description: 'Learn how Social Space Bar collects, uses, and protects your personal information.',
    url: 'https://socialspacebar.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ModalProvider>
      <Navbar />
      <main>
        <PolicyContent />
      </main>
      </ModalProvider>
      <Footer />
    </>
  );
}
