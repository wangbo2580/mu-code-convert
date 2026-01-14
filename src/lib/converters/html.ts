// HTML Entity Encoder/Decoder

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;',
  '=': '&#61;',
  '/': '&#47;',
};

const REVERSE_HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&#96;': '`',
  '&#61;': '=',
  '&#47;': '/',
  '&nbsp;': ' ',
};

/**
 * Encode special characters to HTML entities
 * @param text - Input text
 * @returns HTML encoded text
 */
export function encodeHTMLEntities(text: string): string {
  return text.replace(/[&<>"'`=\/]/g, char => HTML_ENTITIES[char] || char);
}

/**
 * Decode HTML entities to characters
 * @param text - HTML encoded text
 * @returns Decoded text
 */
export function decodeHTMLEntities(text: string): string {
  let result = text;

  // Handle named entities
  Object.entries(REVERSE_HTML_ENTITIES).forEach(([entity, char]) => {
    result = result.split(entity).join(char);
  });

  // Handle decimal numeric entities (&#数字;)
  result = result.replace(/&#(\d+);/g, (_, code) =>
    String.fromCharCode(parseInt(code, 10))
  );

  // Handle hexadecimal numeric entities (&#x十六进制;)
  result = result.replace(/&#x([0-9A-Fa-f]+);/g, (_, code) =>
    String.fromCharCode(parseInt(code, 16))
  );

  return result;
}

/**
 * Get list of common HTML entities for reference
 * @returns Array of entity information
 */
export function getHTMLEntityChart(): Array<{ char: string; entity: string; description: string }> {
  return [
    { char: '&', entity: '&amp;', description: 'Ampersand' },
    { char: '<', entity: '&lt;', description: 'Less than' },
    { char: '>', entity: '&gt;', description: 'Greater than' },
    { char: '"', entity: '&quot;', description: 'Double quote' },
    { char: "'", entity: '&#39;', description: 'Single quote' },
    { char: ' ', entity: '&nbsp;', description: 'Non-breaking space' },
    { char: '©', entity: '&copy;', description: 'Copyright' },
    { char: '®', entity: '&reg;', description: 'Registered' },
    { char: '™', entity: '&trade;', description: 'Trademark' },
  ];
}
