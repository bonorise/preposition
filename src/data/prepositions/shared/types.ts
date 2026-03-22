import type {
  LearningCategory,
  Locale,
  PrepositionCollocationGroup,
  PrepositionEntry,
  PrepositionExample,
  PrepositionFaqItem,
  PrepositionMistakeItem,
  PrepositionQuizItem,
  SceneConfig,
} from "@/data/types";

export type PrepositionMeta = {
  id: string;
  word: string;
  tags: string[];
  sense: "space";
  relatedIds: string[];
};

export type PrepositionSceneModule = {
  scene: SceneConfig;
  scenesByCategory?: Partial<Record<LearningCategory, SceneConfig>>;
};

export type LocalizedComparison = NonNullable<
  NonNullable<PrepositionEntry["comparison"]>["i18n"][Locale]
>;

export type LocalizedPrepositionContent = {
  meaning: string;
  cardMeaning?: string;
  tips?: string[];
  examples: PrepositionExample[];
  examplesByCategory?: Partial<Record<LearningCategory, PrepositionExample[]>>;
  comparison?: LocalizedComparison;
  collocations?: string[];
  collocationGroups?: PrepositionCollocationGroup[];
  commonMistakes?: PrepositionMistakeItem[];
  quiz?: PrepositionQuizItem[];
  faq?: PrepositionFaqItem[];
};

export type PrepositionModule = {
  meta: PrepositionMeta;
  scene: PrepositionSceneModule;
  content: Partial<Record<Locale, LocalizedPrepositionContent>>;
};
