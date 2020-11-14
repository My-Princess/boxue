<template>
	<view class="achievement">
		<Head title="成就榜"></Head>
		<view class="achievement-title">
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode=""></image>
			<view class="achievement-title-r">
				<view class="achievement-title-r-t">爱学习的学员</view>
				<view class="achievement-title-r-b">
					已获得成就
					<text class="achievement-title-r-b-h">4</text>
					<text>/6</text>
				</view>
			</view>
		</view>
		<view class="achievement-centent">
			<view class="achievement-centent-item">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xuebao.png" mode=""></image>
				<view class="achievement-centent-item-r">
					<view class="achievement-centent-item-r-t">
						<view class="achievement-centent-item-r-t-name">学霸 Lv.4</view>
						<view class="achievement-centent-item-r-t-size">
							<text>2912</text>
							<text>/</text>
							<text>6000</text>
						</view>
					</view>
					<view class="achievement-centent-item-r-b"><u-line-progress :percent="70" :striped-active="true" :show-percent="false" inactive-color="#E4E4E4" active-color="#FF4F42" height="6"></u-line-progress></view>
				</view>
			</view>
			<view class="achievement-centent-item">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/坚持不懈.png" mode=""></image>
				<view class="achievement-centent-item-r">
					<view class="achievement-centent-item-r-t">
						<view class="achievement-centent-item-r-t-name">学霸 Lv.4</view>
						<view class="achievement-centent-item-r-t-size">
							<text>2912</text>
							<text>/</text>
							<text>6000</text>
						</view>
					</view>
					<view class="achievement-centent-item-r-b"><u-line-progress :percent="70" :striped-active="true" :show-percent="false" inactive-color="#E4E4E4" active-color="#FF4F42" height="6"></u-line-progress></view>
				</view>
			</view>
			
			<view class="achievement-centent-item">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/坚持不懈.png" mode=""></image>
				<view class="achievement-centent-item-r">
					<view class="achievement-centent-item-r-t">
						<view class="achievement-centent-item-r-t-name">学霸 Lv.4</view>
						<view class="achievement-centent-item-r-t-size">
							<text>2912</text>
							<text>/</text>
							<text>6000</text>
						</view>
					</view>
					<view class="achievement-centent-item-r-b"><u-line-progress :percent="70" :striped-active="true" :show-percent="false" inactive-color="#E4E4E4" active-color="#FF4F42" height="6"></u-line-progress></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.achievement {
	&-title {
		margin-top: 20rpx;
		margin-bottom: 30rpx;
		padding: 0 40rpx;
		display: flex;
		align-items: center;
		image {
			display: block;
			width: 120rpx;
			height: 120rpx;
			border-radius: 60px;
			margin-right: 20rpx;
		}
		&-r {
			&-t {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-b {
				margin-top: 5rpx;
				text {
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
				&-h {
					color: #dc2a1f !important;
					margin-left: 10rpx;
				}
			}
		}
	}
    &-centent{
		width: 1005;
		padding: 0 40rpx;
		
		&-item{
			padding: 30rpx 0;
			display: flex;
			align-items: center;
			image{
				margin-right: 20rpx;
				display: block;
				width:80rpx;
				height:76rpx;
			}
			&-r{
				flex: 1;
				&-t{
					display: flex;
					justify-content: space-between;
					position: relative;
					&-name{
						font-size:$fontSize;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
					&-size{
						text{
							font-size:$fontSize - 8;
							font-family:PingFang SC;
							font-weight:500;
							color:#999999;
						}
						text:nth-child(1){
							color: #FF4F42;
						}
						text:nth-child(2){
							margin: 0 8rpx;
						}
					}
				}
				&-b{
					position: relative;
					top: -8rpx;
					
				}
			}
		}

	}

}
</style>
