'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMorseCodeChart } from '@/lib/converters/morse';

export function MorseChart() {
  const [expanded, setExpanded] = useState(false);
  const chart = getMorseCodeChart();

  // Separate letters and numbers
  const letters = chart.filter(item => /[A-Z]/.test(item.char));
  const numbers = chart.filter(item => /[0-9]/.test(item.char));
  const punctuation = chart.filter(item => !/[A-Z0-9]/.test(item.char));

  return (
    <Card className="mt-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Morse Code Chart</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="gap-1"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent>
          {/* Letters */}
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Letters</h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
              {letters.map(({ char, morse }) => (
                <div
                  key={char}
                  className="flex flex-col items-center p-2 rounded-md bg-muted/50 text-center"
                >
                  <span className="font-bold">{char}</span>
                  <span className="text-xs font-mono text-muted-foreground">{morse}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Numbers</h4>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {numbers.map(({ char, morse }) => (
                <div
                  key={char}
                  className="flex flex-col items-center p-2 rounded-md bg-muted/50 text-center"
                >
                  <span className="font-bold">{char}</span>
                  <span className="text-xs font-mono text-muted-foreground">{morse}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Punctuation */}
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Punctuation</h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {punctuation.map(({ char, morse }) => (
                <div
                  key={char}
                  className="flex flex-col items-center p-2 rounded-md bg-muted/50 text-center"
                >
                  <span className="font-bold">{char}</span>
                  <span className="text-xs font-mono text-muted-foreground">{morse}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
