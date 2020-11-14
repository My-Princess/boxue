<template>
	<view class="withdraw">
		<Head title="提现" @navigateBack="navigateBack">
			<template v-slot:right>
				<view @click="walletRule">规则说明</view>
			</template>
		</Head>
		<view class="withdraw-box">
			<view class="withdraw-box-top">
				<text>到账微信</text><text>微信-晰</text>
			</view>
			<view class="withdraw-box-c">
				<view class="withdraw-box-c-name">
					提现金额
				</view>
				<view class="withdraw-box-c-money">
					<view class="withdraw-box-c-money-l">
						￥
					</view>
					<view class="withdraw-box-c-money-r">
						<input type="text" value="" />
					</view>
				</view>
				<view class="withdraw-box-c-line">
					
				</view>
				<!-- 提示 -->
				<text class="withdraw-box-c-tip">您当前账号余额为12元，需满100元可提现</text>
			    <!-- 提现 -->
				<view class="withdraw-box-c-btn" @click="withdrawResult">
					提现
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			withdrawResult(){
				uni.navigateTo({
					url:'./withdrawResult'
				})
			},
			walletRule(){
				uni.navigateTo({
					url:'./walletRule'
				})
			},
			navigateBack() {
				uni.navigateBack();
			},
		}
	}
</script>

<style lang="scss">
.withdraw-box{
	margin: 0 40rpx;
	box-shadow: 0 0 6px 0 #CACACA;
	border-radius: 10px;
	&-top{
		height: 124rpx;
		background: #F6F6F6;border-radius: 10px;
		// border-radius: 10px;
		padding-left: 20rpx;
		padding-top: 60rpx;
		text{
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		text:nth-child(2){
			margin-left: 20rpx;
			color: #2440B3;
		}
	}
	&-c{
			padding: 30rpx 20rpx 40rpx;
			
		&-name{
			
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-line{
			width: 100%;
			height: 1rpx;
			background: #EEEEEE;
			margin-bottom: 8rpx;
		}
		&-tip{
		
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #DB1F13;
		}
		&-btn{
			margin-top: 114rpx;
			
			width: 600rpx;
			height: 98rpx;
			background: #EEEEEE;
			border-radius: 50px;
			
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-money{
		     display: flex;
			 align-items: center;
			
			&-l{
				
				font-size: 72rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			&-r{
				flex: 1;
				input{
					width: 100%;
					height: 100%;
					
					
					font-size: 72rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
					// background: red;
				}
				
			}
		}
	}
}
</style>
