import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="relative">
        <h1 className="font-headline text-4xl tracking-tighter text-glow sm:text-5xl md:text-6xl">
          Carolina Viana
        </h1>
      </div>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        A creative developer blending code with pixel art aesthetics.
      </p>
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-transparent transition-colors">
          <a href="https://github.com/carolina-sv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-7 w-7" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-transparent transition-colors">
          <a href="https://www.linkedin.com/in/carolina-viana-847305218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7" />
          </a>
        </Button>
      </div>
    </header>
  );
}
