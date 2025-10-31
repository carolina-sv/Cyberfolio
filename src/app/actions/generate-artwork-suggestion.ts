'use server';

import { generateAnimeArtwork } from '@/ai/flows/generate-anime-artwork';

export async function generateArtworkSuggestion() {
  try {
    const profileDescription = "A developer skilled in JavaScript, React, .Net, PHP, and Python with a passion for anime.";
    const themeDescription = "Cyberpunk 2077";

    const result = await generateAnimeArtwork({
      profileDescription,
      themeDescription,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating artwork suggestion:", error);
    return { success: false, error: "Failed to generate suggestion. Please try again." };
  }
}
