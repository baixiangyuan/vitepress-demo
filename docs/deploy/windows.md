# Windows 部署指南

本指南介绍如何在 Windows 系统上部署和运行 BiliLearn 项目。

## 方式一：使用 EXE 可执行文件（推荐）

这是最简单的部署方式，无需安装 Python 环境，下载即用。

### 1. 下载 EXE 压缩包

前往 [Releases 页面](https://github.com/xiaoyaya191/bilibili_learning_bot/releases) 下载最新版本的 Windows EXE 压缩包。

当前最新版本为 `BiliLearn-Web-3.1.2-Windows-x64-20260801_162412.zip`。

### 2. 解压文件

将下载的压缩包解压到任意目录（例如 `D:\BiliLearn` 或 `C:\BiliLearn`）。

### 3. 运行程序

双击解压后的 `BiliLearn-Web-3.1.2-Windows-x64.exe` 即可启动。

程序启动后：
- 会自动打开命令行窗口显示日志
- 会自动在默认浏览器中打开 Web 管理面板
- 如果浏览器未自动打开，请手动访问 `http://localhost:7860`

### 4. 使用 Web 管理面板

Web 面板提供完整的可视化操作界面，主要功能包括：

| 功能 | 说明 |
|------|------|
| 📊 仪表盘 | 查看运行状态和统计数据 |
| 🤖 机器人控制 | 启动/停止机器人 |
| 📡 实时监听 | 只盯私信+评论，不刷视频 |
| ⚙️ 配置编辑 | 在线修改配置文件 |
| 🎓 知识辅导 | AI 讲解/问答/生成学习卡片 |
| 📚 知识库管理 | 查看和管理已学知识 |

### 5. 首次使用

1. 在 Web 面板中找到 "配置登录" 或 "账号设置"
2. 使用 B站扫码登录或手动填写 Cookie
3. 配置 API 密钥（DeepSeek / OpenAI 兼容接口）
4. 点击 "启动机器人" 开始自动运行

### 6. 开机自启（可选）

如果你希望程序在系统启动时自动运行：

1. 按 `Win + R`，输入 `shell:startup`，点击确定，打开启动文件夹
2. 在启动文件夹中新建一个文本文件，命名为 `start_bililearn.bat`
3. 右键编辑该文件，输入以下内容：
   ```batch
   @echo off
   start /d "D:\BiliLearn" BiliLearn-Web-3.1.2-Windows-x64.exe
   ```
   > 请将 `D:\BiliLearn` 替换为你的实际解压路径。
4. 保存文件，下次开机时会自动启动

---

## 方式二：使用 Python 源码运行

如果你需要修改代码或二次开发，可以使用源码方式运行。

### 环境准备

#### 1. 安装 Python

访问 [Python 官网](https://www.python.org/downloads/) 下载并安装 **Python 3.10 或更高版本**。

安装时请务必勾选 **"Add Python to PATH"**。

#### 2. 安装 Git（可选）

如果你需要通过 `git clone` 拉取代码，请访问 [Git 官网](https://git-scm.com/download/win) 下载并安装 Git for Windows。

### 部署步骤

#### 1. 获取代码

**方式 A：通过 Git 克隆（推荐）**

```bash
git clone https://github.com/xiaoyaya191/bilibili_learning_bot.git
cd bilibili_learning_bot
```

**方式 B：下载源码 ZIP 包**

访问 [项目主页](https://github.com/xiaoyaya191/bilibili_learning_bot)，点击 "Code" → "Download ZIP"，解压到本地。

#### 2. 安装依赖

在项目根目录下打开命令提示符（CMD）或 PowerShell，运行：

```bash
pip install -r requirements.txt
```

> **注意**：如果安装速度慢，可以使用国内镜像源：
> ```bash
> pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
> ```

#### 3. 配置文件

首次运行前需要创建配置文件：

```bash
copy config.example.json Data\config.json
```

然后编辑 `Data\config.json`，填入你的 API 密钥和 B站 Cookie 等配置信息。

#### 4. 启动 Web 管理面板

```bash
python web_panel.py
```

启动后访问 `[http://localhost:7860](http://127.0.0.1:18083/)` 使用 Web 界面。

#### 5. 启动命令行交互模式（可选）

```bash
python main.py
```

#### 6. 开机自启（可选）

使用任务计划程序：

1. 按 `Win + R`，输入 `taskschd.msc`，打开任务计划程序
2. 点击右侧的 "创建基本任务"
3. 设置触发器为 "当计算机启动时"
4. 设置操作为 "启动程序"，选择 `python.exe` 路径，参数为 `web_panel.py`，起始目录为项目路径
5. 按向导完成创建

---

## 防火墙配置

首次运行时，Windows Defender 防火墙可能会弹出提示：

- 点击 "允许访问"，否则其他设备可能无法访问 Web 面板
- 如果只在本机使用，选择 "专用网络" 即可

---

## 常见问题

### Q1: 浏览器没有自动打开

手动访问 `[http://localhost:7860](http://127.0.0.1:18083/)` 即可。如果无法访问，检查命令行窗口是否正在运行。


### Q2: 如何更新版本

**EXE 版本**：
1. 备份并下载最新版本的 EXE 压缩包
2. 解压到新目录，替换旧文件夹
3. 重新启动即可

**Python 版本**：
```bash
git pull
pip install -r requirements.txt --upgrade
python web_panel.py
```

