<template>
	<view class="index">
		<scroll-view class="home-top" scroll-x="true">
			<view style="flex-direction: column;">
				<view style="flex-direction: row;">
					<view class="uni-tab-item" v-for="tab in tabList" :key="tab.id" :id="tab.id" @click="ontabtap">
						<text class="uni-tab-item-title" :class="tabIndex==tab.id ? 'uni-tab-item-title-active' : ''"
							:style="">{{tab.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<swiper class="home-swiper" :current="tabIndex" @change="swipertap">
			<swiper-item v-for="tab in tabList" :id="tab.id" :key="tab.id" @change="swipertap">
				<view v-for=" obj in objectList" :id="obj.deviceId" :key="obj.deviceId">
					<view class="obj-box"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import homePage from './home-page.vue';
	export default {
		components: {
			homePage
		},
		data() {
			return {
				tabList: [{
					id: 0,
					name: '全部',
				}, {
					id: 1,
					name: '客厅',
				}, {
					id: 2,
					name: '卧室',
				}, {
					id: 3,
					name: '书房',
				}, {
					id: 4,
					name: '卫生间',
				}, {
					id: 5,
					name: '厨房',
				}],
				objectList: [{
						deviceId:0,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
					},
					{
						deviceId:1,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
					},
					{
						deviceId:2,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
					}],
			tabIndex: 0,
		}
	},
	methods: {
		ontabtap(e) {
			this.tabIndex = e.currentTarget.id;
		},
		swipertap(e) {
			this.tabIndex = e.detail.current
		}
	},
	}
</script>

<style>
	.index {
		width: 100%;
		height: 100%;
		background-color: #e4e7e8;
	}

	.home-top {
		margin-top: 5px;
		padding-bottom: 5px;
		background-color: #FFFFFF;
		white-space: nowrap;
	}

	.uni-tab-item {
		display: inline-block;
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-tab-item-title {
		color: #bfc5e2;
		font-size: 18px;
		height: 30px;
		line-height: 30px;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.uni-tab-item-title-active {
		color: #4a4b84;
		padding-bottom: 1px;
		border-bottom: solid 3px #4a4b84;
	}

	.scroll-view-indicator {
		position: relative;
		height: 2px;
		background-color: transparent;
	}

	.scroll-view-underline {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		background-color: #4a4b84;
	}

	.scroll-view-animation {
		transition-duration: 0.2s;
		transition-property: left;
	}
	
	.obj-box{
		
	}
</style>
