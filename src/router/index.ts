import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

router.beforeEach((to) => {
  const isAuthenticated = false
  if (!isAuthenticated) {
    if (to.name !== 'login') {
      return { name: 'login' }
    }
  } else {
    if (to.name === 'login') {
      return { name: 'home' }
    }
  }
})

export default router
