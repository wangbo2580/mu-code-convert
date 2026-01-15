import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blob gradient-blob-1 w-[400px] h-[400px] top-1/4 left-1/4 opacity-20" />
        <div className="gradient-blob gradient-blob-2 w-[300px] h-[300px] bottom-1/4 right-1/4 opacity-15" />
      </div>
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-24 text-center flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <h1 className="text-8xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
