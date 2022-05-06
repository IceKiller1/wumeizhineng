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
		<swiper :style="{'height': windowHeight + 'px' }" :current="tabIndex" @change="swipertap">
			<swiper-item v-for="tab in tabList" :id="tab.id" :key="tab.id" @change="swipertap">
				<scroll-view style="width: 100%;" scroll-y="true">
					<view class="obj-flex">
						<view class="obj-box" v-for="obj in objectList" :id="obj.deviceId" :key="obj.deviceId">
							<view class="obj-name-box">
								<image class="obj-name-img" mode="widthFix" src="../../static/pages/home/play.png">
								</image>
								<view class="obj-name">{{obj.name}}</view>
							</view>
							<view class="obj-info-box in-one-column">
								<view class="obj-info-line in-one-line">
									<view class="obj-line in-one-line">
										<image class="obj-status" mode="widthFix"
											src="../../static/pages/home/wifi.png"></image>
										<view class="obj-line-text">在线</view>
									</view>
									<view class="obj-line in-one-line">
										<image class="obj-status" mode="widthFix"
											src="../../static/pages/home/shadow.png"></image>
										<view class="obj-line-text">影子</view>
									</view>
								</view>
								<view class="obj-info-line in-one-line">
									<view class="obj-line in-one-line">
										<image class="obj-status" mode="widthFix"
											src="../../static/pages/home/thermometer.png"></image>
										<view class="obj-line-text">28.64℃</view>
									</view>
									<view class="obj-line in-one-line">
										<image class="obj-status" mode="widthFix"
											src="../../static/pages/home/thermometer.png"></image>
										<view class="obj-line-text">43.68%</view>
									</view>
								</view>
								<view class="obj-info-line in-one-line">
									<view class="obj-info-check in-one-line">
										<view class="obj-line-switch">设备开关</view>
										<view class="obj-checked" @click="changeStatus(obj.deviceId)">
											<view :class="obj.status == 0 ? 'checked-bg' : 'checked-bg-checked'"></view>
											<view :class="obj.status == 0 ? 'checked-btn' : 'checked-btn-checked'"></view>
										</view>
									</view>
								</view>
								<view class="obj-info-line in-one-line">
									<view class="obj-info-choose in-one-line">
										<view class="obj-line-d">运行档位</view>
										<view class="obj-choose">
											<picker class="obj-choose-head in-one-line" @change="bindPickerChange"
												:value="obj.condition" :range="date"@click="clickPicker(obj.deviceId)">
												<view class="obj-choose-text">{{date[obj.condition]}}</view>
												<image src="/static/pages/home/change.png" mode="widthFix"
													class="obj-choose-image"></image>
											</picker>
										</view>
									</view>
								</view>
								<view class="obj-info-line in-one-line">
									<view class="obj-info-choose in-one-line">
										<button class="obj-line-btn">发送</button>
										<textarea auto-height="true" fixed="true" class="obj-line-msg" placeholder="设备消息" placeholder-style="font-size: 13px;line-height: 55rpx;">
										</textarea>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// import homePage from './home-page.vue';
	export default {
		// components: {
		// 	homePage
		// },
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
						deviceId: 0,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
						condition: 0,
					},
					{
						deviceId: 1,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
						condition: 0,
					},
					{
						deviceId: 2,
						name: "开源WIFI通断器",
						status: 0,
						isShadow: 0,
						condition: 0,
					},
				],
				tabIndex: 0,
				date: ["低速档位", "中速档位", "高速档位"],
				dateCheckedId: 0,
				showMenu: false,
				windowHeight: 0,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight-40;
				}
			});
		},
		methods: {
			ontabtap(e) {
				this.tabIndex = e.currentTarget.id;
			},
			swipertap(e) {
				this.tabIndex = e.detail.current
			},
			changeStatus(id) {
				for (let i = 0; i < this.objectList.length; i++) {

					if (this.objectList[i].deviceId == id) {
						if (this.objectList[i].status == 0) this.objectList[i].status = 1;
						else if (this.objectList[i].status == 1) this.objectList[i].status = 0;
						console.log(this.objectList[i].status)
					}
				}
			},
			bindPickerChange(e){
				console.log( e.detail.value)
				this.objectList[this.dateCheckedId].condition = e.detail.value
			},
			clickPicker(id){
				this.dateCheckedId = id;
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
		margin-top: 10rpx;
		padding-bottom: 10rpx;
		background-color: #FFFFFF;
		white-space: nowrap;
	}

	.uni-tab-item {
		display: inline-block;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.uni-tab-item-title {
		color: #bfc5e2;
		font-size: 36rpx;
		height: 60rpx;
		line-height: 60rpx;
		flex-wrap: nowrap;
		white-space: nowrap;
		transition: all 0.5s;
	}

	.uni-tab-item-title-active {
		color: #4a4b84;
		padding-bottom: 2rpx;
		border-bottom: solid 6rpx #4a4b84;
		transition: all 0.5s;
	}

	.scroll-view-animation {
		transition-duration: 0.2s;
		transition-property: left;
	}

/* 	.home-swiper {
		height: 800rpx;
	}
 */
	.obj-flex {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.obj-box {
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		width: 44%;
		border: solid 1rpx #6e77ae;
		border-radius: 10rpx;
	}

	.obj-name-box {
		background-color: #6e77ae;
		height: 55rpx;
		border-radius: 10rpx 10rpx 0 0;
	}

	.obj-name-img {
		float: left;
		margin-top: 8rpx;
		margin-left: 5rpx;
		width: 40rpx;
	}

	.obj-name {
		padding-top: 12rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.obj-status {
		width: 35rpx;
	}

	.in-one-line {
		display: flex;
		flex-direction: row;
	}

	.in-one-column {
		display: flex;
		flex-direction: column;
	}

	.obj-info-box {
		background-color: #FFFFFF;
		padding: 20rpx;
		border-radius: 0 0 10rpx 10rpx;
	}

	.obj-info-line {
		margin-bottom: 20rpx;
		align-items: center;
		line-height: 40rpx;
	}

	.obj-line {
		width: 50%;
	}

	.obj-info-check {
		height: 50rpx;
		width: 100%;
		overflow: hidden;
	}

	.obj-line-text {
		margin-left: 8rpx;
		font-size: 13px;
	}
	.obj-line-switch{
		width: 70%;
		margin-left: 8rpx;
		font-size: 13px;
	}
	.obj-line-d{
		width: 100%;
		margin-left: 8rpx;
		font-size: 13px;
	}
	.obj-switch {
		color: #dee0f0;
	}

	.obj-checked {
		margin-left: 20rpx;
		width: 100%;
	}

	.checked-bg {
		width: 80rpx;
		height: 40rpx;
		background-color: #DEE0F0;
		border: 1px solid #DEE0F0;
		border-radius: 5rpx;
		transition: all 0.5s;
	}

	.checked-bg-checked {
		width: 80rpx;
		height: 40rpx;
		background-color: #9ea0c9;
		border: 1px solid #9ea0c9;
		border-radius: 5rpx;
		transition: all 0.5s;
	}

	.checked-btn {
		position: relative;
		top: -42rpx;
		left: 2rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: #FFFFFF;
		transition: all 0.5s;
	}

	.checked-btn-checked {
		position: relative;
		top: -42rpx;
		left: 42rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: #FFFFFF;
		transition: all 0.5s;
	}

	.obj-info-choose {
		width: 100%;
		line-height: 55rpx;
	}

	.obj-choose {
		width: 100%;
		overflow: hidden;
		line-height: 50rpx;
		margin-left: -34rpx;
	}

	.obj-choose-head {
		width: 155rpx;
		border-radius: 5rpx;
		height: 50rpx;
		border: 1px solid #bbbcbd;
	}

	.obj-choose-text {
		width: 105rpx;
		height: 50rpx;
		font-size: 13px;
		margin-left: 10rpx;
	}

	.obj-choose-image {
		margin: 15rpx 5rpx 0 0;
		width: 25rpx;
		position: relative;
		top: -50rpx;
		left: 120rpx;
	}
	.obj-line-btn{
		width: 60%;
		/* height: 60rpx; */
		line-height: 55rpx;
		font-size: 13px;
		margin-right: 20rpx;
		padding: 5rpx 25rpx;
		background-color: #FFFFFF;
	}
	.obj-line-msg{
		width: 100%;
		font-size: 14px;
		border-radius: 5rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 8rpx;
/* 		height: 40rpx; */
		line-height: 20rpx;
		border: 1px solid #bbbcbd;
	}
</style>
