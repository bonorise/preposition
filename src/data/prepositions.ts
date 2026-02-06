import type { PrepositionEntry } from "@/data/types";
import { DEFAULT_CAMERA, DEFAULT_CUBE, DEFAULT_RENDER } from "@/lib/scenePreset";

const ballRadius = 0.22;

function makeScene(
  position: [number, number, number],
  overrides?: Partial<PrepositionEntry["scene"]>,
): PrepositionEntry["scene"] {
  return {
    cube: DEFAULT_CUBE,
    ball: {
      radius: ballRadius,
      position,
    },
    camera: DEFAULT_CAMERA,
    render: DEFAULT_RENDER,
    ...(overrides ?? {}),
  };
}

type PrepositionEntryBase = Omit<PrepositionEntry, "relatedIds">;

const PREPOSITIONS_BASE: PrepositionEntryBase[] = [
  {
    id: "in",
    word: "in",
    tags: ["space", "inside", "containment"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……里面（被包住）",
        tips: ["强调被包裹、在边界之内。", "不接触表面时用 in，不是 on。"],
      },
      en: {
        meaning: "inside; enclosed by boundaries",
        tips: ["Fully contained within a space.", "Use in for enclosed, not on for surfaces."],
      },
    },
    examples: [
      {
        en: "The ball is in the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子里。" },
          en: { translation: "The ball is in the box." },
        },
      },
      {
        en: "The keys are in the drawer.",
        i18n: {
          "zh-CN": { translation: "钥匙在抽屉里。" },
          en: { translation: "The keys are in the drawer." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "in 强调在边界之内；和 inside/into/on 等词相比，in 更偏静态位置。",
          differences: [
            {
              term: "inside",
              description: "inside 更强调边界与内部空间感，比 in 更“在里面”。",
              examples: [
                {
                  term: "inside",
                  sentence: "The keys are inside the box.",
                  translation: "钥匙在盒子内部。",
                },
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                  translation: "钥匙在盒子里。",
                },
              ],
            },
            {
              term: "into",
              description: "into 表示从外到内的运动过程；in 只表示位置。",
              examples: [
                {
                  term: "into",
                  sentence: "The cat jumped into the box.",
                  translation: "猫跳进盒子里。",
                },
                {
                  term: "in",
                  sentence: "The cat is in the box.",
                  translation: "猫在盒子里。",
                },
              ],
            },
            {
              term: "on",
              description: "on 强调接触表面；in 强调被包在内部。",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the box.",
                  translation: "书在盒子上。",
                },
                {
                  term: "in",
                  sentence: "The book is in the box.",
                  translation: "书在盒子里。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "In focuses on being inside a boundary; compared with inside/into/on, it describes a static position.",
          differences: [
            {
              term: "inside",
              description:
                "Inside emphasizes the boundary and interior space more strongly.",
              examples: [
                {
                  term: "inside",
                  sentence: "The keys are inside the box.",
                },
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                },
              ],
            },
            {
              term: "into",
              description:
                "Into is motion from outside to inside; in is a static location.",
              examples: [
                {
                  term: "into",
                  sentence: "The cat jumped into the box.",
                },
                {
                  term: "in",
                  sentence: "The cat is in the box.",
                },
              ],
            },
            {
              term: "on",
              description:
                "On means touching a surface; in means enclosed within.",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the box.",
                },
                {
                  term: "in",
                  sentence: "The book is in the box.",
                },
              ],
            },
          ],
        },
      },
    },
    collocations: {
      "zh-CN": [
        "in a taxi",
        "in a car",
        "in prison",
        "in the bedroom",
        "in the classroom",
        "in the garden",
        "in the park",
        "in the kitchen",
        "in a book",
        "in a picture",
        "in the newspaper",
        "in my pocket",
        "in my bag",
        "in a building",
        "in the city",
        "in the morning",
        "in the evening",
        "in a hurry",
        "in love",
        "in trouble",
        "in the hallway",
      ],
      en: [
        "in a taxi",
        "in a car",
        "in prison",
        "in the bedroom",
        "in the classroom",
        "in the garden",
        "in the park",
        "in the kitchen",
        "in a book",
        "in a picture",
        "in the newspaper",
        "in my pocket",
        "in my bag",
        "in a building",
        "in the city",
        "in the morning",
        "in the evening",
        "in a hurry",
        "in love",
        "in trouble",
        "in the hallway",
      ],
    },
  },
  {
    id: "on",
    word: "on",
    tags: ["space", "contact", "surface"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上面（接触表面）",
        tips: ["强调接触表面。", "若只是上方不接触，用 above/over。"],
      },
      en: {
        meaning: "on top of; touching a surface",
        tips: ["Touching the surface.", "If not touching, use above or over."],
      },
    },
    examples: [
      {
        en: "The ball is on the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子上面。" },
          en: { translation: "The ball is on the box." },
        },
      },
      {
        en: "The book is on the table.",
        i18n: {
          "zh-CN": { translation: "书在桌子上。" },
          en: { translation: "The book is on the table." },
        },
      },
    ],
    scene: makeScene([0, 0.7, 0]),
  },
  {
    id: "under",
    word: "under",
    tags: ["space", "below"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下面（遮挡下方）",
        tips: ["在物体下方，可理解为被上方覆盖。", "under 更有遮挡感，below 更中性。"],
      },
      en: {
        meaning: "below; covered by something above",
        tips: ["Underneath, often with something above it.", "Under implies covering; below is neutral."],
      },
    },
    examples: [
      {
        en: "The ball is under the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子下面。" },
          en: { translation: "The ball is under the box." },
        },
      },
      {
        en: "The cat is under the chair.",
        i18n: {
          "zh-CN": { translation: "猫在椅子下面。" },
          en: { translation: "The cat is under the chair." },
        },
      },
    ],
    scene: makeScene([0, -0.8, 0]),
  },
  {
    id: "over",
    word: "over",
    tags: ["space", "above", "movement"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……正上方/跨过（通常不接触）",
        tips: ["强调高度或跨越，不一定接触。", "over 有“跨过/覆盖”感觉，above 只表示位置。"],
      },
      en: {
        meaning: "above or moving across",
        tips: ["Not necessarily touching; can imply movement.", "Over suggests crossing; above is just position."],
      },
    },
    examples: [
      {
        en: "A bird flies over the box.",
        i18n: {
          "zh-CN": { translation: "鸟飞过盒子上方。" },
          en: { translation: "A bird flies over the box." },
        },
      },
      {
        en: "The bridge goes over the river.",
        i18n: {
          "zh-CN": { translation: "桥跨过河。" },
          en: { translation: "The bridge goes over the river." },
        },
      },
    ],
    scene: makeScene([0, 1.1, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 1.1, 0],
          [-1.2, 1.1, 0],
          [0, 1.5, 0],
          [1.2, 1.1, 0],
          [0, 1.1, 0],
        ],
      },
    }),
  },
  {
    id: "above",
    word: "above",
    tags: ["space", "above"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上方（强调高度）",
        tips: ["只强调位置高，不强调跨越。", "above 不含经过或覆盖。"],
      },
      en: {
        meaning: "higher than; vertically above",
        tips: ["Focuses on height, not movement.", "No crossing or covering implied."],
      },
    },
    examples: [
      {
        en: "The lamp is above the table.",
        i18n: {
          "zh-CN": { translation: "灯在桌子上方。" },
          en: { translation: "The lamp is above the table." },
        },
      },
      {
        en: "The plane is above the clouds.",
        i18n: {
          "zh-CN": { translation: "飞机在云上方。" },
          en: { translation: "The plane is above the clouds." },
        },
      },
    ],
    scene: makeScene([0, 1, 0]),
  },
  {
    id: "below",
    word: "below",
    tags: ["space", "below"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下方（强调高度）",
        tips: ["仅表示低于某物。", "below 比 under 更中性。"],
      },
      en: {
        meaning: "lower than; beneath",
        tips: ["Focuses on lower position.", "Below is more neutral than under."],
      },
    },
    examples: [
      {
        en: "The cat is below the shelf.",
        i18n: {
          "zh-CN": { translation: "猫在架子下面。" },
          en: { translation: "The cat is below the shelf." },
        },
      },
      {
        en: "The village is below the mountain.",
        i18n: {
          "zh-CN": { translation: "村庄在山下。" },
          en: { translation: "The village is below the mountain." },
        },
      },
    ],
    scene: makeScene([0, -1.1, 0]),
  },
  {
    id: "beside",
    word: "beside",
    tags: ["space", "side"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……旁边（紧挨着）",
        tips: ["强调就在一侧，距离近。", "比 near 更贴近。"],
      },
      en: {
        meaning: "beside; right at the side",
        tips: ["Very close at the side.", "Closer than near."],
      },
    },
    examples: [
      {
        en: "She sits beside the window.",
        i18n: {
          "zh-CN": { translation: "她坐在窗边。" },
          en: { translation: "She sits beside the window." },
        },
      },
      {
        en: "The bike is beside the door.",
        i18n: {
          "zh-CN": { translation: "自行车在门旁边。" },
          en: { translation: "The bike is beside the door." },
        },
      },
    ],
    scene: makeScene([1.05, 0, 0]),
  },
  {
    id: "next-to",
    word: "next to",
    tags: ["space", "side", "near"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "紧挨着……旁边",
        tips: ["强调紧邻。", "几乎是贴着的一侧。"],
      },
      en: {
        meaning: "next to; adjacent",
        tips: ["Directly adjacent.", "Implies very close proximity."],
      },
    },
    examples: [
      {
        en: "The chair is next to the desk.",
        i18n: {
          "zh-CN": { translation: "椅子在桌子旁边。" },
          en: { translation: "The chair is next to the desk." },
        },
      },
      {
        en: "The bus stop is next to the bank.",
        i18n: {
          "zh-CN": { translation: "公交站在银行旁边。" },
          en: { translation: "The bus stop is next to the bank." },
        },
      },
    ],
    scene: makeScene([0.95, 0, 0]),
  },
  {
    id: "near",
    word: "near",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……附近（不一定接触）",
        tips: ["强调距离近，但不是贴着。", "可有一定距离。"],
      },
      en: {
        meaning: "near; at a short distance",
        tips: ["Close, but not touching.", "Some distance is acceptable."],
      },
    },
    examples: [
      {
        en: "The school is near the park.",
        i18n: {
          "zh-CN": { translation: "学校在公园附近。" },
          en: { translation: "The school is near the park." },
        },
      },
      {
        en: "A shop is near the station.",
        i18n: {
          "zh-CN": { translation: "商店在车站附近。" },
          en: { translation: "A shop is near the station." },
        },
      },
    ],
    scene: makeScene([0.75, 0, 0]),
  },
  {
    id: "by",
    word: "by",
    tags: ["space", "side", "near"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……旁边",
        tips: ["口语常用，含义接近 near/beside。", "可表示紧靠在一旁。"],
      },
      en: {
        meaning: "by; close to",
        tips: ["Casual, similar to near/beside.", "Often implies very close."],
      },
    },
    examples: [
      {
        en: "Stand by the door.",
        i18n: {
          "zh-CN": { translation: "站在门旁边。" },
          en: { translation: "Stand by the door." },
        },
      },
      {
        en: "The lamp is by the bed.",
        i18n: {
          "zh-CN": { translation: "灯在床边。" },
          en: { translation: "The lamp is by the bed." },
        },
      },
    ],
    scene: makeScene([0.65, 0, 0]),
  },
  {
    id: "behind",
    word: "behind",
    tags: ["space", "back"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……后面（从观察者视角）",
        tips: ["强调在视线的后方。", "与 in front of 相对。"],
      },
      en: {
        meaning: "behind; at the back",
        tips: ["Located at the back from the viewer.", "Opposite of in front of."],
      },
    },
    examples: [
      {
        en: "The ball is behind the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子后面。" },
          en: { translation: "The ball is behind the box." },
        },
      },
      {
        en: "The car is behind the bus.",
        i18n: {
          "zh-CN": { translation: "汽车在公交车后面。" },
          en: { translation: "The car is behind the bus." },
        },
      },
    ],
    scene: makeScene([0, 0, -1.1]),
  },
  {
    id: "in-front-of",
    word: "in front of",
    tags: ["space", "front"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……前面（面对观察者）",
        tips: ["强调在视线前方。", "与 behind 相对。"],
      },
      en: {
        meaning: "in front of; at the front",
        tips: ["Located in the front from the viewer.", "Opposite of behind."],
      },
    },
    examples: [
      {
        en: "The ball is in front of the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子前面。" },
          en: { translation: "The ball is in front of the box." },
        },
      },
      {
        en: "She stands in front of the mirror.",
        i18n: {
          "zh-CN": { translation: "她站在镜子前面。" },
          en: { translation: "She stands in front of the mirror." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.1]),
  },
  {
    id: "between",
    word: "between",
    tags: ["space", "between"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之间（两个物体）",
        tips: ["通常是两个之间。", "多于两个通常用 among。"],
      },
      en: {
        meaning: "between; in the middle of two",
        tips: ["Usually between two things.", "Use among for three or more."],
      },
    },
    examples: [
      {
        en: "The ball is between the boxes.",
        i18n: {
          "zh-CN": { translation: "球在两个盒子之间。" },
          en: { translation: "The ball is between the boxes." },
        },
      },
      {
        en: "The cafe is between the bank and the bookstore.",
        i18n: {
          "zh-CN": { translation: "咖啡店在银行和书店之间。" },
          en: { translation: "The cafe is between the bank and the bookstore." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "twoCubes",
    }),
  },
  {
    id: "among",
    word: "among",
    tags: ["space", "among"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（多者之间）",
        tips: ["通常是三个及以上之间。", "强调在一群中。"],
      },
      en: {
        meaning: "among; in a group of many",
        tips: ["Used for three or more.", "In the middle of a group."],
      },
    },
    examples: [
      {
        en: "The ball is among the boxes.",
        i18n: {
          "zh-CN": { translation: "球在一堆盒子中间。" },
          en: { translation: "The ball is among the boxes." },
        },
      },
      {
        en: "He sat among his friends.",
        i18n: {
          "zh-CN": { translation: "他坐在朋友们中间。" },
          en: { translation: "He sat among his friends." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "around",
    word: "around",
    tags: ["space", "around"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……周围（环绕）",
        tips: ["强调围绕在周边。", "可表示环绕或分布在周围。"],
      },
      en: {
        meaning: "around; surrounding",
        tips: ["Surrounding or encircling.", "Can mean spread around."],
      },
    },
    examples: [
      {
        en: "The kids sit around the table.",
        i18n: {
          "zh-CN": { translation: "孩子们围着桌子坐。" },
          en: { translation: "The kids sit around the table." },
        },
      },
      {
        en: "Trees grow around the house.",
        i18n: {
          "zh-CN": { translation: "树长在房子周围。" },
          en: { translation: "Trees grow around the house." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0], {
      variant: "ringCubes",
      animation: {
        type: "path",
        duration: 3.2,
        closed: true,
        path: [
          [1.2, 0, 0],
          [0.85, 0, 0.85],
          [0, 0, 1.2],
          [-0.85, 0, 0.85],
          [-1.2, 0, 0],
          [-0.85, 0, -0.85],
          [0, 0, -1.2],
          [0.85, 0, -0.85],
        ],
      },
    }),
  },
  {
    id: "inside",
    word: "inside",
    tags: ["space", "inside"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……内部",
        tips: ["强调内部空间。", "比 in 更强调边界。"],
      },
      en: {
        meaning: "inside; within",
        tips: ["Inside a boundary.", "Often emphasizes the boundary."],
      },
    },
    examples: [
      {
        en: "There is a toy inside the bag.",
        i18n: {
          "zh-CN": { translation: "包里有个玩具。" },
          en: { translation: "There is a toy inside the bag." },
        },
      },
      {
        en: "Stay inside the room.",
        i18n: {
          "zh-CN": { translation: "待在房间里。" },
          en: { translation: "Stay inside the room." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
  },
  {
    id: "outside",
    word: "outside",
    tags: ["space", "outside"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……外面",
        tips: ["与 inside 相对，在外部。", "outside 是位置，不是离开的动作。"],
      },
      en: {
        meaning: "outside; not within",
        tips: ["Opposite of inside.", "Outside is location, not movement."],
      },
    },
    examples: [
      {
        en: "The dog is outside the house.",
        i18n: {
          "zh-CN": { translation: "狗在房子外面。" },
          en: { translation: "The dog is outside the house." },
        },
      },
      {
        en: "He waits outside the room.",
        i18n: {
          "zh-CN": { translation: "他在房间外等。" },
          en: { translation: "He waits outside the room." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0]),
  },
  {
    id: "across",
    word: "across",
    tags: ["space", "across"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面/穿过",
        tips: ["强调从一侧到另一侧（对面）。", "across 跨越表面，through 穿过内部。"],
      },
      en: {
        meaning: "across; to the other side",
        tips: ["From one side to the other.", "Across a surface; through goes inside."],
      },
    },
    examples: [
      {
        en: "The cafe is across the street.",
        i18n: {
          "zh-CN": { translation: "咖啡店在街对面。" },
          en: { translation: "The cafe is across the street." },
        },
      },
      {
        en: "The bridge is across the river.",
        i18n: {
          "zh-CN": { translation: "桥横跨河流。" },
          en: { translation: "The bridge is across the river." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0.8], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.2, 0, 0.8],
          [0.4, 0.2, 0.85],
          [-1.2, 0, 0.8],
          [-0.2, 0.15, 0.75],
          [1.2, 0, 0.8],
        ],
      },
    }),
  },
  {
    id: "through",
    word: "through",
    tags: ["space", "through"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "穿过……（从一侧到另一侧）",
        tips: ["通常表示经过内部。", "强调进入并穿出。"],
      },
      en: {
        meaning: "through; from one side to the other",
        tips: ["Passing within or inside.", "Goes into and out of."],
      },
    },
    examples: [
      {
        en: "Walk through the door.",
        i18n: {
          "zh-CN": { translation: "从门里穿过去。" },
          en: { translation: "Walk through the door." },
        },
      },
      {
        en: "The train goes through the tunnel.",
        i18n: {
          "zh-CN": { translation: "火车穿过隧道。" },
          en: { translation: "The train goes through the tunnel." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.4], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 0, 0.4],
          [0, 0.2, 1.2],
          [0, -0.1, -1.2],
          [0, 0, 0.4],
        ],
      },
    }),
  },
  {
    id: "against",
    word: "against",
    tags: ["space", "contact"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "靠着……/贴着",
        tips: ["强调接触并有支撑感。", "不是“远离”，而是紧贴。"],
      },
      en: {
        meaning: "against; touching and supported",
        tips: ["Touching with support.", "Close contact, not away."],
      },
    },
    examples: [
      {
        en: "The ladder is against the wall.",
        i18n: {
          "zh-CN": { translation: "梯子靠在墙上。" },
          en: { translation: "The ladder is against the wall." },
        },
      },
      {
        en: "He leaned against the door.",
        i18n: {
          "zh-CN": { translation: "他靠在门上。" },
          en: { translation: "He leaned against the door." },
        },
      },
    ],
    scene: makeScene([0.7, 0, 0]),
  },
  {
    id: "along",
    word: "along",
    tags: ["space", "along"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "沿着……（沿线方向）",
        tips: ["强调沿着边或路径。", "常与道路/河流等线状物搭配。"],
      },
      en: {
        meaning: "along; following a line",
        tips: ["Following a path or edge.", "Often with roads or rivers."],
      },
    },
    examples: [
      {
        en: "We walked along the river.",
        i18n: {
          "zh-CN": { translation: "我们沿着河边走。" },
          en: { translation: "We walked along the river." },
        },
      },
      {
        en: "The lamp posts line up along the street.",
        i18n: {
          "zh-CN": { translation: "路灯沿街排开。" },
          en: { translation: "The lamp posts line up along the street." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.8], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 0, 0.8],
          [0.8, 0, 0.95],
          [1.6, 0, 0.8],
          [0.8, 0, 0.65],
          [0, 0, 0.8],
        ],
      },
    }),
  },
  {
    id: "into",
    word: "into",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "进入……里面（方向）",
        tips: ["表示从外到内的运动方向。", "静态位置用 in。"],
      },
      en: {
        meaning: "into; moving inside",
        tips: ["Movement from outside to inside.", "Use in for a static position."],
      },
    },
    examples: [
      {
        en: "The ball rolls into the box.",
        i18n: {
          "zh-CN": { translation: "球滚进盒子里。" },
          en: { translation: "The ball rolls into the box." },
        },
      },
      {
        en: "She went into the room.",
        i18n: {
          "zh-CN": { translation: "她走进房间。" },
          en: { translation: "She went into the room." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.1], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 1.4],
        to: [0, 0, 0.1],
      },
    }),
  },
  {
    id: "onto",
    word: "onto",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "到……上面（方向）",
        tips: ["表示向上、到表面的运动。", "静态位置用 on。"],
      },
      en: {
        meaning: "onto; moving to a surface",
        tips: ["Movement onto a surface.", "Use on for a static position."],
      },
    },
    examples: [
      {
        en: "The cat jumped onto the chair.",
        i18n: {
          "zh-CN": { translation: "猫跳到椅子上。" },
          en: { translation: "The cat jumped onto the chair." },
        },
      },
      {
        en: "He put the cup onto the table.",
        i18n: {
          "zh-CN": { translation: "他把杯子放到桌上。" },
          en: { translation: "He put the cup onto the table." },
        },
      },
    ],
    scene: makeScene([0, 0.72, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 1.4, 0],
        to: [0, 0.72, 0],
      },
    }),
  },
  {
    id: "out-of",
    word: "out of",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……出来（离开内部）",
        tips: ["表示从内到外。", "强调离开内部空间。"],
      },
      en: {
        meaning: "out of; moving outside",
        tips: ["Movement from inside to outside.", "Leaving an interior space."],
      },
    },
    examples: [
      {
        en: "The bird flew out of the cage.",
        i18n: {
          "zh-CN": { translation: "鸟飞出了笼子。" },
          en: { translation: "The bird flew out of the cage." },
        },
      },
      {
        en: "Take the book out of the bag.",
        i18n: {
          "zh-CN": { translation: "把书从包里拿出来。" },
          en: { translation: "Take the book out of the bag." },
        },
      },
    ],
    scene: makeScene([0, 0, -0.7], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 0.1],
        to: [0, 0, -0.7],
      },
    }),
  },
  {
    id: "at",
    word: "at",
    tags: ["space", "point", "location"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……（具体点/位置）",
        tips: ["强调“点位”，不强调内部或表面。", "常用于地点或具体位置。"],
      },
      en: {
        meaning: "at; a specific point or place",
        tips: ["Focuses on a point, not inside or on a surface.", "Used for exact locations."],
      },
    },
    examples: [
      {
        en: "He is at the door.",
        i18n: {
          "zh-CN": { translation: "他在门口。" },
          en: { translation: "He is at the door." },
        },
      },
      {
        en: "Meet me at the corner.",
        i18n: {
          "zh-CN": { translation: "在拐角处见我。" },
          en: { translation: "Meet me at the corner." },
        },
      },
    ],
    scene: makeScene([0.4, 0, 0.4]),
  },
  {
    id: "to",
    word: "to",
    tags: ["space", "direction", "destination"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "到/向……（目的地）",
        tips: ["表示方向或目的地。", "强调“到达”。"],
      },
      en: {
        meaning: "to; toward a destination",
        tips: ["Indicates direction or destination.", "Focus on reaching a point."],
      },
    },
    examples: [
      {
        en: "She walks to the door.",
        i18n: {
          "zh-CN": { translation: "她走向门口。" },
          en: { translation: "She walks to the door." },
        },
      },
      {
        en: "The bus goes to the station.",
        i18n: {
          "zh-CN": { translation: "公交车开往车站。" },
          en: { translation: "The bus goes to the station." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.2], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 2.2],
        to: [0, 0, 1.2],
      },
    }),
  },
  {
    id: "from",
    word: "from",
    tags: ["space", "direction", "origin"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……（出发点）",
        tips: ["表示起点或来源。", "与 to 相对。"],
      },
      en: {
        meaning: "from; starting point",
        tips: ["Indicates origin or source.", "Opposite of to."],
      },
    },
    examples: [
      {
        en: "He comes from the school.",
        i18n: {
          "zh-CN": { translation: "他从学校来。" },
          en: { translation: "He comes from the school." },
        },
      },
      {
        en: "The train left from the platform.",
        i18n: {
          "zh-CN": { translation: "火车从站台出发。" },
          en: { translation: "The train left from the platform." },
        },
      },
    ],
    scene: makeScene([0, 0, -1.2], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, -0.2],
        to: [0, 0, -1.2],
      },
    }),
  },
  {
    id: "up",
    word: "up",
    tags: ["space", "direction", "vertical"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "向上/在上方",
        tips: ["强调向上的方向或位置。", "可与 down 对比。"],
      },
      en: {
        meaning: "up; upward or above",
        tips: ["Direction or position upward.", "Contrast with down."],
      },
    },
    examples: [
      {
        en: "Look up at the sky.",
        i18n: {
          "zh-CN": { translation: "抬头看天空。" },
          en: { translation: "Look up at the sky." },
        },
      },
      {
        en: "The balloon floats up.",
        i18n: {
          "zh-CN": { translation: "气球向上飘。" },
          en: { translation: "The balloon floats up." },
        },
      },
    ],
    scene: makeScene([0, 1.4, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0.2, 0],
        to: [0, 1.4, 0],
      },
    }),
  },
  {
    id: "down",
    word: "down",
    tags: ["space", "direction", "vertical"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "向下/在下方",
        tips: ["强调向下的方向或位置。", "可与 up 对比。"],
      },
      en: {
        meaning: "down; downward or below",
        tips: ["Direction or position downward.", "Contrast with up."],
      },
    },
    examples: [
      {
        en: "The apple falls down.",
        i18n: {
          "zh-CN": { translation: "苹果向下掉。" },
          en: { translation: "The apple falls down." },
        },
      },
      {
        en: "He went down the stairs.",
        i18n: {
          "zh-CN": { translation: "他下楼了。" },
          en: { translation: "He went down the stairs." },
        },
      },
    ],
    scene: makeScene([0, -1.4, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0.2, 0],
        to: [0, -1.4, 0],
      },
    }),
  },
  {
    id: "off",
    word: "off",
    tags: ["space", "separation", "surface"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……上脱离/离开表面",
        tips: ["强调离开表面，不再接触。", "与 on 相对。"],
      },
      en: {
        meaning: "off; away from a surface",
        tips: ["Separated from a surface.", "Opposite of on."],
      },
    },
    examples: [
      {
        en: "The book fell off the table.",
        i18n: {
          "zh-CN": { translation: "书从桌子上掉下来了。" },
          en: { translation: "The book fell off the table." },
        },
      },
      {
        en: "He jumped off the box.",
        i18n: {
          "zh-CN": { translation: "他从盒子上跳下来。" },
          en: { translation: "He jumped off the box." },
        },
      },
    ],
    scene: makeScene([1.1, 0.3, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.1, 0.3, 0],
          [0.6, 0.6, 0],
          [0, 0.72, 0],
          [0.5, 0.45, 0],
          [1.1, 0.3, 0],
        ],
      },
    }),
  },
  {
    id: "beneath",
    word: "beneath",
    tags: ["space", "below", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下方（较正式）",
        tips: ["意思接近 under/below。", "语气更书面。"],
      },
      en: {
        meaning: "beneath; under (formal)",
        tips: ["Similar to under/below.", "More formal tone."],
      },
    },
    examples: [
      {
        en: "The treasure is beneath the floor.",
        i18n: {
          "zh-CN": { translation: "宝藏在地板下面。" },
          en: { translation: "The treasure is beneath the floor." },
        },
      },
      {
        en: "He hid beneath the bridge.",
        i18n: {
          "zh-CN": { translation: "他躲在桥下。" },
          en: { translation: "He hid beneath the bridge." },
        },
      },
    ],
    scene: makeScene([0, -1.2, 0]),
  },
  {
    id: "underneath",
    word: "underneath",
    tags: ["space", "below"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下面（紧贴下方）",
        tips: ["强调正下方，常更口语。", "接近 under。"],
      },
      en: {
        meaning: "underneath; directly under",
        tips: ["Directly under, often informal.", "Close to under."],
      },
    },
    examples: [
      {
        en: "The cat sleeps underneath the bed.",
        i18n: {
          "zh-CN": { translation: "猫睡在床下面。" },
          en: { translation: "The cat sleeps underneath the bed." },
        },
      },
      {
        en: "There is a drawer underneath the table.",
        i18n: {
          "zh-CN": { translation: "桌子下面有个抽屉。" },
          en: { translation: "There is a drawer underneath the table." },
        },
      },
    ],
    scene: makeScene([0, -0.95, 0]),
  },
  {
    id: "within",
    word: "within",
    tags: ["space", "inside", "boundary"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之内（强调范围）",
        tips: ["强调在某个范围/边界之内。", "比 in 更正式。"],
      },
      en: {
        meaning: "within; inside boundaries",
        tips: ["Inside a limit or boundary.", "More formal than in."],
      },
    },
    examples: [
      {
        en: "Stay within the lines.",
        i18n: {
          "zh-CN": { translation: "保持在边线内。" },
          en: { translation: "Stay within the lines." },
        },
      },
      {
        en: "The shop is within the city walls.",
        i18n: {
          "zh-CN": { translation: "商店在城墙之内。" },
          en: { translation: "The shop is within the city walls." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
  },
  {
    id: "without",
    word: "without",
    tags: ["space", "outside", "boundary"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之外（范围外）",
        tips: ["强调超出范围或边界。", "与 within 相对。"],
      },
      en: {
        meaning: "without; outside boundaries",
        tips: ["Outside a limit or boundary.", "Opposite of within."],
      },
    },
    examples: [
      {
        en: "The camp is without the city walls.",
        i18n: {
          "zh-CN": { translation: "营地在城墙之外。" },
          en: { translation: "The camp is without the city walls." },
        },
      },
      {
        en: "He waited without the gate.",
        i18n: {
          "zh-CN": { translation: "他在大门外等。" },
          en: { translation: "He waited without the gate." },
        },
      },
    ],
    scene: makeScene([1.3, 0, 0]),
  },
  {
    id: "past",
    word: "past",
    tags: ["space", "beyond", "movement"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "经过/越过……",
        tips: ["强调从旁边经过并越过。", "常用于路线经过。"],
      },
      en: {
        meaning: "past; beyond while passing",
        tips: ["Move beyond a point.", "Often for passing a place."],
      },
    },
    examples: [
      {
        en: "Walk past the school.",
        i18n: {
          "zh-CN": { translation: "从学校旁边走过去。" },
          en: { translation: "Walk past the school." },
        },
      },
      {
        en: "The bus went past the stop.",
        i18n: {
          "zh-CN": { translation: "公交车开过了站。" },
          en: { translation: "The bus went past the stop." },
        },
      },
    ],
    scene: makeScene([1.6, 0, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.6, 0, 0],
          [0.6, 0, 0.4],
          [-0.6, 0, 0.4],
          [-1.6, 0, 0],
          [1.6, 0, 0],
        ],
      },
    }),
  },
  {
    id: "toward",
    word: "toward",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "朝向……",
        tips: ["强调方向，不一定到达。", "比 to 更弱。"],
      },
      en: {
        meaning: "toward; in the direction of",
        tips: ["Direction, not necessarily reaching.", "Weaker than to."],
      },
    },
    examples: [
      {
        en: "She ran toward the gate.",
        i18n: {
          "zh-CN": { translation: "她朝门口跑去。" },
          en: { translation: "She ran toward the gate." },
        },
      },
      {
        en: "The cat moved toward the window.",
        i18n: {
          "zh-CN": { translation: "猫朝窗户靠近。" },
          en: { translation: "The cat moved toward the window." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.1], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 2.0],
        to: [0, 0, 1.1],
      },
    }),
  },
  {
    id: "across-from",
    word: "across from",
    tags: ["space", "opposite", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面",
        tips: ["强调隔着一条路/区域相对。", "常与街道、河流搭配。"],
      },
      en: {
        meaning: "across from; on the opposite side",
        tips: ["Opposite side across a space.", "Often across a street or river."],
      },
    },
    examples: [
      {
        en: "The bank is across from the mall.",
        i18n: {
          "zh-CN": { translation: "银行在商场对面。" },
          en: { translation: "The bank is across from the mall." },
        },
      },
      {
        en: "He lives across from the park.",
        i18n: {
          "zh-CN": { translation: "他住在公园对面。" },
          en: { translation: "He lives across from the park." },
        },
      },
    ],
    scene: makeScene([1.6, 0, 0]),
  },
  {
    id: "opposite",
    word: "opposite",
    tags: ["space", "opposite"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面/正对",
        tips: ["强调正对面的位置。", "常与 across from 类似。"],
      },
      en: {
        meaning: "opposite; facing across",
        tips: ["Facing directly across.", "Similar to across from."],
      },
    },
    examples: [
      {
        en: "The cafe is opposite the school.",
        i18n: {
          "zh-CN": { translation: "咖啡店在学校对面。" },
          en: { translation: "The cafe is opposite the school." },
        },
      },
      {
        en: "His seat is opposite mine.",
        i18n: {
          "zh-CN": { translation: "他的座位在我对面。" },
          en: { translation: "His seat is opposite mine." },
        },
      },
    ],
    scene: makeScene([-1.6, 0, 0]),
  },
  {
    id: "throughout",
    word: "throughout",
    tags: ["space", "spread"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "遍布于……/贯穿整个范围",
        tips: ["表示分布在整个空间。", "不是单一位置。"],
      },
      en: {
        meaning: "throughout; spread in the whole area",
        tips: ["Distributed across the entire space.", "Not a single point."],
      },
    },
    examples: [
      {
        en: "Lights are throughout the hall.",
        i18n: {
          "zh-CN": { translation: "大厅里到处都有灯。" },
          en: { translation: "Lights are throughout the hall." },
        },
      },
      {
        en: "Trees grow throughout the park.",
        i18n: {
          "zh-CN": { translation: "公园里到处是树。" },
          en: { translation: "Trees grow throughout the park." },
        },
      },
    ],
    scene: makeScene([0.2, 0, 0.1], {
      variant: "ringCubes",
    }),
  },
  {
    id: "amid",
    word: "amid",
    tags: ["space", "among"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（多者中）",
        tips: ["强调在一群/环境中间。", "语气较正式。"],
      },
      en: {
        meaning: "amid; in the middle of",
        tips: ["In the middle of a group.", "Slightly formal."],
      },
    },
    examples: [
      {
        en: "He stood amid the crowd.",
        i18n: {
          "zh-CN": { translation: "他站在人群之中。" },
          en: { translation: "He stood amid the crowd." },
        },
      },
      {
        en: "A house sits amid the trees.",
        i18n: {
          "zh-CN": { translation: "房子在树丛之中。" },
          en: { translation: "A house sits amid the trees." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "amidst",
    word: "amidst",
    tags: ["space", "among", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（同 amid）",
        tips: ["与 amid 意义相同，更书面。", "强调周围环绕。"],
      },
      en: {
        meaning: "amidst; same as amid",
        tips: ["Same meaning as amid, more formal.", "Surrounded by."],
      },
    },
    examples: [
      {
        en: "She danced amidst the lights.",
        i18n: {
          "zh-CN": { translation: "她在灯光之中起舞。" },
          en: { translation: "She danced amidst the lights." },
        },
      },
      {
        en: "The cabin stands amidst the woods.",
        i18n: {
          "zh-CN": { translation: "小屋坐落在树林中。" },
          en: { translation: "The cabin stands amidst the woods." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "alongside",
    word: "alongside",
    tags: ["space", "side"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "沿着/在……旁边（并行）",
        tips: ["强调并行在一侧。", "比 beside 更有“并行”的感觉。"],
      },
      en: {
        meaning: "alongside; at the side, parallel",
        tips: ["Parallel and beside.", "Stronger sense of alongside than beside."],
      },
    },
    examples: [
      {
        en: "A path runs alongside the river.",
        i18n: {
          "zh-CN": { translation: "小路沿着河边延伸。" },
          en: { translation: "A path runs alongside the river." },
        },
      },
      {
        en: "He walked alongside his friend.",
        i18n: {
          "zh-CN": { translation: "他和朋友并肩走。" },
          en: { translation: "He walked alongside his friend." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.2, 0, 0],
          [1.2, 0, 0.8],
          [1.2, 0, 1.6],
          [1.2, 0, 0.8],
          [1.2, 0, 0],
        ],
      },
    }),
  },
  {
    id: "beyond",
    word: "beyond",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……更远处/超过",
        tips: ["强调超出某个位置。", "比 past 更远。"],
      },
      en: {
        meaning: "beyond; farther than",
        tips: ["Farther than a point.", "Farther than past."],
      },
    },
    examples: [
      {
        en: "The hills are beyond the river.",
        i18n: {
          "zh-CN": { translation: "山丘在河的更远处。" },
          en: { translation: "The hills are beyond the river." },
        },
      },
      {
        en: "There is a town beyond the bridge.",
        i18n: {
          "zh-CN": { translation: "桥那边有个小镇。" },
          en: { translation: "There is a town beyond the bridge." },
        },
      },
    ],
    scene: makeScene([2.0, 0, 0]),
  },
  {
    id: "upon",
    word: "upon",
    tags: ["space", "on", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之上（较正式）",
        tips: ["意义接近 on。", "常用于书面或固定表达。"],
      },
      en: {
        meaning: "upon; on (formal)",
        tips: ["Similar to on.", "More formal or literary."],
      },
    },
    examples: [
      {
        en: "Snow fell upon the roof.",
        i18n: {
          "zh-CN": { translation: "雪落在屋顶上。" },
          en: { translation: "Snow fell upon the roof." },
        },
      },
      {
        en: "The letter lay upon the table.",
        i18n: {
          "zh-CN": { translation: "信放在桌上。" },
          en: { translation: "The letter lay upon the table." },
        },
      },
    ],
    scene: makeScene([0, 0.75, 0]),
  },
  {
    id: "on-top-of",
    word: "on top of",
    tags: ["space", "surface", "position"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……顶部",
        tips: ["强调“在顶上”的位置。", "比 on 更强调顶部。"],
      },
      en: {
        meaning: "on top of; at the top surface",
        tips: ["Emphasizes the top area.", "Stronger than on."],
      },
    },
    examples: [
      {
        en: "The cat sits on top of the box.",
        i18n: {
          "zh-CN": { translation: "猫坐在盒子顶部。" },
          en: { translation: "The cat sits on top of the box." },
        },
      },
      {
        en: "There is a hat on top of the shelf.",
        i18n: {
          "zh-CN": { translation: "架子顶上有顶帽子。" },
          en: { translation: "There is a hat on top of the shelf." },
        },
      },
    ],
    scene: makeScene([0, 0.9, 0]),
  },
  {
    id: "in-the-middle-of",
    word: "in the middle of",
    tags: ["space", "center"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……中间/中央",
        tips: ["强调位于中心位置。", "可用于多个物体之间。"],
      },
      en: {
        meaning: "in the middle of; at the center",
        tips: ["At the central position.", "Between multiple things."],
      },
    },
    examples: [
      {
        en: "The tree is in the middle of the yard.",
        i18n: {
          "zh-CN": { translation: "树在院子中央。" },
          en: { translation: "The tree is in the middle of the yard." },
        },
      },
      {
        en: "He sat in the middle of the group.",
        i18n: {
          "zh-CN": { translation: "他坐在小组中间。" },
          en: { translation: "He sat in the middle of the group." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "in-back-of",
    word: "in back of",
    tags: ["space", "back"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……后面（口语）",
        tips: ["与 behind 意义相近。", "更口语化。"],
      },
      en: {
        meaning: "in back of; behind (informal)",
        tips: ["Similar to behind.", "More informal usage."],
      },
    },
    examples: [
      {
        en: "The bike is in back of the house.",
        i18n: {
          "zh-CN": { translation: "自行车在房子后面。" },
          en: { translation: "The bike is in back of the house." },
        },
      },
      {
        en: "A garden is in back of the shop.",
        i18n: {
          "zh-CN": { translation: "商店后面有个花园。" },
          en: { translation: "A garden is in back of the shop." },
        },
      },
    ],
    scene: makeScene([0, 0, -1.4]),
  },
  {
    id: "ahead-of",
    word: "ahead of",
    tags: ["space", "front"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……前面（前方）",
        tips: ["强调在前方或更靠前。", "与 behind 相对。"],
      },
      en: {
        meaning: "ahead of; in front of",
        tips: ["In front of or further forward.", "Opposite of behind."],
      },
    },
    examples: [
      {
        en: "The car ahead of us turned left.",
        i18n: {
          "zh-CN": { translation: "前面的车左转了。" },
          en: { translation: "The car ahead of us turned left." },
        },
      },
      {
        en: "A sign stands ahead of the bridge.",
        i18n: {
          "zh-CN": { translation: "桥前方有个标志牌。" },
          en: { translation: "A sign stands ahead of the bridge." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.4]),
  },
  {
    id: "close-to",
    word: "close to",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "靠近……（很近）",
        tips: ["强调距离很近。", "比 near 更近。"],
      },
      en: {
        meaning: "close to; very near",
        tips: ["Very near in distance.", "Closer than near."],
      },
    },
    examples: [
      {
        en: "The lamp is close to the bed.",
        i18n: {
          "zh-CN": { translation: "灯离床很近。" },
          en: { translation: "The lamp is close to the bed." },
        },
      },
      {
        en: "We live close to the subway.",
        i18n: {
          "zh-CN": { translation: "我们住得离地铁很近。" },
          en: { translation: "We live close to the subway." },
        },
      },
    ],
    scene: makeScene([0.85, 0, 0]),
  },
  {
    id: "far-from",
    word: "far from",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "远离……",
        tips: ["强调距离很远。", "与 close to 相对。"],
      },
      en: {
        meaning: "far from; distant from",
        tips: ["Very far in distance.", "Opposite of close to."],
      },
    },
    examples: [
      {
        en: "The village is far from the city.",
        i18n: {
          "zh-CN": { translation: "村子离城市很远。" },
          en: { translation: "The village is far from the city." },
        },
      },
      {
        en: "His house is far from here.",
        i18n: {
          "zh-CN": { translation: "他的房子离这里很远。" },
          en: { translation: "His house is far from here." },
        },
      },
    ],
    scene: makeScene([2.2, 0, 0]),
  },
];

