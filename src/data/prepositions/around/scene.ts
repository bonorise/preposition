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
        1.2,
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
    "variant": "ringCubes",
    "animation": {
      "type": "path",
      "duration": 3.2,
      "closed": true,
      "path": [
        [
          1.2,
          0,
          0
        ],
        [
          0.85,
          0,
          0.85
        ],
        [
          0,
          0,
          1.2
        ],
        [
          -0.85,
          0,
          0.85
        ],
        [
          -1.2,
          0,
          0
        ],
        [
          -0.85,
          0,
          -0.85
        ],
        [
          0,
          0,
          -1.2
        ],
        [
          0.85,
          0,
          -0.85
        ]
      ]
    }
  }
};

export default sceneModule;
