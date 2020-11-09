import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Registro from '../views/Registro.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'
import PostIndividual from '../components/PostIndividual.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
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
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/postindividual',
    name: 'postindividual',
    component: PostIndividual
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
