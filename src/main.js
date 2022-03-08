import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
import './assets/font/iconfont.css'

//引入富文本编辑框
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
// 引进table 插件
import TreeTable from 'vue-table-with-tree-grid'


import axios from 'axios';
// 配置请求的根路径
//axios.defaults.baseURL= 'http://localhost:8080';
Vue.prototype.$http = axios;
// 添加请求拦截器
axios.interceptors.request.use(config=>{
   config.headers.Authorization  = sessionStorage.getItem('token')
   return config;
})

Vue.component('tree-table',TreeTable)
Vue.config.productionTip = false

// 时间格式化
Vue.filter('dataFormat',function(originVal){
   const dt = new Date(originVal);
   const y = dt.getFullYear();
   const m = (dt.getMonth() + 1 + '').padStart(2,'0');
   const d = (dt.getDate() + '').padStart(2,'0');
   const hh = (dt.getHours() + '').padStart(2,'0');
   const mm = (dt.getMinutes() + '').padStart(2,'0');
   const ss = (dt.setSeconds() + '').padStart(2,'0');
   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})





// 引入mock 数据
require("@/mock/mock.js");
require("@/mock/goodList.js");



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
