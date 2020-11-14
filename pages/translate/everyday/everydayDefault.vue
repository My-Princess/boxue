<template>
	<view class="historydefault">
		<Head title="日常快择" @navigateBack="navigateBack"></Head>
		<view class="historydefault-body">
			<view class="historydefault-title">
				<!-- <view class="historydefault-title-l">代翻译内容</view> -->
				<view class="historydefault-title-r">
					<text class="historydefault-title-r-l">{{frontLanguage.name_zh}}</text>
					<text class="iconfont icon-qiehuan-"></text>
					<text class="historydefault-title-r-r">{{queenLanguage.name_zh}}</text>
				</view>
			</view>
			<view class="historydefault-c">
				<view class="historydefault-c-box">
					<view class="historydefault-c-box-txt"><textarea v-model="chineseVal" :auto-height="true" maxlength="-1" placeholder="请输入翻译内容" /></view>
					<view class="historydefault-c-box1">
						<view class="historydefault-c-box1-title">
							<view class="historydefault-c-box1-title-l">翻译结果</view>
							<view class="historydefault-c-box1-title-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/copy.png" mode=""></image></view>
						</view>
						<view class="historydefault-c-box1-txt"><textarea v-model="foreignVal" :auto-height="true" maxlength="-1" placeholder="翻译结果" /></view>
					</view>
				</view>
			</view>
			<view class="historydefault-comment">
				<view class="historydefault-comment-login" @click="submitRate">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
		import {mapState,mapMutations} from 'vuex'
export default {
	data() {
		return {
			count: 5,
			value: 0,
			chineseVal: '',
			foreignVal:'',
		};
	},
	onLoad() {
		this.chineseVal = this.LanguageData.trans_result[0].src
		console.log(this.LanguageData.trans_result[0])
		console.log(this.chineseVal)
		this.foreignVal = this.LanguageData.trans_result[0].dst
	},
	computed: {
		...mapState('user',['frontLanguage','queenLanguage','LanguageData']),
		translate() {
			return this.$t('translate');
		}
	},
	methods:{
		submitRate(){
			uni.navigateTo({
				url:'./submitRate'
			})
		},
		navigateBack(){
			uni.navigateBack({
				
			})
		}
	}
};
</script>

<style lang="scss">
.historydefault-body {
	padding: 0 40rpx;
}
.historydefault-comment {
	padding-top: 55rpx;
	&-rate {
		display: flex;

		// justify-content: space-between;
	}
	&-name {
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		padding-right: 20rpx;
	}
	&-login{
		margin:40rpx auto 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 600rpx;
		height: 98rpx;
		background: #EEEEEE;
		border-radius: 49px;
		
		
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		
	}
	&-textarea {
		margin-top: 40rpx;
		width: 100%;
		height: 340rpx;
		padding: 30rpx 20rpx 20rpx;
		box-shadow: 0 0 8px 0 #eeeeee;
		textarea {
			width: 100%;
			height: 100%;

			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333;
		}
		textarea::-webkit-input-placeholder {
			color: #999;
		}
		textarea::-moz-placeholder {
			/* Mozilla Firefox 19+ */
			color: #999;
		}
		textarea:-moz-placeholder {
			/* Mozilla Firefox 4 to 18 */
			color: #999;
		}
		textarea:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #999;
		}
	}
}
.historydefault-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&-l {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}
	&-r {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		.icon-qiehuan- {
			font-size: 34rpx;
			padding: 0 8rpx;
		}
	}
}

.historydefault-c {
	margin-top: 30rpx;
	&-box {
		width: 100%;
		box-shadow: 0 0 8px 0 #eeeeee;
		border-radius: 10px;
		&-txt {
			width: 100%;
			min-height: 340rpx;
			height: 100%;
			padding: 30rpx 15rpx 30rpx 20rpx;

			textarea {
				width: 100%;
					min-height: 340rpx;
					

				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
	&-box1 {
		box-shadow: 4px 0 6px 0 #eeeeee;
		&-title {
			padding-top: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-l {
				padding-left: 20rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #666666;
			}
			&-r {
				margin-right: 20rpx;
				width: 34rpx;
				height: 34rpx;
				image {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		&-txt {
			width: 100%;
			min-height: 480rpx;
			height: 100%;
			padding: 20rpx 55rpx 20rpx 18rpx;
			textarea {
				width: 100%;
				// height: 100%;
						min-height: 480rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
}
</style>
