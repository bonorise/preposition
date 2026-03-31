export type Locale = "en" | "zh-CN";
export type LearningCategory = "space" | "time" | "dynamic" | "abstract";

export type SceneVariant = "singleCube" | "twoCubes" | "ringCubes";

export type TimeAxisKind =
  | "point"
  | "range"
  | "duration"
  | "deadline"
  | "threshold"
  | "after";

export type TimeAxisConfig = {
  kind: TimeAxisKind;
  dotPosition: number;
  rangeStart?: number;
  rangeEnd?: number;
  markerStartLabel?: string;
  markerEndLabel?: string;
  centerLabel?: string;
};

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
  timeAxis?: TimeAxisConfig;
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

export type PrepositionExample = {
  en: string;
  i18n: Record<Locale, { translation: string }>;
};

export type PrepositionMistakeItem = {
  wrong: string;
  correct: string;
  reason: string;
};

export type PrepositionQuizItem = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type PrepositionFaqItem = {
  question: string;
  answer: string;
};

export type PrepositionMeaningMapBranch = {
  label: string;
  description: string;
  examples?: string[];
};

export type PrepositionMeaningMap = {
  title: string;
  intro: string;
  coreLabel: string;
  coreMeaning: string;
  branches: PrepositionMeaningMapBranch[];
  note?: string;
};

export type PrepositionComparisonVisualMarker =
  | "contact"
  | "hover"
  | "crossing"
  | "below";

export type PrepositionComparisonVisualItem = {
  term: string;
  xRange: [number, number];
  yRange: [number, number];
  marker: PrepositionComparisonVisualMarker;
  note: Record<Locale, string>;
};

export type PrepositionComparisonVisual = {
  type: "vertical-range";
  i18n: Record<
    Locale,
    {
      title: string;
      caption: string;
    }
  >;
  items: PrepositionComparisonVisualItem[];
};

export type PrepositionCollocationGroup = {
  title: string;
  items: Array<
    | string
    | {
        phrase: string;
        meaning?: string;
      }
  >;
};

export type PrepositionEntry = {
  id: string;
  word: string;
  tags: string[];
  sense: "space";
  i18n: Record<Locale, { meaning: string; cardMeaning?: string; tips?: string[] }>;
  examples: PrepositionExample[];
  examplesByCategory?: Partial<Record<LearningCategory, PrepositionExample[]>>;
  relatedIds: string[];
  scene: SceneConfig;
  scenesByCategory?: Partial<Record<LearningCategory, SceneConfig>>;
  comparison?: {
    i18n: Record<
      Locale,
      {
        summary: string;
        differences: Array<{
          term: string;
          description: string;
          examples?: Array<{
            term: string;
            sentence: string;
            translation?: string;
          }>;
        }>;
      }
    >;
  };
  comparisonVisual?: PrepositionComparisonVisual;
  meaningMap?: Record<Locale, PrepositionMeaningMap>;
  collocations?: Record<Locale, string[]>;
  collocationGroups?: Record<Locale, PrepositionCollocationGroup[]>;
  commonMistakes?: Record<Locale, PrepositionMistakeItem[]>;
  quiz?: Record<Locale, PrepositionQuizItem[]>;
  faq?: Record<Locale, PrepositionFaqItem[]>;
};
