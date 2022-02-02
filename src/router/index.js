import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contrats from '../views/Contrats.vue'
import Clients from '../views/Clients.vue'
import Produits from '../views/Produits.vue'
import Profil from '../views/Profil.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contrats',
    name: 'Contrats',
    component: Contrats,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits,
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
