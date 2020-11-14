<template>
	<view class="wxlogin">
		<view class="wxlogin-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png"></image></view>
		<!-- 账号登录 -->
		<view v-if="loginShow">
			<view class="wxlogin-phone"><input class="wxlogin-content" v-model="phoneVal" type="text" :placeholder="login.phoneTip" @input="phoneInput" /></view>
			<view class="wxlogin-line"></view>
			<view class="wxlogin-pws">
				<input
					class="wxlogin-pws-content"
					:type="eyeShow ? 'password' : 'text'"
					v-model="pwsValue"
					:placeholder="login.PwsTip"
					@input="phoneInput"
					style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666;"
				/>
				<view class="wxlogin-pws-icon" @click="eyeShowtip">
					<image
						:src="eyeShow ? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bieye.png' : 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png'"
						mode=""
					></image>
				</view>
			</view>
			<view class="wxlogin-line"></view>
			<view class="wxlogin-wxlogin" @click="pwsLogin">
				<!-- 确认 -->
				<view class="wxlogin-btn" :class="cahngeColor ? 'cahngeColor' : ''">
					<text>{{ commonality.confirm }}</text>
				</view>
			</view>
		</view>
		<!-- 验证登录 -->
		<view v-else>
			<view class="wxlogin-phone">
				<view class="wxlogin-phone-left" @click="areaCode">
					<view class="wxlogin-phone-left-size">+{{ areacodenumber }}</view>
					<view class="iconfont icon-xiajiantou"></view>
				</view>
				<input class="wxlogin-content" type="text" :placeholder="login.phoneTip" v-model="phoneValue" @input="messageInput" />
			</view>
			<view class="wxlogin-line"></view>
			<!-- 手机短信 -->
			<view class="wxlogin-yzm">
				<input type="text" :placeholder="login.codeTip" v-model="messageCode" @input="messageInput" />
				<view class="message-yzm-hq" @click="qqmessages">
					<text>{{ word }}</text>
				</view>
			</view>
			<view class="wxlogin-line"></view>
			<view class="wxlogin-wxlogin" @click="messageLogin">
				<view class="wxlogin-btn" :class="cahngeColor ? 'cahngeColor' : ''">
					<text>{{ commonality.confirm }}</text>
				</view>
			</view>
		</view>
		<view class="wxlogin-register" @click="forgetPsw">{{ login.Pwsforget }}</view>

		<view class="wxlogin-other">
			<text>{{ login.ElseLogin }}</text>
		</view>
		<view class="wxlogin-imgbtn">
			<!-- 微信登录 -->
			<view class="wxlogin-imgbtn-l" @click="wxLogin">
				<image class="wxlogin-imgbtn-wx" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/wx.png" mode=""></image>
				<view class="wxlogin-imgbtn-name">{{ login.wxLOgin }}</view>
				<!-- #ifdef MP-WEIXIN -->
			         <button class="wxq-btn loginWx" open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
				<!-- #endif -->
			</view>
			<!-- 验证登录 -->
			<view class="wxlogin-imgbtn-r" @click="cutLogin">
				<image
					class="wxlogin-imgbtn-st"
					:src="loginShow ? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/yz.png' : 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/st.png'"
					mode=""
				></image>
				<view class="wxlogin-imgbtn-name">{{ loginShow ? login.yzLogin : login.zhlogin }}</view>
			</view>
		</view>

		<view>
			<view class="wxlogin-info">
				<view class="wxlogin-info-left">{{ login.rexy }}</view>
				<view class="wxlogin-info-right" @click="agreement">《{{ login.privacy }}》</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getCode, Setcode, Login } from '@/api/index.js';
