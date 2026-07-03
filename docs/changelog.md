# 更新日志

<script setup>
import { ref, onMounted } from 'vue'

const releases = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/xiaoyaya191/bilibili_learning_bot/releases')
    if (!res.ok) throw new Error('获取失败')
    releases.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<div v-if="loading">加载中...</div>
<div v-else-if="error" class="warning">{{ error }}</div>
<div v-else>
  <div v-for="release in releases.slice(0, 10)" :key="release.id" class="release">
    <h3>{{ release.name || release.tag_name }}</h3>
    <p class="date">{{ new Date(release.published_at).toLocaleDateString('zh-CN') }}</p>
    <div v-html="release.body"></div>
  </div>
</div>

<style scoped>
.release {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
}
.release h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
}
.date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin-bottom: 1rem;
}
.warning {
  color: var(--vp-c-warning);
  padding: 1rem;
}
</style>
