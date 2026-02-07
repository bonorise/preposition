"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import type { PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { PREPOSITIONS } from "@/data/prepositions";
import { DEFAULT_CAMERA, DEFAULT_CUBE } from "@/lib/scenePreset";
import { useLocale } from "@/components/LocaleProvider";

const ballColor = 0x7c3aed;
const cubeLineColor = 0x0f1c2e;
const cubeFaceColor = 0xffffff;

const cubeSize = DEFAULT_CUBE.size;
const ballRadius = 0.22;
const bounds = { x: 2.5, y: 1.35, z: 2.35 };
type PlaygroundMode = "static" | "dynamic";

type MotionDefinition = {
  label: string;
  path: Array<[number, number, number]>;
  closed?: boolean;
};

const MOTIONS: MotionDefinition[] = [
  { label: "into", path: [[0, 0, 1.6], [0, 0, 0.25]] },
  { label: "out of", path: [[0, 0, 0.25], [0, 0, -1.6]] },
  { label: "through", path: [[0, 0, 1.6], [0, 0, 0], [0, 0, -1.6]] },
  { label: "across", path: [[-1.6, 0, 0.8], [1.6, 0, 0.8]] },
  { label: "along", path: [[1.2, 0, -1.6], [1.2, 0, 1.6]] },
  { label: "alongside", path: [[1.4, 0, -1.2], [1.4, 0, 1.2]] },
  { label: "past", path: [[1.4, 0, -1.2], [-1.4, 0, 1.2]] },
  { label: "toward", path: [[0, 0, 2.0], [0, 0, 1.1]] },
  { label: "to", path: [[0, 0, 2.2], [0, 0, 1.2]] },
  { label: "from", path: [[0, 0, -0.4], [0, 0, -1.8]] },
  { label: "onto", path: [[0, 1.6, 0], [0, 0.72, 0]] },
  { label: "off", path: [[0, 0.72, 0], [1.2, 0.3, 0]] },
  { label: "over", path: [[-1.6, 1.1, 0], [0, 1.6, 0], [1.6, 1.1, 0]] },
  { label: "around", path: [[1.2, 0, 0], [0, 0, 1.2], [-1.2, 0, 0], [0, 0, -1.2], [1.2, 0, 0]], closed: true },
  { label: "up", path: [[0, 0.2, 0], [0, 1.5, 0]] },
  { label: "down", path: [[0, 0.2, 0], [0, -1.5, 0]] },
];

type StaticAnchor = {
  label: string;
  point: [number, number, number];
};

const STATIC_ANCHORS: StaticAnchor[] = [
  { label: "in", point: [0, 0, 0] },
  { label: "inside", point: [0.18, 0.05, 0.12] },
  { label: "within", point: [-0.2, -0.08, 0.1] },
  { label: "on", point: [0, 0.7, 0] },
  { label: "on top of", point: [0.32, 0.7, 0.06] },
  { label: "above", point: [0, 1.18, 0] },
  { label: "over", point: [0.62, 1.08, 0] },
  { label: "under", point: [0, -0.84, 0] },
  { label: "below", point: [-0.45, -1.02, 0] },
  { label: "beneath", point: [0.45, -1.08, 0] },
  { label: "underneath", point: [0, -1.18, -0.36] },
  { label: "beside", point: [1.0, 0, 0] },
  { label: "next to", point: [1.45, 0, 0] },
  { label: "near", point: [1.92, 0, 0.22] },
  { label: "by", point: [-1.0, 0, 0] },
  { label: "close to", point: [-1.35, 0, 0.2] },
  { label: "far from", point: [-2.35, 0, 0] },
  { label: "in front of", point: [0, 0, 1.35] },
  { label: "ahead of", point: [-0.42, 0, 1.72] },
  { label: "opposite", point: [0, 0, 1.95] },
  { label: "across from", point: [0, 0, 2.18] },
  { label: "behind", point: [0, 0, -1.3] },
  { label: "in back of", point: [0.42, 0, -1.62] },
  { label: "outside", point: [-0.72, 0, 1.06] },
  { label: "without", point: [-1.05, 0, 1.42] },
  { label: "around", point: [1.18, 0.05, 0.92] },
  { label: "between", point: [0, 0, 0.68] },
  { label: "among", point: [0.78, 0.08, 0.55] },
  { label: "in the middle of", point: [0, 0.08, 0.42] },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getStaticPrepositionLabel(position: THREE.Vector3) {
  let bestLabel = STATIC_ANCHORS[0]?.label ?? "in";
  let bestDistance = Infinity;
  STATIC_ANCHORS.forEach((anchor) => {
    const [x, y, z] = anchor.point;
    const dx = position.x - x;
    const dy = position.y - y;
    const dz = position.z - z;
    const distance = dx * dx + dy * dy + dz * dz;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestLabel = anchor.label;
    }
  });
  return bestLabel;
}

