import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.caesar.title,
  description: SEO_CONFIG.caesar.description,
  keywords: SEO_CONFIG.caesar.keywords,
  alternates: {
    canonical: SEO_CONFIG.caesar.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.caesar.title,
    description: SEO_CONFIG.caesar.description,
    url: SEO_CONFIG.caesar.canonical,
    type: 'website',
  },
};

export default function CaesarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
