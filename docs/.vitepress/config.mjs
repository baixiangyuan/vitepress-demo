import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'bilibili_learning_bot',
  description: '全自动 B 站 AI 学习互动机器人手册',
  base: '/',
  lang: 'zh-CN',
  appearance: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '📖 指南', link: '/guide' },
      { text: '部署', link: '/deploy' },
      { text: '主菜单', link: '/menu' },
      { text: '隐私安全', link: '/privacy' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '项目概述',
          items: [
            { text: '项目简介', link: '/guide/#项目简介' },
            { text: '功能特点', link: '/guide/#功能特点' },
            { text: '项目结构', link: '/guide/#项目结构' }
          ]
        }
      ],
      '/deploy/': [
        {
          text: '部署指南',
          items: [
            { text: '快速开始', link: '/deploy/#部署与快速开始' },
            { text: 'Linux 配置', link: '/deploy/#linux-深度配置手册' },
            { text: 'Termux 安卓', link: '/deploy/#android-termux-智能手机挂机配置' },
            { text: '高级集群', link: '/deploy/#高级集群与隔离沙箱调度' }
          ]
        }
      ],
      '/menu/': [
        {
          text: '使用说明',
          items: [
            { text: '主菜单按键速览', link: '/menu/' }
          ]
        }
      ],
      '/privacy/': [
        {
          text: '其他',
          items: [
            { text: '更新日志', link: '/privacy/#更新日志' },
            { text: '隐私安全', link: '/privacy/#隐私安全' },
            { text: '二创说明', link: '/privacy/#版权与二创合规说明' }
          ]
        }
      ]
    },

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
  }
})
