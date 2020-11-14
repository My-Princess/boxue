<template>
	<view class="submitRate">
		<Head title="提交成功"></Head>
		<view class="submitRate-c">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
			<view class="submitRate-c-name">提交成功</view>
			<view class="submitRate-c-txt">感谢您对本次翻译结果的点评</view>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.submitRate-c {
	text-align: center;
	image {
		// position: relative;
		// left: 50%;
		// transform: translateX(-50%);
		margin: auto;
		display: block;
		width: 192rpx;
		height: 192rpx;
	}
	&-name {
		padding: 50rpx 0 30rpx;
		font-size: 35rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	&-txt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
}

</style>
