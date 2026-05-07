import { Cafe, RankedCafe } from "../types/cafe";
import { SearchPreferences } from "../types/preference";

export const SCORING_FIELDS = [
  "quiet",
  "romantic",
  "privacy",
  "price_level",
  "rating",
  "suitable_for_solo",
  "suitable_for_date",
] as const satisfies readonly (keyof SearchPreferences)[];

function normalizeScoreValue(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(Math.max(value, 0), 1);
}

export function calculateCafeScore(preferences: SearchPreferences, cafe: Cafe) {
  return SCORING_FIELDS.reduce((score, field) => {
    const preferenceValue = normalizeScoreValue(preferences[field]);
    const cafeValue = normalizeScoreValue(cafe[field]);

    return score + (1 - Math.abs(preferenceValue - cafeValue));
  }, 0);
}

export function rankCafes(preferences: SearchPreferences, cafes: Cafe[], limit = 3): RankedCafe[] {
  return cafes
    .map((cafe) => ({
      ...cafe,
      score: calculateCafeScore(preferences, cafe),
    }))
    .sort((firstCafe, secondCafe) => secondCafe.score - firstCafe.score)
    .slice(0, limit);
}
