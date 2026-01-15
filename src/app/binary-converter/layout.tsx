import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, TOOL_FAQS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

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
  const toolSchema = generateToolSchema({
    name: 'Binary Converter',
    description: SEO_CONFIG.binary.description,
    url: SEO_CONFIG.binary.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Binary Converter', url: SEO_CONFIG.binary.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.binary);

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
