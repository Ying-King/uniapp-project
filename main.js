import Vue from 'vue'
import App from './App'
import store from './store'

// 请求注册
import request from '@/utils/request/index.js'
Vue.prototype.$request = request

//引入uView主JS库
import uView from "uview-ui"
Vue.use(uView);

// 引入MinRouter文件
import MinRouter from '@/utils/router/MinRouter'
// 引入router文件
import minRouter from '@/utils/router/router'
// 注册插件
Vue.use(MinRouter)

Vue.config.productionTip = false;
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
    ...App,
	minRouter,
	store
})
app.$mount()
