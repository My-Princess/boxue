<template>
	<view class="postcomment">
		<Head title="发布帖子" @navigateBack="navigateBack">
			<template v-slot:right>
				<view class="" @click="send">发送</view>
			</template>
		</Head>
		<view class="postcomment-c">
			<view class="postcomment-c-model" @click="selectBtn">
				<view class="postcomment-c-model-info">{{label}}</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>
			<view class="postcomment-c-txt">
				<textarea v-model="content" class="postcomment-c-txt-txt" value="" placeholder="请输入您要说的内容，字数请控制在300字以内。" maxlength="300" />
			</view>
			<!-- 默认文本 -->
			<view class="postcomment-c-updata" @click="tipUpShow" v-if="updataShow">
				<view class="postcomment-c-updata-box"><view class="iconfont icon-jia"></view></view>
				<view class="postcomment-c-updata-tip">可上传图片和视频，图片上传不能超过9张，视频仅能上传一个不超过两分钟的视频。</view>
			</view>
			<!-- 图片 -->
			<view class="postcomment-c-imgupdata" v-if="imgShow">
				<template>
					<u-upload :action="action" :form-data="formData" @on-success="SuccessUpload" @on-remove="onRemove" :show-progress="false"></u-upload>
					<view class="postcomment-c-imgupdata-tip">图片上传不能超过9张</view>
				</template>
			</view>
			<!-- 视频 -->
			<view class="postcomment-c-videoupdata" v-if="videoShow">
				<easy-upload
					:dataList="imageList"
					:uploadUrl="action"
					:FormData="FormData"
					:types="category"
					:clearIcon="clearIcon"
					:uploadCount="1"
					@successVideo="successvideo"
					@remove="videoRemove"
				></easy-upload>
				<view class="postcomment-c-videoupdata-tip">
					可上传图片和视频，图片上传不能超过9张，视频仅能上传一 个不超过两分钟的视频。
				</view>
			</view>
		</view>
		<!-- 选择模块 -->
		<view class="postcomment-footer">
			<template>
				<u-select v-model="show" cancel-color="#999999" confirm-color="#DB1F13" title="选择板块" mode="single-column" :list="list" @confirm="confirm"></u-select>
			</template>
		</view>
		<!-- 选择图片视频上传 -->
		<view class="postcomment-show" >
			<u-popup v-model="upShow" mode="bottom">
				<view class="postcomment-show-box">
					<view class="postcomment-show-box-item" @click="tipimgShow">图片</view>
					<view class="postcomment-show-box-item" @click="tipvideoShow">视频</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
