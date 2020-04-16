import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
		userMess:[],
		stepMess:null,
		userid:null,		/* 用户身份凭证 */
		userData:[]			/* 从数据库获取的用户数据 */
	},
	mutations:{
		
	},
	actions:{
		
	}
})

export default store