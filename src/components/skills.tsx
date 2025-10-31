import { Card, CardContent } from '@/components/ui/card';
import { Braces, GalleryHorizontal, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 10a2 2 0 10-4 0 2 2 0 004 0z" />
    <path d="M18 10a2 2 0 10-4 0 2 2 0 004 0z" />
    <path d="M5.5 14h.5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 012 16.5v0A2.5 2.5 0 014.5 14h1z" />
    <path d="M15.5 14h.5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 0112 16.5v0a2.5 2.5 0 012.5-2.5h1z" />
  </svg>
);

const skills: { name: string; icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; url: string }[] = [
  { name: 'JavaScript', icon: Braces, url: 'https://github.com/carolina-sv/Countdown-2030' },
  { name: 'TypeScript', icon: Braces, url: 'https://github.com/carolina-sv/Micro-Metrics' },
  { name: '.Net', icon: GalleryHorizontal, url: 'https://github.com/carolina-sv/Parking-System-API' },
  { name: 'PHP', icon: Code, url: 'https://github.com/carolina-sv/CI-CRUD.git' },
  { name: 'Python', icon: PythonIcon, url: 'https://github.com/carolina-sv/Snake-Neon-Game.git' },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-glow md:text-4xl">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
            <Card className="group h-full border-2 border-border bg-card/80 backdrop-blur-sm transition-all hover:border-primary hover:box-glow">
              <CardContent className="flex h-full flex-col items-center justify-center p-6">
                <skill.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <p className="mt-4 font-semibold text-center">{skill.name}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
