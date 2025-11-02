import { createRouter, createWebHistory } from 'vue-router'

import MainPortfolio from '@/pages/MainPortfolio.vue'
import About from '@/pages/AboutMe.vue'
import Contact from '@/pages/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: MainPortfolio,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/github',
      name: 'github',
      beforeEnter() {
        window.open('https://github.com/kenbot5000', '_blank')
        this.$router.go(-1)
      },
    },
  ],
})

export default router
