<template>
	<view class="result">
		<Head title="提现结果" @navigateBack="navigateBack"></Head>
		<view class="result-body">
			<view class="result-body-box">
				<view class="result-body-c">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
					<view class="result-body-c-name">
						提现申请成功
					</view>
					<view class="result-body-c-txt">
						预计12小时到账，提现申请24小时后未到账请联系客户。
					</view>
				</view>
			
			     <view class="result-body-list">
			     	<view class="result-body-list-item">
			     		<view class="result-body-list-item-l">
			     			到账微信
			     		</view>
						<view class="result-body-list-item-r">
							微信-晰
						</view>
			     	</view>
					<view class="result-body-list-item">
						<view class="result-body-list-item-l">
							提现金额
						</view>
						<view class="result-body-list-item-r">
							102.00元
						</view>
					</view>
			     </view>
			</view>
			<view class="result-body-btn">
				完成
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
			navigateBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.result-body{
	&-box{
		margin: 0 40rpx;
		box-shadow: 0 0 2px 0 #CACACA;
		
// opacity: 0.3;
		border-radius: 10rpx;
	}
	&-list{
		padding-top: 60rpx;
		margin: 0 40rpx;
		&-item{
			border-top: 1rpx solid #EEEEEE;
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;
			&-l{
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-r{
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
	&-c{
		padding-top: 60rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		image{
			display: block;
			width: 132rpx;
			height: 132rpx;
		}
		&-name{
			padding-top: 40rpx;
			padding-bottom: 20rpx;
			font-size: 48rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
		&-txt{
			
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
    &-btn{
		
		margin: auto;
		margin-top: 120rpx;
		width: 600rpx;
		height: 98rpx;
		background: #DC2A1F;
		border-radius: 49px;
		
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: $fontSize + 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}
}
</style>
