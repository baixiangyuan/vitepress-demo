# Introduction

Let AI take over your Bilibili account —

Auto-browse the recommendation feed and deeply understand video content;
Interact intelligently, auto-replying to comments, danmaku, and direct messages;
Build a knowledge base that knows you better over time and self-evolves;
And turn any video into an interactive web explainer animation with freely customizable styles.

Your Bilibili account now has a thinking, growing AI avatar.

::: tip Key Specs
- Core version: **v3.1.6 (latest)**
- Code size: **300 Python files / ~65k lines (excluding tests)**
- Service modules: **61 services** (deep dive / quiz / mind map / Word / interest engine / RAG / endpoint pool / token observability…)
- Test baseline: **1056 pytest all passing**
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
| 🎨 Video → Webpage | PPT-style HTML export with a unified reference layout: chapter drawer / auto paging / offline inlined assets |
| 📊 Mind Map & Word Export | One-click export of a video to `.mindmap.html` and `.docx` documents |
| 🔍 Deep Dive | Long-video multi-chapter deep study with evidence-chain summaries (`services/deep_dive.py`) |
| 🎯 Smart Interest Engine | Multi-dimensional scoring + synonyms + exclusion words + serendipity exploration + PsychoProfile sync |
| 😊 AI Mood System | Dynamic mood influences interaction style; customizable |
| 🏆 High-Value Like Review | Periodically reviews favorited high-value videos with AI review (`services/like_review.py`) |
| 🔔 Reminders | Desktop notifications + AI-detected reminder-to-search linking + manual creation |
| 🛡️ Safety Review | Keyword filtering + political-sensitivity blocking + prompt-injection protection + action risk control; safety defaults enabled |
| 🔄 Fallback API Degradation | Automatic switch to backup provider / backup model after consecutive main-API failures |
| 🖥️ Windows EXE | One-click packaging, no Python needed to run (tray + browser panel) |
| 🌓 Web Panel | Claude-design style, light/dark dual themes, 35+ sections, Chinese/English/Russian |
| 🐳 Docker Deployment | Docker / docker-compose one-click deployment supported |
| 📱 Termux Support | Single-file Android installer + global launch command |
| 👥 Multi-Account Workspaces | Up to 10 independent accounts with isolated ports / config / cookies / knowledge bases |
| 🎞️ Smart Keyframes | Subtitles/ASR first; scene-change frame extraction + timestamp mosaics |
| 📺 Persistent Watch Queue | Batch candidate selection, sequential understanding, local watch-later queue |
| 🔀 Multi-API Endpoint Pool | Up to 100 OpenAI-compatible endpoints; failover / round-robin / weighted strategies |
| 🗄️ SQLite Storage | Account data migrated from JSON to SQLite with atomic writes + snapshot backups |
| 🧬 AI Evolution System | Profile audit → three-tier proposals → human review → observation period → solidify/rollback |
| 📊 Token Dashboard | Token usage & cost estimates by model/source/date; CSV export |
| ❤️ Favorability System | Tracks per-user interaction favorability; AI auto scores up/down (off by default) |
| 🧠 AI Skill Extraction | Auto-distills reusable methodologies into skill cards on archive |
| 💬 AI Segmented Replies | Replies "let me check" first, then returns with a summary after watching the video |
| 🧮 Model Availability Test | Multi-threaded model testing; one-click classify available/offline/timeout |
| 🎯 Learning Goals | AI auto-sets learning goals + manual CRUD + progress tracking |
| 📧 Email Password Recovery | Password recovery via email code; backup email supported |
| 🆕 Newbie Tutorial | Auto-expands in the system dashboard on first entry; 7 steps with real completion-status detection |

---

## Project Structure

> Full directory reference: [Project Structure](/en/guide/structure).

```
├── main.py               # 🚀 Main entry (CLI interactive menu + automated startup)
├── desktop_app.py        # 🖥️ Windows EXE launcher (tray + panel)
├── web_panel.py          # 🌐 Flask Web management panel (backend)
├── web_panel.html        # Web panel template (Claude style, light/dark dual mode)
├── BiliLearn.spec        # 📦 PyInstaller packaging config
├── build_windows_exe.bat # 📦 One-click packaging script (Windows)
├── api/                  # 🔌 Bilibili API layer (client / login / subtitles / throttling)
├── brain/                # 🧠 Core brain (Mixin composition: main loop / video understanding / AI calls / sessions)
├── cli/                  # 💻 Command-line menu
├── core/                 # ⚙️ Config / globals / user-data paths / account workspaces / factory reset
├── knowledge/            # 📚 Knowledge base (classification / search / browse / review / custom)
├── persona/              # 🎭 Persona + psychological-profile engine
├── security/             # 🛡️ Content safety review
├── services/             # 🔧 61 services (deep dive / quiz / mind map / endpoint pool / token observability / evolution engine…)
├── ob_bridge/            # 🌉 Open-platform bridge (auth / AB testing / audit)
├── xingye_bot/           # 🤖 Extension modules (LLM / state / memory / evolution / ASR / visual preview)
├── utils/                # 🛠 Common utilities (tray / launcher / SQLite storage / locks)
├── templates/            # 🎨 Export templates and account-management page
├── tests/                # 🧪 pytest tests (1056 passing at full run)
├── app-icons/            # App icons
└── dev_refs/             # 📖 Secondary-development reference docs
```
