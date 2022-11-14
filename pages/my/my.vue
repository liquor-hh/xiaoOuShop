<template>
	<view class="container">
		<view class="main">
			<view class="header" :style="{ paddingTop: headArea.statusHeight + 'px', height: headArea.headerHeight + 'px'}">
				<view class="header-title">
					我的
				</view>
				<view class="header-content">
					<view class="order-nav">
						<view class="avatar-container">
							<image src="" mode=""></image>
							<view class="name">
								<view>youyou</view>
								<view>V1</view>
							</view>
						</view>
					</view>
					<view class="qiandao">
						每日签到
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<tabBar page='/pages/my/my'></tabBar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
	}
</script>

<style lang="scss">
	.container {
		.header {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 335rpx;
			background-color: #f26b11;
			color: #fff;
			.header-title {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.header-content {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.avatar-container {
					display: flex;
					align-items: center;
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
