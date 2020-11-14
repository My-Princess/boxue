<template>
	<view class="filladdress">
		<Head :title="index.addInfo" @navigateBack="navigateBack">
			<template v-slot:right>
				<view @click="del">{{index.del}}</view>
			</template>
		</Head>

		<view class="filladdress-from">
			<!-- 收货人 -->
			<view class="filladdress-from-item">
				<view class="filladdress-from-item-name">{{index.consignee}}</view>
				<input v-model="name" type="text" value="" :placeholder="index.please" />
			</view>
			<!-- 联系方式 -->
			<view class="filladdress-from-item">
				<view class="filladdress-from-item-name">{{index.contactWay}}</view>
				<input v-model="phone" type="text" value="" :placeholder="index.please" />
			</view>
			<!-- 省市区 -->
			<view class="filladdress-from-item" @click="location">
				<view class="filladdress-from-item-name">{{index.Provinces}}</view>
				<input v-model="provincesval" type="text" value="" :placeholder="index.please" />
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/youjiantou.png" mode=""></image>
			</view>
			<!-- 详细地址 -->
			<view class="filladdress-from-item">
				<view class="filladdress-from-item-name">{{index.address}}</view>
				<input v-model="site" type="text" value="" :placeholder="index.addressInfo" />
			</view>
		</view>

		<!-- 开关 -->
		<view class="filladdress-switch">
			<view class="filladdress-switch-txt">{{index.defaultAddress}}</view>
			<template>
				<u-switch v-model="isswitch" @change="change"></u-switch>
			</template>
		</view>

		<footerbtn :footername="$t('commonality.save')" @preserve="preserve"></footerbtn>
		<view class="filladdress-picker">
			<template>
				<u-picker mode="region" v-model="show" 
				 :title="index.ProvincesSelet"
				 :cancel-text="$t('commonality.cancel')"
				 :confirm-text="$t('commonality.confirm')"
				 :safe-area-inset-bottom="true" @confirm="confirm" @cancel="cancel"></u-picker>
			</template>
		</view>

		<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
			<view class="tipAddress">
				<view class="tipAddress-txt">{{index.delTip}}</view>
				<view class="tipAddress-btn">
					<view class="tipAddress-btn-qx" @click="tipcancel">{{$t('commonality.cancel')}}</view>
					<view class="tipAddress-qr" @click="tipaffirm">{{$t('commonality.confirm')}}</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
import { editAddress, delAddress } from '../../api/index.js';
export default {
	data() {
		return {
			show: false,
			tipshow: false,
			isswitch: false,
			id: '',
			name: '',
			phone: '',
			site: '',
			provincesval: '',
			provinces: '',
			city: '',
			county: ''
		};
	},
	onLoad() {
		let fromData = uni.getStorageSync('addressinfo');
		console.log('取出来的数据', fromData);
		this.id = fromData.id;
		this.name = fromData.name;
		this.phone = fromData.phone;
		this.site = fromData.address;
		this.provincesval = `${fromData.provinces}  ${fromData.city}  ${fromData.county}`;
	},

	computed:{
		index(){
			return this.$t('index')
		},
	},
	methods: {
		// 取消
		tipcancel() {
			this.tipshow = false;
		},
		// 确认
		tipaffirm() {
			let data = { token: uni.getStorageSync('token'), id: this.id };
			delAddress(data).then(res => {
				uni.navigateBack();
			});
		},
		del() {
			this.tipshow = true;
		},
		location() {
			this.show = true;
		},
		confirm(e) {
			console.log('确定了', e);
			this.provincesval = `${e.province.label}  ${e.city.label}  ${e.area.label}`;
			this.provinces = e.province.label;
			this.city = e.city.label;
			this.county = e.area.label;
		},
		cancel(e) {
			console.log('取消了', e);
		},
		change(status) {
			this.isswitch = status;
			// console.log(status);
		},
		navigateBack(){
			uni.navigateBack()
		},
		preserve() {
			let data = {
				token: uni.getStorageSync('token'),
				type: 'update',
				id: this.id,
				name: this.name,
				phone: this.phone,
				provinces: this.provinces,
				city: this.city,
				county: this.county,
				address: this.site,
				status: this.isswitch ? '2' : '1'
			};
			editAddress(data).then(res => {
				console.log(res);
				uni.navigateBack();
			});
		}
	}
};
</script>

<style lang="less" scoped>
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
			color: rgba(51, 51, 51, 1);
		}
	}
}

.filladdress-picker /deep/ .u-picker__title {
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
}
.filladdress-picker /deep/ .u-picker-view {
	margin-top: -150rpx;
}
.filladdress {
	&-switch {
		margin-top: 30rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		&-txt {
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
	&-from {
		margin: 0 40rpx;
		padding-bottom: 178rpx;
			border-bottom: 1rpx solid #EDEDED;
		&-item:nth-child(1) {
			padding-top: 0;
		}
		&-item:last-child {
			border-bottom: none;
		}
		&-item {
			display: flex;
			align-items: center;
			padding: 30rpx 0;
			border-bottom: 1rpx solid #eeeeee;
			&-name {
				width: 180rpx;
				text-align: left;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			input::-webkit-input-placeholder {
				color: rgba(153, 153, 153, 1);
			}
			input::-moz-placeholder {
				/* Mozilla Firefox 19+ */
				color: rgba(153, 153, 153, 1);
			}
			input:-moz-placeholder {
				/* Mozilla Firefox 4 to 18 */
				color: rgba(153, 153, 153, 1);
			}
			input:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: rgba(153, 153, 153, 1);
			}
			input {
				width: 90%;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				// background: red;
			}
			image {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 17rpx;
				height: 32rpx;
			}
		}
	}
}
</style>
