<template>
	<view class="communityuser">
		<view class="communityuser-title">
			<image :src="tieHead.headImg || defaultimg"></image>
			<view class="communityuser-title-c">
				<view class="communityuser-title-c-name">
					{{tieHead.nickname || tieHead.phone}}
				</view>
				<view class="communityuser-title-c-time">
					{{createTime}}
				</view>
			</view>
<!-- 			<view class="communityuser-title-btn" :class="isFocus == 1 ? 'btnactive' : ''" @click="attentionBtn">
				{{isFocus ? '已关注' : '关注' }}
			</view> -->
			<view class="communityuser-title-btn">
				<slot name="right"></slot>
			</view>
			
		</view>
		<view class="communityuser-concent">
			<slot />
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import { focusCreate, focusDel } from '@/api/community.js';
	export default {
		props:{
			tieHead:{
				type:Object
			}
		},
		data() {
			return {
				// isSttention:require("@/static/img/关注.png"), 
				isattention:true,
				isFocus:'',
			};
		},
		created() {
			
		},
		
		watch:{
			tieHead:{
				handler(val){
					console.log('1111',val)
					 this.isFocus = this.tieHead.isFocus
				},
				immediate: true
			},
			
		},
		computed:{
			...mapState('index',['defaultimg']),
			createTime(){
				// console.log(this.tieHead.createTime)
				return this.tieHead.createTime.split(' ')[0]
			}
		},
		methods:{

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
			width: 100rpx;
			height: 100rpx;
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

		   
		}
	}
}
</style>
