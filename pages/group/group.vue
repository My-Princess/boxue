<template>
	<view class="group">
		<Head title="立即报名" @navigateBack="navigateBack"></Head>
		<Groupbox :CourseDetails="CourseDetails"></Groupbox>
		<view class="group-line"></view>
		<view class="group-list">
			<view class="group-list-item" @click="yhBtn">
				<view class="group-list-item-name">优惠卷</view>
				<view class="group-list-item-r">
					<text>{{ couponData.count }}张可用</text>
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/youjiantou.png" mode=""></image>
				</view>
			</view>
			<!-- 			<view class="group-list-item">
				<view class="group-list-item-name">积分</view>
				<view class="group-list-item-r"><text>共9999，满10000可用</text></view>
			</view> -->
			<view class="group-list-item">
				<view class="group-list-item-name">积分</view>
				<view class="group-list-item-r">
					<text>共{{ integralData.sum }}，满1000可用</text>
					<block v-if="integralData.sum > 1000">
						<template>
							<u-switch v-model="checked"></u-switch>
						</template>
					</block>
				</view>
			</view>
		</view>
		<view class="group-line"></view>
		<!-- <view class="group-League">
			<view class="group-League-title">
				<text>9528人正在拼团</text>
				<text>玩法</text>
				<view class="group-League-title-wh">?</view>
			</view>
			<view class="group-League-item">
				<Grouplist>
					<template v-slot:number>
						<view class="group-number">
							<view class="group-number-l">￥5840.00</view>
							<view class="group-number-r">￥5040.00</view>
						</view>
					</template>
				</Grouplist>
			</view>
		</view> -->
		<GroupFooter @curriculumBtn="curriculumBtn" @mxBtn="mxBtn" :Price="CourseDetails"></GroupFooter>
		<!-- 优惠券弹窗 -->
		<view class="group-popup" v-if="show">
			<view class="popup-box">
				<view class="popup-box-title">
					<view class="popup-box-title-name">优惠卷</view>
					<view class="popup-box-title-qx" @click="yhqxBtn">取消</view>
				</view>
				<scroll-view class="scroll-view_H" scroll-y="true" scroll-top="0">
					<view class="popup-box-concent">
						<u-radio-group v-model="value">
							<block v-for="(item, index) in couponData.list" :key="item.id">
								<u-radio :name="item.id" shape="circle" icon-size="0" active-color="#DC2A1F" size="18">
									<view class="popup-box-concent-yh">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/youhuiquans.png" mode=""></image>
										<view class="popup-box-concent-yh-jg">
											￥
											<text>{{ item.money }}</text>
										</view>
										<view class="popup-box-concent-yh-txt">{{ item.name }}</view>
										<view class="popup-box-concent-yh-time">有限期：{{ item.startTime }}-{{ item.endTime }}</view>
									</view>
								</u-radio>
							</block>
						</u-radio-group>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 选择支付方式 -->
		<view class="group-zfpopup">
			<template>
				<u-popup v-model="zfshow" mode="bottom">
					<view class="popup-box">
						<view class="popup-box-title">
							<view class="popup-box-title-name">选择支付方式</view>
							<view class="popup-box-title-qx" @click="zfqxBtn">取消</view>
						</view>
						<view class="popup-box-concent">
							<u-radio-group v-model="value">
								<view class="popup-box-concent-list">
									<view class="popup-box-concent-item">
										<u-radio shape="circle" icon-size="0" active-color="#DC2A1F" size="30" name="zfb">
											<view class="popup-box-concent-zf">
												<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zhbao.png" mode=""></image>
												<text>支付宝支付</text>
											</view>
										</u-radio>
									</view>
									<view class="popup-box-concent-item">
										<u-radio shape="circle" icon-size="0" active-color="#DC2A1F" size="30" name="wx">
											<view class="popup-box-concent-wx">
												<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/wx.png" mode=""></image>
												<text>微信支付</text>
											</view>
										</u-radio>
									</view>
								</view>
							</u-radio-group>
							<view class="popup-box-concent-txt">
								<text class="popup-box-concent-txt-title">支付金额:</text>
								<text class="popup-box-concent-txt-jg">
									￥5580
									<text class="popup-box-concent-txt-jg-x">.00</text>
								</text>
							</view>
							<view class="popup-box-concent-btn" @click="payment">立即支付</view>
							<!-- </view> -->
						</view>
					</view>
					<!--  -->
				</u-popup>
			</template>
		</view>
		<!-- 明细 -->
		<view class="group-mxpopup">
			<template>
				<u-popup v-model="mxshow" mode="bottom">
					<view class="popup-box">
						<view class="popup-box-title">
							<view class="popup-box-title-name">优惠明细</view>
							<view class="popup-box-title-qx" @click="mxqxBtn">取消</view>
						</view>
						<view class="popup-box-concent">
							<view class="popup-box-concent-item">
								<view class="popup-box-concent-item-l">商品总额</view>
								<view class="popup-box-concent-item-r">5580.00</view>
							</view>
							<view class="popup-box-concent-item">
								<view class="popup-box-concent-item-l">商品总额</view>
								<view class="popup-box-concent-item-r">5580.00</view>
							</view>
						</view>
						<GroupFooter @curriculumBtn="curriculumBtn" @mxBtn="mxqxBtn" :icon="false"></GroupFooter>
					</view>
				</u-popup>
			</template>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { Wxprepay } from '@/api/study.js';
