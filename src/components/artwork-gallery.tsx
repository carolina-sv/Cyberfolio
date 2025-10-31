import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ArtworkGallery() {
  const artworks = PlaceHolderImages.filter(img => img.id.startsWith('artwork-'));

  return (
    <section id="gallery" className="space-y-8">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-glow md:text-4xl">
        Cyberpunk Gallery
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:border-primary hover:box-glow">
            <CardContent className="relative aspect-video p-0">
              <Image
                src={artwork.imageUrl}
                alt={artwork.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={artwork.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-sm text-foreground/80">{artwork.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
