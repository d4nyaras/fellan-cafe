"use client";

import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import { QuickActions } from "./QuickActions";

interface SearchHeroProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export function SearchHero({ onSearch, isLoading = false }: SearchHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col items-center text-center pt-28 px-4"
    >
      <h1 className="font-serif text-[40px] md:text-[64px] leading-[1.1]  font-semibold">
        Find the café that
        <br />
        fits your{" "}
        <span className="relative">
          mood
          <span className="absolute left-0 right-0 -bottom-2 h-[6px] rounded-full bg-primary" />
        </span>
      </h1>

      <p className="mt-6 text-muted text-base md:text-lg max-w-xl">
        Discover cozy spots, local favorites, and hidden gems tailored to what
        you feel like right now.
      </p>

      <div className="mt-4 w-full md:px-10">
        <SearchInput
          compact={false}
          onSearch={onSearch}
          isLoading={isLoading}
        />
      </div>

      <QuickActions />
    </motion.section>
  );
}
