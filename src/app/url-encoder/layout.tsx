import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.url.title,
  description: SEO_CONFIG.url.description,
  keywords: SEO_CONFIG.url.keywords,
  alternates: {
    canonical: SEO_CONFIG.url.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.url.title,
    description: SEO_CONFIG.url.description,
    url: SEO_CONFIG.url.canonical,
    type: 'website',
  },
};

export default function URLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
