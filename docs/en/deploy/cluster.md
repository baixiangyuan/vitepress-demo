# Advanced Cluster & Isolated Sandbox Scheduling

Enabling account-level isolation separates each account's session model, data pool, and process space, preventing message cross-talk and same-instance resource contention:

```bash
# acc1: strictly lock the communication key and an independent API billing pool
data_dir_a="/bot/data/acc1"; api_key_a="sk-123..."

# acc2: shared-data isolation, full mirror isolation, writers unaware of each other
data_dir_b="/bot/data/acc2"; api_key_b="sk-456..."
```

**Runtime mode comparison:**

| Mode | Description |
|------|-------------|
| `python main.py` | 💻 CLI interactive menu; choose to start 24h fully-automated active video browsing |
| `python web_panel.py` | 🕸️ Web visual management panel (default `http://localhost:18083`), also hosts the monitor subprocess |
| Web panel "Real-time Monitor" / CLI menu | 📡 Passive listening mode (only watches DMs + comments, ~80% less resource usage) |
| `--advanced` | Cluster scheduling interface |

**v3.x full COOLDEPLOYMENT™ operations model:**

```bash
# Hook level — major security patches take effect immediately
systemctl --reload=bilibili-bot && systemctl restart bilibili-bot.service
# Custom level — seamless update pipeline
```
