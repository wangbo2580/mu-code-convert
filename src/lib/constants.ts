// Constants for CodeConvert

import type { Tool } from '@/types';

export const TOOLS: Tool[] = [
  {
    id: 'morse',
    name: 'Morse Code Translator',
    description: 'Convert text to Morse code and back',
    href: '/morse-code-translator',
    icon: 'Radio',
  },
  {
    id: 'base64',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings',
    href: '/base64-encoder',
    icon: 'FileCode',
  },
  {
    id: 'binary',
    name: 'Binary Converter',
    description: 'Convert text to binary and back',
    href: '/binary-converter',
    icon: 'Binary',
  },
  {
    id: 'hex',
    name: 'Hex Converter',
    description: 'Convert text to hexadecimal',
    href: '/hex-converter',
    icon: 'Hash',
  },
  {
    id: 'url',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs',
    href: '/url-encoder',
    icon: 'Link',
  },
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    description: 'Encrypt with Caesar cipher / ROT13',
    href: '/caesar-cipher',
    icon: 'Lock',
  },
  {
    id: 'html',
    name: 'HTML Entities',
    description: 'Encode HTML special characters',
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
