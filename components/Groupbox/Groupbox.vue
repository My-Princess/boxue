<template>
	<view>
		<view class="group-box">
			<view class="group-box-item">
				<view class="group-box-item-left"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zs.png" mode=""></image></view>
				<view class="group-box-item-right">
					<view class="group-box-item-right-title hidden">缅甸语基础之音标知多少东西</view>
					<view class="group-box-item-right-text">课程介绍什么的介绍课程介绍课程 介绍课程介绍课程介绍课程介绍什么的</view>
					<view class="group-box-item-right-bottom"><text class="group-box-item-right-bottom-r">￥ 79</text></view>
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
		}
	}
</script>

<style lang="scss">
	.group-box {
		padding: 0 40rpx;
		margin-bottom: 30rpx;
		&-item {
			display: flex;
			&-left {
				width: 230rpx;
				height: 180rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}

				margin-right: 24rpx;
			}

			&-right {
				&-title {
					padding-top: 10rpx;
					padding-bottom: 10rpx;
					width: 295rpx;

					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: rgba(51, 51, 51, 1);
				}

				&-text {
					width: 322rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
					// line-height: 32rpx;

					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&-bottom {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					padding-top: 26rpx;
					&-r {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(219, 31, 19, 1);
					}
				}
			}
		}
	}
</style>
