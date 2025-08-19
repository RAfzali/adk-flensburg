<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

      <h1 class="mb-6">{{ t('projects.title') }}</h1>
      <p class="mb-4">{{ t('projects.intro') }}</p>

      <h2 class="text-h6 mb-2">{{ t('projects.current') }}</h2>
      <v-list density="comfortable" class="mb-6">
        <v-list-item v-for="(it, i) in items" :key="i">
          <!-- Wenn Objekt mit title/description -->
          <template v-if="isObj(it)">
            <v-list-item-title class="text-h6 font-weight-bold">
              {{ it.title }}
            </v-list-item-title>
            <v-list-item-subtitle v-if="it.description">
              {{ it.description }}
            </v-list-item-subtitle>
          </template>

          <!-- Fallback: einfacher String -->
          <template v-else>
            <v-list-item-title class="text-h6 font-weight-bold">
              {{ it }}
            </v-list-item-title>
          </template>
        </v-list-item>
      </v-list>

      <h2 class="text-h6 mb-2">{{ t('projects.reportsTitle') }}</h2>
      <p>{{ t('projects.reports') }}</p>

    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

type ItemObj = { title: string; description?: string }

// tm('path') liefert Array/Object unverändert zurück
const items = computed<(string | ItemObj)[]>(() => {
  const raw = tm('projects.items') as unknown
  return Array.isArray(raw) ? (raw as (string | ItemObj)[]) : []
})

function isObj(x: unknown): x is ItemObj {
  return !!x && typeof x === 'object' && 'title' in (x as any)
}
</script>
