<template>
	<view class="service isSHow">
		<Head :title="$t('commonality.service')" @navigateBack="navigateBack"></Head>
		<!-- <button open-type='contact' session-from=''>客服-联系我们</button> -->
		<view class="service-gongge">
			<!-- 	<view class="service-gongge-item" @click="aiservice">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/aigf.png" mode=""></image>
				<view class="service-gongge-item-nmae">{{ $t('commonality.aiservice') }}</view>
			</view> -->
			<view class="service-gongge-item" @click="manual">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/czsc.png" mode="aspectFill"></image>
				<view class="service-gongge-item-nmae">{{ user.manual }}</view>
			</view>
			<view class="service-gongge-item" @click="commonproble">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/cjwt.png" mode="aspectFill"></image>
				<view class="service-gongge-item-nmae">{{ user.issue }}</view>
			</view>
			<view class="service-gongge-item" @click="feedback">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/yjfg.png" mode="aspectFill"></image>
				<view class="service-gongge-item-nmae">{{ user.opinion }}</view>
			</view>
		</view>
		<mescroll-body ref="mescrollRef" height="100" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
			<view class="service-cencent">
				<view class="service-cencent-item" v-for="(item, index) in getData" :key="index" @click="popupThow(item.qrcode)">
					<view class="service-cencent-item-img"><image :src="item.qrcode" mode="aspectFill"></image></view>
					<view class="service-cencent-item-r">
						<view class="service-cencent-item-r-top">
							<view class="service-cencent-item-r-top-name">{{ item.name }}</view>
						     <view class="service-cencent-item-r-bottom"></view>
						</view>
							<view class="iconfont icon-youjiantou1"></view>
					</view>
				</view>
			</view>
		</mescroll-body>

		<!-- 弹出层  @touchmove.stop.prevent="false"-->
		<view class="service-show" @touchmove.stop.prevent="false" v-if="upShow">
			<view class="popup">
				<image :src="files" mode=""></image>
				<view class="popup-wx">
					<text>微信号：Hjksdf886</text>
					<!-- #ifdef H5 -->
					<text v-clipboard:copy="txt" v-clipboard:success="type => onCopyResult('success')" v-clipboard:error="type => onCopyResult('error')">复制微信号</text>
					<!-- #endif -->
					<!-- #ifndef H5 -->
					<text @click="doCopy('nn')">复制微信号</text>
					<!-- #endif -->
				</view>
			</view>
			<!-- #ifdef H5 -->
			<view class="service-btn" @click="saveImg(files)">保存二维码图片</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="service-btn" @click="saveImgs(files)">保存二维码图片</view>
			<!-- #endif -->
			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/celIcon.png" mode="aspectFill" @click="upShow = false"></image>
		</view>
	</view>
</template>

