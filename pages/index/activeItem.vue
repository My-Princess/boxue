<template>
	<view>
		<mescroll-uni :ref="'mescrollRef' + i" @init="mescrollInit" height="100%" top="40" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
			<!-- 数据列表 -->
			<view class="community-concent1">
				<view class="community-concent1-item" v-for="(item, i) in articleLists" :key="i">
					<ArticleItem :articleLists="item" @click="articleDetail(item.id)">
						<template v-slot:img>
							<view class="community-concent1-item-img" v-if="item.cover_image">
								<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.cover_image}`" mode=""></image>
							</view>
						</template>
					</ArticleItem>
				</view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
import { tieType, tieMessage, tieList, getNewsType, newsList, focusCreate, focusDel } from '@/api/community.js';
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import MescrollMoreItemMixin from '@/components/mescroll-uni/mixins/mescroll-more-item.js';
export default {
	mixins: [MescrollMixin, MescrollMoreItemMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)
	data() {
		return {
			styles: {
				padding: '16rpx 0 30rpx 120rpx',
				'border-bottom': '1rpx solid #eeeeee'
			},
			downOption: {
				auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
			},
			upOption: {
				auto: false, // 不自动加载
				// page: {
				// 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
				// 	size: 10 // 每页数据的数量
				// },
				noMoreSize: 1, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				empty: {
					tip: '暂时还没有发布文章，请稍后刷新试试' // 提示
				}
			},
			articleLists: [] //列表数据
		};
	},
	props: {
		i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
		index: {
			// 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			type: Number,
			default() {
				return 0;
			}
		},
		tabs: {
			// 为了请求数据,演示用,可根据自己的项目判断是否要传
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		// 跳转文章详情
		articleDetail(e) {
			uni.navigateTo({
				url: `../community/articleDetail?tieId=${e}&type=2`
			});
		},
		/*下拉刷新的回调 */
		downCallback() {
			// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
			// loadSwiper();
			// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			this.mescroll.resetUpScroll();
		},
		/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
		upCallback(page) {
			let typeId = this.tabs[this.i].id;

			let data = { page: page.num, size: page.size, typeId: typeId, uid: uni.getStorageSync('user').uid || 0 };
			newsList(data)
				.then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.data.list.length);
					//设置列表数据
					if (page.num == 1) this.articleLists = []; //如果是第一页需手动制空列表
					this.articleLists = this.articleLists.concat(curPageData.data.list); //追加新数据
				})
				.catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				});
		},
		// 点击关注
		async attentionBtn(e) {
			let data = { token: uni.getStorageSync('token'), focusId: e.uid };
			if (e.isFocus == 0) {
				this.backColor = '';

				e.isFocus = 1;
				let res = await focusCreate(data);
				console.log(res);
			} else if (e.isFocus == 1) {
				e.isFocus = 0;
				this.backColor = 'btnactive';
				let res = await focusDel(data);
				console.log(res);
			}
		},
		// 跳转详情页
		txtDetail(e) {
			console.log(e);
			uni.navigateTo({
				url: `../community/communityDetail?tieId=${e}`
			});
		}
	}
};
</script>

<style lang="scss">
.community-concent {
	&-item {
		padding: 30rpx 40rpx;
	}
}
.community-concent1 {
	padding: 0 40rpx;
	&-item {
		// padding-top: 40rpx;
		// padding-bottom: 20rpx;
		height: 240rpx !important;
		border-bottom: 1rpx solid #ededed;
		&-img {
			position: relative;
			width: 188rpx;
			height: 160rpx;
			margin-top: 27rpx;
			margin-left: 20rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
			/deep/div {
				width: 0;
				height: 0;
			}
			/deep/img {
				max-height: 100%;
				max-width: 100%;
				width: auto !important;
				height: auto !important;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				opacity: 1;
			}
		}
		&-video {
			width: 188rpx;
		}
		height: 160rpx;
		margin-top: 27rpx;
		margin-left: 20rpx;
	}
}
.community-c-isFocus {
	width: 130rpx;
	height: 46rpx;
	background: #ff4a3e;
	display: flex;
	justify-content: center;
	align-items: center;

	color: #ffeeee;
	font-size: $fontSize - 6;
	border-radius: 10px;
}
.btnactive {
	background: #ffffff !important;
	border: 1rpx solid #adadad;
	color: #adadad !important;
}
</style>
