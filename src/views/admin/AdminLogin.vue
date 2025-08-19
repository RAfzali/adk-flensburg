
<template>
  <v-container class="py-10" style="max-width: 520px">
    <h1 class="mb-6">{{ t('admin.loginTitle') }}</h1>
    <v-alert type="info" variant="tonal" class="mb-4">Rufen Sie den Adminbereich direkt unter <strong>/admin</strong> auf.</v-alert>
    <v-form @submit.prevent="onSubmit">
      <v-text-field v-model="password" :label="t('admin.password')" type="password" required />
      <v-btn type="submit" class="mt-2">{{ t('admin.login') }}</v-btn>
    </v-form>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const password = ref('')
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
function onSubmit() {
  if (auth.login(password.value)) {
    const redirect = (route.query.redirect as string) || '/admin/dashboard'
    router.push(redirect)
  } else {
    alert('Falsches Passwort')
  }
}
</script>
