<template>
	<view class="u-time-axis-item">
		<!-- <view class="collapse-item-content"> -->
		<!-- v-for="(item, i) in concent" :key="i" -->
		<view class="collapse-item-content-item">
			<view class="collapse-item-content-title">
				{{ concent.class_name }}
				<text v-if="!concent.questions.length">暂无套题</text>
				<!-- <text v-if="!concent.questions.length" :style="'color:' + color">暂无套题</text> -->
			</view>
			<view class="" v-if="isconcentchile"><slot name="content"></slot></view>
		</view>
		<!-- </view> -->

		<view class="u-time-axis-node" :style="[nodeStyle]" @click="iconBtn">
			<slot name="node"><view class="u-dot"></view></slot>
		</view>
	</view>
</template>

<script>
/**
 * timeLineItem 时间轴Item
 * @description 时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。(搭配u-time-line使用)
 * @tutorial https://www.uviewui.com/components/timeLine.html
 * @property {String} bg-color 左边节点的背景颜色，一般通过slot内容自定义背景颜色即可（默认#ffffff）
 * @property {String Number} node-top 节点左边图标绝对定位的top值，单位rpx
 * @example <u-time-line-item node-top="2">...</u-time-line-item>
 */
export default {
	props: {
		// 节点的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 节点左边图标绝对定位的top值
		nodeTop: {
			type: [String, Number],
			default: ''
		},
		concent: {
			type: [Array, Object]
		},
		isPurchased: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: '#DB1F13'
		}
	},
	data() {
		return {
			isconcentchile: true
		};
	},
	mounted() {
		// console.log('11',content)
	},
	computed: {
		nodeStyle() {
			let style = {
				backgroundColor: this.bgColor
			};
			if (this.nodeTop != '') style.top = this.nodeTop + 'rpx';
			return style;
		}
	},
	methods: {
		iconBtn() {
			console.log('触发了宝贝');
			this.isconcentchile = !this.isconcentchile;
		}
	}
};
</script>

<style lang="scss" scoped>
// @import "../../libs/css/style.components.scss";

.u-time-axis-item {
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	margin-bottom: 32rpx;
}
.collapse-item-content-title {
	position: relative;
	// display: flex;
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
	text {
		// text-align: right;
		// display: block;
		// display: flex;
		// justify-content: flex-end;
		// align-items: center;
		position: absolute;
		right: 52rpx;
		top: 50%;
		transform: translateY(-50%);
		color: #666;
		font-size: 26rpx;
		font-family: PingFang SC;
		// font-weight: bold;
		// color:rgba(219,31,19,1);
	}
}

.u-time-axis-node {
	position: absolute;
	top: 12rpx;
	left: -40rpx;
	transform-origin: 0;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	font-size: 24rpx;
}

.u-dot {
	height: 42rpx;
	width: 42rpx;
	border-radius: 100rpx;
	background: #ddd;
}
</style>
