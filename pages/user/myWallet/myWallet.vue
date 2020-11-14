<template>
	<view class="myWallet" :style="height ? 'height:100vh' : 'height:100%'">
		
		<view class="myWallet-box" >
			<Head title="钱包" @navigateBack="navigateBack" style="{background: transparent}">
						<template v-slot:right>
							<view>常见问题</view>
						</template>
					</Head>
			<view class="myWallet-box-c">
				<view class="myWallet-box-c-name">余额 (元)</view>
				<view class="myWallet-box-c-money">750.00</view>
			</view>
			<view class="myWallet-box-withdraw" @click="withdraw"><text>提现</text></view>
		</view>
		<view class="myWallet-c">
			<!-- 	<view class="myWallet-c-name">
				<text>2020年10月01日</text>
				<text @click="iconTime" class="iconfont" :class="isShow ? 'icon-shangjiantou2' : 'icon-jiantou9'"></text>
			</view> -->
			<view class="myWallet-c-tab">
				<u-tabs
					gutter="40"
					active-color="#333333"
					:bar-style="barStyle"
					inactive-color="#666666"
					bg-color="#F8F8F8"
					:list="list"
					:current="current"
					@change="change"
				></u-tabs>
			</view>
			<view class="myWallet-c-body">
				<view class="myWallet-c-body-active" v-if="current == 0">
					<view class="myWallet-body" v-if="MoneyData.length"><MoneyList :MoneyData="MoneyData"></MoneyList></view>
					<view class="myWallet-c-body-wu" v-else>还没有交易记录</view>
				</view>

				<view class="myWallet-c-body-active" v-if="current == 1">
					<view class="myWallet-body" v-if="IncomeData.length"><MoneyList :MoneyData="IncomeData"></MoneyList></view>
					<view class="myWallet-c-body-wu" v-else>还没有交易记录</view>
				</view>

				<view class="myWallet-c-body-active" v-if="current == 2">
					<view class="myWallet-body" v-if="expenditureData.length"><MoneyList :MoneyData="expenditureData"></MoneyList></view>
					<view class="myWallet-c-body-wu" v-else>还没有交易记录</view>
				</view>
			</view>
		</view>

		<!-- 筛选日期弹框 -->
		<view class="myWallet-birth">
			<template>
				<u-picker mode="time" @cancel="cancel" @confirm="confirm" v-model="showBirth" :params="params"></u-picker>
			</template>
		</view>

		<!-- 未绑定微信 -->
		<view class="myWallet-wx">
			<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
				<view class="tipAddress">
					<view class="tipAddress-txt">您还未绑定微信，需绑定后才可提现。</view>
					<view class="tipAddress-btn">
						<view class="tipAddress-btn-qx">取消</view>
						<view class="tipAddress-btn-qr" @click="tipaffirm">去绑定</view>
					</view>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
import { getMoneyLog } from '@/api/user.js';
export default {
	data() {
		return {
			tipshow: false,
			showBirth: false,
			isShow: true,
			AllPage: 1,
			IncomePage: 1,
			expenditurePage: 1,
			MoneyData: [],
			IncomeData: [],
			barStyle: {
				background: '#DB1F13'
			},
			list: [
				{
					name: '全部'
				},
				{
					name: '收入'
				},
				{
					name: '支出'
				}
			],
			current: 0,
			height: '',
			params: {
				year: true,
				month: true,
				day: true,
				hour: false,
				minute: false,
				second: false
			}
		};
	},
	onLoad() {
		// this.getMoney();
		// this.getIncome();
		// this.getexpenditure();
	},
	watch: {
		current: {
			handler: function(val) {
				this.$nextTick(() => {
					this.getSiteData();
				});
			},
			immediate: true
		},
		showBirth: {
			handler: function(val) {
				this.showBirth == false ? (this.isShow = !this.isShow) : this.isShow;
			}
		}
	},
	methods: {
		// 全部
		async getMoney() {
			let data = { token: uni.getStorageSync('token'), page: this.AllPage, type: 0 };
			let res = await getMoneyLog(data);
			console.log(res);
			this.MoneyData = res.data.list;
		},
		async getIncome() {
			let data = { token: uni.getStorageSync('token'), page: this.IncomePage, type: 1 };
			let res = await getMoneyLog(data);
			console.log(res);
			this.IncomeData = res.data.list;
		},
		async getexpenditure() {
			let data = { token: uni.getStorageSync('token'), page: this.expenditurePage, type: 2 };
			let res = await getMoneyLog(data);
			console.log(res);
			this.expenditureData = res.data.list;
		},

		withdraw() {
			uni.navigateTo({
				url: './withdraw'
			});
		},
		getSiteData() {
			var that = this;
			// let SiteInfo = uni.getStorageSync('SiteInfo')
			uni.getSystemInfo({
				success: function(res) {
					// res - 各种参数
					console.log(res);

					let info = uni.createSelectorQuery().select('.myWallet');
					info.boundingClientRect(function(data) {
						//data - 各种参数
						console.log(res.screenHeight);
						console.log(data.height); // 获取元素宽度i

						res.screenHeight > data.height ? (that.height = true) : (that.height = false), console.log(that.height);
					}).exec();
				}
			});
		},
		navigateBack() {
			uni.navigateBack();
		},
		change(index) {
			this.current = index;
		},
		// 取消
		cancel() {
			console.log('666');
			this.isShow = !this.isShow;
		},
		// 微信绑定
		tipaffirm() {},
		confirm() {
			console.log('3333');
		},
		iconTime() {
			this.isShow = !this.isShow;
			this.showBirth = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.tipAddress {
	padding: 40rpx;
	&-txt {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	&-btn {
		margin-top: 78rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		&-qx {
			margin-right: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
		}
		&-qr {
			// padding-left: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #db1f13;
		}
	}
}
.myWallet {
	width: 100%;
	// height: 100%;
	// height: 100vh;
	background: #f8f8f8;
}
/deep/.integral-top {
	color: #ffffff !important;
}
/deep/ .integral-top-title {
	color: #ffffff !important;
}

.myWallet-box {
	position: relative;
	width: 100%;
	height: 450rpx;
	border-radius: 0 0 5% 5%;
	background: linear-gradient(-31deg, #db1f13 0%, #ff765f 100%) !important;

	&-c {
		padding-top: 118rpx - 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
		&-name {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #eeeeee;
		}
		&-money {
			font-size: 90rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #ffffff;
		}
	}
	&-withdraw {
		position: absolute;
		left: 50%;
		bottom: -40rpx;
		transform: translateX(-50%);
		width: 360rpx;
		height: 80rpx;
		background: #ffffff;
		border-radius: 40px;
		box-shadow: 0 0 3px 0 #ff765f;
		text {
			display: flex;
			justify-content: center;
			line-height: 80rpx;
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #db1f13;
		}
	}
}

.myWallet-c {
	padding-top: 74rpx;
	&-name {
		padding: 0 40rpx;

		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		text {
			margin-right: 14rpx;
		}
		.iconfont {
			font-size: $fontSize;
		}
	}

	&-tab {
		padding: 0;
	}
	&-body {
		
		&-wu {
			text-align: center;
			margin-top: 100rpx;
			
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
}
</style>
