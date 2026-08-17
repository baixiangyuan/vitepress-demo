import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'bilibili_learning_bot',
  description: '全自动 B 站 AI 学习互动机器人手册',
  base: '/',
  appearance: true,

  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    ['link', { rel: 'icon', type: 'image/jpeg', href: 'https://phototestbxybilibili.bxya.top' }]
  ],

  // 共享配置：所有语言通用
  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoyaya191/bilibili_learning_bot' }
    ],

    footer: {
      message: '基于 MIT License 开源',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '部署', link: '/deploy/' },
          { text: '日志', link: '/changelog' },
          { text: '隐私', link: '/privacy' },
          { text: '联系我们', link: '/contact' },
          { text: '💰 赞助', link: '/sponsor' }
        ],
        sidebar: [
          {
            text: '📖 项目指南',
            items: [
              { text: '项目简介', link: '/guide/' },
              { text: '功能特点', link: '/guide/features' },
              { text: '项目结构', link: '/guide/structure' },
              { text: '主菜单', link: '/guide/menu' }
            ]
          },
          {
            text: '💻 部署指南',
            items: [
              { text: '快速开始', link: '/deploy/' },
              { text: 'Windows 部署', link: '/deploy/windows' },
              { text: 'Linux 配置', link: '/deploy/linux' },
              { text: 'Termux 安卓', link: '/deploy/termux' },
              { text: '高级集群', link: '/deploy/cluster' }
            ]
          },
          { text: '📜 更新日志', link: '/changelog' },
          { text: '🔒 隐私安全', link: '/privacy' },
          { text: '📮 联系我们', link: '/contact' },
          { text: '💰 赞助支持', link: '/sponsor' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Deploy', link: '/en/deploy/' },
          { text: 'Changelog', link: '/en/changelog' },
          { text: 'Privacy', link: '/en/privacy' },
          { text: 'Contact', link: '/en/contact' },
          { text: '💰 Sponsor', link: '/en/sponsor' }
        ],
        sidebar: [
          {
            text: '📖 Guide',
            items: [
              { text: 'Introduction', link: '/en/guide/' },
              { text: 'Features', link: '/en/guide/features' },
              { text: 'Project Structure', link: '/en/guide/structure' },
              { text: 'Main Menu', link: '/en/guide/menu' }
            ]
          },
          {
            text: '💻 Deployment',
            items: [
              { text: 'Quick Start', link: '/en/deploy/' },
              { text: 'Windows', link: '/en/deploy/windows' },
              { text: 'Linux', link: '/en/deploy/linux' },
              { text: 'Termux (Android)', link: '/en/deploy/termux' },
              { text: 'Cluster', link: '/en/deploy/cluster' }
            ]
          },
          { text: '📜 Changelog', link: '/en/changelog' },
          { text: '🔒 Privacy', link: '/en/privacy' },
          { text: '📮 Contact', link: '/en/contact' },
          { text: '💰 Sponsor', link: '/en/sponsor' }
        ]
      }
    }
  }
})
