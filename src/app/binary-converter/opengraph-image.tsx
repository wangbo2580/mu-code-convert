import { generateToolOGImage, ogImageConfig } from '@/lib/og-utils';

export const runtime = ogImageConfig.runtime;
export const alt = 'Binary Converter - Text to Binary & Binary to Text Online';
export const size = ogImageConfig.size;
export const contentType = ogImageConfig.contentType;

export default async function Image() {
  return generateToolOGImage({
    title: 'Binary Converter',
    description: 'Convert text to binary code and binary to text instantly. ASCII to binary conversion.',
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="14" y="14" width="4" height="6" rx="2" />
        <rect x="6" y="4" width="4" height="6" rx="2" />
        <path d="M6 20h4" />
        <path d="M14 10h4" />
        <path d="M6 14h2v6" />
        <path d="M14 4h2v6" />
      </svg>
    ),
  });
}
