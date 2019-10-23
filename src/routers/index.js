// 引用vue vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

// 路由映射按需加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Message = () => import('views/message/Message')
const Profile = () => import('views/profile/Profile')

// 定义路由映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router