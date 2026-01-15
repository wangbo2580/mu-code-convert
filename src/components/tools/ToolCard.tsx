import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ToolCard({ title, description, href, icon: Icon }: ToolCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="animated-border h-full">
        <div className="relative h-full p-6 bg-card rounded-[var(--radius-lg)] border border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>

          {/* Arrow indicator */}
          <div className="flex items-center text-sm text-primary opacity-0 transform translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <span className="mr-2">Try it now</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
