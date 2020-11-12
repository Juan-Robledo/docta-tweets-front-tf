import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //Verificamos si la ruta requiere token
  if(to.matched.some(record => record.meta.logueado)){

    //Preguntamos si existe el token
    if(!sessionStorage.getItem('token')){
      next({path: '/login'});
    }else {
      next();
    }
  } else {
      next();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')