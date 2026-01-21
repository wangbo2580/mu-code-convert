import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SITE_CONFIG } from "@/lib/constants";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Free Online Encoding & Decoding Tools | No Signup`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: 'Free online encoder decoder tools - Morse code translator, Caesar cipher decoder, Base64, Binary, Hex & more. Instant conversion, 100% free, no signup required!',
  keywords: [
    'encoder',
    'decoder',
    'converter',
    'morse code translator',
    'morse code',
    'caesar cipher',
    'caesar cipher decoder',
    'base64 encoder',
    'binary converter',
    'hex converter',
    'url encoder',
    'online encoder decoder',
    'free text converter',
    'code translator',
    'encoding tools',
    'decoding tools',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - Free Online Encoding & Decoding Tools | No Signup`,
    description: 'Free online encoder decoder tools - Morse code translator, Caesar cipher decoder, Base64, Binary & more. Instant conversion, 100% free!',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Free Online Encoding & Decoding Tools | No Signup`,
    description: 'Free online encoder decoder tools - Morse code translator, Caesar cipher decoder, Base64, Binary & more. Instant conversion, 100% free!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Replace with your actual Google Search Console verification code after setup
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
