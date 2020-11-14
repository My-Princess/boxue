<template>
	<view class="myWallet-body">
		<view class="myWallet-body-item">
			<!-- <view class="myWallet-body-item-time">2020年10月01日</view> -->
			<view class="myWallet-body-item-child">
				<view class="myWallet-body-item-child-item" v-for="(item, index) in MoneyData" :key="index">
					<view class="myWallet-body-item-child-item-l">{{ item.remark }}</view>
					<view class="myWallet-body-item-child-item-r" >
						<text :class="item.type == '进账' ? '' : 'expenditureColor'"></text>
						<text :class="item.type == '进账' ? '' : 'expenditure'">￥{{ item.money }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		MoneyData: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.expenditure {
	color: #db1f13 !important;
}
.expenditureColor{
	background: #db1f13 !important;
}
.myWallet-body {
	padding: 0 40rpx;
	&-item:nth-child(1) {
		margin-top: 30rpx;
	}
	&-item {
		margin-top: 40rpx;
		&-time {
			font-size: $fontSize - 4;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
		}
		&-child {
			&-item {
				margin-top: 20rpx;
				border-radius: 10px;
				padding: 30rpx;
				background: #ffffff;
				display: flex;
				justify-content: space-between;
				&-l {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				&-r {
					display: flex;
					align-items: center;
	
					text:nth-child(1) {
						display: block;
						width: 10rpx;
						height: 10rpx;
						background: #5fce00;

						border-radius: 50%;
					}
					text:nth-child(2) {
										color: #5fce00;
						margin-left: 8rpx;
						font-size: $fontSize + 6;
						font-family: PingFang SC;
						font-weight: bold;
					}
				}
			}
		}
	}
}
</style>
