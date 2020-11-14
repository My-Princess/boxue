<template>
	<view class="leagueBoxBox">
		<view class="leagueBox-concent">
			<view class="leagueBox-concent-box" v-if="leagueBoxshow == 1">
				<view class="leagueBox-concent-box-l">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
					<view class="leagueBox-concent-box-l-name"><text>团长</text></view>
				</view>
				<view class="leagueBox-concent-box-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
			</view>
		
			<view class="leagueBox-concent-box1" v-if="leagueBoxshow == 3">
				<view class="leagueBox-concent-box1-t">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
					<view class="leagueBox-concent-box1-t-name"><text>团长</text></view>
				</view>
				<view class="leagueBox-concent-box1-b">
					<view class="leagueBox-concent-box1-b-l"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box1-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
				</view>
			</view>
		
			<view class="leagueBox-concent-box2" v-if="leagueBoxshow == 4">
				<view class="leagueBox-concent-box2-t">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
					<view class="leagueBox-concent-box2-t-name"><text>团长</text></view>
				</view>
				<view class="leagueBox-concent-box2-b">
					<view class="leagueBox-concent-box2-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box2-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box2-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box2-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
				</view>
			</view>
		
			<view class="leagueBox-concent-box3" v-if="leagueBoxshow == 2">
				<view class="leagueBox-concent-box3-t">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
					<view class="leagueBox-concent-box3-t-name"><text>团长</text></view>
				</view>
				<view class="leagueBox-concent-box3-b">
					<view class="leagueBox-concent-box3-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-b-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
				</view>
				<view class="leagueBox-concent-box3-bb">
					<view class="leagueBox-concent-box3-bb-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-bb-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
					<view class="leagueBox-concent-box3-bb-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image></view>
				</view>
			</view>
			<view class="leagueBox-concent-issuccess" v-if="issuccess">
				<view class="leagueBox-concent-issuccess-txt">还差1人即可拼团成功</view>
				<view class="leagueBox-concent-issuccess-time">
					拼团剩余
					<text>23:59:47</text>
					结束
				</view>
			</view>
			<view class="leagueBox-concent-issuccess" v-if="!issuccess"><view class="leagueBox-concent-issuccess-txt">拼团成功，已通过原途径返还23元</view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				issuccess: false,
				leagueBoxshow: 2,
			};
		}
	}
</script>

<style lang="scss">
	.leagueBox-concent {
		margin-top: 60rpx;

		&-box {
			display: flex;
			justify-content: center;

			&-l {
				margin-right: 122rpx;
				position: relative;
				width: 120rpx;
				height: 120rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
				&-name {
					position: absolute;
					left: 30rpx;
					bottom: -10rpx;
					width: 60rpx;
					height: 30rpx;
					background: rgba(248, 181, 81, 1);
					border-radius: 10px;
					text {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: $fontSize - 10;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
			&-r {
				width: 120rpx;
				height: 120rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}
		&-box1 {
			&-t {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 120rpx;
				height: 120rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
				&-name {
					position: absolute;
					left: 30rpx;
					bottom: -10rpx;
					width: 60rpx;
					height: 30rpx;
					background: rgba(248, 181, 81, 1);
					border-radius: 10px;
					text {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: $fontSize - 10;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
			&-b {
				display: flex;
				justify-content: center;
				margin-top: 35rpx;
				&-l {
					margin-right: 125rpx;
					width: 120rpx;
					height: 120rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				&-r {
					width: 120rpx;
					height: 120rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
		}

		&-box2 {
			&-t {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 120rpx;
				height: 120rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
				&-name {
					position: absolute;
					left: 30rpx;
					bottom: -10rpx;
					width: 60rpx;
					height: 30rpx;
					background: rgba(248, 181, 81, 1);
					border-radius: 10px;
					text {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: $fontSize - 10;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
			&-b {
				display: flex;
				justify-content: center;
				margin-top: 35rpx;
				&-r {
					width: 120rpx;
					height: 120rpx;
					margin-right: 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				&-r:last-child {
					margin-right: 0;
				}
			}
		}
		&-box3 {
			&-t {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 120rpx;
				height: 120rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
				&-name {
					position: absolute;
					left: 30rpx;
					bottom: -10rpx;
					width: 60rpx;
					height: 30rpx;
					background: rgba(248, 181, 81, 1);
					border-radius: 10px;
					text {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: $fontSize - 10;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
			&-b {
				display: flex;
				justify-content: center;
				margin-top: 35rpx;
				&-r {
					width: 120rpx;
					height: 120rpx;
					margin-right: 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				&-r:last-child {
					margin-right: 0;
				}
			}
			&-bb {
				display: flex;
				justify-content: center;
				margin-top: 20rpx;
				&-r {
					width: 120rpx;
					height: 120rpx;
					margin-right: 26rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				&-r:last-child {
					margin-right: 0;
				}
			}
		}
		&-issuccess {
			&-txt {
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
			&-time {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				text {
					padding: 0 10rpx;
					color: #dc2a1fff;
					font-size: $fontSize + 18rpx;
				}
			}
		}
	}
</style>
