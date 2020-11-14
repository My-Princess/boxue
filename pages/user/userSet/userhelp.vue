<template>
	<view class="userhelp">
		<Head :title="user.feedback" @navigateBack="navigateBack"></Head>
		<view class="userhelp-c">
			<!-- 操作手册 -->
			<navigator url="/pages/service/manual" class="userhelp-c-list">
				<view class="userhelp-c-item" @click="operation">
					<view class="userhelp-c-item-name">{{user.manual}}</view>
					<view class="userhelp-c-item-r"><view class="iconfont icon-youjiantou1"></view></view>
				</view>
			</navigator>
			<!-- 意见反馈 -->
			<navigator url="/pages/service/feedback" class="userhelp-c-list">
				<view class="userhelp-c-item">
					<view class="userhelp-c-item-name">{{user.opinion}}</view>
					<view class="userhelp-c-item-r"><view class="iconfont icon-youjiantou1"></view></view>
				</view>
			</navigator>
			<!-- 常见问题 -->
			<navigator url="/pages/service/commonproble" class="userhelp-c-list">
				<view class="userhelp-c-item">
					<view class="userhelp-c-item-name">{{user.issue}}</view>
					<view class="userhelp-c-item-r"><view class="iconfont icon-youjiantou1"></view></view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	},
	computed:{
		user(){
			return this.$t('user')
		}
	}
};
</script>

<style lang="scss">
.userhelp-c {
	padding: 0 40rpx;
	&-list{
		padding-top: 25rpx;

	}
	&-item:nth-child(1) {
		padding-top: 0;
	}
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eeeeee;
		padding-bottom: 25rpx;
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
