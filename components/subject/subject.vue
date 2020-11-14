<template>
	<view class="subject">
		<view class="topic-concent">
			<text class="topic-concent-title">{{ name }}</text>
			<view class="topic-concent-subject">
				<text>{{Index + 1}}、</text>
				<text>{{ ExercisessContent.question }}</text>
			</view>
			<view class="topic-concent-concent">
				<view class="topic-concent-concent-item" v-for="(v, i) in ExercisessContent.selectdata" :key="i" @click="tapAnswer(i, v)">
					<view class="topic-concent-concent-item-number" :class="i == ied ? selectBackground : 'Background'">{{ v.key }}</view>
					<view class="topic-concent-concent-item-txt">{{ v.value }}</view>
				</view>
			</view>
			<view class="topic-concent-analysis" v-if="!iSthrottle">
				答案解析：
				<text>{{ ExercisessContent.describe }}</text>
			</view>
			<view class="topic-concent-correct" v-if="iScorrect" :class="Count >= 2 ? 'maxcount': '' ">{{Count >= 2 ? `${Count}连对`  : '恭喜你答对了！'}}</view>
			<view class="topic-concent-error" v-if="iserror">正确答案:{{ this.ExercisessContent.answer }}</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	props: {
		ExercisessContent: {
			type: Object,
			default: () => {
				return {};
			}
		},
		Count:{
			type:[Number,String],
			default:0
		},
		Index:{
			type:[Number,String],
			default:1
		},
		name:{
			type:String,
			default:''
		}
	},

	data() {
		return {
			ied: 4,
		
			// 答题是否正确
			iScorrect: false,
			iserror: false,
			// 答题正确背景
			correctBackground: false,
			// 答题错误背景
			errorBackground: false,
			selectBackground: '',
			iSthrottle: true,
			
		};
	},
	created() {
		
	},
	computed: {
		// ...mapState('study', ['collectClassId', 'collectData'])
	},
	methods: {
		// 选中的答案
		tapAnswer(i, v) {
			if (this.iSthrottle) {
			
				this.ied = i;
				
				if (this.ExercisessContent.answer == v.key) {
					this.iScorrect = true;
					this.selectBackground = 'correctBackground';
				
					// console.log('连队呀',this.count)
					// this.MaxCount = this.toChinesNum(this.count)
				} else {
					
					this.iserror = true;
					this.selectBackground = 'errorBackground';
					this.count == 0
				}
				this.iSthrottle = false;
				// 点击了答题，正确， 错误 
				this.$emit('istouch', true, this.iScorrect, this.iserror);
			}
		},
		// 数字转大写
		toChinesNum(num) {
			let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
			let unit = ['', '十', '百', '千', '万'];
			num = parseInt(num);
			let getWan = temp => {
				let strArr = temp
					.toString()
					.split('')
					.reverse();
				let newNum = '';
				for (var i = 0; i < strArr.length; i++) {
					newNum =
						(i == 0 && strArr[i] == 0 ? '' : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? '' : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) + newNum;
				}
				return newNum;
			};
			let overWan = Math.floor(num / 10000);
			let noWan = num % 10000;
			if (noWan.toString().length < 4) noWan = '0' + noWan;
			return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num);
		}
	}
};
</script>

<style lang="scss" scoped>
	.maxcount{
		
		font-size: 60rpx !important;
		font-family: PingFang SC;
		font-weight: bold;
		font-style: italic;
		color: #DB7A13 !important;
	}
.Background {
	background: '#FFFFFF';
	color: '#333';
}
.errorBackground {
	background: #dc2014 !important;
	color: #ffffff;
}
.correctBackground {
	background: #00b281 !important;
	color: #ffffff;
}
.topic-concent {
	padding-left: 40rpx;
	&-title {
		display: block;
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	&-subject {
		margin-right: 52rpx;
		padding-top: 40rpx;
		display: flex;

		text {
			// display: block;
			display: block;
			font-size: $fontSize + 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
	}
	&-concent {
		margin-bottom: 100rpx;
		&-item {
			margin-top: 60rpx;
			display: flex;
			&-number {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 42rpx;
				height: 42rpx;
				// background:rgba(255,255,255,1);
				border-radius: 21px;

				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: bold;
				box-shadow: 0 2px 4px 0 #eeeeee;
				// color:rgba(51,51,51,1);
			}
			&-txt {
				margin-left: 12rpx;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
	&-correct {
		font-size: $fontSize + 30;
		font-family: PingFang SC;
		// font-weight:bold;
		font-style: italic;
		color: rgba(23, 183, 139, 1);
	}
	&-error {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #343434;
	}
	&-analysis {
		font-size: 30rpx;
		font-family: PingFang SC;
		color: #666;
		padding-bottom: 30rpx;
	}
}
</style>
