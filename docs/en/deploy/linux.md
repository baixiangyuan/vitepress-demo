# Linux In-Depth Configuration

For fully automated long-term 24/7 operation on a PC or server, it is recommended to combine a **systemd service + cron periodic restart**. The example below uses the Web management panel (a long-lived process) because it also hosts the "Real-time Monitor" subprocess — ideal as a headless server daemon:

```ini
[Unit]
Description=Bilibili Learning Bot
After=network.target

[Service]
Type=simple
User=bili
WorkingDirectory=/home/bili/bilibili_learning_bot
ExecStart=/home/bili/.local/bin/pipenv run python web_panel.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Atomic-Restart script `/usr/local/bin/bili-restart.sh`:

```bash
#!/bin/bash
cd /home/bili/bilibili_learning_bot
zip -r "$(date +%Y%m%d_%H%M).zip" Data/*.json
git pull --ff-only
pipenv install --deploy --ignore-pipfile
touch trigger_restart
systemctl restart bilibili-bot.service
```

::: tip
If you do not use the Web panel and prefer a CLI interactive menu as a long-lived process, change `ExecStart` to `python main.py` (in interactive mode, choose start / listen from the menu). In Web-panel mode, visit `http://<server-IP>:18083` in a browser for remote management.
:::
