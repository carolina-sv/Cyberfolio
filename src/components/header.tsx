import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="relative">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-glow sm:text-6xl md:text-7xl">
          Carolina Viana
        </h1>
        <div className="absolute -inset-1.5 -z-10 animate-pulse bg-primary/30 blur-xl"></div>
      </div>
      <p className="max-w-md text-lg text-muted-foreground">
        A creative developer blending code with cyberpunk aesthetics.
      </p>
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-transparent transition-colors">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-transparent transition-colors">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </header>
  );
}
