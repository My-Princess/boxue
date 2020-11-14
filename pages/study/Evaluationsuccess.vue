<template>
	<view class="success">
		<Head :title="comm.subSuccess" @navigateBack="navigateBack"></Head>
		<view class="success-box">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode="aspectFill"></image>
			<view class="success-box-title">{{comm.subSuccess}}</view>
			<view class="success-box-txt">{{study.review}}</view>
		</view>
		<view class="Continue" @click="Continue">{{study.Continue}}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id:''
		};
	},
	onLoad(options) {
		console.log(options.id)
		this.id = options.id
	},
	computed:{
		comm(){
			return this.$t('commonality')
		},
		study(){
			return this.$t('study')
		}
	},
	methods: {
		Continue(){
			uni.navigateTo({
				url:`/pages/study/videoviewing?id=${this.id}`
			})
		},
		navigateBack() {
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="scss" scoped>
.Continue {
	position: fixed;
	// width: 100%;
	left: 50%;
	bottom: 70rpx;
	transform: translateX(-50%);

	font-size: $fontSize - 2;
	font-family: PingFang SC;
	font-weight: bold;
	color: #dc2a1f;
}
.success-box {
	margin-top: 50rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;
	image {
		display: block;
		width: 194rpx;
		height: 194rpx;
	}
	&-title {
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		font-size: $fontSize + 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	&-txt {
		font-size: $fontSize - 2;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
