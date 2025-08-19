<template>
  <v-container class="py-10">
    
<h1 class="mb-6">{{ t('legal.imprint') }}</h1>
<p>Verein: Afghanisch-Deutscher Kulturverein e.V. Flensburg</p>
<p>Domain: {{ domain }}</p>
<p>Weitere rechtliche Angaben können hier ergänzt werden.</p>

  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const domain = import.meta.env.VITE_SITE_DOMAIN
</script>
