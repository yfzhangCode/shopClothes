import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'

Vue.config.productionTip = false
Vue.prototype.$Bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
