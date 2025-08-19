
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref<boolean>(false)

  function login(password: string) {
    const ok = password === import.meta.env.VITE_ADMIN_PASSWORD
    isAuthenticated.value = ok
    if (ok) localStorage.setItem('adk_auth', '1')
    return ok
  }

  function logout() {
    isAuthenticated.value = false
    localStorage.removeItem('adk_auth')
  }

  // Restore on load
  if (typeof window !== 'undefined' && localStorage.getItem('adk_auth') === '1') {
    isAuthenticated.value = true
  }

  return { isAuthenticated, login, logout }
})
