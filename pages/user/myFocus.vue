<template>
	<view class="myfocus">
		<view class="myfocus-box">
			<Head title="我的关注" @navigateBack="navigateBack"></Head>
			<view class="myfocus-tab">
				<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" :current="current" :is-scroll="false" @change="change"></u-tabs>
			</view>
			<view class="myfocus-body">
				<view class="myfocus-active" v-if="current == 0">
					<view class="myfocus-body-list" v-if="attentionList.length">
						<AttentionList :attentionList="attentionList" type=0></AttentionList>
						<view class="myfocus-body-list-di">没有更多</view>
					</view>
					<view class="blank" v-else>
						你还没有关注过别人哦
					</view>
				</view>
				<view class="myfocus-active" v-if="current == 1">
					<view class="myfocus-body-list" v-if="focusFansList.length">
						<AttentionList :attentionList="focusFansList" type=1></AttentionList>
						<view class="myfocus-body-list-di">没有更多</view>
					</view>
					<view class="blank" v-else>
						还没有人关注你哦
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { focusList,focusFans } from '@/api/user.js';
export default {
	data() {
		return {
			current: 0,
			// 关注列表
			attentionList: [],
			focusFansList:[],
			attentionPage:1,
			focusFansPage:1,
			barStyle: {
				background: '#DB1F13'
			},
			list: [
				{
					name: '关注'
				},
				{
					name: '粉丝'
				}
			]
		};
	},
	onLoad(options) {
		this.current = options.type;
		this.attention();
		this.getfocusFans()
	},
	methods: {
		// 关注列表
		async attention() {
			let data = { token: uni.getStorageSync('token'), page:this.attentionPage };
			let res = await focusList(data);
			console.log('关注列表', res);
			this.attentionList = res.data.list;
		},
		// 我的粉丝
		async getfocusFans() {
			let data = { token: uni.getStorageSync('token'), page:this.focusFansPage };
			let res = await focusFans(data);
			console.log('粉丝列表', res);
			this.focusFansList = res.data.list
		},
		
		change(index) {
			this.current = index;
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
	.blank{
		font-size: 28rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
.myfocus-body {
	padding: 0 40rpx;
	&-list {
		&-di {
			margin-top: 40rpx;
			text-align: center;
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
}
</style>
