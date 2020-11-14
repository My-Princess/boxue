<template>
	<view class="videoviewing">
		<view class="videoviewing-top">
			<view class="videoviewing-top-video">
				<view class="videoviewing-top-video-img">
					<view class="iconfont icon-zuojiantou" @click="navigateBack"></view>
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/videoFooter.png" mode="" v-if="ShowImg"></image>
					<view class="videos" v-if="!ShowImg">
						<!-- <video :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${videos}`" controls="controls" poster="../../static/img/视频底图.png"></video> -->
						<shoyu-video :videoUri="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${videos}`" @distincttype="distincttype" style="width: 100%;"></shoyu-video>
					</view>
				</view>
			</view>
			<view class="videoviewing-top-text">
				<view class="videoviewing-top-text-title">{{ detailsdata.title }}</view>
				<view class="videoviewing-top-text-txt">{{ applyInfo }}</view>
			</view>
			<view class="videoviewing-top-b">
				<!-- #ifdef H5 -->
				  <view class="videoviewing-top-b-r" @click="shareShow = true"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fhengq.png" mode=""></image></view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="videoviewing-top-b-r">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fhengq.png" mode=""></image>
					<button open-type="share" class="shareImg"></button>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<view class="videoviewing-line"></view>

		<view class="videoviewing-concent-tab">
			<u-tabs
				:list="tabs1"
				:bar-style="{ background: '#DB1F13' }"
				:is-scroll="false"
				:current="activeTab"
				active-color="#333"
				inactive-color="#999"
				@change="activeTabs"
			></u-tabs>
		</view>
		<!-- <view class="videoviewing-concent-line"></view> -->
		<view class="videoviewing-concent">
			<swiper :style="{ height: height }" :current="activeTab" @change="swiperChange">
				<swiper-item v-for="(tab, i) in tabs1" :key="i">
					<!-- :ref="'mescrollRef' + activeTab" -->
					<!-- <mescroll-uni  @init="mescrollInit" height="100%" top="40" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback"> -->
					<!-- 详情 -->
					<view class="videoviewing-concent-box1" v-if="activeTab == 0">
						<view class="videoviewing-concent-box1-img"><u-parse :content="detailsdata.content" noData="" /></view>
					</view>
					<!-- 目录 -->
					<view class="videoviewing-concent-box2" v-if="activeTab == 1">
						<u-collapse :head-style="headStyle" :body-style="bodyStyle" event-type="close" @change="change" >
							<k-scroll-view ref="k-scroll-view" :refreshType="refreshType" :refreshTip="refreshTip" :loadTip="loadTip" :loadingTip="loadingTip"
							 :emptyTip="emptyTip" :touchHeight="touchHeight" :height="heights" :bottom="bottom" :autoPullUp="autoPullUp"
							 :stopPullDown="stopPullDown" @onPullDown="handlePullDown" @onPullUp="handleLoadMore">
							<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="item.id" v-if="item.type">
								<view class="collapse-item" v-for="(v, i) in item.body" :key="i" @click="plays(v, i)">
									<view class="collapse-item-title" :class="i == activeIndex ? 'activeColor' : ''">{{ v.fileName || v.file_name }}</view>
								</view>
							</u-collapse-item>
								</k-scroll-view>
						</u-collapse>
					</view>

					<!-- 学员评价 -->
					<view class="videoviewing-concent-box3" v-if="activeTab == 2">
						<view class="student-item">
							<problemList>
								<template v-slot:head>
									<view class="problemList-head">
										<view class="problemList-head-name">{{ study.Mycommenttxt }}</view>
										<view class="problemList-head-btn" @click="myEvaluation">{{ study.Mycomment }}</view>
									</view>
								</template>
							</problemList>
						</view>
					</view>

					<!-- 问题讨论 -->
					<view class="videoviewing-concent-box3" v-if="activeTab == 3">
						<view class="student-item">
							<problemList>
								<template v-slot:head>
									<view class="problemList-head">
										<view class="problemList-head-name">{{ study.Myquestiontxt }}</view>
										<view class="problemList-head-btn" @click="Myquestion">{{ study.Myquestion }}</view>
									</view>
								</template>
							</problemList>
						</view>
					</view>
					<!-- </mescroll-uni> -->
				</swiper-item>
			</swiper>
			<!-- 已购买底部 -->
			<footerbtn v-if="detailsdata.hasBuy == 1" background="#00B281" fontSize="28rpx" :footername="study.haveBought" @preserve="frequency"></footerbtn>
			<!-- 未购买底部 -->
			<orderFooter :title="study.Signupimmediately" @footerBtn="footerBtn" v-if="detailsdata.hasBuy == 0">
				<template v-slot:left>
					￥{{ detailsdata.money }}
				</template>
			</orderFooter>
		</view>
		<!-- 分享弹窗 -->
		<view class="share">
			<template>
				<u-popup v-model="shareShow" mode="bottom">
					<view class="share-Box">
						<!-- 分享至 -->
						<view class="share-Box-title">{{ comm.ShareTo }}</view>
						<view class="share-scroll">
							<scroll-view class="share-scroll-box" scroll-x="true" scroll-left="0">
								<view class="share-scroll-list">
									<view class="share-scroll-item">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/WeCome.png" mode=""></image>
										<view class="share-scroll-item-name">WeCome</view>
									</view>
									<view class="share-scroll-item">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/facebook.png" mode=""></image>
										<view class="share-scroll-item-name">Facebook</view>
									</view>
									<view class="share-scroll-item">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/instagram.png" mode=""></image>
										<view class="share-scroll-item-name">instagram</view>
									</view>
								</view>
							</scroll-view>
						</view>
						<!-- 取消 -->
						<view class="share-cancel" @click="shareShow = false">{{ comm.cancel }}</view>
					</view>
				</u-popup>
			</template>
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
import orderFooter from '@/components/orderfooter.vue';
// import videoSwiper from './videoSwiper.vue'
import uParse from '@/components/gaoyia-parse/parse.vue'; //引入富文本组件
import { getIntroduce, getList, collectionintroduce, collectionList } from '@/api/study.js';
	import kScrollView from '@/components/k-scroll-view/k-scroll-view.vue';
