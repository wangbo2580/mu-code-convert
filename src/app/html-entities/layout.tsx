import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.html.title,
  description: SEO_CONFIG.html.description,
  keywords: SEO_CONFIG.html.keywords,
  alternates: {
    canonical: SEO_CONFIG.html.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.html.title,
    description: SEO_CONFIG.html.description,
    url: SEO_CONFIG.html.canonical,
    type: 'website',
  },
};

export default function HTMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
