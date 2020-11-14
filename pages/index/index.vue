<template>
	<view class="index">
		<view class="index-u-page">
		
			<view class="index-search">
				<view class="index-search-left" @click="searchUrl">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ss.png" mode=""></image>
					<input type="text" value="" :placeholder="i18n.placeholder" />
				</view>

				<view class="index-search-right">
					<image class="index-search-right-translate" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/translate.png" mode="aspectFill" @click="translate"></image>
					<image class="index-search-right-sp" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/jfsc.png" mode="aspectFill" @click="integral"></image>
					<image class="index-search-right-gf" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gf.png" mode="aspectFill" @click="service"></image>
				</view>
			</view>
			<view class="index-box"></view>

			<!-- 轮播 -->
			<view class="index-swiper">
				<uni-swiper-dot :info="homedata.slidesList" :current="current" field="content" :mode="mode" :dotsStyles="styles">
					<swiper autoplay="true" class="swiper-box" @change="change" circular="true">
						<swiper-item v-for="(item, index) in homedata.slidesList" :key="item.slideId" @click="clickImg(item)">
							<view class="swiper-item"><image style="width: 672rpx;height: 294rpx;" :src="item.image" mode="scaleToFill"></image></view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>

			<!-- 滑动 -->
			<!-- <view class="index-scroll">
				<scroll-view class="index-scroll-view" scroll-x="true"  scroll-left="0">
					<view class="index-scroll-view-item_H" v-for="item in homedata.categoryList" :key="item.id">
						<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}`" mode=""></image>
					</view>
				</scroll-view>
			</view> -->

			<!-- 资讯 -->
			<view class="index-zixun">
				<view class="index-zixun-title">{{ i18n.information }}</view>
				<view class="index-zixun-text">
					<view class="contlist" ref="newslist" @mouseover="stopScroll" @mouseout="startScroll">
						<ul>
							<li v-for="item in homedata.newsList" :key="item.id" :style="left">{{ item.title }}</li>
						</ul>
					</view>
				</view>

				<!-- <transition name="slide" v-if="homedata.newsList"> -->
				<!-- 	<view  class="index-zixun-text" :key="OnText.id">
						{{OnText.value}}
					</view> -->
				<!-- </transition> -->
			</view>

			<!-- 主打课程 -->
			<List :title="i18n.mainCourse" :classList="homedata.classList" v-if="homedata.classList.length"></List>
			<List :title="i18n.introductory" :classList="homedata.basisClassList" v-if="homedata.basisClassList.length"></List>
			<List :title="i18n.compilations" :classList="homedata.collectionList" v-if="homedata.collectionList.length"></List>

			<!-- 近期开班 -->
			<view class="index-future">
				<view class="index-future-title">{{ i18n.future }}</view>
				<!-- 第一版 -->
				<!-- <scroll-view class="index-future-scroll" scroll-x="true"  scroll-left="0">
					<view class="index-future-scroll-item_H" v-for="(item,index) in homedata.classTimeList" :key="index" @click="Homeskip(item.coll_id)">
						<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}`" mode=""></image>
					</view>
				</scroll-view> -->

				<view class="index-future-list">
					<view class="index-future-list-item" v-for="(item, index) in homedata.classTimeList" :key="index" @click="Homeskip(item.coll_id)">
						<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.image}` || defaultImg" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<!-- 排行榜 -->
			<!-- 		<view class="index-ranking">
				<view class="index-ranking-top">
					<view class="index-ranking-top-title">{{i18n.ranking}}</view>
					<view class="index-ranking-top-text">
						{{i18n.rankingInfo}}
					</view>
				</view>
				<view class="index-ranking-concent">
					<view class="index-ranking-concent-item">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
						<view class="index-ranking-concent-item-name">WAN</view>
					</view>
					<view class="index-ranking-concent-item">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
						<view class="index-ranking-concent-item-name">颇多的</view>
					</view>
					<view class="index-ranking-concent-item">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
						<view class="index-ranking-concent-item-name">阳光百分百到达</view>
					</view>
	
				</view>
				<image class="index-ranking-img" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/phb.png" mode=""></image>
			
				<view class="index-ranking-list">
					<view class="index-ranking-list-box">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
						<view class="index-ranking-list-box-concent">
							<view class="index-ranking-list-box-concent-title">某不知名网友</view>
							<view class="index-ranking-list-box-concent-text">
								个性签名个性签名个性签名个性签名个性小狗
							</view>
						</view>
						<view class="index-ranking-list-box-right">
							<view>4</view>
							<text>36连</text>
						</view>
	
					</view>
				</view>
				<view class="index-ranking-list">
					<view class="index-ranking-list-box">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
						<view class="index-ranking-list-box-concent">
							<view class="index-ranking-list-box-concent-title">某不知名网友</view>
							<view class="index-ranking-list-box-concent-text">
								个性签名个性签名个性签名个性签名个性小狗
							</view>
						</view>
						<view class="index-ranking-list-box-right">
							<view>4</view>
							<text>36连</text>
						</view>
	
					</view>
				</view>
			</view> -->
		</view>
		<u-tabbar v-model="TabBarcurrent" :list="tabBarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
import { mapState } from 'vuex'
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
import List from '@/components/list.vue';
import { getIndex } from '@/api/index.js';

export default {
	components: {
		uniSwiperDot,
		List
	},
	data() {
		return {
			TabBarcurrent: 0,

			numbers: 0,
			homedata: {
				slidesList: [],
				categoryList: [],
				collectionList: [],
				classList: [],
				basisClassList: [],
				classTimeList: [],
				newsList: []
			},
			scrollW: 0, //记录滚动到哪了
			left: '',
			current: 0,
			mode: 'dot',
			styles: {
				width: '10rpx',
				bottom: '26rpx',
				backgroundColor: 'rgba(238,238,238,1)',
				selectedBackgroundColor: 'rgba(220,42,31,1)'
			},
			inLeft: 0
		};
	},
	async onLoad() {
		console.log('fasdfasd');
		console.log(this.defaultImg);
		let res = await getIndex();
		console.log('首页数据', res);
		this.homedata = res.data;
		// this.saveMove();
		let user = uni.getStorageSync('user');
		console.log(user);

		// #ifdef H5
		let nickname = user.nickname ? user.nickname : '游客';
		var CountEvent = window.JAnalyticsInterface.Event.CountEvent;
		var cEvent = new CountEvent('HOME_PAGE');
		cEvent.addKeyValue(nickname, user.phone).addKeyValue('jj', '666666');
		window.JAnalyticsInterface.onEvent(cEvent);
		// #endif
	},

	computed: {
		...mapState('index',['tabBarlist']),
		i18n() {
			return this.$t('index');
		}
	},
	onShow() {
		console.log('牛牛牛');
		// this.newScroll()
	},
	onUnload() {
		console.log('页面消失');
	},
	onHide() {
		console.log('页面消失');
		clearInterval(this.scrollTime);
	},
	methods: {
		//鼠标悬停，停止滚动
		stopScroll() {
			clearInterval(this.scrollTime);
		},
		//鼠标移开 ，接着滚动
		startScroll() {
			var target = this.$refs.newslist;
			this.scrollW = this.inLeft; // 移开时记录向左移动的距离
			this.newScroll();
		},
		//循环滚动
		newScroll() {
			var that = this; //因为定时器里要使用vue对象时不能用this, 在定时器中的 this 代表
			var target = this.$refs.newslist;
			console.log(target);
			console.log('scrollW', this.scrollW);
			// var initLeft = 0;
			var initLeft = this.scrollW;
			if (this.scrollW < 0) {
				initLeft = this.scrollW * -1;
			}
			//定时器
			this.scrollTime = setInterval(function() {
				initLeft++;
				uni.getSystemInfo({
					success: function(res) {
						// res - 各种参数

						let info = uni.createSelectorQuery().select('.contlist');
						info.boundingClientRect(function(data) {
							//data - 各种参数
							// console.log(data.width)
							if (initLeft >= data.width) {
								initLeft = 0;
							}
						}).exec();
					}
				});

				// target.style.left = '-' + initLeft + 'px'; //获取不到translateX的值改用 left

				// target.style = 'transform: translateX(-' + initLeft + 'px)';
				let hh = 'transform: translateX(-' + initLeft + 'px)';

				this.scrollW = initLeft;
				// console.log(hh)
				that.left = hh;
			}, 100);
		},

		saveMove() {
			let time = setInterval(() => {
				if (this.homedata.newsList.length > 0) {
					if (this.numbers == this.homedata.newsList.length - 1) {
						this.numbers = 0;
					} else {
						this.numbers += 1;
					}
				}
			}, 4000);
		},
		paging() {
			this.classList.length;
		},
		service() {
			uni.navigateTo({
				url: '/pages/service/index'
			});
		},
		Homeskip(id) {
			uni.navigateTo({
				url: `/pages/study/videoviewing?id=${id}&tab=1`
			});
		},
		change(e) {
			this.current = e.detail.current;
		},
		// 积分商城
		integral() {
			uni.navigateTo({
				url: '../integral/integral'
			});
		},
		// 搜索
		searchUrl() {
			uni.navigateTo({
				url: '../search/search'
			});
		},
		// 翻译
		translate() {
			uni.navigateTo({
				url: '../translate/translate'
			});
		}
	}
};
</script>

<style lang="less">
.index {
	&-search {
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 999;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 40rpx;
		padding-top: 54rpx;
		padding-bottom: 10rpx;

		&-left {
			display: flex;
			align-items: center;
			width: 444rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(238, 238, 238, 1);
			border-radius: 30rpx;

			image {
				width: 44rpx;
				height: 44rpx;
				padding-left: 30rpx;
				padding-right: 16rpx;
			}

			input {
				display: block;
				width: 100%;
				height: 100%;

				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}

		&-right {
			height: 60rpx;
			// line-height: 60rpx;
			display: flex;
			align-items: center;

			&-sp {
				width: 44rpx;
				height: 40rpx;
				margin-left: 30rpx;
				margin-right: 30rpx;
			}

			&-gf {
				width: 44rpx;
				height: 40rpx;
			}
			&-translate {
				width: 44rpx;
				height: 40rpx;
			}
		}
	}
	&-box {
		padding-top: 120rpx;
	}

	&-swiper {
		margin: 42rpx 39rpx 54rpx;
	}

	&-scroll {
		// display: flex;
		margin-left: 40rpx;

		&-view {
			white-space: nowrap;
			width: 100%;

			&-item_H {
				display: inline-block;
				// display: flex;
				// float: left;
				width: 322rpx;
				height: 158rpx;
				padding-right: 14rpx;

				image {
					width: 100%;
					height: 100%;

					// width: 322rpx;
					// height: 300rpx;
				}
			}
		}
	}

	&-zixun {
		width: 650rpx;

		display: flex;
		margin: 56rpx 0rpx 54rpx 40rpx;
		overflow: hidden;
		height: 27rpx;
		line-height: 27rpx;
		font-weight: bold;
		// background: red;

		// color:rgba(102,102,102,1);
		// 定义进入过渡
		// 			.slide-leave-active {
		// 				transition: all 5s linear;
		// 			}
		// // 定义离开过渡生效时的状态
		// 			.slide-enter-active {
		// 				transition: all 5s linear;
		// 			}
		// // 在元素被插入之前生效
		// 			.slide-enter {

		// 				transform: translateY(27rpx);
		// 				opacity: 1;
		// 			}
		// // 在离开过渡被触发之后下一帧生效
		// 			.slide-leave-to {

		// 				transform: translate(-27rpx);
		// 				opacity: 0;
		// 			}

		&-title {
			// width: 164rpx;
			// width: 55%;
			// text-align: left;
			font-size: 28rpx;
			font-family: PingFang-SC-Bold;
			color: #666666;
		}

		&-text {
			position: relative;
			flex: 1;
			// width: 570rpx;
			padding-right: 40rpx;
			// background: red;
			// overflow: hidden!important;
			// display: none;
		}

		.contlist {
			// width: 570rpx;
			position: absolute;
			// background: red;
			display: block;
			overflow: hidden;
			display: flex;
			white-space: nowrap;

			// white-space: nowrap;
			// text-overflow: ellipsis;

			ul {
				display: flex;
				flex-direction: row;
				overflow: hidden;

				li {
					display: flex;
					// overflow: hidden;
					margin-right: 60rpx;
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: #666666;
				}
			}
		}
	}

	&-item {
		padding: 0 41rpx 56rpx 40rpx;

		&-title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 25rpx;
		}

		&-box {
			display: flex;
			flex-wrap: wrap;

			&-info {
				image {
					width: 325rpx;
					height: 193rpx;
					background: rgba(238, 238, 238, 1);
					border-radius: 10px;
					vertical-align: bottom;
				}

				&-centent {
					width: 325rpx;
					display: flex;
					justify-content: space-between;

					padding: 22rpx 0 15rpx;

					text {
						width: 213rpx;

						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: rgba(51, 51, 51, 1);

						white-space: nowrap;
						/* 规定文本是否折行 */
						overflow: hidden;
						/* 规定超出内容宽度的元素隐藏 */
						text-overflow: ellipsis;
					}

					span {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 44, 80, 1);
					}
				}

				&-text {
					padding-bottom: 38rpx;
					width: 295rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);

					white-space: nowrap;
					/* 规定文本是否折行 */
					overflow: hidden;
					/* 规定超出内容宽度的元素隐藏 */
					text-overflow: ellipsis;
				}
			}

			&-info:nth-child(2n) {
				margin-left: 19rpx;
			}

			&-info:nth-child(n + 3) &-info-text {
				padding-bottom: 40rpx;
				// background: red;
			}
		}
	}

	&-light {
		display: flex;
		justify-content: center;

		&-line {
			width: 10rpx;
			height: 10rpx;
			border-radius: 50%;
			background: rgba(238, 238, 238, 1);
			margin-right: 16rpx;
		}

		&-line:nth-child(3) {
			margin-right: 0rpx;
		}

		.classline {
			background: rgba(220, 42, 31, 1);
		}
	}

	&-future {
		// padding: 0 0 57rpx 40rpx;
		padding: 0 40rpx;

		&-title {
			padding-bottom: 22rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		&-list {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			&-item {
				padding-bottom: 38rpx;
				image {
					display: block;
					width: 325rpx;
					height: 193rpx;
				}
			}
			// &-item image /deep/ div {
			// 	width: 0;
			// 	height: 0;
			// }
			// &-item image /deep/ img {
			// 	width: 325rpx;
			// 	height: 193rpx;
			// 	object-fit: cover;
			// 	opacity: 1;
			// }
		}

		&-scroll {
			white-space: nowrap;
			width: 100%;

			&-item_H {
				display: inline-block;
				width: 258rpx;
				height: 368rpx;
				margin-right: 14rpx;
			}

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	&-ranking {
		padding: 0 0 0 40rpx;
		position: relative;

		&-top {
			height: 29rpx;
			display: flex;
			align-items: center;

			&-title {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				padding-right: 21rpx;
			}

			&-text {
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}

		&-concent {
			display: flex;
			width: 682rpx;

			&-item {
				width: 33.33%;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;

				&-name {
					width: 157rpx;
					// background: red;
					margin-top: 14rpx;

					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					text-align: center;
					white-space: nowrap;
					/* 规定文本是否折行 */
					overflow: hidden;
					/* 规定超出内容宽度的元素隐藏 */
					text-overflow: ellipsis;
				}

				image {
					vertical-align: bottom;
				}
			}

			&-item:nth-child(1) {
				margin-top: 98rpx;

				image {
					width: 166rpx;
					height: 166rpx;
					border-radius: 50%;
				}
			}

			&-item:nth-child(2) {
				margin-top: 21rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 50%;
				}
			}

			&-item:nth-child(3) {
				margin-top: 145rpx;

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
				}
			}
		}

		&-img {
			position: relative;
			top: -55rpx;
			// top: 307rpx
			width: 682rpx;
			height: 218rpx;
		}

		&-list {
			// margin-top: 238rpx;
			// display: flex;
			position: relative;
			top: -30rpx;

			&-box {
				// height: 65rpx;
				padding: 28rpx 0;
				display: flex;
				align-items: center;

				image {
					width: 56rpx;
					height: 56rpx;
					border-radius: 50%;
					margin-right: 32rpx;
				}

				&-concent {
					display: block;

					&-title {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					&-text {
						margin-right: 76rpx;
						width: 434rpx;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);

						white-space: nowrap;
						/* 规定文本是否折行 */
						overflow: hidden;
						/* 规定超出内容宽度的元素隐藏 */
						text-overflow: ellipsis;
					}
				}

				&-right {
					width: 65rpx;
					height: 65rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					view {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					text {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}
	}
}
</style>
