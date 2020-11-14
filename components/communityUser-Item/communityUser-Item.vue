<template>
	<view class="communityUserItem">
		<view class="userid-centent-centent" :style="styles">
			<view class="userid-centent-centent-txt" @click="txtDetail(tieConcent.tieId)">
				<u-parse :content="tieConcent.content" noData="" />
			</view>
			<view class="userid-centent-centent-img"><slot name="img"></slot></view>
			<view class="userid-centent-centent-footer">
				<view class="userid-centent-centent-footer-time" v-if="tieConcent.createTime">{{ tieConcent.createTime.split(' ')[0] }}</view>
				<view class="userid-centent-centent-footer-time" v-if="tieConcent.create_time"> {{ tieConcent.create_time | formatDate}}</view>
				<view class="userid-centent-centent-footer-dz" @click="give">
					<image v-if="isShow" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png" mode=""></image>
					<image v-if="!isShow" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ydz.png" mode=""></image>
					<text>{{ praise }}</text>
				</view>
				<view class="userid-centent-centent-footer-pl" @click="txtDetail(tieConcent.tieId)">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png" mode=""></image>
					<text>{{ tieConcent.comments }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'; //引入富文本组件
import { CnewsCollectCreate, CnewsCollectDel } from '@/api/community.js';
	 import dateFormat from '@/util/Date.js';
export default {
	props: {
		styles: {
			type: Object
			// default:"{padding: 40rpx 40rpx 20rpx;}"
		},
		type: {
			type:String
		},
		tieConcent: {
			type: Object
		}
	},
	components: {
	
		uParse
	},
	data() {
		return {
			isShow: '',
			praise:''
		};
	},
	created() {
	
		
		
		
	},
	watch:{
		tieConcent:{
			handler(val){
				console.log(val)
				this.praise = val.praise
					val.isPraise == 0 ? (this.isShow = true) : (this.isShow = false);
				console.log('dfasfa',this.praise)
			},
			immediate:true
			// console.log(val)
		
		}
	},
	filters: {
	       formatDate(time) {
	           let date = new Date(time * 1000);
	           return dateFormat.formatDate(date, "yyyy-MM-dd");
	       }
	   },
	methods: {
		txtDetail(e) {
			this.$emit('txtDetail', e);
		},
		async give() {
			if(this.type==2){
				let data = { token: uni.getStorageSync('token'), type: '1', tieId: this.tieConcent.id };
				// 未点赞
				if (this.isShow) {
					let res = await CnewsCollectCreate(data);
					if (res.code == 0) {
						this.isShow = !this.isShow;
						this.praise = this.praise + 1
					}
				}else if (!this.isShow) {
					let res = await CnewsCollectDel(data);
					if (res.code == 0) {
						this.isShow = !this.isShow;
						 this.praise = this.praise - 1
						
					}
				}
			}else if(this.type == 1){
				this.$emit('give')
			}
			
			
		}
	}
};
</script>

<style lang="scss">
.userid-centent-centent {
	// &-txt {
	// 	font-size: $fontSize - 2;
	// 	font-family: PingFang SC;
	// 	font-weight: 500;
	// 	color: rgba(51, 51, 51, 1);

	// 	display: -webkit-box;
	// 	-webkit-box-orient: vertical;
	// 	-webkit-line-clamp: 2;
	// 	overflow: hidden;
	// 	// margin-bottom: 30rpx;
	// }
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
		padding-top: 22rpx;
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
				width: 44rpx;
				height: 40rpx;
			}
			text {
				margin-left: 8rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}
		&-pl {
			display: flex;
			align-items: center;
			image {
				width: 44rpx;
				height: 40rpx;
			}
			text {
				margin-left: 8rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
}
.userid-centent-centent:first-child {
	padding-top: 0;
}
</style>
