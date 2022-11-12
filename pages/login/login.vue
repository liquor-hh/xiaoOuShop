<template>
	<view class="container">
		<view class="phone flex-row">
			<view>手机号</view>
			<input type="text" v-model="phone">
		</view>
		<view class="password flex-row">
			<view>密码</view>
			<input type="text" v-model="password">
		</view>
		<view class="login" @click="loginFn">
			登录
		</view>
		<view class="register" @click="goRegister">
			注册
		</view>
	</view>
</template>

<script>
	import API from '../../request/api.js'
	export default {
		data() {
			return {
				phone: '',
				password: ''
			};
		},
		methods: {
			goRegister() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			loginFn() {
				this.$http.post({
					url: API.login.login,
					data: {
						phone: this.phone,
						password: this.password
					}
				}).then(res => {
					if (res.code == 200) {
						let { token, uid } = res.list
						uni.setStorageSync('uid', uid)
						uni.setStorageSync('token', token)
						let redirectPath = uni.getStorageSync('redirectPath')
						uni.removeStorageSync('redirectPath')
						uni.redirectTo({
							url: redirectPath
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.flex-row {
		display: flex;
		input {
			border: 1px solid #ebebeb;
		}
	}
	.login, .register {
		width: 100rpx;
		height: 60rpx;
		border: 1px solid #f26b11
	}
</style>
