import { PREPOSITIONS } from "../src/data/prepositions";
import { SUPPORTED_LOCALES } from "../src/data/i18n";
import type { Locale, PrepositionEntry } from "../src/data/types";
import {
  isDynamicPreposition,
  isSpatialPreposition,
  isTemporalPreposition,
} from "../src/lib/prepositionCategory";
import { getPrepositionFaqItems } from "../src/lib/prepositionFaq";

type Severity = "error" | "warn";
type Scope = "all" | "time" | "dynamic";

type Issue = {
  severity: Severity;
  ruleId: string;
  entryId: string;
  locale?: Locale;
  message: string;
};

const PREVIEW_LIMIT = 120;

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function pushIssue(
  issues: Issue[],
  severity: Severity,
  ruleId: string,
  entryId: string,
  message: string,
  locale?: Locale,
) {
  issues.push({ severity, ruleId, entryId, locale, message });
}

function checkLocalizedBasics(entry: PrepositionEntry, issues: Issue[]) {
  for (const locale of SUPPORTED_LOCALES) {
    const localized = entry.i18n[locale];
    if (!localized || !isNonEmptyString(localized.meaning)) {
      pushIssue(
        issues,
        "error",
        "R001",
        entry.id,
        "missing localized meaning",
        locale,
      );
    }

    const tips = localized?.tips ?? [];
    if (tips.length < 2 || tips.length > 3) {
      pushIssue(
        issues,
        "error",
        "R002",
        entry.id,
        `tips must contain 2-3 items, got ${tips.length}`,
        locale,
      );
    }
    tips.forEach((tip, index) => {
      if (!isNonEmptyString(tip)) {
        pushIssue(
          issues,
          "error",
          "R003",
          entry.id,
          `tip #${index + 1} is empty`,
          locale,
        );
      }
    });
  }
}

function checkExamples(entry: PrepositionEntry, issues: Issue[]) {
  if (entry.examples.length < 2) {
    pushIssue(
      issues,
      "error",
      "R010",
      entry.id,
      `at least 2 base examples required, got ${entry.examples.length}`,
    );
  }

  entry.examples.forEach((example, index) => {
    if (!isNonEmptyString(example.en)) {
      pushIssue(
        issues,
        "error",
        "R011",
        entry.id,
        `example #${index + 1} missing English sentence`,
      );
    }
    for (const locale of SUPPORTED_LOCALES) {
      const translation = example.i18n?.[locale]?.translation;
      if (!isNonEmptyString(translation)) {
        pushIssue(
          issues,
          "error",
          "R012",
          entry.id,
          `example #${index + 1} missing localized translation`,
          locale,
        );
      }
    }
  });
}

function checkComparison(entry: PrepositionEntry, issues: Issue[]) {
  if (!entry.comparison) {
    pushIssue(issues, "error", "R020", entry.id, "comparison section missing");
    return;
  }

  for (const locale of SUPPORTED_LOCALES) {
    const localized = entry.comparison.i18n?.[locale];
    if (!localized) {
      pushIssue(
        issues,
        "error",
        "R021",
        entry.id,
        "comparison localized block missing",
        locale,
      );
      continue;
    }

    if (!isNonEmptyString(localized.summary)) {
      pushIssue(
        issues,
        "error",
        "R022",
        entry.id,
        "comparison summary missing",
        locale,
      );
    }

    if (localized.differences.length < 2) {
      pushIssue(
        issues,
        "error",
        "R023",
        entry.id,
        `comparison needs >=2 differences, got ${localized.differences.length}`,
        locale,
      );
    }

    localized.differences.forEach((difference, diffIndex) => {
      if (!isNonEmptyString(difference.term) || !isNonEmptyString(difference.description)) {
        pushIssue(
          issues,
          "error",
          "R024",
          entry.id,
          `difference #${diffIndex + 1} missing term or description`,
          locale,
        );
      }

      const examples = difference.examples ?? [];
      if (examples.length < 2) {
        pushIssue(
          issues,
          "error",
          "R025",
          entry.id,
          `difference #${diffIndex + 1} should include >=2 contrast examples`,
          locale,
        );
      }
    });
  }
}

