<template>
	<view class="AttentionList">
		<view class="AttentionList-item" v-for="item in attentionList" :key="item.uid">
			<image :src="item.headImg" mode=""></image>
			<view class="AttentionList-item-c">
				<view class="AttentionList-item-c-t">{{ item.nickname }}</view>
				<view class="AttentionList-item-c-b">{{ item.create_time | formatDate }}</view>
			</view>
			<view class="AttentionList-item-r" v-if="type == 0" @click="attentionBtn(item)">{{ item.isClose == 1? '已互关' : '' }} {{item.isClose == 0 ? '已关注' : ''}}</view>
			<view class="AttentionList-item-r" v-if="type == 1" @click="beanBtn(item)" :class="item.isClose ? '' : 'isClose'">{{ item.isClose ? '已关注' : '关注' }}</view>
		</view>
	</view>
</template>

<script>

import dateFormat from '@/util/Date.js';
import { focusCreate, focusDel } from '@/api/community.js'
export default {
	props: {
		attentionList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		type:{
			type:String,

		}
	},
	data() {
		return {
			attention:'已关注',
			Concern:'关注'
		};
	},
	filters: {
		formatDate(time) {
			let date = new Date(time);
			return dateFormat.formatDate(date, 'yyyy-MM-dd');
		}
	},
	methods:{
		
		async attentionBtn(e){
			let data = {token:uni.getStorageSync('token'),focusId:e.uid}
			if(e.isClose == 1){
				console.log('互关')


				// e.isFocus = 1
				let res = await focusCreate(data)
				console.log(res)

				if(res.code == 0){
					e.isClose = 0
				}
			}else if(e.isClose == 0){
				// e.isFocus = 0
					console.log('已关')
				let res = await focusDel(data)
				console.log(res)
				if(res.code == 0){
					e.isClose = 1
					// this.attention = '关注'
				}
			}
		},
		async beanBtn(e){
			let data = {token:uni.getStorageSync('token'),focusId:e.uid}
			if(e.isClose == 0){
				console.log('关')


				// e.isFocus = 1
				let res = await focusCreate(data)
				console.log(res)

				if(res.code == 0){
					e.isClose = 1
				}
			}else if(e.isClose == 1){
				// e.isFocus = 0
				console.log('取消')
				let res = await focusDel(data)
				console.log(res)
				if(res.code == 0){
					e.isClose = 0
					// this.attention = '关注'
				}
			}
		}
	}
};
</script>

<style lang="scss">
.isClose {
	background: linear-gradient(180deg, #ff6a61 0%, #ff3425 100%) !important;
	color: #ffffff !important;
}
.AttentionList-item {
	padding: 38rpx 0;
	border-bottom: 1rpx solid #eeeeee;
	display: flex;
	align-items: center;
	image {
		display: block;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
	&-c {
		flex: 1;
		padding: 0 20rpx;
		&-t {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
		&-b {
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
	&-r {
		width: 130rpx;
		height: 42rpx;
		background: #ffffff;
		border: 1rpx solid #999999;
		border-radius: 20px;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
}
</style>
