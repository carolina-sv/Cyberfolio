"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateArtworkSuggestion } from '@/app/actions/generate-artwork-suggestion';
import type { GenerateAnimeArtworkOutput } from '@/ai/flows/generate-anime-artwork';
import { Wand2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function GenerativeArtwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateAnimeArtworkOutput | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);

    const response = await generateArtworkSuggestion();

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error,
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="ai-generator" className="space-y-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-glow md:text-4xl">
          AI Artwork Idea Generator
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Let AI craft a unique anime-style artwork concept that blends your skills with the Cyberpunk 2077 universe.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={handleGenerate} disabled={isLoading} size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground font-bold shadow-lg transition-all hover:shadow-primary/50 disabled:bg-muted disabled:shadow-none">
          <Wand2 className="mr-2 h-5 w-5" />
          {isLoading ? 'Generating...' : 'Generate Idea'}
        </Button>
      </div>

      {isLoading && (
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="border-primary/80 bg-card/90 backdrop-blur-sm box-glow animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="text-primary">AI-Generated Concept</CardTitle>
            <CardDescription>Your custom artwork suggestion:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90">{result.artworkSuggestion}</p>
            {result.imageUrl && (
                <p className="mt-4 text-sm text-muted-foreground">
                    Image idea: <a href={result.imageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{result.imageUrl}</a>
                </p>
            )}
          </CardContent>
        </Card>
      )}
    </section>
  );
}