function checkCollocations(entry: PrepositionEntry, issues: Issue[]) {
  for (const locale of SUPPORTED_LOCALES) {
    const groups = entry.collocationGroups?.[locale];
    if (!groups) {
      pushIssue(
        issues,
        "error",
        "R030",
        entry.id,
        "collocationGroups missing",
        locale,
      );
      continue;
    }

    if (groups.length !== 3) {
      pushIssue(
        issues,
        "error",
        "R031",
        entry.id,
        `collocationGroups must contain exactly 3 groups, got ${groups.length}`,
        locale,
      );
    }

    groups.forEach((group, groupIndex) => {
      if (!isNonEmptyString(group.title)) {
        pushIssue(
          issues,
          "error",
          "R032",
          entry.id,
          `collocation group #${groupIndex + 1} title missing`,
          locale,
        );
      }
      if (group.items.length !== 6) {
        pushIssue(
          issues,
          "error",
          "R033",
          entry.id,
          `collocation group #${groupIndex + 1} must contain 6 items, got ${group.items.length}`,
          locale,
        );
      }

      if (locale !== "en") {
        group.items.forEach((item, itemIndex) => {
          if (typeof item === "string") {
            pushIssue(
              issues,
              "warn",
              "R034",
              entry.id,
              `collocation item #${itemIndex + 1} should include localized meaning object`,
              locale,
            );
            return;
          }

          if (!isNonEmptyString(item.meaning)) {
            pushIssue(
              issues,
              "warn",
              "R035",
              entry.id,
              `collocation item #${itemIndex + 1} missing localized meaning`,
              locale,
            );
          }
        });
      }
    });
  }
}

function checkMistakes(entry: PrepositionEntry, issues: Issue[]) {
  for (const locale of SUPPORTED_LOCALES) {
    const mistakes = entry.commonMistakes?.[locale];
    if (!mistakes) {
      pushIssue(
        issues,
        "error",
        "R040",
        entry.id,
        "commonMistakes block missing",
        locale,
      );
      continue;
    }
    if (mistakes.length < 2) {
      pushIssue(
        issues,
        "error",
        "R041",
        entry.id,
        `commonMistakes requires >=2 items, got ${mistakes.length}`,
        locale,
      );
    }
    mistakes.forEach((mistake, index) => {
      if (
        !isNonEmptyString(mistake.wrong) ||
        !isNonEmptyString(mistake.correct) ||
        !isNonEmptyString(mistake.reason)
      ) {
        pushIssue(
          issues,
          "error",
          "R042",
          entry.id,
          `common mistake #${index + 1} missing wrong/correct/reason`,
          locale,
        );
      }
    });
  }
}

function checkQuiz(entry: PrepositionEntry, issues: Issue[]) {
  for (const locale of SUPPORTED_LOCALES) {
    const quiz = entry.quiz?.[locale];
    if (!quiz) {
      pushIssue(
        issues,
        "error",
        "R050",
        entry.id,
        "quiz block missing",
        locale,
      );
      continue;
    }
    if (quiz.length !== 3) {
      pushIssue(
        issues,
        "error",
        "R051",
        entry.id,
        `quiz must contain exactly 3 questions, got ${quiz.length}`,
        locale,
      );
    }
    quiz.forEach((question, index) => {
      if (!isNonEmptyString(question.prompt) || !isNonEmptyString(question.explanation)) {
        pushIssue(
          issues,
          "error",
          "R052",
          entry.id,
          `quiz #${index + 1} missing prompt or explanation`,
          locale,
        );
      }
      if (question.options.length < 3) {
        pushIssue(
          issues,
          "error",
          "R053",
          entry.id,
          `quiz #${index + 1} needs >=3 options, got ${question.options.length}`,
          locale,
        );
      }
      if (!question.options.includes(question.answer)) {
        pushIssue(
          issues,
          "error",
          "R054",
          entry.id,
          `quiz #${index + 1} answer is not in options`,
          locale,
        );
      }
    });
  }
}

