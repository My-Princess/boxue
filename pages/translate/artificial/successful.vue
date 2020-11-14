<template>
	<view class="successful">
		<Head :title="translate.appointmentsuccss" @navigateBack="navigateBack">
			<template v-slot:right>
				<view @click="appointment">{{translate.order}}</view>
			</template>
		</Head>

		<view class="successful-c">
			<view class="successful-title">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
				<!-- 预约成功 -->
				<view class="successful-title-name">{{translate.appointmentsuccss}}</view>
				<view class="successful-title-txt">{{translate.appointmenttxt}}</view>
				<view class="successful-title-txt">{{translate.appointmenttxt1}}</view>
			</view>
			<view class="successful-list">
				<view class="successful-list-name">{{translate.appointmentConcent}}</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">{{translate.translartelanguage}}</view>
					<view class="successful-list-item-r">
						<view class="successful-list-item-r-box">
							<!-- <view class="languge-l">汉语</view>
							<view class="iconfont icon-qiehuan-"></view>
							<view class="languge-r">英语</view> -->
							{{artificialData.name}}
						</view>
					
					</view>
				</view>
<!-- 				<view class="successful-list-item">
					<view class="successful-list-item-name">翻译老师</view>
					<view class="successful-list-item-r"></view>
				</view> -->
				<!-- 联系方式 -->
				<view class="successful-list-item">
					<view class="successful-list-item-name">{{$t('index.contactWay')}}</view>
					<view class="successful-list-item-r">{{$t('commonality.phone')}} {{artificialData.phone}}</view>
				</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">{{translate.hsName}}</view>
					<view class="successful-list-item-r">{{artificialData.nickName}}</view>
				</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">{{translate.translateType}}</view>
					<view class="successful-list-item-r">{{artificialData.type}}</view>
				</view>
				<!-- 预约翻译时间 -->
				<view class="successful-list-item">
					<view class="successful-list-item-name">{{translate.translateTime}}</view>
					<view class="successful-list-item-r">{{artificialData.year}}  {{artificialData.time}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
 export default {
	data() {
		return {};
	},
	computed:{
		...mapState('user',['artificialData']),
		translate(){
			return this.$t('translate')
		}
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		appointment(){
			uni.navigateTo({
				url:'/pages/user/myOrder/myOrder'
			})
		},
	}
};
</script>

<style lang="scss">
.successful-c {
	position: relative;
}
.successful-list{
     padding: 60rpx 40rpx 0;
	&-name{
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		padding-bottom: 10rpx;
	}
	&-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25rpx 18rpx;
	    border-bottom: 1rpx solid #EEEEEE;
		&-name{
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
			
		}
		&-r{
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			&-box{
				display: flex;
				// justify-content: center;
				align-items: center;
				.icon-qiehuan-{
					font-size: 34rpx;
					padding: 0 8rpx;
				}
			}
		}
	}
}
.successful-title {
	image {
		display: block;
		width: 192rpx;
		height: 192rpx;
		background: #dc2a1f;
		border-radius: 50%;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	&-name {
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		text-align: center;
	}
	&-txt {
		padding-bottom: 6rpx;
		font-size: $fontSize - 2;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		text-align: center;
	}
}
</style>
