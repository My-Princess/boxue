<template>
	<view class="challenge">
		<Head title="连对挑战排行榜" @navigateBack="navigateBack"></Head>
		<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ldphb.png" mode=""></image>
		<view class="challenge-box">
			<view class="challenge-box-tx">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
				<view class="challenge-box-title">爱学习的学员</view>
				<view class="challenge-box-c">
					<view class="challenge-box-c-l">
						<view class="challenge-box-c-l-t">12</view>
						<view class="challenge-box-c-l-b">你的最高排名</view>
					</view>
					<view class="challenge-box-c-r">
						<view class="challenge-box-c-r-t">{{count}}</view>
						<view class="challenge-box-c-r-b">你的今日排名</view>
					</view>
				</view>
				<view class="challenge-box-btn">挑战</view>
			</view>
		</view>
		<view class="challenge-centent">
			<view class="challenge-centent-title">
				连对挑战排行榜总榜
				<text>仅显示前十名</text>
			</view>
			<view class="challenge-centent-c" v-if="rankingData.length">
				<view class="challenge-centent-item" v-for="(item,index) in rankingData" :key="index" @click="userid">
					<view class="challenge-centent-item-number">{{index + 1}}</view>

					<view class="challenge-centent-item-c">
						<view class="challenge-centent-item-c-img"><image :src="item.head_img" mode=""></image></view>
						<view class="challenge-centent-item-c-txt">
							<view class="challenge-centent-item-c-txt-t hidden">{{item.nickname}}</view>
							<view class="challenge-centent-item-c-txt-b hidden">{{item.signature}}</view>
						</view>
					</view>
					<view class="challenge-centent-item-r">{{item.record}}连</view>
				</view>
			</view>
			<view class="blank" v-else>
				还没有人上排行榜，赶紧去霸榜吧
			</view>
		</view>
	</view>
</template>

<script>
	import { getRecord } from '@/api/study.js'
export default {
	data() {
		return {
			rankingData:[],
			count:0
		};
	},
	onLoad() {
		this.getRanking()
	},
	methods:{
		async getRanking(){
			let data = {token:uni.getStorageSync('token')}
			let res = await getRecord(data)
			console.log(res)
			this.count = res.data.count
			this.rankingData = res.data.ranking
		},
		userid(){
			uni.navigateTo({
				url:'./userid'
			})
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss">
	.blank{
	   font-size: 26rpx;
	   text-align: center;
	   padding-top: 130rpx;
	}
.challenge {
	position: relative;
	image {
		width: 100%;
		height: 362rpx;
	}
	&-box {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		top: -50rpx;
		width: 670rpx;
		height: 438rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10px;
		box-shadow: 0 5px 12px 0 #eeeeee;
		// background: red;
		image {
			display: block;
			position: relative;
			top: -50rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		&-title {
			display: flex;
			justify-content: center;
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			margin-top: -40rpx;
		}
		&-c {
			// padding: 50rpx 70rpx 50rpx;
			padding-top: 50rpx;
			display: flex;
			// justify-content: space-between;

			&-l {
				flex: 1;
				// background: red;
				text-align: center;

				&-t {
					width: 375rpx;
					font-size: $fontSize + 42;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
				&-b {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-r {
				flex: 1;
				// background: pink;
				text-align: center;
				&-t {
					font-size: $fontSize + 42;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(219, 31, 19, 1);
				}
				&-b {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
		&-btn {
			position: absolute;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 90rpx;
			background: linear-gradient(84deg, rgba(255, 115, 106, 1) 0%, rgba(232, 82, 72, 1) 100%);
			border-radius: 10px;

			font-size: $fontSize + 5;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
	&-centent {
		padding: 0 40rpx;

		&-title {
			display: flex;
			align-items: flex-end;
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			text {
				margin-left: 20rpx;
				font-size: $fontSize - 6;
				color: rgba(217, 217, 217, 217);
			}
		}
		&-item {
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #eeeeee;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-number {
				width: 40rpx;
				font-size: $fontSize + 6;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(219, 31, 19, 1);
			}

			&-c {
				flex: 1;
				display: flex;
				// background: red;
				&-img {
					width: 56rpx;
					height: 56rpx;
					image {
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				&-txt {
					margin-left: 20rpx;
					font-family: PingFang SC;
					&-t {
						font-size: $fontSize - 4;

						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}
					&-b {
						width: 295rpx;
						font-size: $fontSize - 8;

						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
			&-r {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(219, 31, 19, 1);
			}
		}

		&-item:first-child {
			padding-top: 40rpx;
		}
		&-item:nth-child(n + 4) {
			.challenge-centent-item-number {
				color: #333333 !important;
				font-size: $fontSize - 2;
			}
		}
		&-item:last-child{
			border-bottom: none;
		}
	}
}
</style>
