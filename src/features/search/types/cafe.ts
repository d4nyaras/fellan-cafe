import type { SearchPreferences } from "./preference";

export interface Cafe extends SearchPreferences {
  id: string;
  name: string;
  description: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  website: string | null;
  image_url: string | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;
}

export interface RankedCafe extends Cafe {
  score: number;
}
