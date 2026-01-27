export type Locale = "en" | "zh-CN";

export type SceneVariant = "singleCube" | "twoCubes" | "ringCubes";

export type SceneRenderOptions = {
  showGround?: boolean;
  shadows?: boolean;
  wireframeStyle?: "edges" | "edges+faces";
};

export type SceneConfig = {
  cube: {
    size: number;
    position: [number, number, number];
  };
  ball: {
    radius: number;
    position: [number, number, number];
  };
  camera: {
    position: [number, number, number];
    target: [number, number, number];
    fov?: number;
  };
  render?: SceneRenderOptions;
  variant?: SceneVariant;
  animation?: {
    type: "path" | "keyframes";
    duration: number;
    from?: [number, number, number];
    to?: [number, number, number];
    path?: [number, number, number][];
    closed?: boolean;
    loop?: boolean;
  };
};

export type PrepositionEntry = {
  id: string;
  word: string;
  tags: string[];
  sense: "space";
  i18n: Record<Locale, { meaning: string; tips?: string[] }>;
  examples: Array<{
    en: string;
    i18n: Record<Locale, { translation: string }>;
  }>;
  relatedIds: string[];
  scene: SceneConfig;
};
