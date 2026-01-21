import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema, TOOL_FAQS, TOOL_HOWTO_STEPS } from '@/lib/structuredData';
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

  const howToSchema = generateHowToSchema({
    name: 'HTML Entity Encoder/Decoder',
    description: 'Convert special characters to HTML entities or decode HTML entities back to text.',
    steps: TOOL_HOWTO_STEPS.html,
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      {children}
    </>
  );
}
