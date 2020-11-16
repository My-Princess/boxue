<template>
	<view>
		<view class="group-footer">
			<view class="group-footer-l">
				<view class="group-footer-l-jg">
					￥{{Price.money}}<text></text>
				</view>
				<view class="group-footer-l-xh" @click="mxBtn">
					<text>明细</text>
					<view class="iconfont icon-xiajiantou" v-if="icon"></view>
					<view class="iconfont icon-iconfonticontrianglecopy" v-if="!icon"></view>
				</view>
			</view>
			
			<view class="group-footer-r">
				<view class="group-footer-r-lbtn" @click="curriculumBtn">
					<text>立即购买</text>
					<text>￥{{Price.money}}</text>
				</view>
			<!-- 	<view class="group-footer-r-rbtn">
					<text>新开拼团</text>
					<text>￥5040</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			icon:{
				type:Boolean,
				default:true
			},
			Price:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			curriculumBtn(){
				this.$emit('curriculumBtn')
			},
			mxBtn(){
				this.$emit('mxBtn')
			}
		}
	}
</script>

<style lang="scss">
    .group-footer{
		padding: 0 40rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height:98rpx;
		background:rgba(255,255,255,1);
		box-shadow: 0 4px 7px 0 #333;
		&-l{
			display: flex;
			align-items: center;
			&-jg{
				font-size:$fontSize + 6;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(220,42,31,1);
			}
			&-xh{
				margin-left: 20rpx;
				display: flex;
				align-items: center;
				font-size:$fontSize - 8;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(220,42,31,1);
			}
		}
		&-r{
			display: flex;
			&-lbtn{
				margin-right: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width:160rpx;
				height:70rpx;
				background:rgba(220,42,31,1);
				border-radius:35px;
				
				font-size:$fontSize - 8;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				
			}
			&-rbtn{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				width:160rpx;
				height:70rpx;
				background:rgba(241,145,73,1);
				border-radius:35px;
				
				font-size:$fontSize - 8;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>
