import Link from 'next/link';
import { ArrowRight, Radio, FileCode, Binary, Hash, Link as LinkIcon, Lock, Code, LucideIcon } from 'lucide-react';
import { TOOLS } from '@/lib/constants';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Radio,
  FileCode,
  Binary,
  Hash,
  Link: LinkIcon,
  Lock,
  Code,
};

// Define related tools for each tool (by tool ID)
const RELATED_TOOLS_MAP: Record<string, string[]> = {
  morse: ['caesar', 'binary', 'base64'],
  base64: ['url', 'binary', 'hex'],
  binary: ['hex', 'base64', 'morse'],
  hex: ['binary', 'base64', 'url'],
  url: ['base64', 'html', 'hex'],
  caesar: ['morse', 'base64', 'binary'],
  html: ['url', 'base64', 'hex'],
};

interface RelatedToolsProps {
  currentToolId: string;
}

export function RelatedTools({ currentToolId }: RelatedToolsProps) {
  const relatedIds = RELATED_TOOLS_MAP[currentToolId] || [];
  const relatedTools = relatedIds
    .map(id => TOOLS.find(tool => tool.id === id))
    .filter(Boolean);

  if (relatedTools.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTools.map((tool) => {
            if (!tool) return null;
            const IconComponent = iconMap[tool.icon] || Code;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="group flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
