<template>
	<view class="register">
		<view class="register-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
		<view class="register-phone">
			<input
				v-model="phonevlaue"
				class="register-content"
				:type="eyeShow ? 'password' : 'text'"
				value=""
				:placeholder="login.SetPwsTip"
				@input="phoneInput"
				style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666;"
			/>
			<image @click="valeyeShow" :src="eyeShow ? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bieye.png' : 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png'" mode=""></image>
		</view>

		<view class="register-line"></view>

		<!-- 密码-->
		<view class="register-yzm">
			<input
				v-model="repws"
				:type="pwsShow ? 'password' : 'text'"
				value=""
				:placeholder="login.aNew"
				@input="phoneInput"
				style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666;"
			/>
			<image @click="psweyeShow" :src="pwsShow ? 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bieye.png' : 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png'" mode=""></image>
		</view>

		<view class="register-line"></view>

		<view class="register-message">
			<view class="message-btn" :class="{ cahngeColor }" @click="registers"><text>{{$t('commonality.confirm')}}</text></view>
		</view>

		<view class="register-info">
			<view class="register-info-left">{{login.rexy}}</view>
			<view class="register-info-right">《{{login.privacy}}》</view>
		</view>
	</view>
</template>

<script>
import { register } from '@/api/index.js';
export default {
	data() {
		return {
			eyeShow: true,
			pwsShow: true,
			cahngeColor: false,
			phonevlaue: '',
			repws: ''
		};
	},
	computed:{
		login(){
			return this.$t('login')
		}
	},
	methods: {
		// 睁眼
		valeyeShow() {
			this.eyeShow = !this.eyeShow;
		},
		// 睁眼
		psweyeShow() {
			this.pwsShow = !this.pwsShow;
		},
		phoneInput() {
			if (this.phonevlaue && this.repws != '') {
				this.cahngeColor = true;
			} else {
				this.cahngeColor = false;
			}
		},
		registers() {
			if (this.phonevlaue != this.repws) {
				uni.showToast({
					title: this.login.setaNew,
					icon: 'none'
				});
				return;
			}
			let data = { token: uni.getStorageSync('token'), password: this.repws };
			console.log(data);
			register(data).then(res => {
				console.log('设置成功', res);
				if (res.code == 0) {
					uni.navigateTo({
						url: './login'
					});
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.register {
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
		width: 588rpx;
		margin: 0 auto;
		padding: 80rpx 0 20rpx 0rpx;

		display: flex;
		align-items: flex-end;
		input {
			padding-left: 13rpx;
			width: 100%;
		}

		image {
			margin-right: 15rpx;
			display: block;

			width: 44rpx;
			height: 40rpx;
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
		// justify-content: space-between;
		margin: 0 auto;
		image {
			margin-right: 15rpx;
			display: block;

			width: 44rpx;
			height: 40rpx;
		}
		input {
			padding-left: 13rpx;
			width: 100%;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(202, 202, 202, 1);
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
