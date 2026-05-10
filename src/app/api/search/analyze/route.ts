import { searchCafes } from "@/server/domain/search/search.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const result = await searchCafes(query);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("API ROUTE ERROR:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
