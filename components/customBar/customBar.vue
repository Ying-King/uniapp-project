<template>
	<!-- 自定义顶部栏 -->
	<view class="customBar">
		<view class="titleBox" :style="'height:' + navBarHeight + 'px;'">
			<view class="barTitle flexStartCenter" :style="'height:' + menuHeight + 'px;line-height:' + menuHeight + 'px;bottom:' + menuBottom + 'px;'">
				<navigator class="iconfont iconzuojiantou" open-type="navigateBack" v-if="!isShowHome"></navigator>
				<navigator class="navigatorHome flexCenter" open-type="switchTab" url="/pages/index/index" v-if="!isTabPage && isShowHome">
					<image :src="backHomeImg" mode="aspectFit"></image>
				</navigator>
				<view class="title">{{ title }}</view>
			</view>
		</view>
		<image v-if="imgUrl" :src="imgUrl" mode="aspectFill" class="barImg"></image>
	</view>
</template>

<script>
import { backHomeImg } from '@/utils/httpImg/index';
import { mapGetters } from 'vuex';
export default {
	name: 'customBar',
	props: {
		title: {
			// 标题
			type: String,
			default: '新市古镇'
		},
		imgUrl: {
			// 图片
			type: String,
			default: ''
		},
		isTabPage: {
			// 判断是否为tab页面
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			backHomeImg,
			isShowHome: false // 是否位于tabBar页面
		};
	},
	computed: {
		...mapGetters(['navBarHeight', 'menuRight', 'menuBottom', 'menuHeight'])
	},
	// 组件所在页面的生命周期函数
	mounted() {
		let pageContext = getCurrentPages();
		this.isShowHome = pageContext.length > 1 ? false : true;
	}
};
</script>

<style lang="scss">
.titleBox {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	width: 100%;
}

.barTitle {
	box-sizing: border-box;
	padding-left: 30rpx;
	width: 100%;
	text-align: center;
	font-size: 28rpx;
	color: #fff;
	position: absolute;
	left: 0;
	z-index: 10;
	.title {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.iconfont {
		margin-right: 30rpx;
		font-size: 34rpx;
	}
}
.navigatorHome {
	margin-right: 30rpx;
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.6);
	align-self: center;
	image {
		display: block;
		width: 30rpx;
		height: 30rpx;
	}
}

.barImg {
	display: block;
	width: 100%;
	height: 449rpx;
}
</style>
