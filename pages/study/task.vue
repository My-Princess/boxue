<template>
	<view class="task">
		<Head title="第一课：你好"></Head>
		<view class="task-concent">
			<view class="task-concent-title">题目</view>
			<view class="task-concent-name">1、请用印尼语写出“你好”。</view>
			<view class="task-concent-textarea" v-if="!istextarea"><textarea value="" placeholder="" /></view>
			<view class="task-concent-user">
				<view class="task-concent-user-name">
					我的答案
				</view>
				<view class="task-concent-user-result">
					 <text>hello</text>
					 <image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zhengque.png" mode=""></image>
				</view>
			</view>
			<view class="task-concent-teacher">
				<view class="task-concent-teacher-name">
					老师批改
				</view>
				<view class="task-concent-teacher-d">
					恭喜你，答对了！
				</view>
			</view>
		</view>
		<view class="task-foorter"><footerbtn footername="提交" fontSize="30rpx"></footerbtn></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			istextarea:true
		};
	}
};
</script>

<style lang="scss">
.task {
	&-concent {
		padding: 0 40rpx;
		&-title {
			margin-bottom: 36rpx;
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		&-name {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 30rpx;
		}
		&-textarea {
			width: 670rpx;
			height: 346rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10px;
			box-shadow: 0px 0px 8px #eeeeee;
			uni-textarea {
				width: 100%;
				height: 100%;
			}
		}
	    &-user{
			padding-top: 100rpx;
			&-name{
				font-size:$fontSize + 6;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			&-result{
				padding-top: 30rpx;
				display: flex;
				align-items: center;
				text{
					font-size:$fontSize;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					margin-right: 20rpx;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	    &-teacher{
			margin-top: 118rpx;
			font-family:PingFang SC;
			color:rgba(51,51,51,1);
			&-name{
				font-size:$fontSize + 6;
				
				font-weight:bold;
				
			}
			&-d{
				margin-top: 34rpx;
				font-size:$fontSize;
				
				font-weight:500;
		
			}
		}
	
	}
}
</style>
