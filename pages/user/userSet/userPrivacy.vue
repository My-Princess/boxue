<template>
	<view class="userPrivacy">
		<Head title="隐私设置" @navigateBack="navigateBack"></Head>
		<view class="userPrivacy-c">
			<view class="userPrivacy-c-item">
				<view class="userPrivacy-c-item-name">隐藏我的答题历史</view>
				<view class="userPrivacy-c-item-r">
					<template>
						<u-switch size="36" active-color="#DB1F13" v-model="lschecked"></u-switch>
					</template>
				</view>
			</view>
			
			<view class="userPrivacy-c-item">
				<view class="userPrivacy-c-item-name">隐藏我的收藏</view>
				<view class="userPrivacy-c-item-r">
					<template>
						<u-switch size="36" active-color="#DB1F13" v-model="scchecked"></u-switch>
					</template>
				</view>
			</view>
			
			<view class="userPrivacy-c-item">
				<view class="userPrivacy-c-item-name">隐藏我的社区</view>
				<view class="userPrivacy-c-item-r">
					<template>
						<u-switch size="36" active-color="#DB1F13" v-model="sqchecked"></u-switch>
					</template>
				</view>
			</view>
			
			<view class="userPrivacy-c-item">
				<view class="userPrivacy-c-item-name">隐藏我的成就</view>
				<view class="userPrivacy-c-item-r">
					<template>
						<u-switch size="36" active-color="#DB1F13" v-model="cjchecked"></u-switch>
					</template>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lschecked:false,
				scchecked:false,
				sqchecked:false,
				cjchecked:true
			};
		},
		methods:{
			navigateBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.userPrivacy-c{
	padding: 0 40rpx;
	&-item:nth-child(1) {
		// padding: 0;
		padding-top: 0;
	}
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eeeeee;
		padding: 25rpx 0;
		&-name {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-r {
			display: flex;
			text {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			.icon-youjiantou1 {
				font-size: 34rpx;
			}
			// width: 120rpx;
			// height: 120rpx;
		}
	}
}
</style>
