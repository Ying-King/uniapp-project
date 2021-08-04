<template>
	<view class="userFootprint">
		<!-- 空内容 -->
		<view class="emptyWrap flexCenter" v-if="isEmpty"><empty type="0"></empty></view>

		<view class="footprintList" v-if="!isEmpty">
			<view class="footprintItem" v-for="(item, index) of dataList" :key="index">
				<view class="total">7.29今天5次浏览记录</view>
				<view class="productList">
					<view class="product">
						<image src="" mode="aspectFill" class="productImg"></image>
						<view class="title">KPR-8382</view>
					</view>
					<view class="product">
						<image src="" mode="aspectFill" class="productImg"></image>
						<view class="title">KPR-8382</view>
					</view>
					<view class="product">
						<image src="" mode="aspectFill" class="productImg"></image>
						<view class="title">KPR-8382</view>
					</view>
					<view class="product">
						<image src="" mode="aspectFill" class="productImg"></image>
						<view class="title">KPR-8382</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Empty from '@/components/empty/empty.vue';

export default {
	name: 'userFootprint',
	data() {
		return {
			dataList: [],
			dataList: ['', ''], // 数据列表
			isEmpty: false, // 是否为空
			count: 0, // 数量
			currentPage: 1, // 页数
			pageSize: 10 // 分页数量
		};
	},
	components: { Empty }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
