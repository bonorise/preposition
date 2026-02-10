import fs from "fs";
import path from "path";
import * as THREE from "three";

import { PREPOSITIONS } from "../src/data/prepositions";
import type { SceneConfig } from "../src/data/types";

const SIZE = 120;
const PADDING = 12;
const FRONT_STROKE = "#0f172a";
const BACK_STROKE = "#cbd5e1";
const FRONT_OPACITY = 0.85;
const BACK_OPACITY = 0.9;
const BALL_COLOR = "#7c3aed";
const MOTION_STROKE = "#9ca3af";
const MOTION_OPACITY = 0.8;
const MOTION_WIDTH = 0.8;
const MOTION_DASH = "4 4";
const LOOP_ARC_PORTION = 0.7;
const LOOP_DISTANCE_EPS = 0.05;

const EDGE_INDEXES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

const FACE_INDEXES: Array<[number, number, number, number]> = [
  [4, 5, 6, 7], // front (+z)
  [0, 3, 2, 1], // back (-z)
  [1, 2, 6, 5], // right (+x)
  [0, 4, 7, 3], // left (-x)
  [3, 7, 6, 2], // top (+y)
  [0, 1, 5, 4], // bottom (-y)
];

type Vec3 = [number, number, number];

type Vec2 = [number, number];

function project(point: Vec3, camera: THREE.PerspectiveCamera) {
  const vector = new THREE.Vector3(...point);
  const cameraSpace = vector.clone().applyMatrix4(camera.matrixWorldInverse);
  const projected = vector.project(camera);
  return { point: [projected.x, -projected.y] as Vec2, depth: -cameraSpace.z };
}

function cubeVertices(center: Vec3, size: number): Vec3[] {
  const h = size / 2;
  const [cx, cy, cz] = center;
  return [
    [cx - h, cy - h, cz - h],
    [cx + h, cy - h, cz - h],
    [cx + h, cy + h, cz - h],
    [cx - h, cy + h, cz - h],
    [cx - h, cy - h, cz + h],
    [cx + h, cy - h, cz + h],
    [cx + h, cy + h, cz + h],
    [cx - h, cy + h, cz + h],
  ];
}

function buildCubeOffsets(scene: SceneConfig): Vec3[] {
  const variant = scene.variant ?? "singleCube";
  if (variant === "singleCube") {
    return [[0, 0, 0]];
  }
  if (variant === "twoCubes") {
    return [
      [-0.9, 0, 0],
      [0.9, 0, 0],
    ];
  }
  const offsets: Vec3[] = [];
  const radius = 1.1;
  const count = 4;
  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count;
    offsets.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
  }
  return offsets;
}

function normalizePoints(points: Vec2[]) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  points.forEach(([x, y]) => {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });

  const width = maxX - minX || 1;
  const height = maxY - minY || 1;
  const scale = (SIZE - PADDING * 2) / Math.max(width, height);

  const normalized = points.map(([x, y]) => [
    (x - minX) * scale + PADDING,
    (y - minY) * scale + PADDING,
  ]);

  return {
    points: normalized,
    scale,
  };
}

function edgeGroupMarkup(
  lines: string[],
  opts: { stroke: string; opacity: number; width: number },
) {
  if (!lines.length) return "";
  return `
  <g stroke="${opts.stroke}" stroke-opacity="${opts.opacity}" stroke-width="${opts.width}" stroke-linecap="round" stroke-linejoin="round">
    ${lines.join("\n    ")}
  </g>`;
}

function ballProjectedRadius(center: Vec3, radius: number, camera: THREE.PerspectiveCamera) {
  const centerProjected = project(center, camera).point;
  const axisOffsets: Vec3[] = [
    [center[0] + radius, center[1], center[2]],
    [center[0], center[1] + radius, center[2]],
    [center[0], center[1], center[2] + radius],
  ];
  const distances = axisOffsets.map((point) => {
    const projected = project(point, camera).point;
    const dx = projected[0] - centerProjected[0];
    const dy = projected[1] - centerProjected[1];
    return Math.hypot(dx, dy);
  });
  return Math.max(...distances);
}

