<template>
	<view class="search-top">
		<view class="search-top-left">
		
			<input type="text" :placeholder="placeholder" v-model="searchval" @input="change"/>
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ss.png" mode="" @click="searchBtn"></image>
		</view>
		<view class="search-top-qx">
			<slot></slot>
			
		</view>
	</view>
</template>

<script>
	export default{
		
		props:{
			placeholder:{
				type:String,
				default: ''
			},
			value:{
				type:String,
				default:''
			}
		},
		watch:{
			value:{
				handler(val){
					console.log(val)
					this.searchval = val
				},
				immediate: true
			},
			// searchval:{
			// 	handler(val){
			// 		this.$emit('value',val)
			// 	},
			// 	immediate:true
			// },
			
		},
		
		data(){
			return{
				searchval:''
			}
		},
		mounted() {
			this.$emit('change','')
		},
		
		methods:{
			searchBtn(){
				this.$emit("searchBtn", this.searchval);
			},
			change(e){
				// console.log(e)
				this.$emit('change',e.detail.value)
			}
		}
	}
</script>

<style lang="less" scoped>
	.search-top {
		// position: fixed;
		// width: 100%;
		display: flex;
		justify-content: center;
		padding-top: 53rpx;
	
		&-left {
			display: flex;
			align-items: center;
			width: 595rpx;
			height: 60rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(238, 238, 238, 1);
			border-radius: 30rpx;
	
			image {
				display: block;
				width: 44rpx;
				height: 44rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
	
				/deep/img {
					width: 44rpx;
					height: 40rpx;
				}
			}
	
			input {
				padding-left: 40rpx;
				display: block;
				width: 100%;
				height: 100%;
	
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	
		&-qx {
			line-height: 60rpx;
			margin-left: 20rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
		}
	}
</style>
