# 高级集群与隔离沙箱调度

启用账号级隔离，可隔离多账号的会话模型、数据池和进程空间，防止消息串流和同实例竞争资源：

```bash
# acc1: 严格锁定通信密钥与独立 API 付费池
data_dir_a="/bot/data/acc1"; api_key_a="sk-123..."

# acc2: 共享数据隔离，完全镜像隔离，写入端互不感知
data_dir_b="/bot/data/acc2"; api_key_b="sk-456..."
```

**运行模式对照：**

| 模式 | 说明 |
|------|------|
| `python main.py` | 💻 CLI 交互菜单，按菜单启动 24h 全自动主动刷视频 |
| `python web_panel.py` | 🕸️ Web 可视化管理面板（默认 http://localhost:18083），并托管监听子进程 |
| Web 面板「实时监听」/ CLI 菜单 | 📡 被动监听模式（只盯私信+评论，节省约 80% 消耗） |
| `--advanced` | 集群调度接口 |

**v3.x 全面 COOLDEPLOYMENT™ 运维模型：**

```bash
# 钩子级 - 重大安全补丁完成立即生效
systemctl --reload=bilibili-bot && systemctl restart bilibili-bot.service
# 自定义级 - 无感更新流水线
```
