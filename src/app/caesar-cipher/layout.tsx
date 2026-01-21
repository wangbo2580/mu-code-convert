import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema, TOOL_FAQS, TOOL_HOWTO_STEPS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

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
  const toolSchema = generateToolSchema({
    name: 'Caesar Cipher',
    description: SEO_CONFIG.caesar.description,
    url: SEO_CONFIG.caesar.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Caesar Cipher', url: SEO_CONFIG.caesar.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.caesar);

  const howToSchema = generateHowToSchema({
    name: 'Caesar Cipher',
    description: 'Encrypt and decrypt text using the Caesar cipher with adjustable shift values.',
    steps: TOOL_HOWTO_STEPS.caesar,
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
