<template>
  <v-app :class="{ rtl: locale === 'fa' || locale === 'ps' }">
    <!-- HEADER -->
    <v-app-bar density="comfortable" flat class="header-lightblue">
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex align-center ga-2">
          <v-avatar size="60">
            <v-img :src="logo" alt="ADK Logo" />
          </v-avatar>
          <strong>ADK Flensburg</strong>
        </div>

        <v-tabs v-model="tab" class="d-none d-md-flex" grow>
          <v-tab :to="{ name: 'home' }">{{ t('nav.home') }}</v-tab>
          <v-tab :to="{ name: 'about' }">{{ t('nav.about') }}</v-tab>
          <v-tab :to="{ name: 'projects' }">{{ t('nav.projects') }}</v-tab>
          <v-tab :to="{ name: 'events' }">{{ t('nav.events') }}</v-tab>
          <v-tab :to="{ name: 'news' }">{{ t('nav.news') }}</v-tab>
          <v-tab :to="{ name: 'gallery' }">{{ t('nav.gallery') }}</v-tab>
          <v-tab :to="{ name: 'partners' }">{{ t('nav.partners') }}</v-tab>
          <v-tab :to="{ name: 'contact' }">{{ t('nav.contact') }}</v-tab>
        </v-tabs>

        <div class="d-flex align-center ga-2">
          <v-select
            v-model="locale"
            :items="localeItems"
            density="compact"
            hide-details
            style="max-width: 160px"
          />
          <v-btn variant="text" :to="{ name: 'admin-login' }">Admin</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- MAIN -->
    <v-main class="main-background">
      <router-view />
    </v-main>

    <!-- FOOTER -->
    <!-- FOOTER -->
<v-footer class="mt-10 footer-lightblue footer-compact">
  <v-container class="d-flex justify-space-between flex-wrap align-center">
    <div>&copy; {{ new Date().getFullYear() }} ADK Flensburg – {{ domain }}</div>
    <div class="d-flex ga-4">
      <RouterLink :to="{ name: 'imprint' }">{{ t('nav.imprint') }}</RouterLink>
      <RouterLink :to="{ name: 'privacy' }">{{ t('nav.privacy') }}</RouterLink>
    </div>
  </v-container>
</v-footer>

  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import logo from './assets/logo.png' // <-- Lege hier dein Logo ab (src/assets/logo.png)

const { t, locale } = useI18n()
const tab = ref(null)
const domain = import.meta.env.VITE_SITE_DOMAIN
const localeItems = [
  { title: 'Deutsch', value: 'de' },
  { title: 'دری', value: 'fa' },
  { title: 'پښتو', value: 'ps' }
]

watch(locale, (val) => {
  localStorage.setItem('adk_locale', String(val))
}, { immediate: true })

const saved = localStorage.getItem('adk_locale')
if (saved) locale.value = saved as any
</script>

<style>
/* Hellblau für Header & Footer */
.header-lightblue {
  background-color: #e0f0ff !important;
}

.footer-lightblue {
  background-color: #e0f0ff !important;
}

/* Kompakter Footer */
.footer-compact {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  min-height: 30px !important;
}

/* RTL-Unterstützung für fa/ps */
.rtl {
  direction: rtl;
  text-align: right;
}

.rtl .v-tab,
.rtl a {
  text-align: right;
}
.main-background {
  background-image: url('@/assets/background.jpg'); /* Dein Bild */
  background-size: cover;       /* Bild füllt gesamten Bereich */
  background-position: center;  /* zentriert */
  background-repeat: no-repeat; /* kein Kacheln */
  min-height: calc(100vh - 120px); /* passt Höhe an, 120px ≈ Header + Footer */
}

</style>
