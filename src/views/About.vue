<template>
  
  <v-container class="py-10">
<v-sheet class="pa-10 rounded-lg elevation-1">
    
<h1 class="mb-6">{{ t('nav.about') }}</h1>
<h2 class="text-h5 mb-2">{{ t('about.historyTitle') }}</h2>
<p class="mb-4">{{ t('about.history') }}</p>
<h2 class="text-h5 mb-2">{{ t('about.visionMissionTitle') }}</h2>
<p class="mb-2"><strong>Vision:</strong> {{ t('about.vision') }}</p>
<p class="mb-6"><strong>Mission:</strong> {{ t('about.mission') }}</p>
<h2 class="text-h5 mb-2">{{ t('about.teamTitle') }}</h2>
<p>{{ t('about.team') }}</p>
</v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
