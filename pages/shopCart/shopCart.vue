<template>
	<view>
		
	</view>
</template>

<script>
	import API from '../../request/api.js'
	export default {
		data() {
			return {
				
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
					success() {
						if (res.confirm) {
							uni.redirectTo({
								url: '/pages/login/login?page=shopcar'
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

</style>
