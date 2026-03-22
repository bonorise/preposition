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
        0.4
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
          0.4
        ],
        [
          0,
          0.2,
          1.2
        ],
        [
          0,
          -0.1,
          -1.2
        ],
        [
          0,
          0,
          0.4
        ]
      ]
    }
  }
};

export default sceneModule;
