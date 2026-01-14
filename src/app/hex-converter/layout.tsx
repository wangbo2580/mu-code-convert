import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.hex.title,
  description: SEO_CONFIG.hex.description,
  keywords: SEO_CONFIG.hex.keywords,
  alternates: {
    canonical: SEO_CONFIG.hex.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.hex.title,
    description: SEO_CONFIG.hex.description,
    url: SEO_CONFIG.hex.canonical,
    type: 'website',
  },
};

export default function HexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
