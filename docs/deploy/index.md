# 部署与快速开始

## 1. 安装运行环境依赖

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

## 2. 初始化运行配置文件

```bash
cp config.example.json Data/config.json
# 打开 Data/config.json 并按需填入大模型 API Key（统一中转或兼容接口）
```

> Web / EXE 版会自动在 `%LOCALAPPDATA%\BiliLearn`（Windows）或项目根 `Data/`（源码版）创建数据目录，无需手动复制。Cookie、API Key、知识库、二维码均只保存在本机。

## 3. 启动方式

项目提供 **5 种启动方式**，按需选择：

| 启动方式 | 命令 | 说明 |
|----------|------|------|
| CLI 交互菜单 | `python main.py` | 💻 终端菜单交互模式，按菜单选项启动 / 登录 / 监听 |
| Web 管理面板 | `python web_panel.py` | 🌐 Flask 浏览器可视化管理，默认 `http://localhost:18083` |
| Windows EXE | 运行 `BiliLearn Web.exe` | 🖥️ 自动开浏览器 + 托盘图标，免 Python 环境 |
| Docker | `docker-compose up -d` | 🐳 一键容器化部署 |
| Termux | `bash start.sh` | 📱 Android 手机一键启动脚本（含依赖自检菜单） |

::: tip 关于 Web 面板端口
默认端口为 **18083**，被占用时会自动顺延。如需固定端口：
- Windows：`set WEB_PORT=xxxx && python web_panel.py`
- Linux / Termux：`WEB_PORT=xxxx python web_panel.py`
:::

::: tip 关于「实时监听」模式
「实时监听」（只盯私信 + 评论，不刷视频，CPU / 流量最低）可在 **Web 面板** 的「实时监听」开关或 **CLI 菜单** 中启用，无需单独的 `--monitor` 命令。
:::

---

更详细的平台部署指引见左侧菜单：**Windows / Linux / Termux / 集群**。
