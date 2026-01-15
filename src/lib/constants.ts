// Constants for CodeConvert

import type { Tool } from '@/types';

export const TOOLS: Tool[] = [
  {
    id: 'morse',
    name: 'Morse Code Translator',
    description: 'Free online Morse code translator with audio playback',
    href: '/morse-code-translator',
    icon: 'Radio',
  },
  {
    id: 'base64',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings online instantly',
    href: '/base64-encoder',
    icon: 'FileCode',
  },
  {
    id: 'binary',
    name: 'Binary Converter',
    description: 'Convert text to binary code and back online free',
    href: '/binary-converter',
    icon: 'Binary',
  },
  {
    id: 'hex',
    name: 'Hex Converter',
    description: 'Convert text to hexadecimal and ASCII online',
    href: '/hex-converter',
    icon: 'Hash',
  },
  {
    id: 'url',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs with percent encoding',
    href: '/url-encoder',
    icon: 'Link',
  },
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    description: 'Encrypt and decrypt with Caesar cipher and ROT13',
    href: '/caesar-cipher',
    icon: 'Lock',
  },
  {
    id: 'html',
    name: 'HTML Entities',
    description: 'Encode and decode HTML special characters online',
    href: '/html-entities',
    icon: 'Code',
  },
];

export const SITE_CONFIG = {
  name: 'CodeConvert',
  description: 'Free online tools to convert text between Morse code, Base64, Binary, Hexadecimal, URL encoding, and more.',
  url: 'https://codeconvert.com',
};

export const DEBOUNCE_DELAY = 300; // ms
