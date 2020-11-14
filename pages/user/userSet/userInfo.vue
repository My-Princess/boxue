<template>
	<view class="userinfo">
		<Head :title="user.personalData" @navigateBack="navigateBack"></Head>
	
		<view class="userinfo-c">
			<!-- 头像 -->
			<view class="userinfo-c-item">
				<view class="userinfo-c-item-name">{{ user.headPortrait }}</view>
				<view class="userinfo-c-item-r">
					<template>
						<u-upload :action="action" :deletable="false" :show-progress="false" max-count="1" :file-list="[{ url: `${InfoData.head_img || defaultimg}` }]"></u-upload>
					</template>
				</view>
			</view>
			<!-- 呢称 -->
			<view class="userinfo-c-item" @click="userNickname">
				<view class="userinfo-c-item-name">{{ user.nickname }}</view>
				<view class="userinfo-c-item-r">
					<text>{{ InfoData.nickname ? InfoData.nickname : user.notfilled }}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
			<!--  性别 -->
			<view class="userinfo-c-item" @click="sexBtn">
				<view class="userinfo-c-item-name">{{ user.sex }}</view>
				<view class="userinfo-c-item-r">
					<text>{{ Mysex ? Mysex : user.notfilled }}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
			<!-- 生日 -->
			<!-- 	<view class="userinfo-c-item" @click="birthDay">
				<view class="userinfo-c-item-name">{{ user.birthday }}</view>
				<view class="userinfo-c-item-r">
					<text>{{ user.notfilled }}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view> -->
			<!-- 所在城市 -->
			<view class="userinfo-c-item" @click="Cityshow = true">
				<view class="userinfo-c-item-name">{{ user.city }}</view>
				<view class="userinfo-c-item-r">
					<text>{{ InfoData.province + InfoData.city+InfoData.country ? InfoData.province + InfoData.city+InfoData.country  : user.notfilled }}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
			<!-- 简介 -->
			<view class="userinfo-c-item" @click="userBrief">
				<view class="userinfo-c-item-name">{{ user.simple }}</view>
				<view class="userinfo-c-item-r">
					<text>{{ InfoData.signature ? InfoData.signature : user.notfilled }}</text>
					<view class="iconfont icon-youjiantou1"></view>
				</view>
			</view>
		</view>

		<!-- 性别弹框 -->
		<view class="userinfo-sex">
			<template>
				<view><u-select cancel-color="#999999" confirm-color="#DB1F13" mode="single-column" title="性别" v-model="showSex" :list="listSex" @confirm="sexconfirm"></u-select></view>
			</template>
		</view>

		<!-- 出生弹框 -->
		<!-- <view class="userinfo-birth">
			<template>
				<u-picker mode="time" v-model="showBirth" :params="params" :show-time-tag="false"></u-picker>
			</template>
		</view> -->
		<!-- 所在城市 -->
		<template>
			<view>
				<u-picker v-model="Cityshow" mode="region" confirm-color="#DB1F13" title="所在城市" @confirm="cityconfirm"></u-picker>
				
			</view>
		</template>

		
	</view>
</template>

<script>
import { getUser,updateUserInfo } from '@/api/user.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			action: '',
			showBirth: false,
			showSex: false,
			Cityshow:false,
			InfoData: {},
			listSex: [],
			fileList: [
				{
					url: ''
				}
			],
Mysex:'',
			params: {
				year: true,
				month: true,
				day: true,
				hour: false,
				minute: false,
				second: false
			}
		};
	},
	onLoad() {
		
	},
	onShow() {
		this.fileList[0].url = this.defaultimg;
		// 获取个人数据
		this.getInfo();
	},
	computed: {
		...mapState('index', ['defaultimg']),
		user() {
			return this.$t('user');
		}
	},
	watch: {
		user: {
			handler(val) {
				// 性别数据
				let data = [
					{
						value: '1',
						label: val.man
					},
					{
						value: '2',
						label: val.girl
					},
					{
						value: '0',
						label: val.confidentiality
					}
				];
				this.listSex = data;
			},
			immediate: true
		}
	},
	methods: {
		async getInfo() {
			let res = await getUser();
			console.log(res);
			this.InfoData = res;
			uni.setStorageSync('userInfo',res)
			console.log(this.InfoData)
			if(this.InfoData.sex == 1){
				console.log('fasdfafsa')
				console.log(this.user.man)
				this.Mysex = this.user.man
				console.log(this.Mysex)
			}else if(this.InfoData.sex == 2){
				this.Mysex = this.user.girl
			}else{
				this.Mysex = this.user.confidentiality
			}
		},
		// 修改性别
		sexconfirm(e){
			console.log(e)
			let info = this.InfoData
			info.sex = e[0].value
		
			updateUserInfo(info).then(res=>{
			       console.log(res)
				   // this.onShow()
			})
		},
		// 所在城市
		cityconfirm(e){
			console.log('所在城市',e)
			let info = this.InfoData
			info.province = e.province.label
			info.city = e.city.label
			info.country = e.area.label
			
			updateUserInfo(info).then(res=>{
			       console.log(res)
				   // this.onShow()
			})
		},
		userNickname() {
			uni.navigateTo({
				url: './userNickname'
			});
		},
		userBrief() {
			uni.navigateTo({
				url: './userBrief'
			});
		},
		usercity() {
			uni.navigateTo({
				url: './userCity'
			});
		},
		navigateBack() {
			uni.navigateBack();
		},
		sexBtn() {
			this.showSex = true;
		},
		birthDay() {
			this.showBirth = true;
		}
	}
};
</script>

<style lang="scss">
/deep/ .u-preview-image {
	border-radius: 50%;
}
/deep/ .u-preview-wrap {
	border: none;
}
/deep/ .u-preview-wrap {
	background: #ffffff;
}
/deep/ .u-preview-wrap {
	width: 120rpx !important;
	height: 120rpx !important;
}
/deep/ .uni-picker-view-wrapper {
	margin-top: -140rpx !important;
}
/deep/ .u-select__header__title {
	font-size: $fontSize + 6;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
	line-height: 110px;
}
.userinfo-c {
	padding: 0 40rpx;
	&-item:nth-child(1) {
		padding: 0;
	}
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eeeeee;
		padding: 25rpx 0;
		&-name {
			font-size: $fontSize;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}
		&-r {
			flex: 1;
			margin-left: 40rpx;
			// background: pink;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			text {
				text-align: right;
				// background: black;
			   // width: 10%;	
			   width: 400rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
				
				  overflow:hidden;
				      text-overflow:ellipsis;
				      white-space:nowrap;
				  
			}
			.icon-youjiantou1 {
				font-size: 34rpx;
			}
			// width: 120rpx;
			// height: 120rpx;
		}
	}
}
</style>
