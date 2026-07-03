import DefaultTheme from 'vitepress/theme'
import { nextTick } from 'vue'

export default {
  ...DefaultTheme,
  
  async enhanceApp({ app, router }) {
    if (typeof window === 'undefined') return
    
    // 检查浏览器是否支持 View Transition API
    const supportsViewTransition = 'startViewTransition' in document
    
    if (supportsViewTransition) {
      // 使用 View Transition API 实现页面切换动画
      router.beforeEach(async (to, from, next) => {
        const transition = document.startViewTransition(() => {
          next()
        })
        
        await transition.finished
      })
    } else {
      // 降级方案：简单的淡入淡出
      router.beforeEach((to, from, next) => {
        const content = document.querySelector('.VPContent')
        if (content) {
          content.style.opacity = '0'
          content.style.transition = 'opacity 0.3s ease'
        }
        next()
      })
      
      router.afterEach(() => {
        nextTick(() => {
          const content = document.querySelector('.VPContent')
          if (content) {
            requestAnimationFrame(() => {
              content.style.opacity = '1'
            })
          }
        })
      })
    }
  }
}
