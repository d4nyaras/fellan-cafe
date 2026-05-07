import type { RankedCafe } from "./cafe";

export interface SearchPreferences {
  quiet: number;
  romantic: number;
  privacy: number;
  price_level: number;
  rating: number;
  suitable_for_solo: number;
  suitable_for_date: number;
}

export interface SearchAnalysisResponse {
  preferences: SearchPreferences;
  results: RankedCafe[];
}
