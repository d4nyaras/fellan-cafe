"use client";

import { SearchPreferences } from "../types/preference";

interface SearchResultsProps {
  preferences: SearchPreferences | null;
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

export function SearchResults({
  preferences,
  isLoading,
  error,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="text-muted">Analyzing your preferences...</div>
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
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        Your Preferences
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {preferenceEntries.map(({ label, value }) => (
          <div key={label} className="rounded-xl bg-surface/85 p-4 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
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
    </div>
  );
}
