
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Events from '../views/Events.vue'
import News from '../views/News.vue'
import Gallery from '../views/Gallery.vue'
import Partners from '../views/Partners.vue'
import Contact from '../views/Contact.vue'
import Imprint from '../views/Imprint.vue'
import Privacy from '../views/Privacy.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/events', name: 'events', component: Events },
    { path: '/news', name: 'news', component: News },
    { path: '/gallery', name: 'gallery', component: Gallery },
    { path: '/partners', name: 'partners', component: Partners },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/imprint', name: 'imprint', component: Imprint },
    { path: '/privacy', name: 'privacy', component: Privacy },
    { path: '/admin', name: 'admin-login', component: AdminLogin },
    { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboard, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const auth = useAuthStore()
    if (!auth.isAuthenticated) {
      next({ name: 'admin-login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})

export default router
