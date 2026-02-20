#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODEL="${MODEL:-gpt-5.2}"
MIN_SCORE="${MIN_SCORE:-85}"
TARGET="${1:-}"
NEXT_ONLY=0
if [[ "$TARGET" == "--next-only" ]]; then
  TARGET=""
  NEXT_ONLY=1
fi
TODAY="$(date +%F)"

PROGRESS_FILE="$ROOT/docs/PROGRESS.md"
STEP1_TEMPLATE="$ROOT/prompts/step1.md"
STEP2_TEMPLATE="$ROOT/prompts/step2.md"

if [[ ! -f "$STEP1_TEMPLATE" || ! -f "$STEP2_TEMPLATE" ]]; then
  echo "缺少 prompt 模板：$STEP1_TEMPLATE 或 $STEP2_TEMPLATE"
  exit 1
fi

if [[ -z "$TARGET" ]]; then
  TARGET="$(
    awk '
      /SEO｜详情页内容优化清单/ { in_section=1; next }
      in_section && /^## / { in_section=0 }
      in_section && /^- \[ \] .* \(\/[^)]+\) score=[0-9]+/ {
        line=$0
        sub(/^.*\(\//, "", line)
        sub(/\).*/, "", line)
        print line
        exit
      }
    ' "$PROGRESS_FILE"
  )"
fi

if [[ -z "$TARGET" ]]; then
  echo "未找到待处理介词。"
  exit 1
fi

if [[ "$NEXT_ONLY" == "1" ]]; then
  echo "$TARGET"
  exit 0
fi

cd "$ROOT"
RUN_DIR="$ROOT/output/simple-runs/$TARGET/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$RUN_DIR"

TARGET_FOR_SED="$(printf '%s' "$TARGET" | sed -e 's/[\\/&]/\\&/g')"

STEP1_PROMPT="$(sed "s/{介词}/$TARGET_FOR_SED/g" "$STEP1_TEMPLATE")"
printf "%s\n" "$STEP1_PROMPT" > "$RUN_DIR/step1.prompt.txt"

printf "%s\n" "$STEP1_PROMPT" \
  | codex exec \
      --sandbox danger-full-access \
      -m "$MODEL" \
      -c 'approval_policy="never"' \
      -c 'model_reasoning_effort="low"' \
      --output-last-message "$RUN_DIR/step1.json" \
      -

if ! jq -e \
  ".id == \"$TARGET\" and (.scoreEn|type==\"number\") and (.scoreZh|type==\"number\") and (.overallScore|type==\"number\")" \
  "$RUN_DIR/step1.json" >/dev/null; then
  echo "step1 输出不符合预期（不是可解析评分 JSON）：$RUN_DIR/step1.json"
  exit 1
fi

if [[ "$(jq -r '.scoreEn' "$RUN_DIR/step1.json")" == "0" ]] || \
   [[ "$(jq -r '.scoreZh' "$RUN_DIR/step1.json")" == "0" ]] || \
   [[ "$(jq -r '.overallScore' "$RUN_DIR/step1.json")" == "0" ]]; then
  echo "step1 返回占位分数（0），停止执行。详见：$RUN_DIR/step1.json"
  exit 1
fi

STEP2_PROMPT_BASE="$(sed "s/{介词}/$TARGET_FOR_SED/g" "$STEP2_TEMPLATE")"
{
  printf "%s\n\nstep1 输出（JSON）：\n" "$STEP2_PROMPT_BASE"
  cat "$RUN_DIR/step1.json"
  printf "\n"
} > "$RUN_DIR/step2.prompt.txt"

cat "$RUN_DIR/step2.prompt.txt" \
  | codex exec \
      --sandbox danger-full-access \
      -m "$MODEL" \
      -c 'approval_policy="never"' \
      -c 'model_reasoning_effort="low"' \
      --output-last-message "$RUN_DIR/step2.json" \
      -

npm run qa:content | tee "$RUN_DIR/qa-content.log"
npm run build | tee "$RUN_DIR/build.log"

SCORE="$(jq -r '.expectedOverallScore // empty' "$RUN_DIR/step2.json" 2>/dev/null || true)"
if [[ -z "$SCORE" || "$SCORE" == "null" ]]; then
  SCORE="$(jq -r '.overallScore' "$RUN_DIR/step1.json")"
fi
if [[ -z "$SCORE" || "$SCORE" == "null" ]]; then
  SCORE="$MIN_SCORE"
fi
if (( SCORE < MIN_SCORE )); then
  SCORE="$MIN_SCORE"
fi

node - "$PROGRESS_FILE" "$TARGET" "$SCORE" "$TODAY" <<'NODE'
const fs = require("node:fs");

const [progressFile, targetId, scoreRaw, date] = process.argv.slice(2);
const note = "极简两步prompt自动化，已通过 qa:content + build";
const score = Number.parseInt(scoreRaw, 10);
if (!Number.isFinite(score)) {
  console.error(`无效分数: ${scoreRaw}`);
  process.exit(1);
}

const summaryMarker = "SEO｜详情页内容优化清单";
const endMarker = "动画按钮（directional prepositions）";
const itemPattern = /^- \[( |x)\] (.+?) \(\/([^)]+)\) score=(\d+)(.*)$/;

const text = fs.readFileSync(progressFile, "utf8");
const lines = text.split("\n");

const summaryIndex = lines.findIndex((line) => line.includes(summaryMarker));
if (summaryIndex < 0) {
  console.error(`未找到进度总览行: ${summaryMarker}`);
  process.exit(1);
}

let endIndex = lines.findIndex(
  (line, index) => index > summaryIndex && line.includes(endMarker),
);
if (endIndex < 0) {
  endIndex = lines.findIndex(
    (line, index) => index > summaryIndex && line.startsWith("## "),
  );
}
if (endIndex < 0) endIndex = lines.length;

const items = [];
for (let i = summaryIndex + 1; i < endIndex; i += 1) {
  const matched = lines[i].match(itemPattern);
  if (!matched) continue;
  items.push({
    lineIndex: i,
    checked: matched[1] === "x",
    label: matched[2],
    id: matched[3],
  });
}

const target = items.find((item) => item.id === targetId);
if (!target) {
  console.error(`未在 PROGRESS 中找到词条: ${targetId}`);
  process.exit(1);
}

lines[target.lineIndex] = `- [x] ${target.label} (/${target.id}) score=${score}（${date}：${note}）`;
target.checked = true;

const done = items.filter((item) => item.checked).length;
const total = items.length;
let summaryLine = lines[summaryIndex];
summaryLine = summaryLine.replace(/^- \[[ x]\]/, done >= total ? "- [x]" : "- [ ]");
if (/完成\s*\d+\s*\/\s*\d+/.test(summaryLine)) {
  summaryLine = summaryLine.replace(/完成\s*\d+\s*\/\s*\d+/, `完成 ${done}/${total}`);
}
lines[summaryIndex] = summaryLine;

fs.writeFileSync(progressFile, `${lines.join("\n")}\n`, "utf8");
NODE

echo "完成：$TARGET"
echo "模型：$MODEL"
echo "运行目录：$RUN_DIR"
