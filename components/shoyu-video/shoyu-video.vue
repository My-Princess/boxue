<template>
	<view>
		<!-- 		  :direction="90" 
				object-fit="cover"
		-->
		<video
			class="video"
			id="myVideo"
			:src="videoUri"
			poster="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/videoFooter.png"
			@play="play"
			:autoplay="true"
			@pause="pause"
		
			controls
			v-if="videoUri"
			
		>
			<cover-view class="iconfont icon-zuojiantou"></cover-view>
			<!-- 头部 -->
			<cover-view class="video-control" v-show="!showTip" @touchstart="mouseover" @mouseout="mouseout">
				<cover-view class="video-title">
					<cover-view class="video-nmae">{{ title }}</cover-view>
				</cover-view>
				<cover-view class="distinct" @tap="showdistinct">{{ distinctname }}</cover-view>
				<cover-view class="multi rate" @tap="showSwitchRate">x {{ currentRate }}</cover-view>
			</cover-view>

			<!-- 倍速 -->
			<cover-view class="multi-list rate" :class="{ active: rateShow }">
				<cover-view
					v-for="(item, index) in ['0.5', '0.8', '1.0', '1.25', '1.5']"
					:key="index"
					class="multi-item rate"
					:data-rate="item"
					@tap="switchRate"
					:class="{ active: item == currentRate }"
				>
					{{ item }}
				</cover-view>
			</cover-view>

			<!-- 清晰度 -->
			<cover-view class="distinct-list" :class="{ dactive: distinctShow }">
				<cover-view
					v-for="(item, index) in distinctData"
					:key="index"
					:data-name="item.name"
					:data-type="item.type"
					@tap="distinctBtn"
					class="distinct-list-item rate"
					:class="{ active: item.name == distinctname }"
				>
					{{ item.name }}
				</cover-view>
			</cover-view>
		</video>
	</view>
</template>

<script>
export default {
	name: 'SyVideo',
	props: {
		videoUri: {
			type: [String],
			default: ''
		},
		title: {
			type: String
		}
	},
	data() {
		return {
			videoContext: uni.createVideoContext('myVideo'),
			showTip: false,
			rateShow: false,
			distinctShow: false,
			currentRate: 1.0,
			distinctname: '标清',
			distinctData: [
				{
					type: 3,
					name: '流畅'
				},
				{
					type: 2,
					name: '标清'
				},
				{
					type: 3,
					name: '高清'
				}
			]
		};
	},
	created() {},
	mounted() {},
	methods: {
		showSwitchRate(rate) {
			this.rateShow = true;
			this.distinctShow = false;
		},
		switchRate(e) {
			let that = this;
			let rate = Number(e.currentTarget.dataset.rate);
			that.currentRate = rate;
			that.rateShow = false;
			this.videoContext.playbackRate(rate);
		},
		showdistinct() {
			this.distinctShow = true;
			this.rateShow = false;
		},
		// 选择清晰度
		distinctBtn(e) {
			console.log(e);
			this.distinctname = e.currentTarget.dataset.name;
			let type = e.currentTarget.dataset.type;
			this.distinctShow = false;
			this.$emit('distincttype', type);
		},
		// 开始播放
		play() {
			console.log(this.videoUri);
			setTimeout(() => {
				this.showTip = true;
			}, 3000);
		},
		pause() {
			this.showTip = false;
		},
		mouseover() {
			console.log('触发');
			this.showTip = false;
		},
		mouseout() {
			console.log('移除');
			setTimeout(() => {
				this.showTip = true;
			}, 3000);
		}
	}
};
</script>

<style>
.video {
	width: 100%;
	height: 420rpx !important;
}
.video-control {
	background-color: rgba(0, 0, 0, 0.5);
	height: 70rpx;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 997;
}
.icon-zuojiantou {
	/* line-height: 70rpx; */
	position: absolute;
	top: 8rpx;
	left: 0rpx;
	font-size: 50rpx;
	padding-left: 6rpx;
	color: #ffffff;
	z-index: 998;
}
.video-title {
	/* line-height: 70rpx;
	 */

	display: flex;
	align-items: center;
	color: #ffffff;
	font-size: 24rpx;
}
.video-nmae {
	padding-left: 10rpx;
	width: 70%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.video-wrap {
	position: relative;
}
.multi-list.full-screen.vertical {
	height: 100vh !important;
	padding: 8vh 0;
}
.multi-list.full-screen.horizontal {
	height: 100vw !important;
	padding: 8vw 0;
}
.distinct {
	position: absolute;
	right: 200rpx;
	top: 50%;
	transform: translateY(-50%);
	color: #fff;
}
.multi {
	position: absolute;
	right: 30rpx;
	top: 50%;
	transform: translateY(-50%);
	z-index: 998;
	width: 100rpx;
	/* height: 60rpx; */
	border: 1rpx solid #ffffff;
	border-radius: 20px;
	font-size: 24rpx;
	color: #fff;
	padding: 4rpx 0;
	text-align: center;
	transition: color ease 0.3s;
}
.multi.rate {
	right: 20rpx;
}
.multi-list {
	position: absolute;
	height: 100%;
	width: 0;
	background-color: rgba(0, 0, 0, 0.8);
	top: 0rpx;
	right: 20rpx;
	transition: width 0.3s ease;
	z-index: 999;
	box-sizing: border-box;
	padding: 50rpx 0;
}
.distinct-list {
	position: absolute;
	height: 70%;
	width: 0;
	background-color: rgba(0, 0, 0, 0.8);
	top: 0rpx;
	right: 180rpx;
	transition: width 0.3s ease;
	z-index: 999;
	box-sizing: border-box;
	padding: 50rpx 0;
}
.multi-list.rate {
	padding: 25rpx 0;
}
.multi-list.active {
	width: 120rpx;
}
.dactive {
	width: 100rpx;
}
.multi-item {
	text-align: center;
	color: #fff;
	line-height: 80rpx;
	transition: color ease 0.3s;
}
.distinct-list-item {
	text-align: center;
	color: #fff;
	line-height: 80rpx;
	transition: color ease 0.3s;
}
.distinct-list-item.rate {
	line-height: 70rpx;
}
.multi-item.rate {
	line-height: 70rpx;
}
.multi-item:hover,
.multi:hover {
	color: #00d8ff;
}
.multi-item.active {
	color: #00d8ff;
}
.distinct-list-item.active {
	color: #00d8ff;
}
</style>
