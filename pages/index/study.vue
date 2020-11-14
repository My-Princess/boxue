<template>
	<view class="study">
		<view class="index-u-page">
			<view class="study-tab" :class="{ isshowred }">
				<v-tabs
					v-model="tab1"
					auto
					:tabs="tabs1"
					:color="color"
					:activeColor="activeColor"
					fontSize="36rpx"
					activeFontSize="36rpx"
					:lineColor="lineColor"
					:lineScale="0.2"
					fontWeight="bold"
					@change="activeTabs"
				></v-tabs>
			</view>

			<view class="study-concent">
				<view class="study-concent-info" v-if="activeTab == 0">
					<category
						:categoryList="categoryList"
						:subCategoryList="subCategoryList"
						activeBackgroundColor="#FFFFFF"
						activeTextColor="#333333"
						@categoryMainClick="categoryMainClick"
						@categorySubClick="categorySubClick"
					></category>
				</view>
				<view class="study-concent-info1" v-if="activeTab == 1">
					<view class="study-concent-info1-box">
						<!-- 简介 -->
						<view class="study-concent-info1-box-top">
							<image :src="userInfo.headImg || defaultimg" mode=""></image>
							<view class="study-concent-info1-box-top-r">
								<view class="study-concent-info1-box-top-r-title">{{ userInfo.nickname }}</view>
								<view class="study-concent-info1-box-top-r-txt">{{ userInfo.signature }}</view>
							</view>
						</view>

						<view class="study-concent-info1-box-bottom clearfix">
							<view class="study-concent-info1-box-bottom-item">
								<view class="study-concent-info1-box-bottom-item-number">
									<text>{{ QuestionsData.accuracy }}</text>
									%
								</view>
								<view class="study-concent-info1-box-bottom-item-txt">{{ study.accuracy }}</view>
							</view>
							<view class="study-concent-info1-box-bottom-item">
								<view class="study-concent-info1-box-bottom-item-number">
									<text>{{ QuestionsData.have }}</text>
									{{ study.way }}
								</view>
								<view class="study-concent-info1-box-bottom-item-txt">{{ study.accomplish }}</view>
							</view>
							<view class="study-concent-info1-box-bottom-item">
								<view class="study-concent-info1-box-bottom-item-number">
									<text>{{ QuestionsData.count }}</text>
									{{ study.way }}
								</view>
								<view class="study-concent-info1-box-bottom-item-txt">{{ study.sumaccomplish }}</view>
							</view>
						</view>
					</view>
					<!-- 章节提炼 -->
					<view class="study-concent-info1-gongge clearfix">
						<view class="study-concent-info1-gongge-box1 clearfix" @click="chapter">
							<view class="study-concent-info1-gongge-box1-title">{{ study.gongge }}</view>
							<view class="study-concent-info1-gongge-box1-txt">
								<text>{{ study.schedule }}</text>
								<text>{{ QuestionsData.have }}/{{ QuestionsData.count }}</text>
							</view>
							<view class="study-concent-info1-gongge-box1-jd">
								<u-line-progress active-color="#2979ff" :show-percent="false" :percent="70" height="6"></u-line-progress>
							</view>
						</view>

						<view class="">
							<!-- 快速练习 -->
							<view class="study-concent-info1-gongge-box2" @click="practice">
								<text>{{ study.practice }}</text>
							</view>
							<!-- 连对挑战 -->
							<view class="study-concent-info1-gongge-box3" @click="challenge">
								<view class="study-concent-info1-gongge-box3-title">{{ study.challenge }}</view>
								<view class="study-concent-info1-gongge-box3-txt">
									<text>{{ study.record }} {{ QuestionsData.record }} {{ study.even }}</text>
								</view>
							</view>
						</view>
					</view>

					<view class="study-concent-info1-info">
						<!-- 错题本 -->
						<view class="study-concent-info1-info-item" @click="mistakes">
							<image class="study-concent-info1-info-item-img" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/error.png"></image>
							<view class="study-concent-info1-info-item-name">{{ study.mistakes }}</view>
						</view>
						<!-- 成就榜 -->
						<view class="study-concent-info1-info-item" @click="achievement">
							<image class="study-concent-info1-info-item-img" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/achievement.png"></image>
							<view class="study-concent-info1-info-item-name">{{ study.achievement }}</view>
						</view>
						<!-- 收藏库 -->
						<view class="study-concent-info1-info-item" @click="collect">
							<image class="study-concent-info1-info-item-img" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/enshrine.png"></image>
							<view class="study-concent-info1-info-item-name">{{ study.collect }}</view>
						</view>
					</view>
				</view>
				<view class="study-concent-info2" v-if="activeTab == 2">
					<view class="videoList-list" v-if="videoList.length"><videoList :videoList="videoList"></videoList></view>
					<view class="blank" v-else>还没有上架视频专辑哦</view>
				</view>
			</view>
		</view>

		<u-tabbar v-model="TabBarcurrent" :list="tabBarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import category from '@/components/qiyue-category/qiyue-category.vue';
