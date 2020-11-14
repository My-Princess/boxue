<template>
	<view class="translate">
		<Head :title="translate.mytranslate" @navigateBack="navigateBack">
			<template v-slot:right>
				<view>{{translate.explain}}</view>
			</template>
		</Head>
	
		<view class="translate-c">
			<view class="translate-c-everyday" @click="tipEveryday">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/everyday%402x.png" mode=""></image>
			</view>
			<view class="translate-c-artificial" @click="tipArtificial">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/artificial%402x.png" mode=""></image>
			</view>
			<view class="translate-c-artificial" @click="immediate">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/jisshitranslate.png" mode=""></image>
			</view>
		</view>
		<view class="translate-foorter">
			<!-- 翻译订单 -->
			<text>{{translate.translateOrder}}</text>
			<!-- 翻译历史 -->
			<text @click="historyOrder">{{translate.translatehistory}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			translate(){
				return this.$t('translate')
			}
		},
		methods:{
			// 日常快择
			tipEveryday(){
				uni.navigateTo({
					url:'./everyday/everyday'
				})
			},
			tipArtificial(){
				uni.navigateTo({
					url:'./artificial/artificial'
				})
			},
			historyOrder(){
				uni.navigateTo({
					url:'./historyOrder/historyOrder'
				})
			},
			immediate(){
				uni.navigateTo({
					url:'./immediate/immediate'
				})
			},
			navigateBack(){
				uni.navigateBack()
			}
			
		}
	}
</script>

<style lang="scss">
.translate-c{
	padding:0rpx 55rpx 30rpx;
	&-everyday{
		width: 100%;
		height: 345rpx;
		
		image{
			width: 100%;
			height: 100%;
		}
		margin-bottom: 15rpx;
	}
	&-artificial{
		width: 100%;
		height: 345rpx;
		image{
			width: 100%;
			height: 100%;
		}
		margin-bottom: 15rpx;
		
	}
}
.translate-foorter{
	text-align: center;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666;
	text:nth-child(1){
		margin-right: 60rpx;
	}
}
</style>
