'use client';

import { useCallback } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { textToBinary, binaryToText } from '@/lib/converters/binary';

const TABS = [
  { id: 'encode', label: 'Text to Binary' },
  { id: 'decode', label: 'Binary to Text' },
];

export default function BinaryConverterPage() {
  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encode' ? textToBinary(input) : binaryToText(input);
  }, []);

  return (
    <ConverterLayout
      title="Binary Converter"
      description="Convert text to binary code and decode binary back to text."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text or binary code..."
      outputLabel="Output"
      convert={convert}
    />
  );
}
