<template>
	<view class="communityuser">
		<view class="communityuser-title">
			<image :src="commentHead.fromHeadImg || defaultimg"></image>
			
			<view class="communityuser-title-c">
				<view class="communityuser-title-c-name">
					
					{{commentHead.fromNickname}}
				</view>
				<view class="communityuser-title-c-time">
					{{createTime}}
				</view>
			</view>
			<!-- <view class="communityuser-title-btn" @click="attentionBtn">
				{{isattention ? '关注' : '已关注' }}
			</view> -->
			<slot name="right"></slot>
		</view>
		<view class="communityuser-concent">
			<slot />
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		props:{
	        commentHead:{
				type:Object
			}
		},
		data() {
			return {
				// isSttention:require("@/static/img/关注.png"), 
				isattention:true
			};
		},
	
		computed:{
			...mapState('index',['defaultimg']),
			createTime(){
				console.log(this.commentHead.createTime)
				return this.commentHead.createTime.split(' ')[0]
			}
		},
		
		methods:{
			attentionBtn(){
				this.isattention = !this.isattention
			}
		}
	}
</script>

<style lang="scss">
.communityuser{
	&-title{
		display: flex;
		align-items: center;
		image{
			display: block;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		&-c{
			flex: 1;
			margin-left: 20rpx;
			&-name{
				font-size:$fontSize - 2;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			&-time{
				font-size:$fontSize - 6;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
		&-btn{
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
}
</style>
