import { generateToolOGImage } from '@/lib/og-utils';

export const runtime = 'edge';
export const alt = 'Hex Converter - Text to Hex & Hex to Text Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateToolOGImage({
    title: 'Hex Converter',
    description: 'Convert text to hexadecimal and hex to text instantly. Multiple format options.',
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
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </svg>
    ),
  });
}
