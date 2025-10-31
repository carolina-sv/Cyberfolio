import Image from 'next/image';

export function HolopinBadge() {
  return (
    <section id="holopin" className="space-y-8 flex flex-col items-center">
      <a href="https://holopin.io/@carolinasv" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://holopin.io/api/user/board?user=carolinasv"
          alt="Holopin board"
          width={800}
          height={400}
          className="w-full h-auto border-2 border-border bg-card/80 backdrop-blur-sm transition-all hover:border-primary hover:box-glow"
          unoptimized
        />
      </a>
    </section>
  );
}
