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
    <path d="M10.5 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
    <path d="M16.5 15.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
    <path d="M5 18s2-3 5-3 6 3 6 3" />
    <path d="M19 8s-2 3-5 3-6-3-6-3" />
    <path d="M14 22v-3.5a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 8 18.5V22" />
    <path d="M15 2h.5a2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 15.5 8H14" />
    <path d="M9 2h-.5A2.5 2.5 0 0 0 6 4.5v1A2.5 2.5 0 0 0 8.5 8H10" />
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
        Projetos nas linguagens:
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
