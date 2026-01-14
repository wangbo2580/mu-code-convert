'use client';

import { useCallback, useState } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { Button } from '@/components/ui/button';
import { textToHex, hexToText, HexFormat, HexCase } from '@/lib/converters/hex';

const TABS = [
  { id: 'encode', label: 'Text to Hex' },
  { id: 'decode', label: 'Hex to Text' },
];

export default function HexConverterPage() {
  const [format, setFormat] = useState<HexFormat>('space');
  const [hexCase, setHexCase] = useState<HexCase>('lower');
  const [key, setKey] = useState(0); // Force re-render on option change

  const convert = useCallback((input: string, mode: string) => {
    return mode === 'encode'
      ? textToHex(input, format, hexCase)
      : hexToText(input);
  }, [format, hexCase]);

  const handleFormatChange = (newFormat: HexFormat) => {
    setFormat(newFormat);
    setKey(prev => prev + 1);
  };

  const handleCaseChange = (newCase: HexCase) => {
    setHexCase(newCase);
    setKey(prev => prev + 1);
  };

  return (
    <ConverterLayout
      key={key}
      title="Hex Converter"
      description="Convert text to hexadecimal and decode hex back to text."
      tabs={TABS}
      inputLabel="Input"
      inputPlaceholder="Enter text or hexadecimal..."
      outputLabel="Output"
      convert={convert}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <div className="flex gap-1">
            <Button
              variant={format === 'none' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFormatChange('none')}
            >
              No Space
            </Button>
            <Button
              variant={format === 'space' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFormatChange('space')}
            >
              Space
            </Button>
            <Button
              variant={format === 'prefix' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFormatChange('prefix')}
            >
              0x Prefix
            </Button>
          </div>
          <div className="flex gap-1">
            <Button
              variant={hexCase === 'lower' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCaseChange('lower')}
            >
              lowercase
            </Button>
            <Button
              variant={hexCase === 'upper' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCaseChange('upper')}
            >
              UPPERCASE
            </Button>
          </div>
        </div>
      }
    />
  );
}
