<template>
	<view class="comment">
		<view class="comment-centent">
			<view class="comment-centent-txt">
				<text class="comment-centent-txt-actvte" v-if="Comment.isReplyText == '回复'">@{{Comment.isReplyText}}</text>
			    <text>{{Comment.content}}</text>
			</view>
			<!-- <view class="comment-centent-img"><slot name="img"></slot></view> -->
			<view class="comment-centent-footer" v-if="!(type == 2)">
				<!-- <view class="comment-centent-footer-time">2020-08-05</view> -->
				<view class="comment-centent-footer-dz">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png" mode=""></image>
					<text>999+</text>
				</view>
				<view class="comment-centent-footer-pl">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png" mode=""></image>
					<text>999+</text>
				</view>
			</view>
		</view>
	<!-- 	<view class="comment-box">
			<view class="comment-box-list">
				<view class="comment-box-list-name">哎丫丫:</view>
				<text class="comment-box-list-c">今天天气怎样呢？</text>
			</view>
			<view class="comment-box-list">
				<view class="comment-box-list-name">尼古拉<text>回复</text>哎丫丫:</view>
				<text class="comment-box-list-c">今天天气怎样呢？</text>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	props:{
		Comment:{
			type:Object
		},
		type:{
			type:String | Number
		}
	},
	data() {
		return {};
	},
	created() {
		console.log(this.type)
	}
};
</script>

<style lang="scss">
.comment {
	&-centent {
		&-txt {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);

			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			margin-bottom: 20rpx;
			
			&-actvte{
				color: red;
				margin-right: 20rpx;
			}
		}
		// &-img {
		// 	margin: 20rpx 0;
		// 	width: 100%;
		// 	height: 350rpx;
		// 	image {
		// 		display: block;
		// 		width: 100%;
		// 		height: 100%;
		// 		border-radius: 10px;
		// 	}
		// }
		&-footer {
			display: flex;
			align-items: center;
			&-time {
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
			&-dz {
				flex: 1;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-right: 50rpx;
				image {
					width: 32rpx;
					height: 28rpx;
				}
				text {
					margin-left: 8rpx;
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
			}
			&-pl {
				display: flex;
				align-items: center;
				image {
					width: 32rpx;
					height: 32rpx;
				}
				text {
					margin-left: 8rpx;
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
			}
		}
	}
	
	
	&-box{
		margin-top: 20rpx;
		padding: 20rpx 22rpx 20rpx 30rpx;
		background:rgba(238,238,238,1);
		border-radius:10px;
		&-list{
			margin-bottom: 6rpx;
			display: flex;
			&-name{
				font-size: $fontSize - 2;
				color: #0058DD;
				font-family:PingFang SC;
				font-weight:500;
				text{
					 color: #333333;
				}
			}
			&-c{
				margin-left: 12rpx;
				font-size: $fontSize - 2;
				color: #080808;
				font-family:PingFang SC;
				font-weight:500;
			}
		}
	}
}
</style>
