import { Card, CardContent } from '@/components/ui/card';
import { Braces, GalleryHorizontal, Code, Rat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skills: { name: string; icon: LucideIcon; url: string }[] = [
  { name: 'JavaScript', icon: Braces, url: 'https://github.com/carolina-sv/Countdown-2030' },
  { name: 'TypeScript', icon: Braces, url: 'https://github.com/carolina-sv/Micro-Metrics' },
  { name: '.Net', icon: GalleryHorizontal, url: 'https://github.com/carolina-sv/Parking-System-API' },
  { name: 'PHP', icon: Code, url: 'https://github.com/carolinavianadev/php-project' },
  { name: 'Python', icon: Rat, url: 'https://github.com/carolinavianadev/python-project' },
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
