import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 0.72,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.08,
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
    variant: "replacementCubes",
    replacementCubes: {
      itemSize: 0.64,
      positions: [
        [-0.86, 0, 0],
        [0, 0, 0],
        [0.86, 0, 0],
      ],
      movingFrom: [-1.72, 0, 0],
      movingToIndex: 1,
      duration: 3.4,
    },
  },
};

export default sceneModule;
