import type { LearningCategory, PrepositionExample } from "@/data/types";

type CategoryExampleMap = Partial<
  Record<string, Partial<Record<LearningCategory, PrepositionExample[]>>>
>;

function example(en: string, zh: string): PrepositionExample {
  return {
    en,
    i18n: {
      en: { translation: en },
      "zh-CN": { translation: zh },
    },
  };
}

export const CATEGORY_EXAMPLE_BANK: CategoryExampleMap = {
  in: {
    time: [
      example("She was born in 2010.", "她出生于 2010 年。"),
      example("We will finish it in two weeks.", "我们会在两周内完成它。"),
    ],
  },
  on: {
    time: [
      example("The meeting is on Monday.", "会议在周一举行。"),
      example("Our exam is on June 12.", "我们的考试在 6 月 12 日。"),
    ],
  },
  at: {
    time: [
      example("The class starts at 8:30.", "课程在 8:30 开始。"),
      example("I wake up at dawn.", "我在黎明时起床。"),
    ],
  },
  by: {
    time: [
      example("Please submit it by Friday.", "请在周五前提交。"),
      example("We need to leave by 6 p.m.", "我们得在下午 6 点前出发。"),
    ],
  },
  between: {
    time: [
      example("Call me between 7 and 9 p.m.", "请在晚上 7 点到 9 点之间给我打电话。"),
      example("The shop is open between lunch and dinner.", "这家店在午饭和晚饭之间营业。"),
    ],
  },
  through: {
    time: [
      example("The rain lasted through the night.", "这场雨持续了一整夜。"),
      example("We worked through the weekend.", "我们整个周末都在工作。"),
    ],
  },
  over: {
    time: [
      example("I learned a lot over the summer.", "我在整个夏天学到了很多。"),
      example("We talked over lunch.", "我们在午餐期间聊了很多。"),
    ],
  },
  around: {
    time: [
      example("Let's meet around 7 p.m.", "我们大约晚上 7 点见。"),
      example("She usually arrives around noon.", "她通常中午左右到。"),
    ],
  },
  from: {
    time: [
      example("The workshop runs from Monday to Wednesday.", "这个工作坊从周一持续到周三。"),
      example("He worked from morning until late.", "他从早上一直工作到很晚。"),
    ],
  },
  to: {
    time: [
      example("The office is open from 9 to 5.", "办公室从 9 点营业到 5 点。"),
      example("It is ten to six.", "现在是差十分六点。"),
    ],
  },
  past: {
    time: [
      example("It is half past nine.", "现在是九点半。"),
      example("The train left at a quarter past eight.", "火车在八点一刻出发。"),
    ],
  },
  within: {
    time: [
      example("Please reply within 24 hours.", "请在 24 小时内回复。"),
      example("You should finish it within a month.", "你应该在一个月内完成。"),
    ],
  },
  throughout: {
    time: [
      example("The lights stayed on throughout the night.", "灯整晚都亮着。"),
      example("He felt calm throughout the interview.", "他在整个面试过程中都很冷静。"),
    ],
  },
  under: {
    time: [
      example("We finished it in under ten minutes.", "我们不到十分钟就完成了。"),
      example("The ad runs for under a week.", "这个广告投放不到一周。"),
    ],
  },
  beyond: {
    time: [
      example("The party continued beyond midnight.", "派对持续到了午夜之后。"),
      example("The delay stretched beyond two hours.", "延误超过了两小时。"),
    ],
  },
  "ahead-of": {
    time: [
      example("We arrived ahead of schedule.", "我们提前到达了。"),
      example("She submitted the report ahead of the deadline.", "她提前于截止日期提交了报告。"),
    ],
  },
  behind: {
    time: [
      example("The project is behind schedule.", "这个项目进度落后。"),
      example("We are two weeks behind the timetable.", "我们比时间表晚了两周。"),
    ],
  },
};
