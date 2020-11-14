<template>
	<view class="frequency">
		<view class="frequency-top">
			<Head @navigateBack="navigateBack"></Head>
			<view class="frequency-top-title">{{CourseDetails.title}}</view>
			<view class="frequency-top-txt">共计{{CourseDetails.count}}节 · 已报名{{CourseDetails.number}}人</view>
		</view>

		<view class="frequency-concent">
			<view class="frequency-concent-tab">
				<v-tabs
					v-model="tab1"
					auto
					:tabs="tabs1"
					color="#666"
					activeColor="#333"
					fontSize="36rpx"
					activeFontSize="36rpx"
					lineColor="#DB1F13"
					:lineScale="0.2"
					@change="activeTabs"
				></v-tabs>
			</view>
			<view class="frequency-concent-line"></view>
			<view class="frequency-concent-box1" v-if="activeTab == 0">
				<u-collapse :head-style="headStyle" :item-style="itemStyle" :body-style="bodyStyle" event-type="close" @change="change" ref="collapse">
					<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
						<view class="collapse-item" v-for="(v, i) in item.body" :class="v.fileId == activeColor ? 'activeColor' : ''" :key="v.fileId">
							<view class="collapse-item-title" @click="audios(v)">{{ v.fileName }}</view>
							<!-- <view class="collapse-item-img">
								<image src="../../static/img/xz.png" mode=""></image>
							</view> -->
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
<!-- 			<view class="frequency-concent-box2" v-if="activeTab == 1">
				<u-collapse :head-style="headStyle" :item-style="itemStyle" :body-style="bodyStyle" event-type="close" @change="change">
					<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
						<view class="collapse-item" v-for="(v, i) in item.body" :key="i" @click="task">
							<view class="collapse-item-title">{{ v.name }}</view>
							<view class="collapse-item-txt">已完成，审批中</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view> -->
			<view class="frequency-concent-box3" v-if="activeTab == 1">
				<u-collapse :head-style="headStyle" :item-style="itemStyle" :body-style="bodyStyle" event-type="close" @change="change" ref="courseware">
					<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in coursewareList" :key="index">
						<view class="collapse-item" v-if="item.body" v-for="(v, i) in item.body" :key="i" @click="PdfBtn(v)">
							<view class="collapse-item-title">{{ v.fileName }}</view>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import { getList } from '@/api/study.js';
