import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, TOOL_FAQS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

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
  const toolSchema = generateToolSchema({
    name: 'Base64 Encoder/Decoder',
    description: SEO_CONFIG.base64.description,
    url: SEO_CONFIG.base64.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Base64 Encoder/Decoder', url: SEO_CONFIG.base64.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.base64);

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
