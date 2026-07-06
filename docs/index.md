---
layout: home

hero:
  name: bilibili_learning_bot
  text: AI 学习互动机器人
  tagline: 全自动 B 站 AI 学习互动机器人，支持 Linux / Windows / Android / Docker 多平台部署
  actions:
    - theme: brand
      text: 快速开始
      link: /guide
    - theme: alt
      text: GitHub 仓库
      link: https://github.com/xiaoyaya191/bilibili_learning_bot

features:
  - title: AI 智能浏览
    details: AI 驱动推荐流浏览，智能判定视频价值，自动评分、投币、归档
  - title: 知识库系统
    details: 三层分类归档 + 向量语义检索，自动提纯高质量内容
  - title: 评论互动
    details: 多用户独立上下文深度记忆互动，@bot 智能响应
  - title: 独立监听引擎
    details: 极简 CPU 监听模式，只盯私信和评论，节省 80% 资源
  - title: HTML PPT 生成
    details: 将视频知识转化为精美卡片网页，支持 19 种视觉风格
  - title: 日记与自我进化
    details: 全天候行为日志沉淀，AI 自动反思实现人格进化
---

<style>
/* OpenBiliClaw style home page */
.VPHero {
  background: linear-gradient(135deg, #fffaf4 0%, #f1f8fb 50%, #fffdf9 100%) !important;
  position: relative;
  overflow: hidden;
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.VPHero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(251, 114, 153, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.VPHero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(53, 174, 222, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.VPHero .container {
  position: relative;
  z-index: 1;
}

.VPHero .name {
  font-size: 3.2rem !important;
  font-weight: 800 !important;
  letter-spacing: -0.03em !important;
  background: linear-gradient(135deg, #fb7299, #35aede) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

.VPHero .text {
  font-size: 1.8rem !important;
  font-weight: 600 !important;
  color: #3f4650 !important;
  -webkit-text-fill-color: #3f4650 !important;
  margin-top: 12px !important;
}

.VPHero .tagline {
  font-size: 1.1rem !important;
  color: #69717d !important;
  max-width: 580px !important;
  line-height: 1.7 !important;
  margin-top: 20px !important;
}

.VPHero .actions {
  margin-top: 40px !important;
  gap: 16px !important;
}

.VPHero .VPButton {
  border-radius: 8px !important;
  padding: 14px 32px !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.VPHero .VPButton.brand {
  background: linear-gradient(135deg, #fb7299, #d94976) !important;
  border: none !important;
  color: #fff !important;
  box-shadow: 0 8px 24px rgba(251, 114, 153, 0.3) !important;
}

.VPHero .VPButton.brand:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(251, 114, 153, 0.4) !important;
}

.VPHero .VPButton.alt {
  background: #fffdf9 !important;
  border: 1.5px solid rgba(22, 24, 29, 0.13) !important;
  color: #3f4650 !important;
}

.VPHero .VPButton.alt:hover {
  border-color: #fb7299 !important;
  color: #fb7299 !important;
}

/* Features region */
.VPFeatures {
  background: linear-gradient(180deg, #fffaf4 0%, #fffdf9 100%) !important;
  padding: 80px 0 !important;
}

.VPFeatures .items {
  gap: 24px !important;
}

.VPFeatures .VPFeature {
  background: #fff !important;
  border: 1px solid rgba(22, 24, 29, 0.08) !important;
  border-radius: 12px !important;
  padding: 32px !important;
  transition: all 0.4s ease !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
}

.VPFeatures .VPFeature:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 50px rgba(24, 31, 42, 0.12) !important;
  border-color: rgba(251, 114, 153, 0.2) !important;
}

.VPFeatures .VPFeature .title {
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  color: #16181d !important;
  margin-bottom: 12px !important;
}

.VPFeatures .VPFeature .details {
  font-size: 0.95rem !important;
  color: #69717d !important;
  line-height: 1.7 !important;
}

/* Responsive */
@media (max-width: 768px) {
  .VPHero .name {
    font-size: 2.2rem !important;
  }
  
  .VPHero .text {
    font-size: 1.3rem !important;
  }
}
</style>
