import { generateToolOGImage } from '@/lib/og-utils';

export const runtime = 'edge';
export const alt = 'HTML Entities Encoder/Decoder - Encode HTML Characters Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateToolOGImage({
    title: 'HTML Entities Encoder',
    description: 'Convert special characters to HTML entities and vice versa. Escape HTML instantly.',
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  });
}
