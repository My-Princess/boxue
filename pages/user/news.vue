<template>
	<view class="news">
		<Head title="消息" @navigateBack="navigateBack">
			<template v-slot:right>
				<view>标记已读</view>
			</template>
		</Head>
		<view class="news-tabs">
			<u-tabs
				item-width="290"
				active-color="#333333"
				:bar-style="barStyle"
				inactive-color="#666666"
				:is-scroll="false"
				:list="list"
				:current="current"
				@change="change"
			></u-tabs>
		</view>
		<view class="news-body">
			<view class="news-body-active" v-if="current == 0">
				<view class="news-body-c" v-if="isNews">
					<view class="news-body-c-item">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dhwc.png" mode=""></image>
						<view class="news-body-c-item-c">系统消息内容系统消息内容系 统消息内容系统消息内容系...</view>
						<view class="news-body-c-item-r">
							<view class="news-body-c-item-r-time">2020-07-08</view>
							<view class="news-body-c-item-r-news"><text>23</text></view>
						</view>
					</view>
				</view>
				<view class="news-body-wu" v-else>暂无信息</view>
			</view>
			<view class="news-body-active" v-if="current == 1">
				<view class="news-body-c1" v-if="isreply">
					<view class="news-body-c1-item">
						<CommentUser :commentHead="commentHead">
							<template v-slot:right>
								<view class="huifu">回复</view>
							</template>
						</CommentUser>
						<view class="news-body-c1-item-c">回复内容回复内容回复内容回复内容回复内 容回复内容回复内容回复内容回复内容回...</view>
						<view class="news-body-c1-item-pl">帖子评论内容帖子评论内容帖子评论内容帖 子评论内容帖子评论内容帖子评论内容帖...</view>
					</view>
				</view>
				<view class="news-body-wu" v-else>暂无信息</view>
			</view>
			<view class="news-body-active" v-if="current == 2">
				<view class="news-body-c1" v-if="iscomment">
					<view class="news-body-c1-item" @click="commentDetail">
						<CommentUser :commentHead="commentHead">
							<template v-slot:right>
								<view class="huifu">回复</view>
							</template>
						</CommentUser>
						<view class="news-body-c1-item-c">回复内容回复内容回复内容回复内容回复内 容回复内容回复内容回复内容回复内容回...</view>
						<view class="news-body-c1-item-pl">帖子评论内容帖子评论内容帖子评论内容帖 子评论内容帖子评论内容帖子评论内容帖...</view>
					</view>
				</view>
				<view class="news-body-wu" v-else>暂无信息</view>
			</view>
			<view class="news-body-active" v-if="current == 3">
				<view class="news-body-c1" v-if="ispraise">
					<view class="news-body-c1-item">
						<CommentUser :commentHead="commentHead"></CommentUser>
						<view class="news-body-c1-item-c">赞了您的评论</view>
						<view class="news-body-c1-item-pl">帖子评论内容帖子评论内容帖子评论内容帖 子评论内容帖子评论内容帖子评论内容帖...</view>
					</view>
				</view>
				<view class="news-body-wu" v-else>暂无赞</view>
			</view>
			<view class="news-body-active" v-if="current == 4">
				<view class="news-body-c4" v-if="isDynamic">
					<u-collapse :head-style="headStyle" :body-style="bodyStyle" event-type="close" @change="changes">
						<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
							<view class="collapse-item" v-for="(v, i) in item.body" :key="i">
								<view class="collapse-item-title">{{ v.fileName }}</view>
							</view>
						</u-collapse-item>
					</u-collapse>
				</view>
				<view class="news-body-wu" v-else>暂无动账</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			headStyle: {
				height: '80rpx',
				background: '#EEEEEE',
				padding: '0 40rpx'
			},
			bodyStyle: {
				
			},
			itemList: [
				{
					head: '本月  (支出964.5 收入100）',
					body: [{fileName:'拼团成功 返现'},{fileName:'购买课程《第六期印尼语初级班》'}],
					open: true,
					disabled: true
				},
				{
					head: '本月 （支出964.5 收入100）',
					body: [{fileName:'拼团成功 返现'},{fileName:'购买课程《第六期印尼语初级班》'}],
					open: true,
					disabled: true
				}
			],
			barStyle: {
				background: '#DB1F13'
			},
			commentHead: {
				fromHeadImg: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				fromNickname: '某知名网友',
				createTime: '2020-07-08'
			},
			list: [
				{
					name: '系统消息'
				},
				{
					name: '回复'
				},
				{
					name: '评论'
				},
				{
					name: '赞'
				},
				{
					name: '动账'
				}
			],
			current: 0,
			isNews: false,
			isreply: false,
			iscomment: true,
			ispraise: true,
			isDynamic: true
		};
	},
	methods: {
		change(index) {
			this.current = index;
		},
		navigateBack() {
			uni.navigateBack();
		},
		changes(e) {
			console.log(e);
		},
		itemChange(e) {
			console.log(e);
		},
		// 评论详情
		commentDetail(){
			console.log('111')
			uni.navigateTo({
				url:'./userNews/newsDetails'
			})
		}
	}
};
</script>

<style lang="scss">
	.collapse-item{
		padding: 30rpx 40rpx;
		border-bottom:1rpx solid #EEEEEE;
		font-size:30rpx;
	}
.news-tabs {
	padding-left: 40rpx;
}
.news-body {
	&-c {
		padding: 0 40rpx;
		&-item {
			padding: 30rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #eeeeee;
			image {
				display: flex;
				width: 80rpx;
				height: 80rpx;
			}
			&-c {
				flex: 1;
				margin-left: 20rpx;
				margin-right: 34rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-r {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				// justify-content: flex-end;
				&-time {
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				&-news {
					width: 80rpx;
					height: 40rpx;
					background: #db1f13;
					border: 1px solid #db1f13;
					border-radius: 20px;
					text {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #ffffff;
					}
				}
			}
		}
	}
	&-wu {
		display: flex;
		justify-content: center;
		margin-top: 80rpx;
		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	&-c1 {
		padding: 0 40rpx;

		&-item {
			padding: 30rpx 0;
			border-bottom: 1rpx solid #eeeeee;
			&-c {
				margin-left: 100rpx;
				margin-top: 24rpx;
				margin-bottom: 20rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-pl {
				margin-left: 100rpx;
				padding: 30rpx;
				background: #eeeeee;
				border-radius: 10px;
				font-size: $fontSize - 4;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
		.huifu {
			width: 130rpx;
			height: 42rpx;
			background: #ffffff;
			border: 1px solid #999999;
			border-radius: 21px;

			display: flex;
			justify-content: center;
			align-items: center;

			color: #333333;
			font-size: $fontSize - 6;
			// border-radius: 10px;
		}
	}
}
</style>
