'use server';

/**
 * @fileOverview Flow to generate anime-style artwork suggestions based on user profile content and the Cyberpunk 2077 theme.
 *
 * - generateAnimeArtwork - A function that generates anime-style artwork suggestions.
 * - GenerateAnimeArtworkInput - The input type for the generateAnimeArtwork function.
 * - GenerateAnimeArtworkOutput - The return type for the generateAnimeArtwork function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAnimeArtworkInputSchema = z.object({
  profileDescription: z
    .string()
    .describe('A description of the user profile content, including skills and interests.'),
  themeDescription: z
    .string()
    .describe('A description of the desired theme, such as Cyberpunk 2077.'),
});
export type GenerateAnimeArtworkInput = z.infer<typeof GenerateAnimeArtworkInputSchema>;

const GenerateAnimeArtworkOutputSchema = z.object({
  artworkSuggestion: z
    .string()
    .describe('A suggestion for anime-style artwork that fits the profile and theme.'),
  imageUrl: z.string().optional().describe('URL of the generated image, if available.'),
});
export type GenerateAnimeArtworkOutput = z.infer<typeof GenerateAnimeArtworkOutputSchema>;

export async function generateAnimeArtwork(input: GenerateAnimeArtworkInput): Promise<GenerateAnimeArtworkOutput> {
  return generateAnimeArtworkFlow(input);
}

const generateAnimeArtworkPrompt = ai.definePrompt({
  name: 'generateAnimeArtworkPrompt',
  input: {schema: GenerateAnimeArtworkInputSchema},
  output: {schema: GenerateAnimeArtworkOutputSchema},
  prompt: `You are an AI artist specializing in generating anime-style artwork suggestions.

  Based on the user's profile description: {{{profileDescription}}}
  and the desired theme: {{{themeDescription}}},
  suggest an anime-style artwork that would be a great fit for their portfolio.

  Include a description of the artwork suggestion and, if possible, provide a URL to a representative image or describe how to generate one using AI image generation tools.
  The suggestion should incorporate elements from both the profile and the theme.
  The image url is optional, you are not required to know it.`,
});

const generateAnimeArtworkFlow = ai.defineFlow(
  {
    name: 'generateAnimeArtworkFlow',
    inputSchema: GenerateAnimeArtworkInputSchema,
    outputSchema: GenerateAnimeArtworkOutputSchema,
  },
  async input => {
    const {output} = await generateAnimeArtworkPrompt(input);
    return output!;
  }
);
