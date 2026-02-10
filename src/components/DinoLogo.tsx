type DinoLogoProps = {
  className?: string;
  bodyColor?: string;
  eyeColor?: string;
};

const PIXEL_ROWS = [
  "........................",
  ".............######.....",
  "............########....",
  "...........##########...",
  "...........###oo#####...",
  "...........###oo#####...",
  "...........##########...",
  "...........########.....",
  "....#...########........",
  "....##..#########..#....",
  "...###..##########.##...",
  "..##################....",
  ".###################....",
  ".##################.....",
  "..################......",
  "...###############......",
  "....##############......",
  ".....#####..#####.......",
  "......####...####.......",
  "......####...####.......",
  ".......##.....##........",
  ".......##.....##........",
  "........................",
  "........................",
] as const;

const CELL_SIZE = 4;
const VIEWBOX_SIZE = PIXEL_ROWS[0].length * CELL_SIZE;

export default function DinoLogo({
  className,
  bodyColor = "#f59a23",
  eyeColor = "#6f35f4",
}: DinoLogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      className={className}
      shapeRendering="crispEdges"
      role="img"
    >
      {PIXEL_ROWS.flatMap((row, rowIndex) =>
        [...row].map((pixel, columnIndex) => {
          if (pixel === ".") return null;
          const fill = pixel === "o" ? eyeColor : bodyColor;
          return (
            <rect
              key={`${rowIndex}-${columnIndex}`}
              x={columnIndex * CELL_SIZE}
              y={rowIndex * CELL_SIZE}
              width={CELL_SIZE}
              height={CELL_SIZE}
              fill={fill}
            />
          );
        }),
      )}
    </svg>
  );
}
