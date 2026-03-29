import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [1.3, 0, 0],
    },
    camera: {
      position: [2.5, 1.7, 2.4],
      target: [0, 0, 0],
      fov: 42,
    },
    render: {
      showGround: true,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    variant: "singleCube",
    animation: {
      type: "path",
      duration: 2.8,
      from: [0.38, 0, 0],
      to: [1.65, 0, 0],
      path: [
        [0.38, 0, 0],
        [0.82, 0, 0],
        [1.25, 0, 0],
        [1.65, 0, 0],
      ],
    },
  },
  scenesByCategory: {
    space: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.22,
        position: [1.25, 0, 0],
      },
      camera: {
        position: [2.5, 1.7, 2.4],
        target: [0, 0, 0],
        fov: 42,
      },
      render: {
        showGround: true,
        shadows: false,
        wireframeStyle: "edges+faces",
      },
      variant: "singleCube",
    },
    dynamic: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.22,
        position: [1.3, 0, 0],
      },
      camera: {
        position: [2.5, 1.7, 2.4],
        target: [0, 0, 0],
        fov: 42,
      },
      render: {
        showGround: true,
        shadows: false,
        wireframeStyle: "edges+faces",
      },
      variant: "singleCube",
      animation: {
        type: "path",
        duration: 2.8,
        from: [0.38, 0, 0],
        to: [1.65, 0, 0],
        path: [
          [0.38, 0, 0],
          [0.82, 0, 0],
          [1.25, 0, 0],
          [1.65, 0, 0],
        ],
      },
    },
  },
};

export default sceneModule;
