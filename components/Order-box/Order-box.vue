<template>
	<view>
		<view class="myorder-list-item" @click="orderDetail" v-for="(item,index) in orderList" :key="item.class_iid"> 
			<view class="myorder-list-item-name">订单编号：{{item.order_sn}}</view>
			<view class="myorder-list-item-c">
				<view class="myorder-list-item-c-img"><image :src="item.image" mode=""></image></view>
				<view class="myorder-list-item-c-r">
					<view class="myorder-list-item-c-r-name hidden">{{item.class_name}}</view>
					<view class="myorder-list-item-c-r-txt twohidden">{{item.description}}</view>
					<view class="myorder-list-item-c-r-time">{{item.createTime}}</view>
				</view>
			</view>
		
			<view class="myorder-list-item-footer">
				<!-- <view class="myorder-list-item-footer-l">7人团</view> -->
				<view class="myorder-list-item-footer-r">实付：￥{{item.money}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			orderList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			orderDetail(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.myorder-list-item {
		margin: 40rpx 40rpx 0;
		padding: 30rpx 18rpx 30rpx 30rpx;
		// box-shadow: 0 0 2px 2px #999999;
		box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
		background: #ffffff;
		border-radius: 10px;
		&-name {
			padding-bottom: 20rpx;
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-c {
			display: flex;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #eeeeee;
			// justify-content: space-between;

			&-img {
				padding-right: 20rpx;
				width: 250rpx;
				height: 180rpx;
				image {
					display: block;
					width: 100%;
					height: 100%;

					background: #ffffff;
					border-radius: 10px;
				}
			}

			&-r {
				width: 350rpx;

				// margin-left: 20rpx;
				// flex: 1;
				&-name {
					padding-top: 6rpx;
					padding-bottom: 14rpx;
					font-size: $fontSize - 4;
					font-family: PingFang SC;
					font-weight: 800;
					color: #333333;
				}
				&-txt {
					flex: 1;
					font-size: $fontSize - 4;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				&-time {
					padding-top: 20rpx;
					font-size: $fontSize - 8;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
			}
		}
		&-footer {
			display: flex;
			align-items: center;
			&-l {
				margin-top: 18rpx;
				width: 132rpx;
				height: 52rpx;
				background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/annei.png);
				background-size: 132rpx 52rpx;
				color: #ffffff;
				font-size: $fontSize - 2;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			&-r {
				padding-top: 30rpx;
				flex: 1;
				text-align: right;

				font-size: $fontSize + 2;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
			}
		}
	}
</style>
