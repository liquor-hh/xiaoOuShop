<template>
	<view class="container" :style="{paddingTop: headArea.statusHeight}">
		<view class="header">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<input type="text">
			<!-- #ifndef  WP-MP-WEIXIN -->
			<i class="iconfont icon-gengduo"></i>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<i></i>
			<!-- #endif -->
		</view>
		<scroll-view class="main" scroll-y>
			<!-- 轮播 -->
			<swiper change="swiper-contaner" autoplay interval="1000" circular>
				<swiper-item class="swiper-item" v-for="(item, index) in bannerList" :key="item.id">
					<image :src="'http://43.142.240.214:3000' + item.img" mode=""></image>
				</swiper-item>
			</swiper>
			<!-- 4个图标导航 -->
			<view class="nav-container">
				<view class="nav-item" v-for="(item, index) in navList" :key="index">
					<i :class="['iconfont', item.icon]"></i>
					<view>{{ item.title }}</view>
				</view>
			</view>
			<!-- tab切换 -->
			<view class="tab-container">
				<view :class="['tab-item', index == tabIndex ? 'active' : '']" v-for="(item, index) in tabList" :key="index" @click="tabChange(index)">
					{{ item }}
				</view>
			</view>
			<!-- 商品列表 -->
			<view class="goods-container">
				<view class="good-item" v-for="(item, index) in goodsList" :key="index">
					<image :src="'http://43.142.240.214:3000' + item.img"></image>
					<view class="good-content">
						<view class="title">
							{{ item.goodsname }}
						</view>
						<view class="price">
							￥{{ item.price }}
						</view>
						<view>已售800件</view>
						<view class="buy-btn">
							立即抢购
						</view>
					</view>
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
	export default {
		data() {
			return {
				bannerList: [],
				goodsList: [],
				tabIndex: 0,
				tabList: ['热门推荐','最新上架','所有商品'],
				navList: [
					{
						icon: 'icon-xianshiqianggou',
						title: '限时抢购'
					},
					{
						icon: 'icon-jifentixicopy',
						title: '积分商城'
					},
					{
						icon: 'icon-lianxiwomen',
						title: '联系我们'
					},
					{
						icon: 'icon--shangpinfenlei-gai',
						title: '商品分类'
					},
				]
				
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
					statusHeight: menu.height + (menu.top - area.statusHeight) * 2,
					uniHeight: uni.upx2px(80)
				}
				// #endif
				
				// #ifndef MP-WEIXIN
				return {
					statusHeight: area.statusHeight,
				}
				// #endif
			}
		},
		onLoad() {
			this.getBannerList()
			this.getGoodsList()
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
			align-items: center;
			input {
				width: 306rpx;
				height: 38rpx;
				background-color: #eee;
			}
			image {
				width: 50rpx;
				height: 50rpx;
			}
			.iconfont {
				font-size: 80rpx;
				color: #333;
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
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
