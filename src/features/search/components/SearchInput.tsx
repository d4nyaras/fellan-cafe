"use client";

import clsx from "clsx";
import { KeyboardEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  compact?: boolean;
  onSearch: (query: string) => void;
  isLoading?: boolean;
  initialValue?: string;
}

export function SearchInput({ onSearch, isLoading = false, initialValue = "" }: SearchInputProps) {
  const [value, setValue] = useState(initialValue);

  const handleSearch = () => {
    if (!value.trim() || isLoading) return;
    onSearch(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={clsx("flex items-center rounded-2xl bg-surface/85 px-5 py-3 shadow-md")}>
      <FiSearch className="mr-4 text-muted" size={22} />

      <input
        className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted focus:outline-none"
        placeholder="A quiet café with good pastries and Wi‑Fi"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />

      <button
        onClick={handleSearch}
        disabled={isLoading || !value.trim()}
        className={clsx(
          "ml-3 rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-text shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary/35",
          isLoading || !value.trim() ? "cursor-not-allowed opacity-50" : "hover:bg-primary-hover",
        )}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
