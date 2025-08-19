<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

<h1 class="mb-6">{{ t('nav.news') }}</h1>
<ContentList type="news" />
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentList from '../components/ContentList.vue'
const { t } = useI18n()
</script>

