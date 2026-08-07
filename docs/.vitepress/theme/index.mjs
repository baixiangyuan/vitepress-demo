import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      try {
        // 直接从 CDN 加载，不经过本地构建
        const { wlLive2d } = await import(
          'https://fastly.jsdelivr.net/npm/wl-live2d/dist/es/index.js'
        )
        
        wlLive2d({
          models: [
            {
              path: 'https://fastly.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
              scale: 0.6,
              position: { x: 0, y: 0 }
            }
          ]
        })
      } catch (error) {
        console.error('Live2D 看板娘加载失败:', error)
      }
    }
  }
}