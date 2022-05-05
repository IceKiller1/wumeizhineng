<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<image class="swiper-item " src="../../static/tabbar/dynamic-active.png" >
          </image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-item " src="../../static/tabbar/dynamic-active.png" >
				</swiper-item>
				<swiper-item>
					<image class="swiper-item " src="../../static/tabbar/dynamic-active.png" >
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			durationChange(e) {
				this.duration = e.detail.value
			}
		}
	}
</script>

<style>
	.uni-margin-wrap {
		width:690rpx;
		width: 100%;;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
  .imgswiper{
    width: 300rpx;
    height: 300rpx;
  }
</style>
