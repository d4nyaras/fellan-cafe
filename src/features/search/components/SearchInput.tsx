"use client";

import { useState, KeyboardEvent } from "react";
import { useSearchNavigation } from "../hooks/useSearchNavigation";
import { FiSearch } from "react-icons/fi";
import clsx from "clsx";

interface SearchInputProps {
  compact?: boolean;
}

export function SearchInput({ compact = false }: SearchInputProps) {
  const { currentQuery, goToSearch } = useSearchNavigation();
  const [value, setValue] = useState(decodeURIComponent(currentQuery || ""));

  const handleSearch = () => {
    if (!value.trim()) return;
    goToSearch(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center rounded-2xl bg-surface/85 px-5 py-3 shadow-md",
        compact ? "mt-4" : "mt-8",
      )}
    >
      <FiSearch className="text-muted mr-4" size={22} />

      <input
        className="flex-1 bg-transparent text-foreground placeholder:text-muted focus:outline-none text-base"
        placeholder="A quiet café with good pastries and Wi‑Fi"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSearch}
        className="ml-3 rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-text shadow-md transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/35"
      >
        Search
      </button>
    </div>
  );
}
