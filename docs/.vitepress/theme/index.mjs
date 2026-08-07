import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  // 添加 enhanceApp 钩子
  async enhanceApp({ app, router, siteData }) {
    // 关键：判断不是服务端渲染（SSR）环境才执行
    if (!import.meta.env.SSR) {
      try {
        const { wlLive2d } = await import('wl-live2d')
        wlLive2d({
          models: [
            {
              // 替换成你喜欢的模型地址
              path: 'https://fastly.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
              scale: 0.6,
              position: { x: 0, y: 0 }
            }
          ]
        })
      } catch (error) {
        console.error('Live2D 加载失败:', error)
      }
    }
  }
}