import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Registro from '../views/Registro.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
]

// const routesprivate = [

// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // routesprivate
})

export default router