<script>
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import { customer } from '@/api/index.js';
export default {
	mixins: [MescrollMixin],
	data() {
		return {
			txt: 'fsdafsad',

			upShow: false,
			page: 1,
			files: '',
			getData: [],
			downOption: {
				native: true // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
			},
			upOption: {
				textLoading: '',
				textNoMore: '',
				noMoreSize: '3'
			}
		};
	},
	computed: {
		user() {
			return this.$t('user');
		},
		commonality() {
			return this.$t('commonality');
		}
	},
	onLoad() {
		
		this.upOption.textNoMore = this.commonality.loadComplete;
		this.upOption.textLoading = this.commonality.textLoading;
		// this.getData()
	},
	onShow() {
		if (!uni.getStorageSync('token')) {
			uni.redirectTo({
				url: '/pages/login/login'
			});
		}
	},
	methods: {
		// 主动触发下拉刷新
		triggerDownScroll() {
			this.mescroll.triggerDownScroll();
		},
		/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
		upCallback(page) {
			//联网加载数据
			let data = { page: this.page };
			customer(data)
				.then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.data.list.length);
					curPageData.data.list.length < 10 ? (this.page = this.page) : (this.page = ++this.page);
					//设置列表数据
					if (this.page == 1) this.getData = []; //如果是第一页需手动制空列表

					this.getData = this.getData.concat(curPageData.data.list); //追加新数据
				})
				.catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				});
		},
		// H5复制
		onCopyResult(type) {
			if (type === 'success') {
				console.log('复制成功');
			} else {
				console.log('复制失败');
			}
		},
		// 小程序复制
		doCopy(type) {
			uni.setClipboardData({
				data: type,
				success: function() {
					console.log('复制成功');
				}
			});
		},
		// H5保存相册
		saveImg(url) {
			console.log(url);
			var oA = document.createElement('a');
			oA.download = '';
			oA.href = url;
			document.body.appendChild(oA);
			oA.click();
			oA.remove();
		},
		saveImgs(url) {
			const that = this;
			uni.downloadFile({
				url,
				success: res => {
					if (res.statusCode === 200) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								// that.tools.toast('保存成功');
								uni.showToast({
									title: '保存成功',
									icon:'none'
								});
								console.log('保存成功')
								that.upShow = false
							},
							fail: function() {
							      uni.showToast({
									title: '保存成功',
									icon:'none'
								});
								// this.tools.toast('保存失败，请稍后重试');
								console.log('保存失败，请稍后重试')
							}
						});
					} else {
						uni.showToast({
							title: '保存成功',
							icon:'none'
						});
						console.log('下载失败')
						// that.tools.toast('下载失败');
					}
				}
			});
		},

		aiservice() {
			uni.navigateTo({
				url: './aiservice'
			});
		},
		popupThow(file) {
			this.upShow = true;
			this.files = file;
		},
		manual() {
			uni.navigateTo({
				url: './manual'
			});
		},
		commonproble() {
			uni.navigateTo({
				url: './commonproble'
			});
		},
		navigateBack() {
			uni.navigateBack();
		},
		feedback() {
			uni.navigateTo({
				url: './feedback'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.isSHow {
	overflow: hidden;
}
.service-show {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 999;
	image {
		display: block;
		width: 82rpx;
		height: 82rpx;
		margin: 40rpx auto 0;
	}
	.popup {
		box-sizing: border-box;
		width: 88%;
		height: 920rpx;
		background: #fff;
		text-align: center;
		// padding: 70px 10px 20px 10px;
		border-radius: 4px;
		image {
			display: block;
			width: 100%;
			height: 780rpx;
		}
		&-wx {
			text-align: center;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #171717;

			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 40rpx;
			padding-top: 40rpx;
		}
	}
	// .popup image /deep/ div {
	// 	width: 0;
	// 	height: 0;
	// }
	// .popup image /deep/ img {
	// 	width: 100%;
	// 	height: 780rpx;
	// 	object-fit: cover;
	// 	opacity: 1;
	// }
	.service-img {
		width: 100%;
		margin: auto;
		// height: 100%;
		// image{
		// 	width: 90%;
		// 	height: 100%;
		// }
	}
	.service-btn {
		width: 80%;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 40rpx;
		text-align: center;
		background: red;
		font-size: 28rpx;
		color: #ffffff;
	}
}
.service {
	&-gongge {
		display: flex;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid rgba(238, 238, 238, 1);
		&-item {
			width: 33%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 82rpx;
				height: 82rpx;
			}
			&-nmae {
				padding-top: 15rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
	&-cencent {
		padding: 0 34rpx;
		&-item {
			padding-top: 26rpx;
			padding-bottom: 10rpx;
			display: flex;
		
			&-img {
				width: 94rpx;
				height: 100rpx;
				// background:rgba(220,42,31,1);
				// opacity:0.3;

				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 80rpx;
					height: 80rpx;
					// opacity: 1;
					border-radius: 10px;
				}
			}

			&-r {
				width: 100%;
				padding-top: 12rpx;
				padding-bottom: 20rpx;
				margin-left: 22rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&-top {
					width: 100%;
					display: flex;
						flex-direction: column;
					// justify-content: space-between;
					// align-items: center;
					padding-bottom: 8rpx;
					&-name {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: rgba(51, 51, 51, 1);
					}
					.icon-youjiantou1 {
						display: flex;
						align-items: center;
						// text-align: right;
					}
					image {
						display: block;
						width: 17rpx;
						height: 32rpx;
					}
				}
				&-bottom {
					height: 22rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
}
</style>
