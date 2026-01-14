// URL Encoder/Decoder

/**
 * Encode URL (encodeURIComponent)
 * @param text - Input text
 * @returns URL encoded string
 */
export function encodeURL(text: string): string {
  return encodeURIComponent(text);
}

/**
 * Decode URL (decodeURIComponent)
 * @param encoded - URL encoded string
 * @returns Decoded text
 */
export function decodeURL(encoded: string): string {
  try {
    return decodeURIComponent(encoded);
  } catch (error) {
    throw new Error('Invalid URL encoded string');
  }
}

/**
 * Check if string contains URL encoded characters
 * @param str - Input string
 * @returns True if contains encoded characters
 */
export function hasEncodedChars(str: string): boolean {
  return /%[0-9A-Fa-f]{2}/.test(str);
}
