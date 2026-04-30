"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useSearchNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") || "";

  const goToSearch = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const encoded = encodeURIComponent(trimmed);

    router.push(`/?q=${encoded}`);
  };

  return {
    currentQuery,
    goToSearch,
  };
}
