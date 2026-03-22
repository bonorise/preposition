import type { PrepositionSceneModule } from "../shared/types";

const sceneModule: PrepositionSceneModule = {
  "scene": {
    "cube": {
      "size": 1,
      "position": [
        0,
        0,
        0
      ]
    },
    "ball": {
      "radius": 0.22,
      "position": [
        0,
        0,
        0.8
      ]
    },
    "camera": {
      "position": [
        2.4,
        1.7,
        2.4
      ],
      "target": [
        0,
        0,
        0
      ],
      "fov": 42
    },
    "render": {
      "showGround": true,
      "shadows": false,
      "wireframeStyle": "edges+faces"
    },
    "animation": {
      "type": "path",
      "duration": 2.2,
      "path": [
        [
          0,
          0,
          0.8
        ],
        [
          0.8,
          0,
          0.95
        ],
        [
          1.6,
          0,
          0.8
        ],
        [
          0.8,
          0,
          0.65
        ],
        [
          0,
          0,
          0.8
        ]
      ]
    }
  }
};

export default sceneModule;
