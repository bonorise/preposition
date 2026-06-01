import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [-0.7, 0.55, 0],
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
    variant: "singleCube",
  },
  scenesByCategory: {
    abstract: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.08,
        position: [-1.05, 0.12, 0],
      },
      camera: {
        position: [0.25, 0.35, 4.6],
        target: [0, 0, 0],
        fov: 34,
      },
      render: {
        showGround: false,
        shadows: false,
        wireframeStyle: "edges+faces",
      },
      abstractDiagram: {
        ballNodeId: "cause",
        nodes: [
          {
            id: "cause",
            position: [-1.05, 0.12, 0],
            radius: 0.34,
            size: 0.68,
            shape: "cube",
            fillColor: "#ffffff",
            label: {
              en: "cause",
              "zh-CN": "原因",
            },
          },
          {
            id: "result",
            position: [1.05, 0.12, 0],
            radius: 0.34,
            size: 0.68,
            shape: "cube",
            fillColor: "#ffffff",
            label: {
              en: "result",
              "zh-CN": "结果",
            },
          },
        ],
        arrows: [
          {
            from: "cause",
            to: "result",
          },
        ],
      },
    },
  },
};

export default sceneModule;
