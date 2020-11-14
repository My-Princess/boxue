<template>
	<view class="instructor show">
		<Head title="客服"></Head>
		<view class="instructor-show">
			<view class="instructor-show-box">
				<view class="instructor-show-box-ex">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/img/gg.jpg" mode=""></image>
				</view>
				<view class="instructor-show-box-btn">
					保存图片，添加微信
				</view>
				<view class="instructor-show-box-close">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/img/qixiao.png" mode=""></image>
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
		},
		methods: {
		}
	};
</script>

<style lang="less" scoped>
	.show{
		// position: relative;
		width: 100vw;
		height: 100vh;
		background:rgba(0,0,0,.5);
		// opacity:0.5;
		// z-index: 99;
	}
	.instructor{
		&-show{
		// opacity:0.5;
			// 
			&-box{
				position: absolute;
				left: 50%;
				top: 96rpx;
				transform: translateX(-50%);
				
				&-ex{
					width:670rpx;
					height:897rpx;
					background:rgba(255,255,255,1);
					border-radius:10px;
					image{
						width: 100%;
						height: 100%;
					}
				}
				&-btn{
					display: flex;
					justify-content: center;
					align-items: center;
					width:670rpx;
					height:90rpx;
					background:rgba(220,42,31,1);
					border-radius:10px;
					
					font-size:36rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					margin-top: 40rpx;
				}
				&-close{
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					margin-top: 40rpx;
					width:80rpx;
					height:80rpx;
					border:3rpx solid rgba(255,255,255,1);
					border-radius:50%;
					image{
						display: block;
						// display: flex;
						// justify-content: center;
						// align-items: center;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-50%);
						width:34rpx;
						height:35rpx;
						// border:2rpx solid rgba(255,255,255,1);
						border-radius:2px;
					}
				}
			}
		}
	}
</style>
