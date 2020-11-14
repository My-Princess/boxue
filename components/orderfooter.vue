<template>
	<view class="orderfooter">
		<view class="orderfooter-left">
			<slot name="left"></slot>
			<!-- <text>合计:</text>
			<text>100000积分</text> -->
		</view>
		<view class="orderfooter-right" :style="'height:'+height+';border-radius:'+borderRadius" @click="footer">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:String,
			borderRadius:{
				type:String,
				default:'0'
			},
			height:{
				type:String,
				default:'90rpx'
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			footer(){
				this.$emit('footerBtn')
			}
		}
	}
</script>

<style lang="less" scoped>
	.orderfooter{
	
		position: fixed;
		left: 0;
		bottom: 0;
		height:98rpx;
		background:rgba(255,255,255,1);
		box-shadow: 0px 2px 3px 0 #fff;
		width: 100%;
		// width: 100vw
		box-sizing: border-box;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 99;
		&-left{

			
		}
		&-right{
			display: flex;
			justify-content: center;
			align-items: center;
			width:180rpx;
			// height:70rpx;
			background:rgba(220,42,31,1);
			// border-radius:35px;
			
			
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
	}
</style>
