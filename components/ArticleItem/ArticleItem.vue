<template>
	<view class="articleitem">
		<view class="articleitem-title hidden">{{ articleLists.title }}</view>
		<view class="articleitem-c">
			<view class="articleitem-l">
				<view class="articleitem-l-t rowhidden" @click="articleUrl">{{ articleLists.describe }}</view>
				<view class="articleitem-l-b">
					<view class="articleitem-l-b-title">{{ articleLists.update_time }}</view>
					<view class="articleitem-l-b-dz" @click="give">
						<image v-if="isShow" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png" mode=""></image>
						<image v-if="!isShow" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ydz.png" mode=""></image>
						<text>{{ praise }}</text>
					</view>
					<view class="articleitem-l-b-pl">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png" mode=""></image>
						<text>{{ articleLists.weigh }}</text>
					</view>
				</view>
			</view>
			<view class="articleitem-r"><slot name="img"></slot></view>
		</view>
	</view>
</template>

<script>
	import { CnewsCollectCreate, CnewsCollectDel } from '@/api/community.js';
export default {
	props: {
		articleLists: {
			type:Object,
			default: () => {
				return {};
			}
		}
	},
	data() {
		return {
			isShow: '',
			praise:''
		};
	},
	created() {
		console.log(this.articleLists.isPraise)
		this.articleLists.isPraise == 0 ? this.isShow = true : this.isShow = false;
		
		this.praise = this.articleLists.praise
	},
	watch:{
		praise(val){
			console.log(val)
			let praisenum = val
			return praisenum
		}
	},
	methods: {
		articleUrl(){
			this.$emit('click')
		},
		async give() {
			let data = { token: uni.getStorageSync('token'), type: '1', tieId: this.articleLists.id };
			// 未点赞
			if (this.isShow) {
				let res = await CnewsCollectCreate(data);
				if (res.code == 0) {
					this.isShow = !this.isShow;
					this.praise = this.praise + 1;
				}
			} else if (!this.isShow) {
				let res = await CnewsCollectDel(data);
				if (res.code == 0) {
					this.isShow = !this.isShow;
					this.praise = this.praise - 1;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.rowhidden {
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
}
.articleitem-c {
	display: flex;
	justify-content: space-between;
}
.articleitem {
	// border-bottom: 1rpx solid #ededed;
	&-l {
		// width: 400rpx;
		&-t {
			margin-top: 30rpx;
			margin-bottom: 24rpx;
			// padding-top: 30rpx;
			// padding-bottom: 20rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #343434;
		}
		&-b {
			display: flex;
			align-items: center;
			&-title {
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
				margin-right: 28rpx;
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
	&-r {
	}
	&-title {
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
