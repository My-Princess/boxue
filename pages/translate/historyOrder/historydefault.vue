<template>
	<view class="historydefault">
		<Head title="日常快择"></Head>
		<view class="historydefault-body">
			<view class="historydefault-title">
				<view class="historydefault-title-l">代翻译内容</view>
				<view class="historydefault-title-r">
					<text class="historydefault-title-r-l">汉语</text>
					<text class="iconfont icon-qiehuan-"></text>
					<text class="historydefault-title-r-r">英语</text>
				</view>
			</view>
			<view class="historydefault-c">
				<view class="historydefault-c-box">
					<view class="historydefault-c-box-txt"><textarea :value="chineseVal" placeholder="" /></view>
					<view class="historydefault-c-box1">
						<view class="historydefault-c-box1-title">
							<view class="historydefault-c-box1-title-l">翻译结果</view>
							<view class="historydefault-c-box1-title-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/copy.png" mode=""></image></view>
						</view>
						<view class="historydefault-c-box1-txt"><textarea :value="foreignVal" placeholder="" /></view>
					</view>
				</view>
			</view>
			<view class="historydefault-comment">
				<view class="historydefault-comment-rdte">
					<text class="historydefault-comment-name">请为本次翻译结果评分:</text>
					<template>
						<u-rate :count="count" v-model="value" size="36" inactive-color="#b2b2b2" active-color="#dc2a1f"></u-rate>
					</template>
				</view>
				<view class="historydefault-comment-textarea"><textarea value="" placeholder="请为本次翻译结果进行点评。" /></view>
				
				<view class="historydefault-comment-login" @click="submitRate">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			count: 5,
			value: 0,
			chineseVal: '据悉，双节假期，北京游客接待量、旅游总收入实现了同比双增长，登双节热门旅游城市榜首。外省来京游407.4万人次，较去年假期增长5.4%',
			foreignVal:
				'It is reported that the double festival holiday, Beijing tourist reception, tourism revenue achieved a year-on-year double growth, the top of the double festival popular tourist cities. There were 4.074 million visits to Beijing from other provinces, an increase of 5.4% compared with lst year'
		};
	},
	methods:{
		submitRate(){
			uni.navigateTo({
				url:'./submitRate'
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
			height: 340rpx;
			padding: 30rpx 15rpx 30rpx 20rpx;

			textarea {
				width: 100%;
				height: 100%;

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
			height: 480rpx;
			padding: 20rpx 55rpx 20rpx 18rpx;
			textarea {
				width: 100%;
				height: 100%;
			
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
	}
}
</style>
