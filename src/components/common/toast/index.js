import Toast from './Toast.vue'

// 创建toast 对象
const ToastObj = {}
ToastObj.install = function (Vue) {
  // Vue.extend()
  // 使用 vue 构造器创建 对象
  const toastContrucator = Vue.extend(Toast)
  // 创建新的toast组件对象
  const toast = new toastContrucator()
  // 把创建的对象手动挂载到body元素上
  toast.$mount(document.createElement('div'))
  // 把创建的元素对象加到body中
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default ToastObj
