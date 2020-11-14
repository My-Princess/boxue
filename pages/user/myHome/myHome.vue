<template>
	<view class="myhome ishow">
		<Head title="我的主页" @navigateBack="navigateBack"></Head>
		<view class="myhome-user">
			<view class="myhome-user-head"><userHead colorName="#333333" colorTxt="#999999"></userHead></view>
			<view class="myhome-user-row">
				<view class="myhome-user-row-item">
					<text>130</text>
					<text>关注</text>
				</view>
				<view class="myhome-user-row-item">
					<text>0</text>
					<text>粉丝</text>
				</view>
				<view class="myhome-user-row-item">
					<text>0</text>
					<text>互关</text>
				</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="myhome-centent">
			<view class="myhome-centent-tab">
				<v-tabs
					v-model="tab2"
					auto
					:tabs="tabs2"
					color="#666666"
					activeColor="#333333"
					fontSize="30rpx"
					activeFontSize="30rpx"
					lineColor="#DB1F13"
					:lineScale="0.2"
					fontWeight="bold"
					@change="activeTabs"
				></v-tabs>
			</view>
			<view class="myhome-centent-line"></view>
			<!-- 帖子 -->
			<view class="myhome-centent-tz" v-if="this.activeTab == 0">
				<view class="myhome-centent-tz-c" style="padding: 0 40rpx;" v-for="(v, i) in ListData" :key="i">
					<communityUser :tieHead="v">
						<template v-slot:right>
							<view class="myhome-r-img"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/del.png" mode=""></image></view>
						</template>
						<communityUser-Item :tieConcent="v" @txtDetail="txtDetail" :style="styles">
							<template v-slot:img>
								<view v-if="v.files.length">
									<view class="community-concent-item-img" v-if="v.files[0].type == 1"><image :src="v.files[0].file" mode=""></image></view>
									<view class="community-concent-item-video" v-if="v.files[0].type == 2"><video :src="v.files[0].file" controls></video></view>
								</view>
							</template>
						</communityUser-Item>
					</communityUser>
				</view>
			</view>
			<!-- 成就 -->
			<view class="myhome-centent-cj" v-if="this.activeTab == 1">
				<view class="myhome-centent-cj-item">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
					<text>学霸 Lv.4</text>
				</view>
				<view class="myhome-centent-cj-item">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
					<text>初级学者 Lv.4</text>
				</view>
				<view class="myhome-centent-cj-item">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
					<text>学霸 Lv.4</text>
				</view>
				<view class="myhome-centent-cj-item">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
					<text>学霸 Lv.4</text>
				</view>
				<view class="myhome-centent-cj-item">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
					<text>学霸 Lv.4</text>
				</view>
			</view>
		</view>

		<!-- 弹窗 -->
		<u-modal v-model="show" :show-title="false" :show-confirm-button="false" width="620">
			<view class="model-cj">
				<!-- <view class="model-cj-colse"><image src="../../static/img/close.png" mode=""></image></view> -->
				<view class="iconfont icon-guanbi" @click="colse"></view>
				<view class="model-cj-title">恭喜获得新勋章</view>
				<view class="model-cj-txt">
					您是第
					<text>12345</text>
					位获得者
				</view>
				<view class="model-cj-img"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image></view>
				<view class="model-cj-bt">
					<view class="model-cj-bt-name">学霸</view>
					<view class="model-cj-bt-txt">
						在流利外语获得的第
						<text>1</text>
						个勋章
					</view>
				</view>
				<view class="model-cj-footer">
					<view class="model-cj-footer-time">
						<text>2020-08-11</text>
						获得
					</view>
					<view class="model-cj-footer-txt">请继续努力，再接再厉呦~</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
import { tieList } from '@/api/community.js';

