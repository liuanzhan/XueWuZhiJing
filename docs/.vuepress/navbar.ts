import { defineNavbarConfig } from 'vuepress-theme-plume';

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '教程总览',
    items: [
      { text: '教程首页', link: '/tutorial/' },
      { text: '仓颉教程', link: '/tutorial/cangjie/' },
      { text: '鸿蒙教程', link: '/tutorial/harmony/' },
      { text: 'OpenHarmony 教程', link: '/tutorial/openharmony/' },
    ],
  },
  { text: '资源分享', link: '/project/' },
  { text: '关于', link: '/about/README.md' },
  { text: '友链', link: '/friendship/' },
  {
    text: '更多',
    items: [
      { text: 'Python 官方文档', link: 'https://docs.python.org/zh-cn/3/' },
      { text: '鸿蒙官方文档', link: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide' },
      { text: 'Java 官方文档', link: 'https://docs.oracle.com/en/java/javase/' },
      { text: 'SpringBoot 官方文档', link: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
      { text: 'MySQL 官方文档', link: 'https://dev.mysql.com/doc/' },
      { text: 'Redis 官方文档', link: 'https://redis.io/documentation' },
      { text: 'Docker 官方文档', link: 'https://docs.docker.com/' },
      { text: 'Git 官方文档', link: 'https://git-scm.com/docs' },
    ],
  },
]);

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Resources', link: '/project/' },
  { text: 'About', link: '/en/about/' },
  { text: 'Friends', link: '/friendship/' },
  {
    text: 'More',
    items: [
      { text: 'Python Official Docs', link: 'https://docs.python.org/3/' },
      { text: 'HarmonyOS Official Docs', link: 'https://developer.harmonyos.com/' },
      { text: 'Java Official Docs', link: 'https://docs.oracle.com/en/java/javase/' },
      { text: 'SpringBoot Official Docs', link: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
      { text: 'MySQL Official Docs', link: 'https://dev.mysql.com/doc/' },
      { text: 'Redis Official Docs', link: 'https://redis.io/documentation' },
      { text: 'Docker Official Docs', link: 'https://docs.docker.com/' },
      { text: 'Git Official Docs', link: 'https://git-scm.com/docs' },
    ],
  },
]);
