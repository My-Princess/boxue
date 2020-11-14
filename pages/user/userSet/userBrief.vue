<template>
	<view class="userbirth" >
		<Head :title="user.simple" @navigateBack="navigateBack">
			<template v-slot:right>
				<view @click="saveBtn">{{$t('commonality.save')}}</view>
			</template>
		</Head>
		<view class="userbirth-c">
			<textarea v-model="birth" maxlength="300" placeholder-style="color:#999999" :placeholder="user.simpleTip" />
			<view class="userbirth-c-maxsize">{{ txtVal }}/300</view>
		</view>
		
		<!-- 提示是否取消 -->
		<u-modal v-model="tipshow" :show-title="false" :show-confirm-button="false">
			<view class="tipAddress">
				<view class="tipAddress-txt">{{user.outInfo}}</view>
				<view class="tipAddress-btn">
					<view class="tipAddress-btn-qx" @click="tipcancel">{{$t('commonality.cancel')}}</view>
					<view class="tipAddress-qr" @click="tipaffirm">{{$t('commonality.confirm')}}</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
		import { updateUserInfo } from '@/api/user.js'
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
	computed:{
		user(){
			return this.$t('user')
		}
	},
	methods: {
		saveBtn(){
			if(this.birth != ''){
				let info = uni.getStorageSync('userInfo')
				info.signature = this.birth
				let data = info
				updateUserInfo(data).then(res=>{
					if(res.code == 0){
						uni.navigateTo({
							url:'/pages/user/userSet/userInfo'
						})			
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}else{
				uni.showToast({
					title:'请输入您的昵称',
					icon:'none'
				})
			}
		},
		navigateBack() {
			if(this.birth != ''){
			   this.tipshow = true;
			}else{
			    uni.navigateBack();
			}
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

.userbirth-c {
	width: 100%;
	height: 370rpx;
	background: #eeeeee;
	textarea {
		display: block;
		width: 100%;
		height: 300rpx;
		padding-left: 40rpx;
		padding-right: 20rpx;
		padding-top: 20rpx;
		box-sizing: border-box;
		
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
