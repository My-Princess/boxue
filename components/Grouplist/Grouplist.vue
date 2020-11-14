<template>
	<view>
		<view class="group-League-item" @click="leagueDetail">
			<view class="group-League-item-img clearfix">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/yjfg.png" mode=""></image>
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
			</view>
			<view class="group-League-item-c">
				<view class="group-League-item-c-t">
					<view class="group-League-item-c-t-l">
						差
						<text>6</text>
						人成团
					</view>
					<view class="group-League-item-c-t-r">
						剩余
						<text>3天8小时</text>
					</view>
				</view>
				<view class="group-League-item-c-b">
					<slot name="number"></slot>
				</view>
			</view>
			<view class="group-League-item-btn">参团</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		leagueDetail(){
			this.$emit('click')
		}
	}
};
</script>

<style lang="scss">
.group-League-item {
	padding-top: 30rpx;
	padding-bottom: 20rpx;
	display: flex;
	align-items: center;
	border-bottom: 1rpx solid #eeeeee;
	// position: relative;
	&-img {
		display: flex;
		width: 160rpx;
		height: 76rpx;
		position: relative;
		image:first-child {
			position: absolute;
			left: 0;
		}
		image {
			display: block;
			position: absolute;
			left: 40rpx;
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
		}
		image:last-child {
			left: 80rpx;
		}
	}
	&-c {
		flex: 1;
		display: flex;
		justify-content: space-between;

		padding-right: 15rpx;
		&-t {
			display: flex;
			flex-direction: column;
			// justify-content: space-between;

			&-l {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				text {
					color: #dc2a1f;
				}
			}
			&-r {
				font-size: $fontSize - 8;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				text {
					color: #dc2a1fff;
				}
			}
		}
		&-b {
			display: flex;
			flex-direction: column;
			// justify-content: space-between;
			&-l {
				text-align: right;
				font-size: $fontSize - 8;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(203, 203, 203, 1);
				text-decoration: line-through;
			}
			&-r {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(220, 42, 31, 1);
			}
		}
	}
	&-btn {
		position: relative;
		right: 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90rpx;
		height: 40rpx;
		background: rgba(220, 42, 31, 1);
		border-radius: 20px;

		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
}
</style>
