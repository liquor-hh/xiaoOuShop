<template>
	<view class="footer-tabBar">
		<view class="tabBar-item" v-for="(item, index) in tabBarList" :key="index" @click="navigate(item)">
			<image :src="item.page === page ? item.selectedIconPath : item.iconPath" mode=""></image>
			<view :class="['text', item.page === page ? 'active' : '']">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabBar",
		props: ['page'],
		data() {
			return {
				tabBarList: [
					{
						iconPath: '/static/home.png',
						selectedIconPath: '/static/home-active.png',
						text: '首页',
						page: '/pages/home/home'
					},
					{
						iconPath: '/static/shopcar.png',
						selectedIconPath: '/static/shopcar-active.png',
						text: '购物车',
						page: '/pages/shopCart/shopCart'
					},
					{
						iconPath: '/static/my.png',
						selectedIconPath: '/static/my-active.png',
						text: '我的',
						page: '/pages/my/my'
					}
				]
			};
		},
		methods: {
			navigate(item) {
				uni.redirectTo({
					url: item.page
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer-tabBar {
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		border-top: 1rpx solid #ebebeb;
		display: flex;
		.tabBar-item {
			padding: 10rpx 0;
			text-align: center;
			flex: 1;
			image {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 10rpx;
			}
			.text {
				font-size: 20rpx;
			}
			.active {
				color: red;
			}
		}
	}
</style>