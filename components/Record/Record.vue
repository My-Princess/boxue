<template>
	<view class="Record">
		<view class="dhrecord-info" v-if="record.length">
			<view class="dhrecord-info-item" v-for="(item, i) in record" :key="i" @click="recoredDetail(item)">
				<view class="dhrecord-info-item-left">
					<view class="dhrecord-info-item-left-t">{{ item.name }}</view>
					<view class="dhrecord-info-item-left-b">
						<text>{{ item.create_time | formatDate }}</text>
						<!-- <text>17:35</text> -->
					</view>
				</view>
				<view class="dhrecord-info-item-right">{{ item.status }}</view>
			</view>
		
			<!-- <view class="dhrecord-footer">已没有更多兑换记录</view> -->
		</view>
		<view class="dhrecord-info1" v-else>您暂无兑换记录</view>
	</view>
</template>

<script>
	import dateFormat from '@/util/Date.js'
	export default {
		props:{
			record:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			recoredDetail(e){
				this.$emit('click',e)
			}
		},
		filters: {
			formatDate(time) {
				let date = new Date(time * 1000);
		
				return dateFormat.formatDate(date, 'yyyy/MM/dd  hh:mm');
			}
		},
	}
</script>

<style lang="scss">
	.dhrecord-footer {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	
		padding: 60rpx 0;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
	.dhrecord-info1 {
		margin-top: 185rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
	.dhrecord-info {
		padding: 20rpx 40rpx 0;

		&-item:first-child {
			padding-top: 0;
		}
		&-item {
			padding-top: 40rpx;
			padding-bottom: 28rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid #eeeeee;
			&-left {
				&-t {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);

					overflow: hidden;
					display: flex;
					white-space: nowrap;
					// line-height:40px;
				}
				&-b {
					text {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}
				}
			}
			&-right {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