function distance3(a: Vec3, b: Vec3) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function simplifyOpenPath(points: Vec3[]) {
  if (points.length < 3) return points;
  const origin = points[0];
  let bestIndex = 1;
  let bestDistance = distance3(origin, points[1]);
  for (let i = 2; i < points.length; i += 1) {
    const dist = distance3(origin, points[i]);
    if (dist > bestDistance + 0.001 || Math.abs(dist - bestDistance) < 0.001) {
      bestDistance = dist;
      bestIndex = i;
    }
  }
  return points.slice(0, bestIndex + 1);
}

function sampleCurve(points: Vec3[], closed: boolean, portion = 1, count = 48) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((point) => new THREE.Vector3(...point)),
    closed,
    "centripetal",
  );
  const samples: Vec3[] = [];
  for (let i = 0; i <= count; i += 1) {
    const t = (i / count) * portion;
    const p = curve.getPointAt(t);
    samples.push([p.x, p.y, p.z]);
  }
  return samples;
}

function buildMotionPath(scene: SceneConfig): Vec3[] {
  const animation = scene.animation;
  if (!animation || animation.type !== "path") return [];

  if (animation.path && animation.path.length >= 2) {
    let points = animation.path;
    const isClosed =
      Boolean(animation.closed) ||
      distance3(points[0], points[points.length - 1]) < LOOP_DISTANCE_EPS;
    if (isClosed && distance3(points[0], points[points.length - 1]) < LOOP_DISTANCE_EPS) {
      points = points.slice(0, -1);
    }
    if (isClosed) {
      return sampleCurve(points, true, LOOP_ARC_PORTION);
    }
    const simplified = simplifyOpenPath(points);
    if (simplified.length >= 3) {
      return sampleCurve(simplified, false, 1);
    }
    return simplified;
  }

  if (animation.from && animation.to) {
    return [animation.from, animation.to];
  }

  return [];
}

