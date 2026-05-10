import OpenAI from "openai";
import { SEARCH_ANALYSIS_PROMPT } from "./prompts";
import { cafePreferencesSchema } from "./schema";
import { CafePreferences } from "./types";

const client = new OpenAI({
  apiKey: process.env.GAPGPT_API_KEY,
  baseURL: "https://api.gapgpt.app/v1",
});

export async function analyzeCafeQuery(query: string): Promise<CafePreferences> {
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: SEARCH_ANALYSIS_PROMPT,
      },
      {
        role: "user",
        content: query,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("AI returned empty response");
  }

  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("Failed to parse AI response");
  }

  const result = cafePreferencesSchema.safeParse(parsed);

  if (!result.success) {
    throw new Error("AI response failed schema validation");
  }

  return result.data;
}
