import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios模块
import axios from "axios"
//设置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//设置保存session信息
axios.defaults.withCredentials=true;
//注册axios
Vue.prototype.axios=axios;

//1.mint-ui
import MintUI from "mint-ui"
//2.单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3.注册mint-ui
Vue.use(MintUI)
//4.引入字体图标文件
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
