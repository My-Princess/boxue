<template>
	<view class="groupsuccess">
		<Head title="支付成功"></Head>
		<view class="groupsuccess-box">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
			<view class="groupsuccess-box-title">
				支付成功
			</view>
			<view class="groupsuccess-box-txt" @click="league">
				观看课程详情
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
			league(){
				uni.navigateTo({
					url:'./league'
				})
			}
		}
	}
</script>

<style lang="scss">
.groupsuccess{
	&-box{
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
		image{
			display: block;
			width: 194rpx;
			height: 194rpx;
		}
		&-title{
			margin-top: 48rpx;
			margin-bottom: 60rpx;
			font-size:$fontSize + 5;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
		&-txt{
			font-size:$fontSize + 5;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
}
</style>
