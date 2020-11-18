<template>
	<view class="community">
		<view class="community-c">
			<view class="community-tab">
				<u-tabs
					:list="tabsList"
					:bar-style="{ background: '#DB1F13' }"
					font-size="36"
					:is-scroll="true"
					:current="tab"
					active-color="#333"
					inactive-color="#999"
					@change="activeTabs"
				></u-tabs>
				<!-- <view class="community-tab-icon" @click="TipNews">
				<image src="@/static/img/xiaoxi.png" mode=""></image>
				<text>23</text>
			</view> -->
			</view>

			<view class="community-concent1-active" v-if="tab == 0">
				<view class="community-tab1">
					<view class="community-tab1-item" v-for="(item, index) in tieTabs" :class="index == tieTab ? 'activeBg' : ''" :key="item.id" @click="language(index)">
						{{ item.name }}
					</view>

					<view class="community-tab1-top">
						<view class="community-tab1-top-name">置顶</view>
						<view class="community-tab1-top-txt hidden">博学教育APP2.0上线内容内容内容内容内容内容内容</view>
					</view>
					<view class="community-tab1-top">
						<view class="community-tab1-top-name">置顶</view>
						<view class="community-tab1-top-txt hidden">博学教育APP2.0上线内容内容内容内容内容内容内容</view>
					</view>
				</view>
				<view :style="{ paddingTop: this.tieheight }"></view>
				<swiper :style="{ height: height }" :current="tieTab" @change="swiperChange">
					<swiper-item v-for="(tab, i) in tieTabs" :key="i"><mescroll-item ref="mescrollItem" :i="i" :index="tieTab" :tabs="tieTabs"></mescroll-item></swiper-item>
				</swiper>
			</view>

			<view class="community-concent1-active" v-if="tab == 1">
				<view class="community-tab2">
					<view
						class="community-tab1-item"
						v-for="(item, index) in articleTabs"
						:class="index == articleTab ? 'activeBg' : ''"
						:key="item.id"
						@click="activeChange(index)"
					>
						{{ item.name }}
					</view>

					<view class="community-tab1-top">
						<view class="community-tab1-top-name">置顶</view>
						<view class="community-tab1-top-txt hidden">博学教育APP2.0上线内容内容内容内容内容内容内容</view>
					</view>
					<view class="community-tab1-top">
						<view class="community-tab1-top-name">置顶</view>
						<view class="community-tab1-top-txt hidden">博学教育APP2.0上线内容内容内容内容内容内容内容</view>
					</view>
				</view>
				<swiper :style="{ height: height }" :current="articleTab" @change="swiperChange">
					<swiper-item v-for="(tab, i) in articleTabs" :key="i"><ActiveItem ref="mescrollItem" :i="i" :index="articleTab" :tabs="articleTabs"></ActiveItem></swiper-item>
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
import MescrollItem from './communityItem.vue';
import ActiveItem from './activeItem.vue';

export default {
	components: {
		MescrollItem,
		ActiveItem
	},
	data() {
		return {
			TabBarcurrent: 3,
			height: '400px', // 需要固定swiper的高度
			tieheight: '10px',
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
			size: 10
		};
	},
	async onLoad() {
		// 需要固定swiper的高度
		this.height = uni.getSystemInfoSync().windowHeight + 'px';
		
		// 贴吧分类
		let res = await tieType();

		this.tieTabs = res.data;

		// 文章分类
		let res1 = await getNewsType();
		this.articleTabs = res1.data;

		// 消息列表
		this.tieMessageList();
	},
	onShow() {
		this.$nextTick(() => {
			this.getHeight();
		});
	},
	computed: {
		...mapState('index', ['tabBarlist'])
	},
	methods: {
		// 轮播菜单
		swiperChange(e) {
			this.tieTab = e.detail.current;
		},
		// 计算tab高度
		getHeight() {
			this.$nextTick(()=>{
				uni.getSystemInfo({
					success: (res)=> {
						// res - 各种参数
						// console.log(res.windowWidth); // 屏幕的宽度
				
						let info = uni.createSelectorQuery().select('.community-tab1');
						info.boundingClientRect((data)=> {
							//data - 各种参数
				
							console.log(data); // 获取元素宽度
							this.tieheight = 104 + data.height;
							console.log(this.tieheight);
						}).exec();
					}
				});
			})
			
		},

		// 消息列表
		async tieMessageList() {
			let data = { token: uni.getStorageSync('token'), page: this.page };
			let res = await tieMessage(data);
			console.log(res);
		},
		language(i) {
			this.tieTab = i;
			this.tieTab = i;
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
		activeChange(i) {
			this.articleTab = i;
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
.activeBg {
	background: linear-gradient(181deg, #f99c7e 0%, #fe5750 100%) !important;
	color: #fff !important;
}
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
	// padding-top: 390rpx;
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
		// padding: 0 10rpx;
		padding-top: 40rpx;
		padding-left: 40rpx;
		display: flex;
		flex-wrap: wrap;
		&-item {
			margin-right: 18rpx;
			min-width: 156rpx;
			height: 80rpx;
			background: #eeeeee;
			border-radius: 10px;
			line-height: 80rpx;
			text-align: center;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			padding: 0 25rpx 0rpx;
			margin-bottom: 20rpx;
		}
		&-top {
			display: flex;
			align-items: center;
			width: 100%;
			padding-bottom: 20rpx;
			&-name {
				width: 86rpx;
				height: 32rpx;
				border: 1rpx solid #df3b30;
				color: #df3b30;
				font-size: 24rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 10px;
				margin-right: 20rpx;
			}
			&-txt {
				flex: 1;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
}
</style>
