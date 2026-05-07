import { DatabaseConfigurationError } from "@/features/search/repositories/cafeRepository";
import { searchCafes } from "@/features/search/services/searchController";
import { SearchAnalysisResponse } from "@/features/search/types/preference";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string" || !query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const apiKey = process.env.GAPGPT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const response: SearchAnalysisResponse = await searchCafes(query, apiKey);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Search analysis error:", error);

    if (error instanceof DatabaseConfigurationError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Failed to analyze search query" }, { status: 500 });
  }
}
