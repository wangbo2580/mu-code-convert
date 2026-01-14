// Hexadecimal Converter

export type HexFormat = 'none' | 'space' | 'prefix';
export type HexCase = 'lower' | 'upper';

/**
 * Convert text to hexadecimal
 * @param text - Input text
 * @param format - Output format
 * @param hexCase - Case of hex letters
 * @returns Hexadecimal string
 */
export function textToHex(
  text: string,
  format: HexFormat = 'space',
  hexCase: HexCase = 'lower'
): string {
  const hexArray = text.split('').map(char => {
    const hex = char.charCodeAt(0).toString(16).padStart(2, '0');
    return hexCase === 'upper' ? hex.toUpperCase() : hex;
  });

  switch (format) {
    case 'none':
      return hexArray.join('');
    case 'space':
      return hexArray.join(' ');
    case 'prefix':
      return hexArray.map(h => '0x' + h).join(' ');
    default:
      return hexArray.join(' ');
  }
}

/**
 * Convert hexadecimal to text
 * @param hex - Hexadecimal string
 * @returns Decoded text
 */
export function hexToText(hex: string): string {
  // Remove 0x prefixes and whitespace
  const cleaned = hex.replace(/0x/gi, '').replace(/\s/g, '');

  if (cleaned.length === 0) return '';

  if (!/^[0-9A-Fa-f]*$/.test(cleaned)) {
    throw new Error('Invalid hexadecimal string');
  }

  if (cleaned.length % 2 !== 0) {
    throw new Error('Invalid hexadecimal string (odd length)');
  }

  const chars: string[] = [];
  for (let i = 0; i < cleaned.length; i += 2) {
    const byte = cleaned.substring(i, i + 2);
    chars.push(String.fromCharCode(parseInt(byte, 16)));
  }

  return chars.join('');
}

/**
 * Validate hexadecimal format
 * @param str - Input string
 * @returns True if valid hex
 */
export function isValidHex(str: string): boolean {
  const cleaned = str.replace(/0x/gi, '').replace(/\s/g, '');
  if (cleaned.length === 0) return true;
  return /^[0-9A-Fa-f]+$/.test(cleaned) && cleaned.length % 2 === 0;
}
