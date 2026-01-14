import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.binary.title,
  description: SEO_CONFIG.binary.description,
  keywords: SEO_CONFIG.binary.keywords,
  alternates: {
    canonical: SEO_CONFIG.binary.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.binary.title,
    description: SEO_CONFIG.binary.description,
    url: SEO_CONFIG.binary.canonical,
    type: 'website',
  },
};

export default function BinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
