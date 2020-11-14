<template>
	<view class="artificial">
		<Head :title="translate.artificial" @navigateBack="navigateBack">
			<template v-slot:right >
				<view @click="appointment">{{translate.myappointment}}</view>
			</template>
		</Head>

		<view class="artificial-c">
			<view class="artificial-list">
				<!-- 选择翻译语言 -->
				<view class="artificial-list-item" @click="languageClick">
					<view class="artificial-list-item-name">{{translate.selectlanguage}}</view>
					<view class="artificial-list-item-r">
						<view class="artificial-list-item-r-c">{{ from.name }}</view>
						<view class="iconfont icon-xiajiantou2"></view>
					</view>
				</view>
				<!-- 		<view class="artificial-list-item" @click="teacherConfirm">
					<view class="artificial-list-item-name">选择翻译老师</view>
					<view class="iconfont icon-xiajiantou2"></view>
				</view> -->
				<!-- 			<view class="artificial-list-item" @click="relationConfirm">
					<view class="artificial-list-item-name">选择联系方式</view>
					<view class="artificial-list-item-r">
						<text>{{from.contact}}</text>
						<view class="iconfont icon-xiajiantou2"></view>
					</view>
				</view> -->
				<view class="">
					<view class="artificial-list-input"><input type="text" v-model="from.phone" value="" :placeholder="translate.phoneVal" /></view>
					<view class="artificial-list-input"><input type="text" v-model="from.nickName" value="" :placeholder="translate.nameVal" /></view>
				</view>
				<!-- 选择翻译类型 -->
				<view class="artificial-list-item" @click="typeClick">
					<view class="artificial-list-item-name">{{translate.selectType}}</view>
					<view class="artificial-list-item-r">
						<text>{{ from.type }}</text>
						<view class="iconfont icon-xiajiantou2"></view>
					</view>
				</view>
				<!-- 选择预约翻译时间 -->
				<view class="artificial-list-item" @click="timeClick">
					<view class="artificial-list-item-name">{{translate.selectTime}}</view>
					<view class="artificial-list-item-r">
						<view class="artificial-list-item-r-c">
							<view class="artificial-list-item-r-c-l">{{ from.year }}</view>
							<view class="artificial-list-item-r-c-r">{{ from.time }}</view>
						</view>
						<view class="iconfont icon-xiajiantou2"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 立即预约 -->
		<view class="artificial-login" @click="successful" :class="{ activebg }">{{translate.ljappointment}}</view>

		<!-- 翻译语言 -->
		<view class="artificial-select">
			<template>
				<view>
					<u-popup v-model="languageShow" mode="bottom">
						<view class="language">
							<view class="language-title">
								<view class="language-title-l" @click="languageShow = false">{{$t('commonality.cancel')}}</view>
								<view class="language-title-c">{{translate.selectlanguage}}</view>
								<view class="language-title-r" @click="languageConfirm">{{$t('commonality.accomplish')}}</view>
							</view>
							<!-- <view class="language-c">
								<view class="language-c-l">{{ isCut ? langdefault : langSelect }}</view>
								<view class="iconfont icon-qiehuan-" @click="languageCut"></view>
								<view class="language-c-r">{{ isCut ? langSelect : langdefault }}</view>
							</view> -->
							<view class="language-list">
								<view class="language-list-name">{{translate.languageChoice}}</view>
								<view
									class="language-list-item"
									v-for="(item, index) in languageList"
									:key="index"
									@click="languageListClick(item, index)"
									:class="index == activeindex ? 'activeColor' : ''"
								>
									{{ item.name }}
								</view>
							</view>
						</view>
					</u-popup>
				</view>
			</template>
		</view>

		<!-- 老师 -->
		<view class="artificial-teacher">
			<template>
				<u-select v-model="teacherShow" confirm-color="#DB1F13" mode="single-column" title="请选择翻译老师" :list="teacherList" @confirm="teacherConfirm"></u-select>
			</template>
		</view>

		<!-- 联系方式 -->
		<view class="artificial-relation">
			<template>
				<u-select v-model="relationShow" confirm-color="#DB1F13" mode="single-column" title="请选择联系方式" :list="relationList" @confirm="relationConfirm"></u-select>
			</template>
		</view>

		<!-- 翻译类型 -->
		<view class="artificial-type">
			<template>
				<u-select v-model="typeShow" confirm-color="#DB1F13" mode="single-column" :title="translate.selectType" :list="typeList" @confirm="typeConfirm"></u-select>
			</template>
		</view>
		<!-- 时间显示 -->
		<view class="artificial-Time">
			<template>
				<view>
					<u-picker
						v-model="timeShow"
						mode="time"
						:params="params"
						:show-time-tag="false"
						@confirm="TimeConfirm"
						:title="translate.selectTime"
						confirm-color="#DB1F13"
						:confirm-text="translate.next"
					></u-picker>
				</view>
			</template>
		</view>
		<!-- 时间时分 -->
		<view class="artificial-Times">
			<template>
				<view><u-picker v-model="hourShow" :show-time-tag="false" mode="time" :params="timeParams" 
				@confirm="hourConfirm" :title="translate.selectTime" confirm-color="#DB1F13"></u-picker></view>
			</template>
		</view>
	</view>
</template>

