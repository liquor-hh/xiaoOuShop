<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: headArea.statusHeight + 'px', height: headArea.headerHeight + 'px'}">
			<view class="back">
				&lt;
			</view>
			<view class="title">
				商品分类
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<i class="iconfont icon-gengduo"></i>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<i></i>
			<!-- #endif -->
			<view class="main">
				<view class="first-cate">
					<view :class="['first-item', index == firstCateId ? active : '']" v-for="(item, index) in firstCate" :key="index" @click="changeSecondCate(index)">
						{{ item.catename }}
					</view>
				</view>
				<view class="second-cate">
					<view class="second-item" v-for="(item, index) in secondCate" :key="index" @click="goGoodList(item)">
						<image :src="'http://43.142.240.214:3000' + item.img"></image>
						<view>{{ item.catename }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from "../../request/api.js"
	export default {
		data() {
			return {
				firstCate: [],
				secondCate: [],
				firstCateInd: 0
			};
		},
		methods: {
			getCategory(index = 0) {
				this.$http.get({
					url: API.category.getCate
				}).then(res => {
					this.firstCate = res.list
					this.secondCate = res.list[index].children
				})
			},
			changeSecondCate(index) {
				this.firstCateInd = index
				this.getCategory(index)
			},
			goGoodList(item) {
				uni.navigateTo({
					url: '/pages/goodList/goodList?id=' + item.id
				})
			}
		},
		computed: {
			headArea() {
				let area = uni.getSystemInfoSync()
				// #ifdef MP-WEIXIN
				let menu = uni.getMenuButtonBoundingClientRect()
					return {
						statusHeight: area.statusBarHeight,
						headerHeight: menu.height + (menu.top - area.statusBarHeight) * 2
					}
				// #endif
				
				// #ifndef MP-WEIXIN
					return {
						statusHeight: area.statusBarHeight,
						headerHeight: uni.upx2px(80)
					}
				// #endif
			}
		},
		onLoad() {
			this.getCategory()
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		.header {
			display: flex;
			background-color: #f26b11;
		}
		.main {
			display: flex;
			flex: 1;
			.first-cate {
				width: 160rpx;
				height: 100%;
				border-right: 1px solid #ebebeb;
				.first-item {
					height: 50rpx;
					line-height: 50rpx;
					margin-bottom: 60rpx;
					padding-left: 40rpx;
					font-size: 28rpx;
					&.active {
						border-right: 8rpx solid #f26b11;
						color: #f26b11;
					}
				}
			}
			.second-cate {
				display: flex;
				.second-item {
					width: 33%;
					text-align: center;
					image {
						width: 150rpx;
						height: 150rpx;
					}
				}
			}
		}
	}
</style>
