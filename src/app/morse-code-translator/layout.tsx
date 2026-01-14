import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.morse.title,
  description: SEO_CONFIG.morse.description,
  keywords: SEO_CONFIG.morse.keywords,
  alternates: {
    canonical: SEO_CONFIG.morse.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.morse.title,
    description: SEO_CONFIG.morse.description,
    url: SEO_CONFIG.morse.canonical,
    type: 'website',
  },
};

export default function MorseCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