// import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
// import MescrollMoreItemMixin from '@/components/mescroll-uni/mixins/mescroll-more-item.js';
export default {
	components: {
		orderFooter,
		uParse
		// videoSwiper
	},
	// mixins: [MescrollMixin, MescrollMoreItemMixin],
	data() {
		return {
			id: '',
			time: 0,
			index: 0,
			// 显示底图还是视频
			ShowImg: true,
			applyInfo: '', // 替换后的章节
			height: '400px', // 需要固定swiper的高度
			videos: '',
			shareShow: false,
			// 当前tab位置
			activeTab: 0,
			tabs1: [],
			// 清晰度
			type: 2,
			activeIndex: '', // 选中颜色的第几个
			directoryPage: 1, // 目录下拉
			detailsdata: {
				classId: '',
				content: '',
				number: '',
				money: '',
				title: '',
				hasBuy: ''
			},
			headStyle: {
				height: '80rpx',
				background: '#EEEEEE',
				padding: '0 40rpx'
			},

			bodyStyle: {
				paddingLeft: '40rpx'
			},
			// 目录
			itemList: [
				{
					head: '',
					body: [],
					type: 1
				},
				{
					head: '',
					body: [],
					open: false,
					type: 1
				}
			],
			
			refreshType: 'native',
			refreshTip: '正在下拉',
			loadTip: '获取更多数据',
			loadingTip: '正在加载中...',
			emptyTip: '--我是有底线的--',
			touchHeight: 50,
			heights: 0,
			bottom: 50,
			autoPullUp: true,
			stopPullDown: true, // 如果为 false 则不使用下拉刷新，只进行上拉加载
		
		};
	},
	computed: {
		study() {
			return this.$t('study');
		},
		comm() {
			return this.$t('commonality');
		}
	},
	onLoad(options) {
		// 需要固定swiper的高度
		this.height = uni.getSystemInfoSync().windowHeight + 'px';

		this.id = options.id;
		this.tabs1 = [{ name: this.study.particulars }, { name: this.study.catalogue }, { name: this.study.Student }, { name: this.study.discussion }];
		this.itemList[0].head = this.study.languageClass;
		this.itemList[1].head = this.study.SentenceClass;

		if (options.tab) this.tab1 = 1;
		// type 1 时是课程专区  其他是课程专区
		if (options.type == 1) {
			this.getVideo();
			this.getcollectionList();
			this.itemList[0].type = 0;
		} else {
			this.getIntroduceDta();
		}

		// 计数
		let mill = new Date().getTime();
		this.time = mill / 1000;

		var CountEvent = window.JAnalyticsInterface.Event.CountEvent;
		var cEvent = new CountEvent('COURSE_DETAIL');
		cEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
		window.JAnalyticsInterface.onEvent(cEvent);
	},
	watch: {
		activeTab(val) {
			console.log('111', val);
		}
	},

	//转发
	onShareAppMessage(res) {
		console.log(res);
		if (res.from === 'button') {
			console.log('来自页面内按钮分享');
		}
		return {
			path: `/pages/study/videoviewing?id=${this.id}`, //这是为了传参 onload(data){let id=data.id;}
			title: this.detailsdata.title
			// imageUrl: ''
		};
	},
	//发送到朋友圈
	onShareTimeline(res) {
		return {
			title: this.detailsdata.title, //字符串 自定义标题
			imageUrl: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/logo.png' //图片地址
		};
	},
	methods: {
		// 课程类型，1语音课，2.句子课
		// 课件类型，1.视频，2.音频
		...mapMutations('study', ['getCourseDetails']),

		// 课程详情
		getIntroduceDta() {
			let data = { token: uni.getStorageSync('token'), id: this.id };
			getIntroduce(data).then(res => {
				console.log('课程详情', res);
				this.detailsdata = res.data;

				this.applyInfo = this.study.applyInfo.replace('*', this.detailsdata.count);
				this.applyInfo = this.applyInfo.replace('**', this.detailsdata.number);
				console.log(this.applyInfo);
				// 保存详情内容
				this.getCourseDetails(this.detailsdata);
				this.getcatalog(1, 1);
				this.getcatalog(2, 1);
			});
		},
		// 课程语音、视频
		getcatalog(ck, type) {
			if (ck == 1) {
				let data1 = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.detailsdata.classId, page: this.directoryPage };
				getList(data1)
					.then(res => {
						console.log('语音视频', res);
						res.data.list.length < 10 ? (this.directoryPage = this.directoryPage) : (this.directoryPage = ++this.directoryPage);
						//设置列表数据
						if (this.directoryPage == 1) this.itemList[0].body = []; //如果是第一页需手动制空列表
						
						this.itemList[0].body = this.itemList[0].body.concat(res.data.list); //追加新数据
						// this.itemList[0].body = res.data.list;

						console.log('kankan', this.itemList);
					})
					
			}
			if (ck == 2) {
				let data1 = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.detailsdata.classId, page: '1' };
				getList(data1).then(res => {
					console.log('句子视频', res);

					this.itemList[1].body = res.data.list;
					console.log('kankan', this.itemList);
				});
			}
		},
		// 视频详情
		getVideo() {
			let data = { id: this.id };
			collectionintroduce(data).then(res => {
				console.log('视频详情', res);
				this.detailsdata = res.data;
			});
		},
		// 视频列表
		getcollectionList() {
			let data = { token: uni.getStorageSync('token'), classId: this.id };
			collectionList(data).then(res => {
				console.log('视频列表', res);
				this.itemList[1].body = res.data.list;
			});
		},
		// 轮播菜单
		swiperChange(e) {
			this.activeTab = e.detail.current;
		},
		
		myEvaluation() {
			uni.navigateTo({
				url: `/pages/study/myEvaluation?id=${this.id}`
			});
		},
		Myquestion() {
			uni.navigateTo({
				url: `/pages/study/Myquestion?id=${this.id}`
			});
		},
		handleLoadMore(){
			console.log('触发呀')
			this.getcatalog(1, 1);
		},
		handlePullDown(){
			console.log('掉毛')
		},
		activeTabs(e) {
			this.activeTab = e;
			// console.log(e)
		},
		// 清晰度
		distincttype(i) {
			this.type == i;
		},
		// 点击播放视频
		plays(e, i) {
			console.log('触发');
			this.ShowImg = false;
			// console.log('视频地址', e);
			e.downloadVideo.forEach(item => {
				if (item.type == this.type) {
					this.videos = item.file;
				}
			});
			// 改变颜色状态
			this.activeIndex = i;
		},
		shareBtn() {
			this.shareShow = true;
		},
		change(e) {
			console.log(e);
		},
		itemChange(e) {
			console.log(e);
		},
		footerBtn() {
			uni.navigateTo({
				url: '../group/group'
			});
		},

		frequency() {
			let id = this.detailsdata.classId;
			uni.navigateTo({
				url: `./frequency?class_id=${id}`
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	},
	onUnload() {
		console.log('卸载');
		let mill = new Date().getTime();
		let endtime = mill / 1000;
		console.log(Math.floor(endtime - this.time));
		console.log(this.detailsdata.title);
		console.log(this.detailsdata.classId);
		let Time = Math.floor(endtime - this.time);
		let title = this.detailsdata.title;
		let classId = this.detailsdata.classId;
		let hasBuy;
		if (this.detailsdata.hasBuy == 1) {
			hasBuy = '已购买';
		} else {
			hasBuy = '未购买';
		}

		// #ifdef H5
		var BrowseEvent = window.JAnalyticsInterface.Event.BrowseEvent;
		var bEvent = new BrowseEvent(`${classId}`, `${title}`, `${hasBuy}`, Time);
		bEvent.addKeyValue('key1', 'value1').addKeyValue('key2', 'value2');
		window.JAnalyticsInterface.onEvent(bEvent);
		// #endif
	}
};
</script>

<style lang="less">
	.shareImg{
		position: absolute;
		width: 42rpx;
		height: 42rpx;
		background: transparent;
	}
.student-item {
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid #eee;
}
.problemList-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&-name {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	&-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 156rpx;
		height: 55rpx;
		background: linear-gradient(25deg, #db1f13 0%, #ff473b 100%);
		border-radius: 28px;

		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #ffffff;
	}
}
.share-Box {
	&-title {
		text-align: center;
		padding: 30rpx 0;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.share-cancel {
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.share-scroll {
		.share-scroll-list {
			display: flex;
			align-items: center;
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #999;
		}
		&-item {
			display: flex;
			flex-direction: column;
			// align-items: center;

			margin: 0 40rpx;

			image {
				display: block;
				width: 82rpx;
				height: 82rpx;
			}
			&-name {
				padding-top: 10rpx;
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
}
.activeColor {
	color: #db1f13 !important;
}
.orderfooter /deep/ .orderfooter-left {
	font-size: 48rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(219, 31, 19, 1);
}

.u-collapse-content .collapse-item /deep/ {
	padding: 30rpx 0;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	border-bottom: 1rpx solid #eeeeee;
}

.u-collapse-content .collapse-item /deep/ .collapse-item-title {
	width: 92%;
}
.videoviewing {
	&-top {
		&-video {
			width: 100%;
			height: 420rpx;
			&-img {
				width: 100%;
				height: 420rpx;
				position: relative;
				.icon-zuojiantou {
					position: absolute;
					top: 4px;
					left: 5rpx;
					color: #ffffff;
					font-size: 50rpx;
					z-index: 99;
				}
				image {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			&-v {
				width: 100%;
				height: 420rpx;
			}
			video {
				display: block;
				// width:750px;
				width: 100%;
				height: 100%;
			}
		}
		&-text {
			padding: 30rpx 40rpx 20rpx 40rpx;
			&-title {
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-txt {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		&-b {
			padding: 0 40rpx;
			padding-bottom: 20rpx;
			display: flex;
			justify-content: flex-end;
			&-l {
				width: 42rpx;
				height: 42rpx;
				// background: rgba(228, 228, 228, 1);
				margin-right: 38rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			&-r {
				width: 42rpx;
				height: 42rpx;
				position: relative;
				// background: rgba(228, 228, 228, 1);
				image {
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	&-line {
		height: 6rpx;
		background: rgba(238, 238, 238, 1);
	}
	&-concent {
		margin-bottom: 98rpx;
		&-line {
			height: 1rpx;
			background: rgba(238, 238, 238, 1);
			// background:red;
		}
		&-tab {
			// padding: 0 80rpx;
			border: 1rpx solid #eeeeee;
			margin-bottom: 20rpx;
			position: sticky;
			z-index: 999;
			top: 0;
		}
		&-box1 {
			&-img {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				width: 667rpx;
				height: 570rpx;
				// background: red;
			}
		}
		&-box2 {
			.collapse-item {
				display: flex;
				justify-content: space-between;
				// padding-right: 52rpx;
				&-img {
					width: 36rpx;
					height: 44rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
}
</style>
