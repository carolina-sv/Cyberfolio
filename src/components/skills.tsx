import { Card, CardContent } from '@/components/ui/card';
import { Braces, Atom, GalleryHorizontal, Code, Rat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'JavaScript', icon: Braces },
  { name: 'React', icon: Atom },
  { name: '.Net', icon: GalleryHorizontal },
  { name: 'PHP', icon: Code },
  { name: 'Python', icon: Rat },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-glow md:text-4xl">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <Card key={skill.name} className="group border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:border-primary hover:box-glow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <skill.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
              <p className="mt-4 font-semibold">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
