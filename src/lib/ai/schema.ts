import { z } from "zod";

export const cafePreferencesSchema = z.object({
  quiet: z.number().min(0).max(1),
  romantic: z.number().min(0).max(1),
  privacy: z.number().min(0).max(1),
  price_level: z.number().min(0).max(1),
  rating: z.number().min(0).max(1),
  suitable_for_solo: z.number().min(0).max(1),
  suitable_for_date: z.number().min(0).max(1),
});

export type CafePreferences = z.infer<typeof cafePreferencesSchema>;
