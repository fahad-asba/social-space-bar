import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ModalProvider from '@/app/components/ModalProvider';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Social Space Bar. Please read these terms carefully before using our services.',
  alternates: { canonical: '/terms-conditions' },
  openGraph: {
    title: 'Terms & Conditions | Social Space Bar',
    description: 'Terms and Conditions governing the use of Social Space Bar services.',
    url: 'https://socialspacebar.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <ModalProvider>
      <Navbar />
      <main>
        <TermsContent />
      </main>
      </ModalProvider>
      <Footer />
    </>
  );
}
