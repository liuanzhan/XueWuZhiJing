import { defineCollections } from 'vuepress-theme-plume';

export const zhCollections = defineCollections([
  { type: 'doc', dir: 'tutorial', title: '教程总览', autoFrontmatter: false },
  { type: 'doc', dir: 'tutorial/cangjie', title: '仓颉教程', autoFrontmatter: false },
  { type: 'doc', dir: 'tutorial/harmony', title: '鸿蒙教程', autoFrontmatter: false },
  { type: 'doc', dir: 'tutorial/openharmony', title: 'OpenHarmony 教程', autoFrontmatter: false },
  { type: 'doc', dir: 'project', title: '资源分享', autoFrontmatter: false },
  { type: 'doc', dir: 'friendship', title: '友链', autoFrontmatter: false },
  { type: 'doc', dir: 'about', title: '关于', autoFrontmatter: false },
  {
    type: 'doc',
    dir: 'genuine-oj',
    title: 'Genuine OJ',
    autoFrontmatter: false,
    sidebar: [
      '',
      {
        text: '部署',
        items: [
          'before-start',
          'frontend',
          'backend',
          'judger',
          'end-relationship',
          'docker',
        ],
      },
      {
        text: '使用说明',
        items: [
          'add-judge-language',
          'test-case',
          'about-hidden',
          'import-problem',
          'bug-and-feature',
        ],
      },
    ],
  },
]);

export const enCollections = defineCollections([
  { type: 'doc', dir: 'about', title: 'About', autoFrontmatter: false },
]);
