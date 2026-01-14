// Type definitions for CodeConvert

export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: string;
}

export interface ConversionResult {
  success: boolean;
  result: string;
  error?: string;
}

export type ConversionMode = 'encode' | 'decode';

export interface TabOption {
  id: string;
  label: string;
}
