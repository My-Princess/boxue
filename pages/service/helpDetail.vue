<template>
	<view class="helpDetail">
		<Head :title="$t(user.problemdetails)" @navigateBack="navigateBack"></Head>
		<view class="detail" v-if="questiondetaildata">
			<view class="t">{{questiondetaildata.question}} </view>
			<view class="c">
				<u-parse :content="questiondetaildata.content" noData="" />
			</view>
		</view>
	</view>
</template>

<script>
	import {questionDetail} from '@/api/user.js'
	import uParse from '@/components/gaoyia-parse/parse.vue'; //引入富文本组件
	export default {
		components: {
			
			uParse
		},
		data() {
			return {
				questiondetaildata:{}
			};
		},
		onLoad(options) {
			let data = {id:options.id}
			questionDetail(data).then(res=>{
				console.log(res)
				this.questiondetaildata = res.data
			})
		},
		methods:{
			navigateBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.detail{
	background-color: #fff;
	color: #333;
	font-size: 28rpx;
	padding: 40rpx;
	padding-top: 0;
}
.t{
	line-height: 94rpx;
	font-size: 32rpx;
	font-weight: 700;
	// padding: 0rpx 20rpx;
	font-size: 32rpx;
	font-weight: 700;
	margin-bottom: 20rpx;
}

</style>
