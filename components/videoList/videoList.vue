<template>
	<view>
		<view class="" v-if="videoList.length">
		<view class="complete-tab-box-sp-item" v-for="(item,index) in videoList" :key="item.id" @click="videoBtn(item.id)" >
			<view class="complete-tab-box-sp-item-left"><image src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}`" mode=""></image></view>
			<view class="complete-tab-box-sp-item-right">
				<view class="complete-tab-box-sp-item-right-title hidden">{{item.name}}</view>
				<view class="complete-tab-box-sp-item-right-text hidden">{{item.description}}</view>
				<view class="complete-tab-box-sp-item-right-bottom">
					<view>
						<!-- <text>9839人学过</text> -->
						<!-- <text class="complete-tab-box-sp-item-right-bottom-time">时长 37:12</text> -->
					</view>
					<text>￥{{item.money}}</text>
				</view>
			</view>
		</view>
		</view>
		<view class="blank" v-else>
			{{$t('commonality.videoEmply')}}
		</view>
	</view>
</template>

<script>
export default {
	props:{
		videoList:{
			type:Array,
			default:()=>{
				return []
			}
		}
	},
	data() {
		return {};
	},
	methods:{
		videoBtn(id){
			console.log(id)
			uni.navigateTo({
				url:`/pages/study/videoviewing?type=1&id=${id}`
			})
		}
	}
};
</script>

<style lang="scss">
	.blank{
		font-size: 28rpx;
		text-align: center;
		padding-top: 100rpx;
	}
.complete-tab-box-sp-item {
	width: 100%;
	display: flex;
	margin-bottom: 40rpx;
	&-left {
		width: 208rpx;
		height: 137rpx;
		padding-right: 31rpx;
		image {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
	&-right {
		flex: 1;
		// width: 100%;
		display: flex;
		flex-direction: column;
		&-title {
			// width: 295rpx;
			width: 60%;
			padding-top: 6rpx;
			padding-bottom: 10rpx;

			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: rgba(51, 51, 51, 1);
		}
		&-text {
			// width: 386rpx;
			width: 85%;
			// height: 24rpx;
			flex: 1;
			font-size: 22rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
		}
		&-bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding-top: 8rpx;
			text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(219, 31, 19, 1);
			}
			view {
				text {
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			&-time {
			}
		}
	}
}
</style>
