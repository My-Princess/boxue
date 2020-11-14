<template>
	<view class="myorder">
		<Head title="订单" @navigateBack="navigateBack"></Head>
		<view class="myorder-box">
			<view class="myorder-tab">
				<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" bar-width="70" :current="current" gutter="30" @change="change"></u-tabs>
			</view>
		</view>
		<view class="myorder-body">
			<view class="myorder-body-active" v-if="current == 0">
				<view class="myorder-list" v-if="OrderData.list.length"><Order-box @click="orderDetails(1)" :orderList="OrderData.list"></Order-box></view>
				<view class="myorder-body-wu" v-else>您还没有购买课程</view>
			</view>
			<view class="myorder-body-active" v-if="current == 1">
				
			</view>
			<view class="myorder-body-active" v-if="current == 2">
				<view class="myWallet-c1-list"><Record :record="IntegralData" @click="orderDetails"></Record></view>
			</view>
			<view class="myorder-body-active" v-if="current == 3">
				<view class="myorder-tabs">
					<u-tabs
						activeColor="#DB1F13"
						inactive-color="#666666"
						font-size="26"
						:show-bar="false"
						:list="translateTab"
						item-width="150"
						height="50"
						:current="translateActive"
						gutter="20"
						:active-item-style="itemStyle"
						@change="activeTabs"
					></u-tabs>
				</view>
				<view class="myorder-tabs-active" v-if="translateActive == 0">
					<view class="myorder-tabs-list" v-if="true">
						<view class="myorder-tabs-item" @click="everydayClick">
							<view class="myorder-tabs-item-title">
								<view class="myorder-tabs-item-title-l">代翻译内容</view>
								<view class="myorder-tabs-item-title-r">已提交</view>
							</view>
							<view class="myorder-tabs-item-c">
								据悉，双节假期，北京游客接待量、旅游总收入 实现了同比双增长，登双节热门旅游城市榜首。 外省来京游407.4万人次，较去年假期增长5.fdsafdafsad
							</view>
							<view class="myorder-tabs-item-line"></view>
							<view class="myorder-tabs-item-number">订单编号：No.303568</view>
							<view class="myorder-tabs-item-pay">
								<view class="myorder-tabs-item-pay-time">2020-07-03 15:20</view>
								<view class="myorder-tabs-item-pay-pay">实付：￥2020</view>
							</view>
						</view>

						<view class="myorder-tabs-footer">已没有更多订单</view>
					</view>
					<view class="myorder-tabs-tip" v-else>您还没有购买相关的日常快译</view>
				</view>
				<view class="myorder-tabs-active" v-if="translateActive == 1">
					<view class="myorder-tabs-list" v-if="translationData.length">
						<view class="myorder-tabs-item" v-for="(item, index) in translationData" :key="item.id" @click="artificial(item)">
							<view class="myorder-tabs-item-title">
								<view class="myorder-tabs-item-title-l">
									<text class="myorder-tabs-item-title-l-name">{{ item.cate_name }}</text>
									<!-- <text class="myorder-tabs-item-title-l-teacher">李海霞老师</text> -->
								</view>
								<view class="myorder-tabs-item-title-r">{{ item.state }}</view>
							</view>
							<view class="myorder-tabs-item-line"></view>
							<view class="myorder-tabs-item-number">订单编号：No.{{ item.id }}</view>
							<view class="myorder-tabs-item-pay">
								<view class="myorder-tabs-item-pay-time">{{ item.create_time }}</view>
							</view>
						</view>
						<view class="myorder-tabs-footer">已没有更多订单</view>
					</view>
					<view class="myorder-tabs-tip" v-else>您还没有购买相关的人工翻译</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getOrderList } from '@/api/index.js';
