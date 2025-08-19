<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

<h1 class="mb-6">{{ t('nav.events') }}</h1>
<h2 class="text-h6 mb-4">{{ t('events.upcoming') }}</h2>
<ContentList type="events" />

<h2 class="text-h6 mt-10 mb-4">{{ t('events.past') }}</h2>
<ContentList type="events" :past="true" />

<div class="mt-10">
  <h2 class="text-h6 mb-2">{{ t('events.registration') }}</h2>
  <p>{{ t('events.registrationInfo') }}</p>
</div>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentList from '../components/ContentList.vue'
const { t } = useI18n()
</script>

