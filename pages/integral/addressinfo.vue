<template>
	<view class="addressinfo">
		<Head :title="index.selectsite" @navigateBack="navigateBack"></Head>
	
		<view class="addressinfo-concent">
			<view class="addressinfo-item" v-for="(item, i) in getRessData" :key="item.id" >
				<view class="addressinfo-item-text" @click="pitchon(item)">
					<view class="addressinfo-item-text-top">
						<!-- 默认 -->
						<text class="addressinfo-item-text-top-default" v-if="item.status == 2">{{index.Default}}</text>
						<text class="addressinfo-item-text-top-name">{{ item.name }}</text>
						<text class="addressinfo-item-text-top-number">{{ item.phone }}</text>
					</view>
					<!-- `${item.provinces} ${item.city} ${item.county} ${item.address}` -->
					<view class="addressinfo-item-text-bottom">{{ item.provinces }}{{ item.city }}{{ item.county }}{{ item.address }}</view>
				</view>
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bianji.png" mode="" @click="editAddress(item)"></image>
			</view>
		</view>
		<footerbtn :footername="index.addsite" @preserve="preserve"></footerbtn>
	</view>
</template>

<script>
// import Head from '../../components/navigation.vue';
// import footerBtn from '../../components/footerbtn.vue'
// getAddress
import { getAddress,Address,infoAddress } from '../../api/index.js';
export default {
	data() {
		return {
			id: '',

			getRessData: []
		};
	},
	onLoad(options) {
		
	},
	onShow() {
		this.getAddressData();
	},
	computed:{
		index(){
			return this.$t('index')
		}
	},
	
	methods: {
		getAddressData() {
			let data = { token: uni.getStorageSync('token') };
			getAddress(data).then(res => {
				this.getRessData = res.data;
			});
		},
		// getinfoAddress(){
			
		// },
		preserve() {
			uni.navigateTo({
				url: './filladdress'
			});
			
		},
	//         console.log("默认",e)
	// 			let data = { token: uni.getStorageSync('token'), name: e.name,phone:e.phone,provinces: e.provinces, city: e.city,county:e.county,address:e.address,status:'2' };
	// 			Address(data).then(res=>{
	// 				console.log('默认选中',res)
				
	// 				uni.navigateBack({
	// 					url:'./confirmOrder'
	// 				})
	// 			})
		pitchon(e){
		  
		   // let data = {token:uni.getStorageSync('token'),id:e.id}
		   // infoAddress(data).then(res=>{
		   //   	console.log('选择',res)
				uni.setStorage({
					key: 'selectAddress', //key的名称是 url
					data: e, //data中存放的是我的url地址
					success: function() {
						console.log('存储成功');
					}
				});
				
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				prevPage.$vm.searchVal = 1211;   //修改上一页data里面的searchVal参数值为1211
				uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
					delta: 1
				});
				// uni.navigateBack({
				// 	url:'./confirmOrder'
				// })
		   // })
		},
		editAddress(e) {
			let id = e.id;
		
			
			uni.setStorage({
				key: 'addressinfo', //key的名称是 url
				data: e, //data中存放的是我的url地址
				success: function() {
					console.log('存储成功');
				}
			});
			
			
			uni.navigateTo({
				url: `./editAddress?id=${id}`
			});
		},
		navigateBack(){
			uni.navigateBack()
		},
		
	}
};
</script>

<style lang="less" scoped>
.addressinfo {
	.addressinfo-concent {
		margin-bottom: 98rpx;
	}
	&-item {
		margin: 0 40rpx;
		padding: 34rpx 0rpx 30rpx 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eeeeee;
		&-text {
			&-top {
				margin-bottom: 14rpx;
				&-default{
					margin-right: 20rpx;
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:bold;
					
					color:rgba(219,41,31,1);
				}
				&-name {
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: rgba(51, 51, 51, 1);
					margin-right: 42rpx;
				}
				&-number {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-bottom {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		image {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 32rpx;
			height: 34rpx;
		}
	}

	&-item:first-child {
		padding-top: 0rpx;
		// background: red;
		// color: red;
	}
}
</style>
