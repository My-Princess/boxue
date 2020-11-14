<template>
	<view class="topic">
		<Head title="收藏刷题" @navigateBack="navigateBack">
			<template v-slot:right>
				<view class="topic-sizeBtn" @click="nextTopic">下一套题</view>
			</template>
		</Head>

		<!-- 内容 -->
		<view class="topic-concent" @touchstart="start" @touchend="end">
			<swiper style="height: 100%;" :duration="500" disable-touch="false" @transition="transition" @change="change" :current="current">
				<swiper-item v-for="(item, index) in ExercisessData" :key="item.id">
					<view class="swiper-item"><subject :ExercisessContent="item.questions" @istouch="istouch" :Count="Count" :name="Name" :Index="index"></subject></view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 底部 -->
		<view class="topic-footer">
			<view class="topic-footer-l">
				<view class="topic-footer-l-icon" @click="collectBtn"><image :src="isClose ? collect : collect1" mode=""></image></view>
				<view class="topic-footer-l-txt">收藏</view>
			</view>
			<view class="topic-footer-r">
				<text>{{ current + 1 }}</text>
				<text>/</text>
				<text>{{ ExercisessData.length }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getQuestions, getCollectionQuestions, bankAdd, bankDel, bankAddRecord, addError } from '@/api/study.js';
