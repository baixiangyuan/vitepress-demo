# Project Structure

> Based on **v3.1.6**, kept in sync with the upstream repository [xiaoyaya191/bilibili_learning_bot](https://github.com/xiaoyaya191/bilibili_learning_bot).

```
├── main.py               # 🚀 Main entry (CLI interactive menu + automated startup)
├── desktop_app.py        # 🖥️ Windows EXE launcher (tray + panel)
├── web_panel.py          # 🌐 Flask Web management panel (backend)
├── web_panel.html        # Web panel template (Claude style, light/dark dual mode)
├── BiliLearn.spec        # 📦 PyInstaller packaging config
├── build_windows_exe.bat # 📦 One-click packaging script (Windows)
├── install.sh            # 📱 Termux single-file installer (mirror fetch + global command)
├── deploy_termux.sh      # 📱 Interactive Termux deployment script
│
├── api/                   # 🔌 Bilibili API layer (client / login / subtitles / throttling)
├── brain/                 # 🧠 Core brain (Mixin composition: main loop / video understanding / AI calls / sessions)
├── cli/                   # 💻 Command-line menu
├── core/                  # ⚙️ Config / globals / user-data paths / account workspaces / factory reset
├── knowledge/             # 📚 Knowledge base (classification / search / browse / review / custom)
├── persona/               # 🎭 Persona + psychological-profile engine
├── security/              # 🛡️ Content safety review
├── services/              # 🔧 61 services (deep dive / quiz / mind map / Word / interest engine / RAG / endpoint pool / token observability…)
├── ob_bridge/             # 🌉 Open-platform bridge (auth / AB testing / audit)
├── xingye_bot/            # 🤖 Extension modules (LLM / state / memory / evolution / ASR / grid frames / visual preview)
├── utils/                 # 🛠 Common utilities (tray / launcher / SQLite storage / locks)
├── templates/             # 🎨 Export templates (video_export common engine) and account-management page
├── assets/                # 🎨 Panel JS/CSS assets (learning / review / accounts / evolution / tokens…)
├── tests/                 # 🧪 pytest tests (1056 passing at full run)
├── app-icons/             # App icons
└── dev_refs/              # 📖 Secondary-development reference docs
```

## Key Directory Notes

- **`main.py`**: CLI interactive-menu entry point; choose Smart Token-Saving mode or run with saved config, or go straight into the automated loop.
- **`desktop_app.py`**: Windows EXE launcher; responsible for the system tray, auto-opening the browser, and spawning bot / monitor / standby as child processes as needed.
- **`web_panel.py` + `web_panel.html`**: Flask-backed Web management panel providing dashboards, bot control, real-time monitoring, persona management, knowledge tutoring, deep dive, account management, token dashboard, AI evolution, backup/restore, and more.
- **`core/account_workspaces.py` / `account_processes.py`**: multi-account workspaces (up to 10) with isolated ports, config, cookies, and knowledge bases; cross-process locks and atomic saves.
- **`services/`**: 61 independent service modules covering deep dive, quiz generation, mind maps, Word/image export, local favorites, like review, reminders, RAG Q&A, the multi-API endpoint pool, token observability, the video watch queue, the AI evolution engine, persona evolution, diary scheduling, and more.
- **`services/video_export_renderer.py` + `templates/video_export/`**: unified rendering engine for video/document HTML exports (chapter drawer, auto paging, offline inlined assets).
- **`ob_bridge/`**: Open-platform bridge handling auth, AB testing, and audit.
- **`xingye_bot/`**: Extension modules with LLM, state, memory, evolution, ASR, grid-frame, and visual-preview capabilities.

> Data directory: the source edition stores data under the in-project `Data/`; the Web / EXE editions auto-create `%LOCALAPPDATA%\BiliLearn` (the packaged artifact carries zero private data and survives upgrades). Since v3.1.6 account data persists in SQLite (WAL + atomic writes) with a JSON compatibility mirror.
