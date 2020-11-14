<template>
	<view class="passwordlogin">
		<view class="passwordlogin-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
		<view class="passwordlogin-phone">
			<view class="passwordlogin-phone-left" @click="areacode">
				<view class="passwordlogin-phone-left-size">+{{areacodenumber}}</view>
				<view class="iconfont icon-xiajiantou"></view>
			</view>
			<input v-model="phonevlaue" class="passwordlogin-content" type="text" value="" placeholder="请输入手机号" @blur="blurs"/>
		</view>

		<view class="passwordlogin-line"></view>

		<view class="passwordlogin-yzm">
			<input v-model="pws" :type="pwdType" placeholder="请输入6-20位字符密码" style="border: none;width: 100%;outline: none;font-size: 32rpx;padding-left: 13rpx;color: #666666FF;" @change="changes"/>
			<view class="passwordlogin-yzm-icon" @click="isiconBtn">
				<image :src="openeye" mode=""></image>
			
			</view>
			
		</view>

		<view class="passwordlogin-line"></view>

		<view class="passwordlogin-passwordlogin">
			<view class="passwordlogin-btn" :class="{ cahngeColor }" @click="passwordlogins"><text>登录</text></view>
		</view>

		<view class="passwordlogin-info" >
			<view class="passwordlogin-info-left">注册即代表您同意</view>
			<view class="passwordlogin-info-right" @click="agreement">《服务协议与隐私政策》</view>
		</view>
<view class="" style="pointer-events: auto;">

		<view class="passwordlogin-footer" style="pointer-events: none;">
			<view class="passwordlogin-footer-l" @click="register" >忘记密码</view>
			<view class="passwordlogin-footer-r" @click="wxlogin">立即注册</view>
		</view>
		
		
		</view>
	</view>
</template>

<script>
import { Login } from '@/api/index.js';
export default {
	data() {
		return {
			openeye: "https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png", //图片地址
			phonevlaue: '',
			pws:'',
			
			
	
			cahngeColor: false,
			word: '获取验证码',
			isOvertime: false,
			isicon:false,
			areacodenumber:'86',
			pwdType: 'text', // 密码类型
		};
	},
	created() {
		// console.log('11',uni.getStorageSync('getphone'))
		this.phonevlaue = uni.getStorageSync('getphone')
	
		this.getPhone()
		
	},
	onShow() {
		if(uni.getStorageSync('areacodeData')){
			this.areacodenumber = uni.getStorageSync('areacodeData').mobile_prefix
		}else{
			this.areacodenumber = 86
		}
	},
	methods: {
		getPhone(){
				this.phonevlaue = this.phonevlaue.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
		},
		blurs(){
			uni.setStorage({
				key: 'getphone', //key的名称是 url
				data: this.phonevlaue, //data中存放的是我的url地址
				success: function() {
					console.log('存储成功');
				}
			});
			this.getPhone()
		},
		changes(){
			console.log('触发了')
			if(this.phonevlaue){
				this.cahngeColor = true
			}
		},
		areacode(){
			uni.navigateTo({
				url:'./areacode'
			})
		},
		register(){
			console.log('?????')
			uni.navigateTo({
				url:'./register'
			})
		},
		wxlogin() {
			uni.navigateTo({
			    url: './wxlogin'
			});
		},
		agreement(){
			uni.navigateTo({
				url:'./agreement'
			})
		},
		// 登录
		passwordlogins(){
			console.log(uni.getStorageSync('getphone'),this.pws)
			let data = {phone:uni.getStorageSync('getphone'),password:this.pws}
			Login(data).then((res)=>{
				console.log('登录',res)
			

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
					url:'../index/index'
				})
			
			})
		
		},
		isiconBtn() {
			this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
			this.openeye = this.openeye == "https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png" ? "https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png" : "https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/eye.png";
		}
	}
};
</script>

<style lang="less" scoped>
	
	.cahngeColor{
		background: rgba(220, 42, 31, 1);
		color: rgba(255, 255, 255, 1);
	}
.passwordlogin {
	// pointer-events: none;
	padding-top: 233rpx;
	padding-bottom: 122rpx;
	position: relative;
	width: 100%;
	height: 100vh;
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
				font-size: 24rpx;
				// display: flex;
				// justify-content: center;
				// align-items: center;
			}
		}

		.passwordlogin-content {
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
			width: 100%;
			border: none !important;
			padding-left: 13rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(202, 202, 202, 1);
		}
		/deep/input[type="text"],input[type="password"]{
			width: 100%;
			border: none;
		}
		input[type="password"] {
		   border: none;
		    padding:0;
		}
		&-icon{
			margin-right: 15rpx;
			width: 44rpx;
			height: 40rpx;
			image {
				
				display: block;
				width: 100%;
				height: 100%;
			}
		}

	}

	&-passwordlogin {
		display: flex;
		justify-content: center;
		margin-top: 120rpx;

		.passwordlogin-btn {
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

	&-footer {

			
		width: 100%;
		// background: pink;
		position: absolute;
		left: 50%;

		bottom: 60rpx;		
		transform: translateX(-50%);
		z-index: -1;
		display: flex;
		justify-content: center;
		&-l {
		// 			pointer-events:none !important;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 101, 92, 1);
			margin-right: 40rpx;
		}
		&-r {
			// pointer-events:none;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 101, 92, 1);
		}
	}
}
</style>
