<template>
	<view class="communitydetails">
		<Head title="帖子详情" @navigateBack="navigateBack"></Head>
		<view class="communitydetails-c" v-if="detailList.createTime">
			<communityUser :tieHead="detailList">
				<template v-slot:right>
					<view class="communitydetails-c-isFocus" v-if="detailList.isFocus == 2" :class="detailList.isFocus == 1 ? 'btnactive' : ''"  @click="attentionBtn(detailList)">
						{{detailList.isFocus ? '已关注' : '关注' }}
					</view>
				</template>
				<communityUser-Item :style="styles" :tieConcent="detailList">
					<template v-slot:img>
						<view class="community-concent-item" @click="imgDetail" v-for="(v,i) in detailList.files" :key="v.id">
							<!-- <image :src="v.file" mode=""></image> -->
							<view class="community-concent-item-img" v-if="v.type == 1"><image :src="v.file" mode=""></image></view>
							<view class="community-concent-item-video" v-if="v.type == 2"><video :src="v.file" controls></video></view>
						</view>
					</template>
				</communityUser-Item>
			</communityUser>
		</view>

		<view class="communitydetails-comment">
			<view class="communitydetails-comment-title">
				<text>评论</text>
				<text>({{detailList.comments}})</text>
			</view>
			<view class="communitydetails-comment-c" v-if="detailList.commentList">
				<view class="communitydetails-comment-c-item" v-for="v in detailList.commentList.list" :key="v.commentId">
					<CommentUser :commentHead="v"><Comment :Comment="v" :style="styles"></Comment></CommentUser>
				</view>
			</view>
			<view class="communitydetails-comment-cc" >
				目前还没有评论
			</view>
		</view>

		<view class="communitydetails-footer">
			<input type="text" value="" placeholder="留下你的感想吧" />
			<text>发送</text>
		</view>
	</view>
</template>

<script>
	import { tieDetail } from '@/api/community.js';
export default {
	data() {
		return {
			styles: {
				padding: '16rpx 0 0rpx 120rpx'
			},
			isComment:false,
			tieId:'',
			page:1,
			detailList:{}
		};
	},
	onLoad(options) {
		this.tieId = options.tieId;
		
		// console.log(this.detailList.commentList.list.length)
	},
	onShow() {
		this.tieDetailList()
	},
	
	methods: {
	 	async tieDetailList(){
			let data = {token:uni.getStorageSync('token'),tieId:this.tieId,page:this.page}
			let res = await tieDetail(data)
			console.log(res)
			this.detailList = res.data
		},
		navigateBack() {
			uni.navigateBack();
		},
		imgDetail(){
			uni.navigateTo({
				url:'./imgDetail'
			})
		},
		// 关注
		attentionBtn(e){
			console.log(e)
		}
	}
};
</script>

<style lang="scss">
	.community-concent-item-video /deep/ uni-video{
		width: 100% !important;
		height: 100% !important;
	}
	
	.community-concent-item{
		
		&-img{
			width: 547rpx;
			// height: 289rpx;
			margin-top: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		&-video{
			margin-top: 30rpx;
			width: 547rpx;
			// height: 289rpx;
		}
	}
.btnactive{
		background: #FFFFFF !important;
		border: 1rpx solid #adadad;
	    color:#adadad !important;
	}
.communitydetails {
	&-c {
		padding: 0 40rpx;
		&-isFocus{
			width: 130rpx;
			height: 46rpx;
			background: #ff4a3e;
			display: flex;
			justify-content: center;
			align-items: center;
			
			color: #ffeeee;
			font-size: $fontSize - 6;
			border-radius: 10px;
		}
	}
	
	
	&-comment {
		
		// background: pink;
		position: relative;
		margin-top: 55rpx;
		padding: 0 40rpx;
		margin-bottom: 4rpx;
		&-title {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			text:last-child {
				margin-left: 10rpx;
			}
		}
		&-c {
			&-item {
				margin-top: 30rpx;
			}
		}
		&-cc{
			font-size:$fontSize - 6;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		    margin-top: 80rpx;
			padding-bottom: 200rpx;
			text-align: center;
		}
	}
	&-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		padding: 0 40rpx;
		display: flex;
		align-items: center;
		width: 100%;
		height: 98rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 0 12px 0 #EEEEEE;
		input {
			padding:0 30rpx;
			// width: 589rpx;
			flex: 1;
			height: 70rpx;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(238, 238, 238, 1);
			border-radius: 35px;
			font-size:$fontSize - 2;
			font-family:PingFang SC;
			font-weight:500;
			color: #333333;
		}
		input::-webkit-input-placeholder {
			color: #999999;
			
		}
		input::-moz-placeholder {
			/* Mozilla Firefox 19+ */
			color: #999999;
		}
		input:-moz-placeholder {
			/* Mozilla Firefox 4 to 18 */
			color: #999999;
		}
		input:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #999999;
		}
		text{
			margin-left: 20rpx;
			font-size:$fontSize;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
	}
}
</style>
