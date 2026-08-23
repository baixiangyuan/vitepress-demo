# Android Termux 智能手机挂机配置

在 Android 手机利用 Termux 长期挂机的核心配置（基于 **v3.1.4**）：

## 一键安装（推荐）

```bash
pkg install curl -y
curl -O https://raw.githubusercontent.com/xiaoyaya191/bilibili_learning_bot/main/install.sh
bash install.sh
```

安装流程：询问安装 → 自选路径（默认 `~/bililearn`）→ 免责声明输入「我同意」→ 镜像拉取源码 → 装依赖 → 注册全局命令。**全程自动测速 GitHub 镜像拉取源码**，无需手动配置代理。

## 启动

装完直接启动（三选一，效果相同）：

```bash
bililearn                # 或
abiligent                # 或
bilibili_learning_bot
```

> 也可用 `deploy_termux.sh`（交互式部署）或源码目录内 `bash install_termux.sh`。

启动后会给出菜单，可选：

- **机器人菜单**（`main.py` 交互式）：按菜单启动 / 登录 / 监听
- **Web 管理面板**（`web_panel.py`）：默认 `http://localhost:18083`
- **后台运行 Web 面板**：`nohup` 常驻，日志写入 `bot_web.log`，PID 写入 `bot.pid`
- **安装 / 更新全部依赖**

::: tip 省电建议
- 系统关闭监控模式、各类动态壁纸与自启动管理器
- 将设备接入有线电源，保持 "保持唤醒状态"
- 优先在 Web 面板 / CLI 菜单中启用「实时监听」模式（只盯私信 + 评论，CPU / 流量最低），而非完整刷视频
:::
