# Content Generation Prompts (Preposition 3D)

Use these prompts to generate content for the **“差异解析”** and **“常见词组组合”** modules.  
Outputs should map cleanly into `src/data/prepositions.ts`.

---

## 1) Differences Module Prompt (差异解析)

**Goal:** Provide beginner-friendly differences between the target preposition and similar terms, plus two contrastive examples for each similar term.

**Input you provide:**
- Target preposition: `{word}`
- Similar terms (2–3): `{similar_terms}`
- Locale: `en` or `zh-CN`

**Prompt:**
```
You are writing learning content for English prepositions for beginners.

Target preposition: "{word}"
Similar terms: {similar_terms}
Locale: {locale}

Produce a JSON object with this shape:
{
  "summary": string,
  "differences": [
    {
      "term": string,
      "description": string,
      "examples": [
        { "term": string, "sentence": string, "translation"?: string },
        { "term": string, "sentence": string, "translation"?: string }
      ]
    }
  ]
}

Rules:
- Summary: 1–2 short sentences, beginner-friendly, focus on spatial meaning.
- Differences: one item per similar term; description <= 20 words (en) / <= 20 Chinese characters (zh-CN).
- Examples: exactly 2 per term.
  - Example A uses the similar term.
  - Example B uses the target preposition.
  - Keep the **same noun** in both examples to highlight contrast.
  - Use simple nouns (box/room/table/door/etc.).
- For zh-CN, include `translation` for every example. For en, omit `translation`.
- No extra fields, no markdown, only JSON.
```

**Example (en):**
```
{
  "summary": "In shows a static position inside a boundary.",
  "differences": [
    {
      "term": "inside",
      "description": "Inside stresses the boundary more strongly.",
      "examples": [
        { "term": "inside", "sentence": "The keys are inside the box." },
        { "term": "in", "sentence": "The keys are in the box." }
      ]
    }
  ]
}
```

---

## 2) Collocations Prompt (常见词组组合)

**Goal:** Generate a list of common collocations for the target preposition.  
**Important:** The count must be a **multiple of 3** (e.g., 21, 24).

**Input you provide:**
- Target preposition: `{word}`
- Locale: `en` or `zh-CN`
- Sense profile: `space` | `time` | `both`
- Count: `{count}` (must be multiple of 3)

**Prompt:**
```
You are generating common collocations for English prepositions for beginners.

Target preposition: "{word}"
Locale: {locale}
Sense profile: {sense_profile}
Count: {count} (must be a multiple of 3)

Output a JSON array of strings. Each entry:
- Starts with the target preposition exactly.
- Uses simple everyday contexts (places, time, containers, situations).
- Avoid duplicates or near-duplicates.
- No punctuation, no trailing periods.
- Keep phrases short (2–6 words total).
- If `sense_profile = both`, include both spatial and temporal collocations.
- If `sense_profile = both`, keep at least 1/3 spatial + 1/3 temporal items.
- Keep the final list count as a multiple of 3 so a 3-column grid has no empty cells.

Return only the JSON array.
```

**Example (en, count=6):**
```
[
  "in the room",
  "in a bag",
  "in the morning",
  "in the city",
  "in a book",
  "in trouble"
]
```
