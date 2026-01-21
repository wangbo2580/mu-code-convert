interface ContentSection {
  title: string;
  content: string | string[];
}

interface ToolContentProps {
  sections: ContentSection[];
}

export function ToolContent({ sections }: ToolContentProps) {
  return (
    <div className="mt-8 space-y-8">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="space-y-2 text-muted-foreground">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// Pre-defined content for each tool
export const TOOL_CONTENT = {
  morse: [
    {
      title: 'What is Morse Code?',
      content:
        'Morse code is a method of encoding text characters using sequences of dots (.) and dashes (-). Invented by Samuel Morse and Alfred Vail in the 1830s, it was originally used for telegraph communication. Each letter, number, and punctuation mark has a unique pattern. For example, "SOS" is represented as "... --- ..." - three dots, three dashes, three dots.',
    },
    {
      title: 'How to Use This Translator',
      content: [
        'Text to Morse: Type or paste your text in the input box. The translation appears instantly.',
        'Morse to Text: Enter Morse code using dots (.) and dashes (-). Separate letters with spaces and words with forward slashes (/) or three spaces.',
        'Audio Playback: Click the play button to hear your Morse code as audio beeps.',
        'Copy Result: Use the copy button to copy the output to your clipboard.',
      ],
    },
    {
      title: 'Common Uses for Morse Code',
      content: [
        'Emergency signaling (SOS) in survival situations',
        'Amateur radio (ham radio) communication',
        'Aviation and maritime communication',
        'Educational purposes and learning history',
        'Escape room puzzles and games',
        'Accessibility - some people with disabilities use Morse code to communicate',
      ],
    },
  ],
  base64: [
    {
      title: 'What is Base64 Encoding?',
      content:
        'Base64 is a binary-to-text encoding scheme that converts binary data into an ASCII string format using 64 printable characters (A-Z, a-z, 0-9, +, /). It is commonly used to encode binary data like images or files when you need to transmit them through text-based protocols like email or JSON APIs.',
    },
    {
      title: 'How to Use This Tool',
      content: [
        'Encode: Enter plain text to convert it to Base64 format. The output can be safely transmitted through text-based systems.',
        'Decode: Paste a Base64 string to convert it back to its original text form.',
        'Unicode Support: This tool fully supports Unicode characters including emojis and non-Latin scripts.',
        'Copy Result: Click the copy button to copy the encoded/decoded result.',
      ],
    },
    {
      title: 'Common Uses for Base64',
      content: [
        'Embedding images in HTML/CSS (data URIs)',
        'Sending binary data in JSON APIs',
        'Email attachments (MIME encoding)',
        'Storing complex data in URLs or cookies',
        'Basic obfuscation of text (not encryption)',
        'Authentication tokens and API keys',
      ],
    },
  ],
  binary: [
    {
      title: 'What is Binary Code?',
      content:
        'Binary code is the fundamental language of computers, representing data using only two digits: 0 and 1. Each digit is called a "bit," and 8 bits make up a "byte." Every character on your keyboard has a binary representation. For example, the letter "A" is represented as "01000001" in binary (ASCII value 65).',
    },
    {
      title: 'How to Use This Converter',
      content: [
        'Text to Binary: Type any text to see its binary representation. Each character is converted to 8 bits.',
        'Binary to Text: Enter binary code (groups of 8 bits separated by spaces) to decode it back to text.',
        'Instant Conversion: Results appear as you type - no need to click a button.',
        'Copy Result: Use the copy button to copy the binary or text output.',
      ],
    },
    {
      title: 'Common Uses for Binary',
      content: [
        'Learning how computers store and process data',
        'Understanding character encoding (ASCII, UTF-8)',
        'Low-level programming and debugging',
        'Digital electronics and hardware design',
        'Creating coded messages or puzzles',
        'Educational demonstrations in computer science',
      ],
    },
  ],
  hex: [
    {
      title: 'What is Hexadecimal?',
      content:
        'Hexadecimal (hex) is a base-16 number system that uses 16 symbols: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15). It is widely used in computing because it provides a human-friendly way to represent binary data - each hex digit represents exactly 4 binary bits. For example, the letter "A" is 41 in hex (65 in decimal).',
    },
    {
      title: 'How to Use This Converter',
      content: [
        'Text to Hex: Enter text to see its hexadecimal representation.',
        'Hex to Text: Paste hexadecimal values (with or without spaces/0x prefix) to decode.',
        'Format Options: Choose between no separator, space-separated, or 0x prefix format.',
        'Case Options: Toggle between lowercase (a-f) and uppercase (A-F) hex digits.',
      ],
    },
    {
      title: 'Common Uses for Hexadecimal',
      content: [
        'Color codes in web design (e.g., #FF5733)',
        'Memory addresses in programming and debugging',
        'MAC addresses for network devices',
        'Viewing and editing binary files',
        'Cryptographic hashes and checksums',
        'Unicode code points (U+0041 for "A")',
      ],
    },
  ],
  url: [
    {
      title: 'What is URL Encoding?',
      content:
        'URL encoding (also called percent-encoding) converts special characters into a format that can be safely transmitted in URLs. Characters like spaces, &, ?, and = have special meaning in URLs, so they must be encoded. For example, a space becomes "%20" and an ampersand becomes "%26". This ensures URLs work correctly across all browsers and servers.',
    },
    {
      title: 'How to Use This Tool',
      content: [
        'Encode: Enter text with special characters to convert them to URL-safe format.',
        'Decode: Paste a URL-encoded string to see the original text.',
        'Full URL Support: Works with complete URLs or just query string parameters.',
        'Instant Results: Encoding/decoding happens as you type.',
      ],
    },
    {
      title: 'Common Uses for URL Encoding',
      content: [
        'Building URLs with query parameters',
        'Encoding form data for HTTP requests',
        'Creating shareable links with special characters',
        'Debugging URL issues in web applications',
        'Working with REST APIs and web services',
        'Encoding filenames for download links',
      ],
    },
  ],
  caesar: [
    {
      title: 'What is Caesar Cipher?',
      content:
        'The Caesar cipher is one of the oldest and simplest encryption techniques, named after Julius Caesar who used it in his private correspondence. It works by shifting each letter in the alphabet by a fixed number of positions. For example, with a shift of 3, "A" becomes "D", "B" becomes "E", and so on. ROT13 is a popular variant that uses a shift of 13.',
    },
    {
      title: 'How to Use This Tool',
      content: [
        'Encrypt: Enter your message and set the shift value (1-25) to encrypt it.',
        'Decrypt: Enter the encrypted text and use the same shift value to reveal the original message.',
        'Adjust Shift: Use the slider to change the shift value. Common values are 3 (classic) and 13 (ROT13).',
        'ROT13 Button: Quickly apply ROT13 encryption, which is its own inverse.',
      ],
    },
    {
      title: 'Common Uses for Caesar Cipher',
      content: [
        'Learning about cryptography fundamentals',
        'Creating simple coded messages for fun',
        'Puzzle games and escape rooms',
        'ROT13 for hiding spoilers online',
        'Historical education about Roman encryption',
        'Introduction to substitution ciphers',
      ],
    },
  ],
  html: [
    {
      title: 'What are HTML Entities?',
      content:
        'HTML entities are special codes used to display reserved characters in HTML. Characters like <, >, &, and " have special meaning in HTML, so they must be encoded as &lt;, &gt;, &amp;, and &quot; respectively. This prevents browsers from misinterpreting these characters as HTML markup and also allows you to display special symbols.',
    },
    {
      title: 'How to Use This Tool',
      content: [
        'Encode: Enter text with special characters to convert them to HTML entities.',
        'Decode: Paste HTML-encoded text to see the original characters.',
        'Supports All Entities: Works with named entities (like &amp;) and numeric entities (like &#38;).',
        'Copy Result: Use the copy button to copy the result for use in your HTML.',
      ],
    },
    {
      title: 'Common Uses for HTML Entities',
      content: [
        'Displaying code snippets in web pages',
        'Preventing XSS (cross-site scripting) attacks',
        'Showing special symbols like ©, ®, ™',
        'Displaying mathematical symbols and arrows',
        'Encoding user input for safe display',
        'Working with non-breaking spaces (&nbsp;)',
      ],
    },
  ],
};
