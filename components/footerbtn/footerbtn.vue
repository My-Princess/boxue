<template>
	<view class="footerbtn" :style="'background:'+background+';font-size:'+fontSize+';color:'+color" @click="preserve">
		{{footername}}
	</view>
</template>

<script>
	export default{
		props:{
			footername:{
				type:String,
				default:'请填写'
			},
			fontSize:{
				type:String,
				default:'36rpx'
			},
			background:{
				type:String,
				default:'#DC2A1F'
			},
			color:{
				type:String,
				default:'#FFFFFF'
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			preserve(){
				this.$emit('preserve')
			}
		}
	}
</script>

<style lang="less" scoped>
	.footerbtn{
		margin-top: 98rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height:98rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		// background:rgba(220,42,31,1);
		// font-size:36rpx;
		font-family:PingFang SC;
		// font-weight:bold;
		// color:rgba(255,255,255,1);
	}
</style>
