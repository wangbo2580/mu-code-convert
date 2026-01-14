'use client';

import { useCallback } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { encodeBase64, decodeBase64 } from '@/lib/converters/base64';

const TABS = [
  { id: 'encode', label: 'Encode' },
  { id: 'decode', label: 'Decode' },
];

export default function Base64EncoderPage() {
  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encode' ? encodeBase64(input) : decodeBase64(input);
  }, []);

  return (
    <ConverterLayout
      title="Base64 Encoder/Decoder"
      description="Encode text to Base64 or decode Base64 strings. Supports Unicode characters."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text or Base64 string..."
      outputLabel="Output"
      convert={convert}
    />
  );
}
