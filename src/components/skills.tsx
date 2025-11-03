import { Card, CardContent } from '@/components/ui/card';
import { Braces, Code, Layers } from 'lucide-react';
import React from 'react';

const skills: { name: string; icon: React.ElementType; url: string }[] = [
  { name: 'JavaScript', icon: Braces, url: 'https://github.com/carolina-sv/First-Original-Pixel-Game.git' },
  { name: 'TypeScript', icon: Braces, url: 'https://github.com/carolina-sv/Virtual-Console.git' },
  { name: 'Python', icon: Code, url: 'https://github.com/carolina-sv/Snake-Neon-Game.git' },
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