type MotionSample = {
  label: string;
  curve: THREE.CatmullRomCurve3;
  closed: boolean;
  samples: THREE.Vector3[];
};

function getNearestPointOnMotionPath(point: THREE.Vector3, motion: MotionSample) {
  let nearest = motion.samples[0] ?? new THREE.Vector3();
  let bestDistance = Infinity;
  motion.samples.forEach((sample) => {
    const distance = sample.distanceToSquared(point);
    if (distance < bestDistance) {
      bestDistance = distance;
      nearest = sample;
    }
  });
  return nearest.clone();
}

type SpatialPlaygroundProps = {
  focusedEntry?: PrepositionEntry | null;
};

export default function SpatialPlayground({
  focusedEntry = null,
}: SpatialPlaygroundProps) {
  const { locale } = useLocale();
  const ui = getUiText(locale);
  const [mode, setMode] = useState<PlaygroundMode>("static");
  const [selectedMotionLabel, setSelectedMotionLabel] = useState(
    MOTIONS[0]?.label ?? "into",
  );
  const [selectedStaticLabel, setSelectedStaticLabel] = useState(
    STATIC_ANCHORS[0]?.label ?? "in",
  );
  const [label, setLabel] = useState(STATIC_ANCHORS[0]?.label ?? "in");
  const labelRef = useRef(label);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const labelMeaningMap = new Map(
    PREPOSITIONS.map((entry) => [
      entry.word.toLowerCase(),
      entry.i18n[locale]?.meaning ?? entry.i18n["zh-CN"]?.meaning ?? entry.word,
    ]),
  );
  const labelMeaning =
    labelMeaningMap.get(label.toLowerCase()) ??
    (mode === "dynamic" ? ui.playgroundMotionHint : ui.playgroundHint);
  const sceneHint = mode === "dynamic" ? ui.playgroundMotionHint : ui.playgroundHint;

  useEffect(() => {
    if (!focusedEntry) {
      setSelectedStaticLabel(STATIC_ANCHORS[0]?.label ?? "in");
      return;
    }
    const normalizedWord = focusedEntry.word.toLowerCase();
    const motionMatch = MOTIONS.find((motion) => motion.label === normalizedWord);
    if (motionMatch) {
      setMode("dynamic");
      setSelectedMotionLabel(motionMatch.label);
      labelRef.current = motionMatch.label;
      setLabel(motionMatch.label);
      return;
    }
    const staticMatch = STATIC_ANCHORS.find(
      (anchor) => anchor.label === normalizedWord,
    );
    if (staticMatch) {
      setMode("static");
      setSelectedStaticLabel(staticMatch.label);
      labelRef.current = staticMatch.label;
      setLabel(staticMatch.label);
    }
  }, [focusedEntry]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    const camera = new THREE.PerspectiveCamera(
      DEFAULT_CAMERA.fov ?? 42,
      width / height,
      0.1,
      100,
    );
    camera.position.set(...DEFAULT_CAMERA.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.touchAction = "none";
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.4;
    controls.maxDistance = 6;
    controls.target.set(0, 0, 0);
    controls.update();

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
    mainLight.position.set(3, 4, 2);
    scene.add(mainLight);

    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: cubeFaceColor,
      transparent: true,
      opacity: 0.12,
      roughness: 0.9,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(cubeGeometry);
    const edgeLines = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        color: cubeLineColor,
        transparent: true,
        opacity: 0.7,
      }),
    );
    scene.add(edgeLines);

    const labelTextures: THREE.Texture[] = [];
    if (ui.directionFront) {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255,255,255,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#4b5563";
        ctx.font = "bold 46px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(ui.directionFront, canvas.width / 2, canvas.height / 2);
        const texture = new THREE.CanvasTexture(canvas);
        labelTextures.push(texture);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.9,
        });
        const labelWidth = cubeSize * 0.5;
        const labelHeight = cubeSize * 0.26;
        const geometry = new THREE.PlaneGeometry(labelWidth, labelHeight);
        const mesh = new THREE.Mesh(geometry, material);
        const zOffset = cubeSize / 2 + 0.002;
        mesh.position.set(0, 0, zOffset);
        scene.add(mesh);
      }
    }

    const ballGeometry = new THREE.SphereGeometry(ballRadius, 48, 48);
    const ballMaterial = new THREE.MeshStandardMaterial({
      color: ballColor,
      roughness: 0.3,
      metalness: 0.15,
      emissive: new THREE.Color(0x2b155f),
      emissiveIntensity: 0.22,
    });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(0, 0, 0);
    scene.add(ball);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const dragPlane = new THREE.Plane();
    const planeNormal = new THREE.Vector3();
    const lastPosition = new THREE.Vector3();
    let dragging = false;

    const motionSamples: MotionSample[] = MOTIONS.map((motion) => {
      const points = motion.path.map((entry) => new THREE.Vector3(...entry));
      const curve = new THREE.CatmullRomCurve3(
        points,
        Boolean(motion.closed),
        "centripetal",
      );
      const samples = Array.from({ length: 72 }, (_, index) => {
        const t = index / 71;
        return curve.getPointAt(t);
      });
      return {
        label: motion.label,
        curve,
        closed: Boolean(motion.closed),
        samples,
      };
    });
    const findMotionByLabel = (value: string) =>
      motionSamples.find((motion) => motion.label === value) ?? motionSamples[0];

    const pathMaterial = new THREE.LineDashedMaterial({
      color: 0x9ca3af,
      transparent: true,
      opacity: 0.9,
      dashSize: 0.09,
      gapSize: 0.08,
    });
    const arrowGeometry = new THREE.ConeGeometry(0.08, 0.2, 18);
    const arrowMaterial = new THREE.MeshBasicMaterial({
      color: 0x9ca3af,
      transparent: true,
      opacity: 0.95,
    });
    const motionArrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    motionArrow.visible = false;
    scene.add(motionArrow);
    const arrowBaseAxis = new THREE.Vector3(0, 1, 0);
    let pathLine: THREE.Line | THREE.LineLoop | null = null;
    let activeMotionLabel: string | null = null;

    const placeMotionArrow = (points: THREE.Vector3[], closed: boolean) => {
      if (points.length < 2) {
        motionArrow.visible = false;
        return;
      }
      const endIndex = closed
        ? Math.max(1, Math.floor(points.length * 0.72))
        : points.length - 1;
      const prevIndex = Math.max(0, endIndex - 1);
      const endPoint = points[endIndex];
      const prevPoint = points[prevIndex];
      const direction = endPoint.clone().sub(prevPoint);
      if (direction.lengthSq() < 0.000001) {
        motionArrow.visible = false;
        return;
      }
      direction.normalize();
      motionArrow.position.copy(endPoint).add(direction.clone().multiplyScalar(0.06));
      motionArrow.quaternion.setFromUnitVectors(arrowBaseAxis, direction);
      motionArrow.visible = true;
    };

    const setRenderedMotion = (motion: MotionSample | null) => {
      if (motion?.label === activeMotionLabel) return;
      activeMotionLabel = motion?.label ?? null;
      if (pathLine) {
        scene.remove(pathLine);
        pathLine.geometry.dispose();
        pathLine = null;
      }
      if (!motion) {
        motionArrow.visible = false;
        return;
      }
      const points = motion.curve.getPoints(60);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      pathLine = motion.closed
        ? new THREE.LineLoop(geometry, pathMaterial)
        : new THREE.Line(geometry, pathMaterial);
      pathLine.computeLineDistances();
      scene.add(pathLine);
      placeMotionArrow(points, motion.closed);
    };

    const setLabelSafe = (nextLabel: string) => {
      if (labelRef.current === nextLabel) return;
      labelRef.current = nextLabel;
      setLabel(nextLabel);
    };

    const activateStaticMode = () => {
      const selectedAnchor =
        STATIC_ANCHORS.find((anchor) => anchor.label === selectedStaticLabel) ??
        STATIC_ANCHORS[0];
      if (selectedAnchor) {
        const [x, y, z] = selectedAnchor.point;
        ball.position.set(x, y, z);
      } else {
        ball.position.set(0, 0, 0);
      }
      lastPosition.copy(ball.position);
      setRenderedMotion(null);
      setLabelSafe(getStaticPrepositionLabel(ball.position));
    };

    const activateDynamicMode = () => {
      const selectedMotion = findMotionByLabel(selectedMotionLabel);
      if (!selectedMotion) return;
      const startPoint = selectedMotion.curve.getPointAt(0);
      ball.position.copy(startPoint);
      lastPosition.copy(startPoint);
      setRenderedMotion(selectedMotion);
      setLabelSafe(selectedMotion.label);
    };

    const updateByMode = (position: THREE.Vector3) => {
      if (mode === "dynamic") {
        const selectedMotion = findMotionByLabel(selectedMotionLabel);
        if (!selectedMotion) return;
        setRenderedMotion(selectedMotion);
        setLabelSafe(selectedMotion.label);
        return;
      }

      setRenderedMotion(null);
      setLabelSafe(getStaticPrepositionLabel(position));
    };
    if (mode === "dynamic") {
      activateDynamicMode();
    } else {
      activateStaticMode();
    }

    const setPointerFromEvent = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerDown = (event: PointerEvent) => {
      setPointerFromEvent(event);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(ball);
      if (hits.length) {
        dragging = true;
        controls.enabled = false;
        camera.getWorldDirection(planeNormal);
        dragPlane.setFromNormalAndCoplanarPoint(planeNormal, ball.position);
        lastPosition.copy(ball.position);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      setPointerFromEvent(event);
      raycaster.setFromCamera(pointer, camera);
      const target = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(dragPlane, target)) {
        if (mode === "dynamic") {
          const selectedMotion = findMotionByLabel(selectedMotionLabel);
          if (selectedMotion) {
            const nearestPoint = getNearestPointOnMotionPath(target, selectedMotion);
            const velocity = nearestPoint.clone().sub(lastPosition);
            ball.position.copy(nearestPoint);
            if (velocity.lengthSq() > 0.000001) {
              updateByMode(ball.position);
            }
            lastPosition.copy(nearestPoint);
            return;
          }
        }

        const clampedTarget = target.set(
          clamp(target.x, -bounds.x, bounds.x),
          clamp(target.y, -bounds.y, bounds.y),
          clamp(target.z, -bounds.z, bounds.z),
        );
        ball.position.copy(clampedTarget);
        updateByMode(ball.position);
        lastPosition.copy(clampedTarget);
      }
    };

    const handlePointerUp = () => {
      dragging = false;
      controls.enabled = true;
    };

    renderer.domElement.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    let frame = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const nextWidth = entry.contentRect.width;
      const nextHeight = entry.contentRect.height;
      if (nextWidth === 0 || nextHeight === 0) return;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    });
    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      if (pathLine) {
        pathLine.geometry.dispose();
      }
      controls.dispose();
      renderer.dispose();
      ballGeometry.dispose();
      ballMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      edges.dispose();
      arrowGeometry.dispose();
      arrowMaterial.dispose();
      pathMaterial.dispose();
      labelTextures.forEach((texture) => texture.dispose());
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, [locale, mode, selectedMotionLabel, selectedStaticLabel, ui.directionFront]);

  useEffect(() => {
    if (mode === "dynamic") return;
    const defaultLabel = STATIC_ANCHORS[0]?.label ?? "in";
    if (labelRef.current === defaultLabel) return;
    labelRef.current = defaultLabel;
    setLabel(defaultLabel);
  }, [mode]);

  return (
    <section className="space-y-5">
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 shadow-[var(--shadow-soft)]">
        <div className="grid gap-0 md:grid-cols-3">
          <div className="border-b border-[color:var(--color-edge)] px-6 py-5 md:col-span-1 md:border-b-0 md:border-r">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setMode("static")}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  mode === "static"
                    ? "border-2 border-[color:var(--color-accent)] bg-white text-[color:var(--color-accent)]"
                    : "border-[color:var(--color-edge)] bg-white/70 text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)]/60"
                }`}
              >
                {ui.playgroundModeStatic}
              </button>
              <button
                type="button"
                onClick={() => setMode("dynamic")}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  mode === "dynamic"
                    ? "border-2 border-[color:var(--color-accent)] bg-white text-[color:var(--color-accent)]"
                    : "border-[color:var(--color-edge)] bg-white/70 text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)]/60"
                }`}
              >
                {ui.playgroundModeDynamic}
              </button>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-[color:var(--color-ink)]">
              {label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
              {labelMeaning}
            </p>
            {mode === "dynamic" ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {MOTIONS.map((motion) => (
                  <button
                    key={motion.label}
                    type="button"
                    onClick={() => setSelectedMotionLabel(motion.label)}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition ${
                      selectedMotionLabel === motion.label
                        ? "border-2 border-[color:var(--color-accent)] bg-white text-[color:var(--color-accent)]"
                        : "border-[color:var(--color-edge)] bg-white/75 text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)]/60"
                    }`}
                  >
                    {motion.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div className="relative md:col-span-2">
            <p className="pointer-events-none absolute left-4 top-4 z-10 text-xs text-[color:var(--color-muted)]">
              {sceneHint}
            </p>
            <div
              ref={containerRef}
              className="relative h-[320px] w-full overflow-hidden bg-white/60 md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
