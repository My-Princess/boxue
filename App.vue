<script>
import { getopenids } from '@/api/index.js';
export default {
	globalData: {
		calss: {
			count: 0,
			number: 0
		}
	},
	onLaunch: function() {
		console.log('App Launch');
		console.log(this.$store.removeItem);
		// #ifdef H5
		window.JAnalyticsInterface.init({
			appkey: 'e3e5c5a0afec33fb08d8de1a', // 极光官网中创建应用后分配的 appkey，必填
			debugMode: true, // 设置是否开启 debug 模式。true 则会打印更多的日志信息。设置 false 则只会输出 w、e 级别的日志。
			channel: 'default-channel', // 渠道名称，默认值为:default-channel
			loc: true, //设置是否尝试获取位置信息上报，默认为 true
			singlePage: false //设置是否为单页面，默认为 false
		});
		// #endif
		
		// #ifdef H5
		// this.wxAuthorize();
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		// 微信公众号授权
		wxAuthorize() {
			let link = window.location.href;
			// let getAppid = this.getWxUrlData('appid');
			// console.log('getAppid', getAppid);
			// if (getAppid) {
			// 	uni.getStorageSync('getAppid', getAppid);
			// 	console.log('缓存appid');
			// }
			let params = this.getWxUrlData('code'); // 地址解析
			console.log('fsdfsad');
			console.log('params', params);
			if (params) {
				console.log('code', params);
				let data = { code: params };
				// getopenid(data).then(res => {
				// 	console.log(res);
				// });
			} else {
				let appid = 'wxe23e57a4e7b1c293';
				let setUrl = 'http://ceshi.xiaoyuzhong123.com/api/home/cc';
				let uris = encodeURIComponent(setUrl);

				let url =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + uris + '&scope=snsapi_userinfo&response_type=code&#wechat_redirect';
				window.location.href = url;
			}
		},

		// 微信公众号授权 (静默授权)
		// wxAuthorize() {
		// 	let link = window.location.href;
		// 	// let getAppid = this.getWxUrlData('appid');
		// 	// console.log('getAppid', getAppid);
		// 	// if (getAppid) {
		// 	// 	uni.getStorageSync('getAppid', getAppid);
		// 	// 	console.log('缓存appid');
		// 	// }
		// 	let params = this.getWxUrlData('code'); // 地址解析
		// 	console.log('fsdfsad');
		// 	console.log('params', params);
		// 	if (params) {
		// 		console.log('code', params);
		// 		let data = { code: params };
		// 		getopenid(data).then(res => {
		// 			console.log(res);
		// 		});
		// 	} else {
		// 		let appid = 'wxe23e57a4e7b1c293';
		// 		let setUrl = 'http://qd.xiaoyuzhong123.com';
		// 		let uris = encodeURIComponent(setUrl);

		// 		let url =
		// 			'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
		// 			appid +
		// 			'&redirect_uri=' +
		// 			uris +
		// 			'&scope=snsapi_base&response_type=code&connect_redirect=1&#wechat_redirect';
		// 		window.location.href = url;
		// 	}
		// },

		// 截取地址
		getWxUrlData(variable) {
			let query = window.location.search.substring(1);
			let vars = query.split('&');
			for (let i = 0; i < vars.length; i++) {
				let pair = vars[i].split('=');
				if (pair[0] == variable) {
					return pair[1];
				}
			}
			return false;
		}
	}
};
</script>

<style lang="scss">
// @import url('//fonts.googleapis.com/css2?family=Open+Sans&display=swap');
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
// @import  "./static/css/normalize.css";
@import 'uview-ui/index.scss';
// @import  url('./static/css/icon/iconfont.css');
@import './static/css/icon/iconfont.css';
// @import  './app.less';
/*每个页面公共css */
/* @import "./static/css/icon/iconfont.css"; */

//
/deep/.u-tabbar__content__circle__border {
	// position: absolute;
	top: -20rpx !important;
}
/deep/.u-tabbar__content__circle__button {
	top: -4rpx !important;
}
/deep/.u-fixed-placeholder {
	height: calc(50px) !important;
}
.u-tabbar__content__circle /deep/ .u-icon__img {
	width: 108rpx !important;
	height: 108rpx !important;
}
/*  #ifdef  H5  */
// @import url('//at.alicdn.com/t/font_1963032_h09jrlxa818.css');
/*  #endif  */
.mescroll-upwarp /deep/ .upwarp-nodata {
	font-size: 24rpx !important;
}
button::after {
	display: none;
}
.head {
	padding-top: 136rpx;
}
.hidden {
	white-space: nowrap;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	overflow: hidden;
}
.twohidden {
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
// *{touch-action: none;}
.community-concent-item-img {
	width: 99%;
	height: 288rpx;
	margin-top: 30rpx;
	margin-bottom: 20rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
</style>
