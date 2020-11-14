<template>
	<view class="coupon">
		<Head :title="user.coupons" @navigateBack="navigateBack"></Head>
		<view class="coupon-tab">
			<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" :current="current" :is-scroll="false" @change="change"></u-tabs>
		</view>
		<view class="coupon-body">
			<view class="coupon-body-active" v-if="current == 0">
				<view class="coupon-body-c">
					<view class="coupon-body-c-item" v-for="(item,i) in couponData.list" :key="item.id">
						<view class="coupon-body-c-item-l">
							<view class="coupon-body-c-item-l-name">{{item.name}}</view>
							<view class="coupon-body-c-item-l-time">有效期至{{item.endTime}}</view>
						</view>
						<view class="coupon-body-c-item-r">
							<view class="coupon-body-c-item-r-fh">￥</view>
							<view class="coupon-body-c-item-r-money">{{item.money}}</view>
						</view>
					</view>


					<view class="coupon-tip">已没有更多优惠券</view>
				</view>
				<view class="coupon-body-wu" v-if="false">没有可以使用的优惠券</view>
			</view>

			<view class="coupon-body-active" v-if="current == 1">
				<view class="coupon-body-c1">

					<view class="coupon-body-c1-item" v-for="(item,i) in couponData.list" :key="item.id">
						<view class="coupon-body-c-item-l">
							<view class="coupon-body-c-item-l-name">{{item.name}}</view>
							<view class="coupon-body-c-item-l-time">有效期至{{item.endTime}}</view>
						</view>
						<view class="coupon-body-c-item-r">
							<view class="coupon-body-c-item-r-fh">￥</view>
							<view class="coupon-body-c-item-r-money">{{item.money}}</view>
						</view>
					</view>
					<view class="coupon-tip">已没有更多优惠券</view>
				</view>
				<view class="coupon-body-wu" v-if="false">没有可以使用的优惠券</view>
			</view>

			<view class="coupon-body-active" v-if="current == 2">
				<view class="coupon-body-c2">
					<view class="coupon-body-c2-item" v-for="(item,i) in couponData.list" :key="item.id">
						<view class="coupon-body-c-item-l">
							<view class="coupon-body-c-item-l-name">{{item.name}}</view>
							<view class="coupon-body-c-item-l-time">有效期至{{item.endTime}}</view>
						</view>
						<view class="coupon-body-c-item-r">
							<view class="coupon-body-c-item-r-fh">￥</view>
							<view class="coupon-body-c-item-r-money">{{item.money}}</view>
						</view>
					</view>
					<view class="coupon-tip">已没有更多优惠券</view>
				</view>
				<view class="coupon-body-wu" v-if="false">没有可以使用的优惠券</view>
			</view>
		</view>
	</view>
</template>

<script>
import { couponList } from '@/api/user.js';
export default {
	data() {
		return {
			current: 0,
			type: 1,
			page: 1,
			barStyle: {
				background: '#DB1F13'
			},
			couponData:[],
			list: [
				{
					name: '未使用'
				},
				{
					name: '已使用'
				},
				{
					name: '已过期'
				}
			]
		};
	},
	onLoad() {
		this.getCouponList()
	},
	computed:{
		user(){
			return this.$t('user')
		}
	},
	methods: {
		async getCouponList() {
			let data = { token: uni.getStorageSync('token'), type: this.type, page: this.page };
			let res = await couponList(data)
			console.log(res)
			this.couponData = res.data
		},
		change(index) {
			console.log(index)
			this.current = index;
			this.type = index + 1;
			this.getCouponList()
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.coupon-tip {
	text-align: center;
	// margin: 60rpx auto !important;
	font-size: $fontSize - 6;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
	margin-top: 60rpx;
}
.coupon-body {
	&-c {
		padding: 0 40rpx;
		&-item:nth-child(1) {
			margin-top: 40rpx;
		}
		&-item {
			margin-top: 30rpx;
			width: 100%;
			height: 225rpx;
			background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/coupon.png) no-repeat;
			background-size: 100% 225rpx;
			position: relative;
			display: flex;
			justify-content: space-between;
		}
	}
	&-c1 {
		padding: 0 40rpx;
		&-item:nth-child(1) {
			margin-top: 40rpx;
		}
		&-item {
			margin-top: 30rpx;
			width: 100%;
			height: 225rpx;
			background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ysycoupon.png) no-repeat;
			background-size: 100% 225rpx;
			position: relative;
			display: flex;
			justify-content: space-between;
		}
	}
	&-c2 {
		padding: 0 40rpx;
		&-item:nth-child(1) {
			margin-top: 40rpx;
		}
		&-item {
			margin-top: 30rpx;
			width: 100%;
			height: 225rpx;
			background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ygqcoupon.png) no-repeat;
			background-size: 100% 225rpx;
			position: relative;
			display: flex;
			justify-content: space-between;
		}
	}
	.coupon-body-c-item-l {
		padding-top: 50rpx;
		padding-left: 40rpx;
		font-family: PingFang SC;
		color: #ffffff;
		&-name {
			font-size: $fontSize + 15;

			font-weight: bold;
		}
		&-time {
			padding-top: 15rpx;
			font-size: $fontSize;

			font-weight: 500;
		}
	}
	.coupon-body-c-item-r {
		// position: relative;
		// position: absolute;
		padding-top: 30rpx;
		padding-right: 46rpx;
		font-family: PingFang SC;
		color: #ffffff;
		overflow: hidden;
		&-fh {
			position: absolute;
			right: 228rpx;
			// text-align: left;
			font-size: $fontSize;
			font-weight: 500;
		}
		&-money {
			position: absolute;
			top: 50rpx;
			left: 430rpx;
			font-size: 107rpx;
			font-weight: bold;
		}
	}
	&-wu {
		text-align: center;
		margin-top: 60rpx;
		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
}
</style>
