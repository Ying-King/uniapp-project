import {
	openIdPath
} from '@/utils/request/api.js'
export const mixin = {
	methods: {
		//获取用户信息
		async getAuthKey() {
			let _this = this
			return new Promise(function(resolve, reject) {
				wx.login({
					success(res) {
						console.log(res, '登录获取code------------')
						if (res.code) {
							wx.checkSession({
								success() {
									const params = {
										code: res.code
									}
									_this.$request.cmspost(openIdPath, params).then(
										res => {
											console.log(res.data,
												"获取open_id------------");
											if (res.data.member && res.data.member
												.headimgurl) {
												uni.setStorageSync('userInfo', res
													.data.member);
											}
											uni.setStorageSync("session_id",
												"session-ac=" + res.data
												.sessionid);
											uni.setStorageSync("openId", res.data
												.openid);
											resolve(res);
										})
								},
							})
						}
					}
				})
			})


		},
		// 判断是否有用户信息
		judgeUserInfo() {
			const userInfo = uni.getStorageSync('userInfo');
			if (!userInfo) {
				uni.showModal({
					title: '温馨提示',
					content: '请先登录',
					showCancel: true,
					success: (result) => {
						if (result.confirm) {
							this.$openPage({
								name: 'authorization'
							});
						}
					},
				})
				return false;
			} else {
				return true;
			}
		},
		// 判断是否授权
		judgeIsLogin() {
			const openId = uni.getStorageSync('openId');
			if (!openId) {
				uni.showModal({
					title: '温馨提示',
					content: '请先登录',
					showCancel: true,
					success: (result) => {
						if (result.confirm) {
							this.$openPage({
								name: 'authorization'
							});
						}
					},
				})
				return false;
			} else {
				return true;
			}
		},

	}
}
