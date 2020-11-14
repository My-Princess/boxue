<template>
	<view class="everyday">
		<Head title="订单详情"></Head>
		<view class="everyday-body">
			<view class="everyday-title">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/order.png" mode=""></image>
				<view class="everyday-title-name">订单已提交</view>
			</view>
			<view class="everyday-name">代翻译内容</view>
			<view class="everyday-c">据悉，双节假期，北京游客接待量、旅游总收入 实现了同比双增长，登双节热门旅游城市榜首。 外省来京游407.4万人次，较去年假期增长5.fdsafdafsad</view>
			<view class="everyday-list">
				<view class="everyday-list-item">
					<view class="everyday-list-item-name">订单编号：</view>
					<view class="everyday-list-item-txt">No.303568</view>
				</view>
				<view class="everyday-list-item">
					<view class="everyday-list-item-name">下单时间：</view>
					<view class="everyday-list-item-txt">2020.02.29  15:24</view>
				</view>
				<view class="everyday-list-item">
					<view class="everyday-list-item-name">支付方式：</view>
					<view class="everyday-list-item-txt">微信</view>
				</view>
				<view class="everyday-list-pay">
					实付：￥1099
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
.everyday-list {
	// margin: 40rpx 40rpx 0;
	padding: 40rpx 30rpx;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	&-pay{
		margin-top: 30rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}
	&-item:nth-child(1) {
		padding-top: 0;
	}
	&-item {
		display: flex;
		padding: 20rpx 0;
		font-size: $fontSize - 4;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		&-name {
		}
		&-txt {
		}
	}
	&-item1 {
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-name {
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-txt {
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: bold;
			color: #db1f13;
		}
	}
	&-line {
		width: 100%;
		height: 1rpx;
		background: #eeeeee;
	}
	&-pay {
		padding-top: 20rpx;
		text-align: right;
		font-size: $fontSize + 2;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}
}
.everyday-body {
	padding: 0 40rpx;
}
.everyday-name {
	font-size: $fontSize + 5;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666666;
}
.everyday-c {
	padding: 30rpx 0 40rpx;
	padding-left: 6rpx;
	// margin-bottom: 40rpx;

	font-size: $fontSize - 2;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.everyday-title {
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
</style>
