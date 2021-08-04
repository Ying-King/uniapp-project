import * as types from '@/store/modules/mutation-types.js'
export default {
	state: {
		joinOrderId: 0, //参团的order_id 加入的拼团订单id 开团人为0
		orderType: 1, //1 普通购买 2拼团 3秒杀 5促销
		
	},
	getters: {
		joinOrderId: (state) => state.joinOrderId,
		orderType:(state) => state.orderType,
	},
	mutations: {
		[types.SET_LOADING_STATUS](state, value) {
			state.joinOrderId = value
		},
		[types.SET_ORDER_TYPE](state, value) {
			state.orderType = value
		},
	},
	actions: {
		// setJoinOrderId({
		// 	commit
		// }, value) {
		// 	commit("SET_LOADING_STATUS", value)
		// }
	}
}
