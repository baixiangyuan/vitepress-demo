# 项目结构

> 基于 **v3.1.6** 整理，与上游仓库 [xiaoyaya191/bilibili_learning_bot](https://github.com/xiaoyaya191/bilibili_learning_bot) 保持一致。

```
├── main.py               # 🚀 主入口（CLI 交互菜单 + 自动化启动）
├── desktop_app.py        # 🖥️ Windows EXE 启动器（托盘 + 面板）
├── web_panel.py          # 🌐 Flask Web 管理面板（后端）
├── web_panel.html        # Web 面板模板（Claude 风格，亮暗双模式）
├── BiliLearn.spec        # 📦 PyInstaller 打包配置
├── build_windows_exe.bat # 📦 一键打包脚本（Windows）
├── install.sh            # 📱 手机端(Termux)单文件安装器（镜像拉取 + 全局命令）
├── deploy_termux.sh      # 📱 Termux 交互式部署脚本
│
├── api/                  # 🔌 B站 API 层（客户端 / 登录 / 字幕 / 节流）
├── brain/                # 🧠 核心大脑（Mixin 组合：主循环 / 视频理解 / AI 调用 / 会话）
├── cli/                  # 💻 命令行菜单
├── core/                 # ⚙️ 配置 / 全局变量 / 用户数据路径 / 账号工作空间 / 恢复出厂
├── knowledge/            # 📚 知识库（分类 / 搜索 / 浏览 / 复习 / 自定义）
├── persona/              # 🎭 人格 + 心理画像引擎
├── security/             # 🛡️ 内容安全审查
├── services/             # 🔧 61 个服务（深研 / 测验 / 思维导图 / Word / 兴趣引擎 / RAG / 接口池 / Token 观测…）
├── ob_bridge/            # 🌉 开放平台桥接（鉴权 / AB 测试 / 审计）
├── xingye_bot/           # 🤖 扩展组件（LLM / 状态 / 记忆 / 进化 / ASR / 网格帧 / 视觉预览）
├── utils/                # 🛠 通用工具（托盘 / 启动器 / SQLite 存储 / 锁）
├── templates/            # 🎨 导出模板（video_export 公共引擎）与账号管理页
├── assets/               # 🎨 面板 JS/CSS 资源（学习 / 复习 / 账号 / 进化 / Token…）
├── tests/                # 🧪 pytest 测试（全量 1056 项通过）
├── app-icons/            # 应用图标
└── dev_refs/             # 📖 二次开发参考文档
```

## 关键目录说明

- **`main.py`**：CLI 交互菜单入口，启动时可选智能省 token 模式或按已保存配置运行，也可直接进入自动化循环。
- **`desktop_app.py`**：Windows EXE 启动器，负责系统托盘、自动打开浏览器，并按需以子进程拉起 bot / monitor / standby。
- **`web_panel.py` + `web_panel.html`**：Flask 后端的 Web 管理面板，提供仪表盘、机器人控制、实时监听、人格管理、知识辅导、深研、账号管理、Token 仪表盘、AI 进化、备份还原等可视化界面。
- **`core/account_workspaces.py` / `account_processes.py`**：多账号工作空间（最多 10 个），独立端口、配置、Cookie 与知识库，跨进程锁与原子保存。
- **`services/`**：61 个独立服务模块，覆盖深度研习、测验生成、思维导图、Word/图片导出、本地收藏、点赞回顾、提醒、RAG 问答、多 API 接口池、Token 可观测、视频观看队列、AI 进化引擎、人格进化、日记调度等。
- **`services/video_export_renderer.py` + `templates/video_export/`**：视频/文档 HTML 导出的统一公共渲染引擎（章节目录抽屉、自动翻页、离线资源内嵌）。
- **`ob_bridge/`**：开放平台桥接，处理鉴权、AB 测试与审计。
- **`xingye_bot/`**：扩展组件，含 LLM、状态、记忆、进化、ASR、网格帧、视觉预览等能力。

> 数据目录：源码版存于项目内 `Data/`；Web / EXE 版自动创建在 `%LOCALAPPDATA%\BiliLearn`（打包产物零隐私数据，升级不丢）。v3.1.6 起账号数据以 SQLite（WAL + 原子写入）持久化，并保留 JSON 兼容镜像。
