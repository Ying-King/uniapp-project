import Request from 'luch-request';
import {
	apiFoodDomain
} from '../const/domain.js';
import {
	SHOP_APPID,
	SUCCESS_CODE
} from '../const/config.js';

const createInterceptor = instance => {
	/* 请求之前拦截器 */ 
    instance.interceptors.request.use((config) => {
        // 可使用async await 做异步操作
        // console.log(config);
        if (config.custom.loading) {
            uni.showLoading({
                title: '加载中...',
                mask: true,
            });
        }
		// 拦截器header加参
		config.header = {
			...config.header,
			'Cookie': uni.getStorageSync('session_id'),
		}
		// 判断接口是否需要token
		if (config.custom.auth) {
			const token = uni.getStorageSync('token');
			if (!token) {
				uni.showToast({
					title: '用户登录信息失效，请重新登录',
					icon: 'none',
				});
				// 如果token不存在，return Promise.reject(config) 会取消本次请求
				return Promise.reject(config);
			}
			config.header.token = token;
		}
		return config;
	}, (config) => {
		// 可使用async await 做异步操作
		uni.hideLoading();
		uni.showToast({
			title: '请求错误，请稍后再试',
			icon: 'none',
		});
		return Promise.reject(config);
	});

	/* 请求之后拦截器 */
	instance.interceptors.response.use((response) => {
		uni.hideLoading();
		if (response.data.code == 100700 || response.data.code == 10031) {
			uni.showModal({
				title: '提示',
				content: '用户登录信息失效，请重新登录',
				showCancel: false,
				success: function(res) {
					if (res.confirm) {
						uni.navigateTo({
							url: "/pages/login/index"
						})
					}
				}
			});
		}
		// 是否忽略成功状态码判断
		// 忽略后可在接口中单独做判断
		if (!response.config.custom.ignoreStatus) {
			if (response.data.code != SUCCESS_CODE) {
				// 服务端返回的状态码不等于成功码，则reject()
				// return Promise.reject  可使promise状态进入catch
				// uni.showToast({
				//     title: response.data.info || '响应错误，请稍后再试',
				//     icon: 'none',
				// });
				return Promise.reject(response);
			}
		}
		return response;
	}, (response) => {
		console.log(response)
		uni.hideLoading();
		/*  对响应错误做点什么 （statusCode !== SUCCESS_CODE）*/
		uni.showToast({
			title: '网络错误，请稍后再试',
			icon: 'none',
		});
		return Promise.reject(response);
	});
};

export const http = new Request({
	baseURL: apiFoodDomain,
	/* 根域名 */
	custom: {
		auth: false, // 是否需要token
		loading: true, // 默认有loading  
		ignoreStatus: false, // 是否忽略成功状态码判断
	},
	header: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
		'Authorization': SHOP_APPID
	},
});
createInterceptor(http);
