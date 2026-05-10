export type Cafe = {
  id: string;
  name: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;

  rating: number;
  price_level: number;

  quiet: number;
  romantic: number;
  privacy: number;

  suitable_for_solo: number;
  suitable_for_date: number;
};
