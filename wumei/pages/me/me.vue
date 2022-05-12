<template>
	<view class="context" :style="{'height': windowHeight + 'px'}">
		<view class="people">
			<view class="in-one-line">
				<image class="face" mode="widthFix" src="/static/pages/me/face.jpg"></image>
				<view class="introduce">
					<view class="introduce-name">游客账号</view>
					<view class="introduce-info">物美智能-开源生活物联网平台</view>
				</view>
			</view>
		</view>
		<view class="label-set">
			<ul class="in-one-line">
				<li class="in-one-column label-li">
					<image class="label-img" mode="widthFix" src="/static/pages/me/add-scene.png"></image>
					<view class="label-text">添加场景</view>
				</li>
				<li class="in-one-column label-li">
					<image class="label-img" mode="widthFix" src="/static/pages/me/add-classify.png"></image>
					<view class="label-text">添加分组</view>
				</li>
				<li class="in-one-column label-li">
					<image class="label-img" mode="widthFix" src="/static/pages/me/add-facility.png"></image>
					<view class="label-text">添加设备</view>
				</li>
				<li class="in-one-column label-li">
					<image class="label-img" mode="widthFix" src="/static/pages/me/share.png"></image>
					<view class="label-text">设备分享</view>
				</li>
			</ul>
		</view>
		<view class="button-set">
			<ul>
				<li class="in-one-line button-line">
					<image class="button-img" mode="widthFix" src="/static/pages/me/account.png"></image>
					<view class="button-text">账号</view>
					<image class="button-img button-smh" mode="widthFix" src="/static/pages/me/smh.png"></image>
				</li>
				<li class="in-one-line button-line">
					<image class="button-img" mode="widthFix" src="/static/pages/me/message.png"></image>
					<view class="button-text">信息</view>
					<image class="button-img button-smh" mode="widthFix" src="/static/pages/me/smh.png"></image>
				</li>
				<li class="in-one-line button-line">
					<image class="button-img" mode="widthFix" src="/static/pages/me/about.png"></image>
					<view class="button-text">关于</view>
					<image class="button-img button-smh" mode="widthFix" src="/static/pages/me/smh.png"></image>
				</li>
				<li class="in-one-line button-line">
					<image class="button-img" mode="widthFix" src="/static/pages/me/APP.png"></image>
					<view class="button-text">APP下载</view>
					<image class="button-img button-smh" mode="widthFix" src="/static/pages/me/smh.png"></image>
				</li>
			</ul>
		</view>
		<view>
			<button class="outline">退出账号</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				windowHeight:0,
				token: ''
			}
		},
		onLoad() {
			this.getInfo();
		},
		methods:{
			getInfo(){
				uni.getSystemInfo({
					success: (res) => {
						this.windowHeight = res.windowHeight;
					}
				});
				this.token = uni.getStorageSync("Token");
				if(this.token == ''){
					uni.navigateTo({
						url: 'login',
						animationType: 'zoom-fade-out'
					})
				}
			}
		}
	}
</script>

<style>
	.context{
		width: 100%;
		font-size: 13px;
		background-color: #e4e5e7;
		color: #000000;
	}
	.in-one-line {
		display: flex;
		flex-direction: row;
	}
	
	.in-one-column {
		display: flex;
		flex-direction: column;
	}
	
	/* 个人信息 */
	.people{
		width: 100%;
		padding: 60rpx 50rpx 40rpx;
		background-color: #4a4b84;
	}
	.face{
		width: 120rpx;
		border-radius: 10px;
	}
	.introduce{
		margin-left: 20rpx;
		margin-top: 30rpx;
		color: #FFFFFF;
	}
	.introduce-name{
		font-size: 15px;
		font-weight: 600;
	}
	
	/* 标签组 */
	.label-set{
		background-color: #FFFFFF;
		padding: 40rpx;
		margin-bottom: 40rpx;
	}
	.label-li{
		width: 25%;
		text-align: center;
		align-items: center;
	}
	.label-img{
		width: 80rpx;
		border-radius: 3px;
		margin-bottom: 10rpx;
	}
	
	/* 按钮列表 */
	.button-set{
		background-color: #FFFFFF;
		margin-bottom: 40rpx;
	}
	.button-line{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
	}
	.button-img{
		width: 40rpx;
	}
	.button-text{
		margin-left: 20rpx;
		width: 80%;
		font-size: 15px;
	}
	.button-smh{
		text-align: right;
	}
	
	/* 退出账号 */
	.outline{
		background-color: #FFFFFF;
		color: #bcbcbc;
		border: none;
		font-size: 15px;
		padding: 10rpx 0;
	}
</style>
