'use client';

import { useCallback, useState } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { ToolContent, TOOL_CONTENT } from '@/components/tools/ToolContent';
import { caesarEncrypt, caesarDecrypt, rot13 } from '@/lib/converters/caesar';

const TABS = [
  { id: 'encrypt', label: 'Encrypt' },
  { id: 'decrypt', label: 'Decrypt' },
];

export default function CaesarCipherPage() {
  const [shift, setShift] = useState(3);
  const [key, setKey] = useState(0);

  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encrypt'
      ? caesarEncrypt(input, shift)
      : caesarDecrypt(input, shift);
  }, [shift]);

  const handleShiftChange = (value: number[]) => {
    setShift(value[0]);
    setKey(prev => prev + 1);
  };

  const handleRot13 = () => {
    setShift(13);
    setKey(prev => prev + 1);
  };

  return (
    <ConverterLayout
      key={key}
      title="Caesar Cipher"
      description="Encrypt or decrypt text using the Caesar cipher with customizable shift."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text to encrypt or decrypt..."
      outputLabel="Output"
      convert={convert}
      extraActions={
        <div className="flex items-center gap-4 flex-wrap w-full">
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <Label className="whitespace-nowrap">Shift: {shift}</Label>
            <Slider
              value={[shift]}
              onValueChange={handleShiftChange}
              min={1}
              max={25}
              step={1}
              className="flex-1"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRot13}
          >
            ROT13
          </Button>
        </div>
      }
    >
      <ToolContent sections={TOOL_CONTENT.caesar} />
      <RelatedTools currentToolId="caesar" />
    </ConverterLayout>
  );
}
