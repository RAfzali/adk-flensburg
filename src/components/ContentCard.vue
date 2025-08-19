
<template>
  <v-card class="mb-4">
    <v-img v-if="item.imageDataUrl" :src="item.imageDataUrl" height="220" cover />
    <v-card-title>{{ localized(item.title) }}</v-card-title>
    <v-card-subtitle v-if="item.date">{{ formatDate(item.date) }}</v-card-subtitle>
    <v-card-text v-if="item.body">{{ localized(item.body) }}</v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { BaseContent, LocalizedText } from '../stores/content'
defineProps<{ item: BaseContent }>()
const { locale } = useI18n()
function localized(t: LocalizedText) { return t[locale.value as 'de'|'fa'|'ps'] || t.de }
function formatDate(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString()
}
</script>
