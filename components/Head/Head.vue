<template>
	<view class="">
		<!-- #ifdef H5 -->
		<view class="integral-top" :style="styles">
			<view class="iconfont icon-zuojiantou" @click="navigateBack"></view>
			<view class="integral-top-title">{{ title }}</view>
			<view class="integral-top-r"><slot name="right"></slot></view>
		</view>
		<view class="head"></view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="head-mp">
			
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false
		},
		styles: {
			type: Object,
			default: () => {
				return { background: '#fff' };
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		navigateBack() {
			console.log('返回上级');
			this.$emit('navigateBack');
		}
	}
};
</script>

<style lang="less" scoped>
	.head-mp{
		padding-top: 20rpx;
	}
.integral-top {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	// width: 100vw;
	// background: red;
	box-sizing: border-box;
	padding: 0 40rpx;

	// position: relative;
	display: flex;
	align-items: center;
	// width: 100%;

	padding-top: 30rpx;
	padding-bottom: 20rpx;
	z-index: 999;

	.icon-zuojiantou {
		// width: 23rpx;
		// height: 42rpx;
		font-size: 60rpx;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	&-title {
		// width: 100%;
		// width: 100%;
		box-sizing: border-box;
		// display: flex;
		// justify-content: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		font-size: 35rpx;
		font-family: PingFang SC;
		font-weight: 500;
		// color: rgba(51, 51, 51, 1);
		color: #333;
		// transform: translateX(-23rpx);
	}
	&-r {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		// position: absolute;
		// right: 0;
		// bottom: 0;
	}
}
</style>