import { orderGetOrder, getOrderDetail, translationList } from '@/api/user.js';
import { mapMutations } from 'vuex';
export default {
	data() {
		return {
			barStyle: {
				background: '#DB1F13'
			},
			list: [{ name: '购买课程' },{name:'视频合集'},{ name: '积分商城' }, { name: '我要翻译' }],
			translateTab: [{ name: '日常快择' }, { name: '人工翻译' }],
			translateActive: 1,
			current: 0,
			CoursePage: 1,
			IntegralPage: 1,
			// 积分列表
			IntegralData: [],
			// 购买课程
			OrderData: [],
			// 翻译列表数据
			translationData: [],
			itemStyle: { background: '#eee', borderRadius: '10px' }
		};
	},
	onLoad() {
		this.buyCourse();
		this.getIntegral();
		this.gettranslation();
	},
	methods: {
		...mapMutations('user', ['getartificialData']),
		navigateBack() {
			uni.navigateBack();
		},
		change(index) {
			this.current = index;
		},
		// 购买课程
		buyCourse() {
			let data = { token: uni.getStorageSync('token'), page: this.CoursePage };
			orderGetOrder(data).then(res => {
				console.log(res);
				this.OrderData = res.data;
			});
		},
		// 积分商城
		getIntegral() {
			let data = { token: uni.getStorageSync('token'), page: this.IntegralPage };
			getOrderList(data).then(res => {
				console.log(res);
				this.IntegralData = res.data;
			});
		},
		// 人工翻译
		async gettranslation() {
			let data = { token: uni.getStorageSync('token') };
			let res = await translationList(data);
			console.log(res);
			this.translationData = res.data;
			this.translationData.forEach(item => {
				if (item.status == 0) {
					item.state = '待确认';
				} else if (item.status == 1) {
					item.state = '沟通中';
				} else {
					item.state = '已完成';
				}
			});
		},

		orderDetails(e) {
			let index = this.current + 1;
			console.log('哈哈哈', e);
			let id = e.id;
			uni.navigateTo({
				url: `./orderDetails?type=${index}&id=${id}`
			});
		},
		// 我要翻译tab
		activeTabs(e) {
			this.translateActive = e;
		},
		everydayClick() {
			uni.navigateTo({
				url: './everyday'
			});
		},
		artificial(e) {
			this.getartificialData(e);
			uni.navigateTo({
				url: './artificial'
			});
		}
	}
};
</script>

<style lang="scss">

.myorder-tabs-tip {
	text-align: center;
	margin-top: 100rpx;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.myorder-tabs-list {
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
	padding: 0 40rpx;
}
.myorder-tabs-footer {
	padding-top: 60rpx;
	text-align: center;
}
.myorder-tabs-item {
	margin-top: 40rpx;
	width: 100%;
	padding: 40rpx 25rpx 30rpx 25rpx;
	box-shadow: 0 0 6px 0 #eeeeee;
	border-radius: 10px;
	&-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 6rpx;

		&-l {
			font-size: $fontSize + 5;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			&-name {
				font-size: 35rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			&-teacher {
				margin-left: 40rpx;
				font-size: 35rpx;
				font-family: PingFang SC;
				font-weight: Medium;
				color: #333333;
			}
		}
		&-r {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: #db1f13;
		}
	}
	&-c {
		padding-top: 30rpx;
		padding-left: 6rpx;
		// margin-bottom: 40rpx;

		font-size: $fontSize - 2;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	&-line {
		margin-top: 40rpx;
		width: 100%;
		height: 1rpx;
		background: #eeeeee;
	}
	&-number {
		padding: 30rpx 0 6rpx;

		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	&-pay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-time {
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-pay {
			font-size: $fontSize + 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
	}
}
.myorder-tabs {
	padding: 0 20rpx;
}
.myorder-box {
	position: fixed;
	width: 100%;
	left: 0;
	top: 100rpx;
	background: #ffffff;
	z-index: 99;
}
.myorder-tab {
	display: flex;
	justify-content: center;
}
.myorder-body {
	margin-top: 230rpx;

	&-wu {
		text-align: center;
		margin-top: 320rpx;
		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
}
.myorder-list {
}
</style>
