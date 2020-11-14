<template>
	<view class="everyday">
		<Head :title="translate.choose" @navigateBack="navigateBack"></Head>

		<view class="everyday-c">
			<view class="everyday-title">
				<view class="everyday-title-l">{{ langdefault.name_zh }}</view>
				<view class="iconfont icon-xiajiantou1" @click="selectlanguage(0)"></view>
				<view class="iconfont icon-qiehuan-" @click="transdata"></view>
				<view class="everyday-title-r">{{ langSelect.name_zh }}</view>
				<view class="iconfont icon-xiajiantou1" @click="selectlanguage(1)"></view>
			</view>
			<view class="everyday-textarea">
				<textarea v-model="concent" value="" @input="changValue" maxlength="-1" :auto-height="true" :placeholder="translate.chooseTip" />
				<view class="icon-eliminate-footer" @click="remove">
					<view class="iconfont icon-eliminate"></view>
					<view class="icon-eliminate-footer-name">一键清除</view>
				</view>
			</view>
			<view class="everyday-sumbit" :class="{ activeSumbit }" @click="everydayBtn">{{ $t('commonality.submit') }}</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import md5 from 'js-md5'
import { getClassType } from '@/api/user.js';
export default {
	data() {
		return {
			// 后
			langSelect: {},
			// 前
			langdefault: {},
			
			
			name: '印尼语',
			isCut: true,
			isnewCut: true,
			activeindex: 99,
			cate_id: '',
			languageShow: false,
			activeSumbit: false,
			payShow: false,
			AlipayCheck: false,
			WxCheck: false,
			ClassTypeData: [],
			concent: '',
			sign:''
		};
	},
	onLoad() {
	
	
		
		// console.log(sign)
	},
	onShow() {
		this.langdefault = this.frontLanguage
		console.log(this.queenLanguage)
		 this.langSelect = this.queenLanguage
	},
	computed: {
			...mapState('user', ['fronti', 'queeni', 'frontLanguage', 'queenLanguage']),
		translate() {
			return this.$t('translate');
		}
	},
	methods: {
	    ...mapMutations('user', ['getfrontLanguage', 'getqueenLanguage','setfronti','setqueeni','setLanguageData']),

		
		// 选择语言
		selectlanguage(index) {
			uni.navigateTo({
				url: `./selectlanguage?type?=${index}`
			});
		},
		// 语言选择
		languageListClick(e, i) {
			this.langSelect = e.name;
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
		payCancel() {
			this.payShow = false;
		},
		// 确认
		confirm() {
			this.languageShow = false;
			this.name = this.langSelect;
			this.isnewCut = this.isCut;
		},
		// input变化时
		changValue(e) {
			console.log(e);
			if (e.detail.value != '') {
				this.activeSumbit = true;
			} else {
				this.activeSumbit = false;
			}
		},
		// 提交
		everydayBtn() {
			var that = this
			// language/translate?q=${this.concent}&from=${this.frontLanguage.code}&to=${this.queenLanguage.code}&appid=20201112000614493&salt=${times}&sign=${sign}`
			let time = Date.parse(new Date())
			// let times = '1234561234'
			// let times = time.slice(0,9)
			let strings = `20201112000614493${this.concent}${time}yViEBKSTM3KCFCYzuGAf`
			console.log(strings)
			let sign=md5(strings)
			if (this.activeSumbit) {
				uni.request({
				    url: `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${this.concent}&from=${this.frontLanguage.code}&to=${this.queenLanguage.code}&appid=20201112000614493&salt=${time}&sign=${sign}`, 	    
				    success: (res) => {
							console.log(res);
						if(res.statusCode==200){
						
							this.setLanguageData(res.data)
							uni.navigateTo({
								url: '/pages/translate/everyday/everydayDefault'
							});
						}else{
							uni.showToast({
								title:'翻译失败请重试',
								icon:'none'
							})
						}
				       
				    }
				});
				
				
				
			}
		},
		// 转换
		transdata(){
			this.fronti ? this.setfronti(0) : this.setfronti(1);
			this.queeni ? this.setqueeni(0) : this.setqueeni(1);
			this.getfrontLanguage(this.langSelect)
			this.getqueenLanguage(this.langdefault)
			this.langSelect = this.queenLanguage
			this.langdefault = this.frontLanguage
			console.log('前',this.frontLanguage)
			console.log('后',this.queenLanguage)
		},
		// 一键清除
		remove() {
			this.concent = '';
			this.activeSumbit = false;
		},
		//立即支付
		payment() {
			console.log('立即支付');
			uni.navigateTo({
				url: './paySuccess'
			});
		},
		navigateBack() {
			uni.navigateBack();
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

.group-zfpopup {
	.popup-box {
		padding: 0 40rpx;
		// padding-bottom: 78rpx;
		&-title {
			margin-top: 40rpx;
			margin-bottom: 58rpx;

			display: flex;
			align-items: center;
			&-name {
				margin: 0 auto;
				font-size: $fontSize + 6;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-qx {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
		&-concent {
			// display: flex;
			// flex-direction:
			/deep/.u-checkbox {
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
				::before {
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
			&-zf {
				width: 100%;
				// background: red;
				display: flex;
				margin-bottom: 28rpx;
				image {
					width: 62rpx;
					height: 62rpx;
				}
				text {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-wx {
				display: flex;
				align-items: center;
				image {
					width: 62rpx;
					height: 62rpx;
				}
				text {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			&-txt {
				// display: flex;
				margin-top: 25rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				&-title {
					margin-right: 18rpx;
				}
				&-jg {
					font-size: $fontSize + 18;
					color: #dc2a1fff;
					text {
						font-size: $fontSize;
					}
				}
			}
			&-btn {
				margin-top: 36rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 98rpx;
				background: #dc2a1fff;
				// opacity:0.55;

				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
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
	padding: 0rpx 40rpx 0;
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
	padding: 30rpx 20rpx;
	// padding-bottom: 20rpx;
	width: 100%;
	min-height: 380rpx;
	height: 100%;
	box-shadow: 0 0 6px 0 #d3d3d3;
	border-radius: 10px;
	textarea::-webkit-input-placeholder {
		width: 100%;

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
		min-height: 360rpx;
		height: 90%;
		// background: red;
		// padding: 30rpx 20rpx;
		// background: #FFFFFF;
		border-radius: 10px;

		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
	}
	.icon-eliminate-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 20rpx;
		// padding-bottom: 20rpx;
		.icon-eliminate {
			color: #999;
		}
		&-name {
			padding-left: 10rpx;

			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
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