export default {
	data() {
		return {
			styles: {
				padding: '16rpx 0 30rpx 120rpx',
				'border-bottom': '1rpx solid #eeeeee'
			},
			tab2: 0,
			tabs2: [{ name: 'TA的帖子' }, { name: 'TA的成就' }],
			activeTab: 0,
			show: false,

			ListData: []
		};
	},
	onLoad() {
		this.getTieList();
	},

	methods: {
		async getTieList() {
			let uid = uni.getStorageSync('user').uid;
			let data = { token: uni.getStorageSync('token'), typeId: 0, size: 10, page: 1, uid: uid };
			let res = await tieList(data);
			console.log(res);
			this.ListData = res.data.list;
		},
		activeTabs(e) {
			this.activeTab = e;
		},
		colse() {
			this.show = false;
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 跳转详情页
		txtDetail(e) {
			console.log(e);
			uni.navigateTo({
				url: `/pages/community/communityDetail?tieId=${e}`
			});
		}
	}
};
</script>

<style lang="scss">
.myhome-user-row {
	display: flex;
	align-items: center;
	&-item {
		display: flex;
		align-items: center;
		margin-right: 60rpx;
		text {
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #343434;
		}
		text:nth-child(1) {
			margin-right: 18rpx;
			font-weight: bold;
			font-size: $fontSize + 12;
		}
	}
}
.myhome-r-img {
	width: 34rpx;
	height: 34rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.community-concent-item-img {
	width: 100%;
	margin: 20rpx 0;
	// height:289rpx;
	height: 350rpx;
	image {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
}
// .ishow{
// 	position: absolute;
// 	width: 100%;
// 	height: 100vh;
// 	background:rgba(0,0,0,.4);
// 	z-index: 9999999999;
// 	// background:rgba(0,0,0,1);
// 	// opacity:0.5;
// 	.model-cj{
// 		position: absolute;
// 		left:50%;
// 		top: 50%;
// 		transform: translate(-50%,-50%);

// 		width:620rpx;
// 		height:980rpx;
// 		background:rgba(255,255,255,1);
// 		border-radius:10px;

// 		z-index: 999;
// 	}
// }
.myhome {
	position: relative;
	.model-cj {
		position: relative;
		width: 620rpx;
		height: 980rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10px;
		.icon-guanbi {
			margin-top: 28rpx;
			margin-bottom: 24rpx;
			margin-right: 28rpx;
			text-align: right;
			font-size: 26rpx;
			font-weight: bold;
		}
		&-title {
			display: flex;
			justify-content: center;

			font-size: $fontSize + 30;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
		&-txt {
			display: flex;
			justify-content: center;
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			text {
				color: #db1f13;
			}
		}
		&-img {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			width: 490rpx;
			height: 482rpx;
			image {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		&-bt {
			position: relative;

			// top: -45rpx;
			// transform: translateX(-50%);

			&-name {
				text-align: center;
				font-size: $fontSize + 42;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-txt {
				text-align: center;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}
		&-footer {
			width: 100%;
			position: absolute;
			bottom: 38rpx;
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 400;
			text-align: center;
			&-time {
				color: rgba(51, 51, 51, 1);
				text {
					margin-right: 14rpx;
				}
			}
			&-txt {
				margin-top: 28rpx;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
	&-user {
		padding: 0 40rpx;
	}
	&-icon {
		margin-left: 190rpx;
		margin-bottom: 70rpx;
		width: 42rpx;
		height: 40rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
	&-centent {
		&-tab {
			padding-right: 300rpx;
		}
		&-line {
			margin-bottom: 30rpx;
			width: 100%;
			height: 1rpx;
			background: rgba(238, 238, 238, 1);
		}
		&-c {
		}
		&-centent {
			padding: 40rpx 40rpx 20rpx;
			border-bottom: 1rpx solid #eeeeee;
			&-txt {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);

				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			&-img {
				margin: 20rpx 0;
				width: 100%;
				height: 350rpx;
				image {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			&-footer {
				display: flex;
				align-items: center;
				&-time {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
				&-dz {
					flex: 1;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-right: 50rpx;
					image {
						width: 44rpx;
						height: 40rpx;
					}
					text {
						margin-left: 8rpx;
						font-size: $fontSize - 2;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}
				}
				&-pl {
					display: flex;
					align-items: center;
					image {
						width: 44rpx;
						height: 40rpx;
					}
					text {
						margin-left: 8rpx;
						font-size: $fontSize - 2;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}
				}
			}
		}
		&-centent:first-child {
			padding-top: 0;
		}
		&-cj {
			// padding: 0 40rpx;
			display: flex;

			// justify-content: space-between;
			flex-wrap: wrap;
			&-item {
				padding: 30rpx 0;
				padding-left: 40rpx;
				width: 50%;
				display: flex;

				align-items: center;
				image {
					display: block;
					width: 82rpx;
					height: 78rpx;
				}
				text {
					margin-left: 20rpx;
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-item:nth-child(-n + 2) {
				padding-top: 20rpx;
			}
			&-item:nth-child(2n) {
				// justify-content: flex-end;
				padding-left: 0;
			}
			&-item:nth-last-child(-n + 2) {
				padding-bottom: 0;
			}
		}
	}
}
</style>
