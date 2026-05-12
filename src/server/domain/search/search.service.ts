import { analyzeCafeQuery } from "@/lib/ai/openai";
import { getAllCafes } from "@/server/repositories/cafe.repository";
import { rankCafes } from "./scoring";
import { SearchResult } from "./types";

export async function searchCafes(query: string): Promise<SearchResult> {
  if (!query || query.trim().length === 0) {
    throw new Error("Query is empty");
  }

  // AI analysis
  const preferences = await analyzeCafeQuery(query);

  // fetch cafes
  const cafes = await getAllCafes();

  // scoring + ranking
  const ranked = rankCafes(cafes, preferences);

  return {
    cafes: ranked.slice(0, 3),
    preferences,
  };
}
