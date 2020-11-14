<template>
	<view class="paySuccess">
		<Head :title="translate.paysucceed" @navigateBack="navigateBack"></Head>

		<view class="paySuccess-c">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
			
			<view class="paySuccess-c-title">
				<view class="paySuccess-c-title-name">
					{{translate.paysucceed}}
				</view>
				<view class="paySuccess-c-title-txt">
					{{translate.translateTip}}
				</view>
			</view>
			
			<view class="paySuccess-c-c">
				<view class="paySuccess-c-c-name">
					{{translate.staytranslate}}：
				</view>
				<view class="paySuccess-c-c-txt">
					据悉，双节假期，北京游客接待量、旅游总收入实
					现了同比双增长，登双节热门旅游城市榜首。外省
					来京游407.4万人次，较去年假期增长5.4%。                          
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
		computed:{
			translate(){
				return this.$t('translate')
			}
		},
		methods:{
			navigateBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.paySuccess-c{
		margin-top: 70rpx;
		padding: 0 40rpx;
		image{
			display: block;
			width: 195rpx;
			height: 195rpx;
			margin: auto;
		}
		&-title{
			text-align: center;
			&-name{
				padding-top: 48rpx;
				padding-bottom: 30rpx;
				font-size: $fontSize + 5;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-txt{
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
		&-c{
			&-name{
				padding-top: 80rpx;
				padding-bottom: 38rpx;
				font-size: $fontSize + 5;
				font-family: PingFang SC;
				font-weight: 500;
				color: #656565;
			}
			&-txt{
				
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
</style>
