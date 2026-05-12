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
    <div className="lg:over space-y-3 overflow-y-auto py-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Top cafe matches</h2>
          {results.length > 0 ? (
            <div className="max-h-[600px] space-y-3 overflow-y-auto pr-2 lg:max-h-[calc(100vh-250px)]">
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

        <aside className="order-first lg:sticky lg:top-6 lg:order-last lg:h-fit">
          <div className="rounded-2xl border border-border/60 bg-surface/70 p-5 shadow-md backdrop-blur-glass">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Your Preferences</h2>
              <span className="text-xs text-muted">based on your query</span>
            </div>

            <div className="flex flex-col gap-1">
              {preferenceEntries.map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-border/50 bg-surface/60 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-foreground">{label}</span>
                    <span className="text-sm font-medium text-primary">
                      {(value * 100).toFixed(0)}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${value * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
