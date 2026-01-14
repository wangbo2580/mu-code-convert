'use client';

import { useCallback, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CopyButton } from './CopyButton';
import { DEBOUNCE_DELAY } from '@/lib/constants';

interface Tab {
  id: string;
  label: string;
}

interface ConverterLayoutProps {
  title: string;
  description: string;
  tabs: Tab[];
  defaultTab?: string;
  inputLabel: string;
  inputPlaceholder: string;
  outputLabel: string;
  convert: (input: string, mode: string) => string;
  extraActions?: React.ReactNode;
  children?: React.ReactNode;
}

export function ConverterLayout({
  title,
  description,
  tabs,
  defaultTab,
  inputLabel,
  inputPlaceholder,
  outputLabel,
  convert,
  extraActions,
  children,
}: ConverterLayoutProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const performConversion = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setError('');
      return;
    }

    try {
      const result = convert(input, activeTab);
      setOutput(result);
      setError('');
    } catch (err) {
      setOutput('');
      setError(err instanceof Error ? err.message : 'Conversion failed');
    }
  }, [input, activeTab, convert]);

  // Debounced conversion
  useEffect(() => {
    const timer = setTimeout(performConversion, DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [performConversion]);

  // Clear on tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor="input">{inputLabel}</Label>
            <Textarea
              id="input"
              placeholder={inputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[120px] font-mono"
            />
          </div>

          {/* Output */}
          <div className="space-y-2">
            <Label htmlFor="output">{outputLabel}</Label>
            <Textarea
              id="output"
              value={error || output}
              readOnly
              className={`min-h-[120px] font-mono ${error ? 'text-destructive' : ''}`}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {extraActions}
            <CopyButton text={output} disabled={!output || !!error} />
          </div>
        </CardContent>
      </Card>

      {/* Extra content (like code charts) */}
      {children}
    </div>
  );
}
