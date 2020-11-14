<template>
	<view class="dhrecord">
		<Head :title="$t('index.record')" @navigateBack="navigateBack"></Head>

		<mescroll-body ref="mescrollRef"  height="100" @init="mescrollInit" :down="downOption" @down="downCallback" 
		:up="upOption" @up="upCallback">
		<Record :record="getData"></Record>
		</mescroll-body>
	</view>
</template>

<script>
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import { getOrderList } from '@/api/index.js';
import dateFormat from '@/util/Date.js';
export default {
	mixins: [MescrollMixin],
	data() {
		return {
			page: 1,
			getData: [],
			downOption: {
				native: true // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
			},
			upOption: {
				textLoading:'',
				textNoMore: '',
				noMoreSize:'3'
			}
		};
	},
	onLoad() {
	this.upOption.textNoMore = this.commonality.loadComplete
	this.upOption.textLoading = this.commonality.textLoading
		// this.upCallback()
		// let data = { token: uni.getStorageSync('token'), page: this.page };
		// getOrderList(data).then(res => {
		// 	console.log(res);
		// 	this.getData = res.data;
		// });
	},
	filters: {
		formatDate(time) {
			let date = new Date(time * 1000);

			return dateFormat.formatDate(date, 'yyyy/MM/dd  hh:mm');
		}
	},
	computed: {
	
		commonality(){
			return this.$t('commonality')
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
			let data = { token: uni.getStorageSync('token'), page: this.page };
			getOrderList(data)
				.then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.data.length);
					curPageData.data.length < 10 ? (this.page = this.page) : (this.page = ++this.page);
					//设置列表数据
					if (this.page == 1) this.getData = []; //如果是第一页需手动制空列表

					this.getData = this.getData.concat(curPageData.data); //追加新数据
				})
				.catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="less" scoped>
.dhrecord {
}
</style>
