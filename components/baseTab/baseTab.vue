<template>
	<view class="baseTab" v-if="showTab">
		<u-tabs
			:name="cateName"
			:list="tabList"
			:is-scroll="tabList.length > 5 ? true : false"
			:current="current"
			inactive-color="#929292"
			:active-color="activeColor"
			font-size="26"
			height="76"
			bar-width="52"
			:bar-style="{ height: '4rpx', bottom: '-4rpx' }"
			:bold="false"
			@change="changeTab"
		></u-tabs>

		<!-- 子标签 -->
		<view :class="'subTabList ' + (subTabList.length > 0 ? 'show' : '')" v-if="subTabList.length > 0">
			<view 
				v-for="(item, index) in subTabList" 
				:key="index" 
				:class="index == subCurrent ? 'active subTabItem' : 'subTabItem'" 
				@tap="changeSubTab(index, item.name)">
				{{ item.name }}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'baseTab',
	props: {
		tabList: {
			// 分类列表
			type: Array,
			default: []
		},
		subTabList: {
			// 子标签内容
			type: Array,
			default: []
		},
		cateName: {
			// 标题属性名
			type: String,
			default: 'name'
		},
		activeColor: {
			// 选择颜色
			type: String,
			default: '#FF7A51'
		},
		tabFirst: {
			// 高亮主标签
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			current: 0, // 当前索引
			subCurrent: 0 ,// 子标签索引
			showTab: false, // 是否展示
		};
	},
	mounted() {
		this.current = this.tabFirst;
		this.showTab = true;
	},
	methods: {
		// 标签切换
		changeTab(index) {
			this.subCurrent = 0;
			this.current = index;
			this.$emit('changeTab', index);
		},
		// 子标签改变
		changeSubTab(id, name) {
			// console.log(`切换到子标签 ${id}`)
			this.subCurrent = id;
			this.$emit('changeSubTab', {id,name});
		}
	}
};
</script>

<style lang="scss">
@import './index.scss';
</style>
