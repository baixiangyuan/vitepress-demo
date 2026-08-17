# Deployment & Quick Start

## 1. Install Runtime Dependencies

::: warning
Make sure to install the latest `bilibili-api-python` (>=17.4.1); do not accidentally install the deprecated old package.
:::

```bash
pip install -r requirements.txt
# If a previous environment mistakenly installed the old package, clear it first:
# pip uninstall bilibili-api -y

# Installing ffmpeg is recommended for multimodal video frame slicing/extraction
# apt install ffmpeg     # Linux
# pkg install ffmpeg     # Termux
```

## 2. Initialize the Runtime Config

```bash
cp config.example.json Data/config.json
# Open Data/config.json and fill in your LLM API Key as needed (unified relay or compatible endpoint)
```

> The Web / EXE editions auto-create the data directory at `%LOCALAPPDATA%\BiliLearn` (Windows) or the in-project `Data/` (source edition) — no manual copy needed. Cookies, API Keys, knowledge base, and QR codes are stored only on your local machine.

## 3. Launch Methods

The project offers **5 launch methods**; choose as needed:

| Method | Command | Description |
|--------|---------|-------------|
| CLI menu | `python main.py` | 💻 Terminal menu mode; start / login / listen via the menu |
| Web panel | `python web_panel.py` | 🌐 Flask browser-based visual management, default `http://localhost:18083` |
| Windows EXE | Run `BiliLearn Web.exe` | 🖥️ Auto-opens browser + tray icon, no Python required |
| Docker | `docker-compose up -d` | 🐳 One-click containerized deployment |
| Termux | `bash start.sh` | 📱 One-click launch script for Android (with dependency self-check menu) |

::: tip About the Web panel port
The default port is **18083**, auto-incrementing if occupied. To fix the port:
- Windows: `set WEB_PORT=xxxx && python web_panel.py`
- Linux / Termux: `WEB_PORT=xxxx python web_panel.py`
:::

::: tip About "Real-time Monitor" mode
"Real-time Monitor" (only watches DMs + comments, no video browsing, lowest CPU / traffic) can be enabled in the **Web panel** toggle or the **CLI menu** — no separate `--monitor` command needed.
:::

---

For detailed platform deployment guides, see the left menu: **Windows / Linux / Termux / Cluster**.
