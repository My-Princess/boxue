<template>
	<view class="dhcompleted">
		<Head :title="index.Confirmchange" @navigateBack="navigateBack"></Head>
		<view class="dhcompleted-concent">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
			<view class="dhcompleted-concent-text">
				{{index.Forcomplete}}
			</view>
		</view>
		<view class="dhcompleted-footer" @click="pointsdetails">
			{{index.ViewOrder}}
		</view>
	</view>
</template>

<script>


export default {
computed:{
	index(){
		return this.$t('index')
	}
},
	methods: {
		pointsdetails(){
			uni.navigateTo({
				url:'/pages/user/myOrder/myOrder'
			})
		},
		navigateBack(){
			nui.navigateBack()
		}
	}
	
};
</script>

<style lang="less" scoped>
	.dhcompleted{
		padding-top: 185rpx;
		width: 100vw;
		height: 100vh;
		position: relative;
		&-concent{
			padding-top: 40rpx;
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			image{
				width: 194rpx;
				height: 194rpx;
			}
			&-text{
				padding-top: 48rpx;
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
		}
		&-footer{
			position: absolute;
			left: 50%;
			bottom: 106rpx;
			transform: translateX(-50%);
			
			font-size:35rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(102,102,102,1);
		}
	}
</style>
