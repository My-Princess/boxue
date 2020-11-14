<template>
	<view class="useraccount">
		<Head :title="user.Settings" @navigateBack="navigateBack"></Head>
		<view class="useraccount-c">
			<view class="useraccount-c-item" @click="ChangePwd">
				<!-- 修改密码  -->
				<view class="useraccount-c-item-name">{{user.changepaw}}</view>
				<view class="useraccount-c-item-r">
				
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
			<!-- 绑定微信  -->
			<view class="useraccount-c-item">
				<view class="useraccount-c-item-name">{{user.BindingWx}}</view>
				<view class="useraccount-c-item-r">
					<!-- 未绑定{{user.notBound}} -->
					<text>{{user.notBound}}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
		</view>
	     <view class="useraccount-btn">
	     	 <view class="useraccount-btn-txt">
	     	        {{user.cancelchangewx}}
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
			},
			ChangePwd(){
				uni.navigateTo({
					url:'/pages/login/changePwd'
				})
			}
		},
		computed:{
			user(){
				return this.$t('user')
			}
		},
		
		
	}
</script>

<style lang="scss">
	.useraccount-btn{
		display: flex;
		margin-top: 120rpx;
		justify-content: center;
		&-txt{
			display: flex;
			justify-content: center;
			align-items: center;
			
			width: 440rpx;
			height: 80rpx;
			border: 1rpx solid #EEEEEE;
			background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 100%);
			border-radius: 40px;
			
			
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
.useraccount-c{
	padding: 0 40rpx;
	&-item:nth-child(1) {
		// padding: 0;
		padding-top: 0;
	}
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eeeeee;
		padding: 25rpx 0;
		&-name {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-r {
			display: flex;
			text {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			.icon-youjiantou1 {
				font-size: 34rpx;
			}
			// width: 120rpx;
			// height: 120rpx;
		}
	}
}
</style>
