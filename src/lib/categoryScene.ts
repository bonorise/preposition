import { getUiText } from "@/data/i18n";
import type {
  LearningCategory,
  Locale,
  PrepositionEntry,
  SceneConfig,
  TimeAxisConfig,
} from "@/data/types";
import {
  isDynamicPreposition,
  isSpatialPreposition,
  isTemporalPreposition,
} from "@/lib/prepositionCategory";
import { withSceneDefaults } from "@/lib/scenePreset";

const TIME_AXIS_WORLD_X_MIN = -1.35;
const TIME_AXIS_WORLD_X_MAX = 1.35;

const TIME_POINT_IDS = new Set(["at", "around", "past"]);
const TIME_RANGE_IDS = new Set(["between", "from", "to", "through"]);
const TIME_DURATION_IDS = new Set(["in", "over", "throughout"]);
const TIME_DEADLINE_IDS = new Set(["by", "ahead-of", "within"]);
const TIME_THRESHOLD_IDS = new Set(["under"]);
const TIME_AFTER_IDS = new Set(["after", "beyond", "behind"]);
const TIME_DATE_IDS = new Set(["on"]);

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function toTuple(
  vec: [number, number, number] | undefined,
  fallback: [number, number, number],
): [number, number, number] {
  if (!vec) return [fallback[0], fallback[1], fallback[2]];
  return [vec[0], vec[1], vec[2]];
}

function cloneAnimation(scene: SceneConfig) {
  if (!scene.animation) return undefined;
  return {
    ...scene.animation,
    from: scene.animation.from ? toTuple(scene.animation.from, [0, 0, 0]) : undefined,
    to: scene.animation.to ? toTuple(scene.animation.to, [0, 0, 0]) : undefined,
    path: scene.animation.path
      ? scene.animation.path.map((point) => toTuple(point, [0, 0, 0]))
      : undefined,
  };
}

function cloneScene(scene: SceneConfig): SceneConfig {
  return {
    ...scene,
    cube: {
      size: scene.cube.size,
      position: toTuple(scene.cube.position, [0, 0, 0]),
    },
    ball: {
      radius: scene.ball.radius,
      position: toTuple(scene.ball.position, [0, 0, 0]),
    },
    camera: {
      position: toTuple(scene.camera.position, [2.4, 1.7, 2.4]),
      target: toTuple(scene.camera.target, [0, 0, 0]),
      fov: scene.camera.fov,
    },
    render: scene.render
      ? {
          ...scene.render,
        }
      : undefined,
    animation: cloneAnimation(scene),
    timeAxis: scene.timeAxis
      ? {
          ...scene.timeAxis,
        }
      : undefined,
  };
}

function toTimelineX(position: number) {
  const t = clamp01(position);
  return TIME_AXIS_WORLD_X_MIN + (TIME_AXIS_WORLD_X_MAX - TIME_AXIS_WORLD_X_MIN) * t;
}

function makeTimeAxisScene(timeAxis: TimeAxisConfig): SceneConfig {
  const dotX = toTimelineX(timeAxis.dotPosition);
  return withSceneDefaults({
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.18,
      position: [dotX, 0, 0],
    },
    camera: {
      position: [0, 1.6, 3.2],
      target: [0, 0, 0],
      fov: 38,
    },
    render: {
      showGround: false,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    timeAxis,
  });
}

