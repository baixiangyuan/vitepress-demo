# Project Structure

> Based on **v3.1.3**, kept in sync with the upstream repository [xiaoyaya191/bilibili_learning_bot](https://github.com/xiaoyaya191/bilibili_learning_bot).

```
├── main.py               # 🚀 Main entry (CLI interactive menu + automated startup)
├── desktop_app.py        # 🖥️ Windows EXE launcher (tray + panel)
├── web_panel.py           # 🌐 Flask Web management panel (backend)
├── web_panel.html         # Web panel template (Claude style, light/dark dual mode)
├── BiliLearn.spec         # 📦 PyInstaller packaging config
├── build_windows_exe.bat  # 📦 One-click packaging script (Windows)
│
├── api/                   # 🔌 Bilibili API layer (client / login / subtitles / throttling)
├── brain/                 # 🧠 Core brain (Mixin composition: main loop / video understanding / AI calls / sessions)
├── cli/                   # 💻 Command-line menu
├── core/                  # ⚙️ Config / globals / user-data paths / factory reset
├── knowledge/             # 📚 Knowledge base (classification / search / browse / review / custom)
├── persona/               # 🎭 Persona + psychological-profile engine
├── security/              # 🛡️ Content safety review
├── services/              # 🔧 32 services (deep dive / quiz / mind map / Word / interest engine / RAG…)
├── ob_bridge/             # 🌉 Open-platform bridge (auth / AB testing / audit)
├── xingye_bot/            # 🤖 Extension modules (LLM / state / memory / evolution / ASR / grid frames)
├── utils/                 # 🛠 Common utilities (tray / launcher / storage / locks)
├── templates/claude/      # 🎨 Claude design-system templates + 7 reference pages
├── tests/                 # 🧪 181 pytest tests
├── app-icons/             # App icons
└── dev_refs/              # 📖 Secondary-development reference docs
```

## Key Directory Notes

- **`main.py`**: CLI interactive-menu entry point; on startup you can choose to go straight into the automated loop or use the menu for on-demand operations.
- **`desktop_app.py`**: Windows EXE launcher; responsible for the system tray, auto-opening the browser, and spawning bot / monitor / standby as child processes as needed.
- **`web_panel.py` + `web_panel.html`**: Flask-backed Web management panel providing dashboards, bot control, real-time monitoring, persona management, knowledge tutoring, deep dive, backup/restore, and more.
- **`services/`**: 32 independent service modules covering deep dive, quiz generation, mind maps, Word export, local favorites, like review, reminders, RAG Q&A, platform adaptation, proxy config, version history, etc.
- **`ob_bridge/`**: Open-platform bridge handling auth, AB testing, and audit.
- **`xingye_bot/`**: Extension modules with LLM, state, memory, evolution, ASR, grid-frame capabilities.

> Data directory: the source edition stores data under the in-project `Data/`; the Web / EXE editions auto-create `%LOCALAPPDATA%\BiliLearn` (the packaged artifact carries zero private data and survives upgrades).
