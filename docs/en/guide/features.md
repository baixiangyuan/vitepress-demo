# Features

> The features below are based on **v3.1.3** and are kept in sync with the upstream repository [xiaoyaya191/bilibili_learning_bot](https://github.com/xiaoyaya191/bilibili_learning_bot).

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
