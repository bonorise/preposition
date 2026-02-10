"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import type { PrepositionEntry, SceneConfig, TimeAxisConfig } from "@/data/types";
import { cn } from "@/lib/utils";

export type ViewerHandle = {
  reset: () => void;
  playAnimation?: () => void;
};

type PrepositionViewer3DProps = {
  entry: PrepositionEntry;
  sceneOverride?: SceneConfig;
  frontLabel?: string;
  showGroundOverride?: boolean;
  className?: string;
};

const cubeLineColor = 0x0f1c2e;
const cubeFaceColor = 0xffffff;
const ballColor = 0x7c3aed;
const groundColor = 0xe6e6e6;
const motionPathColor = 0x9ca3af;
const timelineBaseColor = 0x9ca3af;
const timelineActiveColor = 0x0f172a;
const timelineMarkerColor = 0x64748b;
const animationEase = (t: number) => t * t * (3 - 2 * t);

const timelineXStart = -1.35;
const timelineXEnd = 1.35;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function toTimelineX(position: number) {
  const t = clamp01(position);
  return timelineXStart + (timelineXEnd - timelineXStart) * t;
}

function resolveAnimationPath(scene: SceneConfig) {
  const animation = scene.animation;
  if (!animation || animation.type !== "path") return null;

  const durationMs = Math.max(animation.duration, 0.1) * 1000;
  if (animation.path && animation.path.length >= 2) {
    const points = animation.path.map((point) => new THREE.Vector3(...point));
    return {
      durationMs,
      curve: new THREE.CatmullRomCurve3(
        points,
        Boolean(animation.closed),
        "centripetal",
      ),
      start: points[0],
      end: points[points.length - 1],
      loop: animation.loop ?? true,
    };
  }

  const end = animation.to ?? scene.ball.position;
  const start = animation.from ?? scene.ball.position;
  return {
    start: new THREE.Vector3(...start),
    end: new THREE.Vector3(...end),
    durationMs,
    loop: animation.loop ?? true,
  };
}

function buildCubeGroup(scene: SceneConfig) {
  const group = new THREE.Group();
  const variant = scene.variant ?? "singleCube";
  const size = scene.cube.size;
  const center = new THREE.Vector3(...scene.cube.position);
  const wireframeStyle = scene.render?.wireframeStyle ?? "edges+faces";
  const offsets: Array<[number, number, number]> = [];

  if (variant === "singleCube") {
    offsets.push([0, 0, 0]);
  } else if (variant === "twoCubes") {
    offsets.push([-0.9, 0, 0], [0.9, 0, 0]);
  } else {
    const radius = 1.1;
    const count = 4;
    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count;
      offsets.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
  }

  const lineMaterial = new THREE.LineBasicMaterial({
    color: cubeLineColor,
    transparent: true,
    opacity: 0.65,
  });
  const faceMaterial = new THREE.MeshStandardMaterial({
    color: cubeFaceColor,
    transparent: true,
    opacity: wireframeStyle === "edges+faces" ? 0.12 : 0,
    roughness: 0.9,
    metalness: 0,
  });

  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [lineMaterial, faceMaterial];

  offsets.forEach((offset) => {
    const geometry = new THREE.BoxGeometry(size, size, size);
    geometries.push(geometry);

    const cubeGroup = new THREE.Group();
    if (wireframeStyle !== "edges") {
      const faces = new THREE.Mesh(geometry, faceMaterial);
      faces.renderOrder = 0;
      cubeGroup.add(faces);
    }

    const edges = new THREE.EdgesGeometry(geometry);
    geometries.push(edges);
    const lines = new THREE.LineSegments(edges, lineMaterial);
    lines.renderOrder = 1;
    cubeGroup.add(lines);

    cubeGroup.position.set(
      center.x + offset[0],
      center.y + offset[1],
      center.z + offset[2],
    );
    group.add(cubeGroup);
  });

  return { group, geometries, materials };
}

