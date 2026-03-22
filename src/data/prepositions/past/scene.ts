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
        1.6,
        0,
        0
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
          1.6,
          0,
          0
        ],
        [
          0.6,
          0,
          0.4
        ],
        [
          -0.6,
          0,
          0.4
        ],
        [
          -1.6,
          0,
          0
        ],
        [
          1.6,
          0,
          0
        ]
      ]
    }
  }
};

export default sceneModule;
