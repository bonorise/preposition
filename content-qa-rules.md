# Content QA Rules (Batch)

This checklist defines batch quality gates for all preposition detail pages.
Use it with `npm run qa:content`.

## Scope

- Target: every entry in `src/data/prepositions.ts`
- Locales: `en`, `zh-CN`
- Goal: ensure detail pages are consistently shippable for learning + SEO/GEO

## Hard Rules (`error`)

- `R001` localized meaning is required for both locales.
- `R002` key tips must contain 2-3 items per locale.
- `R003` each tip must be non-empty text.
- `R010` at least 2 base examples are required.
- `R011` each example requires an English sentence.
- `R012` each example requires localized translation in both locales.

- `R020` comparison block is required.
- `R021` comparison locale block is required for both locales.
- `R022` comparison summary is required.
- `R023` comparison must contain at least 2 differences.
- `R024` each difference needs term + description.
- `R025` each difference should include at least 2 contrast examples.

- `R030` collocationGroups is required for both locales.
- `R031` collocationGroups must contain exactly 3 groups.
- `R032` each collocation group needs a title.
- `R033` each collocation group must contain exactly 6 items.

- `R040` commonMistakes is required for both locales.
- `R041` commonMistakes must contain at least 2 items.
- `R042` each mistake needs wrong/correct/reason.

- `R050` quiz is required for both locales.
- `R051` quiz must contain exactly 3 questions.
- `R052` each quiz item needs prompt + explanation.
- `R053` each quiz item needs at least 3 options.
- `R054` quiz answer must exist in options.

- `R060` FAQ must contain 5-8 items.
- `R061` each FAQ item needs non-empty question + answer.

## Advisory Rules (`warn`)

- `R034` non-English collocation item should use object form with localized meaning.
- `R035` non-English collocation object item should contain `meaning`.
- `R070` multi-category entries (space/time/dynamic overlap) should provide `examplesByCategory`.

## Release Policy

- Release-blocking: any `error` from `npm run qa:content`
- Follow-up tasks allowed: `warn` can ship, but should be cleared in content sprints

## Recommended Workflow

1. Generate or edit content in `src/data/prepositions.ts`
2. Run `npm run qa:content`
3. Fix all `error`
4. Re-run `npm run qa:content` until clean
5. Run `npm run build`
