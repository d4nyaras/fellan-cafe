export const SEARCH_ANALYSIS_PROMPT = `Convert a cafe search request into numeric preferences (0–1).

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
`;
