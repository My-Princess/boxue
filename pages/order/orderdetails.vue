<template>
	<view class="orderdetails ishow">
		<Head title="订单详情"></Head>
	<!-- 	<view class="orderdetails-info">
			<view class="orderdetails-info-box">
				<view class="orderdetails-info-box-top">
					<view class="orderdetails-info-box-top-title">揽件中</view>
					<view class="orderdetails-info-box-top-concent">
						<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${OrderInfo.image}`" mode=""></image>

						<view class="orderdetails-info-box-top-concent-r">
							<view class="orderdetails-info-box-top-concent-r-t">
								<view class="orderdetails-info-box-top-concent-r-t-name">{{ OrderInfo.title }}</view>
								<view class="orderdetails-info-box-top-concent-r-t-text">{{ OrderInfo.content }}</view>
							</view>
							<view class="orderdetails-info-box-top-concent-r-b">圆通速递:158293574102845985</view>
						</view>
					</view>
				</view>

				<view class="lee-logistics-list">
					<view class="xixi">
						<view class="lee-logistics-msg-context-flex" :style="`height:${height}px;width:10px;background-image: linear-gradient(to bottom, #ccc 0%, #ccc 50%, transparent 50%);background-size: 3px 10px;background-repeat: repeat-y;`"></view>
						<view class="lee-logistics-msg" v-for="(v, k) in list" :key="k">
							<view class="lee-logistics-msg-time">
								<view>{{ v.AcceptTime.split(' ')[0] }}</view>
								<view>{{ v.AcceptTime.split(' ')[1] }}</view>
							</view>
		
						
							<view class="lee-logistics-msg-context">
								
								<image :src="v.icon" mode=""></image>
								<view class="">{{ v.AcceptStation }}</view>
							</view>
						</view>
					</view>
		
				</view>
		
			</view>
			<view class="orderdetails-info-close" @click="close"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/qixiao.png" mode=""></image></view>
		</view> -->
	</view>
</template>

<script>
import { goodsKdn } from '@/api/index.js';
export default {
	data() {
		return {
			
			OrderInfo: {},
			height:0,
			//物流信息
			list: [
				{
					AcceptTime: '',
					timeArr: ['2020-04-12', '13:00:57'],
					AcceptStation: '',
					// icon: require('https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/1.png')
				},
				
			]
		};
	},
	async onLoad() {
		
		this.OrderInfo = uni.getStorageSync('OrderInfo');
		// console.log(OrderInfo)
		let SiteInfo = uni.getStorageSync('SiteInfo')
		this.list[0].AcceptStation = `[收货地址]${SiteInfo.provinces}${SiteInfo.city}${SiteInfo.county}${SiteInfo.address}`
		

		let data = { token: uni.getStorageSync('token'), id: this.OrderInfo.id };
		let res = await goodsKdn(data);
		console.log(res);
		res.data.map((v,i)=>{
			this.list.push(v)
			if(i==0){
				console.log('11')
				// this.list.push(Object.assign({},v,{icon:require('https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fa.png')}))
	
	// 			this.list[1].icon =require('https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fa.png')
			}
				
			
		})
		console.log(this.list)
		
		this.$nextTick(()=>{
			this.getSiteData();
		})
	
		
	},
	methods: {
		getSiteData() {
			var that = this
			// let SiteInfo = uni.getStorageSync('SiteInfo')
			uni.getSystemInfo({
			　　success: function(res) { // res - 各种参数
			　　   console.log(res); // 屏幕的宽度 
			
			　　    let info = uni.createSelectorQuery().select(".xixi");
			　　　  　info.boundingClientRect(function(data) { //data - 各种参数
			　　　  　console.log(data)  // 获取元素宽度i
			           that.height = data.height - 88
					   console.log(that.top)
			　　    }).exec()
			       }
			});
		},
		close(){
			uni.navigateBack();
		}
	},
	filters: {
	       formatDate(time) {
	           let date = new Date(time * 1000);
			   
	           return dateFormat.formatDate(date, "yy:mm");
	       }
	   },
};
</script>

<style lang="less" scoped>
.lee-logistics-btn {
	margin-top: 70rpx;
	display: flex;
	justify-content: center;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(102, 102, 102, 1);
}
.lee-logistics-list {
	position: relative;
	// display: flex;
	// flex-direction: column;
	padding: 45rpx 35rpx 38rpx 45rpx;
	// padding: 30rpx;
	// background-color: red;
	border-radius: 8rpx;
	box-shadow: 0 0 2rpx rgba(0, 0, 0, 0.15);
	// padding-top: 50rpx;
	height: 600rpx;
	overflow: hidden;
}
.lee-logistics-msg {
	display: flex;
	

	&-time {
		width: 170rpx;
		display: flex;
		flex-direction: column;

		padding-right: 32rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	&-context {
		flex: 1;
		width: 0;
		padding-left: 36rpx;
		// padding-bottom: 68rpx;
			margin-bottom: 68rpx;
		// border-left: 2rpx dashed rgba(220, 220, 220, 1);
		position: relative;

		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 40rpx;
		&-flex{
			position: absolute;
			top: 70rpx;
			left: 215rpx;
		
		}
		image{
			display: block;
			width:42rpx;
			height:42rpx;
			background:rgba(153,153,153,1);
			border-radius:21px;
			position: absolute;
			top: 50%;
			left: -22rpx;
			transform: translateY(-50%);
		}

		// &::before {
		// 	--size: 45rpx;
		// 	content: '';
		// 	position: absolute;
		// 	width: var(--size);
		// 	height: var(--size);
		// 	top: calc(-1 * var(--size) / 10);
		// 	left: calc(-1 * var(--size) / 2);
		// 	background: rgba(153, 153, 153, 1);
		// 	border-radius: 50%;
		// }
	}
	// &-context:nth-child(1) {
	// 	// padding-bottom: 0; 
	// 	margin-bottom: 0rpx;
	// 	background: red;
	// 	// margin-bottom: 0rpx;
	// }

	&:first-child > &-context {
	}
	// &:first-child > &-context {

	// 	// border-color: red;
	// 	// border-left-style: dashed;

	// 	// &::before {
	// 	// 	--size: 30rpx;
	// 	// 	// background-color: $uni-color-primary;
	// 	// }
	// }
}

.ishow {
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	// opacity:0.5;
}
.orderdetails {
	position: relative;

	&-info {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		&-box {
			margin-bottom: 58rpx;

			width: 672rpx;
			height: 942rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10rpx;
			&-top {
				width: 672rpx;
				height: 332rpx;
				background: linear-gradient(0deg, rgba(220, 42, 31, 1) 0%, rgba(243, 88, 78, 1) 100%);
				&-title {
					display: flex;
					justify-content: center;
					padding: 37rpx 0;
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);
				}
				&-concent {
					display: flex;
					padding: 0 30rpx;
					image {
						width: 230rpx;
						height: 180rpx;
						border-radius: 10px;
					}
					&-r {
						margin-left: 30rpx;
						padding: 6rpx 0;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						&-t {
							&-name {
								padding-bottom: 12rpx;
								font-size: 30rpx;
								font-family: PingFang SC;
								font-weight: 800;
								color: rgba(255, 255, 255, 1);
							}
							&-text {
								font-size: 22rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(238, 238, 238, 1);
							}
						}
						&-b {
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
						}
					}
				}
			}
		}
		&-close {
			width: 80rpx;
			height: 80rpx;
			border: 3rpx solid rgba(255, 255, 255, 1);

			border-radius: 50%;
			position: absolute;
			transform: translateX(-80rpx);
			left: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 34rpx;
				height: 35rpx;
				// border:2px solid rgba(255,255,255,1);
				border-radius: 2px;
			}
		}
	}
}
</style>
