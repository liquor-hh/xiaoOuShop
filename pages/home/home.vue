<template>
	<view class="container" :style="{paddingTop: headArea.statusHeight}">
		<view class="header">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<input type="text">
			<!-- #ifndef  WP-MP-WEIXIN -->
			<view class="iconfont icon-gengduo"></view>
			<!-- #endif -->
		</view>
		<scroll-view class="main">
			<swiper change="swiper-contaner" autoplay interval="1000" circular>
				<swiper-item class="swiper-item" v-for="{item, index} in bannerList" :key="item.id">
					<image :src="'http://43.142.240.214:3000' + item.img" mode=""></image>
				</swiper-item>
			</swiper>
			<view class="tab-container">
				<view :class="['tab-item', index == tabIndex ? 'active' : '']" v-for="{item, index} in tabList" :key="index" @click="tabChange(index)">
					{{ item }}
				</view>
			</view>
			<view class="goods-container">
				<view class="good-item" v-for="{item, index} in goodsList" :key="index">
					<image :src="'http://43.142.240.214:3000' + item.img" mode=""></image>
					<view class="good-content">
						
					</view>
				</view>
			</view>
			<view class="nav-container">
				<view class="nav-item" v-for="{item, index} in navList" :key="index">
					<i :class="['iconfont']"></i>
				</view>
			</view>
		</scroll-view>
		<!-- <view class="footer">
			<tabBar page=""></tabBar>
		</view> -->
	</view>
</template>

<script>
	import API from '../../request/api.js'
	import tabBar from '@/components/tabBar.vue'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				bannerList: null,
				goodsList: [],
				tabIndex: 0,
				tabList: ['热门推荐','最新上架','所有商品'],
				navList: [
					{
						icon: '',
						title: '限时抢购'
					},
					{
						icon: '',
						title: '积分商城'
					},
					{
						icon: '',
						title: '联系我们'
					},
					{
						icon: '',
						title: '限时抢购'
					}
				],
				
			};
		},
		methods: {
			getBannerList() {
				this.$http.get({
					url: API.home.getBanner
				}).then(res => {
					if (res.code == 200) {
						this.bannerList = res.list
						console.log(res);
					}
				})
			},
			getGoodsList(ind = 0) {
				this.$http.get({
					url: API.home.getGoods
				}).then(res => {
					if (res.code == 200) {
						this.goodsList = res.list[ind].content
					}
				})
			},
			tabChange(index) {
				this.tabIndex = index
				this.getGoodsList(index)
			}
		},
		computed: {
			headArea() {
				let area = uni.getSystemInfoSync()
				// 处理微信小程序自带的右上角胶囊
				// #ifdef MP-WEIXIN
				let menu = uni.getMenuButtonBoundingClientRect()
				return {
					statusHeight: menu.height + (menu.top - area.statusHeight) * 2
				}
				// #endif
				
				// #ifndef MP-WEIXIN
				return {
					statusHeight: area.statusHeight,
					uniHeight: uni.upx2px(80)
				}
				// #endif
			}
		},
		onLoad() {
			this.getBannerList()
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
			.swiper-container {
				width: 100%;
				height: 290rpx;
				.swiper-item {
					width: 100%;
					height: 100%;
					image {
						width: 100%;
					}
				}
			}
			.tab-container {
				display: flex;
				padding: 0 20rpx;
				height: 70rpx;
				.tab-item {
					flex: 1;
					text-align: center;
					height: 70rpx;
					line-height: 70rpx;
					border-color: 1px solid #ebebeb;
					&.active {
						border-color: 1px solid red;
					}
				}
			}
			.goods-container {
				padding: 0 20rpx;
				.good-item {
					display: flex;
					width: 100%;
					height: 300rpx;
					image {
						width: 240rpx;
						height: 240rpx;
					}
					.good-content {
						flex: 1;
						place-content: 20rpx;
						.title {
							font-size: 36rpx;
						}
						.price {
							color: red;
						}
						.buy-btn {
							width: 164rpx;
							height: 50rpx;
							background-color: #f26b11;
							border-radius: 4rpx;
							
						}
					}
				}
			}
			.nav-container {
				display: flex;
				padding: 20rpx 0;
				.nav-item {
					flex: 1;
					text-align: center;
				}
			}
		}
		.footer {
			height: 122rpx;
		}
	}
</style>
