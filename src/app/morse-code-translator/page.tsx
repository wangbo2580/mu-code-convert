'use client';

import { useCallback, useState } from 'react';
import { ConverterLayout } from '@/components/converter/ConverterLayout';
import { MorsePlayer } from '@/components/morse/MorsePlayer';
import { MorseChart } from '@/components/morse/MorseChart';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { ToolContent, TOOL_CONTENT } from '@/components/tools/ToolContent';
import { textToMorse, morseToText } from '@/lib/converters/morse';

const TABS = [
  { id: 'encode', label: 'Text to Morse' },
  { id: 'decode', label: 'Morse to Text' },
];

export default function MorseCodeTranslatorPage() {
  const [morseOutput, setMorseOutput] = useState('');

  const convert = useCallback((input: string, mode: string) => {
    const result = mode === 'encode' ? textToMorse(input) : morseToText(input);
    if (mode === 'encode') {
      setMorseOutput(result);
    } else {
      setMorseOutput('');
    }
    return result;
  }, []);

  return (
    <>
      <ConverterLayout
        title="Morse Code Translator"
        description="Convert text to Morse code and decode Morse code to text. Play the Morse code audio."
        tabs={TABS}
        inputLabel="Input"
        inputPlaceholder="Enter text or Morse code..."
        outputLabel="Output"
        convert={convert}
        extraActions={<MorsePlayer morseCode={morseOutput} disabled={!morseOutput} />}
      >
        <MorseChart />
        <ToolContent sections={TOOL_CONTENT.morse} />
        <RelatedTools currentToolId="morse" />
      </ConverterLayout>
    </>
  );
}
