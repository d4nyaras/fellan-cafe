import { CafePreferences } from "@/lib/ai/schema";
import { Cafe } from "@/types/cafe";

export function calculateCafeScore(cafe: Cafe, preferences: CafePreferences) {
  let score = 0;

  score += cafe.quiet * preferences.quiet;
  score += cafe.romantic * preferences.romantic;
  score += cafe.privacy * preferences.privacy;
  score += cafe.price_level * preferences.price_level;
  score += cafe.rating * preferences.rating;
  score += cafe.suitable_for_solo * preferences.suitable_for_solo;
  score += cafe.suitable_for_date * preferences.suitable_for_date;

  return score;
}

export function rankCafes(cafes: Cafe[], preferences: CafePreferences) {
  return cafes
    .map((cafe) => ({
      ...cafe,
      score: calculateCafeScore(cafe, preferences),
    }))
    .sort((a, b) => b.score - a.score);
}
