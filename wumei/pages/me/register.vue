<template>
	<view class="index">
		<view :style="{width: windowWidth + 'px',height: windowHeight + 'px'}">
			<image mode="aspectFill" src="/static/pages/me/register-bg.png" class="register-img"></image>
			<view class="register-bg">
				<view class="register-welcome">REGISTER</view>
				<view class="register-info">
					<input class="reg-input" type="text" v-model="phone" placeholder="电话" placeholder-style="color: #4a4b84"
							@blur="comparePhone()"/>
					<input class="reg-input" type="password" v-model="password" placeholder="密码" placeholder-style="color: #4a4b84"
							@blur="comparePassword()"/>
					<input class="reg-input" type="password" v-model="elPassword" placeholder="确认密码" placeholder-style="color: #4a4b84"
							@blur="compareElPassword()"/>
					<button class="register" @click="register()">立即注册</button>
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
				windowHeight: 0,
				phone: '',
				password: '',
				elPassword: ''
			}
		},
		onLoad() {
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
					that.windowWidth = res.windowWidth;
					that.windowHeight = res.windowHeight;
			    }
			});
		},
		methods: {
			comparePhone(){
				if(this.phone == ''){
					uni.showToast({
						title: '手机号不可为空！',
						icon: 'none'
					})
				}else if(this.phone.length != 11){
					uni.showToast({
						title: '输入手机号错误！',
						icon: 'none'
					})
				}
			},
			comparePassword(){
				if(this.password == null ){
					uni.showToast({
						title: '密码不可为空！',
						icon: 'none'
					})
				}else if(this.password.length <= 8){
					uni.showToast({
						title: '密码不得低于8位！',
						icon: 'none'
					})
				}
			},
			compareElPassword(){
				if(this.elPassword == null ){
					uni.showToast({
						title: '密码不可为空！',
						icon: 'none'
					})
				}else if(this.elPassword.length < 8){
					uni.showToast({
						title: '密码不得低于8位！',
						icon: 'none'
					})
				}
			},
			register(){
				var that = this;
				if(this.password != this.elPassword){
					uni.showToast({
						title: '两次密码不同，请重新确认！',
						icon: 'none'
					})
				}else if(this.phone != '' && this.phone.length == 11){
					uni.request({
						url: 'https://skrvideo.fun/passport/register',
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
					})
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
	.register-img{
		height: 100%;
		width: 100%;
	}
	.register-bg{
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
	}
	.register-welcome{
		color: #000000;
		font-size: 73px;
		font-family: fangsong;
		font-weight: 1000;
		text-align: center;
		padding: 35% 0 5% 0;
		text-shadow: 2px 2px 5px #707070;
	}
	.register-info{
		text-align: center;
		padding: 3% 10% 34%;
	}
	.reg-input{
		color: #FFFFFF;
		text-align: left;
		width: 93.13%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		margin-bottom: 40rpx;
		border-bottom: 2px #707070 solid;
		border-right: 2px #707070 solid;
		border-radius: 10rpx;
		background-color: rgb(255 255 255 / 50%);
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
	.register{
		color: #FFFFFF;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 18px;
		background-color: #aaaaff;
		border-bottom: 2px #707070 solid;
		border-right: 2px #707070 solid;
	}
</style>
