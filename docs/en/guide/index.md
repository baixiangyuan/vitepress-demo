# Introduction

Let AI take over your Bilibili account —

Auto-browse the recommendation feed and deeply understand video content;
Interact intelligently, auto-replying to comments, danmaku, and direct messages;
Build a knowledge base that knows you better over time and self-evolves;
And turn any video into an interactive web explainer animation with freely customizable styles.

Your Bilibili account now has a thinking, growing AI avatar.

::: tip Key Specs
- Core version: **v3.1.3 (latest)**
- Code size: **113 Python files / ~54k lines**
- Service modules: **32 services** (deep dive / quiz / mind map / Word / interest engine / RAG…)
- Test baseline: **319 passed** (181 pytest)
:::

---

## Features

| Feature | Description |
|---------|-------------|
| 📺 Smart Video Browsing | AI-driven Bilibili recommendation feed browsing, auto-judges content value (rating / favorite / coin / like) |
| 📚 Knowledge Base | Auto-archives high-quality videos, 3-tier classification + semantic search + review/recall |
| 💬 Comment Interaction | Real/simulated comment modes, AI deep replies, image analysis supported |
| 📩 DM Handling | Auto-replies to follower DMs with persistent context + long-term memory; pacing control supported |
| 📡 Real-time Monitor | Standalone listening engine that only watches DMs + comments for real-time AI replies — no video watching, low effort |
| 🔔 @ Mention Response | Comment "@bot summarize this video" under a video is auto-detected and summarized in reply |
| 🧬 Diary & Self-Evolution | Behavior logs + AI self-reflection + dynamic persona evolution |
| 🎙️ ASR Speech Recognition | Video speech-to-text (FunASR / Whisper, optional install) |
| 🤖 Agent Skill System | Autonomously plans goals → searches Bilibili → watches videos → summarizes knowledge, fully automated loop |
| 🎓 Knowledge Tutoring | AI explanation / Q&A / secondary creation / HTML study-card generation |
| 🎨 Video → Webpage | Video generates PPT-style HTML, 19 visual styles, Claude theme supported |
| 📊 Mind Map & Word Export | One-click export of a video to `.mindmap.html` and `.docx` documents |
| 🔍 Deep Dive | Long-video multi-chapter deep study with evidence-chain summaries (`services/deep_dive.py`) |
| 🎯 Smart Interest Engine | Multi-dimensional scoring + synonyms + exclusion words + serendipity exploration + PsychoProfile sync |
| 😊 AI Mood System | Dynamic mood influences interaction style; customizable |
| 🏆 High-Value Like Review | Periodically reviews favorited high-value videos with AI review (`services/like_review.py`) |
| 🔔 Local Reminders | Desktop notifications + to-do reminders (`services/reminders.py`) |
| 🛡️ Safety Review | Keyword filtering + political-sensitivity blocking + prompt-injection protection + action risk control |
| 🔄 Fallback API Degradation | Automatic switch to backup provider / backup model after consecutive main-API failures |
| 🖥️ Windows EXE | One-click packaging, no Python needed to run (tray + browser panel) |
| 🌓 Web Panel | Claude-design style, light/dark dual themes: dashboard / bot control / config / knowledge management |
| 🐳 Docker Deployment | Docker / docker-compose one-click deployment supported |
| 📱 Termux Support | One-click launch script for Android phones |

---

## Project Structure

> Full directory reference: [Project Structure](/en/guide/structure).

```
├── main.py               # 🚀 Main entry (CLI interactive menu + automated startup)
├── desktop_app.py        # 🖥️ Windows EXE launcher (tray + panel)
├── web_panel.py           # 🌐 Flask Web management panel (backend)
├── web_panel.html         # Web panel template (Claude style, light/dark dual mode)
├── BiliLearn.spec         # 📦 PyInstaller packaging config
├── build_windows_exe.bat  # 📦 One-click packaging script (Windows)
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
