// Base64 Encoder/Decoder with Unicode support

/**
 * Encode text to Base64 (supports Unicode)
 * @param text - Input text
 * @returns Base64 encoded string
 */
export function encodeBase64(text: string): string {
  try {
    // Handle Unicode characters
    const utf8Bytes = new TextEncoder().encode(text);
    const binaryString = Array.from(utf8Bytes)
      .map(byte => String.fromCharCode(byte))
      .join('');
    return btoa(binaryString);
  } catch (error) {
    throw new Error('Encoding failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

/**
 * Decode Base64 to text (supports Unicode)
 * @param base64 - Base64 encoded string
 * @returns Decoded text
 */
export function decodeBase64(base64: string): string {
  try {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  } catch (error) {
    throw new Error('Invalid Base64 string');
  }
}

/**
 * Validate Base64 format
 * @param str - Input string
 * @returns True if valid Base64
 */
export function isValidBase64(str: string): boolean {
  if (str.length === 0) return true;

  // Remove whitespace
  const cleaned = str.replace(/\s/g, '');

  // Check for valid Base64 characters and proper padding
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(cleaned) && cleaned.length % 4 === 0;
}
