import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop.js'; 
Vue.use(Vuex)
// 通过vuex构造函数创建store对象
const store = new Vuex.Store({  
    state: {  
         
    },  
    mutations: {  
        
    },
	modules: {
		shop
	}
}) 
export default store //导出store对象