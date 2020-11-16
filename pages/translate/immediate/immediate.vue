<template>
	<view class="everyday">
		<Head :title="translate.immediate" @navigateBack="navigateBack"></Head>

		<view class="everyday-c">
			<view class="everyday-title">
				<view class="everyday-title-l">{{ isnewCut ? langdefault.name : langSelect.name }}</view>
				<view class="iconfont icon-qiehuan-"></view>
				<view class="everyday-title-r">{{isnewCut ?  langSelect.name : langdefault.name }}</view>
				<view class="iconfont icon-xiajiantou1" @click="tiPlanguage"></view>
			</view>
			<view class="everyday-textarea"><textarea v-model="content" value="" @input="changValue" maxlength="-1" :placeholder="translate.chooseTip" /></view>
			<view class="everyday-sumbit" :class="{ activeSumbit }" @click="everydayBtn">{{$t('commonality.submit')}}</view>
		</view>
		<!-- 语言选择弹窗 -->
		<view class="everyday-select">
			<template>
				<view>
					<u-popup v-model="languageShow" mode="bottom">
						<view class="language">
							<view class="language-title">
								<view class="language-title-l" @click="cancel">{{$t('commonality.cancel')}}</view>
								<view class="language-title-r" @click="confirm">{{$t('commonality.accomplish')}}</view>
							</view>
							<view class="language-c">
								<view class="language-c-l">{{ isCut ? langdefault : langSelect }}</view>
								<view class="iconfont icon-qiehuan-" @click="languageCut"></view>
								<view class="language-c-r">{{ isCut ? langSelect : langdefault }}</view>
							</view>
							<view class="language-list">
								<!-- 语言选择 -->
								<view class="language-list-name">{{translate.languageChoice}}</view>
								<view class="language-list-item" v-for="(item,index) in ClassTypeData" :key="index"
								@click="languageListClick(item, index)"
								:class="index == activeindex ? 'activeColor' : ''"
								>
									{{item.name}}
								</view>
								
							</view>
						</view>
					</u-popup>
				</view>
			</template>
		</view>
	    <!-- 选择支付方式 -->
		<view class="group-zfpopup">
			<template>
				<u-popup v-model="payShow" mode="bottom">
					<view class="popup-box">
						<view class="popup-box-title">
							<view class="popup-box-title-name">选择支付方式</view>
							<view class="popup-box-title-qx" @click="payCancel">取消</view>
						</view>
						<view class="popup-box-concent">
							<u-checkbox-group>
								<u-checkbox v-model="AlipayCheck" shape="circle" icon-size="0" active-color="#DC2A1F" size="30">
									<view class="popup-box-concent-zf">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zhbao.png" mode=""></image>
										<text>支付宝支付</text>
									</view>
								</u-checkbox>
		
								<u-checkbox v-model="WxCheck" shape="circle" icon-size="0" active-color="#DC2A1F" size="30">
									<view class="popup-box-concent-wx">
										<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/wx.png" mode=""></image>
										<text>微信支付</text>
									</view>
								</u-checkbox>
		
								<view class="popup-box-concent-txt">
									<text class="popup-box-concent-txt-title">支付金额:</text>
									<text class="popup-box-concent-txt-jg">
										￥5580
										<text class="popup-box-concent-txt-jg-x">.00</text>
									</text>
								</view>
								<view class="popup-box-concent-btn" @click="payment">立即支付</view>
							</u-checkbox-group>
						</view>
					</view>
				</u-popup>
			</template>
		</view>
	
	</view>
</template>

<script>
	import {getClassType,fastTranslationAdd} from '@/api/user.js'
