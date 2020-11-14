<template>
	<view class="collapse-box">
		<view class="mistakes-concent-box">
			<view class="mistakes-concent-box-t">
				<view class="mistakes-concent-box-title" @click="titleBtn">
					<slot name="title"></slot>
					<view class="iconfont" :class="isjiantou ? 'icon-jiantou9' : 'icon-shangjiantou2'"></view>
				</view>
			</view>

			<view class="mistakes-concent-box-body" v-if="isjiantou">
				<view class="mistakes-concent-box-body-item" v-for="(item,index) in Errordelaut.questions" :key="index" @click="Wrongdetails(item)">
					<view class="mistakes-concent-box-body-item-name">{{item.subject_name}}</view>
					<view class="mistakes-concent-box-body-item-pl">99分</view>
					<view class="iconfont icon-iconfontjiantou5"></view>
				</view>
			
			</view>
			<view class="mistakes-concent-box-line"></view>
			<view class="mistakes-concent-box-footer">
				<view class="mistakes-concent-box-footer-qbcz" @click="AllReset">全部重做</view>
				<!-- <view class="mistakes-concent-box-footer-cxct" @click="anNewError">重新错题</view> -->
			</view>
		</view>
	</view>
</template>

<script>
/**
 * timeLineItem 时间轴Item
 * @description 时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。(搭配u-time-line使用)
 * @tutorial https://www.uviewui.com/components/timeLine.html
 * @property {String} bg-color 左边节点的背景颜色，一般通过slot内容自定义背景颜色即可（默认#ffffff）
 * @property {String Number} node-top 节点左边图标绝对定位的top值，单位rpx
 * @example <u-time-line-item node-top="2">...</u-time-line-item>
 */
import { mapMutations } from 'vuex';
export default {
	props: {
		value: {
			type: Boolean,
			default:false
		},
		Errordelaut:{
			type:Object,
			default:()=>{
				return {}
			}
		}
	},
	data() {
		return {
			isjiantou: false
		};
	},
	watch:{
		
	},
	mounted() {
		this.isjiantou = this.value
	},
	computed: {},
	methods: {
		...mapMutations('study', ['changeTopic', 'changeAnswerId', 'changeClassId', 'changeanswerIndex']),
		Wrongdetails(e) {
			let id = e.id
			let subject_name = e.subject_name
			uni.navigateTo({
				url: `/pages/questionbank/wrongdetails?class_iid=${id}&name=${subject_name}`
			});
		},
		titleBtn(){
			this.isjiantou = !this.isjiantou
			// this.value = !this.value
		},
		// 全部重做
		AllReset(){
			this.changeTopic(this.Errordelaut.questions);
			this.changeAnswerId(this.Errordelaut.questions[0].id);
			this.changeClassId(this.Errordelaut.questions[0].class_iid);
			this.changeanswerIndex(0);
			uni.navigateTo({
				url: `./topic`
			});
		},
		// 重新错题
		anNewError(){
			
		},
		
	}
};
</script>

<style lang="scss" scoped>
.mistakes-concent-box {
	// margin-left: 40rpx;
	margin-bottom: 30rpx;
	padding: 0 40rpx;
	box-shadow: 0 0 8px 0 #eeeeee;
	border-radius: 10px;
	.mistakes-concent-box-title {

		display: flex;
		align-items: center;
		justify-content: space-between;
		.icon-jiantou9 {
			font-size: 44rpx;
		}
	}
	&-body {
		&-item {
			position: relative;
			margin-left: 15rpx;
			display: flex;
			align-items: center;
			padding: 30rpx 0;
			padding-left: 45rpx;
			border-left: 1rpx solid #eeeeee;
			// border-bottom: 1rpx solid #EEEEEE;

			&-name {
				flex: 1;
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				// border-bottom: 1rpx solid #EEEEEE;
			}
			&-pl {
				font-size: $fontSize - 4;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(219, 122, 19, 1);
				margin-right: 32rpx;
			}
			.icon-zuojiantou {
				font-size: 34rpx;
			}
		}
		&-item:nth-child(1) {
			padding-top: 0;
		}
		&-item:last-child {
			padding-bottom: 0;
			margin-bottom: 30rpx;
		}
		&-item:last-child:after {
			height: 0;
		}
		&-item::before {
			content: '';
			position: absolute;
			left: 0rpx;
			transform: translateX(-50%);
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			background: rgba(255, 255, 255, 1);
			border: 2rpx solid rgba(238, 238, 238, 1);
		}
		&-item:after {
			content: '';
			position: absolute;
			// top: 19rpx;
			bottom: 0;
			// width:550rpx;
			width: 90%;
			height: 1rpx;
			background: rgba(238, 238, 238, 1);
		}
	}
	&-line {
		width: 100%;
		height: 1rpx;
		background: #eeeeee;
	}
	&-footer {
		display: flex;
		justify-content: flex-end;
		// margin-top: 30rpx;
		padding: 30rpx 0;

		&-qbcz {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 30rpx;
			width: 160rpx;
			height: 60rpx;
			background: linear-gradient(-21deg, rgba(0, 188, 137, 1) 0%, rgba(83, 208, 174, 1) 100%);
			border-radius: 30px;

			font-size: $fontSize -2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
		&-cxct {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 160rpx;
			height: 60rpx;
			background: linear-gradient(-21deg, rgba(255, 79, 66, 1) 0%, rgba(255, 122, 112, 1) 100%);
			border-radius: 30px;

			font-size: $fontSize -2;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
