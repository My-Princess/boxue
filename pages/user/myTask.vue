<template>
	<view class="mytask">
		<Head title="我的作业" @navigateBack="navigateBack"></Head>
		<view class="mytask-tab">
			<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" :current="current" gutter="40" @change="change"></u-tabs>
		</view>
		<view class="mytask-body">
			<view class="mytask-body-c" v-if="ismytask">
				<view class="mytask-body-c-item">
					<v-collapse>
						<v-collapse-item nodeTop="2" :concent="concent[0]" :isPurchased="true">
							<template v-slot:content>
								<view class="collapse-son">
									<text class="collapse-son-size" @click="topic">第一课：你好</text>
									<view class="collapse-son-r">
										<text class="collapse-son-r-fraction">99分</text>
										<text class="collapse-son-r-icon"></text>
									</view>
								</view>
								<view class="collapse-son">
									<text class="collapse-son-size">第一课：你好</text>
									<view class="collapse-son-r">
										<text class="collapse-son-r-fraction">99分</text>
										<text class="collapse-son-r-icon" @click="download"></text>
									</view>
								</view>
							</template>
							<template v-slot:node>
								<view class="u-node" style="background: #19be6b;">
									<!-- 此处为uView的icon组件 -->
									<u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
						</v-collapse-item>
						<v-collapse-item :concent="concent[1]" nodeTop="2" :isPurchased="true" color="#00B281">
							<template v-slot:content></template>
							<template v-slot:node>
								<view class="u-node" style="background: #19be6b;">
									<!-- 此处为uView的icon组件 -->
									<u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
						</v-collapse-item>
					</v-collapse>
				</view>
			</view>
			<view class="mytask-body-wu" v-else>
				还没有购买任何课程
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ismytask:false,
			current: 0,
			concent: [{ title: '印尼语语法初级班', name: '已完成' }, { title: '印尼语语法中级班', name: '已完成50%' }],
			barStyle: {
				background: '#DB1F13'
			},
			list: [
				{
					name: '印尼语'
				},
				{
					name: '印尼语语法'
				},
				{
					name: '老挝语'
				},
				{
					name: '商务印尼语'
				}
			]
		};
	},
	methods: {
		change(index) {
			this.current = index;
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.collapse-son:first-child {
	padding-top: 38rpx;
}
.collapse-son {
	padding: 24rpx 0;
	// margin-right: 52rpx;
	border-bottom: 1rpx solid #eeeeee;
	// padding-left: 30rpx;
	position: relative;
	display: flex;
	width: 100%;
	// background: red;
	text {
		font-family: PingFang SC;
		font-weight: 500;
	}
	&-size {
		font-size: 30rpx;

		color: rgba(51, 51, 51, 1);
	}
	&-r {
		display: flex;
		position: absolute;
		right: 53rpx;
		&-fraction {
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(219, 122, 19, 1);
		}
		&-icon {
			display: block;
			width: 42rpx;
			height: 42rpx;
			margin-left: 20rpx;
			background: rgba(228, 228, 228, 1);
		}
	}

	&::before {
		content: '';
		width: 30rpx;
		height: 30rpx;
		background: rgba(255, 255, 255, 1);
		border: 2px solid rgba(238, 238, 238, 1);
		border-radius: 50%;
		// position: absolute;
		// top: 80rpx;
		// left: 4rpx;
		position: absolute;
		// top: 12rpx;
		left: -40rpx;
		transform-origin: 0;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		font-size: 24rpx;
		// border-left: 2px solid pink;
	}
}
.mytask{
	&-body{
		&-wu{
			text-align: center;
			margin-top: 100rpx;
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-c {
			margin-top: 48rpx;
			padding-left: 60rpx;
			.u-node {
				border-radius: 100rpx;
			}
			.u-node /deep/ .uicon-pushpin-fill {
				height: 42rpx;
				width: 42rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 100rpx;
			}
		}
	}
	
}
</style>
