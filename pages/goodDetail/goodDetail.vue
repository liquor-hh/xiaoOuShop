<template>
	<view class="container">
		<view class="good-img">
			<image :src="'http://43.142.240.214:3000' + goodsDetail.img"></image>
		</view>
		<view class="good-content">
			<view class="title">
				{{ goodsDetail && goodsDetail.goodsname }}
			</view>
			<view class="price">
				{{ goodsDetail && goodsDetail.price }}
			</view>
			<view class="count-container">
				<view>购买数量</view>
				<view class="count-operate">
					<i class="iconfont icon-jianhao" @click="reduce"></i>
					<input type="text" v-model="count">
					<i class="iconfont icon-jiahao" @click="add"></i>
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
			<view class="btns">
				<view class="addCar" @click="addCar">
					加入购物车
				</view>
				<view class="buy">
					立即购买
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
				id: '',
				count: 0,
				goodsDetail: []
			};
		},
		methods: {
			getGoodDetail() {
				this.$http.get({
					url: API.gooddetail.getGoodsDetail,
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
						goodsid: this.id,
						num: this.count
					}
				}).then(res => {
					console.log(res);
				})
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodDetail()
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
				width: 80rpx;
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
		display: flex;
		position: fixed;
		width: 100%;
		height: 110rpx;
		bottom: 0;
		.shopCar {
			position: relative;
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
				text-align: center;
				color: #fff;
				&.addCar {
					background-color: #f26b11;
				}
				&.buy {
					background-color: #e43a3d;
				}
			}
		}
	}
</style>
