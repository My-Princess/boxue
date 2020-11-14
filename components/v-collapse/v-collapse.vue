<template>
	<view class="v-collapse">
		<slot />
	</view>
</template>

<script>
	/**
	 * timeLine 时间轴
	 * @description 时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。
	 * @tutorial https://www.uviewui.com/components/timeLine.html
	 * @example <u-time-line></u-time-line>
	 */
	export default {
		name: "v-collapse",
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.v-collapse {
		padding-left: 40rpx;
		position: relative;
	}

	.v-collapse::before {
		content: "";
		position: absolute;
		left: 0;
		top: 12rpx;
		width: 1px;
		bottom: 0;
		
		border-left: 1px solid #EEEEEE;
		transform-origin: 0 0;
		transform: scaleX(0.5);
	}
</style>
