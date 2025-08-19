<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

<h1 class="mb-6">{{ t('partners.title') }}</h1>
<p>{{ t('partners.thanks') }}</p>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
