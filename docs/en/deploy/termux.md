# Android Termux Smartphone 24/7 Configuration

Core configuration for long-term 24/7 operation on an Android phone using Termux (based on **v3.1.5**):

## One-click Install (Recommended)

```bash
pkg install curl -y
curl -O https://raw.githubusercontent.com/xiaoyaya191/bilibili_learning_bot/main/install.sh
bash install.sh
```

Install flow: confirm install → choose path (default `~/bililearn`) → type "我同意" (I agree) on the disclaimer → mirror fetch of source → install dependencies → register global command. **It auto-benchmarks GitHub mirrors to fetch the source**, so no manual proxy setup is needed.

::: tip
**v3.1.5 improvement:** Starting from **v3.1.5**, `psutil` is now an **optional dependency**; the Termux / Android installer skips it automatically, so installs no longer fail because `psutil` does not support the Android platform. The one-click mobile install is now more reliable.
:::

## Launch

After install, launch directly (any of the three, identical effect):

```bash
bililearn                # or
abiligent                # or
bilibili_learning_bot
```

> You can also use `deploy_termux.sh` (interactive deployment) or `bash install_termux.sh` inside the source directory.

A menu will appear with options:

- **Bot menu** (`main.py` interactive): start / login / listen via the menu
- **Web panel** (`web_panel.py`): default `http://localhost:18083`
- **Web panel in background**: `nohup` long-lived, logs to `bot_web.log`, PID to `bot.pid`
- **Install / update all dependencies**

::: tip Power-saving suggestions
- Disable the system's battery-optimization / monitoring mode, dynamic wallpapers, and self-start managers
- Connect the device to a wired power source and keep "stay awake" on
- Prefer enabling "Real-time Monitor" mode in the Web panel / CLI menu (only watches DMs + comments, lowest CPU / traffic) rather than full video browsing
:::
