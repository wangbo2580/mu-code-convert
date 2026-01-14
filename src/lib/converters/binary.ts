// Binary Converter

/**
 * Convert text to binary
 * @param text - Input text
 * @param separator - Separator between bytes, defaults to space
 * @returns Binary string
 */
export function textToBinary(text: string, separator: string = ' '): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(separator);
}

/**
 * Convert binary to text
 * @param binary - Binary string (can have spaces or other separators)
 * @returns Decoded text
 */
export function binaryToText(binary: string): string {
  // Remove all non-0/1 characters and split into 8-bit groups
  const cleaned = binary.replace(/[^01]/g, '');

  if (cleaned.length === 0) return '';

  if (cleaned.length % 8 !== 0) {
    throw new Error('Invalid binary string (length must be multiple of 8)');
  }

  const chars: string[] = [];
  for (let i = 0; i < cleaned.length; i += 8) {
    const byte = cleaned.substring(i, i + 8);
    chars.push(String.fromCharCode(parseInt(byte, 2)));
  }

  return chars.join('');
}

/**
 * Validate binary format
 * @param str - Input string
 * @returns True if valid binary
 */
export function isValidBinary(str: string): boolean {
  const cleaned = str.replace(/\s/g, '');
  if (cleaned.length === 0) return true;
  return /^[01]+$/.test(cleaned) && cleaned.length % 8 === 0;
}
