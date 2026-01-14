'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TOOLS, SITE_CONFIG } from '@/lib/constants';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {(showBackButton || !isHomePage) && (
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to home</span>
              </Button>
            </Link>
          )}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {TOOLS.slice(0, 4).map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === tool.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
              }`}
            >
              {tool.name.split(' ')[0]}
            </Link>
          ))}
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            All Tools
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent ${
                  pathname === tool.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {tool.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
