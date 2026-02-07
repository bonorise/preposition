# Content Generation Prompts (Preposition 3D)

Use these prompts to generate content for the **“差异解析”**, **“例句”**, and **“常见词组组合”** modules.  
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

## 2) Examples Prompt (例句)

**Goal:** Generate beginner-friendly examples for each applicable learning category.

**Input you provide:**
- Target preposition: `{word}`
- Applicable categories: any combination of `space`, `time`, `dynamic`
- Locale: `en` or `zh-CN`

**Prompt:**
```
You are generating learning examples for English prepositions for beginners.

Target preposition: "{word}"
Applicable categories: {categories}
Locale: {locale}

Output a JSON object with this shape:
{
  "examplesByCategory": {
    "space"?: [Example, Example, ...],
    "time"?: [Example, Example, ...],
    "dynamic"?: [Example, Example, ...]
  }
}

Where Example is:
{
  "en": string,
  "translation"?: string
}

Rules:
- Every applicable category must be present.
- Each category must contain at least 2 examples.
- All examples must start from real beginner use cases and common nouns.
- If a preposition belongs to multiple categories (e.g. space + time, or space + dynamic), examples must be clearly separated by category, not mixed.
- Keep sentence length short and natural (about 6-12 words).
- For zh-CN, include `translation` for each example. For en, `translation` is optional.
- Return JSON only.
```

---

## 3) Collocations Prompt (常见词组组合)

**Goal:** Generate grouped common collocations for the target preposition, ready for a 3-column layout.

**Input you provide:**
- Target preposition: `{word}`
- Locale: `en` or `zh-CN`
- Group labels: `{group_labels}` (for example: spatial/time/abstract-state)

**Prompt:**
```
You are generating common collocations for English prepositions for beginners.

Target preposition: "{word}"
Locale: {locale}
Group labels: {group_labels}

Output JSON with this shape:
{
  "collocationGroups": [
    {
      "title": string,
      "items": [
        { "phrase": string, "meaning"?: string },
        ...
      ]
    },
    ...
  ]
}

Rules:
- Always return exactly 3 groups (for a 3-column layout).
- Each group must contain exactly 6 high-frequency items.
- `phrase` must start with target preposition exactly.
- Keep phrase length short (2–6 words), no punctuation, no duplicates.
- Group semantics must be clearly different (e.g. spatial vs time vs abstract state).
- For `en`: output only `phrase`; do not include `meaning`.
- For non-English locales (e.g. `zh-CN`): keep `phrase` in English and include concise localized `meaning`.
- Meanings should be beginner-friendly and literal-first.

Return JSON only.
```

**Example (zh-CN):**
```
{
  "collocationGroups": [
    {
      "title": "空间类",
      "items": [
        { "phrase": "in the room", "meaning": "在房间里" },
        { "phrase": "in my bag", "meaning": "在我的包里" }
      ]
    },
    {
      "title": "时间类",
      "items": [
        { "phrase": "in the morning", "meaning": "在早上" },
        { "phrase": "in 2026", "meaning": "在 2026 年" }
      ]
    },
    {
      "title": "抽象状态类",
      "items": [
        { "phrase": "in trouble", "meaning": "陷入麻烦中" },
        { "phrase": "in fact", "meaning": "事实上" }
      ]
    }
  ]
}
```

---

## 4) Common Mistakes Prompt (常见错误)

**Goal:** Generate beginner-facing negative contrasts: wrong usage vs correct usage + short reason.

**Input you provide:**
- Target preposition: `{word}`
- Locale: `en` or `zh-CN`
- Count: `{count}` (recommended 4)

**Prompt:**
```
You are generating beginner correction content for English prepositions.

Target preposition: "{word}"
Locale: {locale}
Count: {count}

Output a JSON array with this shape:
[
  {
    "wrong": string,
    "correct": string,
    "reason": string
  }
]

Rules:
- `wrong` must be a realistic learner mistake.
- `correct` must minimally fix the same sentence.
- `reason` must be short, explicit, and rule-based.
- Cover multiple dimensions when possible: container/surface/time point/time period/motion.
- Keep language simple and beginner-friendly.
- Return JSON only.
```

---

## 5) Mini Quiz Prompt (微测验)

**Goal:** Generate 3 fill-in-the-blank questions with immediate feedback text.

**Input you provide:**
- Target preposition: `{word}`
- Locale: `en` or `zh-CN`

**Prompt:**
```
You are generating a mini quiz for beginner preposition learning.

Target preposition: "{word}"
Locale: {locale}

Output a JSON array with exactly 3 items:
[
  {
    "prompt": string,
    "options": [string, string, string],
    "answer": string,
    "explanation": string
  }
]

Rules:
- Exactly 3 questions.
- Fill-in-the-blank style only (use ___ in prompt).
- 3 options per question; only one correct answer.
- At least one distractor must be a commonly confused preposition.
- Include at least 1 spatial context and 1 time or motion context when applicable.
- `explanation` must state why the correct one works; keep it concise.
- Return JSON only.
```

---

## 6) Consistency Rules (统一规范)

- Keep output fields strictly aligned with `src/data/types.ts`.
- If a preposition belongs to multiple categories, ensure examples/quiz cover each applicable category.
- `comparison.differences` items should stay between 2 and 3.
- Every difference item should include exactly 2 contrastive examples.
- Collocation groups must stay at 3 groups × 6 items to fit the 3-column UI.
- For non-English pages, keep English phrase + localized meaning in grouped collocations.
