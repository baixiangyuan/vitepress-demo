# Android Termux 智能手机挂机配置

在 Android 手机利用 Termux 长期挂机的核心配置：

```bash
# 1. 克隆仓库
git clone https://github.com/xiaoyaya191/bilibili_learning_bot.git
cd bilibili_learning_bot

# 2. 安装依赖（优先用轻量换源）
pip install -r requirements.txt

# 3. 一键启动（脚本自带依赖自检与菜单）
bash start.sh
```

启动脚本 `start.sh` 会给出菜单，可选：

- **机器人菜单**（`main.py` 交互式）：按菜单启动 / 登录 / 监听
- **Web 管理面板**（`web_panel.py`）：默认 http://localhost:18083
- **后台运行 Web 面板**：`nohup` 常驻，日志写入 `bot_web.log`，PID 写入 `bot.pid`
- **安装 / 更新全部依赖**

::: tip 省电建议
- 系统关闭监控模式、各类动态壁纸与自启动管理器
- 将设备接入有线电源，保持 "保持唤醒状态"
- 优先在 Web 面板 / CLI 菜单中启用「实时监听」模式（只盯私信 + 评论，CPU / 流量最低），而非完整刷视频
:::
