// Structured Data (JSON-LD) for SEO

import { SITE_CONFIG } from './constants';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };
}

export function generateToolSchema(tool: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Pre-defined FAQs for each tool
export const TOOL_FAQS = {
  morse: [
    {
      question: 'What is Morse code?',
      answer: 'Morse code is a method of transmitting text as a series of dots and dashes (or dits and dahs). It was invented by Samuel Morse in the 1830s for use in telegraphy.',
    },
    {
      question: 'How do I convert text to Morse code?',
      answer: 'Simply type your text in the input field and our translator will instantly convert it to Morse code. Each letter is represented by a unique combination of dots (.) and dashes (-).',
    },
    {
      question: 'Can I hear Morse code audio?',
      answer: 'Yes! Our Morse code translator includes an audio player that lets you hear your Morse code message with authentic beep sounds.',
    },
  ],
  base64: [
    {
      question: 'What is Base64 encoding?',
      answer: 'Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It is commonly used for encoding data in email attachments and web applications.',
    },
    {
      question: 'Why use Base64 encoding?',
      answer: 'Base64 encoding is used to safely transmit binary data over text-based protocols, embed images in HTML/CSS, and encode data for URLs and APIs.',
    },
    {
      question: 'Is Base64 encryption?',
      answer: 'No, Base64 is encoding, not encryption. It transforms data into a different format but does not provide security. Anyone can decode Base64 encoded data.',
    },
  ],
  binary: [
    {
      question: 'What is binary code?',
      answer: 'Binary code is a system of representing data using only two symbols: 0 and 1. It is the fundamental language of computers and digital systems.',
    },
    {
      question: 'How do I convert text to binary?',
      answer: 'Each character is converted to its ASCII code, then to its binary representation. For example, "A" becomes "01000001" in 8-bit binary.',
    },
  ],
  hex: [
    {
      question: 'What is hexadecimal?',
      answer: 'Hexadecimal (hex) is a base-16 number system using digits 0-9 and letters A-F. It is commonly used in programming to represent binary data in a more readable format.',
    },
    {
      question: 'How do I convert text to hex?',
      answer: 'Each character is converted to its ASCII code, then to its hexadecimal representation. For example, "A" becomes "41" in hex.',
    },
  ],
  url: [
    {
      question: 'What is URL encoding?',
      answer: 'URL encoding (percent encoding) converts special characters into a format that can be safely transmitted in URLs. Special characters are replaced with % followed by their hex value.',
    },
    {
      question: 'Why do I need to encode URLs?',
      answer: 'URLs can only contain certain characters. Special characters like spaces, &, =, and non-ASCII characters must be encoded to be safely included in URLs.',
    },
  ],
  caesar: [
    {
      question: 'What is the Caesar cipher?',
      answer: 'The Caesar cipher is a substitution cipher where each letter is shifted by a fixed number of positions in the alphabet. It was used by Julius Caesar for secret communication.',
    },
    {
      question: 'What is ROT13?',
      answer: 'ROT13 is a special case of the Caesar cipher with a shift of 13 positions. Applying ROT13 twice returns the original text, making it convenient for hiding spoilers or puzzle answers.',
    },
  ],
  html: [
    {
      question: 'What are HTML entities?',
      answer: 'HTML entities are special codes used to display reserved characters in HTML. For example, &lt; represents < and &amp; represents &.',
    },
    {
      question: 'Why encode HTML characters?',
      answer: 'Encoding HTML characters prevents code injection attacks (XSS) and ensures special characters display correctly on web pages instead of being interpreted as HTML code.',
    },
  ],
};
