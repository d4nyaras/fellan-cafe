import postgres from "postgres";
import { Cafe } from "../types/cafe";

export class DatabaseConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseConfigurationError";
  }
}

let sqlClient: postgres.Sql | null = null;

type CafeRow = Omit<
  Cafe,
  | "quiet"
  | "romantic"
  | "privacy"
  | "price_level"
  | "rating"
  | "suitable_for_solo"
  | "suitable_for_date"
> & {
  quiet: number | string | null;
  romantic: number | string | null;
  privacy: number | string | null;
  price_level: number | string | null;
  rating: number | string | null;
  suitable_for_solo: number | string | null;
  suitable_for_date: number | string | null;
};

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new DatabaseConfigurationError("DATABASE_URL is not configured");
  }

  return databaseUrl;
}

function getSqlClient() {
  if (!sqlClient) {
    sqlClient = postgres(getDatabaseUrl(), {
      max: 3,
      prepare: false,
    });
  }

  return sqlClient;
}

function toNormalizedNumber(value: number | string | null) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return 0;
  }

  return Math.min(Math.max(numericValue, 0), 1);
}

function mapCafeRow(row: CafeRow): Cafe {
  return {
    ...row,
    quiet: toNormalizedNumber(row.quiet),
    romantic: toNormalizedNumber(row.romantic),
    privacy: toNormalizedNumber(row.privacy),
    price_level: toNormalizedNumber(row.price_level),
    rating: toNormalizedNumber(row.rating),
    suitable_for_solo: toNormalizedNumber(row.suitable_for_solo),
    suitable_for_date: toNormalizedNumber(row.suitable_for_date),
  };
}

export async function getAllCafes(): Promise<Cafe[]> {
  const rows = await getSqlClient()<CafeRow[]>`
    SELECT
      id,
      name,
      description,
      address,
      latitude,
      longitude,
      phone,
      website,
      image_url,
      quiet,
      romantic,
      privacy,
      price_level,
      rating,
      suitable_for_solo,
      suitable_for_date,
      created_at,
      updated_at
    FROM cafes
  `;

  return rows.map(mapCafeRow);
}
