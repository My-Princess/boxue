<template>
	<view class="mistakes">
		<Head title="错题本" @navigateBack="navigateBack"></Head>
		<view class="mistakes-concent">
			<view class="mistakes-concent" v-for="(item, index) in ErrorData" :key="index">
				<Collapse-box v-model="isShow" :Errordelaut="item">
					<template v-slot:title>
						<view class="mistakes-concent-box-title-r">
							<view class="mistakes-concent-box-title-r-img"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/gg.jpg" mode="" style="display: block;"></image></view>
							<view class="mistakes-concent-box-title-r-c">
								<view class="mistakes-concent-box-title-r-c-t">{{ item.class_name }}</view>
								<view class="mistakes-concent-box-title-r-c-b">
									<text>题目数：{{ item.count }}</text>
									<text>正确率：{{ item.accuracy }}%</text>
								</view>
							</view>
						</view>
					</template>
				</Collapse-box>
			</view>
		</view>
	</view>
</template>

<script>
import { getError } from '@/api/study.js';
export default {
	data() {
		return {
			isShow: false,
			page: 1,
			ErrorData: []
		};
	},
	onLoad() {
		this.getErrorData();
	},
	methods: {
		async getErrorData() {
			let data = { token: uni.getStorageSync('token'), page: this.page };
			let res = await getError(data);
			console.log('做题主页', res);
			let ErrorData = res.data;
			ErrorData.forEach(item => {
				if (item.questions.length) {
					item.questions.forEach((v, i) => {
						if (v.errorCount == 0) {
							item.questions.splice(i, 1);
						}
					});
					// console.log('kankam',item)
					this.ErrorData.push(item);
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
.mistakes-concent-box-title-r {
	display: flex;
	padding-top: 40rpx;
	padding-bottom: 60rpx;
	&-img {
		width: 80rpx;
		height: 80rpx;
		// background: red;
		margin-right: 20rpx;
		image {
			width: 100%;
			height: 100%;
			display: block;

			background: rgba(206, 17, 38, 1);
			border-radius: 10px;
		}
	}

	&-c {
		flex: 1;
		&-t {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		&-b {
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
			text:last-child {
				margin-left: 20rpx;
			}
		}
	}
}
.mistakes {
	&-concent {
		padding: 0 40rpx;
	}
}
</style>
