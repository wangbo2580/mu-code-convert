import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.base64.title,
  description: SEO_CONFIG.base64.description,
  keywords: SEO_CONFIG.base64.keywords,
  alternates: {
    canonical: SEO_CONFIG.base64.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.base64.title,
    description: SEO_CONFIG.base64.description,
    url: SEO_CONFIG.base64.canonical,
    type: 'website',
  },
};

export default function Base64Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
