let token = ''
class Http {
	request(opts) {
		uni.getStorageSync('token') && (token = uni.getStorageSync('token'))
		let header = {
			authorization: token,
			'Content-Type': 'application/json;charset=UTF-8'
		}
		return new Promise(resolve => {
			uni.request({
				// #ifdef H5
				url: opts.url,
				// #endif
				
				// #ifndef H5
				url: 'http://43.142.240.214:3000' + opts.url,
				// #endif
				method: opts.method || 'GET',
				data: opts.data,
				header,
				success(res) {
					if (res.statusCode === 200) {
						resolve(res.data)
						if (res.data.code === 401) {
							resolve('权限认证失败')
						}
					}
				}
			})
		})
	}
	get(opts = {}) {
		opts.method = 'GET'
		return this.request(opts)
	}
	post(opts = {}) {
		opts.method = 'POST'
		return this.request(opts)
	}
}

export default new Http()