import { getAllCafes } from "../repositories/cafeRepository";
import { OpenAIService } from "./gapGpt";
import { rankCafes } from "./cafeScoringService";

export async function searchCafes(query: string, apiKey: string) {
  const openAIService = new OpenAIService(apiKey);
  const preferences = await openAIService.analyzeSearchQuery(query);
  const cafes = await getAllCafes();
  const results = rankCafes(preferences, cafes);

  return {
    preferences,
    results,
  };
}