function buildSvg(scene: SceneConfig) {
  const offsets = buildCubeOffsets(scene);
  const camera = new THREE.PerspectiveCamera(
    scene.camera.fov ?? 42,
    1,
    0.1,
    100,
  );
  camera.position.set(...scene.camera.position);
  camera.lookAt(new THREE.Vector3(...scene.camera.target));
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  const vertices: Vec3[] = [];
  const cubes: Vec3[][] = [];
  offsets.forEach((offset) => {
    const center: Vec3 = [
      scene.cube.position[0] + offset[0],
      scene.cube.position[1] + offset[1],
      scene.cube.position[2] + offset[2],
    ];
    const cube = cubeVertices(center, scene.cube.size);
    cubes.push(cube);
    vertices.push(...cube);
  });

  const projectedVertices = vertices.map((point) => project(point, camera));
  const ballProjected = project(scene.ball.position as Vec3, camera);
  const ballRadiusProjected = ballProjectedRadius(
    scene.ball.position as Vec3,
    scene.ball.radius,
    camera,
  );
  const motionPoints = buildMotionPath(scene);
  const motionProjected = motionPoints.map((point) => project(point, camera));

  const ballBoundsRadius = ballRadiusProjected * 1.1;
  const pointsForNormalize: Vec2[] = [
    ...projectedVertices.map((item) => item.point),
    ...motionProjected.map((item) => item.point),
    ballProjected.point,
    [
      ballProjected.point[0] - ballBoundsRadius,
      ballProjected.point[1] - ballBoundsRadius,
    ],
    [
      ballProjected.point[0] + ballBoundsRadius,
      ballProjected.point[1] + ballBoundsRadius,
    ],
  ];
  const { points: normalized, scale } = normalizePoints(pointsForNormalize);
  const normalizedBallIndex = projectedVertices.length;
  const normalizedBall =
    normalized[normalizedBallIndex + motionProjected.length];
  const normalizedVertices = normalized.slice(0, projectedVertices.length);
  const normalizedMotion = motionProjected.length
    ? normalized.slice(
        projectedVertices.length,
        projectedVertices.length + motionProjected.length,
      )
    : [];

  const frontEdges: Array<{ line: string; depth: number }> = [];
  const backEdges: Array<{ line: string; depth: number }> = [];
  let vertexIndex = 0;
  cubes.forEach((cube) => {
    const faceVisibility = FACE_INDEXES.map((face) => {
      const a = new THREE.Vector3(...cube[face[0]]);
      const b = new THREE.Vector3(...cube[face[1]]);
      const c = new THREE.Vector3(...cube[face[2]]);
      const d = new THREE.Vector3(...cube[face[3]]);
      const normal = b.clone().sub(a).cross(c.clone().sub(a)).normalize();
      const center = a
        .clone()
        .add(b)
        .add(c)
        .add(d)
        .multiplyScalar(0.25);
      const viewDir = camera.position.clone().sub(center).normalize();
      return normal.dot(viewDir) > 0;
    });

    EDGE_INDEXES.forEach(([start, end]) => {
      const startIndex = vertexIndex + start;
      const endIndex = vertexIndex + end;
      const a = normalizedVertices[startIndex];
      const b = normalizedVertices[endIndex];
      const line = `<line x1="${a[0].toFixed(2)}" y1="${a[1].toFixed(
        2,
      )}" x2="${b[0].toFixed(2)}" y2="${b[1].toFixed(2)}" />`;
      const depth =
        (projectedVertices[startIndex].depth + projectedVertices[endIndex].depth) / 2;
      const isFront = FACE_INDEXES.some((face, index) => {
        if (!faceVisibility[index]) return false;
        return face.includes(start) && face.includes(end);
      });
      if (isFront) {
        frontEdges.push({ line, depth });
      } else {
        backEdges.push({ line, depth });
      }
    });
    vertexIndex += 8;
  });

  const projectedBallRadius = ballRadiusProjected * scale;
  const ballDepth = ballProjected.depth;
  const depthEpsilon = 0.002;
  const backEdgesBehindBall: string[] = [];
  const backEdgesInFrontOfBall: string[] = [];
  const frontEdgesBehindBall: string[] = [];
  const frontEdgesInFrontOfBall: string[] = [];

  backEdges.forEach((edge) => {
    if (edge.depth < ballDepth - depthEpsilon) {
      backEdgesInFrontOfBall.push(edge.line);
      return;
    }
    backEdgesBehindBall.push(edge.line);
  });

  frontEdges.forEach((edge) => {
    if (edge.depth < ballDepth - depthEpsilon) {
      frontEdgesInFrontOfBall.push(edge.line);
      return;
    }
    frontEdgesBehindBall.push(edge.line);
  });

  let motionPathMarkup = "";
  if (normalizedMotion.length >= 2) {
    const pathData = normalizedMotion
      .map((point, index) =>
        `${index === 0 ? "M" : "L"}${point[0].toFixed(2)} ${point[1].toFixed(
          2,
        )}`,
      )
      .join(" ");
    motionPathMarkup = `
  <defs>
    <marker id="motion-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="${MOTION_STROKE}" />
    </marker>
  </defs>
  <path d="${pathData}" fill="none" stroke="${MOTION_STROKE}" stroke-opacity="${MOTION_OPACITY}" stroke-width="${MOTION_WIDTH}" stroke-linecap="round" stroke-dasharray="${MOTION_DASH}" marker-end="url(#motion-arrow)" />`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" fill="none">
  ${edgeGroupMarkup(backEdgesBehindBall, {
    stroke: BACK_STROKE,
    opacity: BACK_OPACITY,
    width: 1.5,
  })}
  ${edgeGroupMarkup(frontEdgesBehindBall, {
    stroke: FRONT_STROKE,
    opacity: FRONT_OPACITY,
    width: 1.6,
  })}
  ${motionPathMarkup}
  <circle cx="${normalizedBall[0].toFixed(2)}" cy="${normalizedBall[1].toFixed(
    2,
  )}" r="${projectedBallRadius.toFixed(2)}" fill="${BALL_COLOR}" />
  ${edgeGroupMarkup(backEdgesInFrontOfBall, {
    stroke: BACK_STROKE,
    opacity: BACK_OPACITY,
    width: 1.5,
  })}
  ${edgeGroupMarkup(frontEdgesInFrontOfBall, {
    stroke: FRONT_STROKE,
    opacity: FRONT_OPACITY,
    width: 1.6,
  })}
</svg>`;
}

const outDir = path.join(process.cwd(), "public", "thumbnails");
fs.mkdirSync(outDir, { recursive: true });

PREPOSITIONS.forEach((entry) => {
  const svg = buildSvg(entry.scene);
  fs.writeFileSync(path.join(outDir, `${entry.id}.svg`), svg, "utf8");
});

console.log(`Generated ${PREPOSITIONS.length} thumbnails in ${outDir}`);