import { getUserInfos,getOpenid } from '@/api/index.js'
export default {
	data() {
		return {
			phoneVal: '',
			word: '',
			cahngeColor: false,
			isOvertime: false,
			// 手机号框
			phoneValue: '',

			// 验证码
			messageCode: '',
			// 密码框
			pwsValue: '',
			areacodenumber: '',
			loginShow: true,
			eyeShow: true,
			showPhone: false,
			showAuthorization: true,
			code: '' ,//微信临时登录凭证
			session_key:''
		};
	},
	onLoad() {
		this.word = this.login.getCode;
		uni.login({
			success: res => {
				console.log(res)
				if (res.errMsg == 'login:ok') {
					// this.code = res.code;
					let data = {code:res.code}
					getOpenid(data).then(res=>{
						console.log(res)
						this.session_key = res.data.session_key
					})
				} else {
					uni.showToast({
						title: '系统异常，请联系管理员!'
					});
				}
			}
		});
	},
	onShow() {
		if (uni.getStorageSync('areacodeData')) {
			this.areacodenumber = uni.getStorageSync('areacodeData').mobile_prefix;
		} else {
			this.areacodenumber = 86;
		}
	},
	computed: {
		login() {
			return this.$t('login');
		},
		commonality() {
			return this.$t('commonality');
		}
	},
	methods: {
		// 切换登录
		cutLogin() {
			console.log('触发');
			this.loginShow = !this.loginShow;
		},
		// 密码框input
		phoneInput() {
			if (this.phoneVal && this.pwsValue != '') {
				this.cahngeColor = true;
			} else {
				this.cahngeColor = false;
			}
		},
		//验证码
		messageInput() {
			if (this.phoneValue && this.messageCode != '') {
				this.cahngeColor = true;
			} else {
				this.cahngeColor = false;
			}
		},
		// 点击眼睛
		eyeShowtip() {
			this.eyeShow = !this.eyeShow;
		},
		// 点击发送验证码
		qqmessages() {
			console.log('触发');
			var that = this;
			var time = 60;
			if (this.phoneValue == '') {
				wx.showToast({
					title: this.login.phoneTip,
					icon: 'none'
				});
				return false;
			}

			console.log(this.isOvertime);

			if (!this.isOvertime) {
				let data = { phone: this.phoneValue, type: 2, prefix: this.areacodenumber };
				getCode(data).then(res => {
					that.isOvertime = true;
					console.log(res);
					if (res.code != 0) {
						console.log('错误');
						that.isOvertime = false;
						wx.showToast({
							title: res.msg,
							icon: 'none'
						});
					} else {
						var sendTimer = setInterval(function() {
							time--;
							let word = `${that.login.Sent}` + ' ' + `(${time}s)`;
							that.word = word;
							if (time < 0) {
								that.isOvertime = false;
								clearInterval(sendTimer);
								let word = that.login.resend;
								that.word = word;
							}
						}, 1000);
					}
				});
			}
		},
		wxLogin(){
			// uni.navigateTo({
			// 	url:'/pages/login/wxlogin'
			// })
		},

		// 密码登录
		pwsLogin() {
			if (this.phoneVal == '') {
				uni.showToast({
					title: this.login.phoneTip,
					icon: 'none'
				});
				return;
			}
			if (this.pwsValue == '') {
				uni.showToast({
					title: this.login.PwsTip,
					icon: 'none'
				});
				// return
			}
			let data = { phone: this.phoneVal, password: this.pwsValue };
			Login(data).then(res => {
				console.log('登录', res);
				if (res.code == 0) {
					uni.setStorage({
						key: 'token', //key的名称是 url
						data: res.data.token, //data中存放的是我的url地址
						success: function() {
							console.log('存储成功');
						}
					});
					uni.setStorage({
						key: 'user', //key的名称是 url
						data: res.data, //data中存放的是我的url地址
						success: function() {
							console.log('存储成功');
						}
					});
					// #ifdef H5
					var LoginEvent = window.JAnalyticsInterface.Event.LoginEvent;
					var lEvent = new LoginEvent('密码登录', true);
					lEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
					window.JAnalyticsInterface.onEvent(lEvent);
					// #endif
					uni.switchTab({
						url: '../index/index'
					});
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					// #ifdef H5
					var LoginEvent = window.JAnalyticsInterface.Event.LoginEvent;
					var lEvent = new LoginEvent('密码登录', false);
					lEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
					window.JAnalyticsInterface.onEvent(lEvent);
					// #endif
				}
			});
		},
		// 短信登录
		messageLogin() {
			if (this.messageCode == '') {
				uni.showToast({
					title: this.login.codeTip,
					icon: 'none'
				});
				return;
			}
			if (this.phoneValue == '') {
				uni.showToast({
					title: this.login.phoneTip,
					icon: 'none'
				});
				return;
			}
			let data = { phone: this.phoneValue, code: this.messageCode };
			Setcode(data).then(res => {
				console.log(res);
				if (res.code == 0) {
					uni.setStorage({
						key: 'token', //key的名称是 url
						data: res.data.token, //data中存放的是我的url地址
						success: function() {
							console.log('存储成功');
						}
					});

					uni.setStorage({
						key: 'user', //key的名称是 url
						data: res.data, //data中存放的是我的url地址
						success: function() {
							console.log('存储成功');
						}
					});
					// #ifdef H5
					var LoginEvent = window.JAnalyticsInterface.Event.LoginEvent;
					var lEvent = new LoginEvent('短信登录', true);
					lEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
					window.JAnalyticsInterface.onEvent(lEvent);
					// #endif
					uni.switchTab({
						url: '../index/index'
					});
				} else {
					// #ifdef H5
					var LoginEvent = window.JAnalyticsInterface.Event.LoginEvent;
					var lEvent = new LoginEvent('短信登录', false);
					lEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
					window.JAnalyticsInterface.onEvent(lEvent);
					// #endif
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
			});
		},
		//获取用户的当前设置
		getSetting() {
			return new Promise(function(resolve, reject) {
				uni.getSetting({
					success: function(res) {
						if (res.authSetting['scope.userInfo']) {
							console.log('存在');
							resolve(true);
						} else {
							console.log('不存在');
							resolve(false);
						}
					}
				});
			}).catch(e => {
				console.log(e);
			});
		},
		//微信授权登录
		getUserInfo(e) {
			let that = this;
			var p = this.getSetting();
			p.then(function(isAuth) {
				console.log('是否已经授权', isAuth);
				if (isAuth) {
					console.log('用户信息，加密数据', e);
					//eData  包括//微信头像//微信名称 还有加密的数据.
					let eData = JSON.parse(e.detail.rawData);
					console.log(eData)
					//接下来就是访问接口.
					let data = {
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv,
						sessionKey:that.session_key
					}
					console.log(data)
					getUserInfos(data).then(res=>{
						console.log('解密',res)
						uni.setStorage({
							key: 'token', //key的名称是 url
							data: res.data.token, //data中存放的是我的url地址
							success: function() {
								console.log('存储成功');
							}
						});
						
						uni.setStorage({
							key: 'user', //key的名称是 url
							data: res.data, //data中存放的是我的url地址
							success: function() {
								console.log('存储成功');
							}
						});
						
						
						if(res.data.status == 0){
							uni.navigateTo({
								url:'/pages/login/wxlogin'
							})
							
						}else if(res.data.status == 1){
							uni.switchTab({
								url:'/pages/index/index'
							})
						}else{
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
					})

				} else {
					uni.showToast({
						title: '授权失败，请确认授权已开启',
						mask: true,
						icon: 'none'
					});
				}
			});
		},
		// 区号
		areaCode() {
			uni.navigateTo({
				url: './areacode'
			});
		},
		forgetPsw() {
			uni.navigateTo({
				url: './message'
			});
		},

		// 隐私
		agreement() {
			uni.navigateTo({
				url: './agreement'
			});
		}
	}
};
</script>

<style lang="less">
input {
	background: transparent !important;
}
.getPhone {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background: none;
}
.input::-webkit-input-placeholder {
	color: #cacacaff !important;
}

.input:-moz-placeholder {
	color: #cacacaff !important;
}

.input:-ms-input-placeholder {
	color: #cacacaff !important;
}

.cahngeColor {
	background: #dc2a1f !important;
	color: #ffffff !important;
}

/deep/input[type='text'],
input[type='password'] {
	width: 100%;
	border: none;
	// outline: none;
}
input[type='password'] {
	border: none;
	padding: 0;
	// outline: none;
}

input:focus,
textarea:focus {
	outline: none;
}

.wxlogin {
	/* padding-top: 150rpx; */
	/* padding-bottom: 122rpx; */
	padding: 20% 40rpx 0rpx;
	height: 100%;
	box-sizing: border-box;
	background: #ffffff;
}

.wxlogin-logo {
	width: 100%;
	display: flex;
	justify-content: center;
}

.wxlogin-logo image {
	width: 152rpx;
	height: 152rpx;
}

.wxlogin-phone {
	width: 588rpx;
	/* width: 100%; */
	margin: 0 auto;
	padding: 80rpx 0 20rpx 0rpx;
	display: flex;
	align-items: flex-end;
}

.wxlogin-phone-left {
	display: flex;
	height: 40rpx;
	line-height: 40rpx;
}

.wxlogin-phone-left-size {
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}

.wxlogin-phone-left .icon-xiajiantou {
	display: flex;
	align-items: center;
	font-size: 42rpx;
	font-weight: bold;
}

.wxlogin-phone .wxlogin-content {
	padding-left: 13rpx;
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}

.wxlogin-line {
	width: 588rpx;
	height: 1px;
	background: #eeeeee;
	border-radius: 1px;
	margin: 0 auto;
}

.wxlogin-yzm {
	width: 588rpx;
	padding: 65rpx 0rpx 20rpx 0rpx;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
}

.wxlogin-yzm input {
	flex: 1;
	padding-left: 13rpx;
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666666ff;
}

.wxlogin-yzm-hq text {
	padding-left: 20rpx;
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666666;
}

.wxlogin-pws {
	width: 588rpx;
	/* width: 100%; */
	padding: 65rpx 0rpx 20rpx 0rpx;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
}

.wxlogin-pws input {
	display: block;
	// outline: none;
	width: 100%;
	border: none !important;
	padding-left: 13rpx;
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}

input::-webkit-input-placeholder {
	color: rgba(202, 202, 202, 1);
}

input::-moz-placeholder {
	/* Mozilla Firefox 19+ */
	color: rgba(202, 202, 202, 1);
}

input:-moz-placeholder {
	/* Mozilla Firefox 4 to 18 */
	color: rgba(202, 202, 202, 1);
}

input:-ms-input-placeholder {
	/* Internet Explorer 10-11 */
	color: rgba(202, 202, 202, 1);
}

.wxlogin-pws-icon {
	margin-right: 15rpx;
	width: 50rpx;
	height: 40rpx;
}

.wxlogin-pws-icon image {
	display: block;
	width: 100%;
	height: 100%;
}

.wxlogin-wxlogin {
	display: flex;
	justify-content: center;
	padding-top: 70rpx;
}

.wxlogin-wxlogin .wxlogin-btn {
	width: 570rpx;
	height: 90rpx;
	background: rgba(238, 238, 238, 1);
	border-radius: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36rpx;
	color: rgba(153, 153, 153, 1);
}

.wxlogin-btn text {
	font-size: 36rpx;
	font-family: PingFang SC;
}

.cahngeColor {
	background: rgba(220, 42, 31, 1);
	color: rgba(255, 255, 255, 1);
}

.wxlogin-info {
	width: 495rpx;
	height: 25rpx;
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
	line-height: 113rpx;
	display: flex;
	margin: auto;
	margin-left: 90rpx;
}

.wxlogin-info-right {
	text-align: right;
	color: #1879e5;
}

.wxlogin-other {
	padding-top: 25%;
	display: flex;
	justify-content: center;
}

.wxlogin-other text {
	text-align: center;
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}

.wxlogin-imgbtn {
	padding-top: 29rpx;
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
}

.wxlogin-imgbtn image {
	width: 84rpx;
	height: 84rpx;
	/* margin: auto; */
}

.wxlogin-imgbtn-wx {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	/* padding-right: 39rpx; */
}

.showPhone {
	position: absolute;
	left: 0;
	top: 0;
	width: 84rpx;
	height: 84rpx;
	background: transparent;
}

button::after {
	border: none !important;
}

.wxlogin-imgbtn-st {
	padding-left: 39rpx;
}

.wxlogin-register {
	text-align: right;
	padding-top: 30rpx;
	padding-right: 40rpx;
	font-size: 28rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #db1f13;
}

.wxlogin-imgbtn-l {
	position: relative;
	width: 160rpx;
	/* background: red; */
}

.wxlogin-imgbtn-r {
	width: 160rpx;
	/* background: red; */
}

.wxlogin-imgbtn-name {
	text-align: center;
	font-size: 26rpx;
}
.loginWx {
	position: absolute;
	top: 0;
	left: 0;

	width: 160rpx;
	height: 120rpx;
	background: transparent;
}
</style>
