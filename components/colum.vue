<template>
	<view class="index-item">
		<view class="index-item-title">
			{{$t("index.introductory")}}
		</view>
		<view class="index-item-box" >
			<view class="index-item-box-info" v-for="(item,index) in basicsList" :key="index" @click="videoSkip(item.id)">
				<image class="hhh" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/zs.png" mode=""></image>
				<view class="index-item-box-info-centent">
					<text>{{item.name}}</text>
					<span>￥ {{item.money}}</span>
				</view>
				<view class="index-item-box-info-text">
					{{item.description }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	
	export default{
		
		props:{
			basicsList: { 
				type: Array,
				default: ()=> {
					return []
				}
			}
		},
		data(){
			return{
				
			}
		},
		onLoad() {
		
		},
		methods:{
			videoSkip(id){
				uni.navigateTo({
					url:`/pages/study/videoviewing?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.index-item {
		padding: 0 41rpx 56rpx 40rpx;

		&-title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 25rpx;
		}

		&-box {
			display: flex;
			flex-wrap: wrap;


			&-info {
				image {
					width: 325rpx;
					height: 193rpx;
					background: rgba(238, 238, 238, 1);
					border-radius: 10px;
					vertical-align: bottom;
				}


				&-centent {
					width: 325rpx;
					display: flex;
					justify-content: space-between;

					padding: 22rpx 0 15rpx;

					text {
						width: 180rpx;

						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: rgba(51, 51, 51, 1);

						white-space: nowrap;
						/* 规定文本是否折行 */
						overflow: hidden;
						/* 规定超出内容宽度的元素隐藏 */
						text-overflow: ellipsis;
					}

					span {


						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(255, 44, 80, 1);
					}
				}

				&-text {
					padding-bottom: 38rpx;
					width: 295rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);

					white-space: nowrap;
					/* 规定文本是否折行 */
					overflow: hidden;
					/* 规定超出内容宽度的元素隐藏 */
					text-overflow: ellipsis;
				}


			}

			&-info:nth-child(2n) {
				margin-left: 19rpx;
			}

			&-info:nth-child(n+3) &-info-text {
				padding-bottom: 40rpx;
				// background: red;
			}
		}
	}
</style>
