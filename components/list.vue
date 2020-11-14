<template>
	<view class="index-item">
		<view class="index-item-title">
			<view class="index-item-title-l">{{ title }}</view>
			<view class="index-item-title-r" @click="All">查看全部</view>
		</view>
		<!-- tag="div" -->

		<!-- <view class="text-area" @touchstart="start" @touchend="end"> -->
		<view class="text-area">
			<view class="index-item-box">
				<view class="index-item-box-info" v-for="item in classLists" :key="item.id" @click="HomeSkip(item.class_id)">
					<image class="hhh" :src="`${img}${item.video_img}`" mode="aspectFill"></image>
					<view class="index-item-box-info-centent">
						<text>{{ item.name }}</text>
						<span>￥ {{ item.money }}</span>
					</view>
					<view class="index-item-box-info-text">{{ item.description }}</view>
				</view>
			</view>

			<!-- </view> -->
		</view>

		<!-- 小点点 -->
		<!-- <view class="index-light"><view class="index-light-line" v-for="(item, i) in list" :key="i" :class="[i == currut ? 'classline' : '']" @click="lineBtn(i)"></view></view> -->
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		classList: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {
			currut: 0,
			touchlist: 0,
			classLists: [],
			list: [],
			startData: {
				clientX: '',
				clientY: ''
			}
		};
	},
	computed: {
		...mapState('index',['img'])
	},
	mounted() {
		// 初始化截取0,4
		this.classLists = this.classList.slice(0, 4);
		// console.log(this.classList)
		// this.currut = 0;
		// this.getmoey();
		// this.getLength();
	},
	methods: {
		...mapMutations('index', ['SetcourseList', 'SetcourseTitle']),
		All() {
			this.SetcourseList(this.classList);
			this.SetcourseTitle(this.title);
			uni.navigateTo({
				url: '/pages/index/CourseDefails'
			});
		},
		// 判断长度
		getLength() {
			if (this.classList.length <= 6) {
				// this.classLists=this.classList.slice(0,4)
				// let line = ['']
				// this.list = line
				// this.currut = 0
			}
			if (this.classList.length > 6 && this.classList.length <= 10) {
				// this.classLists=this.classList.slice(4,8)
				let line1 = ['', ''];
				this.list = line1;
				// this.currut = 1
			}
			if (this.classList.length > 10) {
				// this.classLists = this.classList.slice(8,12)
				let line2 = ['', '', ''];
				this.list = line2;
				// this.currut = 2
			}
		},

		start(e) {
			// console.log('左',e)

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
					this.onSwipeRight();
				} else if (subX < -100) {
					console.log('左滑');
					this.onSwipeLeft();
				} else {
					console.log('无效');
				}
			}
		},

		// 左边滑动
		onSwipeLeft() {
			// console.log('左滑');
			if (this.touchlist < 2 && this.classList.length > 6) {
				++this.touchlist;
				this.lineBtn(this.touchlist);
			}
		},
		// 右滑动
		onSwipeRight() {
			// console.log('右滑');
			if (this.touchlist > 0) {
				--this.touchlist;
				this.lineBtn(this.touchlist);
			}
		},
		// 去除价格后面的小数点
		getmoey() {
			let moey = [];
			this.classLists.forEach(item => {
				item.money = parseFloat(item.money + '');
				moey.push(item);
			});
			this.classLists = moey;
		},

		lineBtn(i) {
			console.log('传过来的', i);
			if (i == 0) {
				this.classLists = this.classList.slice(0, 4);
				this.currut = 0;
			} else if (i == 1) {
				this.classLists = this.classList.slice(4, 8);
				this.currut = 1;
			} else if (i == 2) {
				this.classLists = this.classList.slice(8, 12);
				this.currut = 2;
			}
			this.getmoey();
		},
		HomeSkip(id) {
			uni.navigateTo({
				url: `/pages/study/videoviewing?id=${id}&tab=1`
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// .index-item-title /deep/ .v-touch{
// 	touch-action: pan-y !important;
// }
.index-item {
	padding: 0 41rpx 56rpx 40rpx;

	&-title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		// align-items: center;
		&-l {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 25rpx;
		}
		&-r {
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}

	&-box {
		display: flex;
		flex-wrap: wrap;
		// &-info image /deep/ div {
		// 	width: 0;
		// 	height: 0;
		// }
		// &-info image /deep/ img {
		// 	width: 325rpx;
		// 	height: 193rpx;
		// 	object-fit: cover;
		// 	opacity: 1;
		// }
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
					width: 190rpx;

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
				font-size: $fontSize - 8;
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

.index-light {
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
</style>