export default {
	data() {
		return {
			scrollLeft: 0,
			current: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			ExercisessData: [], // 练习题数据
			k_id: '', // 课题分类
			collectId: '',
			isClose: 0,
			collect: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect.png',
			collect1: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect1.png',
			Name: '',
			startData: {
				clientX: '',
				clientY: ''
			},
			Count: 0, //连队计数
			MaxCount: 0, // 最高连队计数
			countmax: 0, //最大翻页计数
			slide: false, //是否允许滑动
			// DataSubmit: [], //提交做题数据
			createtime: 0
		};
	},
	watch: {
		current(val) {
			console.log(this.ExercisessData);
			this.ExercisessData.forEach((item, index) => {
				console.log('喜喜', item);
				console.log(index == val);
				if (index == val) {
					this.isClose = item.questions.isClose;
					this.k_id = item.questions.id;
					// this.createtime = item.createtime;
				}
			});
		},

		collectid: {
			handler(val) {
				console.log('哈哈哈', val);
				this.getCollect();
			},
			immediate: true
		}
	},
	onLoad(options) {
		this.getName();
		// this.getCollect();
	},
	onShow() {
		console.log('current', this.current);
		// console.log(this.collectid)
	},
	computed: {
		...mapState('study', ['collectid', 'collectData', 'collectClassId', 'collectIndex'])
	},

	methods: {
		...mapMutations('study', ['getcollectid', 'getcollectIndex']),

		// 收藏题
		async getCollect() {
			let data = { token: uni.getStorageSync('token'), id: this.collectid };
			let res = await getCollectionQuestions(data);
			console.log(res);
			this.ExercisessData = res.data;
			this.ExercisessData.forEach(item => {
				item.questions.isClose = 1;
			});
			this.isClose = this.ExercisessData[0].questions.isClose;
			this.k_id = this.ExercisessData[0].questions.id;
			// this.createtime = this.ExercisessData[0].questions.createtime;
		},
		start(e) {
			console.log('左', e);
			this.startData.clientX = e.changedTouches[0].clientX;

			this.startData.clientY = e.changedTouches[0].clientY;
		},
		end(e) {
			// console.log('右',e)
			const subX = e.changedTouches[0].clientX - this.startData.clientX;
			const subY = e.changedTouches[0].clientY - this.startData.clientY;
			if (subY > 50 || subY < -50) {
				console.log('上下滑');
			} else {
				if (subX > 100) {
					console.log('右滑');
					if (this.current > 0) {
						--this.current;
						this.slide = true;
					}
				} else if (subX < -100) {
					console.log('左滑');
					if (this.slide && this.ExercisessData.length - 1 > this.current) {
						++this.current;
					}
					if (this.current >= this.countmax) {
						this.slide = false;
					}
				} else {
					console.log('无效');
				}
			}
		},
		// 点击答题后（子传父）
		istouch(e, iscorrect) {
			this.slide = e;
			++this.countmax;
			console.log(iscorrect);
			// 判断是否答题正确
			if (iscorrect) {
				++this.Count;
				// this.DataSubmit.push({
				// 	class_id: this.answerCalssID,
				// 	k_id: this.answerId,
				// 	q_id: this.k_id,
				// 	create_time: this.createtime,
				// 	type: 3
				// });
			} else if (iserror) {
				// this.DataSubmit.push({
				// 	class_id: this.answerCalssID,
				// 	k_id: this.answerId,
				// 	q_id: this.k_id,
				// 	create_time: this.createtime,
				// 	type: 1
				// });

				if (this.MaxCount < this.Count) {
					this.MaxCount = this.Count;
				}
				this.Count = 0;
			}
			// 最后一套题
			if (this.ExercisessData.length - 1 == this.current) {
				this.pushSumcount();
			}
		},
		pushSumcount() {
			console.log(this.MaxCount);
			let data = { token: uni.getStorageSync('token'), k_id: this.answerId, record: this.MaxCount };
			bankAddRecord(data).then(res => {
				console.log(res);
			});
		},
		// 提交数据切割操作 提交
		async sumbitData() {
			// 提交做完数据
			console.log(this.DataSubmit);
			let notDone = this.ExercisessData.slice(this.DataSubmit.length, this.ExercisessData.length);
			notDone.forEach(v => {
				this.DataSubmit.push({
					class_id: this.answerCalssID,
					k_id: this.answerId,
					q_id: v.id,
					create_time: v.createtime,
					type: 2
				});
			});
			console.log(this.DataSubmit);
			let hh = JSON.stringify(this.DataSubmit);
			let data = { token: uni.getStorageSync('token'), data: hh };
			console.log(data);
			let res = await addError(data);
			console.log('提交做题数据', res);
		},
		transition(e) {
			// console.log('滑动',e)
		},
		// 当前滑动位置
		change(e) {
			console.log('change', e);
			this.current = e.detail.current;
		},
		getName() {
			this.collectData.forEach(item => {
				if (item.id == this.collectid) {
					this.Name = item.subject_name;
				}
			});
		},
		// 下一套题
		nextTopic() {
				// this.sumbitData();
			if (this.collectData.length - 1 > this.collectIndex) {
				var collectIndex = this.collectIndex;
				++collectIndex;
				this.getcollectIndex(collectIndex);
			} else {
				uni.showToast({
					title: '这是最后一套题',
					duration: 2000,
					icon: 'none'
				});
			}
			this.collectData.forEach((item, index) => {
				if (index == this.collectIndex) {
					this.getcollectid(item.id);
				}
			});
			this.getName();
		},
		// 收藏
		async collectBtn(i) {
			let data = { token: uni.getStorageSync('token'), class_id: this.collectClassId, q_id: this.k_id, k_id: this.collectid };
			let deldata = { token: uni.getStorageSync('token'), id: this.k_id };
			if (this.isClose == 0) {
				console.log('收藏');
				let res = await bankAdd(data);
				console.log(res);
				if (res.code == 0) {
					this.isClose = 1;
				}
			} else if (this.isClose == 1) {
				console.log('取消收藏');
				let res = await bankDel(deldata);
				console.log(res);
				if (res.code == 0) {
					this.isClose = 0;
				}
			}
		},
		navigateBack() {
			this.pushSumcount();
			// this.sumbitData();
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
.integral-top /deep/ .integral-top-r {
	font-size: $fontSize - 4;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(102, 102, 102, 1);
}
// .topic-concent /deep/ nui-swiper{
// 				height: 100%;
// 		}
.topic {
	// overflow: hidden;
	.v-scroll-view {
		// float: left;
		// display: flex;
	}
	&-concent {
		width: 100%;
		height: 84vh;
		overflow: hidden;
		// background: red;

		.swiper-item {
			width: 100%;
			height: 100%;
		}
	}
	&-footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 98rpx;
		background: rgba(255, 255, 255, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40rpx;
		&-l {
			display: flex;
			align-items: center;
			&-icon {
				width: 42rpx;
				height: 42rpx;
				// background: rgba(228, 228, 228, 1);
				image {
					width: 100%;
					height: 100%;
				}
			}
			&-txt {
				margin-left: 20rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		&-r {
			text {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			text:first-child {
				color: #db1f13;
			}
		}
	}
}
</style>
