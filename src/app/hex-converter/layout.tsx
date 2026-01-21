import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema, TOOL_FAQS, TOOL_HOWTO_STEPS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: SEO_CONFIG.hex.title,
  description: SEO_CONFIG.hex.description,
  keywords: SEO_CONFIG.hex.keywords,
  alternates: {
    canonical: SEO_CONFIG.hex.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.hex.title,
    description: SEO_CONFIG.hex.description,
    url: SEO_CONFIG.hex.canonical,
    type: 'website',
  },
};

export default function HexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const toolSchema = generateToolSchema({
    name: 'Hex Converter',
    description: SEO_CONFIG.hex.description,
    url: SEO_CONFIG.hex.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Hex Converter', url: SEO_CONFIG.hex.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.hex);

  const howToSchema = generateHowToSchema({
    name: 'Hex Converter',
    description: 'Convert text to hexadecimal and decode hex back to ASCII text online.',
    steps: TOOL_HOWTO_STEPS.hex,
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
