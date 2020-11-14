<template>
	<view class="filladdress">
		<Head :title="index.addInfo" @navigateBack="navigateBack"></Head>
	
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
			<!-- 详细地址  -->
			<view class="filladdress-from-item">
				<view class="filladdress-from-item-name">{{index.address}}</view>
				<input v-model="site" type="text" value="" :placeholder="index.addressInfo" />
			</view>
		</view>

			<!-- 设为默认地址  -->
		<view class="filladdress-switch">
	
			<view class="filladdress-switch-txt">{{index.defaultAddress}}</view>
			<template>
				<u-switch v-model="isswitch" @change="change"></u-switch>
			</template>
		</view>

		<footerbtn :footername="$t('commonality.save')" @preserve="preserve"></footerbtn>
		<view class="filladdress-picker">
			<template>
				<u-picker mode="region" v-model="show" :title="index.ProvincesSelet" 
				:safe-area-inset-bottom="true"
				 :cancel-text="$t('commonality.cancel')"
				 :confirm-text="$t('commonality.confirm')"
				 @confirm="confirm" @cancel="cancel"></u-picker>
			</template>
		</view>
	</view>
</template>

<script>
// import Head from '../../components/navigation.vue';
import { Address } from '../../api/index.js';
export default {
	data() {
		return {
			show: false,
			isswitch: true,
			name: '',
			phone: '',
			site: '',
			provincesval: '',
			provinces: '',
			city: '',
			county: ''
		};
	},
	computed:{
		index(){
			return this.$t('index')
		}
	},
	methods: {
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
		preserve() {
			let data = {
				token: uni.getStorageSync('token'),
				name: this.name,
				phone: this.phone,
				provinces: this.provinces,
				city: this.city,
				county: this.county,
				address: this.site,
				status: this.isswitch ? '2' : '1'
			};
			Address(data).then(res => {
				console.log(res);

				uni.navigateBack()
			});
		},
		change(status) {
			
			this.isswitch = status
			// console.log(status);
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="less" scoped>
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
