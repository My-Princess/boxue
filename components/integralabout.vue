<template>
	<view class="integralabout">
		<view class="integralabout-title">
			{{cloumData.name}}
		</view>
		<view class="integralabout-info">
			<view class="integralabout-info-item" v-for="(item,i) in ListData" :key="i" @click="pointsdetails(item,i)">
				<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}`" mode=""></image>
				<view class="integralabout-info-item-right">
					<view class="integralabout-info-item-right-concent">
						<view class="integralabout-info-item-right-concent-title">
							{{item.title}}
						</view>
						   
						<text>有限期至{{item.update_time | formatDate}}</text>
					</view>
					<view class="integralabout-info-item-right-text">
						<text class="integralabout-info-item-right-text-kc">库存:{{item.inventory}}</text>
						<text class="integralabout-info-item-right-text-jf">{{item.integral}}积分</text>
					</view>
				</view>
			</view>
			

		</view>
		<view class="integralabout-btn" @click="loading(cloumData.id)" v-if="ishow">
			点击加载更多
		</view>
	</view>
</template>

<script>
	 import dateFormat from '../util/Date.js'
	 	import { getGoods } from '../api/index.js'
	export default{
		props:{
			cloumData:{
				type:Object
			}
		},
		data(){
			return{
				ListData: [],
				start: 0,
				limit: 6,
				total:'',
				page:0,
				ishow:''
			}
		},
		created() {
			// if(this.cloumData.goods){
			// 	this.total = this.cloumData.goods.length;
			// 	this.ListData = this.cloumData.goods.slice(this.start, this.limit);
			// 	console.log('111', this.ListData)
			// }
			 this.cloumData.goods < 10 ? this.ishow=false : this.ishow = true
			this.ListData = this.cloumData.goods
		},
		filters: {
		       formatDate(time) {
		           let date = new Date(time * 1000);
				   
		           return dateFormat.formatDate(date, "yyyy年MM月dd日");
		       }
		   },
		methods:{
			pointsdetails(e,i){
				console.log('触发详情页')
				this.$emit('pointsdetailsbox',e,i)
			},
			loading(i) {
				// if (this.start < Math.ceil(this.total / this.limit)) {
				// 	// this.start = this.start + 6;
				// 	this.limit = this.limit + this.limit;
				// }
				// this.ListData = this.cloumData.goods.slice(this.start, this.limit);
				++this.page
				
				let data = {token:uni.getStorageSync('token'),page:this.page,cate_id:i}
				getGoods(data).then(res=>{
					console.log('积分',res)
					 // this.getData = res.data
					 res.data.data[0].goods.length < 10 ? this.ishow=false : this.ishow = true
					 this.ListData =  this.ListData.concat(res.data.data[0].goods);
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.integralabout {
		padding-top: 40rpx;

		&-title {
			padding-bottom: 23rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}

		&-info {
			&-item:nth-last-child(-n+1){
				padding-bottom: 50rpx;
			}
			&-item {
				display: flex;
				padding-bottom: 38rpx;
				image {
					width: 324rpx;
					height: 174rpx;
					margin-right: 18rpx;
				}

				&-right {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding-top: 22rpx;
					padding-bottom: 10rpx;
					&-concent {
						&-title {
							font-size:32rpx;
							font-family:PingFang SC;
							font-weight:bold;
							color:rgba(51,51,51,1);
							padding-bottom: 10rpx;
						}
						text{
							display: block;
							font-size:24rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(153,153,153,1);
						}
					}

					&-text {
						display: flex;
						justify-content: space-between;
						align-items: center;
						text{
							font-family:PingFang SC;
							font-weight:500;
						}
						&-kc {
							font-size:22rpx;
							color:rgba(102,102,102,1);
						}

						&-jf {
							font-size:28rpx;
							color:rgba(220,42,31,1);
						}
					}
				}
			}
		}

		&-btn {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			border: 1px solid rgba(238, 238, 238, 1);
			border-radius: 10px;

			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			margin-bottom: 55rpx;
		}
	}
</style>
