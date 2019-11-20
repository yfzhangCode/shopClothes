import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
// 引入Vuex
import Store from './store/index'
// 引入Toast插件
import Toast from 'component/common/toast/index'
// 移动端解决300ms延迟问题
import FastClick from 'fastclick'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$store = Store
Vue.config.productionTip = false
Vue.prototype.$Bus = new Vue()
// 安装toast 插件
Vue.use(Toast)
// 图片懒加载的配置
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})
// 解决移动端300ms
FastClick.attach(document.body)



new Vue({
  router,
  Store,
  render: h => h(App),
}).$mount('#app')
