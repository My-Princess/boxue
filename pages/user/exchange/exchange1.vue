<template>
	<view class="exchange">
		<Head title="汇率转换器" @navigateBack="navigateBack"></Head>
		<view class="exchange-body">
			<view class="exchange-box">
				<view class="exchange-box-select" @click="SelectCountry(0)">
					<view class="exchange-box-select-l">
					
						<view class="exchange-box-select-l-name">{{ frontState.name }}</view>
					</view>
					<view class="iconfont icon-jiantou9"></view>
				</view>
				<view class="exchange-box-c"><input v-model="frontNumber" type="text" placeholder="0" /></view>
				<view class="exchange-box-tip">
					{{ transitionData[0].currencyFD }}{{ transitionData[0].currencyF_Name }} = {{ transitionData[0].exchange }}{{ transitionData[0].currencyT_Name }}
				</view>
			</view>
			<view class="exchange-qh"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/hljt.png" mode=""></image></view>
			<view class="exchange-box1">
				<view class="exchange-box1-select" @click="SelectCountry(1)">
					<view class="exchange-box1-select-l">
				
						<view class="exchange-box1-select-l-name">{{ queenState.name }}</view>
					</view>
					<view class="iconfont icon-jiantou9"></view>
				</view>
				<view class="exchange-box1-c"><input v-model="queenNumber" type="text" placeholder="0" /></view>
				<view class="exchange-box1-tip">
					{{ transitionData[1].currencyFD }}{{ transitionData[1].currencyF_Name }} = {{ transitionData[1].exchange }} {{ transitionData[1].currencyT_Name }}
				</view>
			</view>
			<view class="exchange-btn" :class="{ activeExchane }" @click="calculate">计算</view>
		</view>
	</view>
</template>

<script>
import $request from '@/util/request.js';
import { mapState } from 'vuex';
import json from '@/util/exchange.json'
export default {
	
	data() {
		return {
			// 转换前值数据
			frontNumber: '',
			// 转换后值数据
			queenNumber: '',
			// 转换数据
			transitionData: [
				{
					currencyF_Name: '',
					exchange: '',
					currencyT_Name: ''
				},
				{
					currencyF_Name: '',
					exchange: '',
					currencyT_Name: ''
				}
			],
			activeExchane: false
		};
	},
	onLoad() {
		// this.activeExchane = true;
		this.getExchange();
		console.log(json.rates);
	},
	computed: {
		...mapState('user', ['frontState', 'queenState'])
	},
	watch: {
		frontNumber: {
			handler(val) {
				// if(val){console.log(val);  this.activeExchane = true;}
			}
		}
	},
	methods: {
		// http://op.juhe.cn/onebox/exchange/currency?key=您申请的APPKEY&from=JPY&to=BHD
		// 获取转换汇率
		getExchange() {
			$request
				.HTTP({
					url: `/myhik/currency?key=e84fa55113a2d6b3a0880fdc1b959ee6&from=${this.frontState.code}&to=${this.queenState.code}`
				})
				.then(res => {
					console.log('汇率转换数据', res);
					this.transitionData = res.result;
				})
				.catch(() => {});
		},
		// 选择货币
		SelectCountry(index) {
			uni.navigateTo({
				url: `./SelectCountry?type=${index}`
			});
		},
		// 计算
		calculate() {
			this.queenNumber = this.frontNumber * this.transitionData[0].exchange;
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.activeExchane {
	background: #dc2a20;
	color: #ffffff;
}
.exchange-btn {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 600rpx;
	height: 98rpx;
	background: #eeeeee;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.exchange-body {
	padding: 0 40rpx;
}
.exchange-box1 {
	position: relative;
	top: -60rpx;
	height: 302rpx;
	background: #ffffff;
	border-radius: 10px;
	padding: 40rpx 20rpx;
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
	&-select {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #db1f13;
		&-l {
			display: flex;
			align-items: center;
			image {
				display: block;
				width: 58rpx;
				height: 58rpx;
				border-radius: 50%;
			}
			&-name {
				margin-left: 20rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: bold;
				color: #db1f13;
			}
		}
	}
	&-c {
		border-bottom: 1rpx solid #999999;
		input::-webkit-input-placeholder {
			color: #999999;
		}
		input::-moz-placeholder {
			/* Mozilla Firefox 19+ */
			color: #999999;
		}
		input:-moz-placeholder {
			/* Mozilla Firefox 4 to 18 */
			color: #999999;
		}
		input:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #999999;
		}
		input {
			display: block;
			font-size: 79rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
	}
	&-tip {
		margin-top: 10rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
}
.exchange-qh {
	width: 106rpx;
	height: 106rpx;
	position: relative;
	top: -30rpx;
	left: 50%;
	transform: translateX(-50%);
	z-index: 99;
	image {
		display: block;
		width: 100%;
		height: 100%;
	}
}
.exchange-box {
	height: 302rpx;
	background: linear-gradient(132deg, #ff3e32 0%, #ec0000 100%);
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 40rpx 20rpx;
	&-select {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		&-l {
			display: flex;
			align-items: center;
			image {
				display: block;
				width: 58rpx;
				height: 58rpx;
				border-radius: 50%;
			}
			&-name {
				margin-left: 20rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: bold;
				color: #ffffff;
			}
		}
	}
	&-c {
		/deep/ .uni-input-placeholder {
			color: #ff9999 !important;
		}
		border-bottom: 1rpx solid #999999;
		input::-webkit-input-placeholder {
			color: #ff9999 !important;
		}
		input::-moz-placeholder {
			/* Mozilla Firefox 19+ */
			color: #ff9999 !important;
		}
		input:-moz-placeholder {
			/* Mozilla Firefox 4 to 18 */
			color: #ff9999 !important;
		}
		input:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #ff9999 !important;
		}

		input {
			display: block;
			font-size: 79rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #ffffff;
		}
	}
	&-tip {
		margin-top: 10rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #ffe5e5;
	}
}
</style>
