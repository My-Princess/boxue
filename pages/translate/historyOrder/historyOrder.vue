<template>
	<view class="historyOrder">
		<Head :title="$t('translate.translatehistory')" @navigateBack="navigateBack"></Head>
		<view class="head">
			
		</view>
		<view class="historyOrder-c">
			<view class="historyOrder-list" v-if="true">
				<view class="historyOrder-item" @click="historyClick">
					<view class="historyOrder-item-title">
						<view class="historyOrder-item-title-l">代翻译内容</view>
						<view class="historyOrder-item-title-r">已提交</view>
					</view>
					<view class="historyOrder-item-c">
						据悉，双节假期，北京游客接待量、旅游总收入 实现了同比双增长，登双节热门旅游城市榜首。 外省来京游407.4万人次，较去年假期增长5.fdsafdafsad
					</view>
					<view class="historyOrder-item-line"></view>
					
				</view>
			
				<view class="historyOrder-footer">已没有更多订单</view>
			</view>
			<view class="historyOrder-tip" v-else>您还没有购买相关的日常快译</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		historyClick(){
			uni.navigateTo({
				url:'./historydefault'
			})
			
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss">
	.historyOrder-tip {
		text-align: center;
		margin-top: 100rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.historyOrder-footer {
		padding-top: 60rpx;
		text-align: center;
	}
.historyOrder-list {
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
	padding: 0 40rpx;
}
.historyOrder-item {
	margin-top: 40rpx;
	width: 100%;
	padding: 40rpx 25rpx 30rpx 25rpx;
	box-shadow: 0 0 6px 0 #eeeeee;
	border-radius: 10px;
	&-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 6rpx;

		&-l {
			font-size: $fontSize + 5;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			&-name{
				
				font-size: 35rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			&-teacher{
				margin-left: 40rpx;
				font-size: 35rpx;
				font-family: PingFang SC;
				font-weight: Medium;
				color: #333333;
			}
		}
		&-r {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: #db1f13;
		}
	}
	&-c {
		padding-top: 30rpx;
		padding-left: 6rpx;
		// margin-bottom: 40rpx;

		font-size: $fontSize - 2;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	&-line {
		margin-top: 40rpx;
		width: 100%;
		height: 1rpx;
		background: #eeeeee;
	}
	&-number {
		padding: 30rpx 0 6rpx;

		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	&-pay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-time {
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-pay {
			font-size: $fontSize + 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
	}
}

</style>
