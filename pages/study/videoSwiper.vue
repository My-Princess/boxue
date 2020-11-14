<template>
	<view>
		<mescroll-uni :ref="'mescrollRef' + i" @init="mescrollInit" height="100%" top="40" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
			<!-- 详情 -->
			<view class="videoviewing-concent-box1" v-show="index == 0">
				<view class="videoviewing-concent-box1-img"><u-parse :content="detailsdata.content" noData="" /></view>
			</view>
			<!-- 目录 -->
			<view class="videoviewing-concent-box2" v-show="index == 1">
				<u-collapse :head-style="headStyle" :body-style="bodyStyle" event-type="close" @change="change" ref="getcatalog">
					<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="item.id" v-if="item.type">
						<view class="collapse-item" v-for="(v, i) in item.body" :key="i" @click="plays(v, i)">
							<view class="collapse-item-title" :class="i == activeIndex ? 'activeColor' : ''">{{ v.fileName || v.file_name }}</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>

			<!-- 学员评价 -->
			<view class="videoviewing-concent-box3" v-show="index == 2">
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
				<view class="student-item">
					<problemList>
						<template v-slot:head>
							<view class="problemList-head">
								<view class="problemList-head-name">{{ study.Mycommenttxt }}</view>
								<view class="problemList-head-btn" @click="myEvaluation">{{ study.Mycomment }}</view>
							</view>
						</template>
					</problemList>
				</view><view class="student-item">
					<problemList>
						<template v-slot:head>
							<view class="problemList-head">
								<view class="problemList-head-name">{{ study.Mycommenttxt }}</view>
								<view class="problemList-head-btn" @click="myEvaluation">{{ study.Mycomment }}</view>
							</view>
						</template>
					</problemList>
				</view>
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
			<view class="videoviewing-concent-box3" v-show="index == 3">
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
		</mescroll-uni>
	</view>
</template>

<script>
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import MescrollMoreItemMixin from '@/components/mescroll-uni/mixins/mescroll-more-item.js';
import { mapMutations } from 'vuex';
import { getIntroduce, getList, collectionintroduce, collectionList, indexContent } from '@/api/study.js';
import uParse from '@/components/gaoyia-parse/parse.vue'; //引入富文本组件
export default {
	mixins: [MescrollMixin, MescrollMoreItemMixin],
	components: {
		uParse
		// videoSwiper
	},
	props: {
		i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
		index: {
			// 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			type: Number,
			default() {
				return 0;
			}
		},
		Headtype:{
			type:String
		},
		tabs: {
			// 为了请求数据,演示用,可根据自己的项目判断是否要传
			type: Array,
			default() {
				return [];
			}
		},
		detailsdata:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	data() {
		return {
			directoryPage: 1, // 目录下拉
			
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
			downOption: {
				auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
			},
			upOption: {
				auto: false, // 不自动加载
				// page: {
				// 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
				// 	size: 10 // 每页数据的数量
				// },
				noMoreSize: 1, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				empty: {
					tip: '还没有人在该板块发布过帖子哦' // 提示
				}
			}
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
   mounted(options) {
		
		this.itemList[0].head = this.study.languageClass;
		this.itemList[1].head = this.study.SentenceClass;

		// type 1 时是课程专区  其他是课程专区
		if (this.Headtype == 1) {
			this.getVideo();
			this.getcollectionList();
			this.itemList[0].type = 0;
		} else {
			// this.getIntroduceDta();
		}
	},
	methods: {
		// 课程语音、视频
		getcatalog(ck, type) {
			if (ck == 1) {
				let data1 = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.detailsdata.classId, page: this.directoryPage };
				getList(data1)
					.then(res => {
						console.log('语音视频', res);
					
						this.mescroll.endSuccess(res.data.list.length);
						res.data.list.length < 10 ? (this.directoryPage = this.directoryPage) : (this.directoryPage = ++this.directoryPage);
						//设置列表数据
						if (this.page == 1) this.itemList[0].body = []; //如果是第一页需手动制空列表

						this.itemList[0].body = this.itemList[0].body.concat(res.data.list); //追加新数据
						// this.itemList[0].body = res.data.list;

						console.log('kankan', this.itemList);
					})
					.catch(() => {
						//联网失败, 结束加载
						this.mescroll.endErr();
					});
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
		
		// 视频列表
		getcollectionList() {
			let data = { token: uni.getStorageSync('token'), classId: this.id };
			collectionList(data).then(res => {
				console.log('视频列表', res);
				this.itemList[1].body = res.data.list;
			});
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
		/*目录下拉刷新的回调 */
		downCallback() {
			// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
			// loadSwiper();
			// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			this.mescroll.resetUpScroll();
		},
		/*目录上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
		upCallback(page) {
			console.log('触发');
			this.getcatalog(1, 1);
		},
	}
};
</script>

<style lang="scss">
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
.videoviewing-concent-box1 {
	&-img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 667rpx;
		height: 570rpx;
		// background: red;
	}
}
.videoviewing-concent-box2 {
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
</style>
