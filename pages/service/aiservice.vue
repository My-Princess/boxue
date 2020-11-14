<template>
	<view class="aiservice">
		<Head title="流利外语AI客服为您服务">
			<template v-slot:right>
				<image class="aiservice-img" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gf.png" mode=""></image>
			</template>
		</Head>
		<view class="aiservice-concent">
			<view class="aiservice-concent-l"><text>您好，很高兴为您服务，请问有什么 可以帮助您的？</text></view>
		</view>
		<view class="aiservice-tip">
			很抱歉，暂无人工客服在线，您可以向我们
			<text>留言</text>
		</view>
		<view class="aiservice-footer">
			<view class="aiservice-footer-box">
				<view class="aiservice-footer-box-l"></view>
				<view class="aiservice-footer-box-c"><input type="text" value="" /></view>
				<view class="aiservice-footer-box-r"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/%2B.png" mode=""></image></view>
			</view>
			<view class="aiservice-footer-line"></view>
			<view class="aiservice-footer-info">
				<view class="aiservice-footer-info-item">
					<view class="aiservice-footer-info-item-img"></view>
					<view class="aiservice-footer-info-item-name">留言</view>
				</view>
				<view class="aiservice-footer-info-item">
					<view class="aiservice-footer-info-item-img"></view>
					<view class="aiservice-footer-info-item-name">服务评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import Head from '../../components/navigation.vue';
export default {
	// components: { Head },
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped>
.aiservice {
	.aiservice-img {
		width: 42rpx;
		height: 37rpx;
	}
	&-concent {
		padding-left: 40rpx;
		&-l {
			padding: 38rpx 42rpx;
			width: 550rpx;
			// height: 146rpx;
			background: rgba(238, 238, 238, 1);
			border-radius: 10px;
			text {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
			}
		}
	}
	&-tip {
		margin-top: 54px;
		display: flex;
		justify-content: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		text {
			color: #dc2a1f;
			margin-left: 5px;
		}
	}
	&-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		// background: red;
		&-box {
			width: 100%;
			height: 97rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 2px 5px 0 #333;

			display: flex;
			justify-content: space-around;
			align-items: center;

			&-l {
				width: 42rpx;
				height: 42rpx;
				background: rgba(238, 238, 238, 1);
			}
			&-c {
				width: 520rpx;
				height: 70rpx;
				background: rgba(238, 238, 238, 1);
				border-radius: 35px;
				input {
					padding-left: 30rpx;
					width: 520rpx;
					height: 70rpx;

					font-size: 28rpx;
					font-family: Adobe Heiti Std;
					font-weight: normal;
					color: rgba(102, 102, 102, 1);
				}
			}
			&-r {
				image {
					width: 56rpx;
					height: 56rpx;
					border-radius: 28px;
					background: rgba(153, 153, 153, 1);
				}
				// width: 56rpx;
				// height: 56rpx;
				// background: rgba(153, 153, 153, 1);
				// border-radius: 28px;
				// &-jia {
				// 	display: flex;
				// 	justify-content: center;
				// 	align-items: center;
				// 	// width:26rpx;
				// 	// height:26rpx;
				// 	// background:rgba(255,255,255,1);
				// 	// border-radius:2px;
				// }
			}
		}
	
	    &-line{
			width: 100%;
			height:1px;
			background:rgba(238,238,238,1);
			border-radius:1px;
		}
		
		&-info{
			display: flex;
			flex-wrap: wrap;
			
			// justify-content: ;
			&-item{
				display: flex;
				flex-direction: column;
				
				&-im g{
					width:60rpx;
					height:60rpx;
					background:rgba(238,238,238,1);
				}
				&-name{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
				}
				
			}
		}
	
	}
}
</style>
