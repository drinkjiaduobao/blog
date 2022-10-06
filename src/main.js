import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import permission from '@/util/permission';

// element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//全局引入初始化css文件
import './assets/css/reset.css'

//引入axios以及配置后的axios
import axios from 'axios'
import service from '@/util/service'

//引用mock.js
import '@/mock'

Vue.prototype.axios = axios//挂载到原型，可在全局使用
Vue.prototype.service = service//service挂载到原型可全局使用

// Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
