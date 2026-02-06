"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionComparisonProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

function InComparisonDiagram() {
  return (
    <svg
      className="h-28 w-full"
      viewBox="0 0 360 120"
      role="img"
      aria-label="in vs on vs into diagram"
    >
      <rect width="360" height="120" fill="none" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#9ca3af" />
        </marker>
      </defs>
      {[
        { label: "in", dot: [60, 58], color: "#7c3aed" },
        { label: "on", dot: [60, 34], color: "#7c3aed" },
        { label: "into", dot: [60, 58], color: "#7c3aed" },
      ].map((item, index) => (
        <g key={item.label} transform={`translate(${index * 120},0)`}>
          <rect
            x="24"
            y="22"
            width="72"
            height="72"
            rx="10"
            fill="none"
            stroke="#111827"
            strokeWidth="2"
          />
          <circle cx={item.dot[0]} cy={item.dot[1]} r="8" fill={item.color} />
          {item.label === "into" ? (
            <path
              d="M24 60 C40 50 56 44 72 38"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.4"
              strokeDasharray="4 4"
              markerEnd="url(#arrow)"
            />
          ) : null}
          <text
            x="60"
            y="110"
            textAnchor="middle"
            fontSize="12"
            fill="#4b5563"
            fontFamily="sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function PrepositionComparison({
  entry,
  locale,
}: PrepositionComparisonProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const comparison =
    entry.comparison?.i18n[activeLocale] ??
    entry.comparison?.i18n["zh-CN"];

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailComparisonTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {comparison ? (
          <div className="space-y-4">
            <p className="text-sm text-[color:var(--color-muted)]">
              {comparison.summary}
            </p>
            {entry.id === "in" ? <InComparisonDiagram /> : null}
            <div className="grid gap-3 md:grid-cols-3">
              {comparison.differences.map((item) => (
                <div
                  key={item.term}
                  className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/80 p-4"
                >
                  <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                    {item.term}
                  </p>
                  <p className="mt-2 text-xs text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                  {item.examples?.length ? (
                    <div className="mt-3 space-y-2 text-xs">
                      {item.examples.map((example, index) => (
                        <div
                          key={`${item.term}-${index}`}
                          className="rounded-[var(--radius-sm)] bg-slate-50/80 px-2 py-1.5"
                        >
                          <div className="flex flex-wrap items-baseline gap-2 text-[color:var(--color-ink)]">
                            <span className="font-semibold text-[#7c3aed]">
                              {example.term}
                            </span>
                            <span>{example.sentence}</span>
                          </div>
                          {example.translation ? (
                            <p className="mt-1 text-[11px] text-[color:var(--color-muted)]">
                              {example.translation}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.detailComparisonPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
