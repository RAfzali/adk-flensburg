<template>
  <v-container class="py-10">
    <v-sheet class="pa-10 rounded-lg elevation-1">

<h1 class="mb-6">{{ t('contact.title') }}</h1>
<v-row>
  <v-col cols="12" md="6">
    <v-form @submit.prevent>
      <v-text-field label="Name" required />
      <v-text-field label="E-Mail" type="email" required />
      <v-textarea label="Nachricht" rows="5" required />
      <v-btn type="submit" class="mt-2">Senden</v-btn>
    </v-form>
  </v-col>
  <v-col cols="12" md="6">
    <v-sheet class="pa-4">
      <p class="mb-2">{{ t('contact.address') }}</p>
      <p class="mb-2">{{ t('contact.phoneEmail') }}</p>
      <v-img src="https://maps.googleapis.com/maps/api/staticmap?center=Flensburg&zoom=12&size=600x300&key="
             alt="Karte Flensburg" height="200" cover />
    </v-sheet>
  </v-col>
</v-row>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
