<template>
	<view>
		<view class="user-box-user">
			<image :src="userInfo.headImg || defaultimg" mode=""></image>
			<view class="user-box-user-r">
				<view class="user-box-user-r-name hidden" :style="'color:'+colorName">{{userInfo.nickname}}</view>
				<view class="user-box-user-r-txt hidden" :style="'color:'+colorTxt">{{userInfo.signature}}</view>
				<view class="user-box-user-r-medal">
					<!-- <view class="user-box-user-r-medal-item">
						<image src="../../static/img/中级学者.png" mode=""></image>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		props:{
			colorName:{
				type:String,
				default:'#FFFFFF'
			},
			colorTxt:{
				type:String,
				default:'#EBDCDC'
			},
			userInfo:{
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
		computed:{
			...mapState('index',['defaultimg'])
		}
	}
</script>

<style lang="scss">
			.user-box-user {
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
						// color: ;
					}
					&-txt {
						width: 348rpx;
						font-size: $fontSize - 4;
						font-weight: 500;
						// color: ;
					}
					&-medal{
						display: flex;
						margin-top: 16rpx;
						&-item{
							margin-right: 18rpx;
							width: 42rpx;
							height: 40rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
</style>
