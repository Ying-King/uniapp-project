import { http } from './common.js' // 全局挂载引入，配置相关在该common.js文件里修改
import { CMS_APPID } from '../const/config.js';

module.exports = {
	/**
	 * @param {String} url 接口地址
	 * @param {Object} params 数据
	 * @param {String} loading 是否显示加载提示框 0-不展示 其他默认展示
	 */
	async get(url, params, loading) {
		try {
			const res = await http.get(url, {
				params, 
				custom: {
					loading: loading==0 ? false : true
				},
			});
			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err.data);
		}
	},

	async post(url, params, loading) {
		try {
			const res = await http.post(url, params, {
				custom: {
					loading: loading==0 ? false : true
				},
			});
			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err.data);
		}
	},

	/* -------------------- cms封装请求 ----------------------- */

	async cmsget(url, params, loading) {
		try {
			if (params) {
				params['appid'] = CMS_APPID
			} else {
				params = {
					appid: CMS_APPID
				}
			}
			const res = await http.get(url, {
				params, 
				custom: {
					loading: loading==0 ? false : true,
					ignoreStatus: false
				},
			});
			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err.data);
		}
	},

	async cmspost(url, params, loading) {
		try {
			if (params) {
				params['appid'] = CMS_APPID
			} else {
				params = {
					appid: CMS_APPID
				}
			}
			const res = await http.post(url, params, {
				custom: {
					loading: false,
					ignoreStatus: false
				},
			});
			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err.data);
		}
	},
}
