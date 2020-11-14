<template>
	<view class="newsDetails">
	   <Head title="评论详情"></Head>
	   <view class="newsDetails-c">
	   	   <communityUser :tieHead="tieHead">
			   <communityUser-Item :tieConcent="tieConcent" @give="give" type="2"></communityUser-Item>
		   </communityUser>
		   
	   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tieHead:{
					headImg: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					nickname: '某知名网友',
					createTime: '2020-07-08'
				},
				tieConcent:{
					content:'会发生的积分沙井发生大开发商积分大思路发生多了',
					createTime: '2020-07-08',
					praise:666,
					comments:555,
					isPraise:1,
				},
			};
		},
		methods:{
			give(){
				uni.navigateTo({
					url: './praiseList',
				});
			}
		}
	}
</script>

<style lang="scss">
.newsDetails-c{
	padding: 0 40rpx;
}
</style>
