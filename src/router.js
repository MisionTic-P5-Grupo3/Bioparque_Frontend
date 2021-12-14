import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import Planes from './views/Planes.vue'
import Reservar from './views/Reservar.vue'
import Aves from './views/Aves.vue'
import Login from './views/Login.vue'
import Agendamientos from './views/Agendamientos.vue'
import PlanesAdmin from './views/PlanesAdmin.vue'
import AvesAdmin from './views/AvesAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/planes',
    name: 'Planes',
    component: Planes
  },
  {
    path: '/reservar',
    name: 'Reservar',
    component: Reservar
  },
  {
    path: '/aves',
    name: 'Aves',
    component: Aves
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/agendamientos',
    name: 'Agendamientos',
    component: Agendamientos
  },
  {
    path: '/planesAdmin',
    name: 'PlanesAdmin',
    component: PlanesAdmin
  },
  {
    path: '/avesAdmin',
    name: 'AvesAdmin',
    component: AvesAdmin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
