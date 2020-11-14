<template>
	<view class="teacherDetail">
		<view class="teacherDetail-box">
			<Head title="我的老师" @navigateBack="navigateBack"></Head>
			<view class="teacherDetail-box-info">
				<image :src="`https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/${TeacherInfo.image}`" mode=""></image>
				<view class="teacherDetail-box-info-name">{{TeacherInfo.name}}</view>
				<view class="teacherDetail-box-info-txt">
					<rich-text :nodes="TeacherInfo.content"></rich-text>
				</view>
			</view>
		</view>
		<view class="teacherDetail-item">
			<view class="teacherDetail-item-l">您是第{{period}}期{{class_name}}学员</view>
			<view class="teacherDetail-item-r" @click="getUpdateClass" :class="status ? 'UpdateClass' : ''">
			{{statusVal}}
			</view>
		</view>
		<view class="teacherDetail-comment">
			<view class="teacherDetail-comment-name">
				我的评论
			</view>
			<view class="teacherDetail-comment-c" v-if="TeacherList.length">
				<view class="teacherDetail-comment-c-item" v-for="(item,index) in TeacherList" :key="item.id">
					<view class="teacherDetail-comment-c-item-txt">
						{{item.content}}                           
					</view>
					<view class="teacherDetail-comment-c-item-time">
						{{item.create_time}}
					</view>
				</view>
			</view>
			<view class="teacherDetail-comment-wu" v-if="false">
				暂无评价
			</view>
		</view>
	
	    <footerbtn footername="评价老师" @preserve="preserve"></footerbtn>
	</view>
</template>

<script>
	import {getCalssTeachDetail,updateClass} from '@/api/user.js'
export default {
	data() {
		return {
			teach_id:'',
			class_time_id:'',
			period:'',
			status:'',
			statusVal:'',
			
			TeacherInfo:{},
			TeacherList:[]
		};
	},
	onLoad(options) {
		this.teach_id = options.teach_id;
		this.class_time_id = options.class_time_id;
		this.order_class_id = options.order_class_id;
		this.order_id = options.order_id;
		this.class_name = options.class_name;
		this.getTeacherInfo()
	},
	onShow() {
		if(this.status == 1){
			this.statusVal = '审核中' 
		}else if(this.status == 2){
			this.statusVal = '调班成功'
		}else if(this.status == 3){
			this.statusVal = '调班失败'
		}else{
			this.statusVal = '申请调班'
		}
	},
	methods:{
		preserve(){
			uni.navigateTo({
				url:`./teacherComment?teach_id=${this.teach_id}&order_class_id=${this.order_class_id}`
			})
		},
		
		async getTeacherInfo(){
			let data = {token:uni.getStorageSync('token'),teach_id:this.teach_id,class_time_id:this.class_time_id}
			let res = await getCalssTeachDetail(data)
			console.log(res)
			this.TeacherInfo = res.data.teach
			this.TeacherList = res.data.list
			this.period = res.data.period
			this.status = res.data.status
		},
		// 申请调班
		async getUpdateClass(){
			let data = {token:uni.getStorageSync('token'),teach_id:this.teach_id,class_time_id:this.class_time_id,order_class_id:this.order_class_id,order_id:this.order_id}
		     let res = await updateClass(data)
			 console.log(res)
		},
		navigateBack(){
			uni.navigateBack()
		}
	}
};
</script>

<style lang="scss">
	.UpdateClass{
		background: #eeeeee !important;
		color: #a4a4a4 !important;
	}
/deep/.integral-top {
	color: #ffffff !important;
}
/deep/ .integral-top-title {
	color: #ffffff !important;
}
.teacherDetail-comment{
	padding: 30rpx 40rpx 100rpx;
	&-name{
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	&-c{
		&-item{
		padding-top: 30rpx;
		padding-bottom: 18rpx;
		border-bottom: 1rpx solid #EEEEEE;
			&-txt{
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			&-time{
				text-align: right;
				font-size: $fontSize - 6;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
	}
	&-wu{
		margin-top: 40rpx;
			text-align: center;
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
	}
	
}
.teacherDetail-item {
	margin: 0 40rpx;
	padding: 30rpx 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #EEEEEE;
	&-l {
		font-size: $fontSize;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	&-r {
		width: 132rpx;
		height: 52rpx;
		background: -moz-linear-gradient(top, #fc725c 0%, #de2518 100%);
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fc725c), color-stop(100%, #de2518));
		background: -webkit-linear-gradient(top, #fc725c 0%, #de2518 100%);
		background: -o-linear-gradient(top, #fc725c 0%, #de2518 100%);
		background: -ms-linear-gradient(top, #fc725c 0%, #de2518 100%);
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff7f7;
		font-size: $fontSize - 4;
	}
}
.teacherDetail-box {
	background: linear-gradient(-31deg, #db1f13 0%, #ff765f 100%);
	&-info {
		padding: 0 40rpx;
		padding-bottom: 50rpx;
		image {
			margin: 0 auto;
			border-radius: 50%;
			display: block;
			width: 120rpx;
			height: 120rpx;
		}
		&-name {
			padding-top: 30rpx;
			padding-bottom: 24rpx;
			text-align: center;
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: #ffffff;
		}
		&-txt {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: 500;
			color: #eeeeee;
		}
	}
}
</style>
