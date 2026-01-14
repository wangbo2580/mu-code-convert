import { Radio, FileCode, Binary, Hash, Link, Lock, Code } from 'lucide-react';
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
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Free Online Encoding & Decoding Tools
        </p>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
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

      {/* Features Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Use {SITE_CONFIG.name}?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Instant Conversion</h3>
            <p className="text-muted-foreground text-sm">
              Results appear as you type. No need to click buttons.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">100% Private</h3>
            <p className="text-muted-foreground text-sm">
              All conversions happen in your browser. No data sent to servers.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🆓</div>
            <h3 className="font-semibold mb-2">Completely Free</h3>
            <p className="text-muted-foreground text-sm">
              No registration, no limits, no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
