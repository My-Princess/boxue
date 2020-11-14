<template>
	<view class="integral">
		<Head :title="index.store" @navigateBack="navigateBack"></Head>

		<view class="integral-fixed">
			<view class="integral-user">
				<image :src="getData.silidesImage" mode=""></image>
				<view class="integral-user-item">
					<view class="integral-user-item-number">
						{{ index.myintegral }}:
						<text>{{ getData.integral }}</text>
					</view>
					<view class="integral-user-item-yh" @click="dhrecord">{{ index.record }}</view>
				</view>
			</view>
			<view class="integral-line"></view>
		</view>

		<view class="integral-concent">
			<!-- 其他商品 -->
			<view class="integral-concent-i" v-for="(item, i) in cloumData" :key="item.id">
				<integralList @integraldown="integraldown" v-if="item.goods.length" :listData="item"></integralList>
			</view>
			<!-- 虚拟 -->
			<view class="" v-for="(item, i) in listData" :key="i">
				<integralAbout @pointsdetailsbox="pointsdetailsbox" v-if="item.goods.length" :cloumData="item"></integralAbout>
			</view>
		</view>
	</view>
</template>

<script>
import { getGoods } from '../../api/index.js';
import integralList from '../../components/integrallist.vue';
import integralAbout from '../../components/integralabout.vue';

export default {
	components: { integralList, integralAbout },
	data() {
		return {
			getData: {},
			listData: [],
			cloumData: [],
			page: 0,
			cate_id: 0
		};
	},
	watch: {},

	onLoad() {
		this.getGoodsdata(this.page, this.cate_id);
	},
	computed: {
		index() {
			return this.$t('index');
		}
	},

	methods: {
		nvonReach(e, i) {
			console.log(e, i);
			// this.getGoodsdata(e,i)
		},
		getGoodsdata(e, i) {
			let data = { token: uni.getStorageSync('token'), page: e, cate_id: i };
			getGoods(data).then(res => {
				console.log('积分首页', res);
				this.getData = res.data;
				// this.listData = res.data.data[0]
				// this.cloumData = res.data.data.slice(1)
				var nvData = [];
				var swData = [];
				res.data.data.filter(item => {
					if (item.goods_type == 1) {
						swData.push(item);
					}
					if (item.goods_type == 2) {
						nvData.push(item);
					}
				});
				this.cloumData = swData;
				this.listData = nvData;
				console.log(this.listData);
			});
		},
		// 虚拟商品
		pointsdetailsbox(e, i) {
			let id = e.id;
			uni.navigateTo({
				url: `./virtualdetails?id=${id}`
			});
		},
		// 其他商品
		integraldown(e, i) {
			let id = e.id;
			uni.navigateTo({
				url: `./pointsdetails?id=${id}`
			});
		},
		// 兑换记录
		dhrecord() {
			uni.navigateTo({
				url: './dhrecord'
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="less" scoped>
// .integral-top{
// 	width: 100%;
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// }
.integral {
	&-fixed {
		// position: fixed;
		// left: 0;
		// top: 0;
		// z-index: 999;
		//  background: #FFFFFF;
	}

	&-user {
		// position: fixed;
		// width: 100%;
		// left: 0;
		padding: 0 40rpx;
		// z-index: 99;

		image {
			display: flex;
			justify-content: center;
			width: 670rpx;
			height: 288rpx;
			background: rgba(236, 105, 65, 1);
			border-radius: 10px;
		}
		&-item {
			display: flex;
			justify-content: space-between;
			padding: 30rpx 0;
			&-number {
				display: flex;
				align-items: center;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
				text {
					display: flex;
					align-items: flex-end;
					margin-left: 10rpx;
					font-size: 36rpx;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-yh {
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(220, 42, 31, 1);
			}
		}
	}

	&-line {
		width: 100%;
		height: 6rpx;
		background: rgba(238, 238, 238, 1);
	}
	&-concent {
		// margin-top: 516rpx;
		padding: 0 40rpx;
	}
}
</style>
