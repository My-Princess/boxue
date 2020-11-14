<template>
	<view class="pointsdetails" >
		<Head :title="user.integralRule" @navigateBack="navigateBack"></Head>

		<view class="pointsdetails-concent">
			<view class="pointsdetails-concent-item">
				<!-- 获得积分 -->
				<view class="pointsdetails-concent-item-title">{{user.gainintegral}}</view>
				<text class="pointsdetails-concent-item-txt">
					{{user.integraltxt}}
				</text>
			</view>
			<view class="pointsdetails-concent-item1">
				<view class="pointsdetails-concent-item1-title">{{user.integralDeduction}}</view>
				<text class="pointsdetails-concent-item1-txt">{{user.DeductionTxt}}</text>
			</view>
		</view>
	</view>
</template>

<script>
// import Head from '../../components/navigation.vue';
export default {
	// components: { Head },
	data() {
		return {};
	},
	computed:{
		user(){
		  return this.$t('user')
		}
	},
	methods: {
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="less" scoped>
.pointsdetails {
	&-concent {
		padding: 0 40rpx;
		&-item {
			
			&-title {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				padding-bottom: 26rpx;
			}
			&-txt {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
			}
		}
		&-item1 {
			padding-top: 60rpx;
			&-title {
				padding-bottom: 26rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-txt {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
			}
		}
	}
}
</style>
