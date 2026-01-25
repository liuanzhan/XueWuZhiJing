import { defineClientConfig } from 'vuepress/client';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import './style.scss';

// 自定义名言库 - 符合学习、编程、教育主题
const customQuotes = [
  // 中文名言
  {
    content: "学海无涯，代码为舟",
    author: "程序人生",
    from: "编程箴言"
  },
  {
    content: "编程不是为了改变世界，而是为了让世界变得更好",
    author: "编程箴言",
    from: "技术哲学"
  },
  {
    content: "每一次调试都是一次学习，每一次重构都是一次成长",
    author: "开发者箴言",
    from: "编程智慧"
  },
  {
    content: "教学相长，在分享知识的过程中，我们自己也得到了成长",
    author: "教育格言",
    from: "师者之道"
  },
  {
    content: "代码如诗，架构如画，系统如城",
    author: "架构师箴言",
    from: "软件工程"
  },
  {
    content: "学习新技术就像攀登高峰，每一步都充满挑战与喜悦",
    author: "学习箴言",
    from: "成长之路"
  },
  {
    content: "好的代码是最好的文档，清晰的逻辑胜过华丽的注释",
    author: "编程原则",
    from: "代码规范"
  },
  {
    content: "从Hello World开始，每一行代码都是通往大师之路",
    author: "编程之旅",
    from: "入门之心"
  },
  {
    content: "鸿蒙生态，仓颉为伴，共筑智能新时代",
    author: "科技之光",
    from: "未来展望"
  },
  {
    content: "知识的海洋没有尽头，学习的脚步永不停歇",
    author: "学无止境",
    from: "教育理念"
  },
  {
    content: "在代码的世界里，每一个bug都是隐藏的宝藏",
    author: "调试箴言",
    from: "编程乐趣"
  },
  {
    content: "技术的本质不是复杂，而是化繁为简",
    author: "技术哲学",
    from: "创新之道"
  },

  // 英文名言
  {
    content: "Code is poetry written in logic",
    author: "Programming Wisdom",
    from: "Tech Proverbs"
  },
  {
    content: "The best way to predict the future is to create it",
    author: "Peter Drucker",
    from: "Innovation"
  },
  {
    content: "First, solve the problem. Then, write the code",
    author: "John Johnson",
    from: "Programming Principles"
  },
  {
    content: "Programming is not about what you know; it's about what you can figure out",
    author: "Chris Pine",
    from: "Learning Code"
  },
  {
    content: "The only way to learn a new programming language is by writing programs in it",
    author: "Dennis Ritchie",
    from: "Programming Wisdom"
  },
  {
    content: "Clean code always looks like it was written by someone who cares",
    author: "Robert C. Martin",
    from: "Clean Code"
  },
  {
    content: "Simplicity is the ultimate sophistication in programming",
    author: "Tech Philosophy",
    from: "Software Design"
  },
  {
    content: "Every expert was once a beginner",
    author: "Helen Hayes",
    from: "Learning Journey"
  },
  {
    content: "Technology is best when it brings people together",
    author: "Matt Mullenweg",
    from: "Digital Age"
  },
  {
    content: "The future belongs to those who learn more skills and combine them in creative ways",
    author: "Robert Greene",
    from: "Future Skills"
  }
];

const updateYiyan = () => {
  const element = document.getElementsByClassName('hero-text')[0];
  if (!element) return;

  // 根据页面语言选择相应的名言
  let quotes;
  if (window.location.pathname === '/en/') {
    // 英文页面使用英文名言
    quotes = customQuotes.filter(quote => /^[A-Za-z]/.test(quote.content));
  } else {
    // 中文页面使用中文名言
    quotes = customQuotes.filter(quote => /^[^\x00-\x7F]/.test(quote.content));
  }

  // 随机选择一条名言
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // 格式化显示
  const yiyan = `${randomQuote.content} - 「${randomQuote.from} · ${randomQuote.author}」`;
  element.innerHTML = yiyan;
};

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    onMounted(() => {
      updateYiyan();
      const route = useRoute();
      watch(route, updateYiyan);
    });
  },
});
