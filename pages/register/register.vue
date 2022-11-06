<template>
	<view class="container">
		<view class="phone flex-row">
			<view>手机号</view>
			<input type="text">
		</view>
		<view class="nick flex-row">
			<view>昵称</view>
			<input type="text">
		</view>
		<view class="password flex-row">
			<view>密码</view>
			<input type="text">
		</view>
		<view class="register" @click="registerFn">
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
				password: '',
				nickname: ''
			};
		},
		methods: {
			registerFn() {
				this.$http.get({
					url: API.login.register,
					data: {
						phone = this.phone
						password = this.password
						nickname = this.nickname
					}
				}).then(res => {
					if (res.code == 200) {
						
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
	.login {
		width: 100rpx;
		height: 60rpx;
		
	}
</style>
