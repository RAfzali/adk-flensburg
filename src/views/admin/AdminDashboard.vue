
<template>
  <v-container class="py-6">
    <v-sheet class="pa-10 rounded-lg elevation-1">

    <div class="d-flex justify-space-between align-center mb-4">
      <h1>{{ t('admin.dashboard') }}</h1>
      <v-btn @click="logout" variant="text">{{ t('admin.logout') }}</v-btn>
    </div>
    <v-tabs v-model="tab" class="mb-6">
      <v-tab value="events">{{ t('admin.events') }}</v-tab>
      <v-tab value="news">{{ t('admin.news') }}</v-tab>
      <v-tab value="gallery">{{ t('admin.gallery') }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="events"><CrudManager type="events" /></v-window-item>
      <v-window-item value="news"><CrudManager type="news" /></v-window-item>
      <v-window-item value="gallery"><CrudManager type="gallery" /></v-window-item>
    </v-window>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import CrudManager from '../../views/admin/CrudManager.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const tab = ref('events')
const auth = useAuthStore()
function logout(){ auth.logout() }
</script>
