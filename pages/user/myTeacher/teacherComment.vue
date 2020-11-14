<template>
	<view class="teacherComment">
		<Head title="我的老师" @navigateBack="navigateBack">
			<template v-slot:right>
				<view @click="AddContent">发布</view>
			</template>
		</Head>
		<view class="teacherComment-c">
			<textarea v-model="birth" maxlength="300" placeholder-style="color:#999999" placeholder="请输入您的简介，字数请控制在10-300之内。" />
			<view class="teacherComment-c-maxsize">{{ txtVal }}/300</view>
		</view>

		<!-- 提示是否取消 -->
		<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
			<view class="tipAddress">
				<view class="tipAddress-txt">您填写的信息还未发送，确定退出吗？</view>
				<view class="tipAddress-btn">
					<view class="tipAddress-btn-qx" @click="tipcancel">取消</view>
					<view class="tipAddress-qr" @click="tipaffirm">确认</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
import { mineAddContent } from '@/api/user.js';
export default {
	data() {
		return {
			value: '',
			birth: '',
			txtVal: 0,
			tipshow: false,
			teach_id: '',
			order_class_id: ''
		};
	},
	onLoad(options) {
		this.teach_id = options.teach_id;
		this.order_class_id = options.order_class_id;
	},
	watch: {
		birth(val, oldVal) {
			this.txtVal = this.birth.length;
		}
	},
	methods: {
		async AddContent() {
			let data = { token: uni.getStorageSync('token'), teach_id: this.teach_id, order_class_id: this.order_class_id, content: this.birth };
			let res = await mineAddContent(data);
			console.log(res);
			if (res.code == 0) {
				uni.navigateBack()
				uni.showToast({
					title: '发布成功',
					duration: 2000,
					icon: 'none',
			
				});
			} else {
				uni.showToast({
					title: '发布失败',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		navigateBack() {
			if (this.birth != 0) {
				this.tipshow = true;
			} else {
				this.tipaffirm();
			}
		},
		// 取消
		tipcancel() {
			this.tipshow = false;
		},
		// 确认
		tipaffirm() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
/deep/.integral-top-r {
	font-size: $fontSize;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.tipAddress {
	padding: 40rpx;
	&-txt {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	&-btn {
		margin-top: 78rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		&-qx {
			margin-right: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
		}
		&-qr {
			// padding-left: 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
}

.teacherComment-c {
	width: 100%;
	height: 350rpx;
	background: #eeeeee;
	textarea {
		box-sizing: border-box;
		width: 100%;
		height: 310rpx;
		padding: 20rpx 40rpx;
	}
	&-maxsize {
		margin-right: 40rpx;
		display: flex;
		justify-content: flex-end;
		font-size: $fontSize - 4;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
}
</style>
