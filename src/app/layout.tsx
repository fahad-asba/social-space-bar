import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollAnchor from './components/SmoothScrollAnchor';
import GclidCapture from './components/GclidCapture';
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from './components/GoogleTagManager';
import { MetaPixelHead, MetaPixelNoScript } from './components/MetaPixel';
import { PHONE_SCHEMA } from '@/lib/phone';
import "@/app/components/theme/phone-input.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const SITE_URL = "https://www.socialspacebar.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1526" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Social Space Bar",
    template: "%s | Social Space Bar",
  },
  description:
    "Professional social media marketing agency specializing in Facebook, Instagram, LinkedIn, Twitter, YouTube, and TikTok. Grow your brand, increase engagement, and drive real results.",
  keywords: [
    "social media marketing agency",
    "Facebook marketing",
    "Instagram marketing",
    "LinkedIn marketing",
    "Twitter marketing",
    "YouTube marketing",
    "TikTok marketing",
    "social media management",
    "brand growth",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Social Space Bar",
    description: "Turn your brand into a powerhouse with expert social media marketing across Facebook, Instagram, LinkedIn, Twitter, YouTube & TikTok.",
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "Social Space Bar",
    images: [
      {
        url: "/footer-logo.webp",
        width: 512,
        height: 512,
        alt: " Social Space Bar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Space Bar",
    description: "Turn your brand into a powerhouse with expert social media marketing across Facebook, Instagram, LinkedIn, Twitter, YouTube & TikTok.",
    images: ["/footer-logo.webp"],
  },
  icons: {
    icon: "/footer-logo.webp",
    shortcut: "/footer-logo.webp",
    apple: "/footer-logo.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Social Space Bar",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/footer-logo.webp`,
  description:
    "Professional social media marketing strategies to grow your brand, boost engagement, and build your online presence across every major platform.",
  telephone: PHONE_SCHEMA,
  sameAs: [
    "https://www.facebook.com/profile.php?id=61593842817422",
    "https://www.instagram.com/social_spacebar_llc",
    "https://www.linkedin.com/company/social-spacebar-llc/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_SCHEMA,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleTagManagerHead />
        <MetaPixelHead />
        <link rel="preload" href="/hero-img4.webp" as="image" fetchPriority="high" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <MetaPixelNoScript />
        <ThemeProvider>{children}</ThemeProvider>
        <GclidCapture />
        <ScrollToTop />
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
