<template>
	<view>
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
				uid: ''
			};
		},
		methods: {
			getCartList() {
				this.$http.get({
					url: API.shopcar.getList,
					data: {
						uid: this.uid
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
				this.getCartList()
			}
		}
	}
</script>

<style lang="scss">

</style>
