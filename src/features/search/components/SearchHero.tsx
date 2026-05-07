"use client";

import { motion } from "framer-motion";
import { QuickActions } from "./QuickActions";
import { SearchInput } from "./SearchInput";

interface SearchHeroProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export function SearchHero({ onSearch, isLoading = false }: SearchHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col items-center px-4 pt-28 text-center"
    >
      <h1 className="font-serif text-[40px] font-semibold leading-[1.1] md:text-[64px]">
        Find the café that
        <br />
        fits your{" "}
        <span className="relative">
          mood
          <span className="absolute -bottom-2 left-0 right-0 h-[6px] rounded-full bg-primary" />
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
        Discover cozy spots, local favorites, and hidden gems tailored to what you feel like right
        now.
      </p>

      <div className="mt-4 w-full md:px-10">
        <SearchInput compact={false} onSearch={onSearch} isLoading={isLoading} />
      </div>

      <QuickActions />
    </motion.section>
  );
}
