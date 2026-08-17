# Windows Deployment Guide

This guide explains how to deploy and run the BiliLearn project on Windows.

## Method 1: Use the EXE Executable (Recommended)

This is the simplest deployment — no Python environment needed, download and run.

### 1. Download the EXE Archive

Go to the [Releases page](https://github.com/xiaoyaya191/bilibili_learning_bot/releases) and download the latest Windows EXE archive.

The current latest version is `bilibili_learning_bot-3.1.3-EXE.zip`.

### 2. Extract the Files

Extract the downloaded archive to any directory (e.g. `D:\BiliLearn` or `C:\BiliLearn`).

### 3. Run the Program

Double-click `BiliLearn Web.exe` inside the extracted `BiliLearn Web` folder to launch.

After launch:
- A command-line window opens automatically showing logs
- The Web management panel opens automatically in your default browser
- If the browser does not open, manually visit `http://127.0.0.1:18083`

### 4. Use the Web Management Panel

The Web panel provides a complete visual interface. Main features:

| Feature | Description |
|---------|-------------|
| 📊 Dashboard | View running status and statistics |
| 🤖 Bot Control | Start / stop the bot |
| 📡 Real-time Monitor | Only watches DMs + comments, no video browsing |
| ⚙️ Config Editor | Edit the config file online |
| 🎓 Knowledge Tutoring | AI explanation / Q&A / study-card generation |
| 📚 Knowledge Base | View and manage learned knowledge |

### 5. First-Time Use

1. In the Web panel, find "Configure Login" or "Account Settings"
2. Use Bilibili QR-scan login or manually fill in the Cookie
3. Configure the API key (DeepSeek / OpenAI-compatible endpoint)
4. Click "Start Bot" to begin automatic operation

### 6. Auto-Start on Boot (Optional)

If you want the program to run automatically at system startup:

1. Press `Win + R`, type `shell:startup`, and click OK to open the startup folder
2. Create a new text file named `start_bililearn.bat` in the startup folder
3. Right-click to edit it and enter:
   ```batch
   @echo off
   start /d "D:\BiliLearn\BiliLearn Web" "BiliLearn Web.exe"
   ```
   > Replace `D:\BiliLearn` with your actual extraction path.
4. Save the file; it will auto-start on next boot

---

## Method 2: Run from Python Source

Use the source method if you need to modify code or do secondary development.

### Environment Preparation

#### 1. Install Python

Visit [Python official site](https://www.python.org/downloads/) and install **Python 3.10 or higher**.

Be sure to check **"Add Python to PATH"** during installation.

#### 2. Install Git (Optional)

If you need to pull code via `git clone`, visit [Git official site](https://git-scm.com/download/win) to download and install Git for Windows.

### Deployment Steps

#### 1. Get the Code

**Method A: Git clone (recommended)**

```bash
git clone https://github.com/xiaoyaya191/bilibili_learning_bot.git
cd bilibili_learning_bot
```

**Method B: Download source ZIP**

Visit the [project homepage](https://github.com/xiaoyaya191/bilibili_learning_bot), click "Code" → "Download ZIP", and extract locally.

#### 2. Install Dependencies

Open Command Prompt (CMD) or PowerShell in the project root and run:

```bash
pip install -r requirements.txt
```

> **Note**: If installation is slow, use a domestic mirror:
> ```bash
> pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
> ```

#### 3. Config File

Create the config file before first run:

```bash
copy config.example.json Data\config.json
```

Then edit `Data\config.json` and fill in your API keys, Bilibili Cookie, etc.

#### 4. Launch the Web Panel

```bash
python web_panel.py
```

After launch, visit `http://127.0.0.1:18083` to use the Web interface.

#### 5. Launch CLI Interactive Mode (Optional)

```bash
python main.py
```

#### 6. Auto-Start on Boot (Optional)

Use Task Scheduler:

1. Press `Win + R`, type `taskschd.msc`, open Task Scheduler
2. Click "Create Basic Task" on the right
3. Set the trigger to "When the computer starts"
4. Set the action to "Start a program", select the `python.exe` path, set the argument to `web_panel.py`, and the start directory to the project path
5. Complete the wizard

---

## Firewall Configuration

On first run, Windows Defender Firewall may pop up a prompt:

- Click "Allow access", otherwise other devices may not reach the Web panel
- If used only on the local machine, select "Private networks"

---

## FAQ

### Q1: Browser did not open automatically

Manually visit `http://127.0.0.1:18083`. If unreachable, check whether the command-line window is still running.

### Q2: How to update

**EXE version**:
1. Back up and download the latest EXE archive
2. Extract to a new directory, replacing the old folder
3. Restart

**Python version**:
```bash
git pull
pip install -r requirements.txt --upgrade
python web_panel.py
```
