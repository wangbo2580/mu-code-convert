'use client';

import { useCallback } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { encodeHTMLEntities, decodeHTMLEntities } from '@/lib/converters/html';

const TABS = [
  { id: 'encode', label: 'Encode' },
  { id: 'decode', label: 'Decode' },
];

export default function HTMLEntitiesPage() {
  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encode'
      ? encodeHTMLEntities(input)
      : decodeHTMLEntities(input);
  }, []);

  return (
    <ConverterLayout
      title="HTML Entity Encoder/Decoder"
      description="Convert special characters to HTML entities and decode HTML entities back to characters."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text or HTML entities..."
      outputLabel="Output"
      convert={convert}
    />
  );
}