function buildTimeScene(entry: PrepositionEntry, locale: Locale): SceneConfig | null {
  if (!isTemporalPreposition(entry)) return null;
  const ui = getUiText(locale);
  const id = entry.id;

  if (TIME_DATE_IDS.has(id)) {
    return makeTimeAxisScene({
      kind: "range",
      dotPosition: 0.5,
      rangeStart: 0.44,
      rangeEnd: 0.56,
      centerLabel: ui.timeAxisLabelDate,
    });
  }

  if (TIME_POINT_IDS.has(id)) {
    if (id === "past") {
      return makeTimeAxisScene({
        kind: "point",
        dotPosition: 0.66,
        rangeStart: 0.5,
        rangeEnd: 0.5,
        markerStartLabel: ui.timeAxisLabelNow,
        centerLabel: ui.timeAxisLabelAfter,
      });
    }
    if (id === "around") {
      return makeTimeAxisScene({
        kind: "point",
        dotPosition: 0.56,
        rangeStart: 0.5,
        rangeEnd: 0.5,
        markerStartLabel: ui.timeAxisLabelNow,
        centerLabel: ui.timeAxisLabelPoint,
      });
    }
    return makeTimeAxisScene({
      kind: "point",
      dotPosition: 0.5,
      rangeStart: 0.5,
      rangeEnd: 0.5,
      markerStartLabel: ui.timeAxisLabelNow,
      centerLabel: ui.timeAxisLabelPoint,
    });
  }

  if (TIME_RANGE_IDS.has(id)) {
    if (id === "from") {
      return makeTimeAxisScene({
        kind: "range",
        dotPosition: 0.22,
        rangeStart: 0.2,
        rangeEnd: 0.8,
        markerStartLabel: ui.timeAxisLabelStart,
        markerEndLabel: ui.timeAxisLabelEnd,
        centerLabel: ui.timeAxisLabelRange,
      });
    }
    if (id === "to") {
      return makeTimeAxisScene({
        kind: "range",
        dotPosition: 0.8,
        rangeStart: 0.2,
        rangeEnd: 0.8,
        markerStartLabel: ui.timeAxisLabelStart,
        markerEndLabel: ui.timeAxisLabelEnd,
        centerLabel: ui.timeAxisLabelRange,
      });
    }
    return makeTimeAxisScene({
      kind: "range",
      dotPosition: 0.5,
      rangeStart: 0.25,
      rangeEnd: 0.75,
      markerStartLabel: ui.timeAxisLabelStart,
      markerEndLabel: ui.timeAxisLabelEnd,
      centerLabel: ui.timeAxisLabelRange,
    });
  }

  if (TIME_DURATION_IDS.has(id)) {
    if (id === "over") {
      return makeTimeAxisScene({
        kind: "duration",
        dotPosition: 0.75,
        rangeStart: 0.22,
        rangeEnd: 0.86,
        markerStartLabel: ui.timeAxisLabelStart,
        markerEndLabel: ui.timeAxisLabelEnd,
        centerLabel: ui.timeAxisLabelDuration,
      });
    }
    if (id === "throughout") {
      return makeTimeAxisScene({
        kind: "duration",
        dotPosition: 0.52,
        rangeStart: 0.18,
        rangeEnd: 0.86,
        markerStartLabel: ui.timeAxisLabelStart,
        markerEndLabel: ui.timeAxisLabelEnd,
        centerLabel: ui.timeAxisLabelDuration,
      });
    }
    return makeTimeAxisScene({
      kind: "duration",
      dotPosition: 0.62,
      rangeStart: 0.24,
      rangeEnd: 0.82,
      markerStartLabel: ui.timeAxisLabelStart,
      markerEndLabel: ui.timeAxisLabelEnd,
      centerLabel: ui.timeAxisLabelDuration,
    });
  }

  if (TIME_DEADLINE_IDS.has(id)) {
    if (id === "within") {
      return makeTimeAxisScene({
        kind: "deadline",
        dotPosition: 0.5,
        rangeStart: 0.22,
        rangeEnd: 0.7,
        markerStartLabel: ui.timeAxisLabelStart,
        markerEndLabel: ui.timeAxisLabelDeadline,
        centerLabel: ui.timeAxisLabelWindow,
      });
    }
    if (id === "ahead-of") {
      return makeTimeAxisScene({
        kind: "deadline",
        dotPosition: 0.45,
        rangeEnd: 0.75,
        markerEndLabel: ui.timeAxisLabelDeadline,
        centerLabel: ui.timeAxisLabelBeforeDeadline,
      });
    }
    return makeTimeAxisScene({
      kind: "deadline",
      dotPosition: 0.6,
      rangeEnd: 0.75,
      markerEndLabel: ui.timeAxisLabelDeadline,
      centerLabel: ui.timeAxisLabelBeforeDeadline,
    });
  }

  if (TIME_THRESHOLD_IDS.has(id)) {
    return makeTimeAxisScene({
      kind: "threshold",
      dotPosition: 0.45,
      rangeEnd: 0.67,
      markerEndLabel: ui.timeAxisLabelLimit,
      centerLabel: ui.timeAxisLabelLimit,
    });
  }

  if (TIME_AFTER_IDS.has(id)) {
    if (id === "beyond") {
      return makeTimeAxisScene({
        kind: "after",
        dotPosition: 0.82,
        rangeStart: 0.55,
        markerStartLabel: ui.timeAxisLabelNow,
        centerLabel: ui.timeAxisLabelAfter,
      });
    }
    if (id === "behind") {
      return makeTimeAxisScene({
        kind: "after",
        dotPosition: 0.64,
        rangeStart: 0.5,
        markerStartLabel: ui.timeAxisLabelNow,
        centerLabel: ui.timeAxisLabelAfter,
      });
    }
    return makeTimeAxisScene({
      kind: "after",
      dotPosition: 0.7,
      rangeStart: 0.5,
      markerStartLabel: ui.timeAxisLabelNow,
      centerLabel: ui.timeAxisLabelAfter,
    });
  }

  return makeTimeAxisScene({
    kind: "duration",
    dotPosition: 0.5,
    rangeStart: 0.2,
    rangeEnd: 0.8,
    markerStartLabel: ui.timeAxisLabelStart,
    markerEndLabel: ui.timeAxisLabelEnd,
    centerLabel: ui.timeAxisLabelDuration,
  });
}

function buildSpaceScene(entry: PrepositionEntry): SceneConfig {
  const scene = cloneScene(entry.scene);
  scene.animation = undefined;
  scene.timeAxis = undefined;
  return withSceneDefaults(scene);
}

function buildDynamicScene(entry: PrepositionEntry): SceneConfig {
  const scene = cloneScene(entry.scene);
  scene.timeAxis = undefined;
  return withSceneDefaults(scene);
}

export function getSceneForCategory(
  entry: PrepositionEntry,
  category: LearningCategory,
  locale: Locale,
): SceneConfig {
  const explicitScene = entry.scenesByCategory?.[category];
  if (explicitScene) {
    return withSceneDefaults(cloneScene(explicitScene));
  }

  if (category === "time" && isTemporalPreposition(entry)) {
    const timeScene = buildTimeScene(entry, locale);
    if (timeScene) return timeScene;
  }

  if (category === "dynamic" && isDynamicPreposition(entry)) {
    return buildDynamicScene(entry);
  }

  if (category === "space" && isSpatialPreposition(entry)) {
    return buildSpaceScene(entry);
  }

  return withSceneDefaults(cloneScene(entry.scene));
}