<script>
import { getClassType, translationAdd } from '@/api/user.js';
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			languageShow: false,
			teacherShow: false,
			relationShow: false,
			typeShow: false,
			timeShow: false,
			hourShow: false,

			activeindex: 99,
			langSelect: '',
			langdefault: '语言',
			isCut: true,
			activebg: false,
			from: {
				// 点击完成玩英语
				name: '',
				// 联系方式
				// contact:'',
				phone: '',
				// 联系人名字
				nickName: '',
				// 翻译类型
				type: '',
				// 时间
				year: '',
				time: ''
			},

			languageList: [],
			relationList: [
				{
					value: '1',
					label: '微信'
				},
				{
					value: '2',
					label: '手机号'
				}
			],
			teacherList: [
				{
					value: '1',
					label: '李海霞'
				},
				{
					value: '2',
					label: '方慧斌'
				}
			],
			typeList: [
				{
					value: '1',
					label: '网咯口译'
				},
				{
					value: '2',
					label: '文件翻译'
				}
			],
			params: {
				year: true,
				month: true,
				day: true,
				hour: false,
				minute: false,
				second: false
			},
			timeParams: {
				year: false,
				month: false,
				day: false,
				hour: true,
				minute: true,
				second: false
			}
		};
	},
	watch: {
		from: {
			handler(val) {
				console.log('obj.a changed', val);
				if (val.name && val.phone && val.type && val.nickName && val.year) {
					this.activebg = true;
				}
			},
			deep: true
		}
	},
	onLoad() {
		this.getClassTypeData();
	},
	computed:{
	    translate(){
			return this.$t('translate')
		}
	},
	methods: {
		...mapMutations('user',['getartificialData']),
		async getClassTypeData() {
			let data = { token: uni.getStorageSync('token') };
			let res = await getClassType(data);
			this.languageList = res.data;
		},
		appointment(){
			uni.navigateTo({
				url:'/pages/user/myOrder/myOrder'
			})
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 翻译类型
		typeConfirm(e) {
			this.from.type = e[0].label;
		},
		typeClick() {
			this.typeShow = true;
		},
		timeClick() {
			this.timeShow = true;
		},
		// 年月日
		TimeConfirm(e) {
			console.log(e);
			this.from.year = `${e.year}.${e.month}.${e.day}`;
			this.hourShow = true;
		},
		// 时分
		hourConfirm(e) {
			console.log(e);
			this.from.time = `${e.hour}.${e.minute}`;
		},
		// 语言
		languageClick() {
			this.languageShow = true;
		},
		// 语言点击完成
		languageConfirm() {
			this.from.name = this.langSelect;
			this.languageShow = false;
		},
		teacherConfirm() {
			this.teacherShow = true;
		},
		relationConfirm(e) {
			this.relationShow = true;
			this.from.contact = e[0].label;
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
		async successful() {
			if (this.activebg) {
				let time = this.from.year + this.from.time;
				let type;
				if (this.from.type == '网咯口译') {
					type = 1;
				} else {
					type = 2;
				}
				let data = { token: uni.getStorageSync('token'), cate_id: this.cate_id, phone: this.from.phone, name: this.from.nickName, booking_time: time, type: type };
				let res = await translationAdd(data);
				if (res.code == 0) {
					this.getartificialData(this.from)
					uni.navigateTo({
						url: './successful'
					});
					
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
			}
		}
	}
};
</script>

<style lang="scss">
.activeColor {
	color: #da1f13 !important;
}
.activebg {
	background: #da1f13 !important;
	color: #fff !important;
}
.language {
	padding: 40rpx;
	&-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: 500;
		color: #656565;
		&-r {
			color: #da1f13;
		}
		&-c {
			font-size: 36rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
	}
	&-c {
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
		padding-top: 80rpx;
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
// .artificial-type {
/deep/.u-select__header__title {
	font-size: 36rpx;
	font-family: PingFang SC;
	// font-weight: bold;
	color: #333333;
}
// }
.artificial-Time {
	/deep/.u-picker__title {
		font-size: 36rpx;
		font-family: PingFang SC;
		// font-weight: bold;
		color: #333333;
	}
}
.artificial {
	&-c {
		padding: 0 40rpx;
	}
	&-list {
		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 0;
			border-bottom: 1rpx solid #eeeeee;
			&-name {
				padding-left: 20rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-r {
				display: flex;
				align-items: center;
				text {
					margin-right: 30rpx;
				}
				.icon-xiajiantou2 {
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				.icon-qiehuan- {
					padding: 0 10rpx;
					font-size: 30rpx;
				}
				&-c {
					display: flex;
					align-items: center;
					margin-right: 30rpx;
					&-l,
					&-r {
						padding-left: 10rpx;
						font-size: 24rpx;
					}
				}
			}

			.icon-xiajiantou2 {
				font-size: 32rpx;
			}
		}

		&-input {
			width: 100%;
			height: 80rpx;
			box-shadow: 0 0 6px 0 #d3d3d3;
			margin-top: 25rpx;

			border-radius: 10px;
			input {
				width: 100%;
				height: 100%;
				// display: block;
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				font-size: $fontSize - 6;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 80rpx;
			}

			input::-webkit-input-placeholder {
				color: #999999;
			}
			input::-moz-placeholder {
				/* Mozilla Firefox 19+ */
				color: #999999;
			}
			input:-moz-placeholder {
				/* Mozilla Firefox 4 to 18 */
				color: #999999;
			}
			input:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: #999999;
			}
		}
		&-input:nth-child(1) {
			margin-top: 0;
		}
	}

	&-login {
		margin: auto;
		margin-top: 60rpx;
		width: 600rpx;
		height: 98rpx;
		background: #eeeeee;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: $fontSize + 6;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333;

		// opacity: 0.5;
		// box-shadow: 2px 2px 1px 2px #999999;;
	}
}
</style>
