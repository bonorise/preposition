import type { SceneConfig } from "@/data/types";

export const DEFAULT_CUBE = {
  size: 1,
  position: [0, 0, 0] as [number, number, number],
};

export const DEFAULT_CAMERA: SceneConfig["camera"] = {
  position: [2.4, 1.7, 2.4],
  target: [0, 0, 0],
  fov: 42,
};

export const DEFAULT_RENDER: Required<SceneConfig>["render"] = {
  showGround: true,
  shadows: false,
  wireframeStyle: "edges+faces",
};

export function withSceneDefaults(scene: SceneConfig): SceneConfig {
  return {
    ...scene,
    cube: scene.cube ?? DEFAULT_CUBE,
    camera: scene.camera ?? DEFAULT_CAMERA,
    render: {
      ...DEFAULT_RENDER,
      ...(scene.render ?? {}),
    },
    variant: scene.variant ?? "singleCube",
  };
}
