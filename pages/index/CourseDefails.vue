<template>
	<view class="CourseDefails">
		<Head :title="courseTitle" @navigateBack="navigateBack"></Head>
		<view class="text-area">
			<view class="index-item-box">
				<view class="index-item-box-info" v-for="item in courseList" :key="item.id" @click="HomeSkip(item.class_id)">
					<image class="hhh" :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${item.video_img}`" mode=""></image>
					<view class="index-item-box-info-centent">
						<text>{{ item.name }}</text>
						<span>￥ {{ item.money }}</span>
					</view>
					<view class="index-item-box-info-text">{{ item.description }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState('index',['courseList','courseTitle']),
		},
		methods: {
			navigateBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.text-area{
		padding: 0 40rpx;
	}
	.index-item-box {
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
					width: 190rpx;

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
				font-size: $fontSize - 8;
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

		&-info:nth-child(n + 3) &-info-text {
			padding-bottom: 40rpx;
			// background: red;
		}
	}
</style>
