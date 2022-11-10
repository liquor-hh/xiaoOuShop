<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/fonts/iconfont.css");
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.container {
		width: 100%;
		height: 100%;
	}
	uni-page-body {
		height: 100%;
	}
</style>
