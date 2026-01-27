"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import type { PrepositionEntry, SceneConfig } from "@/data/types";

export type ViewerHandle = {
  reset: () => void;
  playAnimation?: () => void;
};

type PrepositionViewer3DProps = {
  entry: PrepositionEntry;
  frontLabel?: string;
  showGroundOverride?: boolean;
};

const cubeLineColor = 0x0f1c2e;
const cubeFaceColor = 0xffffff;
const ballColor = 0x7c3aed;
const groundColor = 0xe6e6e6;
const animationEase = (t: number) => t * t * (3 - 2 * t);

function resolveAnimationPath(scene: SceneConfig) {
  const animation = scene.animation;
  if (!animation || animation.type !== "path") return null;

  const durationMs = Math.max(animation.duration, 0.1) * 1000;
  if (animation.path && animation.path.length >= 2) {
    const points = animation.path.map(
      (point) => new THREE.Vector3(...point),
    );
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

const PrepositionViewer3D = forwardRef<ViewerHandle, PrepositionViewer3DProps>(
  ({ entry, frontLabel, showGroundOverride }, ref) => {
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

      const scene = new THREE.Scene();
      const { camera: cameraConfig } = entry.scene;

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
          : (entry.scene.render?.showGround ?? true);
      const enableShadows = entry.scene.render?.shadows ?? false;

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

      const { group: cubeGroup, geometries, materials } = buildCubeGroup(
        entry.scene,
      );
      const textures: THREE.Texture[] = [];
      scene.add(cubeGroup);

      const ballMaterial = new THREE.MeshStandardMaterial({
        color: ballColor,
        roughness: 0.3,
        metalness: 0.15,
        emissive: new THREE.Color(0x2b155f),
        emissiveIntensity: 0.22,
      });
      materials.push(ballMaterial);
      const ballGeometry = new THREE.SphereGeometry(
        entry.scene.ball.radius,
        48,
        48,
      );
      geometries.push(ballGeometry);
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.set(...entry.scene.ball.position);
      ball.castShadow = enableShadows;
      scene.add(ball);

      const animationPath = resolveAnimationPath(entry.scene);
      if (animationPath) {
        const startTime = performance.now();
        animationRef.current = {
          isPlaying: true,
          startTime,
          durationMs: animationPath.durationMs,
          start: animationPath.start,
          end: animationPath.end,
          rest: new THREE.Vector3(...entry.scene.ball.position),
          ball,
          curve: animationPath.curve,
          loop: animationPath.loop,
        };
      } else {
        animationRef.current = null;
      }

      const frontLabelText = frontLabel ?? "前";
      if (frontLabelText) {
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
          ctx.fillText(frontLabelText, canvas.width / 2, canvas.height / 2);
          const texture = new THREE.CanvasTexture(canvas);
          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.9,
          });
          const labelWidth = entry.scene.cube.size * 0.5;
          const labelHeight = entry.scene.cube.size * 0.26;
          const geometry = new THREE.PlaneGeometry(labelWidth, labelHeight);
          const mesh = new THREE.Mesh(geometry, material);
          const zOffset = entry.scene.cube.size / 2 + 0.002;
          mesh.position.set(
            entry.scene.cube.position[0],
            entry.scene.cube.position[1],
            entry.scene.cube.position[2] + zOffset,
          );
          cubeGroup.add(mesh);
          materials.push(material);
          geometries.push(geometry);
          textures.push(texture);
        }
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
        const cubeBottom =
          entry.scene.cube.position[1] - entry.scene.cube.size / 2;
        const ballBottom = entry.scene.ball.position[1] - entry.scene.ball.radius;
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
        const width = entryBox.contentRect.width;
        const height = entryBox.contentRect.height;
        if (width === 0 || height === 0) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
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
        scene.remove(cubeGroup);
        scene.remove(ball);
        scene.clear();
        animationRef.current = null;
        if (renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }, [entry, frontLabel, showGroundOverride]);

    return (
      <div
        ref={containerRef}
        data-viewer="preposition"
        className="relative h-[320px] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/60 md:h-[420px] lg:h-[460px]"
      />
    );
  },
);

PrepositionViewer3D.displayName = "PrepositionViewer3D";

export default PrepositionViewer3D;
