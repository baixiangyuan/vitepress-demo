# Features

> The features below are based on **v3.1.6** and are kept in sync with the upstream repository [xiaoyaya191/bilibili_learning_bot](https://github.com/xiaoyaya191/bilibili_learning_bot).

| Feature | Description |
|---------|-------------|
| 📺 Smart Video Browsing | AI-driven Bilibili recommendation feed browsing, auto-judges content value (rating / favorite / coin / like) |
| 📚 Knowledge Base | Auto-archives high-quality videos, 3-tier classification + semantic search + review/recall |
| 💬 Comment Interaction | Real/simulated comment modes, AI deep replies, image analysis supported |
| 📩 DM Handling | Auto-replies to follower DMs with persistent context + long-term memory; pacing control supported |
| 🛡️ Blacklist/Whitelist | Blacklisted users get no response and are auto-hidden; whitelist gets priority replies; visual panel management |
| 📡 Real-time Monitor | Standalone listening engine that only watches DMs + comments for real-time AI replies — no video watching, low effort |
| 🔔 @ Mention Response | Comment "@bot summarize this video" under a video is auto-detected and summarized in reply |
| 🧬 Diary & Self-Evolution | Behavior logs + AI self-reflection + dynamic persona evolution |
| 🎙️ ASR Speech Recognition | Video speech-to-text (FunASR / Whisper, optional install) |
| 🤖 Agent Skill System | Autonomously plans goals → searches Bilibili → watches videos → summarizes knowledge, fully automated loop |
| 🎓 Knowledge Tutoring | AI explanation / Q&A / secondary creation / HTML study-card generation |
| 🔍 AI Search History | Logs every AI search (content/source/view count); manual entry and deletion supported |
| 🎨 Video → Webpage | PPT-style HTML export with a unified reference layout: chapter drawer / auto paging / offline inlined assets |
| 📊 Mind Map & Word Export | One-click export of a video to `.mindmap.html` and `.docx` documents |
| 🔍 Deep Dive | Long-video multi-chapter deep study with evidence-chain summaries (`services/deep_dive.py`) |
| 🎯 Smart Interest Engine | Multi-dimensional scoring + synonyms + exclusion words + serendipity exploration + PsychoProfile sync, three-way incremental merge |
| 😊 AI Mood System | Dynamic mood influences interaction style; customizable |
| 🏆 High-Value Like Review | Periodically reviews favorited high-value videos with AI review (`services/like_review.py`) |
| 🔔 Reminders | Desktop notifications + AI-detected reminder-to-search linking + manual creation |
| 🛡️ Safety Review | Keyword filtering + political-sensitivity blocking + prompt-injection protection + action risk control; safety defaults enabled |
| 🔄 Fallback API Degradation | Automatic switch to backup provider / backup model after consecutive main-API failures |
| ❤️ Favorability System | Tracks per-user interaction favorability; AI auto scores up/down; visual management in panel (off by default) |
| 🧠 AI Skill Extraction | Auto-distills reusable methodologies into skill cards on archive; retrieved and injected when the Agent handles DMs; panel CRUD |
| 💬 AI Segmented Replies | Replies "let me check" first, then returns with a summary after watching the video — human-like pacing |
| 🧮 Model Availability Test | Multi-threaded model testing (custom concurrency/timeout/prompt); vision models supported; one-click classify available/offline/timeout |
| 🎯 Learning Goals | AI auto-sets learning goals + manual CRUD + progress tracking |
| 📧 Email Password Recovery | Guided email setup on first use; password recovery via email code; backup email supported |
| ⚙️ Port/Tray Customization | Custom panel port; optionally hide the system tray icon |
| 🖥️ Windows EXE | One-click packaging, no Python needed to run (tray + browser panel) |
| 🌓 Web Panel | Claude-design style, light/dark dual themes, 35+ sections, Chinese/English/Russian |
| 🆕 Newbie Tutorial | Auto-expands in the system dashboard on first entry; 7 steps with real completion-status detection |
| 🐳 Docker Deployment | Docker / docker-compose one-click deployment supported |
| 📱 Termux Support | Single-file Android installer + global launch command |
| 👥 Multi-Account Workspaces | Up to 10 independent accounts with isolated ports / config / cookies / knowledge bases |
| 🎞️ Smart Keyframes | Subtitles/ASR first; scene-change frame extraction + timestamp mosaics (1–6 grid customization) |
| 📺 Persistent Watch Queue | Batch candidate selection, sequential understanding, local watch-later queue and history |
| 🔁 Standalone Video Review | Custom review plans (time windows / weekdays / score threshold); separate section, off by default |
| 🔀 Multi-API Endpoint Pool | Up to 100 OpenAI-compatible endpoints; failover / round-robin / weighted / random strategies |
| 🗄️ SQLite Storage | Account data migrated from JSON to SQLite with WAL + atomic writes + snapshot backups |
| 🧬 AI Evolution System | Profile audit → three-tier proposals → human review → observation period → solidify/rollback loop |
| 📊 Token Dashboard | Token usage & cost estimates by model/source/date; CSV export |
| 🎥 Direct Video Feed | Feed the raw MP4 to models that support the video protocol (off by default) |
| 🖼️ Image Export | Export study notes as PNG/ZIP image packs with custom layout and background |
| 🤖 Agent Project Assistant | Persistent multi-turn chat workspace; project knowledge Q&A; evidence cards enqueued to watch-later |
