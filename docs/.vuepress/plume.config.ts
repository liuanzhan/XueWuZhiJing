import { defineThemeConfig } from 'vuepress-theme-plume';
import { enNavbar, zhNavbar } from './navbar';
import { zhCollections, enCollections } from './collections';

export default defineThemeConfig({
  logo: '/favicon.jpg',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://gitcode.com/liuanzhan' },
    { icon: 'telegram', link: 'https://t.me/yxzlwz' },
  ],
  navbarSocialInclude: ['github'],
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  copyright: 'CC-BY-NC-SA-4.0',

  prevPage: false,
  nextPage: false,
  createTime: true,
  locales: {
    '/': {
      profile: {
        avatar: '/favicon.jpg',
        name: '学无止境',
        // description: '欢迎来到学无止境！',
        circle: true,
        location: '中国',
        organization: '学无止境',
      },
      collections:zhCollections,
      navbar: zhNavbar,
      footer: {
        message: `分享鸿蒙、仓颉与通用工程化的教程与资源`,
        copyright: `©️ 学无止境 2018-${new Date().getFullYear()} | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>`,
      },
    },
    '/en/': {
      profile: {
        avatar: '/favicon.jpg',
        name: 'Xue Wu Zhi Jing',
        description: 'Tutorials and resources',
        circle: true,
        location: 'China',
        organization: 'Xue Wu Zhi Jing',
      },
      collections:enCollections,
      navbar: enNavbar,
      footer: {
        message: `Tutorials and shared resources`,
        copyright: `©️ Xue Wu Zhi Jing 2018-${new Date().getFullYear()} | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>`,
      },
    },
  },
});
