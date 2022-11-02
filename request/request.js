let token = ''
class Http {
	request(opts) {
		uni.getStorageSync('token') && (token = uni.getStorageSync('token'))
		let header = {
			token,
			'Content-Type': 'application/json;charset=UTF-8'
		}
		return new Promise(resolve => {
			uni.request({
				url:opts.url,
				method:: opts.method || 'GET',
				header,
				data: data.data,
				success(res) {
					if(res.statusCode === 200) {
						resolve(res)
						if(res.data.code === 401) {
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