function createLabelMesh({
  text,
  width,
  height,
  fontSize,
  renderer,
  color = "#475569",
}: {
  text: string;
  width: number;
  height: number;
  fontSize: number;
  renderer: THREE.WebGLRenderer;
  color?: string;
}) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 192;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  const geometry = new THREE.PlaneGeometry(width, height);
  const mesh = new THREE.Mesh(geometry, material);

  return { mesh, geometry, material, texture };
}

function pushLine(
  group: THREE.Group,
  points: THREE.Vector3[],
  material: THREE.Material,
  geometries: THREE.BufferGeometry[],
) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  geometries.push(geometry);
  const line = new THREE.Line(geometry, material);
  group.add(line);
}

function buildTimeAxisGroup({
  timeAxis,
  renderer,
}: {
  timeAxis: TimeAxisConfig;
  renderer: THREE.WebGLRenderer;
}) {
  const group = new THREE.Group();
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const textures: THREE.Texture[] = [];

  const axisY = 0;

  const baseMaterial = new THREE.LineBasicMaterial({
    color: timelineBaseColor,
    transparent: true,
    opacity: 0.9,
  });
  materials.push(baseMaterial);
  pushLine(
    group,
    [
      new THREE.Vector3(timelineXStart, axisY, 0),
      new THREE.Vector3(timelineXEnd, axisY, 0),
    ],
    baseMaterial,
    geometries,
  );

  const start = clamp01(timeAxis.rangeStart ?? 0);
  const end = clamp01(timeAxis.rangeEnd ?? 1);
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);

  const hasRange =
    typeof timeAxis.rangeStart === "number" || typeof timeAxis.rangeEnd === "number";
  if (hasRange) {
    const activeMaterial = new THREE.LineBasicMaterial({
      color: timelineActiveColor,
      transparent: true,
      opacity: 0.95,
    });
    materials.push(activeMaterial);
    pushLine(
      group,
      [
        new THREE.Vector3(toTimelineX(rangeStart), axisY, 0),
        new THREE.Vector3(toTimelineX(rangeEnd), axisY, 0),
      ],
      activeMaterial,
      geometries,
    );
  }

  const tickMaterial = new THREE.LineBasicMaterial({
    color: timelineMarkerColor,
    transparent: true,
    opacity: 0.8,
  });
  materials.push(tickMaterial);

  const tickSet = new Set<number>([0, 1]);
  if (hasRange) {
    tickSet.add(rangeStart);
    tickSet.add(rangeEnd);
  }

  const referenceByKind: Partial<Record<TimeAxisConfig["kind"], number>> = {
    point: timeAxis.rangeStart ?? timeAxis.rangeEnd ?? 0.5,
    deadline: timeAxis.rangeEnd ?? timeAxis.rangeStart ?? 0.75,
    threshold: timeAxis.rangeEnd ?? timeAxis.rangeStart ?? 0.67,
    after: timeAxis.rangeStart ?? timeAxis.rangeEnd ?? 0.5,
  };
  const referencePosition = referenceByKind[timeAxis.kind];
  if (typeof referencePosition === "number") {
    tickSet.add(clamp01(referencePosition));
  }

  tickSet.forEach((tick) => {
    const x = toTimelineX(tick);
    pushLine(
      group,
      [new THREE.Vector3(x, axisY - 0.09, 0), new THREE.Vector3(x, axisY + 0.09, 0)],
      tickMaterial,
      geometries,
    );
  });

  if (typeof referencePosition === "number") {
    const referenceX = toTimelineX(referencePosition);
    const referenceMaterial = new THREE.LineDashedMaterial({
      color: timelineMarkerColor,
      transparent: true,
      opacity: 0.7,
      dashSize: 0.06,
      gapSize: 0.045,
    });
    materials.push(referenceMaterial);
    const referenceGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(referenceX, axisY - 0.24, 0),
      new THREE.Vector3(referenceX, axisY + 0.24, 0),
    ]);
    geometries.push(referenceGeometry);
    const referenceLine = new THREE.Line(referenceGeometry, referenceMaterial);
    referenceLine.computeLineDistances();
    group.add(referenceLine);
  }

  const addLabel = ({
    text,
    normalized,
    y,
    fontSize,
  }: {
    text?: string;
    normalized: number;
    y: number;
    fontSize: number;
  }) => {
    if (!text) return;
    const result = createLabelMesh({
      text,
      width: 0.86,
      height: 0.22,
      fontSize,
      renderer,
    });
    if (!result) return;
    result.mesh.position.set(toTimelineX(normalized), y, 0.02);
    group.add(result.mesh);
    geometries.push(result.geometry);
    materials.push(result.material);
    textures.push(result.texture);
  };

  addLabel({
    text: timeAxis.markerStartLabel,
    normalized: hasRange ? rangeStart : 0,
    y: -0.24,
    fontSize: 36,
  });
  addLabel({
    text: timeAxis.markerEndLabel,
    normalized: hasRange ? rangeEnd : 1,
    y: -0.24,
    fontSize: 36,
  });

  const center = hasRange
    ? (rangeStart + rangeEnd) / 2
    : clamp01(timeAxis.dotPosition);
  addLabel({
    text: timeAxis.centerLabel,
    normalized: center,
    y: 0.27,
    fontSize: 40,
  });

  const ballPosition = new THREE.Vector3(toTimelineX(timeAxis.dotPosition), axisY, 0);

  return {
    group,
    geometries,
    materials,
    textures,
    ballPosition,
  };
}

