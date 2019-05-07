import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/page/login.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    }
  ]
})
