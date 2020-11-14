<template>
	<view class="community">
		<view class="community-c">
			
		
		<view class="community-tab">
			<u-tabs
			:list="tabsList" 
			:bar-style="{background: '#DB1F13'}"
			font-size="36"
			:is-scroll="true" 
			:current="tab" 
			active-color="#333" 
			inactive-color="#999"
			@change="activeTabs"></u-tabs>
			<!-- <view class="community-tab-icon" @click="TipNews">
				<image src="@/static/img/xiaoxi.png" mode=""></image>
				<text>23</text>
			</view> -->
		</view>

		<view class="community-concent1-active" v-if="tab == 0">
			<view class="community-tab1">
				<u-tabs 
				:list="tieTabs" 
				:bar-style="{background: '#DB1F13'}"
				font-size="36"
				:is-scroll="true" 
				:current="tieTab" 
				active-color="#333" 
				inactive-color="#999" 
				@change="tieChange"></u-tabs>
			</view>
			<swiper :style="{ height: height }" :current="tieTab" @change="swiperChange">
				<swiper-item v-for="(tab, i) in tieTabs" :key="i">
						<mescroll-item ref="mescrollItem" :i="i" :index="tieTab" :tabs="tieTabs"></mescroll-item>
				</swiper-item>
			</swiper>
		</view>

		<view class="community-concent1-active" v-if="tab == 1">
			<view class="community-tab1">
			
				<u-tabs
				:list="articleTabs" 
				:bar-style="{background: '#DB1F13'}"
				font-size="36"
				:is-scroll="false" 
				:current="articleTab" 
				active-color="#333" 
				inactive-color="#999" 
				@change="activeChange"></u-tabs>
			</view>
			<swiper :style="{ height: height }" :current="articleTab" @change="swiperChange">
				<swiper-item v-for="(tab, i) in articleTabs" :key="i">
						<ActiveItem ref="mescrollItem" :i="i" :index="articleTab" :tabs="articleTabs"></ActiveItem>
				</swiper-item>
			</swiper>
		</view>
		<!-- 编写评论 -->
		<view class="writepl" @click="postcomment"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fabu.png" mode=""></image></view>
		</view>
		<u-tabbar v-model="TabBarcurrent" :list="tabBarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
import { tieType, tieMessage, tieList, getNewsType, newsList, focusCreate, focusDel } from '@/api/community.js';
import MescrollItem from './communityItem.vue'
import ActiveItem from './activeItem.vue'

export default {
	components: {
		MescrollItem,ActiveItem
	},
	data() {
		return {
			TabBarcurrent:3,
			height: "400px", // 需要固定swiper的高度
			// 贴吧文章tab
			tab: 0,
			tabsList: [{ name: '贴吧' }, { name: '文章' }],
			// 文章tab
			articleTab: 0,
			articleTabs: [],
			// 贴吧tab
			tieTab: 0,
			tieTabs: [],
			
			activeTab: 0,
			backColor: '',
		
		
	
		

			// 文章分类
			articlePage: 1,
			articleSize: 10,
		
			isFocus: '',
			page: 1,
			size: 10,
		
		};
	},
	async onLoad() {
		// 需要固定swiper的高度
		this.height = uni.getSystemInfoSync().windowHeight + 'px'
		// 贴吧分类
		let res = await tieType();
		this.tieTabs = res.data;


		// 文章分类
		let res1 = await getNewsType();
		this.articleTabs = res1.data;
		
		

		// 消息列表
		this.tieMessageList();
	},
	computed: {
		...mapState('index', ['tabBarlist'])
	},
	methods: {
		// 轮播菜单
		swiperChange(e){
			this.tieTab = e.detail.current
		},

	
		// 消息列表
		async tieMessageList() {
			let data = { token: uni.getStorageSync('token'), page: this.page };
			let res = await tieMessage(data);
			console.log(res);
		},
		
		// 跳转文章详情
		articleDetail(e) {
			uni.navigateTo({
				url: `../community/articleDetail?tieId=${e}&type=2`
			});
		},
		// 发布帖子
		postcomment() {
			uni.navigateTo({
				url: '../community/postcomment'
			});
		},
		// 贴吧、文章
		activeTabs(e) {
			console.log(e);
			this.tab = e;
		},
	
		tieList(i, e) {
			// console.log(i,e)
			this.typeId = e;
			
		},
			// 文章分类tab
		activeChange(i){
			this.articleTab = i
		},
		// 贴吧分类
		tieChange(i) {
				this.tieTab = i;
		},
		// 消息
		TipNews() {
			uni.navigateTo({
				url: '../user/news'
			});
		}
	}
};
</script>

<style lang="scss" scoped>

.community-c-isFocus {
	width: 130rpx;
	height: 46rpx;
	background: #ff4a3e;
	display: flex;
	justify-content: center;
	align-items: center;

	color: #ffeeee;
	font-size: $fontSize - 6;
	border-radius: 10px;
}
.community-concent1-active {
	padding-top: 150rpx;
}
.community-concent-item-video /deep/ uni-video {
	width: 100% !important;
}
.community {
	.writepl {
		position: fixed;
		right: 30rpx;
		bottom: 135rpx;
		width: 104rpx;
		height: 104rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	&-tab {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #ffffff;
		padding-left: 30%;
		padding-right: 30%;
		display: flex;
		align-items: center;
		z-index: 99;

		&-icon {
			position: absolute;
			right: 40rpx;
			// margin:0 40rpx;
			width: 44rpx;
			height: 44rpx;
			image {
				width: 100%;
				height: 100%;
			}
			text {
				position: absolute;
				right: -8rpx;
				top: -8rpx;
				display: block;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 32rpx;
				height: 32rpx;
				border-radius: 50%;
				background: #db1f13;

				font-size: $fontSize - 14;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
	&-tab1 {
		z-index: 99;
		width: 100%;
		position: fixed;
		left: 0;
		top: 88rpx;
		background: #ffffff;
		padding: 0 10rpx;
	}
	
	
}
</style>
