<template>
	<view class="artificial">
		<Head title="订单详情" @navigateBack="navigateBack"></Head>
		<view class="artificial-body">
			<view class="artificial-title">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/order.png" mode=""></image>
				<view class="artificial-title-name">{{title}}</view>
			</view>
			<view class="successful-list">
				<view class="successful-list-name">预约内容</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">翻译语言</view>
					<view class="successful-list-item-r">
						<view class="successful-list-item-r-box">{{ artificialData.cate_name }}</view>
					</view>
				</view>
				<!-- 	<view class="successful-list-item">
					<view class="successful-list-item-name">翻译老师</view>
					<view class="successful-list-item-r">李海霞</view>
				</view> -->
				<view class="successful-list-item">
					<view class="successful-list-item-name">联系方式</view>
					<view class="successful-list-item-r">手机号 {{ artificialData.phone }}</view>
				</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">客户姓名</view>
					<view class="successful-list-item-r">{{ artificialData.name }}</view>
				</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">翻译类型</view>
					<view class="successful-list-item-r">{{ artificialData.type == 1 ? '文件翻译' : '网络翻译' }}</view>
				</view>
				<view class="successful-list-item">
					<view class="successful-list-item-name">预约翻译时间</view>
					<view class="successful-list-item-r">{{ artificialData.create_time }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			title: '',
		};
	},
	onLoad() {
		console.log(this.artificialData);
		if (this.artificialData.status == 0) {
			this.title = '预约成功，等待老师确认中';
		} else if (this.artificialData.status == 1) {
			item.state = '沟通中';
		} else {
			item.state = '订单已完成';
		}
	
	},
	computed: {
		...mapState('user', ['artificialData'])
	},
	methods:{
		navigateBack(){
			uni.navigateBack()
		}
	}
	
};
</script>

<style lang="scss">
.artificial-body {
}
.artificial-title {
	padding: 34rpx 0 80rpx;

	image {
		display: block;
		width: 78rpx;
		height: 84rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	&-name {
		padding-top: 30rpx;
		text-align: center;
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
}
.successful-list {
	padding: 60rpx 40rpx 0;
	&-name {
		font-size: $fontSize + 5;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		padding-bottom: 10rpx;
	}
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25rpx 18rpx;
		border-bottom: 1rpx solid #eeeeee;
		&-name {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-r {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			&-box {
				display: flex;
				// justify-content: center;
				align-items: center;
				.icon-qiehuan- {
					font-size: 34rpx;
					padding: 0 8rpx;
				}
			}
		}
	}
}
</style>
