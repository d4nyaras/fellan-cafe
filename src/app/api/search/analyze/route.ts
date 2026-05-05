import { NextRequest, NextResponse } from "next/server";
import { OpenAIService } from "@/features/search/services/gapGpt";
import { SearchAnalysisResponse } from "@/features/search/types/preference";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string" || !query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const apiKey = process.env.GAPGPT_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 },
      );
    }

    const openAIService = new OpenAIService(apiKey);
    const preferences = await openAIService.analyzeSearchQuery(query);

    const response: SearchAnalysisResponse = { preferences };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Search analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze search query" },
      { status: 500 },
    );
  }
}

//
// response {
//   preferences: {
//     quiet: 1,
//     romantic: 0,
//     privacy: 0.8,
//     price_level: 0.5,
//     rating: 0.7,
//     suitable_for_solo: 1,
//     suitable_for_date: 0
//   }
// }
