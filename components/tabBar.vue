<template>
	<view class="footer-tabBar">
		<view class="tabBar-item" v-for="{item, index} in tabBarList" :key="index" @click="navigate(item)">
			<i :class="['iconfont', active ? item.selectedIconPath : item.iconPath]"></i>
			<text>{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabBar",
		data() {
			return {
				tabBarList: [
					{
						//iconPath: '/static/home.png',
						//selectedIconPath: '/static/home-active.png',
						iconPath: '/static/logo.png',
						selectedIconPath: '/static/logo.png',
						page: '/pages/home/home',
						text: '首页'
					},
					{
						//iconPath: '/static/shopcart.png',
						//selectedIconPath: '/static/shopcart-active.png',
						iconPath: '/static/logo.png',
						selectedIconPath: '/static/logo.png',
						page: '/pages/shopCart/shopCart',
						text: '购物车'
					},
					{
						//iconPath: '/static/my.png',
						//selectedIconPath: '/static/my-active.png',
						iconPath: '/static/logo.png',
						selectedIconPath: '/static/logo.png',
						page: '/pages/my/my',
						text: '我的'
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
		justify-content: space-between;
		.tabBar-item {
			.image {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 10rpx;
			}
			.active {
				color: red;
			}
		}
	}
</style>