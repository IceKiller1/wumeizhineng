<template>
	<view class="index">
		<view :style="{width: windowWidth + 'px'}" style="height: 100%;">
			<view class="login-bg">
				<view class="login-welcome">WELCOME</view>
				<view class="login-info">
					<input class="reg-input" type="text" v-model="phone" placeholder="电话" placeholder-style="color: #ffffff"/>
					<input class="reg-input" type="password" v-model="password" placeholder="密码" placeholder-style="color: #ffffff"/>
					<button class="login" @click="login()">立即登录</button>
					<view class="in-one-line login-text">
						<view style="align-items: center;">
							第一次登录请先<text style="color: #4A4B84;" @click="getRegister()">注册</text>哦~
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowWidth: 0,
				phone: '',
				password: '',
			}
		},
		onLoad() {
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
					that.windowWidth = res.windowWidth;
			    }
			});
		},
		methods: {
			getRegister(){
				uni.navigateTo({
					url: 'register',
					animationType: 'zoom-fade-out'
				})
			},
			getSMSCode(){
				var that = this;
				if(this.phone == ''){
					uni.showToast({
						title: '手机号不可为空！',
						icon: 'none'
					})
				}else if(this.phone.length != 11){
					uni.showToast({
						title: '输入手机号不符合标准！',
						icon: 'none'
					})
				}else {
					/* uni.request({
						url: 'https://skrvideo.fun/passport/getSMSCode?mobile='+that.phone,
						method: 'POST',
						dataType: 'json',
						success: (res) => {
							console.log(res)
							if(res.data.status == 505){
								uni.showToast({
									title: '短信发送太快啦~请稍后再试！',
									icon: 'none'
								});
							}else {
								uni.showToast({
									title: '验证码已发送！',
									icon: 'none'
								})
							}
						},
						fail: (res) => {
							console.log('fail',res);
						}
					}) */
				}
			},
			login(){
				var that = this;
				let pages = getCurrentPages();
				let beforePage = pages[pages.length - 2];
				if(this.verificationCode == ''){
					uni.showToast({
						title: '验证码不可为空!' ,
						icon: 'none'
					});
				}else if(this.phone != '' && this.phone.length == 11){
					/* uni.request({
						url: 'https://skrvideo.fun/passport/login',
						method: 'POST',
						data:{
							"mobile": that.phone,
							"smsCode": that.verificationCode
						},
						dataType: 'json',
						success: (res) => {
							console.log('success',res);
							if(res.data.status == 506){
								uni.showToast({
									title: '验证码错误，请重新获取！',
									icon: 'none'
								});
							}else {
								uni.setStorage({
									key: 'userId',
									data: res.data.data.id,
								})
								uni.setStorage({
									key: 'userToken',
									data: res.data.data.userToken,
								})
								uni.showToast({
									title: '登录成功！',
									icon: 'none'
								});
								beforePage.onLoad();
								uni.navigateBack({
									delta: 1
								});
							}
						},
						fail: (res) => {
							console.log('fail',res);
						}
					}) */
				}
			}
		}
	}
</script>

<style>
	.index {
		height: 100%;
		background-color: #E4E5E7;
		color: #000000;
	}
	.in-one-line{
		display: flex;
		flex-direction: row;
	}
	.in-one-column{
		display: flex;
		flex-direction: column;	
	}
	
	/* 背景 */
	.login-bg{
		height: 100%;
		width: 100%;
		background-image: linear-gradient(to top left, #bfc5e2, #4a4b84);
	}
	.login-welcome{
		color: white;
		font-size: 73px;
		font-family: fangsong;
		font-weight: 1000;
		text-align: center;
		padding: 35% 0 5% 0;
	}
	.login-info{
		text-align: center;
		padding: 3% 10% 50%;
	}
	.reg-input{
		color: #FFFFFF;
		text-align: left;
		width: 93.13%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		margin-bottom: 40rpx;
		border: 1rpx #ffffff solid;
		border-radius: 10rpx;
	}
	.reg-input:focus{
		box-shadow: 0 0 20rpx #000000;
	}
	.input-auth{
		width: 60%;
		margin-bottom: 0;
	}
	.reg-auth-code{
		color: #FFFFFF;
		font-size: 16px;
		width: 40%;
		height: 84rpx;
		line-height: 84rpx;
		padding: 0 20rpx;
		margin-left: 20rpx;
		background-color: #aaaaff;
	}
	.reg-auth-code:active{
		color: #dfdfdf;
		background-color: #9999e5;
	}
	.login{
		color: #FFFFFF;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 18px;
		background-color: #aaaaff;
	}
	.login-text{
		width: 100%;
		line-height: 40rpx;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		justify-content: center;
	}
</style>
