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
    "variant": "singleCube",
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
          0.78,
          0,
          0.78
        ],
        [
          0,
          0,
          1.1
        ],
        [
          -0.78,
          0,
          0.78
        ],
        [
          -1.2,
          0,
          0
        ],
        [
          -0.78,
          0,
          -0.78
        ],
        [
          0,
          0,
          -1.1
        ],
        [
          0.78,
          0,
          -0.78
        ]
      ]
    }
  },
  "scenesByCategory": {
    "space": {
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
          1.25,
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
      "variant": "singleCube"
    },
    "dynamic": {
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
          1.1,
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
      "variant": "singleCube",
      "animation": {
        "type": "path",
        "duration": 3.2,
        "closed": true,
        "path": [
          [
            1.1,
            0,
            0
          ],
          [
            0.78,
            0,
            0.78
          ],
          [
            0,
            0,
            1.1
          ],
          [
            -0.78,
            0,
            0.78
          ],
          [
            -1.1,
            0,
            0
          ],
          [
            -0.78,
            0,
            -0.78
          ],
          [
            0,
            0,
            -1.1
          ],
          [
            0.78,
            0,
            -0.78
          ]
        ]
      }
    }
  }
};

export default sceneModule;
