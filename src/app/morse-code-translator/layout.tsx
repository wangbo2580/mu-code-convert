import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import { generateToolSchema, generateBreadcrumbSchema, generateFAQSchema, TOOL_FAQS } from '@/lib/structuredData';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: SEO_CONFIG.morse.title,
  description: SEO_CONFIG.morse.description,
  keywords: SEO_CONFIG.morse.keywords,
  alternates: {
    canonical: SEO_CONFIG.morse.canonical,
  },
  openGraph: {
    title: SEO_CONFIG.morse.title,
    description: SEO_CONFIG.morse.description,
    url: SEO_CONFIG.morse.canonical,
    type: 'website',
  },
};

export default function MorseCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const toolSchema = generateToolSchema({
    name: 'Morse Code Translator',
    description: SEO_CONFIG.morse.description,
    url: SEO_CONFIG.morse.canonical,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Morse Code Translator', url: SEO_CONFIG.morse.canonical },
  ]);

  const faqSchema = generateFAQSchema(TOOL_FAQS.morse);

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
