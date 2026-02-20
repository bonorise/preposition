按你的推荐优化方案执行。

目标介词：{介词}

执行要求：
1) 仅修改与 {介词} 直接相关的内容。
2) 优先更新 `src/data/prepositions.ts` 中该词条内容。
3) 如需 SEO metadata，可修改 `src/app/[locale]/p/[id]/page.tsx` 的对应 override。
4) 不要修改 `docs/PROGRESS.md`。
5) 严格遵守内容结构质检（必须能通过 `npm run qa:content`）：
   - `tips` 每个语言 2-3 条；
   - `collocationGroups` 每个语言必须 3 组，且每组 6 条；
   - `quiz` 每个语言必须 3 题；
   - `faq` 每个语言必须 5-8 条。
6) 禁止执行任何 git 回滚命令（如 `git checkout` / `git restore` / `git reset`）修改非目标文件。
7) 修改完成后输出 JSON，总结你做了什么。

只输出 JSON，不要输出 Markdown。JSON 字段：
{
  "id": "{介词}",
  "changedFiles": [""],
  "implementedActions": [""],
  "unresolvedRisks": [""],
  "expectedScoreEn": 0,
  "expectedScoreZh": 0,
  "expectedOverallScore": 0,
  "notes": ""
}
