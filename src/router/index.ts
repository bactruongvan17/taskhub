import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import SignUpPage from '@/views/auth/SignUpPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
      meta: {
        requireAuth: false
      }
    }
  ]
})

router.beforeEach((to) => {
  const isAuthenticated = true
  if (!isAuthenticated) {
    if (to.name === 'login' || to.name === 'signup') {
      return
    }

    return { name: 'login' }
  } else {
    if (to.name === 'login' || to.name === 'signup') {
      return { name: 'home' }
    }
  }
})

export default router
