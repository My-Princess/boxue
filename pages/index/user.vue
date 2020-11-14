<template>
	<view class="user">
		<view class="user-c">
			
			
		
		<view class="user-box">
			<view class="user-box-set">
				<view class="user-box-set-set" @click="userSet"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/shezhi.png"></image></view>
				<!-- 	<view class="user-box-set-news" @click="userNews">
					<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/news.png"></image>
				</view> -->
			</view>
			<userHead :userInfo="userInfo"></userHead>
			<view class="user-box-info">
				<!-- 关注 -->
				<view class="user-box-info-item" @click="myFocus(0)">
					<text>{{ userInfo.focusCount }}</text>
					<text>{{ user.attention }}</text>
				</view>
				<!-- 粉丝 -->
				<view class="user-box-info-item" @click="myFocus(1)">
					<text>{{ userInfo.fansCount }}</text>
					<text>{{ user.bean }}</text>
				</view>
				<!-- 相互关注 -->
				<view class="user-box-info-item" @click="myFocus(0)">
					<text>{{ userInfo.closeCount }}</text>
					<text>{{ user.mutual }}</text>
				</view>
			</view>
		</view>
		<view class="user-concent">
			<view class="user-concent-box">
	
				<view class="user-concent-name"><navigator url="/pages/index/video">{{ user.myservice }}</navigator></view>
				<view class="user-concent-c">
					
					<!-- 我的课程 -->
					<view class="user-concent-c-item" @click="mycourses">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/course.png" mode="aspectFill"></image>
						<view class="user-concent-c-item-name">{{ user.myCourses }}</view>
					</view>
					<!-- <view class="user-concent-c-item" @click="mytask">
		 			<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/我的作业.png" mode=""></image>
		 		    <view class="user-concent-c-item-name">我的作业</view>
		 		</view> -->
					<!-- 我的老师 -->
					<view class="user-concent-c-item" @click="myteacher">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/teacher.png" mode=""></image>
						<view class="user-concent-c-item-name">{{ user.myteacher }}</view>
					</view>
					<!-- 我的帖子 -->
					<view class="user-concent-c-item" @click="myHome">
						<!-- style="width: 62rpx;height: 62rpx;" -->
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/tie.png" mode=""></image>
						<view class="user-concent-c-item-name">{{ user.myinvitation }}</view>
					</view>
					<!-- 翻译 -->
					<view class="user-concent-c-item" @click="mytranslate">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fanyi.png" style=""></image>
						<view class="user-concent-c-item-name">{{ user.mytranslate }}</view>
					</view>
					<!-- 证书 -->
					<view class="user-concent-c-item" @click="mycertificate">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zhengshu.png" style=""></image>
						<view class="user-concent-c-item-name">{{ user.mycertificate }}</view>
					</view>
				</view>
			</view>

			<view class="user-concent-box1">
				<view class="user-concent-box1-name">{{ user.myaccount }}</view>
				<view class="user-concent-box1-c">
					<!-- 钱包 -->
					<view class="user-concent-box1-c-item" @click="myWallet">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/moeny.png" mode=""></image>
						<view class="user-item-name">{{ user.wallet }}</view>
					</view>
					<!-- 积分 -->
					<view class="user-concent-box1-c-item" @click="integral">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/jifen.png" mode=""></image>
						<view class="user-item-name">{{ user.integral }}</view>
					</view>
					<!-- 优惠 -->
					<view class="user-concent-box1-c-item" @click="coupon">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/yhqicon.png" mode=""></image>
						<view class="user-item-name">{{ user.coupons }}</view>
					</view>
					<!-- 订单 -->
					<view class="user-concent-box1-c-item" @click="myOrder">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/order.png" mode=""></image>
						<view class="user-item-name">{{ user.order }}</view>
					</view>
					<!-- 我的拼团 -->
					<view class="user-concent-box1-c-item" @click="myleague">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/groups.png" mode=""></image>
						<view class="user-item-name">{{ user.group }}</view>
					</view>
					<!-- 汇率 -->
					<view class="user-concent-box1-c-item" @click="exchange">
						<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/huilv.png" mode=""></image>
						<view class="user-item-name">{{ user.exchange }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
		<u-tabbar v-model="TabBarcurrent" :list="tabBarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
// import hh from '../../util/xx.js'
// import '@/util/myanmar-tools.js';
import { mapState } from 'vuex';
import { mineIndex } from '@/api/user.js';

export default {
	data() {
		return {
			TabBarcurrent:4,
			userInfo: {},
		}
	},
	onLoad() {
		
		// const converter = new google_myanmar_tools.ZawgyiConverter();
		// const output = converter.zawgyiToUnicode(this.xx);
		// console.log(output);
	},
	onShow() {
		this.getInfo();
	},
	
	
	computed: {
			...mapState('index', ['tabBarlist']),
		user() {
			return this.$t('user');
		}
	},
	methods: {
		async getInfo() {
			if(uni.getStorageSync('token')){
				let res = await mineIndex();
				console.log(res);
				this.userInfo = res.data;
			}else{
				uni.redirectTo({
					url:'/pages/login/login'
				})
			}
			
		},
		userSet() {
			uni.navigateTo({
				url: '../user/userSet'
			});
		},
		// 消息
		userNews() {
			uni.navigateTo({
				url: '../user/news'
			});
		},
		// 我的课程
		mycourses() {
			uni.navigateTo({
				url: '../user/mycourses'
			});
		},
		// 我的作业
		mytask() {
			uni.navigateTo({
				url: '../user/myTask'
			});
		},
		// 我的老师
		myteacher() {
			uni.navigateTo({
				url: '../user/myTeacher'
			});
		},
		// 优惠券
		coupon() {
			uni.navigateTo({
				url: '../user/coupon'
			});
		},
		// 翻译
		mytranslate(){
			uni.navigateTo({
				url:'/pages/translate/translate'
			})
		},
		// 钱包
		myWallet() {
			uni.navigateTo({
				url: '../user/myWallet/myWallet'
			});
		},
		// 积分
		integral() {
			uni.navigateTo({
				url: '../user/myIntegral'
			});
		},
		// 订单
		myOrder() {
			uni.navigateTo({
				url: '../user/myOrder/myOrder'
			});
		},
		// 证书
		mycertificate(){
			uni.navigateTo({
				url:'/pages/user/mycertificate'
			})
		},
		// 拼团
		myleague() {
			uni.navigateTo({
				url: '../user/myleague/myleague'
			});
		},
		// 汇率
		exchange() {
			uni.navigateTo({
				url: '../user/exchange/exchange'
			});
		},
		// 关注
		myFocus(index) {
			uni.navigateTo({
				url: `../user/myFocus?type=${index}`
			});
		},
		//
		myHome() {
			uni.navigateTo({
				url: '../user/myHome/myHome'
			});
		}
	}
};
</script>

<style lang="scss" scoped>

.user-size {
	font-size: 38rpx;
	font-weight: bold;
	font-family: 'Open Sans', sans-serif;
}
.user {
	position: relative;
	&-box {
		height: 470rpx;
		background: url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/userImg.png) no-repeat;
		background-size: 100% 470rpx;
		padding: 0 40rpx;
		&-set {
			padding-top: 32rpx;
			padding-bottom: 42rpx;
			display: flex;
			justify-content: flex-end;
			&-set {
				width: 42rpx;
				height: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			&-news {
				width: 42rpx;
				height: 40rpx;
				margin-left: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		&-user {
			display: flex;

			image {
				display: block;
				width: 120rpx;
				height: 120rpx;
				// background: rgba(228, 228, 228, 1);
				border-radius: 60px;
			}
			&-r {
				margin-left: 30rpx;
				font-family: PingFang SC;
				&-name {
					margin-top: 10rpx;
					margin-bottom: 10rpx;
					width: 500rpx;
					font-size: $fontSize + 6;
					font-weight: bold;
					color: #ffffff;
				}
				&-txt {
					width: 348rpx;
					font-size: $fontSize - 4;
					font-weight: 500;
					color: #ebdcdc;
				}
				&-medal {
					display: flex;
					margin-top: 16rpx;
					&-item {
						margin-right: 18rpx;
						width: 42rpx;
						height: 40rpx;
						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
		&-info {
			padding-top: 34rpx;
			display: flex;
			justify-content: space-around;
			&-item {
				display: flex;
				flex-direction: column;
				text-align: center;
				text {
					font-family: PingFang SC;
					font-weight: 500;
					color: #ffffff;
				}
				text:nth-child(1) {
					font-size: 48rpx;
				}
				text:nth-child(2) {
					font-size: 28rpx;
				}
			}
		}
	}
	&-concent {
		position: relative;
		width: 100%;
		top: -30rpx;
		background: #ffffff;

		border-radius: 20px 20px 0px 0px;
		padding-top: 40rpx;
		.user-concent-box {
			padding-bottom: 80rpx;
		}
		&-name {
			padding: 0 40rpx;
			padding-bottom: 40rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #343434;
		}
		&-c {
			display: flex;
			flex-wrap: wrap;
			// justify-content: space-between;
			&-item:nth-child(-n+3){
				// background: red;
				padding-bottom: 30rpx;
			}
			&-item {
				width: 33.3%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				// padding-top: 20rpx;
				image {
					display: block;
					width: 82rpx;
					height: 82rpx;
				}
				&-name {
					padding-top: 16rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #343434;
				}
			}
		}

		&-box1 {
			padding-bottom: 80rpx;
			&-name {
				padding: 0 40rpx;
				padding-bottom: 40rpx;

				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #343434;
			}
			&-c {
				display: flex;
				flex-wrap: wrap;
				&-item:nth-last-child(-n + 2) {
					margin-bottom: 0rpx;
					// background: red;
				}
				&-item {
					margin-bottom: 48rpx;
					width: 25%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					image {
						display: block;
						width: 60rpx;
						height: 60rpx;
					}
					.user-item-name {
							padding-top: 16rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #343434;
					}
				}
			}
		}
	}
}
</style>
