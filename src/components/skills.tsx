import { Card, CardContent } from '@/components/ui/card';
import { Braces, Layers } from 'lucide-react';
import React from 'react';

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.25 12.125a2.125 2.125 0 1 0-4.25 0 2.125 2.125 0 0 0 4.25 0z" fill="hsl(var(--primary))" />
    <path d="M13.75 11.875a2.125 2.125 0 1 1 4.25 0 2.125 2.125 0 0 1-4.25 0z" fill="hsl(var(--secondary))" />
    <path d="M6 12v4.25c0 2.07 1.68 3.75 3.75 3.75h1.5c2.07 0 3.75-1.68 3.75-3.75v-1.5c0-2.07-1.68-3.75-3.75-3.75h-1.5C7.68 8 6 9.68 6 11.75V12z" stroke="hsl(var(--secondary))" />
    <path d="M18 12v-4.25c0-2.07-1.68-3.75-3.75-3.75h-1.5c-2.07 0-3.75 1.68-3.75 3.75v1.5c0 2.07 1.68 3.75 3.75 3.75h1.5c2.07 0 3.75-1.68 3.75-3.75V12z" stroke="hsl(var(--primary))" />
  </svg>
);


const skills: { name: string; icon: React.ElementType; url: string }[] = [
  { name: 'JavaScript', icon: Braces, url: 'https://github.com/carolina-sv/First-Original-Pixel-Game.git' },
  { name: 'TypeScript', icon: Braces, url: 'https://github.com/carolina-sv/Virtual-Console.git' },
  { name: 'Python', icon: PythonIcon, url: 'https://github.com/carolina-sv/Snake-Neon-Game.git' },
  { name: '.NET', icon: Layers, url: 'https://github.com/carolina-sv/Parking-System-API.git' },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-glow md:text-4xl">
        Projects:
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center">
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