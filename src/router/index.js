import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import List from '@/components/List'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
