<template>
	<view class="aboutlist">
		<view class="complete-tab-box-bx-item" >
			<view class="complete-tab-box-bx-item-left" :style="headImg"><image :src="MineData.image" mode=""></image></view>
			<view class="complete-tab-box-bx-item-right">
				<view class="complete-tab-box-bx-item-right-title hidden">{{MineData.name}}</view>
				<view class="complete-tab-box-bx-item-right-text">{{MineData.description}}</view>
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		headImg:{
			type:Object,
			default:()=>{
				return {width: '325rpx',height: '193rpx'}
			}
		},
		MineData:{
			type:Object,
			default:()=>{
				return {}
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
	.complete-tab-box-bx-item {
		display: flex;
			height: 193rpx;

			margin-bottom: 40rpx;
		&-left {
			// width: 325rpx;
			// height: 193rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius:10px;
			}

			margin-right: 24rpx;
		}

		&-right {

			&-title {
				padding-top: 8rpx;
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

				overflow : hidden;
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
				&-l {
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}

				&-r {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(219, 31, 19, 1);
				}
			}
		}
	}
</style>
