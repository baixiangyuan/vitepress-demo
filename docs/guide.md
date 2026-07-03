# 项目简介

**bilibili_learning_bot** 是基于重构标准规范开发的全自动 B 站 AI 学习互动机器人。

系统总规模从单体巨无霸重构扩展至 **~33,000 行 Python 核心架构**，并将混乱文件重组为 **80 个高内聚的结构化模块**。

系统核心大脑由原先 16.8K 行的单体文件重塑为仅 **55 行的 `AgentBrain` 调度中心**，通过挂载 **13 个功能纯净的 Mixin** 扩展类组合驱动。

::: tip 关键特性
- 核心版本：**v3.0.0 重构版**
- 模块体系：**80 个结构模块**
- 安全密码加固
:::

---

## 功能特点

| 功能 | 说明 |
|------|------|
| 💻 智能视频浏览 | AI 驱动推荐流浏览，主观判定视频内容价值完成评分、投币或一键归档 |
| 📚 知识库系统 | 自动提纯高质量内容，支持精细的三层分类归档与向量语义检索 |
| 💬 评论互动/私信 | 支持多用户独立上下文深度记忆互动，配合节奏控制与视觉分析 |
| 📡 独立监听 & @响应 | 新增独立监听（L键），只盯私信评论；在视频下收到 `@bot 总结` 时自动智能回复 |
| 📺 精美 HTML PPT 转化 | 支持将已学知识生成精美卡片网页，支持 19 种视觉风格（含 Claude 主题） |
| 🧬 日记与自我进化 | 全天候行为日志沉淀，自动触发自我 AI 反思，实现人格进化 |

---

## 项目结构

```
├── main.py               # 🚀 主程序唯一流启动入口
├── start_cli.py          # 💻 终端菜单兼容层
├── web_panel.py          # 🌐 Flask 可视化管理面板（支持亮暗主题切换）
├── api/                  # 🔌 B站 API 鉴权/流控/风控层
│   ├── client.py         # HTTP/2 连接复用、WBI签名缓存
│   └── subtitles.py      # 字幕获取与412风控降级 fallback
├── brain/                # 🧠 核心混入多重组合大脑
│   ├── agent_brain.py    # 55行纯委托类 (包含13个核心 Mixin)
│   ├── _brain_loop.py    # 主推荐流状态机轮巡核心
│   └── monitor.py        # 📡 实时独立被动监听引擎
├── cli/                  # 💻 交互菜单命令与终端界面
├── core/                 # ⚙️ 全局常量、环境变量及核心配置
├── knowledge/            # 📚 三层分类知识库、浏览、整理与重温
├── persona/              # 🎭 人格/心情/日记/进化管理系统
├── security/             # 🛡️ 内容安全审查防线
├── services/             # 🔧 外部服务与工具封装
└── templates/            # 🎨 内置 Claude 专业设计卡片规范模板
```

---

## 部署与快速开始

### 1. 安装运行环境依赖

::: warning
请确保安装最新的 `bilibili-api-python`（>=17.4.1），不要错装已被弃用的旧包。
:::

```bash
pip install -r requirements.txt
# 若之前环境混淆错装了旧包，请先执行清空：
# pip uninstall bilibili-api -y

# 推荐安装 ffmpeg 以便用于执行多模态视频视觉帧断点切片抽帧
# apt install ffmpeg     # Linux
# pkg install ffmpeg     # Termux
```

### 2. 初始化运行配置文件

```bash
cp config.example.json Data/config.json
# 打开 Data/config.json 并按需填入大模型 API Key（统一中转或兼容接口）
```

### 3. 呼叫控制端启动

| 启动模式 | 命令 | 说明 |
|----------|------|------|
| 单实例 | `python main.py` | 💻 终端菜单交互模式 |
| 后台监听 | `python main.py --monitor` | 📡 纯监听模式（CPU最低） |
| Web 面板 | `python web_panel.py` | 🌐 Flask 浏览器可视化管理 |
| Docker | `docker-compose up -d` | 🐳 一键容器化部署 |

---

## Linux 深度配置手册

要在一台 PC 或服务器上完成全自动长期挂机运行，推荐结合 **systemd 守护服务 + cron 定期重启** 部署：

