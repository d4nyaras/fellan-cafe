import { CafePreferences } from "@/lib/ai/schema";
import { Cafe } from "@/types/cafe";

export type RankedCafe = Cafe & {
  score: number;
};

export type SearchResult = {
  cafes: RankedCafe[];
  preferences: CafePreferences;
};
