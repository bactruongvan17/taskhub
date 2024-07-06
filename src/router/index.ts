import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import SignUpPage from '@/views/auth/SignUpPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WorkspaceBoards from '@/views/workspaces/WorkspaceBoards.vue'
import WorksapceMembers from '@/views/workspaces/WorkspaceMembers.vue'
import WorkspaceSettings from '@/views/workspaces/WorkspaceSettings.vue'
import { useLayoutStore } from '@/stores/layout'
import { LayoutTypes } from '@/types/data'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        layout: LayoutTypes.DEFAULT
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        layout: LayoutTypes.AUTH
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
      meta: {
        layout: LayoutTypes.AUTH
      }
    },
    {
      path: '/workspace/:id/boards',
      name: 'boards',
      component: WorkspaceBoards,
      meta: {
        layout: LayoutTypes.WORKSPACE
      }
    },
    {
      path: '/workspace/:id/members',
      name: 'members',
      component: WorksapceMembers,
      meta: {
        layout: LayoutTypes.WORKSPACE
      }
    },
    {
      path: '/workspace/:id/settings',
      name: 'settings',
      component: WorkspaceSettings,
      meta: {
        layout: LayoutTypes.WORKSPACE
      }
    }
  ]
})

router.beforeEach((to, from) => {
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
