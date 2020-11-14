<template>
	<view class="confirmOrder">
		<Head :title="index.orderAffirm" @navigateBack="navigateBack"></Head>
		
		<view class="confirmOrder-user">
			<view v-if="!isSite">
				<view class="confirmOrder-user-address" @click="addressinfo">
					<view class="confirmOrder-user-address-text">{{ getInfo.provinces }}{{ getInfo.city }}{{ getInfo.county }}{{ getInfo.address }}</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
					<!-- <image src="" mode=""></image> -->
				</view>
				<view class="confirmOrder-user-phone">
					<text class="confirmOrder-user-phone-name">{{ getInfo.name }}</text>
					<text class="confirmOrder-user-phone-number">{{ getInfo.phone }}</text>
				</view>
			</view>

			<view class="confirmOrder-isshow" v-if="isSite" @click="filladdress">
				<!-- 请选择收货地址 -->
				<view class="confirmOrder-isshow-name">{{index.selectsite}} +</view>
				<view class="iconfont icon-iconfontjiantou5"></view>
			</view>

			<view class="confirmOrder-user-line"></view>
		</view>
		<view class="confirmOrder-box">
			<view class="confirmOrder-box-n">
				<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${getData.image}`" mode=""></image>
				<view class="confirmOrder-box-n-right">
					<view class="confirmOrder-box-right-up">
						<view class="confirmOrder-box-n-right-up-title">{{ getData.title }}</view>
						<view class="confirmOrder-box-n-right-up-concent">{{ getData.content }}</view>
					</view>
					<view class="confirmOrder-box-n-right-bottom">
						<view class="confirmOrder-box-n-right-bottom-l">{{ getData.inventory }} {{index.integral}}</view>
						<!-- 						<view class="confirmOrder-box-n-right-bottom-r">
							<image class="confirmOrder-box-n-right-bottom-r-jian" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/-.png" mode=""></image>
							<text>x1</text>
							<image class="confirmOrder-box-n-right-bottom-r-jia" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/%2B.png" mode=""></image>
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="confirmOrder-tip">{{index.conversiontxt}}</view>
		<orderfooter :title="index.conversion" height="70rpx" borderRadius="35px" @footerBtn="footerBtn">
			<template  v-slot:left>
				<text></text>
				<text>{{ getData.inventory }} {{index.integral}}</text>
			</template>
		</orderfooter>

		<view class="confirmOrder-modal">
			<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
				<view class="tipAddress">
					<view class="tipAddress-txt">{{index.OrdersTip}}</view>
					<view class="tipAddress-btn">
						<view class="tipAddress-btn-qx" @click="tipcancel">{{$t('commonality.cancel')}}</view>
						<!-- 前往填写 -->
						<view class="tipAddress-qr" @click="tipaffirm">{{index.Tofillin}}</view>
					</view>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
import { getDetails,setOrder } from '@/api/index.js';
import orderfooter from '@/components/orderfooter.vue';
export default {
	components: {
		// Head,
		orderfooter
	},
	data() {
		return {
			getData: {},
			id: '',
			getInfo: {},
			default: {},
			isSite: false,
			tipshow: false,
			hope_job: '',
			searchVal:'121'
		};
	},
	computed:{
		index(){
			return this.$t('index')
		}
	},
	onLoad(options) {
		this.id = options.id;
	},
	onHide() {
		// uni.removeStorage({
		// 	key:'selectAddress'
		// })
	},
	onShow() {
		this.getDetailsData()
		// let pages = getCurrentPages();  //获取所有页面栈实例列表
		// let nowPage = pages[ pages.length - 1];  //当前页页面实例
		console.log(this.searchVal)
	},
	methods: {
		getDetailsData() {
			let data = { token: uni.getStorageSync('token'), id: this.id };
			getDetails(data).then(res => {
				console.log('订单详情', res);
				this.getData = res.data.goods;
				this.default = res.data.address;
				res.data.address ? (this.isSite = false) : (this.isSite = true);
				this.searchVal == 121 ? this.getInfo = this.default : this.getInfo = uni.getStorageSync('selectAddress')
				// this.getInfo = uni.getStorageSync('selectAddress') || this.default;
				console.log('选中11', this.getInfo);
			});
		},
		addressinfo() {
			uni.navigateTo({
				url: './addressinfo'
			});
		},
		filladdress() {
			uni.navigateTo({
				url: `./filladdress`
			});
		},
		// 取消
		tipcancel() {
			this.tipshow = false;
		},
		// 确认
		tipaffirm() {
			uni.navigateTo({
				url: './filladdress'
			});
			this.tipshow = false;
		},
		navigateBack(){
			uni.navigateBack()
		},
		footerBtn() {
			if (this.isSite) {
				this.tipshow = true;
			}else{
				let data = { token: uni.getStorageSync('token'), id: this.id,phone:this.getInfo.phone,num: '1', address_id: this.getInfo.id };
				setOrder(data).then(res => {
					console.log('兑换', res);
					if(res.code==0){
						uni.setStorage({
							key:'OrderInfo',
							data:this.getData
						})
						uni.setStorage({
							key:'SiteInfo',
							data:this.getInfo
						})
				
						uni.navigateTo({
							url:'./dhcompleted'
						})
					}
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.tipAddress {
	padding: 40rpx;
	&-txt {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	&-btn {
		margin-top: 78rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		&-qx {
			margin-right: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
		}
		&-qr {
			// padding-left: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
}

.orderfooter /deep/ .orderfooter-left {
	text {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	text:nth-child(2) {
		font-size: 36rpx;
		margin-left: 8rpx;
		font-weight: bold;
		color: rgba(220, 42, 31, 1);
	}
}

.confirmOrder {
	// padding: 0 40rpx;
	&-isshow {
		display: flex;
		justify-content: space-between;
		padding: 40rpx;
		// box-shadow: 0px 0px 34px -25px #333;
	}
	&-user {
		padding: 0rpx 40rpx 0;
		&-address {
			display: flex;
			justify-content: space-between;
			&-text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.icon-iconfontjiantou5 {
			}
		}

		&-phone {
			padding-bottom: 26rpx;
			text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			&-name {
				margin-right: 42rpx;
			}

			&-number {
			}
		}
		&-line {
			width: 100%;
			// padding: 0 40rpx;
			height: 1rpx;
			background: rgba(238, 238, 238, 1);
		}
	}
	&-box {
		// width: 100%;
		// height:2rpx;
		// padding: 0 40rpx;
		padding-top: 48rpx;

		margin: 0 40rpx;

		// box-shadow:29px 69px 62px 40px #000;
		// background: red;
		&-n {
			border-radius: 10px;

			padding: 26rpx 36rpx 26rpx 30rpx;
			display: flex;
			background: rgba(255, 255, 255, 1);
			// box-shadow: 0px 0px 34px -25px #333;
			box-shadow: 0px 0px 8px 0px #eee;

			image {
				width: 230rpx;
				height: 180rpx;
				border-radius: 10px;
			}

			&-right {
				width: 100%;
				padding-left: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&-up {
					&-title {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						padding-bottom: 6rpx;
					}
					&-concent {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
						line-height: 36rpx;
					}
				}
				&-bottom {
					display: flex;
					justify-content: space-between;
					&-l {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(220, 42, 31, 1);
					}
					&-r {
						display: flex;
						align-items: center;
						padding: 5rpx 0;
						// &-jian {
						// 	width: 32rpx;
						// 	height: 32rpx;
						// }
						// &-jia
						// 	width: 32rpx;
						// 	height: 32rpx;
						// }
						image:nth-child(1) {
							width: 32rpx;
							height: 32rpx;
						}
						image:nth-child(3) {
							width: 32rpx;
							height: 32rpx;
						}
						text {
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							padding: 0 16rpx;
						}
					}
				}
			}
		}
	}
	&-tip {
		padding: 40rpx 40rpx 0 40rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
}
</style>
