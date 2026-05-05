import OpenAI from "openai";
import { SearchPreferences } from "../types/preference";

export class OpenAIService {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({
      baseURL: "https://api.gapgpt.app/v1",
      apiKey,
    });
  }

  async analyzeSearchQuery(query: string): Promise<SearchPreferences> {
    const response = await this.client.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Convert a cafe search request into numeric preferences (0–1).

Return ONLY JSON.

Fields:
quiet
romantic
privacy
price_level
rating
suitable_for_solo
suitable_for_date

Scale:
0 = not desired / irrelevant
1 = strongly desired

price_level:
0 = very cheap
1 = very expensive

Rules:
- If not mentioned → 0
- Infer intensity from language
- Do not add fields
- Output valid JSON only
`,
        },
        {
          role: "user",
          content: query,
        },
      ],
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No response from AI");
    }

    return JSON.parse(content) as SearchPreferences;
  }
}
