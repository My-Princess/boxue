<template>
	<view class="collect">
		<Head title="收藏库" @navigateBack="navigateBack"></Head>
		<view class="collect-content">
			<view class="collect-list" v-if="bankList.length">
				<view class="collect-content-item" v-for="(item, index) in bankList" :key="index">
					<collectList v-model="isShow" :collectData="item.questions" :classId="item.class_iid">
						<template v-slot:title>
							<view class="collect-title-l">
								<view class="collect-title-l-name">{{ item.class_name }}</view>
								<view class="collect-title-l-txt">收藏题数：{{ item.count }}道</view>
							</view>
						</template>
					</collectList>
				</view>
			</view>
			<view class="blank" v-else>您还没有收藏题目哦,赶快去收藏吧</view>
		</view>
	</view>
</template>

<script>
import { getBank } from '@/api/study.js';
export default {
	data() {
		return {
			isShow: false,
			page: 1,
			bankList: []
		};
	},
	onLoad() {
		this.getBankList();
	},
	methods: {
		// 获取课题分类
		async getBankList() {
			let data = { token: uni.getStorageSync('token'), page: this.page };
			let res = await getBank(data);
			console.log(res);
			// this.bankList = res.data
			res.data.forEach(item => {
				if (item.questions.length) {
					this.bankList.push(item);
				}
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.blank {
	// width: 100%;
	font-size: 24rpx;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.collect-content {
	padding: 0 40rpx;
}
.collect-title-l {
	padding: 40rpx 0;
	// display: flex;
	// justify-content: space-between;
	// align-items: center;
	&-name {
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
	&-txt {
		font-size: $fontSize - 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
