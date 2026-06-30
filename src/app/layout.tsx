import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollAnchor from './components/SmoothScrollAnchor';
import TawkChat from './components/TawkChat';

import GclidCapture from './components/GclidCapture';
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
    "https://www.facebook.com/socialspacebar",
    "https://www.instagram.com/socialspacebar",
    "https://www.linkedin.com/company/socialspacebar",
    "https://twitter.com/socialspacebar",
    "https://www.youtube.com/@socialspacebar",
    "https://www.tiktok.com/@socialspacebar",
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
        <link rel="preload" href="/hero-img4.webp" as="image" fetchPriority="high" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K7RHJNZ8');`,
          }}
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7RHJNZ8" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <ThemeProvider>{children}</ThemeProvider>
        <GclidCapture />
        <ScrollToTop />
        <SmoothScrollAnchor />
        <TawkChat />
      </body>
    </html>
  );
}