export default {
	data() {
		return {
			tab1: 0,
			tabs1: [{ name: '音频' }, { name: '课件' }],
			activeTab: 0,
			courseType: 0,
			headStyle: {
				height: '80rpx',
				background: '#EEEEEE',
				padding: '0 40rpx'
			},
			itemStyle: {
				marghtTop: '20rpx'
			},
			bodyStyle: {
				paddingLeft: '40rpx'
			},
			itemList: [
				{
					head: '语音课',
					body: [],
					open: false
					// disabled: true
				},
				{
					head: '句子课',
					body: [],
					open: false
					// disabled: true
				}
			],
			coursewareList: [
				{
					head: '语音课',
					body: [],
					open: false,
					disabled: true
				},
				{
					head: '句子课',
					body: [],
					open: false,
					disabled: true
				}
			],
			classId: ''
		};
	},
	onLoad(options) {
		this.classId = options.class_id;
		this.getcatalog(1, 2);
		this.getcatalog(2, 2);
		this.courseware(1, 3);
		this.courseware(2, 3);
	},
	onShow() {
		this.getjob();
	},
	computed:{
		...mapState('study',['activeColor','CourseDetails'])
	},
	methods: {
		...mapMutations('study',['changeColor','changeAudios','getNow']),
		// 音频
		async getcatalog(ck, type) {
			// 语音
			if (ck == 1) {
				let data = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.classId, page: '1' };
				let res = await getList(data);
				console.log('语音', res);
				this.itemList[0].body = res.data.list;
				this.$nextTick(() => {
					this.$refs.collapse.init();
				});
				
			}
			// 句子
			if (ck == 2) {
				let data = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.classId, page: '1' };
				let res = await getList(data);
				console.log('句子', res);
				this.itemList[1].body = res.data.list;
				this.$nextTick(() => {
					this.$refs.collapse.init();
				});
				
			}
		},
		// 作业
		async getjob() {
			let data = { token: uni.getStorageSync('token'), courseType: 1, type: 4, class_id: this.classId, page: '1' };
			let res = await getList(data);
			console.log('作业', res);
		},
		// 课件
		async courseware(ck, type) {
			if (ck == 1) {
				let data = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.classId, page: '1' };
				let res = await getList(data);
				this.coursewareList[0].body = res.data.list;
				console.log('课件', this.coursewareList);
			} else {
				let data = { token: uni.getStorageSync('token'), courseType: ck, type: type, class_id: this.classId, page: '1' };
				let res = await getList(data);
				this.coursewareList[1].body = res.data.list;
				console.log('课件', this.coursewareList);
			}
		},

		//课件跳转
		PdfBtn(e) {
			console.log(e);
			let urls = e.file;
			let link = `https://boxue-resource.oss-cn-shenzhen.aliyuncs.com//${urls}`;
			// let links = encodeURIComponent(link)
			console.log(link);
			uni.navigateTo({
				url: `./webView?links=${link}`
				// url: './webView'
			});
		},
		// 音频跳转
		audios(e) {
			console.log(e);
			// 选中第几个
			this.itemList.forEach((v, i) => {
				v.body.forEach((value, index) => {
					if (value.fileId == e.fileId) {
						this.getNow(index);
					}
					var src = `http://oss.boxueteach.com/${value.file}`;
					value.src = src;
				});
			});
			
			// 缓存语音列表
			uni.setStorageSync('setCatalog', this.itemList);
			
			// 选中样式
			this.changeColor(e.fileId)
			// 选中数据
			this.changeAudios(e)
			
			
			
			uni.navigateTo({
				url: `./audios`
			});
		},
		// 作业审批
		task() {
			uni.navigateTo({
				url: './task'
			});
		},
		// tab切换
		activeTabs(e) {
			this.activeTab = e;
			if (e == 0) {
				this.$nextTick(() => {
					this.$refs.collapse.init();
				});
			}
			if (e == 2) {
				this.$nextTick(() => {
					console.log(this.$refs.courseware.init());
				});
			}
		},
		change(e) {
			console.log(e);
			this.courseType = e
		},
		itemChange(e) {
			console.log(e);
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.u-collapse-content .collapse-item /deep/ {
	padding: 30rpx 0;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	border-bottom: 1rpx solid #eeeeee;
}
.frequency-top /deep/ .icon-zuojiantou {
	color: #ffffff;
}
.u-collapse-content .collapse-item /deep/ .collapse-item-title {
	width: 92%;
}
.frequency {
	&-top {
		// width:750px
		width: 100%;
		// height:227px;
		background: rgba(153, 153, 153, 1);
		&-title {
			padding: 0 40rpx 20rpx 40rpx;
			font-size: 48rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
		}
		&-txt {
			padding: 0 40rpx 30rpx 40rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(238, 238, 238, 1);
		}
	}
	&-concent {
		// margin-bottom: 20rpx;
		&-tab {
			padding: 0 40rpx;
		}
		&-box1 {
			margin-top: 20rpx;
			.collapse-item {
				display: flex;
				justify-content: space-between;
				padding-right: 52rpx;
				&-img {
					width: 42rpx;
					height: 38rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		&-box2 {
			margin-top: 20rpx;
			.collapse-item {
				display: flex;
				position: relative;
				&-img {
					margin-left: 30rpx;
					width: 42rpx;
					height: 38rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				&-txt {
					// text-align: right;
					position: absolute;
					right: 52rpx;
				}
			}
		}
		&-box3 {
			margin-top: 20rpx;
		}
		&-line {
			height: 1rpx;
			background: rgba(238, 238, 238, 1);
			// background:red;
		}
	}
}
</style>
