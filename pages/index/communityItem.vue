<template>
	<view>
		<mescroll-uni :ref="'mescrollRef' + i" @init="mescrollInit" height="100%" top="40" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
			<!-- 数据列表 -->
			<view class="community-concent">
				<view class="community-concent-item" v-for="(v, i) in tieBoxData" :key="i">
					<communityUser :tieHead="v">
						<template v-slot:right>
							<view class="community-c-isFocus" v-if="v.isFocus != 2" :class="v.isFocus == 1 ? 'btnactive' : ''" @click="attentionBtn(v)">{{ v.isFocus ? '已关注' : '关注' }}</view>
						</template>
						<communityUser-Item :tieConcent="v" @txtDetail="txtDetail" :style="styles">
							<template v-slot:img>
								<view v-if="v.files.length">
									<view class="community-concent-item-img" v-if="v.files[0].type == 1"><image :src="v.files[0].file" mode=""></image></view>
									<view class="community-concent-item-video" v-if="v.files[0].type == 2"><video :src="v.files[0].file" controls></video></view>
								</view>
							</template>
						</communityUser-Item>
					</communityUser>
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
					tip: '还没有人在该板块发布过帖子哦' // 提示
				}
			},
			tieBoxData: [] //列表数据
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
			let data = {token:uni.getStorageSync('token'), page: page.num, size: page.size, typeId: typeId, uid: 0};
			tieList(data)
				.then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.data.list.length);
					//设置列表数据
					if (page.num == 1) this.tieBoxData = []; //如果是第一页需手动制空列表
					this.tieBoxData = this.tieBoxData.concat(curPageData.data.list); //追加新数据
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
				url: `/pages/community/communityDetail?tieId=${e}`
			});
		}
	}
};
</script>

<style lang="scss">
.community-concent {
	&-item {
		padding: 30rpx 40rpx;
		&-img{
			   position: relative;
			    width: 99%;
			    height: 300rpx;
			    margin-top: 15px;
			    margin-bottom: 10px;
				/deep/div{
					width: 0;
					height: 0;
				}
				/deep/img{
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
