<template>
	<view class="topic">
		<Head title="章节刷题" @navigateBack="navigateBack">
			<template v-slot:right>
				<view class="topic-sizeBtn" @click="nextTopic">下一套题</view>
			</template>
		</Head>

		<!-- 内容 -->
		<view class="topic-concent" @touchstart="start" @touchend="end">
			<swiper style="height: 100%;" :duration="500" disable-touch="false" @transition="transition" @change="change" :current="current">
				<swiper-item v-for="(item, index) in ExercisessData" :key="item.id">
					<view class="swiper-item"><subject :ExercisessContent="item" @istouch="istouch" :Count="Count" :name="Name" :Index="index"></subject></view>
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
import { getQuestions, getCollectionQuestions, bankAdd, bankDel, bankAddRecord, addError } from '@/api/study.js';
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			scrollLeft: 0,
			current: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			ExercisessData: [], // 练习题数据
			k_id: '', // 答题题目id
			createtime: '', //c创建时间
			collectId: '',
			isClose: 0,
			collect: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect.png',
			collect1: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect1.png',
			slide: false, //是否允许滑动
			startData: {
				clientX: '',
				clientY: ''
			},
			Count: 0, //连队计数
			MaxCount: 0, // 最高连队计数
			countmax: 0, //最大翻页计数
			Name: '', // 题目名称
			DataSubmit: [] //提交做题数据
		};
	},
	watch: {
		current(val) {
			console.log('watch', val);
			console.log(this.ExercisessData);
			this.ExercisessData.forEach((item, index) => {
				if (index == val) {
					this.isClose = item.isClose;
					this.k_id = item.id;
					this.createtime = item.createtime;
				}
			});
		},

		answerId: {
			handler(val) {
				console.log('哈哈哈', val);
				this.getExercises();
			},
			immediate: true
		}
	},
	onLoad(options) {
		// this.getExercises();
		this.getName();
	},
	onShow() {
		console.log('current', this.current);
	},
	computed: {
		...mapState('study', ['topicData', 'answerId', 'answerCalssID', 'answerIndex'])
	},

	methods: {
		...mapMutations('study', ['changeAnswerId', 'changeanswerIndex']),
		// 答题
		async getExercises() {
			let data = { token: uni.getStorageSync('token'), id: this.answerId };
			let res = await getQuestions(data);
			console.log('练习题', res);
			this.ExercisessData = res.data;
			this.ExercisessData.forEach((item, index) => {
				if (index == 0) {
					this.isClose = item.isClose;
					this.k_id = item.id;
					this.createtime = item.createtime;
				}
			});
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
		istouch(e, iscorrect, iserror) {
			this.slide = e;
			++this.countmax;

			console.log('正确', iscorrect);
			console.log('错误', iserror);
			// 判断是否答题正确 （iscorrect）正确
			if (iscorrect) {
				++this.Count;
				this.DataSubmit.push({
					class_id: this.answerCalssID,
					k_id: this.answerId,
					q_id: this.k_id,
					create_time: this.createtime,
					type: 3
				});
			} else if (iserror) {
				this.DataSubmit.push({
					class_id: this.answerCalssID,
					k_id: this.answerId,
					q_id: this.k_id,
					create_time: this.createtime,
					type: 1
				});
				
				if (this.MaxCount < this.Count) {
					this.MaxCount = this.Count;
				}
				this.Count = 0;
			}
			if (this.ExercisessData.length - 1 == this.current) {
				this.pushSumcount();
			}
		},
		// 提交最大连对数
		pushSumcount() {
			// 最大连对数
			console.log(this.MaxCount);
			let data = { token: uni.getStorageSync('token'), k_id: this.answerId, record: this.MaxCount };
			bankAddRecord(data).then(res => {
				console.log(res);
			});
		},

		transition(e) {
			// console.log('滑动',e)
		},
		// 当前滑动位置
		change(e) {
			console.log('change', e);
			this.current = e.detail.current;
		},
		// 头部名称
		getName() {
			this.topicData.forEach(item => {
				if (item.id == this.answerId) {
					this.Name = item.subject_name;
				}
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
		// 下一套题
		nextTopic() {
			this.sumbitData();
			if (this.topicData.length - 1 > this.answerIndex) {
				var answerIndex = this.answerIndex;
				++answerIndex;
				this.changeanswerIndex(answerIndex);
			} else {
				uni.showToast({
					title: '这是最后一套题',
					duration: 2000,
					icon: 'none'
				});
			}
			this.topicData.forEach((item, index) => {
				if (index == this.answerIndex) {
					this.changeAnswerId(item.id);
				}
			});
			this.getName();
		},
		// 收藏
		async collectBtn(i) {
			let data = { token: uni.getStorageSync('token'), class_id: this.answerCalssID, k_id: this.answerId, q_id: this.k_id };
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
			this.sumbitData();
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