```ini
[Unit]
Description=Bilibili Learning Bot
After=network.target

[Service]
Type=simple
User=bili
WorkingDirectory=/home/bili/bilibili_learning_bot
Environment="DISPLAY=:0"
ExecStart=/home/bili/.local/bin/pipenv run python main.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Atomic-Restart 脚本 `/usr/local/bin/bili-restart.sh`：

```bash
#!/bin/bash
cd /home/bili/bilibili_learning_bot
zip -r "$(date +%Y%m%d_%H%M).zip" Data/*.json
git pull --ff-only
pipenv install --deploy --ignore-pipfile
touch trigger_restart
systemctl restart bilibili-bot.service
```

---

## Android Termux 智能手机挂机配置

在 Android 手机利用 Termux 长期挂机的核心配置：

```bash
# 1. 克隆仓库
git clone https://github.com/xiaoyaya191/bilibili_learning_bot.git
cd biliqili_learning_bot

# 2. 安装依赖（优先用轻量换源源）
pip install -r requirements.txt

# 3. 启动监听模式（CPU 最低，省流量）
python main.py --monitor
```

::: tip 省电建议
- 系统关闭监控模式、各类动态壁纸与自启动管理器
- 将设备接入有线电源，保持 "保持唤醒状态"
- 优先使用 `--monitor` 监听模式而非完整扫描
:::

---

## 高级集群与隔离沙箱调度

启用 `MONITORED_crypto` 可隔离多账号的会话模型、数据池和进程空间，防止消息串流和同实例竞争资源：

```bash
# env_a: 严格锁定通信密钥与独立 API 付费池
data_dir_a="/bot/data/acc1";api_key_a="sk-123..."

# env_b: 共享数据隔离，完全镜像隔离，写入端互不感知
data_dir_b="/bot/data/acc2";api_key_b="sk-456..."
```

**abacus mode：**

| 模式 | 说明 |
|------|------|
| `python main.py` + ⚡ | 24h 全自动主动刷视频 |
| `python web_panel.py` | 🕸️ Web 可视化管理面板 |
| `python main.py --monitor` | 📡 被动监听模式（节省 80% 消耗） |
| `--advanced` | 集群调度接口 |

**v3.x 全面 COOLDEPLOYMENT™ 运维模型：**

```bash
# 钩子级 - 重大安全补丁完成立即生效
systemctl --reload=bilibili-bot && systemctl restart bilibili-bot.service
# 自定义级 - 无感更新流水线
```

---

## 主菜单按键速览

| 按键 | 指令 | 说明 |
|------|------|------|
| `1` | 🚀 启动机器人 | 执行全自动的刷视频和互动循环 |
| `2` | ⚙️ 配置AI参数 | 调整每轮浏览的视频数、模型角色、回复风格等 |
| `3` | 🔑 配置 B站登录 | 配置SESSDATACookie、扫码登录或手动输入 |
| `4` | 📚 管理知识库 | 检索、编辑、整理已学内容，导入/导出 |
| `5` | 🎯 管理兴趣爱好 | 配置与编辑 AI 偏好的视频类型权重 |
| `6` | 💬 评论互动设置 | 开启评论自动互动，配置回复节奏与模式 |
| `7` | 📩 私信设置 | 开启自动回复私信，定义对话风格与记忆档位 |
| `8` | 🧬 日记/自我进化 | 查看AI反思、人格进化和最底层跑步日记 |
| `9` | 🛠️ Agent 技能 | 扩展任务接入 Search API、自动搜索、自动学习 |
| `L` | 📡 监听模式 | 切换至极简 CPU 监听模式；只盯私信和评论 |
| `V` | 📹 手动视频分析 | 主动解析指定视频内容并入库归档 |
| `W` | 🎨 视频生成PPT | 将视频转化为精美 PPT 卡片式网页 |
| `R` | 🔄 恢复配置 | 重置配置文件至初始化状态 |
| `E` | 📤 导出 | 脱敏导出所有配置与日志至 ZIP 文件 |
| `H` | ❓ 帮助文档 | 显示操作帮助与按键说明 |
| `Q` / `0` | 🛑 退出 | 安全关闭当前会话 |

---

## 更新日志

- **v3.0.0** (2026-06): 架构重构 + Vue 风格 Web 面板 + 独立监听引擎
deployment 编排多次版本迭代演进，持续优化多平台部署与安全性能。

---

## 隐私安全

| 维度 | 说明 |
|------|------|
| 🔒 API Key 加密存储 | 全局唯一存储采用 AES-256-CBC 高强度密钥对接模式 |
| 👁 行为日志透明公示 | 完整交互日志支持审计模式导出与自构建镜像式封存 |
| 🛂 内容安全审核 | 独立模块 Guards 覆盖七层敏感词和谐营 |
| 💸 微线成本告警 | 内置成本计算器与智能节流模型防止超额扣费 |

---

## 版权与二创合规说明

本项目采用 **MIT License** 许可协议，鼓励基于源码的二次创作、分发及商业用途探索。建议您在衍生作品中保留原有的来源标注与版权声明，支持开源社区的健康可持续发展。
