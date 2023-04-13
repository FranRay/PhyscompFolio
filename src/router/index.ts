import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/infographic',
      name: 'Infographic',
      component: () => import('../views/InfographicView.vue')
    },
    {
      path: '/project-logs',
      name: 'Project Logs',
      component: () => import('../views/LogsView.vue')
    },
    {
      path: '/experiments',
      name: 'Experiments',
      component: () => import('../views/ExperimentsView.vue')
    }
  ]
})

export default router
