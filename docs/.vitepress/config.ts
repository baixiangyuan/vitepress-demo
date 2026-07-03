import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'bilibili_learning_bot',
  description: '全自动 B 站 AI 学习互动机器人手册',
  base: '/',
  lang: 'zh-CN',

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
      { text: '项目简介', link: '/#项目简介' },
      { text: '功能特点', link: '/#功能特点' },
      { text: '项目结构', link: '/#项目结构' },
      { text: '部署指南', link: '/#部署与快速开始' },
      { text: '主菜单', link: '/#主菜单按键速览' },
      { text: '隐私安全', link: '/#隐私安全' }
    ],

    sidebar: [
      {
        text: '项目概述',
        items: [
          { text: '项目简介', link: '/#项目简介' },
          { text: '功能特点', link: '/#功能特点' },
          { text: '项目结构', link: '/#项目结构' }
        ]
      },
      {
        text: '部署指南',
        items: [
          { text: '部署与快速开始', link: '/#部署与快速开始' },
          { text: 'Linux 深度配置', link: '/#linux-深度配置手册' },
          { text: 'Termux 安卓配置', link: '/#android-termux-智能手机挂机配置' },
          { text: '隔离环境集群', link: '/#高级集群与隔离沙箱调度' }
        ]
      },
      {
        text: '使用说明',
        items: [
          { text: '主菜单按键速览', link: '/#主菜单按键速览' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '更新日志', link: '/#更新日志' },
          { text: '隐私安全', link: '/#隐私安全' },
          { text: '二创说明', link: '/#版权与二创合规说明' }
        ]
      }
    ],

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
