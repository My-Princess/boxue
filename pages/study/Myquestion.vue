<template>
	<view class="Myquestion">
		<!-- 我要提问 -->
		<Head :title="study.Myquestion"  @navigateBack="navigateBack"></Head>
		<view class="Myquestion-c">
			<view class="Myquestion-textarea"><textarea v-model="concent" maxlength="200" :placeholder="study.questionNum" @input="changeIpt" /></view>
			<view class="Myquestion-login" :class="{ActiveColor}" @click="submit">{{comm.submit}}</view>
		</view>
	</view>
</template>

<script>
	import { addClassProblem } from '@/api/study.js'
	export default {
		data() {
			return {
				ActiveColor:false,
				id:'',
				concent:''
			};
		},
		onLoad(option) {
		     this.id = option.id
		},
		computed:{
			comm(){
				return this.$t('commonality')
			},
			study(){
				return this.$t('study')
			}
		},
		methods:{
			changeIpt(e){
				if(e.detail.value != '') this.ActiveColor = true
			},
			async submit(){
				
				if(this.ActiveColor){
					let data = {token:uni.getStorageSync('token'),id:this.id,content:this.concent}
				     let res =	await addClassProblem(data)
					 console.log(res)
					 if(res.code == 0){
						 uni.navigateTo({
						 	url:`/pages/study/Evaluationsuccess?id=${this.id}`
						 })
					 }else{
						 uni.showToast({
						 	title:'提交失败',
							icon:'none'
						 })
					 }
				}
				
			},
			navigateBack(){
				uni.navigateBack({
					
				})
			},
		}
	}
</script>

<style lang="scss">
	.ActiveColor{
		background: #DC2A1F !important;
		color: #fff !important;
	}
.Myquestion-c{
	padding: 0 40rpx;
}
.Myquestion-textarea {
		// margin-top: 40rpx;
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
.Myquestion-login{
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
