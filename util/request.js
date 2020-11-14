export default {
	JAcommon: {
		// baseUrl: "http://ceshi.xiaoyuzhong123.com",
		baseUrl: "http://ceshi.xiaoyuzhong123.com",

		data: {},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
			// "Content-Type":"multipart/form-data"
		},
		method: "GET",
		dataType: "json"
	},
	JA(options = {}) {

		// uni.showLoading({
		//     title: '加载中'
		// });

		options.url = this.JAcommon.baseUrl + options.url;
		options.data = options.data || this.JAcommon.data;
		options.header = options.header || this.JAcommon.header;
		options.method = options.method || this.JAcommon.method;
		options.dataType = options.dataType || this.JAcommon.dataType;
		return new Promise((res, rej) => { //返回promise数据
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode == 200) {
						// console.log('111')
						if (result.data.code == 0) {
							let data = result.data;
							res(data);
						} else if (result.data.code == 103 || result.data.code == 104) {
							console.log('token失效')
							uni.navigateTo({
								url: '/pages/login/login'
							})
						} else {
							let data = result.data;
							// console.log(data)
							res(data)
						}
					} else {
					
						return rej();
					}

				},
				fail: err => {
					uni.showLoading({
						title: '网络错误',
						icon: 'none'
					});
					reject(err);
				}

			})
		})
	},
	HTTP(options = {}) {
		options.url = options.url;
		options.data = options.data || this.JAcommon.data;
		options.header = options.header || this.JAcommon.header;
		options.method = options.method || this.JAcommon.method;
		options.dataType = options.dataType || this.JAcommon.dataType;
		return new Promise((res, rej) => { 
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode == 200) {
						let data = result.data;
						res(data);
					} else {
						return rej();
					}
				},
				fail: err => {
					uni.showLoading({
						title: '网络错误',
						icon: 'none'
					});
					reject();
				}

			})
		})
	},
}
