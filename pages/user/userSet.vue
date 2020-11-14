<template>
	<view class="userSet">
		
	     	<Head :title="user.set" @navigateBack="navigateBack"></Head>
	     
		
		
		<view class="userSet-c">
			<!-- 个人资料 -->
			<view class="userSet-c-item" @click="userInfo">
				<view class="userSet-c-item-name">{{ user.personalData }}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>
			<!-- 账号设置 -->
			<view class="userSet-c-item" @click="userAccount">
				<view class="userSet-c-item-name">{{ user.Settings }}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>
			<!-- 隐私设置 -->
			<!-- <view class="userSet-c-item" @click="userPrivacy">
				<view class="userSet-c-item-name">{{ user.privacyset }}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view> -->
			<!-- 应用语言 -->
			<view class="userSet-c-item" @click="langShow = true">
				<view class="userSet-c-item-name">{{ user.language }}</view>
				<view class="userSet-c-item-r">
					<view class="userSet-c-item-r-txt">{{ langName }}</view>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
			<!-- 帮助反馈 -->
			<view class="userSet-c-item" @click="userhelp">
				<view class="userSet-c-item-name">{{ user.feedback }}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>
			<!-- 关于我们 -->
			<view class="userSet-c-item" @click="userAboutUs">
				<view class="userSet-c-item-name">{{ user.About }}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>
		</view>
		<!-- 退出登录 -->
		<view class="userSet-btn" @click="logout">{{ user.outLogin }}</view>

		<!-- 语言弹窗 -->
		<view class="userSet-lang">
			<template>
				<u-select v-model="langShow" confirm-color="#DB1F13" mode="single-column" :list="langList" @confirm="langConfirm"></u-select>
			</template>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			langShow: false,
			langName: '',
			langList: [
				{
					value: 'zh-CN',
					label: '中文'
				},
				{
					value: 'en',
					label: 'English'
				},
				{
					value: 'id-ID',
					label: 'bahasa Indonesia'
				}
			]
		};
	},
	onLoad() {
		var lan = uni.getStorageSync('system_info').language || 'zh_CN';
		console.log(lan);
		this.langList.forEach(item => {
			console.log(item);
			if (lan == item.value) {
				this.langName = item.label;
			}
		});
	},
	computed: {
		user() {
			return this.$t('user');
		}
	},
	methods: {
		// 语言确认
		langConfirm(e) {
			console.log(e);
			let system_info = uni.getStorageSync('system_info');
			this.langName = system_info.language = this._i18n.locale = e[0].value;

			console.log(system_info.language);
			uni.setStorageSync('system_info', system_info);
			uni.reLaunch({
				url: '/pages/index/index'
			});
		},
		// 退出登录
		logout() {
			console.log('进');
	
			// uni.removeStorage('token')
			uni.removeStorageSync('token');
			uni.redirectTo({
				url: '../login/login'
			});
		},
		userInfo() {
			uni.navigateTo({
				url: './userSet/userInfo'
			});
		},
		userAccount() {
			uni.navigateTo({
				url: './userSet/userAccount'
			});
		},
		userPrivacy() {
			uni.navigateTo({
				url: './userSet/userPrivacy'
			});
		},
		userhelp() {
			uni.navigateTo({
				url: './userSet/userhelp'
			});
		},
		userAboutUs() {
			uni.navigateTo({
				url: './userSet/userAboutUs'
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.userSet-c {
	padding: 0 40rpx;
	&-item {
		padding-top: 20rpx;
		padding-bottom: 28rpx;
		border-bottom: 1rpx solid #eeeeee;
		display: flex;
		justify-content: space-between;

		&-name {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #343434;
		}
		&-r {
			display: flex;
			align-items: center;
			&-txt {
				font-size: 26rpx;
				padding-right: 14rpx;
			}
		}
		.icon-youjiantou1 {
			font-size: 34rpx;
		}
	}
}
.userSet-btn {
	margin-top: 118rpx;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 440rpx;
	height: 80rpx;
	border: 1px solid #eeeeee;
	background: linear-gradient(0deg, #ffffff 0%, #ffffff 100%);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #dc2014;
}
</style>
