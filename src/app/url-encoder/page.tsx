'use client';

import { useCallback } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { encodeURL, decodeURL } from '@/lib/converters/url';

const TABS = [
  { id: 'encode', label: 'Encode' },
  { id: 'decode', label: 'Decode' },
];

export default function URLEncoderPage() {
  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encode' ? encodeURL(input) : decodeURL(input);
  }, []);

  return (
    <ConverterLayout
      title="URL Encoder/Decoder"
      description="Encode special characters for URLs or decode URL-encoded strings."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text or URL-encoded string..."
      outputLabel="Output"
      convert={convert}
    />
  );
}
