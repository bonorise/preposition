import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [-1.15, 0, 0],
    },
    camera: {
      position: [2.7, 1.7, 2.5],
      target: [0, 0, 0],
      fov: 42,
    },
    render: {
      showGround: true,
      shadows: false,
      wireframeStyle: "edges+faces",
    },
    variant: "twoCubes",
    animation: {
      type: "path",
      duration: 3.1,
      from: [-1.15, 0, 0],
      to: [1.15, 0, 0],
      path: [
        [-1.15, 0, 0],
        [-0.45, 0.12, 0.15],
        [0.15, 0, 0],
        [0.72, -0.08, -0.1],
        [1.15, 0, 0],
      ],
    },
  },
  scenesByCategory: {
    abstract: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.22,
        position: [0.15, 0, 0],
      },
      camera: {
        position: [2.7, 1.7, 2.5],
        target: [0, 0, 0],
        fov: 42,
      },
      render: {
        showGround: true,
        shadows: false,
        wireframeStyle: "edges+faces",
      },
      variant: "twoCubes",
    },
    dynamic: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.22,
        position: [-1.15, 0, 0],
      },
      camera: {
        position: [2.7, 1.7, 2.5],
        target: [0, 0, 0],
        fov: 42,
      },
      render: {
        showGround: true,
        shadows: false,
        wireframeStyle: "edges+faces",
      },
      variant: "twoCubes",
      animation: {
        type: "path",
        duration: 3.1,
        from: [-1.15, 0, 0],
        to: [1.15, 0, 0],
        path: [
          [-1.15, 0, 0],
          [-0.45, 0.12, 0.15],
          [0.15, 0, 0],
          [0.72, -0.08, -0.1],
          [1.15, 0, 0],
        ],
      },
    },
  },
};

export default sceneModule;
