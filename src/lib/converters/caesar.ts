// Caesar Cipher Encoder/Decoder

/**
 * Encrypt text with Caesar cipher
 * @param text - Plain text
 * @param shift - Shift amount (1-25)
 * @returns Encrypted text
 */
export function caesarEncrypt(text: string, shift: number): string {
  const normalizedShift = ((shift % 26) + 26) % 26;

  return text.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + normalizedShift) % 26) + 97);
    }
    if (/[A-Z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + normalizedShift) % 26) + 65);
    }
    return char; // Non-letter characters remain unchanged
  }).join('');
}

/**
 * Decrypt Caesar cipher text
 * @param text - Encrypted text
 * @param shift - Shift amount used for encryption
 * @returns Decrypted text
 */
export function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, -shift);
}

/**
 * ROT13 encoding/decoding (Caesar cipher with shift 13)
 * ROT13 is its own inverse
 * @param text - Input text
 * @returns ROT13 encoded/decoded text
 */
export function rot13(text: string): string {
  return caesarEncrypt(text, 13);
}

/**
 * Brute force Caesar cipher - try all 26 possible shifts
 * @param text - Encrypted text
 * @returns Array of all possible decryptions
 */
export function caesarBruteForce(text: string): Array<{ shift: number; result: string }> {
  return Array.from({ length: 26 }, (_, i) => ({
    shift: i,
    result: caesarDecrypt(text, i)
  }));
}
