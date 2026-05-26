import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [1.82, 0, 0],
    },
    camera: {
      position: [3.0, 1.8, 2.4],
      target: [0.45, 0, 0],
      fov: 42,
    },
    render: {
      showGround: true,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    variant: "ringCubes",
    highlightedCubeIndex: 0,
  },
};

export default sceneModule;
