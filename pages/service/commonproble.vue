<template>
	
	<view class="commonproble">
		<Head :title="$t('user.issue')" @navigateBack="navigateBack"></Head>
		<view v-if="questionlistdata.length>0">
			<view class="lists">
				<view class="item" v-for="(item,index) in questionlistdata" :key="index">
					<navigator :url="`/pages/service/helpDetail?id=${item.id}`" class="nav" hover-class="none">
					<view class="txt">
						{{item.question}}
					</view>
					      <view class="iconfont icon-youjiantou1"> </view>
					</navigator>
				</view>
			</view>
		</view>
		<view v-else>
		  <view class="empty">{{$t('commonality.noData')}}</view>
		</view>
	</view>
</template>



<script>
	import {questionList} from '@/api/user.js'
	export default {
		data() {
			return {
				questionlistdata:[]
			};
		},
		onLoad() {
			this.getquestionList()
		},
		methods: {
			async getquestionList(){
				let res = await questionList();
				console.log(res)
			    this.questionlistdata = res.data.list
			},
			navigateBack(){
				uni.navigateBack()
			}
		}
	};
	</script>
</script>
<style lang="less" scoped>

.lists{
	background-color: #fff;
}
.lists .item{
	line-height: 84rpx;
	font-size: 28rpx;
	color: #666;
	margin: 0rpx 40rpx;
	border-bottom: #f9f9f9 4rpx solid;
}
.lists .item .nav{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.nav .txt{
	width: 80%;
	white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
}

</style>