import { cateGory, categorygetid, countQuestionset, collectionIndex } from '@/api/study.js';
import { mineIndex } from '@/api/user.js';
export default {
	components: {
		category
	},
	data() {
		return {
			TabBarcurrent: 1,

			concent: [],
			tab2: 0,
			tabs2: [],
			isshowred: false,
			QuestionsData: {},
			tab1: 0,
			tabs1: [{ name: this.$t('study.course') }, { name: this.$t('study.question') }, { name: this.$t('study.video') }],
			activeTab: 0,
			activeColor: '#333',
			color: '#999',
			lineColor: '#DB1F13',
			videoList: [],
			cateData: [],
			subList: [],
			subCategoryList: [],
			categoryList: [],
			page: 1,
			userInfo: ''
		};
	},
	onLoad(options) {
		options ? (this.tab1 = 0) : (this.tab1 = options.type);
		this.getCateGory();
		this.getInfo();
		// 题库主页分类
		this.getQuestions();
		// 视频专区
		this.getVideoData();
	},
	computed: {
		...mapState('index', ['defaultimg','tabBarlist']),
		study() {
			return this.$t('study');
		}
	},

	methods: {
		async getInfo() {
			let res = await mineIndex();
			console.log(res);
			this.userInfo = res.data;
		},
		// 获取大分类
		getCateGory() {
			cateGory().then(res => {
				console.log('分页数据', res);
				this.categoryList = res.data;
				console.log('主', this.categoryList);
				this.getCategorygetid();
			});
		},
		// 获取子分类
		getCategorygetid() {
			let data = { id: this.categoryList[0].id };
			categorygetid(data).then(res => {
				console.log('子数据', res);
				this.subCategoryList = res.data;
				console.log('次', this.subCategoryList);
			});
		},
		// 切换tab
		activeTabs(e) {
			this.activeTab = e;
			if (e == 1) {
				this.isshowred = true;
				this.activeColor = '#FFFFFF';
				this.color = '#EEEEEE';
				this.lineColor = '#FFFFFF';
			} else {
				this.isshowred = false;
				this.activeColor = '#333';
				this.color = '#999';
				this.lineColor = '#DB1F13';
			}
		},
		// 点击大分类
		categoryMainClick(category, index) {
			console.log(category, index);
			let data = { id: category.id };
			categorygetid(data).then(res => {
				console.log('子数据', res);
				this.subCategoryList = res.data;
			});
		},
		// 点击子分类
		categorySubClick(category) {
			// console.log(category);
			let id = category.lang_id;
			uni.navigateTo({
				url: `../study/videoviewing?id=${id}`
			});
		},
		// 题库主页统计
		async getQuestions() {
			let data = { token: uni.getStorageSync('token') };
			let res = await countQuestionset(data);
			console.log('获取主页', res);
			this.QuestionsData = res.data;
		},
		// 视频专区
		async getVideoData() {
			let data = { page: this.page };
			let res = await collectionIndex(data);
			console.log(res);
			this.videoList = res.data.list;
		},

		// 连对挑战
		challenge() {
			uni.navigateTo({
				url: '../questionbank/challenge'
			});
		},
		// 收藏
		collect() {
			uni.navigateTo({
				url: '../questionbank/collect'
			});
		},
		// 错题本
		mistakes() {
			uni.navigateTo({
				url: '../questionbank/mistakes'
			});
		},
		// 章节提炼
		chapter() {
			uni.navigateTo({
				url: '../questionbank/chapter'
			});
		},
		// 快速练习
		practice() {
			uni.navigateTo({
				url: '../questionbank/practice'
			});
		},
		// 成就榜
		achievement() {
			uni.navigateTo({
				url: '../questionbank/achievement'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.blank {
	font-size: 24rpx;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.collapse-son:first-child {
	padding-top: 38rpx;
}
.collapse-son {
	padding: 24rpx 0;
	// margin-right: 52rpx;
	border-bottom: 1rpx solid #eeeeee;
	// padding-left: 30rpx;
	position: relative;
	display: flex;
	width: 100%;
	// background: red;
	text {
		font-family: PingFang SC;
		font-weight: 500;
	}
	&-size {
		font-size: 30rpx;

		color: rgba(51, 51, 51, 1);
	}
	&-icon {
		display: block;
		width: 42rpx;
		height: 42rpx;
		margin: 0 20rpx;
		background: rgba(228, 228, 228, 1);
	}
	&-isyx {
		font-size: 26rpx;

		color: rgba(0, 178, 129, 1);
		// background:rgba(228,228,228,1);
	}
	&-time {
		// display: block;
		// text-align: right;
		// display: flex;
		// justify-content: flex-end;
		position: absolute;

		right: 52rpx;
		font-size: 26rpx;

		color: rgba(153, 153, 153, 1);
	}

	&::before {
		content: '';
		width: 30rpx;
		height: 30rpx;
		background: rgba(255, 255, 255, 1);
		border: 2px solid rgba(238, 238, 238, 1);
		border-radius: 50%;
		// position: absolute;
		// top: 80rpx;
		// left: 4rpx;
		position: absolute;
		// top: 12rpx;
		left: -40rpx;
		transform-origin: 0;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		font-size: 24rpx;
		// border-left: 2px solid pink;
	}
}
.hidden() {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.isshowred {
	height: 263rpx;
	// background: red;
	border-radius: 0 0 15% 15%;
	background: linear-gradient(64deg, rgba(241, 127, 95, 1) 0%, rgba(247, 73, 63, 1) 100%);
	// border-radius:50%;
}
.study {
	position: relative;
	&-tab {
		padding: 20rpx 90rpx 0 90rpx;
	}
	&-concent {
		&-info1 {
			&-box {
				width: 670rpx;
				// position: relative;
				position: absolute;
				left: 50%;
				top: 185rpx;
				transform: translateX(-50%);
				border-radius: 10px;
				box-shadow: 0 1px 2px 0 #eee;
				z-index: 99;
				&-top {
					display: flex;
					align-items: center;
					padding: 40rpx 40rpx 0 40rpx;
					background: #fff;

					image {
						display: block;
						width: 80rpx;
						height: 80rpx;
						border-radius: 40px;
					}
					&-r {
						width: 80%;
						margin-left: 20rpx;
						&-title {
							width: 400rpx;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
							.hidden();
						}
						&-txt {
							width: 90%;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
							.hidden();
						}
					}
				}

				&-bottom {
					width: 100%;
					// background: red;
					margin-top: 25rpx;
					margin-bottom: 30rpx;
					&-item {
						width: 33%;
						float: left;
						// display: flex;
						// flex-direction: column;
						// justify-content: center;
						&-number {
							// display: flex;
							// flex-direction: column;
							text-align: center;
							// justify-content: center;
							font-size: 20rpx;
							text {
								font-size: 36rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: rgba(219, 31, 19, 1);
							}
						}
						&-txt {
							text-align: center;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
				}
			}

			&-gongge {
				// position: absolute;
				margin-top: 210rpx;
				// left: 50%;
				// transform: translateX(-50%);
				display: flex;
				justify-content: center;
				&-box1 {
					margin-right: 20rpx;
					width: 324rpx;
					height: 430rpx;
					background: linear-gradient(41deg, rgba(240, 139, 10, 1) 0%, rgba(255, 204, 81, 1) 100%);
					border-radius: 10px;
					padding: 0 20rpx;
					&-title {
						font-size: 36rpx;
						font-family: PingFang SC;
						// font-weight:bold;
						color: rgba(255, 255, 255, 1);
						padding-top: 110rpx;

						padding-bottom: 14rpx;
					}
					&-txt {
						padding-bottom: 14rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
						opacity: 0.9;
					}
					&-jd {
						display: block;
						.u-progress {
							display: block;
						}
					}
				}
				&-box2 {
					width: 324rpx;
					height: 150rpx;
					background: linear-gradient(-42deg, rgba(165, 163, 236, 1) 0%, rgba(97, 165, 255, 1) 100%);
					border-radius: 10px;
					margin-bottom: 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					text {
						font-size: 36rpx;
						font-family: PingFang SC;
						// font-weight:bold;
						color: rgba(255, 255, 255, 1);
					}
				}
				&-box3 {
					width: 324rpx;
					height: 260rpx;
					background: linear-gradient(35deg, rgba(74, 190, 241, 1) 0%, rgba(118, 234, 213, 1) 100%);
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					&-title {
						font-size: 36rpx;
						font-family: PingFang SC;
						// font-weight:bold;
						color: rgba(255, 255, 255, 1);
						padding-bottom: 8rpx;
					}
					&-txt {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
			&-info {
				margin: 20rpx 40rpx 0;
				box-shadow: 0 0px 8px 0 #eee;
				display: flex;
				justify-content: space-around;
				padding: 36rpx 0;
				&-item {
					image {
						display: block;
						width: 80rpx;
						height: 80rpx;
						background: rgba(153, 153, 153, 1);
						border-radius: 40px;
					}
					&-name {
						margin-top: 18rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}
		&-info2 {
			.videoList-list {
				padding: 0 40rpx;
				padding-top: 45rpx;
			}
		}
	}
}
</style>
