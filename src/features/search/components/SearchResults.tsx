"use client";

import { RankedCafe } from "../types/cafe";
import { SearchPreferences } from "../types/preference";
import { ResultCard } from "./ResultCard";

interface SearchResultsProps {
  preferences: SearchPreferences | null;
  results: RankedCafe[];
  isLoading: boolean;
  error: string | null;
}

const PREFERENCE_LABELS: Record<keyof SearchPreferences, string> = {
  quiet: "Quiet",
  romantic: "Romantic",
  privacy: "Privacy",
  price_level: "Price Level",
  rating: "Rating",
  suitable_for_solo: "Suitable For Solo",
  suitable_for_date: "Suitable For Date",
};

export function SearchResults({ preferences, results = [], isLoading, error }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="text-muted">Finding your best cafe matches...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-xl bg-red-50 p-6 text-red-600">
        <p className="font-medium">Error</p>
        <p className="mt-1 text-sm">{error}</p>
      </div>
    );
  }

  if (!preferences) {
    return null;
  }

  const preferenceEntries = (
    Object.entries(preferences) as [keyof SearchPreferences, number][]
  ).map(([key, value]) => ({
    label: PREFERENCE_LABELS[key],
    value,
  }));

  return (
    <div className="mt-8 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Top cafe matches</h2>
        {results.length > 0 ? (
          <div className="max-h-[600px] space-y-4 overflow-auto pb-10">
            {results.map((cafe) => (
              <ResultCard
                key={cafe.id}
                title={cafe.name}
                description={cafe.description || "No description available."}
                location={cafe.address || "Address unavailable"}
                match={`${Math.round((cafe.score / 7) * 100)}% match`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-surface/85 p-6 text-muted shadow-md">
            No cafes found yet.
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Your Preferences</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {preferenceEntries.map(({ label, value }) => (
            <div key={label} className="rounded-xl bg-surface/85 p-4 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{label}</span>
                <span className="text-lg font-semibold text-primary">
                  {(value * 100).toFixed(0)}%
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted/20">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${value * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
