import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
// 引入Vuex
import Store from './store/index'

Vue.prototype.$store = Store
Vue.config.productionTip = false
Vue.prototype.$Bus = new Vue()

new Vue({
  router,
  Store,
  render: h => h(App),
}).$mount('#app')
