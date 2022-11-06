<template>
	<view class="container">
		<view class="good-img">
			<image :src="'http://43.142.240.214:3000' + goodsDetail.img"></image>
		</view>
		<view class="good-content">
			<view class="title">
					
			</view>
			<view class="price">
				
			</view>
			<view class="count-container">
				<view>购买数量</view>
				<view class="count-operate">
					<i class="iconfont icon-jianhao"></i>
					<input type="text" v-model="count">
					<i class="iconfont icon-jiahao"></i>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="shopCar">
				<i class="iconfont icon-gouwuche"></i>
				<view class="circle">
					1
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				goodsDetail: []
			};
		},
		methods: {
			getGoodDetail() {
				this.$http.get({
					url: API.detail.getGoodDetail,
					data: {
						id: this.id
					}
				}).then(res => {
					this.goodsDetail = res.list[0]
				})
			},
			reduce() {
				if (this.count == 1) return
				this.count--
			},
			add() {
				this.count++
			},
			addCart() {
				this.$http.post({
					url: API.shopcar.addCart,
					data: {
						uid: uni.getStorageSync('uid'),
						
					}
				})
			}
		},
		onLoad(options) {
			this.id = options.id
		}
	}
</script>

<style lang="scss">
	.title {
		margin-bottom: 6rpx;
	}
	.price {
		margin-bottom: 6rpx;
		color: red;
	}
	.count-container {
		display: flex;
		justify-content: space-between;
		.count-operate {
			display: flex;
			height: 56rpx;
			input {
				height: 56rpx;
				border: 1px solid #ebebeb;
				text-align: center;
			}
			.iconfont {
				width: 56rpx;
				height: 56rpx;
				line-height: 56rpx;
				border: 1px solid #ebebeb;
				text-align: center;
			}
		}
	}
	.footer {
		position: fixed;
		height: 110rpx;
		bottom: 0;
		.shopCar {
			width: 170rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				font-size: 40rpx;
			}
			.circle {
				position: absolute;
				width: 26rpx;
				height: 26rpx;
				line-height: 26rpx;
				background-color: #e43a3d;
				color: #fff;
				font-size: 26rpx;
				text-align: center;
				top: 26rpx;
				left: 88rpx;
			}
		}
		.btns {
			flex: 1;
			display: flex;
			>view {
				flex: 1;
				height: 110rpx;
				line-height: 110rpx;
			}
		}
	}
</style>
