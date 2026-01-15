import { generateToolOGImage, ogImageConfig } from '@/lib/og-utils';

export const runtime = ogImageConfig.runtime;
export const alt = 'Caesar Cipher Decoder - ROT13 & Caesar Cipher Tool Online';
export const size = ogImageConfig.size;
export const contentType = ogImageConfig.contentType;

export default async function Image() {
  return generateToolOGImage({
    title: 'Caesar Cipher Decoder',
    description: 'Encrypt or decrypt text with Caesar cipher and ROT13. Any shift value supported.',
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  });
}
