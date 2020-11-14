<template>
	<view class="integral">
		<Head :title="user.myintegral" @navigateBack="navigateBack"></Head>

		<view class="integral-img">
			<!-- 积分 -->
			<view class="integral-img-name">{{ user.integral }}</view>
			<view class="integral-img-money">{{ integralData.sum }}</view>
		</view>
		<view class="integral-body">
			<view class="integral-body-box">
				<!--   积分商城 -->
				<view class="integral-body-box-l" @click="integralStore">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/jfensc.png" mode=""></image>
					<view class="integral-body-box-l-name">{{ user.store }}</view>
				</view>
				<view class="integral-body-box-r" @click="integralRult">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/jfgz.png" mode=""></image>
					<view class="integral-body-box-l-name">{{ user.integralRule }}</view>
				</view>
			</view>
			<view class="integral-body-line"></view>
			<view class="integral-body-c">
				<view class="integral-body-c-name">- {{ user.integralDetail }} -</view>
				<mescroll-body ref="mescrollRef" height="100" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
					<view class="integral-body-c-list">
						<view class="integral-body-c-list-item" v-for="(item, i) in getData" :key="item.id">
							<view class="integral-body-c-list-item-l">
								<view class="integral-item-name">{{ item.className }}</view>
								<view class="integral-item-time">{{ item.createTime }}</view>
							</view>
							<view class="integral-body-c-list-item-r" :class="item.type == 8 ? 'activeColor' : ''">{{ item.type == 8 ? '' : '+' }}{{ item.integral }}</view>
						</view>

						<!-- <view class="integral-body-c-list-di">已没有更多积分</view> -->
					</view>
				</mescroll-body>
			</view>
		</view>
	</view>
</template>

<script>
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import { integralList } from '@/api/user.js';
export default {
	mixins: [MescrollMixin],
	data() {
		return {
			page: 1,
			downOption: {
				native: true // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
			},
			upOption: {
				textLoading:'',
				textNoMore: '',
				noMoreSize:'4'
			},
			integralData: {},
			getData: []
		};
	},
	onLoad() {
		this.upOption.textNoMore = this.commonality.loadComplete
		this.upOption.textLoading = this.commonality.textLoading
		// this.getIntegral()
	},
	computed: {
		user() {
			return this.$t('user');
		},
		commonality(){
			return this.$t('commonality')
		}
	},
	methods: {
		// 获取数据
		async getIntegral() {
			let data = { token: uni.getStorageSync('token'), page: this.page };
			let res = await integralList(data);
			console.log(res);
		},
		// 主动触发下拉刷新
		triggerDownScroll() {
			this.mescroll.triggerDownScroll();
		},
		/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
		upCallback(page) {
			//联网加载数据
			let data = { token: uni.getStorageSync('token'), page: this.page };
			integralList(data)
				.then(res => {
					this.integralData = res.data;
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(res.data.list.length);
					res.data.list.length < 10 ? (this.page = this.page) : (this.page = ++this.page);
					//设置列表数据
					if (this.page == 1) this.getData = []; //如果是第一页需手动制空列表

					this.getData = this.getData.concat(res.data.list); //追加新数据
				})
				.catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				});
		},
		integralRult() {
			uni.navigateTo({
				url: '/pages/integral/integralrule'
			});
		},
		integralStore() {
			uni.navigateTo({
				url: '/pages/integral/integral'
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.activeColor {
	color: #db2014;
}
.integral-img {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 622rpx;
	height: 342rpx;
	background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/integral.png);
	background-size: 622rpx 342rpx;
	padding-left: 40rpx;
	padding-top: 60rpx;
	&-name {
		font-size: $fontSize;
		font-family: HuXiaoBo-NanShen;
		font-weight: 400;
		color: #ffffff;
	}
	&-money {
		font-size: 105rpx;
		font-family: SimHei;
		font-weight: bold;
		color: #ffffff;
	}
}

.integral-body {
	position: relative;
	left: 0;
	top: -80rpx;
	background: #ffffff;
	// background: pink;
	// box-shadow: 0 -1px 0rpx #1A1A1A;
	box-shadow: 0 -2px 1rpx 1rpx rgba(0, 0, 0, 0.1);

	&-box {
		width: 622rpx;
		padding: 30rpx;
		margin: auto;
		display: flex;
		justify-content: space-between;

		&-l {
			display: flex;
			align-items: center;
			image {
				display: block;
				width: 42rpx;
				height: 42rpx;
			}
			&-name {
				margin-left: 18rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
		&-r {
			display: flex;
			align-items: center;
			image {
				display: block;
				width: 42rpx;
				height: 42rpx;
			}
			&-name {
				margin-left: 18rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}

	&-line {
		width: 100%;
		height: 1rpx;
		background: #ededed;
	}

	&-c {
		&-name {
			text-align: center;
			margin: 38rpx 0;
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-list {
			padding: 0 40rpx;
			&-di {
				margin-top: 56rpx;
				text-align: center;
				font-size: $fontSize - 6;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			&-item:nth-child(1) {
				padding-top: 0;
			}
			&-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #ededed;
				padding-top: 25rpx;
				padding-bottom: 30rpx;
				&-l {
					.integral-item-name {
						font-size: $fontSize - 4;
						font-family: PingFang SC;
						font-weight: bold;
						color: #333333;
						padding-bottom: 8rpx;
					}
					.integral-item-time {
						font-size: $fontSize - 8;
						font-family: PingFang SC;
						font-weight: 500;
						color: #656565;
					}
				}
				&-r {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
			}
		}
	}
}
</style>
