<template>
	<view class="SelectCountry">
		<view class="SelectCountry-concent">
			<view class="SelectCountry-concent-search"><Search placeholder="请输入您需要进行汇率转换的国家名称" @change="change"></Search></view>

			<view class="SelectCountry-concent-c">
				<view class="" v-if="listData.length">
					<view
						class="SelectCountry-concent-c-item"
						v-for="(item, i) in listData"
						:key="i"
						@click="SelectCountryBtn(item)"
						v-if="
							type
								? queenIndex
									? frontState.code != item.code
									: queenState.code != item.code
								: frontIndex
								? frontState.code != item.code
								: queenState.code != item.code
						"
					>
						<view class="SelectCountry-concent-c-item-l">{{ item.currency_name_zh || item.name_zh || item.name }}</view>
						<!-- <view class="SelectCountry-concent-c-item-r">+{{ item.mobile_prefix }}</view> -->
					</view>
				</view>
				<view class="blank" v-else>
				      没有搜索结果
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Search from '@/components/searchs.vue';
// import $request from '@/util/request.js';
import JSonList from '@/util/exchange.json';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		Search
	},
	data() {
		return {
			List: [],
			listData: [], //联想内容数组
			type: 0
		};
	},
	onLoad(options) {
		this.type = parseInt(options.type);
		this.exchangeList();
	},
	computed: {
		...mapState('user', ['frontState', 'queenState', 'frontIndex', 'queenIndex'])
		// isShow(){
		// 	if(frontIndex)
		// }
	},
	methods: {
		...mapMutations('user', ['setFrontState', 'setQueenState', 'setFrontIndex', 'setQueenIndex']),
		// 获取每个国家的汇率列表(方法1)
		// exchangeList() {
		// 	$request
		// 		.HTTP({
		// 			url: '/myhik/list?key=e84fa55113a2d6b3a0880fdc1b959ee6'
		// 		})
		// 		.then(res => {
		// 			console.log('列表数据', res);
		// 			this.List = res.result.list
		// 		})
		// 		.catch(() => {});
		// },

		// 获取每个国家的汇率列表(方法2)
		exchangeList() {
			this.List = JSonList.rates;
		},
		// 搜索
		change(e) {
			console.log('实时变化', e);
			// var value = e;
			this.listData = [];
			if (e != '') {
				this.List.forEach(item => {
					// console.log(item.currency_name_zh);
					if (item.currency_name_zh != null) {
						console.log(item.currency_name_zh.indexOf(e));
						if (item.currency_name_zh.indexOf(e) != -1) {
							console.log(item);
							this.listData.push(item);
							// let listData = this.listData
							//  listData.push(e)
							//  this.listData = listData
							console.log(this.listData);
						}
					}
				});
			} else {
				console.log('进');
				this.listData = this.List;
			}
		},

		// 点击获取数据
		SelectCountryBtn(e) {
			console.log(e);
			// this.type ? this.setQueenState(e) : this.setFrontState(e)
			if (this.type == 0) {
				this.frontIndex ? this.setQueenState(e) : this.setFrontState(e);
				// this.setFrontState(e);

				// this.frontIndex ? this.setFrontIndex(0) : this.setFrontIndex(1);
			} else {
				this.queenIndex ? this.setQueenState(e) : this.setFrontState(e);
				// this.setQueenState(e);
				// this.queenIndex ? this.setQueenIndex(0) : this.setQueenIndex(1);
			}
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
	.blank{
	    text-align: center;
		padding-top: 80rpx;
		font-size: 30rpx;
	}
.SelectCountry {
	&-concent {
		padding: 20rpx 40rpx 0;
		.search-top {
			/deep/.search-top-left {
				width: 100%;
			}

			padding-top: 0;
		}
		&-c {
			&-item {
				// padding: 22rpx 0;
				padding-top: 22rpx;
				padding-bottom: 22rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #eeeeeeff;
				&-l {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
				&-r {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-item:nth-child(1) {
				padding-top: 50rpx;
			}
			&-item:last-child {
				border-bottom: none;
			}
		}
	}
}
</style>
