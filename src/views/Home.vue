<template>
  <v-container class="py-10">
    
<v-sheet class="pa-10 rounded-lg elevation-1">
  <h1 class="mb-4">{{ t('hero.welcome') }}</h1>
  <p class="text-medium-emphasis mb-6">{{ t('hero.subtitle') }}</p>
  <p>{{ t('home.intro') }}</p>
</v-sheet>

  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