function checkFaq(entry: PrepositionEntry, issues: Issue[]) {
  for (const locale of SUPPORTED_LOCALES) {
    const faqItems = getPrepositionFaqItems(entry, locale);
    if (faqItems.length < 5 || faqItems.length > 8) {
      pushIssue(
        issues,
        "error",
        "R060",
        entry.id,
        `FAQ items must be 5-8, got ${faqItems.length}`,
        locale,
      );
    }

    faqItems.forEach((item, index) => {
      if (!isNonEmptyString(item.question) || !isNonEmptyString(item.answer)) {
        pushIssue(
          issues,
          "error",
          "R061",
          entry.id,
          `FAQ #${index + 1} missing question or answer`,
          locale,
        );
      }
    });
  }
}

function checkCategoryExamples(entry: PrepositionEntry, issues: Issue[]) {
  const requiredCategories: Array<{ id: "space" | "time" | "dynamic"; enabled: boolean }> = [
    { id: "space", enabled: isSpatialPreposition(entry) },
    { id: "time", enabled: isTemporalPreposition(entry) },
    { id: "dynamic", enabled: isDynamicPreposition(entry) },
  ];

  const enabled = requiredCategories.filter((category) => category.enabled);
  if (enabled.length <= 1) return;

  for (const locale of SUPPORTED_LOCALES) {
    for (const category of enabled) {
      const items = entry.examplesByCategory?.[category.id] ?? [];
      if (items.length < 1) {
        pushIssue(
          issues,
          "warn",
          "R070",
          entry.id,
          `multi-category entry should include examplesByCategory.${category.id}`,
          locale,
        );
      }
    }
  }
}

function runChecks(entry: PrepositionEntry) {
  const issues: Issue[] = [];
  checkLocalizedBasics(entry, issues);
  checkExamples(entry, issues);
  checkComparison(entry, issues);
  checkCollocations(entry, issues);
  checkMistakes(entry, issues);
  checkQuiz(entry, issues);
  checkFaq(entry, issues);
  checkCategoryExamples(entry, issues);
  return issues;
}

function printIssues(issues: Issue[]) {
  const preview = issues.slice(0, PREVIEW_LIMIT);
  for (const issue of preview) {
    const localeText = issue.locale ? `/${issue.locale}` : "";
    console.log(
      `[${issue.severity.toUpperCase()}] ${issue.ruleId} ${issue.entryId}${localeText}: ${issue.message}`,
    );
  }
  if (issues.length > PREVIEW_LIMIT) {
    console.log(`... ${issues.length - PREVIEW_LIMIT} more issues omitted`);
  }
}

function summarizeByRule(issues: Issue[]) {
  const counts = new Map<string, number>();
  for (const issue of issues) {
    counts.set(issue.ruleId, (counts.get(issue.ruleId) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function readScopeArg(): Scope {
  const normalize = (value: string | undefined): Scope =>
    value === "time" || value === "dynamic" ? value : "all";

  const direct = process.argv.find((arg) => arg.startsWith("--scope="));
  if (direct) {
    return normalize(direct.split("=")[1]);
  }

  const scopeIndex = process.argv.indexOf("--scope");
  if (scopeIndex >= 0) {
    return normalize(process.argv[scopeIndex + 1]);
  }

  return "all";
}

function main() {
  const scope = readScopeArg();
  const targetEntries =
    scope === "time"
      ? PREPOSITIONS.filter((entry) => isTemporalPreposition(entry))
      : scope === "dynamic"
        ? PREPOSITIONS.filter((entry) => isDynamicPreposition(entry))
      : PREPOSITIONS;
  const allIssues: Issue[] = [];
  for (const entry of targetEntries) {
    allIssues.push(...runChecks(entry));
  }

  const errorCount = allIssues.filter((issue) => issue.severity === "error").length;
  const warnCount = allIssues.filter((issue) => issue.severity === "warn").length;

  console.log(`Scope: ${scope}`);
  console.log(`Checked entries: ${targetEntries.length}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Warnings: ${warnCount}`);

  if (allIssues.length > 0) {
    console.log("--- Issues ---");
    printIssues(allIssues);
    console.log("--- Top rules ---");
    for (const [ruleId, count] of summarizeByRule(allIssues).slice(0, 10)) {
      console.log(`${ruleId}: ${count}`);
    }
  } else {
    console.log("No issues found.");
  }

  if (errorCount > 0) {
    process.exitCode = 1;
  }
}

main();
