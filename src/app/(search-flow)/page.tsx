"use client";

import { SearchHero } from "@/features/search/components/SearchHero";
import { SearchInput } from "@/features/search/components/SearchInput";
import { SearchResults } from "@/features/search/components/SearchResults";
import { useSearchAnalysis } from "@/features/search/hooks/useSearchAnalysis";
import { RankedCafe } from "@/features/search/types/cafe";
import { SearchPreferences } from "@/features/search/types/preference";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function SearchFlowPage() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [currentQuery, setCurrentQuery] = useState(urlQuery);
  const [preferences, setPreferences] = useState<SearchPreferences | null>(null);
  const [results, setResults] = useState<RankedCafe[]>([]);

  const { mutate: analyzeSearch, isPending, error } = useSearchAnalysis();
  const activeQuery = urlQuery || currentQuery;

  const runSearch = useCallback(
    (query: string) => {
      analyzeSearch(query, {
        onSuccess: (data) => {
          setPreferences(data.preferences);
          setResults(data.results);
        },
        onError: () => {
          setPreferences(null);
          setResults([]);
        },
      });
    },
    [analyzeSearch],
  );

  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setCurrentQuery(trimmedQuery);
    runSearch(trimmedQuery);
  };

  useEffect(() => {
    if (!urlQuery) {
      return;
    }

    runSearch(urlQuery);
  }, [urlQuery, runSearch]);

  return (
    <main className="h-full">
      <div className="mx-auto flex h-full max-w-5xl flex-col px-4">
        <header className="flex items-center justify-between py-4 text-foreground">
          <div className="text-sm font-semibold">CafeFinder</div>
        </header>

        <div className="flex-1">
          {!activeQuery && <SearchHero onSearch={handleSearch} isLoading={isPending} />}

          {activeQuery && (
            <section>
              <SearchInput
                key={activeQuery}
                compact={true}
                onSearch={handleSearch}
                isLoading={isPending}
                initialValue={activeQuery}
              />
              <SearchResults
                preferences={preferences}
                results={results}
                isLoading={isPending}
                error={error?.message || null}
              />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
