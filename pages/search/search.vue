<template>
	<view class="search">
		<Search @searchBtn="searchBtn" :placeholder="search.placeholder"><text @click="cancelBtn">{{search.cancel}}</text></Search>
		<view class="search-tip" v-if="istip">正在为您搜索中...</view>
		<!-- 搜索历史 -->
		<view class="search-record">
			<view class="search-record-title">
				<view class="search-record-title-name">{{search.history}}</view>
				<view class="search-record-title-del" @click="delRecord"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/del.png" mode=""></image></view>
			</view>
			<view class="search-record-list">
				<view class="search-record-list-box" :class="{ shenglve }" v-for="(item, i) in getcordList" :key="i">
					<view class="search-record-list-item" @click="tipRecord(item)">{{ item }}</view>
				</view>
			</view>
		</view>

		<!-- 热门课程 -->
		<view class="search-culum"><culum :basicsList="basicsList" ></culum></view>
	</view>
</template>

<script>
import { hotClass, indexSearch } from '@/api/index.js';
import { mapState, mapMutations, mapGetters } from 'vuex';
import culum from '@/components/colum.vue';
import Search from '@/components/searchs.vue';
export default {
	components: {
		culum,
		Search
	},

	data() {
		return {
			searchval: '',

			shenglve: false,
			istip: false,
			// 热门列表
			basicsList: []
		};
	},
	onLoad() {
		this.hotSearch();
	},
	computed: {
		...mapGetters('index', ['getcordList']),
		search() {
			return this.$t('index');
		}
	},
	methods: {
		...mapMutations('index', ['setRecordList', 'setSearchName', 'delRecordList']),
		// 热门搜索
		async hotSearch() {
			let res = await hotClass();
			let basicsItem = [];
			res.data.forEach(item => {
				item.money = parseFloat(item.money + '');
				basicsItem.push(item);
			});
			this.basicsList = basicsItem;
		},

		// 点击搜索
		async searchBtn(e, i) {
			this.setSearchName(e);
			uni.navigateTo({
				url: './searchcomplete'
			});
			console.log(typeof i, i);
			i ? '' : this.setRecordList(e);
		},
		// 点击历史记录
		tipRecord(e) {
			this.searchBtn(e, 1);
		},
		// 删除历史记录
		delRecord() {
			this.delRecordList();
		},
		// 退出
		cancelBtn(){
			uni.switchTab({
				url:'/pages/index/index'
			})
		}
	}
};
</script>

<style lang="less">
.search {
	&-top {
		display: flex;
		justify-content: center;
		padding-top: 53rpx;

		&-left {
			display: flex;
			align-items: center;
			width: 595rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(238, 238, 238, 1);
			border-radius: 30rpx;

			image {
				display: block;
				width: 44rpx;
				height: 44rpx;
				margin-left: 30rpx;
				margin-right: 16rpx;

				/deep/img {
					width: 44rpx;
					height: 44rpx;
				}
			}

			input {
				display: block;
				width: 100%;
				height: 100%;

				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}

		&-qx {
			line-height: 60rpx;
			margin-left: 20rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
		}
	}

	&-tip {
		display: flex;
		justify-content: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		padding-top: 53rpx;
		padding-bottom: 5rpx;
	}

	&-record {
		margin-top: 48rpx;

		&-title {
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;

			&-name {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			&-del {
				width: 44rpx;
				height: 42rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		&-list {
			display: flex;
			flex-wrap: wrap;
			padding-top: 12rpx;
			padding-left: 40rpx;
			padding-right: 14rpx;

			&-box {
				padding: 18rpx 41rpx;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(125, 125, 125, 1);
				border-radius: 30rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-right: 26rpx;
				margin-top: 14rpx;
				margin-bottom: 14rpx;
			}

			// .shenglve{
			//     white-space:nowrap;
			//      text-overflow:ellipsis;
			//      -o-text-overflow:ellipsis;
			//      overflow:hidden;
			// }
		}
	}

	&-culum {
		padding-top: 42rpx;
	}
}
</style>
