<template>
	<view class="SelectCountry">
		<Head :title="translate.selectlanguage" @navigateBack="navigateBack"></Head>
		<view class="SelectCountry-concent">
			<view class="SelectCountry-concent-search"><Search :placeholder="translate.selectlanguagetxt" @change="change"></Search></view>

			<view class="SelectCountry-concent-c">
				<view class="" v-if="listData.length">
					<view class="SelectCountry-concent-c-item" v-for="(item, i) in listData" :key="i" @click="SelectCountryBtn(item)">
						<view class="SelectCountry-concent-c-item-l">{{ item.name_zh }}</view>
					</view>
				</view>
				<!-- 没有搜索结果 -->
				<view class="blank" v-else>{{$t('login.blankCode')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
import Search from '@/components/searchs.vue';
// import $request from '@/util/request.js';
import JSonList from '@/util/language.json';
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
		...mapState('user', ['fronti', 'queeni', 'frontLanguage', 'queenLanguage']),
		translate(){
			return this.$t('translate')
		}
		
	},
	methods: {
		...mapMutations('user', ['getfrontLanguage', 'getqueenLanguage','setfronti','setqueeni']),
	

	
		exchangeList() {
			this.List = JSonList;
		},
		// 搜索
		change(e) {
			console.log('实时变化', e);
			// var value = e;
			this.listData = [];
			if (e != '') {
				this.List.forEach(item => {
					if (item.name_zh.indexOf(e) != -1) {
						console.log(item);
						this.listData.push(item);

						console.log(this.listData);
					}
				});
			} else {
				this.listData = this.List;
			}
		},

		// 点击获取数据
		SelectCountryBtn(e) {
			console.log(e);

			if (this.type == 0) {
				this.fronti ? this.getqueenLanguage(e) : this.getfrontLanguage(e);

			} else {
				this.queeni ? this.getqueenLanguage(e) : this.getfrontLanguage(e);

			}
			uni.navigateBack();
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss" scoped>
.blank {
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
