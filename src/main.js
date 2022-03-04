import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
import './assets/font/iconfont.css'

import axios from 'axios';
// 配置请求的根路径
//axios.defaults.baseURL= 'http://localhost:8080';
Vue.prototype.$http = axios;
// 添加请求拦截器
axios.interceptors.request.use(config=>{
   config.headers.Authorization  = sessionStorage.getItem('token')
   return config;
})


Vue.config.productionTip = false

// 引入mock 数据
require("@/mock/mock.js");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
