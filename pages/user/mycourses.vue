<template>
	<view class="mycourses">
		<view class="mycourses-flex">
			<Head :title="user.myCourses" @navigateBack="navigateBack">

			</Head>
			<view class="mycourses-tab">
				<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" :current="current" :item-width="202" @change="change"></u-tabs>
			</view>
		</view>
		<view class="mycourses-body">
			<!-- 培训专区 -->
			<view class="mycourses-body-active" v-if="current == 0">
				<view class="mycourses-body-c" v-if="classMineData.length">
					<view class="mycourses-body-c-item" v-for="(item, index) in classMineData" :key="item.classId" @click="TrainSkip(item.classId)">
						<Aboutlist :headImg="headImg" :MineData="item">
							<template v-slot:img>
								<image :src="item.image" mode="widthFix" style="width: 325rpx;height: 193rpx;"> </image>
							</template>
							<view class="mycourses-body-c-item-b">
								<view class="mycourses-body-c-item-b-t">语音课：未观看</view>
								<view class="mycourses-body-c-item-b-b">句子课：已观看至25课</view>
							</view>
						</Aboutlist>
					</view>
				</view>
				<view class="mycourses-body-zw" v-else>
					<view class="mycourses-body-zw-tip">{{commonality.Coursestip}}</view>
					<view class="mycourses-body-zw-m" @click="apply">
						{{commonality.apply}}
					</view>
				</view>
			</view>
			<!-- 视频专区 -->
			<view class="mycourses-body-active" v-if="current == 1">
				<view class="mycourses-body-c1" v-if="collectionMineData.length">
					<view class="mycourses-body-c1-item" v-for="(item,index) in collectionMineData" :key="index">
						<image :src="item.image" mode=""></image>
						<view class="mycourses-body-c1-item-name">{{item.name}}</view>
						<view class="mycourses-body-c1-item-txt">已观看至25课</view>
					</view>
					<view class="mycourses-body-nodata">没有更多</view>
				</view>

				<view class="mycourses-body-zw" v-else>
					<view class="mycourses-body-zw-tip">{{commonality.trainTip}}</view>
				    <view class="mycourses-body-zw-m" @click="purchase">
				    	{{commonality.purchase}}
				    </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { classMine,collectionMine } from '@/api/user.js';
export default {
	data() {
		return {
			// 培训专区
			istrain: true,
			isvideo: true,
			minePage: 1,
			barStyle: {
				background: '#DB1F13'
			},
			
			list: [
				
			],
			classMineData: [],
			current: 0
		};
	},
	onLoad() {
		let list = [{
			name: this.user.train
		},
		{
			name: this.user.video
		}]
		this.list = list
		this.getclassMine();
		this.getcollectionMine()
	},
	computed:{
		user(){
			return this.$t('user')
		},
		commonality(){
			return this.$t('commonality')
		}
	},
	methods: {
		// 获取培训专区数据
		async getclassMine() {
			let data = { token: uni.getStorageSync('token'), page: this.minePage };
			let res = await classMine(data);
			console.log(res);
			this.classMineData = res.data.list;
		},
		// 视频专区
		async getcollectionMine(){
			let data = {token:uni.getStorageSync('token')}
			let res = await collectionMine(data)
			console.log(res)
			this.collectionMineData = res.data.list
		},
		change(index) {
			this.current = index;
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 培训专区跳转
		TrainSkip(id) {
			uni.navigateTo({
				url: `/pages/study/videoviewing?id=${id}`
			});
		},
		purchase(){
		    uni.switchTab({
		       url:'/pages/index/study?type=2'	
		    })	
		},
		apply(){
			uni.switchTab({
			   url:'/pages/index/study'	
			})	
		}
	}
};
</script>

<style lang="scss">
/deep/.integral-top-r image {
	width: 44rpx;
	height: 40rpx;
}
.mycourses-flex{
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: #FFF;
	z-index: 99;
}
.mycourses-tab {
	height: 100rpx;
	// padding: 0 40rpx;
}
.mycourses-body {
	padding: 0 40rpx;
	padding-top: 200rpx;
	&-c {
		&-item {
			padding-top: 40rpx;
			&-b {
				margin-top: 16rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
	}
	&-c1 {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		&-item:nth-child(2n) {
			margin-left: 20rpx;
		}
		&-item {
			margin-bottom: 20rpx;
			width: 324rpx;
			background: #ffffff;
			border-radius: 10px;
			box-shadow: 0px 0px 6px 0 #eeeeee;
			image {
				// margin-top: 20rpx;
				margin-bottom: 18rpx;
				display: block;
				width: 324rpx;
				height: 193rpx;
				border-radius: 10px;
			}
			&-name {
				padding-left: 15rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
			}
			&-txt {
				padding-left: 15rpx;
				padding-bottom: 20rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
	}
	&-zw {
		text-align: center;
		font-family: PingFang SC;
		font-weight: 500;
		&-tip{
			margin-top: 160rpx;
			font-size: $fontSize - 4;
		
			color: #999999;
		}
		&-m{
			margin-top: 60rpx;
			font-size: $fontSize - 2;
		
			color:#DB1F13;
			
		}
		
	}
	&-nodata {
		text-align: center;
		padding-top: 20rpx;

		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	
}
</style>
