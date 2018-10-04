import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
  console.log(response.data)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
