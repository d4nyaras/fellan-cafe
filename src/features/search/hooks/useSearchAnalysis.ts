import { SearchAnalysisResponse } from "@/features/search/types/preference";
import { useMutation } from "@tanstack/react-query";

async function analyzeSearch(query: string): Promise<SearchAnalysisResponse> {
  const response = await fetch("/api/search/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to analyze search");
  }

  return response.json();
}

export function useSearchAnalysis() {
  return useMutation({
    mutationFn: analyzeSearch,
  });
}
