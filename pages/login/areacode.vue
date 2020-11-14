<template>
	<view class="areacode">
		<Head :title="login.code" @navigateBack='navigateBack'></Head>
		<view class="areacode-concent">
			<Search :placeholder="login.areacodeTip" @change="change"></Search>
			<view class="areacode-concent-c">
				<view class="" v-if="listData.length">
					<view class="areacode-concent-c-item" v-for="(item, i) in listData" :key="i" @click="areacodeBtn(item)">
						<view class="areacode-concent-c-item-l">{{ item.country }}</view>
						<view class="areacode-concent-c-item-r">+{{ item.mobile_prefix }}</view>
					</view>
				</view>
				<view class="blank" v-else>{{login.blankCode}}</view>
			</view>
		</view>
	</view>
</template>

<script>
import Search from '@/components/searchs.vue';
import { getAreacode } from '@/api/index.js';
export default {
	components: {
		Search
	},
	data() {
		return {
			data: [],
			listData: []
		};
	},
	onLoad() {
		
	},
	onShow() {
		this.getData()
	},
	computed:{
		login(){
			return this.$t('login')
		}
	},
	methods: {
		
		async getData(){
			let res = await getAreacode()
				console.log('区号', res);
				this.data = res.data;
				// let data = res.data[0].concat(res.data[1]);
				console.log('处理后', this.data);
				this.listData = res.data
		},
		areacodeBtn(item) {
			uni.setStorage({
				key: 'areacodeData', //key的名称是 url
				data: item, //data中存放的是我的url地址
				success: function() {
					console.log('存储成功');
				}
			});
			uni.navigateBack();
		},
		// 搜索
		change(e) {
			this.listData = [];
			if (e != '') {
				this.data.forEach(item => {
					if (item.country.indexOf(e) != -1) {
						console.log(item);
						this.listData.push(item);
						console.log(this.listData);
					}
				});
			}else{
				this.listData = this.data
			}
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="less" scoped>
.blank {
	text-align: center;
	padding-top: 80rpx;
	font-size: 30rpx;
}
.areacode {
	&-concent {
		padding: 0 40rpx;
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