const PrepositionViewer3D = forwardRef<ViewerHandle, PrepositionViewer3DProps>(
  ({ entry, sceneOverride, frontLabel, showGroundOverride, className }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<{
      isPlaying: boolean;
      startTime: number;
      durationMs: number;
      start: THREE.Vector3;
      end: THREE.Vector3;
      rest: THREE.Vector3;
      ball: THREE.Mesh;
      curve?: THREE.CatmullRomCurve3;
      loop: boolean;
    } | null>(null);
    const resetRef = useRef<{
      camera: SceneConfig["camera"];
      target: THREE.Vector3;
      controls?: OrbitControls;
      cameraInstance?: THREE.PerspectiveCamera;
    } | null>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (!resetRef.current?.cameraInstance || !resetRef.current?.controls) {
          return;
        }
        const { camera, target, cameraInstance, controls } = resetRef.current;
        cameraInstance.position.set(...camera.position);
        cameraInstance.fov = camera.fov ?? cameraInstance.fov;
        cameraInstance.updateProjectionMatrix();
        controls.target.copy(target);
        controls.update();
      },
      playAnimation: () => {
        const state = animationRef.current;
        if (!state) return;
        state.isPlaying = true;
        state.startTime = performance.now();
        if (state.curve) {
          state.ball.position.copy(state.curve.getPointAt(0));
        } else {
          state.ball.position.copy(state.start);
        }
      },
    }));

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return undefined;

      const sceneConfig = sceneOverride ?? entry.scene;
      const scene = new THREE.Scene();
      const { camera: cameraConfig } = sceneConfig;

      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      const camera = new THREE.PerspectiveCamera(
        cameraConfig.fov ?? 42,
        width / height,
        0.1,
        100,
      );
      camera.position.set(...cameraConfig.position);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      const showGround =
        typeof showGroundOverride === "boolean"
          ? showGroundOverride
          : (sceneConfig.render?.showGround ?? true);
      const enableShadows = sceneConfig.render?.shadows ?? false;

      renderer.shadowMap.enabled = enableShadows;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.minDistance = 1.4;
      controls.maxDistance = 6;
      controls.target.set(...cameraConfig.target);
      controls.update();

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);
      const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
      mainLight.position.set(3, 4, 2);
      mainLight.castShadow = enableShadows;
      scene.add(mainLight);

      const geometries: THREE.BufferGeometry[] = [];
      const materials: THREE.Material[] = [];
      const textures: THREE.Texture[] = [];

      let structureGroup: THREE.Group | null = null;
      let ballPosition = new THREE.Vector3(...sceneConfig.ball.position);

      if (sceneConfig.timeAxis) {
        const timeline = buildTimeAxisGroup({
          timeAxis: sceneConfig.timeAxis,
          renderer,
        });
        structureGroup = timeline.group;
        geometries.push(...timeline.geometries);
        materials.push(...timeline.materials);
        textures.push(...timeline.textures);
        ballPosition = timeline.ballPosition.clone();
        scene.add(structureGroup);
      } else {
        const cubeResult = buildCubeGroup(sceneConfig);
        structureGroup = cubeResult.group;
        geometries.push(...cubeResult.geometries);
        materials.push(...cubeResult.materials);
        scene.add(structureGroup);

        const frontLabelText = frontLabel ?? "前";
        if (frontLabelText) {
          const frontLabelMesh = createLabelMesh({
            text: frontLabelText,
            width: sceneConfig.cube.size * 0.5,
            height: sceneConfig.cube.size * 0.26,
            fontSize: 96,
            renderer,
            color: "#4b5563",
          });
          if (frontLabelMesh) {
            const zOffset = sceneConfig.cube.size / 2 + 0.002;
            frontLabelMesh.mesh.position.set(
              sceneConfig.cube.position[0],
              sceneConfig.cube.position[1],
              sceneConfig.cube.position[2] + zOffset,
            );
            structureGroup.add(frontLabelMesh.mesh);
            geometries.push(frontLabelMesh.geometry);
            materials.push(frontLabelMesh.material);
            textures.push(frontLabelMesh.texture);
          }
        }
      }

      const ballMaterial = new THREE.MeshStandardMaterial({
        color: ballColor,
        roughness: 0.3,
        metalness: 0.15,
        emissive: new THREE.Color(0x2b155f),
        emissiveIntensity: 0.22,
      });
      materials.push(ballMaterial);
      const ballGeometry = new THREE.SphereGeometry(sceneConfig.ball.radius, 48, 48);
      geometries.push(ballGeometry);
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.copy(ballPosition);
      ball.castShadow = enableShadows;
      scene.add(ball);

      const animationPath = resolveAnimationPath(sceneConfig);
      if (animationPath) {
        const startTime = performance.now();
        animationRef.current = {
          isPlaying: true,
          startTime,
          durationMs: animationPath.durationMs,
          start: animationPath.start,
          end: animationPath.end,
          rest: ballPosition.clone(),
          ball,
          curve: animationPath.curve,
          loop: animationPath.loop,
        };

        const pathPoints = animationPath.curve
          ? animationPath.curve.getPoints(72)
          : [animationPath.start.clone(), animationPath.end.clone()];
        if (pathPoints.length >= 2) {
          const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
          const pathMaterial = new THREE.LineDashedMaterial({
            color: motionPathColor,
            transparent: true,
            opacity: 0.85,
            dashSize: 0.1,
            gapSize: 0.09,
          });
          geometries.push(pathGeometry);
          materials.push(pathMaterial);
          const isClosedPath = Boolean(sceneConfig.animation?.closed);
          const pathLine = isClosedPath
            ? new THREE.LineLoop(pathGeometry, pathMaterial)
            : new THREE.Line(pathGeometry, pathMaterial);
          pathLine.computeLineDistances();
          pathLine.renderOrder = 2;
          scene.add(pathLine);

          const endIndex = isClosedPath
            ? Math.max(1, Math.floor(pathPoints.length * 0.72))
            : pathPoints.length - 1;
          const prevIndex = Math.max(0, endIndex - 1);
          const endPoint = pathPoints[endIndex];
          const prevPoint = pathPoints[prevIndex];
          const direction = endPoint.clone().sub(prevPoint);
          if (direction.lengthSq() > 0.000001) {
            direction.normalize();
            const arrowGeometry = new THREE.ConeGeometry(0.075, 0.2, 18);
            const arrowMaterial = new THREE.MeshBasicMaterial({
              color: motionPathColor,
              transparent: true,
              opacity: 0.95,
            });
            geometries.push(arrowGeometry);
            materials.push(arrowMaterial);
            const motionArrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
            motionArrow.position
              .copy(endPoint)
              .add(direction.clone().multiplyScalar(0.06));
            motionArrow.quaternion.setFromUnitVectors(
              new THREE.Vector3(0, 1, 0),
              direction,
            );
            motionArrow.renderOrder = 3;
            scene.add(motionArrow);
          }
        }
      } else {
        animationRef.current = null;
      }

      let ground: THREE.Mesh | null = null;
      if (showGround) {
        const groundGeometry = new THREE.PlaneGeometry(6, 6);
        const groundMaterial = new THREE.MeshBasicMaterial({
          color: groundColor,
          transparent: true,
          opacity: 1,
        });
        materials.push(groundMaterial);
        geometries.push(groundGeometry);
        ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        const cubeBottom = sceneConfig.timeAxis
          ? ballPosition.y - sceneConfig.ball.radius
          : sceneConfig.cube.position[1] - sceneConfig.cube.size / 2;
        const ballBottom = ballPosition.y - sceneConfig.ball.radius;
        const groundY = Math.min(cubeBottom, ballBottom) - 0.08;
        ground.position.y = groundY;
        ground.receiveShadow = enableShadows;
        scene.add(ground);
      }

      resetRef.current = {
        camera: cameraConfig,
        target: new THREE.Vector3(...cameraConfig.target),
        controls,
        cameraInstance: camera,
      };

      let animationFrame = 0;
      const animate = () => {
        animationFrame = window.requestAnimationFrame(animate);
        const animationState = animationRef.current;
        if (animationState?.isPlaying) {
          const elapsed = performance.now() - animationState.startTime;
          const progress = Math.min(elapsed / animationState.durationMs, 1);
          const eased = animationEase(progress);
          if (animationState.curve) {
            animationState.ball.position.copy(
              animationState.curve.getPointAt(eased),
            );
          } else {
            animationState.ball.position.lerpVectors(
              animationState.start,
              animationState.end,
              eased,
            );
          }
          if (progress >= 1) {
            if (animationState.loop) {
              animationState.startTime = performance.now();
              if (animationState.curve) {
                animationState.ball.position.copy(
                  animationState.curve.getPointAt(0),
                );
              } else {
                animationState.ball.position.copy(animationState.start);
              }
            } else {
              animationState.isPlaying = false;
              animationState.ball.position.copy(animationState.rest);
            }
          }
        }
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const resizeObserver = new ResizeObserver((entries) => {
        const entryBox = entries[0];
        if (!entryBox) return;
        const observerWidth = entryBox.contentRect.width;
        const observerHeight = entryBox.contentRect.height;
        if (observerWidth === 0 || observerHeight === 0) return;
        camera.aspect = observerWidth / observerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(observerWidth, observerHeight);
      });
      resizeObserver.observe(container);

      return () => {
        window.cancelAnimationFrame(animationFrame);
        resizeObserver.disconnect();
        controls.dispose();
        renderer.dispose();
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        textures.forEach((texture) => texture.dispose());
        if (ground) {
          scene.remove(ground);
        }
        if (structureGroup) {
          scene.remove(structureGroup);
        }
        scene.remove(ball);
        scene.clear();
        animationRef.current = null;
        if (renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }, [entry, sceneOverride, frontLabel, showGroundOverride]);

    return (
      <div
        ref={containerRef}
        data-viewer="preposition"
        className={cn(
          "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-white/60",
          className ?? "h-[320px] md:h-[420px] lg:h-[460px]",
        )}
      />
    );
  },
);

PrepositionViewer3D.displayName = "PrepositionViewer3D";

export default PrepositionViewer3D;
