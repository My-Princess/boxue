<template>
	<view class="complete">
		<view class="complete-box">
			<Search :value="searchName" @searchBtn="getsearchval"></Search>
			<view class="complete-tab">
				<!-- <view class="complete-tab-title">
					<view class="complete-tab-title-bx" @click="Training" :class="{ colorbold }">{{ search.train }}</view>
					<view class="complete-tab-title-sp" @click="video" :class="{ colors }">{{ search.video }}</view>
				</view>
				<view class="complete-tab-line" :style="{ transform: lineStyle.transform, transitionDuration: lineStyle.transitionDuration }"></view> -->
				<u-tabs
				:list="tabsList" 
				:bar-style="{background: '#DB1F13'}"
				:is-scroll="true" 
				:current="tab" 
				active-color="#333" 
				inactive-color="#999"
				@change="activeTabs"></u-tabs>
			</view>
		</view>

		<view class="complete-concent">
			<view class="complete-tab-box">
				<view class="complete-tab-box-bx"  v-show="tab == 0">
					<view class="lists" id="lists" v-if="classData.length" >
						
						<view class="complete-box-item" v-for="(item, index) in classData" :key="index" @click="videoSkip(item.id)">
							<Aboutlist :MineData="item" >
								<template v-slot:img>
									<image :src="item.image" mode="widthFix" style="width: 325rpx;height: 193rpx;"> </image>
								</template>
								<view class="complete-tab-box-bx-item-right-bottom">
									<text class="complete-tab-box-bx-item-right-bottom-l">{{ search.section }}: {{ item.count }}节</text>
									<text class="complete-tab-box-bx-item-right-bottom-r">￥ {{ item.money }}</text>
								</view>
							</Aboutlist>
						</view>
					</view>
					<view class="blank" v-else>{{$t('commonality.searchEmply')}}</view>
				</view>

				<view class="complete-tab-box-sp" v-show="tab == 1"><videoList :videoList="collection"></videoList></view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import Search from '@/components/searchs.vue';
import { indexSearch } from '@/api/index.js';
export default {
	components: {
		Search
	},
	data() {
		return {
			
			colorbold: true,
			colors: false,
			tab: 0,
			tabsList: [],
			lineStyle: {},
			currentIndex: 0,
			classData: [],
			collection: []
		};
	},
	onLoad() {
		let tabList = [{ name: this.search.train }, { name: this.search.video }]
		this.tabsList = tabList
		this.getData();

	
	},
	onShow() {
	
	},
	computed: {
		...mapState('index', ['searchName']),
		search() {
			return this.$t('index');
		}
	},
	methods: {
		...mapMutations('index',['setSearchName']),
		async getData() {
			
			let data = { search: this.searchName };
			let res = await indexSearch(data);
			console.log('搜索结果', res);
			this.classData = res.data.class;
			this.collection = res.data.collection;
		},
		// 子传父数据input
		getsearchval(data) {
			// this.searchval = data;
			this.setSearchName(data)
			this.getData()
		},
	

		// 切换
		activeTabs(e) {
			console.log(e);
			this.tab = e;
		},
		videoSkip(id) {
			uni.navigateTo({
				url: `/pages/study/videoviewing?id=${id}`
			});
		}
	}
};
</script>

<style lang="less" scoped>
.blank{
	font-size: 28rpx;
	text-align: center;
	padding-top: 100rpx;
}
.complete-box-item {
	padding: 0 40rpx;
}
.complete-tab-line {
	width: 74rpx;
	// width: 125rpx;
	display: block;
	position: absolute;
	height: 4rpx;
	margin-top: 9rpx;
	background: rgba(219, 31, 19, 1);
	border-radius: 2px;
}
.complete-box {
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	background: #fff;
}
.complete-tab {
	height: 130rpx;
	padding: 30rpx 0 0rpx 41rpx;
}
.complete-tab-title {
	padding: 56rpx 0 0rpx 41rpx;
	display: flex;

	&-bx {
		font-size: 30rpx;
		font-family: PingFang SC;
		color: rgba(102, 102, 102, 1);

		margin-right: 53rpx;
	}

	&-sp {
		padding: 0 40rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}
}
.complete-tab-box-bx-item-right-bottom {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding-top: 26rpx;
	&-l {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	&-r {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(219, 31, 19, 1);
	}
}
.complete {
	.hidden {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	&-concent {
		padding-top: 260rpx;

		.colorbold {
			color: rgba(51, 51, 51, 1);
			font-weight: bold;
		}

		.colors {
			color: rgba(51, 51, 51, 1);
			font-weight: bold;
		}

		&-box {
			padding: 56rpx 40rpx 0 40rpx;

			&-bx {
			}

			&-sp {
			}
		}
	}
}
</style>
