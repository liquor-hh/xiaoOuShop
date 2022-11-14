<template>
	<view class="container">
		<view class="main">
			<view class="shopCar-list">
				<view class="shopCar-item" v-for="(item, index) in shopCarList" :key="index">
					<view class="check">
						<!-- <i :class="['iconfont', item.isChecked ? 'icon-checked' : 'icon-']"></i> -->
					</view>
					<view class="product-image">
						<image></image>
					</view>
					<view class="product-content">
						<view class="title">
							
						</view>
						<view class="price">
							
						</view>
						<view class="operate-count">
							<i class="iconfont icon-jiahao"></i>
							<input type="text"><i class="iconfont icon-jianhao"></i>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<tabBar page="/pages/shopCart/shopCart"></tabBar>
		</view>
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
				uid: '',
				shopCarList: []
			};
		},
		methods: {
			getCartList() {
				let that = this
				this.$http.get({
					url: API.shopCar.getList,
					data: {
						uid: this.uid
					}
				}).then(res => {
					if(res.code == 200) {
						this.shopCarList = res.list[0].map(item => {
							return {
								...item,
								isChecked: false
							}
						})
					}
				})
			}
		},
		onLoad() {
			let uid = uni.getStorageSync('uid')
			if (!uid) {
				uni.showModal({
					title: "提示",
					showCancel: false,
					content: "您还未登录，请先去登录",
					success(res) {
						if (res.confirm) {
							uni.setStorageSync('redirctPath', '/pages/shopCart/shopCart')
							uni.redirectTo({
								url: '/pages/login/login'
							})
						}
					}
				})
			} else {
				this.uid = uid
				this.getCartList()
			}
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		.main {
			flex: 1;
			.shopCar-item {
				width: 100%;
				height: 170rpx;
				display: flex;
				.check {
					width: 70rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 34rpx;
						height: 34rpx;
					}
				}
				.product-image {
					width: 150rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 110rpx;
						height: 110rpx;
					}
				}
				.product-content {
					display: flex;
					flex-direction: center;
					align-items: center;
					font-size: 28rpx;
					width: 250rpx;
					.price {
						color: red;
					}
				}
				.operate-count {
					flex: 1;
					display: flex;
					align-self: flex-end;
					i {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 60rpx;
						height: 60rpx;
						border: 1px solid #ebebeb;
					}
					input {
						width: 78rpx;
						height: 60rpx;
						border: 1px solid #ebebeb;
					}
				}
				.del-contianer {
					position: absolute;
					right: -100rpx;
					top: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100rpx;
					height: 100%;
					background-color: #e43a3d;
					color: #fff;
				}
			}
		}
	}
</style>
