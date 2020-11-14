<template>
	<view class="message">
		<view class="message-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
		<view class="message-phone">
			<view class="message-phone-left" @click="areacode">
				<view class="message-phone-left-size">+{{ areacodenumber }}</view>
				<view class="iconfont icon-xiajiantou"></view>
			</view>
			<input v-model="phonevlaue" class="message-content" type="text" value="" @input="messageInput" />
		</view>

		<view class="message-line"></view>

		<!-- 手机短信 -->
		<view class="message-yzm">
			<input v-model="code" type="text" :placeholder="login.codeTip" @input="messageInput" />
			<view class="message-yzm-hq" @click="qqmessages">
				<text>{{ word }}</text>
			</view>
		</view>

		<view class="message-line"></view>

		<!-- 登录 -->
		<view class="message-message">
			<view class="message-btn" :class="{ cahngeColor }" @click="messages">
				<text>{{ login.login }}</text>
			</view>
		</view>

		<view class="message-info">
			<view class="message-info-left">{{login.rexy}}</view>
			<view class="message-info-right" @click="agreement">《{{login.privacy}}》</view>
		</view>
	</view>
</template>

<script>
import { getCode, Setcode } from '@/api/index.js';
export default {
	data() {
		return {
			phonevlaue: '',
			cahngeColor: false,
			isOvertime: false,
			word: '',
			areacodenumber: '',
			code: ''
		};
	},
	created() {
		// console.log('11',uni.getStorageSync('getphone'))
		// this.phonevlaue =  uni.getStorageSync('getphone').replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
	},
	onLoad() {
		this.word = this.login.getCode;
		console.log('load');
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
		}
	},
	methods: {
		areacode() {
			uni.navigateTo({
				url: './areacode'
			});
		},
		//验证码
		messageInput() {
			if (this.phonevlaue != '' && this.code != '') {
				this.cahngeColor = true;
			} else {
				this.cahngeColor = false;
			}
		},
		messages() {
			if (this.code == '') {
				uni.showToast({
					title: this.login.codeTip,
					icon: 'none'
				});
				return;
			}
			if (this.phonevlaue == '') {
				uni.showToast({
					title: this.login.phoneTip,
					icon: 'none'
				});
				return;
			}
			let data = { phone: this.phonevlaue, code: this.code };
			Setcode(data).then(res => {
				console.log(res);
				if (res.code == 0) {
					
					
					uni.navigateTo({
						url: './register'
					});
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
			});
		},

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
				let data = { phone: this.phonevlaue, type: 4, prefix: this.areacodenumber };
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
								console.log('进来');
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
		agreement() {
			uni.navigateTo({
				url: './agreement'
			});
		}
	}
};
</script>

<style lang="less">
.message {
	padding-top: 233rpx;
	padding-bottom: 122rpx;

	&-logo {
		width: 100%;
		display: flex;
		justify-content: center;

		image {
			width: 152rpx;
			height: 152rpx;
		}
	}

	&-phone {
		width: 548rpx;
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
				color: #333333;
			}

			.icon-xiajiantou {
				padding-left: 8rpx;
				padding-right: 26rpx;
				// display: flex;
				// justify-content: center;
				// align-items: center;
			}
		}

		.message-content {
			font-size: 42rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		image {
			padding-left: 25rpx;
			width: 42rpx;
			height: 42rpx;
		}

		&-qixiao {
			width: 34rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			height: 34rpx;
		}
	}

	&-line {
		width: 548rpx;
		height: 1px;
		background: rgba(238, 238, 238, 1);
		border-radius: 1px;
		margin: 0 auto;
	}

	&-yzm {
		width: 548rpx;
		padding: 65rpx 15rpx 20rpx 0rpx;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		input {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333;
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

	&-message {
		display: flex;
		justify-content: center;
		margin-top: 120rpx;

		.message-btn {
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
			background: rgba(220, 42, 31, 1) !important;
			color: rgba(255, 255, 255, 1) !important;
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
