<template>
	<view class="container">
		<view class="phone flex-row">
			<view>手机号</view>
			<input type="text">
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
				this.$http.get({
					url: API.login.login,
					data: {
						phone: this.phone,
						password: this.password
					}
				}).then(res => {
					if (res.code == 200) {
						let { uid, token } = res
						uni.setStorageSync('authorization', token)
						let redirectPath = uni.getStorageSync('redirectPath')
						
					}
				})
			}
		},
		onLoad(options) {
			this.page = options.page
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
	.login {
		width: 100rpx;
		height: 60rpx;
		
	}
</style>
