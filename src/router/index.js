import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ventes from '../views/Ventes.vue'
import Clients from '../views/Clients.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ventes',
    name: 'Ventes',
    component: Ventes,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
