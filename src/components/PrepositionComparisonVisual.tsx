import type { Locale, PrepositionComparisonVisual } from "@/data/types";

type PrepositionComparisonVisualProps = {
  visual: PrepositionComparisonVisual;
  locale: Locale;
};

const MARKER_STROKE_WIDTH = 3.5;
const RANGE_BAR_HEIGHT = 5;

type DiagramLayout = {
  panelWidth: number;
  panelGap: number;
  svgWidth: number;
  svgHeight: number;
  termY: number;
  noteY: number;
  rectWidth: number;
  rectHeight: number;
  rectY: number;
  termFontSize: number;
  noteFontSize: number;
  rectRadius: number;
};

const DESKTOP_LAYOUT: DiagramLayout = {
  panelWidth: 160,
  panelGap: 16,
  svgWidth: 688,
  svgHeight: 188,
  termY: 24,
  noteY: 40,
  rectWidth: 104,
  rectHeight: 72,
  rectY: 78,
  termFontSize: 16,
  noteFontSize: 10,
  rectRadius: 14,
};

const MOBILE_LAYOUT: DiagramLayout = {
  panelWidth: 220,
  panelGap: 0,
  svgWidth: 220,
  svgHeight: 160,
  termY: 24,
  noteY: 40,
  rectWidth: 108,
  rectHeight: 58,
  rectY: 68,
  termFontSize: 15,
  noteFontSize: 10,
  rectRadius: 12,
};

function getPanelX(index: number, layout: DiagramLayout) {
  return index * (layout.panelWidth + layout.panelGap);
}

function getRectX(panelX: number, layout: DiagramLayout) {
  return panelX + (layout.panelWidth - layout.rectWidth) / 2;
}

function renderMarker(
  item: PrepositionComparisonVisual["items"][number],
  panelX: number,
  layout: DiagramLayout,
) {
  const rectX = getRectX(panelX, layout);
  const rectRight = rectX + layout.rectWidth;
  const rectCenter = rectX + layout.rectWidth / 2;
  const topY = layout.rectY;
  const bottomY = layout.rectY + layout.rectHeight;

  if (item.marker === "contact") {
    return (
      <line
        x1={rectX + 12}
        y1={topY}
        x2={rectRight - 12}
        y2={topY}
        stroke="#0f766e"
        strokeWidth={MARKER_STROKE_WIDTH}
        strokeLinecap="round"
      />
    );
  }

  if (item.marker === "crossing") {
    return (
      <path
        d={`M ${rectX + 8} ${topY - 8} Q ${rectCenter} ${topY - 30} ${rectRight - 8} ${topY - 8}`}
        fill="none"
        stroke="#2563eb"
        strokeWidth={MARKER_STROKE_WIDTH}
        strokeLinecap="round"
      />
    );
  }

  if (item.marker === "hover") {
    const hoverWidth = layout.rectWidth + 24;
    return (
      <rect
        x={rectCenter - hoverWidth / 2}
        y={topY - 26}
        width={hoverWidth}
        height={RANGE_BAR_HEIGHT}
        rx="5"
        fill="#7c3aed"
      />
    );
  }

  return (
    <rect
      x={rectX + 18}
      y={bottomY + 24}
      width={layout.rectWidth - 36}
      height={RANGE_BAR_HEIGHT}
      rx="5"
      fill="#ea580c"
    />
  );
}

function renderDiagramItem(
  item: PrepositionComparisonVisual["items"][number],
  locale: Locale,
  layout: DiagramLayout,
  index: number,
) {
  const panelX = getPanelX(index, layout);
  const rectX = getRectX(panelX, layout);
  const labelX = panelX + layout.panelWidth / 2;
  const note = item.note[locale] ?? item.note["zh-CN"];

  return (
    <g key={`${item.term}-${index}`}>
      <text
        x={labelX}
        y={layout.termY}
        textAnchor="middle"
        fill="#0f172a"
        fontSize={layout.termFontSize}
        fontWeight="700"
      >
        {item.term}
      </text>
      <text
        x={labelX}
        y={layout.noteY}
        textAnchor="middle"
        fill="#64748b"
        fontSize={layout.noteFontSize}
      >
        {note}
      </text>
      <rect
        x={rectX}
        y={layout.rectY}
        width={layout.rectWidth}
        height={layout.rectHeight}
        fill="none"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="7 7"
        rx={layout.rectRadius}
      />
      {renderMarker(item, panelX, layout)}
    </g>
  );
}

export default function PrepositionComparisonVisual({
  visual,
  locale,
}: PrepositionComparisonVisualProps) {
  const localized = visual.i18n[locale] ?? visual.i18n["zh-CN"];

  return (
    <figure className="rounded-[var(--radius-md)] bg-slate-50/80 px-4 pt-4 pb-2">
      <figcaption className="space-y-1">
        <p className="text-sm font-semibold text-[color:var(--color-ink)]">
          {localized.title}
        </p>
        <p className="text-xs text-[color:var(--color-muted)]">
          {localized.caption}
        </p>
      </figcaption>

      <svg
        viewBox={`0 0 ${DESKTOP_LAYOUT.svgWidth} ${DESKTOP_LAYOUT.svgHeight}`}
        className="mt-3 hidden h-auto w-full md:block"
        role="img"
        aria-label={localized.title}
      >
        {visual.items.map((item, index) =>
          renderDiagramItem(item, locale, DESKTOP_LAYOUT, index),
        )}
      </svg>

      <div className="mt-2 space-y-2 md:hidden">
        {visual.items.map((item) => (
          <svg
            key={item.term}
            viewBox={`0 0 ${MOBILE_LAYOUT.svgWidth} ${MOBILE_LAYOUT.svgHeight}`}
            className="h-auto w-full rounded-[var(--radius-sm)] bg-white/45"
            role="img"
            aria-label={`${item.term} comparison diagram`}
          >
            {renderDiagramItem(item, locale, MOBILE_LAYOUT, 0)}
          </svg>
        ))}
      </div>
    </figure>
  );
}
