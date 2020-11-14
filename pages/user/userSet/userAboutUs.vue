<template>
	<view class="userabout">
		<Head :title="user.About" @navigateBack="navigateBack"></Head>
		<view class="userabout-c">
			<view class="userabout-c-top">
				<view class="userabout-c-top-logo"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
				<view class="userabout-c-top-name">{{ user.company }}</view>
			</view>
			<!-- 公司简介 -->
			<view class="userabout-c-txt">
				<text>{{ user.AboutInfo }}</text>
			</view>

			<view class="userabout-c-c">
				<!-- 官网 -->
				<view class="userabout-c-c-item">
					<view class="userabout-c-c-item-name">{{ user.official }}</view>
					<view class="userabout-c-c-item-r">
						<text>https://www.boxueteach.com</text>
						<!-- <view class="iconfont icon-youjiantou1"></view> -->
					</view>
				</view>
				<!-- 微信公众号 -->
				<view class="userabout-c-c-item" @click="TipQrcode">
					<view class="userabout-c-c-item-name">{{ user.Tencent }}</view>
					<view class="userabout-c-c-item-r"><view class="iconfont icon-youjiantou1"></view></view>
				</view>
				<!-- 微信小程序 -->
				<view class="userabout-c-c-item">
					<view class="userabout-c-c-item-name">{{ user.applet }}</view>
					<view class="userabout-c-c-item-r"><text>{{user.company}}</text></view>
				</view>
<!-- 用户服务及隐私协议 -->
				<view class="userabout-c-c-item" @click="agreement">
					<view class="userabout-c-c-item-name">{{user.serve}}</view>
					<view class="userabout-c-c-item-r"><view class="iconfont icon-youjiantou1"></view></view>
				</view>
			</view>

			<view class="userabout-c-copy">Copyright © 2020 广州博学教育培训咨询有限公司 All rights reserved</view>
		</view>
		<view class="userabout-Qrcode" v-if="isQrcode" style="background-color: rgba(0, 0, 0, 0.6); z-index: 10073; transition: all 0.3s ease-in-out 0s; transform: scale(1, 1);">
			<view class="slot-content">
				<view class="slot-content-box">
					<view class="userabout-Qrcode-title"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png" mode=""></image></view>
					<view class="userabout-Qrcode-c">
						<view class="userabout-Qrcode-c-bg">
							<view class="userabout-Qrcode-c-tab">
								<u-tabs
									active-color="#FFFFFF"
									bg-color="transparent"
									:bar-style="barStyle"
									inactive-color="#EEEEEE"
									:list="list"
									:current="current"
									:is-scroll="false"
									@change="change"
								></u-tabs>
							</view>
						</view>
						<view class="userabout-Qrcode-c-img"><image :src="list[current].image" mode=""></image></view>
						<view class="userabout-Qrcode-c-btn">
							<!-- 关闭 -->
							<view class="userabout-Qrcode-c-btn-close" @click="TipClose">{{user.close}}</view>
							<view class="userabout-Qrcode-c-btn-line"></view>
							<!-- #ifdef H5 -->
							   <view class="userabout-Qrcode-c-btn-save" @click="saveImg(list[current].image)">{{user.QRcode}}</view>
							<!-- #endif -->
							<!-- #ifndef MP-WEIXIN -->
						      	<view class="userabout-Qrcode-c-btn-save" >{{user.QRcode}}</view>
							<!-- #endif -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getWxGzh } from '@/api/user.js'
export default {
	data() {
		return {
			img: 'http://www.people.com.cn/mediafile/pic/20200209/45/10464347485555249305.jpg',
			isQrcode: false,
			current: 0,
			barStyle: {
				background: '#DB1F13'
			},
			list: [
				
			]
		};
	},
	computed:{
		user(){
			return this.$t('user')
		}
	},
	onLoad() {
		this.getWxGzhData()
	},
	methods: {
		async getWxGzhData(){
			let data = {page:1}
			let res = await getWxGzh(data)
			console.log(res)
			this.list = res.data.list
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 显示公众号二维码
		TipQrcode() {
			this.isQrcode = true;
		},
		// tab切换
		change(index) {
			this.current = index;
		},
		// 关闭
		TipClose() {
			this.isQrcode = false;
		},
		saveImg(url) {
			console.log(url);
			var oA = document.createElement('a');
			oA.download = '';
			oA.href = url;
			document.body.appendChild(oA);
			oA.click();
			oA.remove();
		},
		agreement(){
			uni.navigateTo({
				url:'/pages/login/agreement'
			})
		}
	}
};
</script>

<style lang="scss">
.userabout-c {
	padding-top: 40rpx;
	&-top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&-logo {
			width: 140rpx;
			height: 140rpx;
			image {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		&-name {
			margin-top: 20rpx;
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
	}

	&-txt {
		padding: 50rpx 40rpx 70rpx;
		text-indent: 2em;
		text {
			text-indent: 2em;
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
	}

	&-c {
		padding: 0 40rpx;
		&-item:nth-child(1) {
			padding-top: 0;
		}
		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid #eeeeee;
			padding: 25rpx 0;
			&-name {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-r {
				display: flex;
				text {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				.icon-youjiantou1 {
					font-size: 34rpx;
				}
				// width: 120rpx;
				// height: 120rpx;
			}
		}
	}
	&-copy {
		margin-top: 96rpx;
		text-align: center;
		font-size: $fontSize - 10;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}
}
.userabout-Qrcode {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	// background: pink;
	.slot-content {
		position: absolute;
		width: 86%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: #ffffff;
		&-box {
		}
	}

	&-c {
		&-bg {
			position: relative;
			width: 100%;
			height: 300rpx;
			background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/qrcode@2x.png) no-repeat;
			background-position: center center;
			background-size: cover;
		}

		&-tab {
			width: 100%;
			position: absolute;
			top: 120rpx;
		}
		&-img {
			position: relative;
			width: 100%;
			height: 540rpx;
			image {
				display: block;
				width: 430rpx;
				height: 430rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
		&-btn {
			display: flex;
			align-items: center;
			height: 90rpx;
			background: #eeeeee;
			&-close {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				// background: red;
			}
			&-line {
				width: 1rpx;
				height: 60%;
				background: #000000;
			}
			&-save {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #e26e67;
				// background: pink;
			}
		}
	}
	&-title {
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		left: 50%;
		top: -75rpx;
		transform: translateX(-50%);
		z-index: 99999;
		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border: 8rpx solid #ffffff;
		}
	}
}
</style>
