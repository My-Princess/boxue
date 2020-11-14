<template>
	<view class="integrallist">
		<view class="integrallist-title">{{ listData.name }}</view>
		<view class="integrallist-info">
			<view class="integrallist-info-item" v-for="(item, i) in ListData" :key="item.id" @click="integraldown(item,i)">
				<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}`" mode=""></image>
				<view class="integrallist-info-item-name">{{ item.title }}</view>
				<view class="integrallist-info-item-text">
					<text class="integrallist-info-item-text-kc">库存:{{ item.inventory }}</text>
					<text class="integrallist-info-item-text-jf">{{ item.integral }}积分</text>
				</view>
			</view>
		</view>
		<view class="integrallist-btn" @click="loading(listData.id)" v-if="this.ishow">点击加载更多</view>
	</view>
</template>

<script>
	import { getGoods } from '../api/index.js'
export default {
	props: {
		listData: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	data() {
		return {
			ListData: [],
			start: 0,
			limit: 4,
			total:'',
			ishow:'',
			page:0,
		};
	},
	created() {
		// if(this.listData.goods){
		// 	this.total = this.listData.goods.length;
		// 	this.ListData = this.listData.goods.slice(this.start, this.limit);
		// 	console.log('111', this.ListData)
		// }
		this.listData.goods.length < 10 ? this.ishow = false : this.ishow = true
		this.ListData = this.listData.goods
	},


	watch: {
		listData(val) {
			
		}
	},

	methods: {
		integraldown(e,i) {
			this.$emit('integraldown',e,i);
		},
		loading(i) {
			// if (this.start < Math.ceil(this.total / this.limit)) {
			// 	// this.start = this.start + 6;
			// 	this.limit = this.limit + this.limit;
			// }
			// this.ListData = this.listData.goods.slice(this.start, this.limit);
			
			++this.page
			
			let data = {token:uni.getStorageSync('token'),page:this.page,cate_id:i}
			getGoods(data).then(res=>{
				console.log('积分首页',res)
				 // this.getData = res.data
				 res.data.data[0].goods.length < 10 ? this.ishow=false : this.ishow = true
				 this.ListData =  this.ListData.concat(res.data.data[0].goods);
			})
			
			// this.$emit('click',i,page)
		}
	}
};
</script>

<style lang="less" scoped>
.integrallist {
	padding-top: 40rpx;
	&-title {
		padding-bottom: 23rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
	&-info {
		display: flex;
		flex-wrap: wrap;
		&-item:nth-child(2n) {
			margin-right: 0rpx;
		}
		&-item:nth-child(n + 3) {
			padding-top: 38rpx;
		}
		&-item:nth-last-child(-n + 2) {
			padding-bottom: 42rpx;
		}
		&-item {
			width: 325rpx;
			margin-right: 20rpx;
			image {
				display: block;
				width: 100%;
				height: 447rpx;
				background: rgba(238, 238, 238, 1);
				border-radius: 10px;
			}
			&-name {
				padding-top: 20rpx;
				padding-bottom: 15rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				white-space: nowrap;
				overflow: hidden;
				white-space: nowrap;
			}
			&-text {
				display: flex;
				justify-content: space-between;
				align-items: center;
				text {
					font-family: PingFang SC;
					font-weight: 500;
				}
				&-kc {
					font-size: 22rpx;
					color: rgba(102, 102, 102, 1);
				}
				&-jf {
					font-size: 28rpx;
					color: rgba(220, 42, 31, 1);
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
		margin-bottom: 16rpx;
	}
}
</style>
