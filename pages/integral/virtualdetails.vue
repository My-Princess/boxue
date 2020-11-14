<template>
	<view class="virtualdetails">
		<Head :title="index.commoditydetails" @navigateBack="navigateBack"></Head>
		
		<view class="virtualdetails-top">
			<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${getData.image}`" mode=""></image>
			<view class="virtualdetails-top-title">{{ getData.title }}</view>
			<view class="virtualdetails-top-text">
				<text class="virtualdetails-top-text-jf">{{ getData.inventory }} {{index.integral}}</text>
				<text class="virtualdetails-top-text-kc">{{index.inventory}} {{ getData.integral }}</text>
			</view>
		</view>
		<view class="virtualdetails-concent">
			<u-parse :content="getData.content" />
			<!-- <image src="../../static/img/images/2_01.gif" mode=""></image> -->
		</view>
		<view class="virtualdetails-footer">
			<!-- 购买须知 -->
			<view class="virtualdetails-tip">
				<view class="virtualdetails-tip-title">{{index.hintTitle}}：</view>
				<text>{{index.BuyTxt}}</text>
			</view>
			<!-- 立即兑换 -->
			<view class="virtualdetails-ljdh" @click="conversion">{{index.conversion}}</view>
		</view>
		<!-- 兑换弹窗   -->
		<u-modal v-model="show" :show-title="false" :show-confirm-button="false">
			<view class="phone">
				<view class="phone-number">
					<view class="phone-number-name">{{$t('commonality.phone')}}</view>
					<input v-model="phonenum" type="text" value="" :placeholder="index.topUpPhone" />
				</view>
				<view class="phone-txt">{{index.confirmTip}}</view>
				<view class="phone-btn">
					<view class="phone-btn-qx" @click="cancel">{{$t('commonality.cancel')}}</view>
					<view class="phone-qr" @click="affirm">{{$t('commonality.confirm')}}</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
import { getDetails, setOrder } from '../../api/index.js';
import uParse from '@/components/gaoyia-parse/parse.vue'; //引入组件
export default {
	components: { uParse },
	data() {
		return {
			getData: {},
			show: false,
			phonenum: '',
			id: ''
		};
	},
	onLoad(options) {
		console.log(options);
		this.id = options.id;
		let data = { token: uni.getStorageSync('token'), id: this.id };
		getDetails(data).then(res => {
			console.log('详情', res);
			this.getData = res.data.goods;
		});
	},
	computed:{
		index(){
			return this.$t('index')
		}
	},
	methods: {
		navigateBack() {
			console.log('返回上级');
			uni.navigateBack()
			
		},
		// 取消
		cancel() {
			this.show = false;
		},
		// 确认
		affirm() {
			if (this.phonenum) {
				let data = { token: uni.getStorageSync('token'), id: this.id, num: '1', phone: this.phonenum,address_id:'1' };
				setOrder(data).then(res => {
					console.log('兑换', res);
					this.show = false
					uni.showToast({
						title: res.msg,
						
						icon: 'none'
					});
				});
			} else {
				uni.showToast({
					title: '填写手机号',
					icon: 'none'
				});
				return;
			}
		},
		// 立即兑换
		conversion() {
			this.show = true;
		}
	}
};
</script>

<style lang="less" scoped>
.virtualdetails {
	.phone {
		padding: 80rpx 30rpx 30rpx 60rpx;
		&-number {
			display: flex;
			// align-items: center;
			&-name {
				margin-bottom: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-right: 30rpx;
			}
			input {
				display: block;
				// width: 80%;
			}
			input::-webkit-input-placeholder {
				color: #999999;
			}
			input::-moz-placeholder {
				/* Mozilla Firefox 19+ */
				color: #999999;
			}
			input:-moz-placeholder {
				/* Mozilla Firefox 4 to 18 */
				color: #999999;
			}
			input:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: #999999;
			}
		}
		&-txt {
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 101, 92, 1);
		}
		&-btn {
			margin-top: 45rpx;
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

	&-top {
		padding: 0rpx 40rpx 0 40rpx;
		image {
			display: block;
			width: 100%;
			height: 560rpx;
			border-radius: 10px;
		}
		&-title {
			padding-top: 26rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: rgba(51, 51, 51, 1);
		}
		&-text {
			padding-bottom: 40rpx;
			text {
				font-family: PingFang SC;
				font-weight: 500;
			}
			&-jf {
				font-size: 28rpx;
				color: rgba(220, 42, 31, 1);
				margin-right: 21rpx;
			}
			&-kc {
				font-size: 22rpx;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
	&-concent {
		padding: 0 40rpx;
		image {
			width: 100%;
		}
	}
	&-tip {
		padding: 58rpx 40rpx 140rpx 40rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 40rpx;
	}
	&-ljdh {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 90rpx;
		background: rgba(220, 42, 31, 1);

		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
}
</style>
