<template>
	<view class="evaluation">
		<!-- 我要评价 -->
		<Head :title="study.evaluation" @navigateBack="navigateBack"></Head>
		<view class="evaluation-c">
			<view class="evaluation-rdte">
				<text class="evaluation-rdte-name">{{study.ClassReview}}：</text>
				<template>
					<u-rate :count="count" v-model="value" size="36" inactive-color="#b2b2b2" active-color="#dc2a1f"></u-rate>
				</template>
			</view>
			<view class="evaluation-textarea"><textarea value="" maxlength="200" :placeholder="study.courseReview" @input="changeIpt" /></view>
			<view class="evaluation-login" :class="{ActiveColor}" @click="submit">{{comm.submit}}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ActiveColor:false,
			count:5,
			value:'',
			id:''
		};
	},
	onLoad(option) {
	     this.id = option.id
	},
	watch:{
		
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
		changeIpt(e){
			console.log(e.detail.value)
			if(e.detail.value != '') this.ActiveColor = true
		},
		submit(){
			uni.navigateTo({
				url:`/pages/study/Evaluationsuccess?id=${this.id}`
			})
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss">
	.ActiveColor{
		background: #DC2A1F !important;
		color: #fff !important;
	}
	.evaluation-c{
		padding: 0 40rpx;
	}
.evaluation-rdte {
	display: flex;
	&-name {
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		padding-right: 20rpx;
	}
	// justify-content: space-between;
}

.evaluation-textarea {
		margin-top: 40rpx;
		width: 100%;
		height: 340rpx;
		padding: 30rpx 20rpx 20rpx;
		box-shadow: 0 0 8px 0 #eeeeee;
		textarea {
			width: 100%;
			height: 100%;

			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333;
		}
		textarea::-webkit-input-placeholder {
			color: #999;
		}
		textarea::-moz-placeholder {
			/* Mozilla Firefox 19+ */
			color: #999;
		}
		textarea:-moz-placeholder {
			/* Mozilla Firefox 4 to 18 */
			color: #999;
		}
		textarea:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #999;
		}
	}
.evaluation-login{
		margin:40rpx auto 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 600rpx;
		height: 98rpx;
		background: #EEEEEE;
		border-radius: 49px;


		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;

	}

</style>
