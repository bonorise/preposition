import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [0, 0, 0],
      visible: false,
    },
    camera: {
      position: [2.4, 1.7, 2.4],
      target: [0, 0, 0],
      fov: 42,
    },
    render: {
      showGround: true,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    variant: "containedCubes",
    containedCubes: {
      itemSize: 0.26,
      highlightedIndex: 0,
      positions: [
        [-0.18, 0.14, 0.12],
        [0.18, 0.14, -0.12],
        [-0.18, -0.16, -0.12],
        [0.18, -0.16, 0.12],
      ],
    },
  },
};

export default sceneModule;
