"use client";

import { useSearchParams } from "next/navigation";
import { SearchHero } from "@/features/search/components/SearchHero";
import { SearchInput } from "@/features/search/components/SearchInput";
import { SearchResults } from "@/features/search/components/SearchResults";

export default function SearchFlowPage() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("q");
  const query = rawQuery ? decodeURIComponent(rawQuery) : "";
  const isSearched = !!query;

  return (
    <main className="h-full">
      <div className="flex h-full max-w-5xl flex-col px-4 mx-auto">
        <header className="py-4 flex items-center justify-between text-foreground">
          <div className="text-sm font-semibold">CafeFinder</div>
        </header>

        <div className="flex-1">
          {!isSearched && <SearchHero />}

          {isSearched && (
            <section>
              <SearchInput compact={true} />
              <SearchResults query={query} />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
