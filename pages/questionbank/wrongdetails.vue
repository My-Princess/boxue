<template>
	<view class="wrongdetails">
		<Head :title="name" @navigateBack="navigateBack"></Head>
		<view class="wrongdetails-jd">
			<template>
				<u-circle-progress active-color="#2979ff" :percent="progress" :width="280" :border-width="16" activeColor="#00BC89">
					<view class="u-progress-content">
						<view class="u-progress-dot">{{ progress }}%</view>
						<text class="u-progress-info">正确率</text>
					</view>
				</u-circle-progress>
			</template>
		</view>

		<view class="wrongdetails-centent">
			<view class="wrongdetails-centent-box">
				<view class="wrongdetails-centent-box-name">{{ subject.subject_name }}</view>
				<view class="wrongdetails-centent-box-c">
					<text>总题：{{ count }}</text>
					<text>正确：{{ correct }}</text>
					<text>错误：{{ error }}</text>
					<text>未做：{{ notDone }}</text>
				</view>
				<view class="wrongdetails-centent-box-time">
					
					{{ subject.createtime | formatDate }}
				</view>
			</view>

			<view class="wrongdetails-centent-box1">
				<view class="wrongdetails-centent-box1-item" v-for="(item, index) in errorCount" :key="index">
					<text>第{{ index + 1 }}题 :</text>
					<image :src="item.img" mode=""></image>
				</view>
			</view>
		</view>

		<view class="wrongdetails-footer">
			<view class="wrongdetails-footer-czqt" @click="reformAll">重做全套</view>
			<view class="wrongdetails-footer-czct" @click="reformerror">重做错题</view>
		</view>
	</view>
</template>

<script>
import { getErrorDetails } from '@/api/study.js';
import dateFormat from '@/util/Date.js';
export default {
	data() {
		return {
			id: '',
			subject: {},
			count: '',
			errorCount: [],
			typeCount: [],
			progress: 0,
			error: 0,
			notDone: 0,
			correct: 0,
			name:''
		};
	},
	onLoad(options) {
		this.id = options.class_iid;
		this.name = options.name
		
	},
	onShow() {
		this.getErrorDetailsData();
	},

	methods: {
		// 随机刷选套题
		async getErrorDetailsData() {
			let data = { token: uni.getStorageSync('token'), id: this.id };
			let res = await getErrorDetails(data);
			console.log(res);
			this.errorCount = res.data.errorCount;
			this.subject = res.data.subject;
			this.count = res.data.count;
			this.typeCount = res.data.typeCount;
			this.errorCount.forEach(v => {
				if (v.type == 1) {
					v.img = 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/erroricon.png';
				} else if (v.type == 3) {
					v.img = 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zhengque.png';
				} else {
					v.img = 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/weizuoicon.png';
				}
			});
			this.typeCount.forEach(v => {
				if (v.type == 1) {
					this.error = v.num;
				}
				if (v.type == 2) {
					this.notDone = v.num;
				}
				if (v.type == 3) {
					this.correct = v.num;
				}
			});
		    
			this.progress = Math.round((this.correct / (this.count)) * 100);
		},
		// 重做全套
		reformAll() {
			uni.navigateTo({
				url: `/pages/questionbank/practice?type=1&id=${this.id}`
			});
		},
		// 重做错题
		reformerror(){
			uni.navigateTo({
				url: `/pages/questionbank/practice?type=2&id=${this.id}`
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	},
	filters: {
		formatDate(time) {
			let date = new Date(time);
			return dateFormat.formatDate(date, 'yyyy-MM-dd hh:mm');
		}
	}
};
</script>

<style lang="scss">
.u-progress-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.u-progress-dot {
	font-size: $fontSize + 30;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(0, 188, 137, 1);
}

.u-progress-info {
	font-size: $fontSize - 2;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	// font-size: $fontSize - 2;
	// padding-left: 16rpx;
	// letter-spacing: 2rpx
}
/deep/.u-circle-progress {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
.wrongdetails {
	width: 100%;
	&-jd {
		position: relative;
		margin-top: 65rpx;
		margin-bottom: 48rpx;
	}
	&-centent {
		padding: 0 40rpx;
		&-box {
			padding: 48rpx 40rpx;
			box-shadow: 0 0 8px 0 #eeeeee;
			&-name {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-c {
				padding-top: 8rpx;
				padding-bottom: 14rpx;
				text {
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					padding-left: 15rpx;
					padding-right: 15rpx;
				}
				text:nth-child(1) {
					padding-left: 0;
				}
			}
			&-time {
				font-size: $fontSize - 8;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
		&-box1 {
			margin-bottom: 120rpx;
			margin-top: 30rpx;

			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding: 40rpx 40rpx 10rpx;

			box-shadow: 0 0 10px 0 #eeeeee;
			&-item {
				display: flex;
				align-items: center;
				padding-bottom: 30rpx;
				width: 33%;
				text {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
				image {
					margin-left: 5rpx;
					display: block;
					width: 34rpx;
					height: 34rpx;
				}
			}
		}
	}
	&-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 98rpx;
		display: flex;
		&-czqt {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 100%;
			background: linear-gradient(-27deg, rgba(0, 188, 137, 1) 0%, rgba(83, 208, 174, 1) 100%);

			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
		&-czct {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 100%;
			background: linear-gradient(-27deg, rgba(255, 79, 66, 1) 0%, rgba(255, 122, 112, 1) 100%);

			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
