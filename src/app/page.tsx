import { Radio, FileCode, Binary, Hash, Link, Lock, Code, Zap, Shield, Sparkles } from 'lucide-react';
import { ToolCard } from '@/components/tools/ToolCard';
import { TOOLS, SITE_CONFIG } from '@/lib/constants';

// Map icon names to components
const iconMap: Record<string, typeof Radio> = {
  Radio,
  FileCode,
  Binary,
  Hash,
  Link,
  Lock,
  Code,
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blob gradient-blob-1 w-[500px] h-[500px] -top-48 -left-48 opacity-30" />
        <div className="gradient-blob gradient-blob-2 w-[400px] h-[400px] top-1/3 -right-32 opacity-20" />
        <div className="gradient-blob gradient-blob-1 w-[300px] h-[300px] bottom-32 left-1/4 opacity-20" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free & Open Source Tools
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">{SITE_CONFIG.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Free Online Encoding & Decoding Tools
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Convert text between Morse code, Base64, Binary, Hexadecimal, and more.
            Fast, easy, and no registration required.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TOOLS.map((tool) => {
            const IconComponent = iconMap[tool.icon] || Code;
            return (
              <ToolCard
                key={tool.id}
                title={tool.name}
                description={tool.description}
                href={tool.href}
                icon={IconComponent}
              />
            );
          })}
        </div>

        {/* Divider */}
        <div className="divider-gradient my-16 max-w-2xl mx-auto" />

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Why Use <span className="gradient-text">{SITE_CONFIG.name}</span>?
          </h2>
          <p className="text-muted-foreground mb-10">
            Built for developers, by developers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="feature-card p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Conversion</h3>
              <p className="text-muted-foreground text-sm">
                Results appear as you type. No need to click buttons.
              </p>
            </div>
            <div className="feature-card p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">100% Private</h3>
              <p className="text-muted-foreground text-sm">
                All conversions happen in your browser. No data sent to servers.
              </p>
            </div>
            <div className="feature-card p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Completely Free</h3>
              <p className="text-muted-foreground text-sm">
                No registration, no limits, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
