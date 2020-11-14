<template>
	<view class="userCity" >
		<Head title="所在城市" @navigateBack="navigateBack">
			<template v-slot:right>
				<view>保存</view>
			</template>
		</Head>
		<view class="userCity-c">
			<textarea v-model="birth" maxlength="30" placeholder-style="color:#999999" placeholder="请输入您所在城市" />
			<view class="userCity-c-maxsize">{{ txtVal }}/30</view>
		</view>
		
		<!-- 提示是否取消 -->
		<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
			<view class="tipAddress">
				<view class="tipAddress-txt">您修改的信息未保存，确定退出吗？</view>
				<view class="tipAddress-btn">
					<view class="tipAddress-btn-qx" @click="tipcancel">取消</view>
					<view class="tipAddress-qr" @click="tipaffirm">确认</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			birth: '',
			txtVal: 0,
			tipshow: false
		};
	},
	watch: {
		birth(val, oldVal) {
			this.txtVal = this.birth.length;
		}
	},
	methods: {
		navigateBack() {
			this.tipshow = true;
		},
		// 取消
		tipcancel() {
			this.tipshow = false;
		},
		// 确认
		tipaffirm() {
			uni.navigateBack();
		},
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

.userCity-c {
	width: 100%;
	height: 350rpx;
	background: #eeeeee;
	textarea {
		width: 100%;
		height: 300rpx;
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
