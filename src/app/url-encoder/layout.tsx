import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, TOOL_FAQS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

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
  const toolSchema = generateToolSchema({
    name: 'URL Encoder/Decoder',
    description: SEO_CONFIG.url.description,
    url: SEO_CONFIG.url.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'URL Encoder/Decoder', url: SEO_CONFIG.url.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
