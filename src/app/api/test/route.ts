import OpenAI from "openai";

export async function GET() {
  const client = new OpenAI({
    baseURL: "https://api.gapgpt.app/v1",
    apiKey: process.env.GAPGPT_API_KEY,
  });
  console.log("called");

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `You convert restaurant requests into numeric preference weights (0–1).
        Features: quiet, romantic, privacy, price_level, rating, suitable_for_solo, suitable_for_date
        Rules:
        - 1 = very important
        - 0 = not important or not mentioned
        - Infer implicit meanings
        - Return ONLY valid JSON
        - No explanation`,
      },
      {
        role: "user",
        content:
          "ی جایی میخوام برم که تنها باشم. حس و حال آرومی داشته باشم و اروم بشم. خیلی هم هزینه نکنم",
      },
    ],
  });

  return Response.json({
    result: JSON.parse(response.choices[0].message.content),
  });
}

//result:write a good prompt and what role you should use with gapgpt without using api key of gapgpt
//
// {
//     "result": {
//         "quiet": 1,
//         "romantic": 0,
//         "privacy": 1,
//         "price_level": 1,
//         "rating": 0.8,
//         "suitable_for_solo": 1,
//         "suitable_for_date": 0
//     }
// }
