<template>
	<view class="walletRule">
		<Head title="提现规则说明" @navigateBack="navigateBack"></Head>
		<view class="walletRule-c">
			<view class="walletRule-c-name">
				提现规则
			</view>
			<text>
				 1、每满100即可体现，不满100不可提现 
				 2、每天体现金额不能超过1000 
				 3、暂不支持充值功能 
				 4、只能提现到微信（具体看公账支持） 
				 5、每次提现只能为100的整数倍（目前考虑账户余额增加积极性，具体实施需敲定）
			</text>
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
.walletRule-c{
	padding: 0 40rpx;
	&-name{
		
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	text{
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
}
</style>
