<template>
	<view class="orderdetails">
		<Head :title="user.orderdeaulf" @navigateBack="navigateBack"></Head>
		<view class="orderdetails-c">
			<view class="orderdetails-c-box">
				<Order-box></Order-box>
			</view>
			<view class="orderdetails-c-list" v-if="type == 2">
				<!-- 订单状态 -->
				<view class="orderdetails-c-list-item1" v-if="OrderDetailData.logistics">
					<view class="orderdetails-c-list-item1-name">{{user.status}}：{{OrderDetailData.type}}</view>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
				<view class="orderdetails-c-list-item" v-if="!OrderDetailData.logistics">
					<view class="orderdetails-c-list-item-name">{{user.status}}：</view>
					<view class="orderdetails-c-list-item-txt">{{OrderDetailData.type}}</view>
				</view>
				<!-- 订单编号 -->
				<view class="orderdetails-c-list-item" >
					<view class="orderdetails-c-list-item-name">{{user.ordernum}}：</view>
					<view class="orderdetails-c-list-item-txt">{{OrderDetailData.order_no}}</view>
				</view>
				<!-- 下单时间 -->
				<view class="orderdetails-c-list-item">
					<view class="orderdetails-c-list-item-name">{{user.ordertime}}：</view>
					<view class="orderdetails-c-list-item-txt">{{OrderDetailData.create_time}}</view>
				</view>
			</view>
			
			<view class="orderdetails-c-list" v-if="type == 1">
					<!-- 订单编号 -->
				<view class="orderdetails-c-list-item">
					<view class="orderdetails-c-list-item-name">{{user.ordernum}}：</view>
					<view class="orderdetails-c-list-item-txt">.303568</view>
				</view>
				<!-- 下单时间 -->
				<view class="orderdetails-c-list-item">
					<view class="orderdetails-c-list-item-name">{{user.ordertime}}：</view>
					<view class="orderdetails-c-list-item-txt">2020.02.29  15:24</view>
				</view>
				<!-- 支付方式 -->
				<view class="orderdetails-c-list-item">
					<view class="orderdetails-c-list-item-name">{{commonality.pay}}：</view>
					<view class="orderdetails-c-list-item-txt">{{commonality.paywx}}</view>
				</view>
				<!-- <view class="orderdetails-c-list-item"> -->
					<!-- <view class="orderdetails-c-list-item-name">支付优惠：</view> -->
					<!-- <view class="orderdetails-c-list-item-txt">微信</view> -->
				<!-- </view> -->
				<!-- 优惠券 -->
				<view class="orderdetails-c-list-item1">
					<view class="orderdetails-c-list-item1-name">{{user.coupons}}</view>
					<view class="orderdetails-c-list-item1-txt">￥100.00</view>
				</view>
				<!-- 积分 -->
				<view class="orderdetails-c-list-item1">
					<view class="orderdetails-c-list-item1-name">{{commonality.integral}}</view>
					<view class="orderdetails-c-list-item1-txt">￥100.00</view>
				</view>
				<!-- 优惠 -->
				<view class="orderdetails-c-list-item1">
					<view class="orderdetails-c-list-item1-name">{{commonality.discounts}}</view>
					<view class="orderdetails-c-list-item1-txt">￥100.00</view>
				</view>
				<!-- <view class="orderdetails-c-list-item1">
					<view class="orderdetails-c-list-item1-name">拼团优惠</view>
					<view class="orderdetails-c-list-item1-txt">￥100.00</view>
				</view> -->
				<!-- 分界线 -->
				<view class="orderdetails-c-list-line"></view>
				<!-- 实付 -->
				<view class="orderdetails-c-list-pay">
					{{commonality.netPay}}：￥1099
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getOrderDetail } from '@/api/index.js'
	export default {
		data() {
			return {
				type:'',
				id:'',
				OrderDetailData:{}
			};
		},
		onLoad(options) {
			this.type = options.type
			this.id = options.id
			this.OrderDetail()
		},
		computed:{
			user(){
				return this.$t('user')
			},
			commonality(){
				return this.$t('commonality')
			}
			
		},
		methods:{
			// 积分详情
			OrderDetail(){
				let data = {token: uni.getStorageSync('token'), id: this.id}
				getOrderDetail(data).then(res=>{
				  console.log(res)	
				  this.OrderDetailData = res.data
				})
			
			},
			navigateBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.orderdetails-c{
		padding-top: 114rpx;
	}
.orderdetails-c-list{
	margin: 40rpx 40rpx 0;
	padding: 40rpx 30rpx;
	    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
border-radius: 10px;
    &-item:nth-child(1){
		padding-top: 0;
	}
	&-item{
		display: flex;
		padding: 20rpx 0;
		font-size: $fontSize - 4;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		&-name{}
		&-txt{}
	}
	&-item1{
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-name{
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-txt{
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: bold;
			color: #DB1F13;
		}
	}
	&-line{
		width: 100%;
		height: 1rpx;
		background: #EEEEEE;
	}
	&-pay{
		padding-top: 20rpx;
		text-align: right;
		font-size: $fontSize + 2;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}
}
</style>
