import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Registro from '../views/Registro.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'
import PostIndividual from '../views/PostIndividual.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {logueado: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {logueado: false}
  },
  {
    path: '/feed/:username',
    name: 'feed',
    component: Feed,
    meta: {logueado: true}
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil,
    meta: {logueado: true}
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
    meta: {logueado: false}
  },
  {
    path: '/post/:postID',
    name: 'post',
    component: PostIndividual,
    meta: {logueado: true}
  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: Home,
  //   meta: {logueado: true}
  // },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
