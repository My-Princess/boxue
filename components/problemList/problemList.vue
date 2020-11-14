<template>
	<view class="problemList">
		<view class="problemList-title"><slot name="head"></slot></view>
		<view class="problemList-c">
			<view class="problemList-c-title">
				<image :src="defaultimg"></image>
				<view class="problemList-c-title-c">
					<view class="problemList-c-title-c-name">某不知名网友</view>
					<view class="problemList-c-title-c-time">2020-07-08</view>
				</view>
				<view class="problemList-c-title-btn"><slot name="right"></slot></view>
			</view>
			<view class="problemList-c-c">
				帖子内容帖子内容帖子内容帖子内容帖子内 容帖子内容帖子内容帖子内容帖子。 拷贝 7
			</view>
			<view class="problemList-c-comment">
			  <text class="problemList-c-comment-l">杜小英老师：</text>
			  <text class="problemList-c-comment-r">这个问题的答案是123。</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState('index', ['defaultimg'])
	}
};
</script>

<style lang="scss">
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
		&-c{
			padding-top: 20rpx;
			padding-left: 100rpx;
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-comment{
			display: flex;
			align-items: center;
			margin-top: 20rpx;
			margin-left: 100rpx;
			width: 548rpx;
			height: 65rpx;
			background: #EEEEEE;
			border-radius: 10px;
			&-l{
				padding-left: 30rpx;
				color: #0058DD;
				margin-right: 20rpx;
			}
			&-r{
				padding-right: 20rpx;
			}
			
		}
	}
}
</style>
