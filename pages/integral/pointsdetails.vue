<template>
	<view class="pointsdetails">
		<Head :title="index.commoditydetails" @navigateBack="navigateBack"></Head>

		<view class="pointsdetails-top">
			<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${getData.image}`" mode=""></image>
			<view class="pointsdetails-top-title">{{ getData.title }}</view>
			<view class="pointsdetails-top-text">
				<text class="pointsdetails-top-text-jf">{{ getData.inventory }} {{ index.integral }}</text>
				<!-- 库存 -->
				<text class="pointsdetails-top-text-kc">{{ index.inventory }} {{ getData.integral }}</text>
			</view>
		</view>
		<view class="pointsdetails-concent">
			<u-parse :content="getData.content" />
			<!-- <image src="../../static/img/images/2_01.gif" mode=""></image> -->
		</view>
		<view class="pointsdetails-footer">
			<view class="pointsdetails-tip">
				<!-- 购买须知 -->
				<view class="pointsdetails-tip-title">{{ index.hintTitle }}：</view>
				<text>{{ index.commodityTxt }}</text>
			</view>
			<!-- 立即兑换  -->
			<view class="pointsdetails-ljdh" @click="confirmOrder">{{ index.conversion }}</view>
		</view>
	</view>
</template>

<script>
import { getDetails } from '@/api/index.js';
import uParse from '@/components/gaoyia-parse/parse.vue'; //引入组件
export default {
	components: { uParse },
	data() {
		return {
			getData: {}
		};
	},
	onLoad(options) {
		// console.log(options)

		let data = { token: uni.getStorageSync('token'), id: options.id };
		getDetails(data).then(res => {
			this.getData = res.data.goods;
		});
	},
	computed: {
		index() {
			return this.$t('index');
		}
	},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		// 立即兑换
		confirmOrder() {
			let id = this.getData.id;
			uni.navigateTo({
				url: `./confirmOrder?id=${id}`
			});
		}
	}
};
</script>

<style lang="less" scoped>
.pointsdetails {
	&-top {
		padding: 0rpx 40rpx 0 40rpx;
		image {
			display: block;
			width: 100%;
			height: 560rpx;
			border-radius: 10px;
		}
		&-title {
			padding-top: 26rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: rgba(51, 51, 51, 1);
		}
		&-text {
			padding-bottom: 40rpx;
			text {
				font-family: PingFang SC;
				font-weight: 500;
			}
			&-jf {
				font-size: 28rpx;
				color: rgba(220, 42, 31, 1);
				margin-right: 21rpx;
			}
			&-kc {
				font-size: 22rpx;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
	&-concent {
		padding: 0 40rpx;
		image {
			width: 100%;
		}
	}
	&-tip {
		padding: 58rpx 40rpx 140rpx 40rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 40rpx;
	}
	&-ljdh {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 90rpx;
		background: rgba(220, 42, 31, 1);

		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
}
</style>
