import Vue from 'vue'
import VueRouter from 'vue-router'

//import Login from '@/components/Login.vue'
//import Home from '@/components/Home.vue'
//import Welcome from '@/components/Welcome.vue'
// 路由濑加载  按需加载 需要的路由  路由分组  login_home_welcome
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Welcome.vue')

//import Users from '@/components/user/Users.vue'
//import Rights from '@/components/power/Rights.vue'
//import Roles from '@/components/power/Roles.vue'
const Users = () => import(/* webpackChunkName: "users_rights_roles" */ '@/components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "users_rights_roles" */ '@/components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "users_rights_roles" */ '@/components/power/Roles.vue')

//import Cate from '@/components/goods/Cate.vue'
//import Params from '@/components/goods/Params.vue'
const Cate = () => import(/* webpackChunkName: "cate_params" */ '@/components/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "cate_params" */ '@/components/goods/Params.vue')

//import GoodsList from '@/components/goods/List.vue'
//import GoodsAdd from '@/components/goods/Add.vue'
const GoodsList = () => import(/* webpackChunkName: "goods_list_add" */ '@/components/goods/List.vue')
const GoodsAdd = () => import(/* webpackChunkName: "goods_list_add" */ '@/components/goods/Add.vue')


//import Order from '@/components/order/Order.vue'
//import Report from '@/components/report/Report.vue'
const Order = () => import(/* webpackChunkName: "order_report" */ '@/components/order/Order.vue')
const Report = () => import(/* webpackChunkName: "order_report" */ '@/components/report/Report.vue')


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
   {
    path: '/',
    redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect:'/welcome',
      children:[
        {path:'/welcome',component:Welcome},
        {path:'/users',component:Users},
        {path:'/rights',component:Rights},
        {path:'/roles',component:Roles},
        {path:'/categories',component:Cate},
        {path:'/params',component:Params},
        {path:'/goods',component:GoodsList},
        {path:'/goods/add',component:GoodsAdd},
        {path:'/orders',component:Order},
        {path:'/reports',component:Report},
      ]
    },
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
   if(to.path=== '/login') return next();
   const tokenStr = sessionStorage.getItem('token');
   if(!tokenStr) return next('/login');
   next()
})

export default router
