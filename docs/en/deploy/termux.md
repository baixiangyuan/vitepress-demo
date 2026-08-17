# Android Termux Smartphone 24/7 Configuration

Core configuration for long-term 24/7 operation on an Android phone using Termux:

```bash
# 1. Clone the repository
git clone https://github.com/xiaoyaya191/bilibili_learning_bot.git
cd bilibili_learning_bot

# 2. Install dependencies (prefer a lightweight mirror)
pip install -r requirements.txt

# 3. One-click launch (script includes dependency self-check and menu)
bash start.sh
```

The launch script `start.sh` shows a menu with options:

- **Bot menu** (`main.py` interactive): start / login / listen via the menu
- **Web panel** (`web_panel.py`): default `http://localhost:18083`
- **Web panel in background**: `nohup` long-lived, logs to `bot_web.log`, PID to `bot.pid`
- **Install / update all dependencies**

::: tip Power-saving suggestions
- Disable the system's battery-optimization / monitoring mode, dynamic wallpapers, and self-start managers
- Connect the device to a wired power source and keep "stay awake" on
- Prefer enabling "Real-time Monitor" mode in the Web panel / CLI menu (only watches DMs + comments, lowest CPU / traffic) rather than full video browsing
:::
