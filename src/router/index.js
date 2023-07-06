import { createRouter, createWebHistory } from 'vue-router'

import kioskMenu from '../components/sellingtype/kioskMenu.vue'

// import HomeView from '../views/HomeView.vue'
import NavBar from '@/components/outline/NavBar.vue'


const routes = [
   {
    path: '/',
    name: 'kioskMenu',
    component: kioskMenu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/navbar',
    name: 'NavBar',
    component : NavBar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
