import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import ScrollToTop from './components/ScrollToTop';
import PhoneLinkEnhancer from './components/PhoneLinkEnhancer';
import SmoothScrollAnchor from './components/SmoothScrollAnchor';
import "@/app/components/theme/phone-input.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const SITE_URL = "https://www.socialspacebar.com";

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
  telephone: "+1-210-493-8277",
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
telephone: "+1-210-493-8277",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('smm-theme');
                  if (!t) { t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <ScrollToTop />
        <PhoneLinkEnhancer />
        <SmoothScrollAnchor />
      </body>
    </html>
  );
}
