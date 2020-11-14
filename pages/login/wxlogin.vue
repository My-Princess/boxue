<template>
	<view class="wxlogin">
		<Head @navigateBack="navigateBack"></Head>
		<view class="wxlogin-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
		<view class="wxlogin-phone">
			<view class="wxlogin-phone-left">
				<view class="wxlogin-phone-left-size" @click="areacode">+{{ areacodenumber }}</view>
				<view class="iconfont icon-xiajiantou"></view>
			</view>
			<input v-model="phonevlaue" class="wxlogin-content" type="text" value="" :placeholder="login.phoneTip" @input="changes" />
		</view>

		<view class="wxlogin-line"></view>
		<!-- 手机短信 -->
		<view class="wxlogin-yzm">
			<input type="text" v-model="code" value="" :placeholder="login.codeTip" @input="changes" />
			<view class="message-yzm-hq" @click="qqmessage">
				<text>{{ word }}</text>
			</view>
		</view>

		<view class="wxlogin-line"></view>

		<!-- 密码 -->
		<view class="wxlogin-password">
			<input
				v-model="pws"
				:type="pwstype"
				@input="changes"
				:placeholder="login.SetPwsTip"
				style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666FF;"
			/>
			<image :src="openeye" mode="" @click="isiconBtn"></image>
		</view>

		<view class="wxlogin-line"></view>

		<!-- 再次密码 -->
		<view class="wxlogin-password">
			<input
				v-model="repws"
				:type="repwstype"
				@input="changes"
				:placeholder="login.PwsTip"
				style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666FF;"
			/>
			<image :src="reopeneye" mode="" @click="reisiconBtn"></image>
		</view>

		<view class="wxlogin-line"></view>

		<view class="wxlogin-wxlogin">
			<view class="wxlogin-btn" :class="{ cahngeColor }" @click="wxlogins"><text>{{$t('commonality.confirm')}}</text></view>
		</view>

		<view class="wxlogin-info">
			<view class="wxlogin-info-left">{{login.rexy}}</view>
			<view class="wxlogin-info-right">《{{login.privacy}}》</view>
		</view>
	</view>
</template>

<script>
import { register, getCode,bindPhone } from '@/api/index.js';
export default {
	data() {
		return {
			// 提交信息
			phonevlaue: '',
			code: '',
			pws: '',
			repws: '',

			reuser: '',

			// 密码交互
			pwstype: 'text',
			openeye: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png',
			repwstype: 'text',
			reopeneye: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png',

			cahngeColor: false,
			word: '',
			isOvertime: false,
			areacodenumber: ''
		};
	},
	onLoad() {
		this.word = this.login.getCode
	},
	onShow() {
		if (uni.getStorageSync('areacodeData')) {
			this.areacodenumber = uni.getStorageSync('areacodeData').mobile_prefix;
		} else {
			this.areacodenumber = 86;
		}
	},
	created() {
		// console.log('11',uni.getStorageSync('getphone'))
		// this.phonevlaue = uni.getStorageSync('getphone')
	},
	computed: {
		login() {
			return this.$t('login');
		}
	},
	methods: {
		wxlogins() {
			// let getData = uni.getStorageSync('user')
			console.log(uni.getStorageSync('user').uid)
			let data = { uid:uni.getStorageSync('user').uid,phone:this.phonevlaue,code:this.code,repassword:this.repws,password:this.pws };
			if (this.cahngeColor) {
				bindPhone(data).then(res => {
					if(res.code == 0){
						console.log('注册', res);
						this.reuser = res.data;
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
						uni.switchTab({
							url:'/pages/index/index'
						});
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				});
			}
		},
		blurs() {
			if (this.phonevlaue && this.code && this.pws && this.repws) {
				this.cahngeColor = true;
			}
		},
		changes() {
			if (this.phonevlaue && this.code && this.pws && this.repws) {
				this.cahngeColor = true;
			}
		},
		areacode() {
			uni.navigateTo({
				url: './areacode'
			});
		},
		isiconBtn() {
			console.log('进来');
			this.pwstype = this.pwstype === 'password' ? 'text' : 'password';

			this.openeye =
				this.openeye == 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png'
					? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bieye.png'
					: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png';
		},
		reisiconBtn() {
			this.repwstype = this.repwstype === 'password' ? 'text' : 'password';
			this.reopeneye =
				this.reopeneye == 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png'
					? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bieye.png'
					: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png';
		},
		qqmessage() {
			console.log('触发');
			var that = this;
			var time = 60;
			if (this.phonevlaue == '') {
				wx.showToast({
					title: this.login.phoneTip,
					icon: 'none'
				});
				return false;
			}

			console.log(this.isOvertime);

			if (!this.isOvertime) {
				let data = { phone: this.phonevlaue, type: 3, prefix: this.areacodenumber };
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
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="less" scoped>
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
	background: #dc2a1fff;
	color: #ffffff;
}
.wxlogin {
	// padding-top: 233rpx;
	// padding-bottom: 122rpx;
	width: 100%;
	height: 100vh;

	&-logo {
		padding-top: 9.4%;
		width: 100%;
		display: flex;
		justify-content: center;

		image {
			width: 152rpx;
			height: 152rpx;
		}
	}

	&-phone {
		width: 588rpx;
		margin: 0 auto;
		padding: 80rpx 0 20rpx 16rpx;

		display: flex;
		align-items: flex-end;

		&-left {
			display: flex;
			height: 40rpx;
			line-height: 40rpx;
			&-size {
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.icon-xiajiantou {
				width: 24rpx;
				height: 11rpx;
				padding-left: 8rpx;
				padding-right: 26rpx;
				font-size: 40rpx;
				// display: flex;
				// justify-content: center;
				// align-items: center;
			}
		}

		.wxlogin-content {
			padding-left: 25rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	&-line {
		width: 588rpx;
		height: 1px;
		background: rgba(238, 238, 238, 1);
		border-radius: 1px;
		margin: 0 auto;
	}

	&-yzm {
		width: 588rpx;
		padding: 65rpx 0rpx 20rpx 0rpx;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		input {
			padding-left: 13rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			// color: rgba(202, 202, 202, 1);
			color: #666666ff;
		}

		&-hq {
			text {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}
	}

	&-password {
		width: 588rpx;
		padding: 65rpx 0rpx 20rpx 0rpx;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		input {
			padding-left: 13rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666ff;
		}
		image {
			margin-right: 15rpx;
			display: block;
			width: 44rpx;
			height: 40rpx;
		}
	}

	&-wxlogin {
		display: flex;
		justify-content: center;
		margin-top: 120rpx;

		.wxlogin-btn {
			width: 570rpx;
			height: 90rpx;
			// background: rgba(220, 42, 31, 1);
			background: rgba(238, 238, 238, 1);
			border-radius: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			// text-align: center;
			font-size: 36rpx;
			color: rgba(153, 153, 153, 1);

			text {
				font-size: 36rpx;
				// color: rgba(255, 255, 255, 1);
				font-family: PingFang SC;
			}
		}

		.cahngeColor {
			background: rgba(220, 42, 31, 1);
			color: rgba(255, 255, 255, 1);
		}
	}

	&-info {
		width: 495rpx;
		height: 25rpx;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 113rpx;
		display: flex;
		margin-left: 90rpx;

		&-right {
			text-align: right;
			color: #1879e5;
		}
	}
}
</style>
