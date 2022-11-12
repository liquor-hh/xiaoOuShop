<template>
	<view class="container">
		<view class="main">
			<view class="search-container">
				<input type="text" v-model="searchVal" @confirm="searchFn">
				<view class="search-icon" v-show="!searchVal">
					<i class="iconfont icon-gengduo"></i>
					<view>搜索商品</view>
				</view>
			</view>
			<view class="goods-container">
				<view class="good-item" v-for="(item, index) in goodsList" :key="index" @click="goGoodDetail(item)">
					<image :src="'http://43.142.240.214:3000' + item.img"></image>
					<view class="content">
						<view class="title">
							{{ item.goodsname }}
						</view>
						<view class="price">
							{{ item.price }}
						</view>
						<view>444条评论</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '../../request/api.js'
	export default {
		data() {
			return {
				searchVal: "",
				id: '',
				goodsList: []
			};
		},
		methods: {
			getGoods(id, keyword = '') {
				this.$http.get({
					url: API.goodlist.getGoodsList,
					data: {
						fid: id,
						keyword
					}
				}).then(res => {
					this.goodsList = res.list
				})
			},
			goGoodDetail(item) {
				uni.navigateTo({
					url: '/pages/goodDetail/goodDetail?id=' + item.id
				})
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoods(options.id)
		}
	}
</script>

<style lang="scss">
	.search-container {
		margin: 40rpx 0;
		padding: 0 60rpx;
		position: relative;
		input {
			width: 100%;
			height: 76rpx;
			background-color: #f26b11;
			border-radius: 38rpx;
			text-align: center;
		}
		.search-icon {
			display: flex;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
			font-size: 26rpx;
			i {
				margin-right: 12rpx;
			}
		}
	}
	.goods-container {
		.good-item {
			display: flex;
			height: 200rpx;
			padding: 30rpx 20rpx;
			image {
				width: 140rpx;
				height: 140rpx;
				margin-right: 30rpx;
			}
		}
	}
</style>