import { tieType, tieCreate } from '@/api/community.js';
export default {
	data() {
		return {
			// http://ceshi.xiaoyuzhong123.com
			label:'选择模块',
			action: '/api/tie/upload',
			show: false,
			upShow: false,
			updataShow: true,
			// 图片上传显示
			imgShow: false,
			// 视频上传显示
			videoShow:false,
			// 视频删除图片
			clearIcon: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/qixiao.png',
			// 图片上传参数
			formData: { token: uni.getStorageSync('token'), type: 1 },
			// 视频上传参数
			FormData: { token: uni.getStorageSync('token'), type: 2 },
			typeId: '', // tab 的id
			content: '',
			list: [],
			imgFiles: [],
			// 图片、视频数据展示
			imageList:[],
			// 上传类型
			category:'video',
		};
	},
	async onLoad() {
		let res = await tieType();
		let itemArr = [];
		res.data.map(item => {
			itemArr.push({
				id: item.id,
				value: item.id,
				label: item.name
			});
		});
		this.list = itemArr;
		console.log(this.list);
	},
	methods: {
		selectBtn() {
			this.show = true;
		},
		// 选择模块确认
		confirm(e) {
			console.log('确认', e);
			this.typeId = e[0].value;
			this.label = e[0].label
		},
		navigateBack() {
			uni.switchTab({
				url: '../index/community'
			});
		},
		// 信息上传
		send() {
			let Files
			if(this.imgFiles.length){
				Files = JSON.stringify(this.imgFiles);
			}else{
				Files = this.imgFiles
			}
			
			let data = { token: uni.getStorageSync('token'), typeId: this.typeId, content: this.content, isDraft: '0', files: Files };
			console.log(data);
			tieCreate(data).then(res => {
				console.log(res);
				if(res.code == 0){
					uni.showToast({
						title:'发布成功',
						icon:'none'
					})
					uni.switchTab({
						url:'/pages/index/community'
					})
				
				
				}else{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				}
			});
		},
		// 选择图片视频
		tipUpShow() {
			this.upShow = true;
		},
		// 显示上传图片
		tipimgShow() {
			// 选择
			this.upShow = false;
			// 默认
			this.updataShow = false;
			this.imgShow = true;
		},
		// 显示上传视频
		tipvideoShow(){
			// 选择
			this.upShow = false;
			// 默认
			this.updataShow = false;
			this.videoShow = true;
		},
		// 图片上传成功回调
		SuccessUpload(e) {
			console.log('成功回调', e);
			// let success = JSON.parse(e.data)
			let obj = {
				type: 1,
				file: e.data.urlRoot
			};
			this.imgFiles.push(obj);
		},
		// 删除图片上传回调
		onRemove(index){
			console.log('删除',index)
			this.imgFiles.splice(index,1)
			console.log(this.imgFiles)
		},
		// 视频上传成功回调
		successvideo(e){
			let success = JSON.parse(e.data)
			console.log(success)
			let obj = {
				type: 2,
				file: success.data.urlRoot
			};
			this.imgFiles.push(obj);
		},
		// 删除视频上传回调
		videoRemove(index){
			console.log(index)
			this.imgFiles.splice(index,1)
			console.log(this.imgFiles)
		}

	}
};
</script>

<style lang="scss">
/deep/.integral-top-r {
	font-size: $fontSize;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(153, 153, 153, 1);
	// color: red;
}
.postcomment {
	&-footer {
		/deep/.u-select__header__title {
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		/deep/.u-select__header__btn {
			font-size: $fontSize;
		}
		/deep/.uni-picker-view-wrapper {
			margin-top: -140rpx;
		}
	}
	&-c {
		padding: 0 40rpx;
		&-model {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&-info {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(219, 31, 19, 1);
			}
			.icon-youjiantou1 {
			}
		}
		&-txt {
			margin-top: 45rpx;
			width: 100%;
			height: 280rpx;
			&-txt {
				width: 100%;
				height: 100%;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			textarea::-webkit-textarea-placeholder {
				color: #999999;
			}
			textarea::-moz-placeholder {
				/* Mozilla Firefox 19+ */
				color: #999999;
			}
			textarea:-moz-placeholder {
				/* Mozilla Firefox 4 to 18 */
				color: #999999;
			}
			textarea:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: #999999;
			}
		}
		&-imgupdata {
			/deep/.u-add-tips {
				display: none;
			}
			/deep/.u-delete-icon {
				background: #c1b0a7 !important;
			}
			/deep/.u-delete-icon {
				position: absolute;
				top: 0;
				right: 0;
			}
			/deep/.u-list-item {
				margin-left: 0;
			}
			&-tip {
				margin-top: 10rpx;
				font-size: $fontSize - 2;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
		&-updata {
			&-box {
				width: 132rpx;
				height: 132rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #f4f5f6;
				.icon-jia {
					font-size: 30rpx;
				}
			}
			&-tip {
				font-size: $fontSize - 6;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
	    &-videoupdata{
			/deep/.uploader-input-box{
				width: 410rpx;
				height: 260rpx;	
			}
			/deep/.uplode-file{
				width: 410rpx;
				height: 260rpx;
			}
			/deep/.uploade-img{
				width: 100%;
				height: 100%;
			}
			&-tip{
				font-size: $fontSize - 6;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
	}
	&-show {
		&-box {
			padding: 20rpx 0rpx 0 0rpx;
			&-item {
				display: flex;
				justify-content: center;
				padding: 30rpx 0;
				border-bottom: 1rpx solid #ccc;
			}
			&-item:last-child {
				border-bottom: none;
			}
		}
	}
}
</style>
