<template>
	<view class="myteacher">
		<Head :title="user.myteacher" @navigateBack="navigateBack"></Head>
		<view class="myteacher-c" v-if="TeacherList.length">
			<view class="myteacher-c-item"  v-for="(item,index) in TeacherList" :key="index" @click="teacherDetail(item)">
				<image :src="item.image" mode=""></image>
				<view class="myteacher-c-item-c">
					<view class="myteacher-c-item-c-name">
						{{item.name}}
					</view>
					<view class="myteacher-c-item-c-txt">
						{{item.class_name}}
					</view>
				</view>
				<view class="myteacher-c-item-btn">
					查看
				</view>
			</view>
		</view>
		<view class="blank" v-else>
			{{commonality.applytip}}
		</view>
	</view>
</template>

<script>
	import { getCalssTeach } from '@/api/user.js'
	export default {
		data() {
			return {
				page:1,
				TeacherList:[]
			};
		},
		onLoad() {
			this.getTeacherList()
		},
		computed:{
			user(){
				return this.$t('user')
			},
			commonality(){
				return this.$t('applytip')
			}
		},
		methods:{
			teacherDetail(e){
				let teach_id = e.teach_id;
				let class_time_id = e.class_time_id;
				let order_class_id = e.order_class_id
				let order_id = e.order_id
				let class_name = e.class_name
				uni.navigateTo({
					url:`./myTeacher/teacherDetail?teach_id=${teach_id}&class_time_id=${class_time_id}&order_class_id=${order_class_id}&order_id=${order_id}&class_name=${class_name}`
				})
			},
			async getTeacherList(){
				let data = {token:uni.getStorageSync('token'), page:this.page}
				let res = await getCalssTeach(data)
				console.log(res)
				this.TeacherList = res.data.list
			},
			navigateBack() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.blank{
		font-size: 28rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
.myteacher{
	&-c{
		padding: 0 40rpx;
		&-item:nth-child(1){
			padding-top: 0;
		}
		&-item{
			padding: 30rpx 0;
			border-bottom: 1rpx solid #EEEEEE;
			display: flex;
			align-items: center;
			image{
				display: block;
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
			&-c{
				margin-left: 20rpx;
				flex: 1;
				&-name{
					font-size: $fontSize - 2;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				&-txt{
					
					font-size: $fontSize - 6;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
			}
			&-btn{
				font-size: $fontSize - 4;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}

		
	}
}
</style>
