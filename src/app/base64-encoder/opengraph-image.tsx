import { generateToolOGImage } from '@/lib/og-utils';

export const runtime = 'edge';
export const alt = 'Base64 Encoder/Decoder - Encode & Decode Base64 Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateToolOGImage({
    title: 'Base64 Encoder/Decoder',
    description: 'Encode text to Base64 or decode Base64 strings instantly. Supports Unicode.',
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
        <path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2" />
        <path d="M13 13l-2 2 2 2" />
        <path d="M19 13l2 2-2 2" />
      </svg>
    ),
  });
}
