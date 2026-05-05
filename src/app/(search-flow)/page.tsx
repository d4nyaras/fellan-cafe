"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchHero } from "@/features/search/components/SearchHero";
import { SearchInput } from "@/features/search/components/SearchInput";
import { SearchResults } from "@/features/search/components/SearchResults";
import { useSearchAnalysis } from "@/features/search/hooks/useSearchAnalysis";
import { SearchPreferences } from "@/features/search/types/preference";
export default function SearchFlowPage() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [currentQuery, setCurrentQuery] = useState("");
  const [preferences, setPreferences] = useState<SearchPreferences | null>(
    null,
  );

  const { mutate: analyzeSearch, isPending, error } = useSearchAnalysis();

  const handleSearch = (query: string) => {
    setCurrentQuery(query);
    analyzeSearch(query, {
      onSuccess: (data) => setPreferences(data.preferences),
      onError: () => setPreferences(null),
    });
  };

  useEffect(() => {
    if (urlQuery && urlQuery !== currentQuery) {
      handleSearch(urlQuery);
    }
  }, [urlQuery]);

  return (
    <main className="h-full">
      <div className="flex h-full max-w-5xl flex-col px-4 mx-auto">
        <header className="py-4 flex items-center justify-between text-foreground">
          <div className="text-sm font-semibold">CafeFinder</div>
        </header>

        <div className="flex-1">
          {!currentQuery && (
            <SearchHero onSearch={handleSearch} isLoading={isPending} />
          )}

          {currentQuery && (
            <section>
              <SearchInput
                compact={true}
                onSearch={handleSearch}
                isLoading={isPending}
                initialValue={currentQuery}
              />
              <SearchResults
                preferences={preferences}
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
