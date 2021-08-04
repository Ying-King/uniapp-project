<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import { SWIPER_CATID } from '@/utils/const/config.js';
import { getListCMSPath } from '@/utils/request/api.js';
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {
		this.getData();
	},
	methods: {
		async getData() {
			const res = await this.$request.cmsget(getListCMSPath, { catid: SWIPER_CATID });
			console.log(res.data);
		}
	}
};
</script>
<style lang="scss">
@import './index.scss';
</style>
