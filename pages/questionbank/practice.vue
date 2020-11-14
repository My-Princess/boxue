<template>
	<view class="topic">
		<Head title="快速练习" @navigateBack="navigateBack"></Head>

		<view class="topic-concent" @touchstart="start" @touchend="end">
			<swiper style="height: 100%;" :duration="500" disable-touch="false" @transition="transition" @change="change" :current="current">
				
				<swiper-item v-for="(item, index) in ExercisessData" :key="item.id">
					<view class="swiper-item"><subject :ExercisessContent="item" @istouch="istouch" :Count="Count" :Index="index"></subject></view>
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
import { getClassCateGory, getClass, getQuestions, bankAddRecord, bankAdd, bankDel , getErrorQuestionsetList,delErrorQuestionset } from '@/api/study.js';
export default {
	data() {
		return {
			scrollLeft: 0,
			current: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			ExercisessData: [], // 练习题数据
			collectId: '',
			isClose: 0,
			collect: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect.png',
			collect1: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/collect1.png',
			slide: false, //是否允许滑动
			startData: {
				clientX: '',
				clientY: '',
			},
			Count: 0, //连队计数
			MaxCount: 0, // 最高连队计数
			countmax: 0, //最大翻页计数,
			TabId: [], // 随机tab
			Id: '', // 选择tabID
			k_id: '', //题目id
			q_id: '' ,// 套题id
			collectData:[]
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
				}
			});
		}
	},
	onLoad(options) {
		
	    this.q_id = options.id
		if(options.type == 1){
			this.getExercises()
		}else if(options.type == 2){
			this.getError()
		}else{
		    this.getTabData();
			
		}
	},
	onShow() {},
	computed: {},

	methods: {
		// tab
		async getTabData() {
			let data = { token: uni.getStorageSync('token') };
			let res = await getClassCateGory(data);
			let tabId = [];
			res.data.forEach(item => {
				tabId.push(item.id);
			});
			console.log(tabId);
			this.TabId = tabId;
			this.getRandom();
			this.getSection();
		},
		// 获取套题数据
		async getSection() {
			let data = { token: uni.getStorageSync('token'), id: this.Id };
			let res = await getClass(data);
			console.log(res.data.length);
			// 大数组排序
			let rand = Math.floor(Math.random() * res.data.length);
			console.log(rand);
			// 获取班级id
			this.class_iid = res.data[rand].class_iid;

			if (res.data[rand].questions.length) {
				let randNum = Math.floor(Math.random() * res.data[rand].questions.length);
				// 套题id
				this.q_id = res.data[rand].questions[randNum].id;
				// this.Name = res.data[rand].questions[randNum].subject_name;
				// 请求答题数据
				this.getExercises();
			} else {
				this.getTabData();
			}
		},
		// 答题数据
		async getExercises() {
			let data = { token: uni.getStorageSync('token'), id: this.q_id };
			let res = await getQuestions(data);
			console.log('练习题', res);
			this.ExercisessData = res.data;
			this.isClose = this.ExercisessData[0].isClose;
			this.k_id = this.ExercisessData[0].id;
		},
		
		// 获取重做错题数据
		async getError(){
		   	let data = { token: uni.getStorageSync('token'), id: this.q_id };
			let res = await getErrorQuestionsetList(data)
			console.log('错题题',res)
			this.ExercisessData = res.data;
			// this.isClose = this.ExercisessData[0].isClose;
			this.k_id = this.ExercisessData[0].errorId;
		},

		// 获取数组的随机数
		getRandom() {
			// 获取随机数
			var rand = Math.floor(Math.random() * this.TabId.length);
			// 随机从数组中取出某值（不会改变原数组）
			// var data = this.TabId.slice(rand, 1)[0];
			var data = this.TabId.splice(rand, 1)[0];
			this.Id = data;
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
				this.collectData.push({
					id:this.k_id,
					type:3
				})
				
			} else {
				if (this.MaxCount < this.Count) {
					this.MaxCount = this.Count;
				}
				this.Count = 0;
			}
			// 最后一套题
			if (this.ExercisessData.length - 1 == this.current) {
					this.pushSumcount()
			}
		},

		transition(e) {
			// console.log('滑动',e)
		},
		// 当前滑动位置
		change(e) {
			console.log('change', e);
			this.current = e.detail.current;
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

		// 收藏
		async collectBtn(i) {
			let data = { token: uni.getStorageSync('token'), class_id: this.answerCalssID, q_id: this.k_id, k_id: this.answerId };
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
		
		// 提交错题数据
		async errorData(){
			let date = JSON.stringify(this.collectData)
			let data = {token:uni.getStorageSync('token'),data:date}
			let res = await delErrorQuestionset(data)
			console.log(res)
		},
		navigateBack() {
			this.pushSumcount()
			this.errorData()
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
