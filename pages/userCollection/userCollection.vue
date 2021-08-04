<template>
	<view class="userCollection">	
		<!-- 空内容 -->
		<view class="emptyWrap flexCenter" v-if="isEmpty">
			<empty type="0"></empty>
		</view>
		
		<view class="collectionList" v-if="!isEmpty">
			<view class="collectionItem" v-for="(item, index) of dataList" :key="index">
				<image src="" mode="aspectFill" class="collectionImg"></image>
				<view class="info">
					<view class="title">KPR-8382</view>
					<view class="desc">常州康普瑞汽车空调有限公司成立于2006年，是集研发、制造、销售</view>
					<view class="icon">
						<image :src="item.isCollected?collectedIcon:uncollectedIcon" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { collectedIcon, uncollectedIcon } from '@/utils/httpImg/index.js';
import { SHOP_CATID, JD_CATID } from '@/utils/const/config.js';
import { starListPath, collectNotePath } from '@/utils/request/api';
import Empty from '@/components/empty/empty.vue';
export default {
	name: 'userCollection',
	data() {
		return {
			collectedIcon, 
			uncollectedIcon,
			dataList: [{isCollected:true},{isCollected:false}], // 数据列表
			isEmpty: true, // 是否为空
			count: 0, // 数量
			currentPage: 1, // 页数
			pageSize: 10 // 分页数量
		};
	},
	components: { Empty },
	onShow() {
		// this.getData();
	},
	onHide() {
		this.count = 0;
		this.currentPage = 1;
		this.dataList = [];
	},
	// 监听上拉触底
	// onReachBottom() {
	// 	console.log('上拉加载');
	// 	let { currentPage, count, pageSize } = this;
	// 	if (count > currentPage * pageSize) {
	// 		this.currentPage++;
	// 		this.getData();
	// 	} else {
	// 		uni.showToast({
	// 			title: '无更多数据',
	// 			icon: 'none',
	// 			duration: 1500
	// 		});
	// 	}
	// },
	methods: {
		// 数据
		async getData() {
			let { currentPage, pageSize, dataList } = this;
			let params = {
				cflag: 1,
				page: 1,
				pageSize: 100
			};
			const res = await this.$request.cmsget(starListPath, params);
			console.log(res.data, '收藏景点----------');
			let list = [];
			res.data.list.forEach(item => {
				item['isCollected'] = true;
			})
			this.dataList = list;
			this.isEmpty = list.length > 0 ? false : true;
		},
		// 去详情
		goDetail(id) {
			// if(this.tabId == 0) {
			// 	this.$openPage({
			// 		name: 'introduction',
			// 		query: {id}
			// 	});
			// }else {
			// 	this.$openPage({
			// 		name: 'shopInfo',
			// 		query: {id}
			// 	});
			// }
		},
		// 改状态
		async changeCollection(item,index) {
			let params = {
			    sflag: 1, // 1 -- 收藏
			    cflag: 1, // 1 -- 内容
			    contentid: item.content_id,
			    openid: uni.getStorageSync('openId'),
			    headimgurl: item.headimgurl,
			};
			console.log(params, "params");
			try{
				const res = await this.$request.cmspost(collectNotePath, params);
				console.log(res,'收藏-------')
				this.dataList[index].isCollected = !this.dataList[index].isCollected;
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
		},
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
