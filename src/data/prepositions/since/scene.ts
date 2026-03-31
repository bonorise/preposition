import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  scene: {
    cube: {
      size: 1,
      position: [0, 0, 0],
    },
    ball: {
      radius: 0.22,
      position: [-0.85, 0, 0],
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
  },
  scenesByCategory: {
    abstract: {
      cube: {
        size: 1,
        position: [0, 0, 0],
      },
      ball: {
        radius: 0.16,
        position: [-0.95, 0, 0],
      },
      camera: {
        position: [0, 0, 4.2],
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
            position: [-0.95, 0, 0],
            radius: 0.34,
            fillColor: "#f5f3ff",
            label: {
              en: "Cause",
              "zh-CN": "原因",
            },
          },
          {
            id: "result",
            position: [0.95, 0, 0],
            radius: 0.34,
            fillColor: "#f5f3ff",
            label: {
              en: "Result",
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
