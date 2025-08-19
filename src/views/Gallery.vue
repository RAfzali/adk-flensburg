<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

<h1 class="mb-6">{{ t('nav.gallery') }}</h1>
<GalleryGrid />
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GalleryGrid from '../components/GalleryGrid.vue'
const { t } = useI18n()
</script>