export default {
	data() {
		return {
			content:'',
			langSelect: {
			
			},
			langdefault: {
				name:'汉语',
				id:'0'
			},
			name:{},
			isCut: true,
			isnewCut:true,
			activeindex:99,
			cate_id:'',
			languageShow: false,
			activeSumbit: false,
			payShow:false,
			AlipayCheck:false,
			WxCheck:false,
			ClassTypeData:[],
		};
	},
	onLoad() {
		// 翻译语言
		this.getClassTypeData()
		// 快译订单
		this.getfastTranslationAdd()
	},
	computed:{
		translate(){
			return this.$t('translate')
		}
	},
	methods: {
		async getClassTypeData(){
			let data = {token:uni.getStorageSync('token')}
			let res = await getClassType(data)
			this.ClassTypeData = res.data
			this.langSelect = this.ClassTypeData[0]
		},
		async getfastTranslationAdd(){
			let data = {token:uni.getStorageSync('token'),content:this.content,form_cate_id:this.langdefault.id,to_cate_id:this.langSelect.id}
			let res = await fastTranslationAdd(data)
			console.log(res)
		},
		tiPlanguage() {
			this.languageShow = true;
		},
		// 语言选择
		languageListClick(e, i) {
			this.langSelect = e;
			this.cate_id = e.id;
			this.activeindex = i;
		},
		// 切换
		languageCut() {
			this.isCut = !this.isCut;
		},
		// 选择语言取消
		cancel() {
			this.languageShow = false;
		},
		// 支付取消
		payCancel(){
			this.payShow = false;
		},
		// 确认
		confirm() {
			this.languageShow = false;
			this.name = this.langSelect
			this.isnewCut = this.isCut
		},
		// input变化时
		changValue(e) {
			console.log(e);
			if (e.detail.value != '') {
				this.activeSumbit = true;
			}else{
				this.activeSumbit = false;
			}
		},
		// 提交
		everydayBtn(){
			if(this.activeSumbit){
				// #ifdef H5
				    this.payShow = true;
				// #endif
				// #ifdef MP-WEIXIN
				    this.getfastTranslationAdd()
				// #endif
			}
		},
		//立即支付
		payment(){
			console.log('立即支付')
			uni.navigateTo({
				url:'./paySuccess'
			})
			
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss">
	.activeColor {
		color: #da1f13 !important;
	}
.activeSumbit {
	background: #da1f13 !important;
	color: #ffffff !important;
}

    .group-zfpopup{
		.popup-box{
			padding: 0 40rpx;
			// padding-bottom: 78rpx;
			&-title{
						   margin-top: 40rpx;
						   margin-bottom: 58rpx;

						   display: flex;
						   align-items: center;
						   &-name{
							   margin: 0 auto;
							   font-size:$fontSize + 6;
							   font-family:PingFang SC;
							   font-weight:bold;
							   color:rgba(51,51,51,1);
						   }
						   &-qx{
							   font-size:$fontSize;
							   font-family:PingFang SC;
							   font-weight:500;
							   color:rgba(153,153,153,1);
						   }
			}
		    &-concent{
				// display: flex;
				// flex-direction:
				/deep/.u-checkbox{
					 position: relative;
					display: flex;
					width: 100% !important;

				}

				/deep/.u-checkbox__icon-wrap {

						   margin-right: 20rpx;
						   // margin-left: 10rpx
						   margin-top: 15rpx;
						   position: absolute;
						   top: 0;
						   right: 0rpx;
						   ::before{
							   position: absolute;
							   left: -22rpx;
							   top: -24rpx;
							   // content: '';
							   width: 44rpx;
							   height: 44rpx;
							   border-radius: 50%;
							   // padding: 5rpx;
							   border: 2rpx solid #333;
							   // z-index: 999;
						   }

				}
				&-zf{
					width: 100%;
					// background: red;
					display: flex;
					margin-bottom: 28rpx;
					image{
						width: 62rpx;
						height: 62rpx;
					}
					text{
						font-size:$fontSize;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
				}
				&-wx{
					display: flex;
					align-items: center;
					image{
						width: 62rpx;
						height: 62rpx;
					}
					text{
						font-size:$fontSize;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
				}
				&-txt{
					// display: flex;
					margin-top: 25rpx;
					font-size:$fontSize;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					&-title{
						margin-right: 18rpx;
					}
					&-jg{

						font-size: $fontSize + 18;
						color: #DC2A1FFF;
						text{
							font-size: $fontSize;
						}
					}
				}
				&-btn{
					margin-top: 36rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height:98rpx;
					background:#DC2A1FFF;
					// opacity:0.55;

					font-size:$fontSize - 2;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
				}
			}

		}
	}

.language {
	padding: 40rpx;
	&-title {
		display: flex;
		justify-content: space-between;
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: 500;
		color: #656565;
		&-r {
			color: #da1f13;
		}
	}
	&-c {
		// padding: 40rpx 0;
		// display: flex;
		// justify-content: center;
		.icon-qiehuan- {
			padding: 0 10rpx;
			font-size: 60rpx;
		}
		
		&-l,
		&-r {
			font-size: 30rpx;
		}
		padding: 40rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&-list {
		&-name {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
			padding-bottom: 10rpx;
		}
		&-item {
			padding: 30rpx 20rpx;
			border-bottom: 1rpx solid #ededed;
		}
	}
}
.everyday-c {
	padding: 24rpx 40rpx 0;
}
.everyday-title {
	display: flex;
	align-items: center;

	font-size: $fontSize;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;

	.icon-qiehuan- {
		font-size: 34rpx;
		padding: 0 14rpx;
	}
	.icon-xiajiantou1 {
		font-size: 30rpx;
		font-weight: bold;
		margin-left: 18rpx;
	}
}
.everyday-textarea {
	// box-sizing: border-box;
	margin-top: 30rpx;
	margin-bottom: 65rpx;
	width: 100%;
	height: 340rpx;
	box-shadow: 0 0 6px 0 #d3d3d3;
	border-radius: 10px;
	textarea::-webkit-input-placeholder {
		color: #999999;
	}
	textarea::-moz-placeholder {
		color: #999999;
	}
	textarea:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999999;
	}
	textarea:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #999999;
	}
	textarea {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 30rpx 20rpx;
		// background: #FFFFFF;
		border-radius: 10px;

		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
	}
}

.everyday-sumbit {
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 600rpx;
	height: 90rpx;
	box-shadow: 0 0 2px 0 #999999;
	background: #ededed;
	border-radius: 50px;

	font-size: $fontSize + 6;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
</style>