import { couponList, integralList } from '@/api/user.js';
export default {
	data() {
		return {
			id: '',
			checked: false,
			show: false,
			value: 'wx',

			zfshow: false,
			mxshow: false,
			reduceMoney: 0, // 积分抵扣id
			couponId: 0, // 优惠券
			customerId: 0,
			loading: false,
			integralData: {},
			page: 1,
			// 优惠券
			couponData: {},
			payShow: true
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getIntegral();
		this.getCouponList();
		console.log(this.CourseDetails);
	},
	computed: {
		...mapState('study', ['CourseDetails'])
	},
	methods: {
		async getIntegral() {
			let data = { token: uni.getStorageSync('token'), page: 1 };
			let res = await integralList(data);
			console.log(res);
			this.integralData = res.data;
		},
		async getCouponList() {
			let data = { token: uni.getStorageSync('token'), type: 3, page: this.page };
			let res = await couponList(data);
			console.log(res);
			this.couponData = res.data;
		},
		yhBtn() {
			this.show = true;
		},
		yhqxBtn() {
			this.show = false;
		},
		async curriculumBtn() {
			console.log('触发');
			// #ifdef H5
			this.zfshow = true;
			this.mxshow = false;
			// #endif

			// #ifdef MP-WEIXIN
			if (this.payShow) {
				this.payShow = false;
				let id = JSON.parse([this.id]);
				let data = { 'classIds[]': id, couponId: this.couponId, reduceMoney: this.reduceMoney, customerId: this.customerId, payType: 2 };
				let res = await Wxprepay(data);
				console.log(res);
				if (res.code == 0) {
					let paymentData = res.data;
					uni.requestPayment({
						timeStamp: paymentData.timeStamp, //时间戳
						nonceStr: paymentData.nonceStr, //随机字符串
						package: paymentData.package, //统一下单接口返回的 prepay_id 参数值
						signType: 'MD5',
						paySign: paymentData.paySign, //签名
						success: res => {
							uni.navigateTo({
								url: `/pages/study/videoviewing?id=${this.id}`
							});

							uni.showToast({
								title: '支付成功!'
							});
						},
						fail: res => {
							this.payShow = true;
							uni.showModal({
								content: '支付失败',
								showCancel: false
							});
						},
						complete: () => {
							this.payShow = true;
							this.loading = false;
						}
					});
				} else {
					this.payShow = true;
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
			}

			// #endif
		},
		zfqxBtn() {
			this.zfshow = false;
		},
		payment() {
			uni.navigateTo({
				url: './groupsuccess'
			});
		},
		mxBtn() {
			this.mxshow = true;
		},
		mxqxBtn() {
			this.mxshow = false;
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
	
.group-number {
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	&-l {
		text-align: right;
		font-size: $fontSize - 8;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(203, 203, 203, 1);
		text-decoration: line-through;
	}
	&-r {
		font-size: $fontSize - 2;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(220, 42, 31, 1);
	}
}
.group {
	&-line {
		width: 100%;
		height: 10rpx;
		background: rgba(238, 238, 238, 1);
	}

	&-list {
		padding: 0 40rpx;
		&-item:last-child {
			border-bottom: none;
		}
		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 0;
			border-bottom: 1rpx solid #eeeeee;
			&-name {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			&-r {
				display: flex;
				align-items: center;

				text {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					margin-right: 10rpx;
				}
				image {
					margin-left: 15rpx;
					// display: flex;
					// align-items: center;
					// justify-content: center;
					width: 20rpx;
					height: 34rpx;
				}
				.u-switch {
					margin-left: 15rpx;
				}
			}
		}
	}
	&-League {
		padding: 0 40rpx;
		padding-top: 15rpx;
		position: relative;
		&-title {
			display: flex;

			align-items: center;
			text {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			text:nth-child(2) {
				margin-left: 30rpx;
				margin-right: 8rpx;
			}
			&-wh {
				width: 32rpx;
				height: 32rpx;
				border: 1rpx solid #333;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	&-popup {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		// overflow: hidden;
		background: rgba(0, 0, 0, 0.1);
		z-index: 999;
		box-shadow: 0 0 6px 0 #eee;
		// /deep/.u-checkbox__icon-wrap {
		//  margin-right: 20rpx;
		//  margin-left: 10rpx
		//  ::before{
		//   position: absolute;
		//   left: -15rpx;
		//   top: -16rpx;
		//   // content: '';
		//   width: 26rpx;
		//   height: 26rpx;
		//   border-radius: 50%;
		//   // padding: 5rpx;
		//   border: 2rpx solid #333;
		//  }

		// }

		.radio {
			// position: absolute;
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			border: 2rpx solid #eeeeee;
		}
		.popup-box {
			position: absolute;
			bottom: 0;
			max-height: 85%;
			background: #fff;
			padding: 0 40rpx;
			padding-bottom: 78rpx;
			.scroll-view_H{
				white-space: nowrap;
			     max-height: 700rpx;
				 min-height: 300rpx;
			}
			&-title {
				margin-top: 40rpx;
				margin-bottom: 58rpx;
				display: flex;
				align-items: center;
				&-name {
					margin: 0 auto;
					font-size: $fontSize + 6;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				&-qx {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			&-concent {
				&-yh {
					width: 616rpx;
					height: 152rpx;
					padding-bottom: 20rpx;
					position: relative;
					image {
						width: 100%;
						height: 100%;
					}
					&-jg {
						font-size: 30rpx;
						font-family: PingFang SC;
						// font-weight:bold;
						color: rgba(255, 255, 255, 1);
						// color: #333;
						position: absolute;
						left: 10rpx;
						top: 15rpx;
						z-index: 99;
						text {
							font-size: 30rpx;
						}
					}
					&-txt {
						position: absolute;
						left: 200rpx;
						top: 24rpx;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(220, 42, 31, 1);
					}
					&-time {
						position: absolute;
						left: 200rpx;
						top: 70rpx;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}
				}
			}
		}
	}
	&-zfpopup {
		
		.popup-box {
			padding: 0 40rpx;
			// padding-bottom: 78rpx;
			&-title {
				margin-top: 40rpx;
				margin-bottom: 58rpx;

				display: flex;
				align-items: center;
				&-name {
					margin: 0 auto;
					font-size: $fontSize + 6;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				&-qx {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			&-concent {
				// display: flex;
				// flex-direction:
				// /deep/.u-checkbox{
				// 	 position: relative;
				// 	display: flex;
				// 	width: 100% !important;

				// }

				// /deep/.u-checkbox__icon-wrap {

				// 		   margin-right: 20rpx;
				// 		   // margin-left: 10rpx
				// 		   margin-top: 15rpx;
				// 		   position: absolute;
				// 		   top: 0;
				// 		   right: 0rpx;
				// 		   ::before{
				// 			   position: absolute;
				// 			   left: -22rpx;
				// 			   top: -24rpx;
				// 			   // content: '';
				// 			   width: 44rpx;
				// 			   height: 44rpx;
				// 			   border-radius: 50%;
				// 			   // padding: 5rpx;
				// 			   border: 2rpx solid #333;
				// 			   // z-index: 999;
				// 		   }

				// }
				/deep/ .u-radio__icon-wrap--circle {
					position: absolute;
					right: 40rpx;
				}

				&-list {
					display: flex;
					flex-direction: column;
				}
				&-item {
				}
				&-zf {
					width: 100%;
					// background: red;
					display: flex;
					margin-bottom: 28rpx;
					image {
						width: 62rpx;
						height: 62rpx;
					}
					text {
						padding-left: 20rpx;
						font-size: $fontSize;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
				}
				&-wx {
					display: flex;
					align-items: center;
					image {
						width: 62rpx;
						height: 62rpx;
					}
					text {
						padding-left: 20rpx;
						font-size: $fontSize;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
				}
				&-txt {
					// display: flex;
					margin-top: 25rpx;
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					&-title {
						margin-right: 18rpx;
					}
					&-jg {
						font-size: $fontSize + 18;
						color: #dc2a1fff;
						text {
							font-size: $fontSize;
						}
					}
				}
				&-btn {
					margin-top: 36rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 98rpx;
					background: #dc2a1fff;
					// opacity:0.55;

					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}
	&-mxpopup {
		.popup-box {
			padding: 0 40rpx;
			// padding-bottom: 78rpx;
			&-title {
				margin-top: 40rpx;
				margin-bottom: 58rpx;

				display: flex;
				align-items: center;
				&-name {
					margin: 0 auto;
					font-size: $fontSize + 6;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				&-qx {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			&-concent {
				padding: 0 40rpx;
				padding-bottom: 125rpx;
				&-item:first-child {
					padding-top: 0;
				}
				&-item:last-child {
					border-bottom: none;
				}
				&-item {
					padding: 26rpx 0;
					display: flex;
					justify-content: space-between;
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					border-bottom: 1rpx solid #eeeeeeff;
					&-l {
					}
					&-r {
					}
				}
			}
		}
	}
}
</style>
