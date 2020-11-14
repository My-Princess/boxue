<template>
	<view class="feedback">
			<Head :title="user.opinion" @navigateBack="navigateBack"></Head>
			<view class="feedback-concent">
				<view class="feedback-concent-textarea">
					<!-- <textarea id="txtRCName" runat="server" rows="5" cols="120" datatype="*" nullmsg="请输入标题名称！" sucmsg=" " placeholder="首先核对注册证型号和价格单型号是否一样，其次核对价格单型号是否都有注册证，无注册证的少于有注册证的在该框把无注册证的单独罗列出来，有注册证的无需罗列。&#13;&#10;开票名称包括分类编码、开票名称，开票型号和价格单型号不一致的情况下，备注说明。"></textarea> -->
					<textarea v-model="concent" value="" :placeholder="user.opinionTxt" maxlength="-1" />
					<!-- <textarea class="hh" rows="5" cols="50" placeholder="1、textarea&#10;2、success"></textarea> -->
				</view>
			</view>
			<view class="feedback-concent-line"></view>
			<view class="feedback-contact">
				<!-- 联系方式 -->
				<view class="feedback-contact-title">{{user.phone}}</view>
				<input type="text" v-model="phone" value="" :placeholder="user.leavePhone" />
			</view>
			<view class="feedback-concent-line"></view>
			<view class="feedback-submit" @click="submit">
			  {{$t('commonality.submit')}}
			</view>
	</view>

</template>



<script>
	import { feedbackCreate  } from '@/api/user.js'
	export default {
	
		data() {
			return {
				placeholder:'为了更好的解决您的问题，请告诉我们以下内容：\n1、您的姓名 \n2、问题描述',
				concent:'',
				phone:''
			};
		},
		onLoad() {
			// document.querySelector('.hh').setAttribute('placeholder','1、textarea\n2、success')
		},
		computed:{
			user(){
			    return this.$t('user')
			}
		},
		methods: {
			navigateBack(){
				uni.navigateBack()
			},
			async submit(){
				let data = {content:this.concent, phone:this.phone}
				let res = await feedbackCreate()
				console.log(res)
			}
		}
	};
	</script>
</script>
<style lang="less" scoped>
	.feedback{
		&-concent{
		display: flex;
		justify-content: center;
					
			&-textarea{
				padding-bottom: 40rpx;
				textarea{
					box-sizing: border-box;
					width:670rpx;
					height:286rpx;
					background:rgba(238,238,238,1);
					border-radius:10px;
					// height: 100%;
					padding: 39rpx 45rpx 0rpx 40rpx;
					font-size: 28rpx;
					 color: #333;
						// background:rgba(238,238,238,1);
				}
				   textarea::-webkit-input-placeholder {
				        /* WebKit browsers */
						font-size: 24rpx;
				        color: #999999;
				    }
				    textarea:-moz-placeholder {
				        /* Mozilla Firefox 4 to 18 */
						font-size: 24rpx;
				        color: #999999;
				    }
				    textarea::-moz-placeholder {
				        /* Mozilla Firefox 19+ */
						font-size: 24rpx;
				        color: #999999;
				    }
				    textarea::-ms-input-placeholder {
				        /* Internet Explorer 10+ */
						font-size: 24rpx;
				        color: #999999;
				  }

			}
			&-line{
				height:20rpx;
				background:rgba(248,248,248,1);
			}

		}
		&-contact{
			display: flex;
			padding: 27rpx 40rpx;
			&-title{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				margin-right: 30rpx;
			}
			input{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
				line-height:40rpx;
			}
		}
		&-submit{
			margin: 64rpx 40rpx 0 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// width:670rpx;
			height:70rpx;
			background:rgba(220,42,31,1);
			border-radius:35px;
			
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
	}
</style>