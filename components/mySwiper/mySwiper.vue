<template>
	<view class="swiperWrap" :style="{ height: height }">
		<swiper :autoplay="true" :interval="3000" :circular="true" @change="onChange">
			<swiper-item v-for="(item, index) of swiperList" :key="index">
				<image v-if="item.preview" :src="item.preview[0]" mode="aspectFill"></image>
				<image v-else-if="item.img" :src="item.img" mode="aspectFill"></image>
				<image v-else :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="dotsWrap flexCenter" :style="{ bottom: dotBottom }">
			<view class="dot" 
				:class="current== index?'active':''"
				v-for="(item, index) of swiperList" 
				:key="index">
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		height: {
			// 高度
			type: String,
			default: '420rpx'
		},
		swiperList: {
			// 列表
			type: Array,
			default: []
		},
		dotBottom: {
			// 指示点距离底部距离
			type: String,
			default: '40rpx'
		}
	},
	name: 'mySwiper',
	data() {
		return {
			current: 0
		};
	},
	methods: {
		onChange(e) {
		    this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.swiperWrap {
	position: relative;
	width: 100%;
	swiper {
		width: 100%;
		height: 100%;
		image {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.dotsWrap {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.dot {
			margin: 0 6rpx;
			display: block;
			width: 12rpx;
			height: 12rpx;
			background: #ffffff;
			border-radius: 50%;
			&.active {
				background: #FF7A51;
			}
		}
	}
}
</style>
