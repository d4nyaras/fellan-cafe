import postgres from "postgres";

let sqlClient: postgres.Sql | null = null;

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return databaseUrl;
}

export function getSqlClient() {
  if (!sqlClient) {
    sqlClient = postgres(getDatabaseUrl(), {
      max: 3,
      prepare: false,
    });
  }

  return sqlClient;
}
