import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [0.18, 0.02, 0.16],
    },
    camera: {
      position: [2.2, 1.5, 2.2],
      target: [0, 0, 0],
      fov: 42,
    },
    render: {
      showGround: false,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    variant: "singleCube",
  },
};

export default sceneModule;
