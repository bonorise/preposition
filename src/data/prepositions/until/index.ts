import en from "./content/en";
import zhCN from "./content/zh-CN";
import meta from "./meta";
import scene from "./scene";

const prepositionModule = {
  meta,
  scene,
  content: {
    en,
    "zh-CN": zhCN,
  },
};

export default prepositionModule;
