import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/screenshots/:id',
      name: 'screenshots',
      component: () => import('../views/Screenshots.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue'),
    }
  ]
})

export default router
