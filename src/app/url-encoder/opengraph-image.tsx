import { generateToolOGImage } from '@/lib/og-utils';

export const runtime = 'edge';
export const alt = 'URL Encoder/Decoder - Encode & Decode URLs Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateToolOGImage({
    title: 'URL Encoder/Decoder',
    description: 'Encode special characters for URLs or decode URL-encoded strings instantly.',
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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  });
}
