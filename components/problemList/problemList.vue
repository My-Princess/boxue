<template>
	<view class="problemList">
		<view class="problemList-title"><slot name="head"></slot></view>
		<view class="problemList-c">
			<view class="student-item" v-for="item in courseList" :key="item.id">
				<view class="problemList-c-title">
					<image :src="item.head_img || defaultimg"></image>
					<view class="problemList-c-title-c">
						<view class="problemList-c-title-c-name">{{ item.nickname }}</view>
						<view class="problemList-c-title-c-time">{{ item.create_time }}</view>
					</view>
					<view class="problemList-c-title-btn"><slot name="right"></slot></view>
				</view>
				<view class="problemList-c-c">{{ item.content || item.from_content }}</view>
				<view class="problemList-c-comment" v-if="type">
					<text class="problemList-c-comment-l">广州博学老师：</text>
					<text class="problemList-c-comment-r">{{item.to_content}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		courseList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		type:{
			type:String,
			
		}
	},
	data() {
		return {};
	},
	computed: {
		...mapState('index', ['defaultimg'])
	}
};
</script>

<style lang="scss">
.student-item {
	padding: 20rpx 0;
	border-bottom: 1rpx solid #eee;
}
.problemList {
	padding: 0 40rpx;
	&-c {
		padding-top: 14rpx;
		&-title {
			display: flex;
			align-items: center;
			image {
				display: block;
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
			&-c {
				flex: 1;
				margin-left: 20rpx;
				&-name {
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				&-time {
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}

			&-btn {
			}
		}
		&-c {
			padding-top: 20rpx;
			padding-left: 100rpx;
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-comment {
			display: flex;
			align-items: center;
			margin-top: 20rpx;
			margin-left: 100rpx;
			width: 548rpx;
			height: 65rpx;
			background: #eeeeee;
			border-radius: 10px;
			&-l {
				padding-left: 30rpx;
				color: #0058dd;
				margin-right: 20rpx;
			}
			&-r {
				padding-right: 20rpx;
			}
		}
	}
}
</style>
