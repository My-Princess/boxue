<template>
	<view class="imgbox">
		<view class="imgbox-c" style="height: calc(100vh - 204rpx); ">
			<!-- :style="i == current ? `height: ${swiperHeight}px;` : ''" -->
			<!-- style="height: calc(100vh - 204rpx)" -->
			<!-- <swiper class="imgbox-c-swiper" :indicator-dots="false" :autoplay="false" @change="change" :current="current" style="width: 100%;"> -->
				<!-- <swiper-item v-for="(v, i) in list" :key="i"> -->
					<!-- <view> -->
						<!-- <image :class="`swiperItem${current}`" mode="widthfix" :src="v.img" style="width:100%" ></image> -->
						<!-- </view> -->
				<!-- </swiper-item> -->
			<!-- </swiper> -->
		</view>
		<view class="imgbox-footer">
			<view class="imgbox-footer-c">文章内容文章内容文章内容文章内容文章内容文章内 容文章内容文章内容文章内容文章内容文章内容文...</view>
			<view class="imgbox-footer-f">
				<view class="imgbox-footer-f-l">
					<image class="imgbox-footer-f-l-dz" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png" mode=""></image>
					<image class="imgbox-footer-f-l-pl" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png" mode=""></image>
				</view>
				<view class="imgbox-footer-f-r">
					<view class="imgbox-footer-f-r-z">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png" mode=""></image>
						<text>999+</text>
					</view>
					<view class="imgbox-footer-f-r-p">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png" mode=""></image>
						<text>999+</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			swiperHeight: 0,
			list: [
				{ img: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg' },
				{ img: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/images/2_04.gif' },
				{ img: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/qrcode@2x.png' }
				//
			]
		};
	},
	created() {
		uni.getImageInfo({
			src: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/img/2020032818414938081.jpg',
			success: function(image) {
				console.log(image.width);
				console.log(image.height);
			}
		});

		// this.getElementHeight('swiperItem0');
	},
	methods: {
		getElementHeight(element) {
			console.log(element);
			var that = this;
			// uni.getSystemInfo({
			// 	success: function(res) {
			// 		// res - 各种参数
			// 		console.log(res.windowWidth); // 屏幕的宽度

			// 		let info = uni.createSelectorQuery().select(element);
			// 		info.boundingClientRect(function(data) {
			// 			//data - 各种参数
			// 			that.swiperHeight = data.height;
			// 		}).exec();
			// 	}
			// });
			setTimeout(() => {
				let query = uni.createSelectorQuery().in(this);
				console.log(query);
				query.select(`.${element}`).boundingClientRect();
				query.exec(res => {
					console.log(res);
					if (!res) {
						//如果没获取到，再调一次
						this.getElementHeight();
					} else {
						this.swiperHeight = res[0].height;
					}
				});
			}, 20);
		},

		change(e) {
			console.log('change', e);
			let current = e.detail.current;
			this.current = current;
			// this.getElementHeight(`swiperItem${current}`);
		},

	}
};
</script>

<style lang="scss">
.imgbox {
	// position: relative;
	&-c {
		width: 100%;
		// margin: 0 0upx;
		// background: red;

		&-swiper {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		// line-height: calc(100vh - 204rpx);
		// /deep/.swiper-item{
		// 	width: 100%;
		// 	// height: 600rpx;

		// 	image{
		// 		width: 100%;
		// 		height: 100%;
		// 	}
		// }
	}
	&-footer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		&-c {
			padding: 20rpx 40rpx;
			width: 100%;
			// height:106rpx;
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			background: #1a1a1a;
		}
		&-f {
			background: #333333;
			width: 100%;
			height: 98rpx;
			padding: 0 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-l {
				display: flex;
				&-dz {
					margin-right: 50rpx;
					display: block;
					width: 44rpx;
					height: 40rpx;
				}
				&-pl {
					display: block;
					width: 44rpx;
					height: 44rpx;
				}
			}
			&-r {
				display: flex;
				align-items: center;
				&-z {
					margin-right: 50rpx;
					display: flex;
					align-items: center;
					image {
						display: block;
						width: 42rpx;
						height: 37rpx;
					}
					text {
						margin-left: 6rpx;
						font-size: $fontSize - 2;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
					}
				}
				&-p {
					display: flex;
					align-items: center;
					image {
						display: block;
						width: 42rpx;
						height: 41rpx;
					}
					text {
						margin-left: 6rpx;
						font-size: $fontSize - 2;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
		}
	}
}
</style>
