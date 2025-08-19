<template>
  <v-container class="py-10">
    
<h1 class="mb-6">{{ t('legal.privacy') }}</h1>
<p>Hier steht Ihre Datenschutzerklärung. Fügen Sie die rechtlichen Inhalte gemäß DSGVO hinzu.</p>

  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