const RELATED: Record<string, string[]> = {
  in: ["out-of", "into", "inside", "outside"],
  on: ["off", "onto", "on-top-of", "upon"],
  under: ["over", "below", "beneath", "underneath"],
  over: ["under", "above", "below", "on-top-of"],
  above: ["below", "over", "under", "beneath"],
  below: ["above", "under", "beneath", "underneath"],
  beside: ["next-to", "near", "by", "alongside"],
  "next-to": ["beside", "near", "close-to", "by"],
  near: ["close-to", "next-to", "beside", "far-from"],
  by: ["near", "beside", "next-to", "close-to"],
  behind: ["in-front-of", "in-back-of", "ahead-of", "opposite"],
  "in-front-of": ["behind", "ahead-of", "in-back-of", "opposite"],
  between: ["among", "in-the-middle-of", "around", "amid"],
  among: ["between", "around", "amid", "amidst"],
  around: ["between", "among", "in-the-middle-of", "throughout"],
  inside: ["outside", "in", "within", "out-of"],
  outside: ["inside", "within", "out-of", "in"],
  across: ["through", "past", "across-from", "opposite"],
  through: ["across", "into", "out-of", "past"],
  against: ["on", "beside", "next-to", "close-to"],
  along: ["alongside", "past", "toward", "across"],
  into: ["out-of", "in", "inside", "to"],
  onto: ["on", "off", "on-top-of", "into"],
  "out-of": ["into", "outside", "in", "from"],
  at: ["in", "on", "near", "by"],
  to: ["from", "toward", "into", "onto"],
  from: ["to", "out-of", "toward", "past"],
  up: ["down", "above", "over", "onto"],
  down: ["up", "below", "under", "off"],
  off: ["on", "onto", "down", "from"],
  beneath: ["above", "under", "below", "underneath"],
  underneath: ["under", "below", "beneath", "above"],
  within: ["without", "inside", "in", "outside"],
  without: ["within", "outside", "out-of", "in"],
  past: ["beyond", "across", "through", "toward"],
  toward: ["to", "from", "past", "across"],
  "across-from": ["opposite", "across", "near", "far-from"],
  opposite: ["across-from", "in-front-of", "across", "behind"],
  throughout: ["around", "among", "in-the-middle-of", "amid"],
  amid: ["among", "amidst", "in-the-middle-of", "between"],
  amidst: ["amid", "among", "in-the-middle-of", "around"],
  alongside: ["along", "beside", "next-to", "close-to"],
  beyond: ["past", "far-from", "across", "outside"],
  upon: ["on", "on-top-of", "onto", "over"],
  "on-top-of": ["on", "upon", "onto", "over"],
  "in-the-middle-of": ["between", "among", "around", "amid"],
  "in-back-of": ["behind", "in-front-of", "ahead-of", "opposite"],
  "ahead-of": ["in-front-of", "behind", "in-back-of", "opposite"],
  "close-to": ["near", "next-to", "beside", "by"],
  "far-from": ["near", "beyond", "across", "close-to"],
};

const FALLBACK_IDS = PREPOSITIONS_BASE.map((entry) => entry.id);

function buildRelated(entryId: string) {
  const initial = RELATED[entryId] ?? [];
  const unique: string[] = [];
  initial.forEach((id) => {
    if (id !== entryId && !unique.includes(id)) {
      unique.push(id);
    }
  });
  for (const id of FALLBACK_IDS) {
    if (unique.length >= 4) break;
    if (id !== entryId && !unique.includes(id)) {
      unique.push(id);
    }
  }
  return unique.slice(0, 4);
}

export const PREPOSITIONS: PrepositionEntry[] = PREPOSITIONS_BASE.map((entry) => ({
  ...entry,
  relatedIds: buildRelated(entry.id),
}));

export function getPrepositionById(id: string) {
  return PREPOSITIONS.find((entry) => entry.id === id);
}

export function getPrepositionIndex(id: string) {
  return PREPOSITIONS.findIndex((entry) => entry.id === id);
}
