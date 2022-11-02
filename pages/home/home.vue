<template>
	<view class="container">
		<view class="header">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<input type="text">
			<view class="iconfont icon-gengduo">
				
			</view>
		</view>
		<scroll-view class="main">
			
		</scroll-view>
		<view class="footer">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		.header {
			display: flex;
			justify-content: space-between;
			height: 86rpx;
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
		.main {
			flex: 1;
		}
		.footer {
			height: 122rpx;
		}
	}
</style>
