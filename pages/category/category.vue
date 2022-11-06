<template>
	<view class="container">
		<view class="header">
			<view class="back">
				&lt;
			</view>
			<view class="title">
				商品分类
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="main">
				<view class="first-cate">
					<view :class="['first-item', index == firstCateId ? active : '']" v-for="{item, index} in firstCate" :key="index" @click="changeSecondCate(index)">
						{{ item.catename }}
					</view>
				</view>
				<view class="second-cate">
					<view class="second-item" v-for="{item, index} in secondCate" :key="index" @click="goGoodList(index)">
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
				secondCate: []
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
				this.getCategory(index)
			},
			goGoodList(index) {
				uni.navigateTo({
					url: '/pages/goodList/goodList'
				})
			}
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
