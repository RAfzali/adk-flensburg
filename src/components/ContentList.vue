
<template>
  <div>
    <ContentCard v-for="it in list" :key="it.id" :item="it" />
    <div v-if="list.length===0" class="text-medium-emphasis">Noch keine Einträge.</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore, type BaseContent } from '../stores/content'
import ContentCard from '../components/ContentCard.vue'

const props = defineProps<{ type: 'events'|'news', past?: boolean }>()
const store = useContentStore()

function parseDate(val?: string): number {
  if (!val) return 0
  // akzeptiere 'YYYY-MM-DD' und komplette ISO-Strings
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) return new Date(val + 'T00:00:00').getTime()
  return new Date(val).getTime()
}

const list = computed<BaseContent[]>(() => {
  const arr = props.type === 'events' ? store.events : store.news

  // NEWS: niemals filtern, nur sortieren (neueste zuerst)
  if (props.type === 'news') {
    return [...arr].sort((a, b) => parseDate(b.date) - parseDate(a.date))
  }

  // EVENTS: in „kommend“ vs. „vergangen“ aufteilen
  const now = new Date()
  return arr
    .filter(i => {
      const t = parseDate(i.date)
      return props.past ? t < now.getTime() : t >= now.getTime()
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
})

</script>
