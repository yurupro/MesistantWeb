// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueBootstrapToasts from 'vue-bootstrap-toasts'

Vue.use(VueBootstrapToasts)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_BASEURL
console.log('API_BASEURL: ' + process.env.VUE_APP_API_BASEURL)
console.log(process.env)

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
