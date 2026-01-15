import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, TOOL_FAQS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

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
  const toolSchema = generateToolSchema({
    name: 'HTML Entity Encoder/Decoder',
    description: SEO_CONFIG.html.description,
    url: SEO_CONFIG.html.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'HTML Entities', url: SEO_CONFIG.html.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.html);

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
