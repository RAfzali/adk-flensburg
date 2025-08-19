
<template>
  <v-row>
    <v-col v-for="it in items" :key="it.id" cols="12" sm="6" md="4">
      <v-img :src="it.imageDataUrl" :alt="localized(it.title)" height="220" cover />
      <div class="mt-1">{{ localized(it.title) }}</div>
    </v-col>
  </v-row>
  <div v-if="items.length===0" class="text-medium-emphasis">Noch keine Bilder.</div>
</template>
<script setup lang="ts">
import { useContentStore, type BaseContent, type LocalizedText } from '../stores/content'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const store = useContentStore()
const items = store.gallery
function localized(t: LocalizedText) { return t[locale.value as 'de'|'fa'|'ps'] || t.de }
</script>
