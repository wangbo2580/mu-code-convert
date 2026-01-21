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

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    sameAs: [],
  };
}

export function generateHowToSchema(tool: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use ${tool.name}`,
    description: tool.description,
    step: tool.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
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

// Pre-defined HowTo steps for each tool
export const TOOL_HOWTO_STEPS = {
  morse: [
    { name: 'Enter Your Text', text: 'Type or paste the text you want to convert to Morse code in the input field.' },
    { name: 'View Instant Conversion', text: 'The Morse code translation appears instantly in the output field as you type.' },
    { name: 'Play Audio (Optional)', text: 'Click the play button to hear your message in Morse code audio with authentic beep sounds.' },
    { name: 'Copy Result', text: 'Click the copy button to copy the Morse code to your clipboard.' },
  ],
  base64: [
    { name: 'Select Mode', text: 'Choose "Encode" to convert text to Base64, or "Decode" to convert Base64 back to text.' },
    { name: 'Enter Your Data', text: 'Type or paste your text or Base64 string in the input field.' },
    { name: 'Get Instant Result', text: 'The converted result appears instantly in the output field.' },
    { name: 'Copy Result', text: 'Click the copy button to copy the result to your clipboard.' },
  ],
  binary: [
    { name: 'Select Conversion Direction', text: 'Choose "Text to Binary" or "Binary to Text" mode.' },
    { name: 'Enter Your Input', text: 'Type text to convert to binary, or paste binary code (0s and 1s) to decode.' },
    { name: 'View Result', text: 'See the instant conversion result in the output field.' },
    { name: 'Copy Result', text: 'Use the copy button to copy your binary code or decoded text.' },
  ],
  hex: [
    { name: 'Choose Conversion Mode', text: 'Select "Text to Hex" to encode, or "Hex to Text" to decode.' },
    { name: 'Enter Input', text: 'Type your text or paste hexadecimal values in the input field.' },
    { name: 'Get Conversion', text: 'The hexadecimal conversion appears instantly in the output.' },
    { name: 'Copy Output', text: 'Click copy to save the result to your clipboard.' },
  ],
  url: [
    { name: 'Select Encode or Decode', text: 'Choose "Encode" for URL-safe encoding or "Decode" to restore encoded URLs.' },
    { name: 'Paste Your URL or Text', text: 'Enter the URL or text you want to encode/decode.' },
    { name: 'View Encoded/Decoded Result', text: 'See the percent-encoded or decoded result instantly.' },
    { name: 'Copy Result', text: 'Copy the URL-safe string or decoded text to your clipboard.' },
  ],
  caesar: [
    { name: 'Set Shift Value', text: 'Choose the number of positions to shift letters (default is 13 for ROT13).' },
    { name: 'Enter Your Message', text: 'Type the text you want to encrypt or decrypt.' },
    { name: 'View Cipher Result', text: 'See the encrypted or decrypted message instantly.' },
    { name: 'Copy Encrypted Text', text: 'Copy the cipher text to share or store securely.' },
  ],
  html: [
    { name: 'Choose Encode or Decode', text: 'Select "Encode" to convert special characters to HTML entities, or "Decode" to reverse.' },
    { name: 'Enter HTML Content', text: 'Paste your HTML or text containing special characters.' },
    { name: 'Get Safe HTML', text: 'View the escaped HTML entities or decoded characters instantly.' },
    { name: 'Copy Result', text: 'Copy the safe HTML code for use in your web pages.' },
  ],
};

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
