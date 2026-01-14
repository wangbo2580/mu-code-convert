// Morse Code Converter
// International Morse Code standard

const MORSE_CODE_MAP: Record<string, string> = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
  'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
  '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
  '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
  '$': '...-..-', '@': '.--.-.', ' ': '/'
};

// Reverse mapping for decoding
const REVERSE_MORSE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE_CODE_MAP).map(([k, v]) => [v, k])
);

/**
 * Convert text to Morse code
 * @param text - Input text
 * @returns Morse code string
 */
export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE_MAP[char] || char)
    .join(' ')
    .replace(/ \/ /g, ' / '); // Clean up word spacing
}

/**
 * Convert Morse code to text
 * @param morse - Morse code string
 * @returns Decoded text
 */
export function morseToText(morse: string): string {
  return morse
    .split(' ')
    .map(code => {
      if (code === '/' || code === '') return ' ';
      return REVERSE_MORSE_MAP[code] || code;
    })
    .join('')
    .replace(/  +/g, ' ')
    .trim();
}

/**
 * Get Morse code chart for display
 * @returns Array of character-morse pairs
 */
export function getMorseCodeChart(): Array<{ char: string; morse: string }> {
  return Object.entries(MORSE_CODE_MAP)
    .filter(([char]) => char !== ' ')
    .map(([char, morse]) => ({ char, morse }));
}

/**
 * Validate if string is valid Morse code
 * @param morse - Input string
 * @returns True if valid Morse code
 */
export function isValidMorse(morse: string): boolean {
  const validChars = /^[.\-\/ ]*$/;
  return validChars.test(morse);
}
