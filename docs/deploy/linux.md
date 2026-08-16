# Linux 深度配置手册

要在一台 PC 或服务器上完成全自动长期挂机运行，推荐结合 **systemd 守护服务 + cron 定期重启** 部署。以下以 Web 管理面板（常驻进程）为例，它同时负责托管「实时监听」子进程，最适合作 headless 服务器常驻：

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

Atomic-Restart 脚本 `/usr/local/bin/bili-restart.sh`：

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
若不通过 Web 面板，而想以 CLI 交互菜单常驻，可将 `ExecStart` 改为 `python main.py`（交互模式下按菜单选择启动 / 监听）。Web 面板模式下浏览器访问 http://<服务器IP>:18083 即可远程管理。
:::
