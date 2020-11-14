<template>
	<view class="praiseList">
		<Head title="赞我的人"></Head>
		<view class="praiseList-c">
			<view class="praiseList-c-item">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
				<view class="praiseList-c-item-c">
					<view class="praiseList-c-item-c-t">
						某本周末网友
					</view>
					<view class="praiseList-c-item-c-b">
						2020-07-08
					</view>
				</view>
				<view class="praiseList-c-item-btn">
					{{isFocus ? '已互粉' : '互粉' }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFocus:1,
			};
		}
	}
</script>

<style lang="scss">
.praiseList-c{
	padding: 0 40rpx;
	
	&-item{
		padding: 30rpx 0;
		border-bottom: 1rpx solid #EEEEEE;
		display: flex;
		align-items: center;
		image{
			display: block;
			width: 80rpx;
			height: 80rpx;
		}
		&-c{
			margin-left: 20rpx;
			margin-right: 50rpx;
			flex: 1;
			&-t{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			&-b{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
		&-btn{
			width: 130rpx;
			height: 42rpx;
			background: #FFFFFF;
			border: 1rpx solid #999999;
			border-radius: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			
			color: #333333;
			font-size: $fontSize - 6;
			
		}
	}
}
</style>
