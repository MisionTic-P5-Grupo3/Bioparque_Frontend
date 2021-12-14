import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import Planes from './views/Planes.vue'
import Reservar from './views/Reservar.vue'
import Aves from './views/Aves.vue'
import Login from './views/Login.vue'
import Agendamientos from './views/Agendamientos.vue'
import PlanesAdmin from './views/PlanesAdmin.vue'
import AvesAdmin from './views/AvesAdmin.vue'
import CrearPlan from './views/CrearPlan.vue'
import ActualizarReserva from './views/ActualizarReserva.vue'
import AgregarAve from './views/AgregarAve.vue'
import EditarAve from './views/EditarAve.vue'

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
    component: Agendamientos,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/CrearPlan',
    name: 'CrearPlan',
    component: CrearPlan,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/planesAdmin',
    name: 'PlanesAdmin',
    component: PlanesAdmin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/ActualizarReserva/:id_reserva?',
    name: 'ActualizarReserva',
    component: ActualizarReserva,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/agregarAve',
    name: 'AgregarAve',
    component: AgregarAve,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/editarAve/:id_ave?',
    name: 'EditarAve',
    component: EditarAve,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  },
  {
    path: '/avesAdmin',
    name: 'AvesAdmin',
    component: AvesAdmin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('login') !== 'false') {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    },
    beforeRouteUpdate: (to, from, next) => {
      if (localStorage.getItem('login') !== false) {
        next()
      } else {
        alert('No tienes autorización para acceder a este sitio web')
        next(false)
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
