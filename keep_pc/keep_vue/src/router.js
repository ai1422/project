import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Xunlian from './views/Xunlian.vue'
import Login  from './views/Login.vue'
import Faxian from './views/Faxian.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/xunlian',
      name: 'xunlian',
      component: Xunlian
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/faxian',
      name: 'faxian',
      component: Faxian
    }
  ]
})
