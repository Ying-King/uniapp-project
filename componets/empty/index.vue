<template name="empty">
	<view class="emptyContainer">
		<!-- 通用 -->
		<view class="emptyBox" v-if="type == '0'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/common.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 收货地址 -->
		<view class="emptyBox" v-if="type == '1'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/address.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 购物车 -->
		<view class="emptyBox" v-if="type == '2'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/car.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 预约 -->
		<view class="emptyBox" v-if="type == '3'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/appointment.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 优惠券 -->
		<view class="empty-box" v-if="type == '4'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/coupon.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 消息 -->
		<view class="emptyBox" v-if="type == '5'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/msg.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
		<!-- 订单 -->
		<view class="emptyBox" v-if="type == '6'">
			<image class="icon" src="https://view.horsevision.cn/h5/common/kly_member/images/empty/order.png" mode="aspectFill" lazy-load="true"></image>
			<view class="text">{{ text }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'empty',
	data() {
		return {};
	},

	components: {},
	props: {
		text: {
			type: String,
			default: '暂无内容'
		},
		type: {
			type: String,
			default: '0'
		}
	},
	methods: {}
};
</script>
<style lang="scss">
.emptyContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80%;
	.emptyBox {
		.icon {
			display: block;
			width: 463rpx;
			height: 220rpx;
		}
		.text {
			font-size: 32rpx;
			color: #666;
			margin-top: 20rpx;
			text-align: center;
		}
	}
}
</style>
