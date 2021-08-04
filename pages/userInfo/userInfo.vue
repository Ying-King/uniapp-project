<template>
	<view class="userInfoPage pageBg">
		<view class="userInfo">
			<view class="infoItem">
				<text class="txt">头像</text>
				<view class="infoRight">
					<view class="avatar"><image src="" mode="aspectFill"></image></view>
					<u-icon name="arrow-right" color="#BFBFBF" size="32"></u-icon>
				</view>
			</view>
			<view class="infoItem">
				<text class="txt">生日</text>
				<view class="infoRight">
					<text>{{ date }}</text>
					<u-icon name="arrow-right" color="#BFBFBF" size="32"></u-icon>
				</view>
			</view>
			<view class="infoItem">
				<text class="txt">性别</text>
				<view class="infoRight">
					<text>{{ sex }}</text>
					<u-icon name="arrow-right" color="#BFBFBF" size="32"></u-icon>
				</view>
			</view>
			<view class="infoItem">
				<text class="txt">手机号码</text>
				<view class="infoRight">
					<text>{{ phone | handlerPhone }}</text>
					<u-icon name="arrow-right" color="#BFBFBF" size="32"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'userInfo',
	data() {
		return {
			phone: '17102930983',
			date: '2021-07-05',
			sex: '女'
		};
	},
	filters: {
		// 处理手机号
		handlerPhone(value) {
			if (!value) return '';
			let reg = /(\d{3})\d{6}(\d{2})/
			return value.replace(reg, "$1******$2");
		}
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
