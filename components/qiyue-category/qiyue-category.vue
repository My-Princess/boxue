<template>
	<view>
		<view class="nav">
			<view class="nav-left">
				<scroll-view scroll-y :style="'height:' + height + 'px'">
					<view
						class="nav-left-item"
						v-for="(item, index) in categoryList"
						@click="categoryClickMain(item, index)"
						:key="index"
						:style="index == categoryActive ? 'color:' + activeTextColor + ';background-color:' + activeBackgroundColor + ';font-weight:' + fontWeight : ''"
					>
						{{ item[label] }}
					</view>
				</scroll-view>
			</view>
			<view class="nav-right">
				<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:' + height + 'px'" scroll-with-animation>
					<view class="" v-if="subCategoryList.length">
						<view class="nav-right-item" v-for="(item, index2) in subCategoryList" :key="index2" @click="categoryClickSub(item, index2)">
							<!-- <view class="nav-right-item-img"> -->
							   <image :src="`${img}${item.image}` || defaultImg" mode="aspectFill" />
							<!-- </view> -->
							<view class="nav-right-item-text">
								<!-- <text>{{item[label]}}</text> -->
								{{ item[label] }}
								<text class="nav-right-item-text-pice">{{ item.money }}</text>
							</view>
						</view>
					</view>
					<view class="blank" v-else>
						该课程还没有内容
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
export default {
	name: 'category',
	data() {
		return {
			height: 0,
			scrollTop: 0,
			scrollHeight: 0,
			categoryActive: 0,
			activeStyle: {
				color: this.activeTextColor,
				backgroundColor: this.activeBackgroundColor
			}
		};
	},
	props: {
		//主分类激活索引
		defaultActive: {
			type: Number,
			default: 0
		},
		//主分类List
		categoryList: {
			type: Array,
			default: () => {
				return null;
			}
		},
		//侧边分类List
		subCategoryList: {
			type: Array,
			default: () => {
				return null;
			}
		},
		activeTextColor: {
			type: String,
			default: '#F24544'
		},

		fontWeight: {
			type: String,
			default: 'bold'
		},
		activeBackgroundColor: {
			type: String,
			default: '#e5e5e5'
		},
		label: {
			type: String,
			default: 'name'
		},
		imgSrc: {
			type: String,
			default: 'image'
		},
		//主分类点击事件
		categoryMainClick: {},
		//子分类点击事件
		categorySubClick: {}
	},
	methods: {
		scroll(e) {
			this.scrollHeight = e.detail.scrollHeight;
		},
		categoryClickMain(category, index) {
			this.$emit('categoryMainClick', category, index);
			this.categoryActive = index;
			this.scrollTop = -this.scrollHeight * index;
		},
		categoryClickSub(category, index2) {
			this.$emit('categorySubClick', category, index2);
		}
	},
	computed:{
		...mapState('index',['img'])
	},
	mounted() {
		this.categoryActive = this.defaultActive;
		uni.getSystemInfo({
			success: res => {
				console.log('res', res);
				this.height = res.screenHeight - 128;
			}
		});
	},
	watch: {
		subCategoryList(newValue, oldValue) {}
	}
};
</script>

<style scoped>
	.blank{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-size: 26rpx;
		/* text-align: center; */
		
	}
.nav {
	display: flex;
	width: 100%;
}

.nav-left {
	/* width: 30%; */
	width: 262rpx;
	background: #eeeeee;
}

.nav-left-item {
	height: 91rpx;
	padding-left: 30rpx;
	/* border-right: solid 1px #E0E0E0; */
	/* border-bottom: solid 1px #E0E0E0; */

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(153, 153, 153, 1);
}

.nav-right {
	width: 70%;
	padding-top: 20px;
	padding-left: 20rpx;
}
/* .nav-right-item:first-child{
	margin-bottom: 0;
} */
.nav-right-item {
	/* width: 28%; */
	/* height: 100px; */
	margin-bottom: 20rpx;
	float: left;
	text-align: center;
	box-shadow: 0 2px 1px 0 #eee;
	/* padding: 5px; */
	border-radius: 10px;
}
.nav-right-item-text {
	padding-top: 38rpx;
	padding-bottom: 20rpx;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
}
.nav-right-item-text-pice {
	font-size: 48rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(219, 31, 19, 1);
}
.nav-right-item-img{
	width: 428rpx;
	height: 200rpx;
	    overflow: hidden;
	    /* justify-self: center; */
	    /* object-fit: cover; */
}
.nav-right-item image {
	display: block;
	width: 428rpx;
	height: 200rpx;
	background: rgba(153, 153, 153, 1);
	border-radius: 10px;
/* 	object-fit: cover; */
	/* justify-self: center; */
	  /* width: auto;
	  height: auto;
	  max-width: 100%;
	      max-height: 100%; */
	  /* height: 100%; */
	  /* margin: auto; */

	   
}
/* .nav-right-item image /deep/ div{
	width: 0;
	height: 0;
} 
.nav-right-item image /deep/ img{
	width: 428rpx;
	height: 200rpx;
	object-fit: cover;
	opacity: 1;
} */

.active {
	color: #f24544;
}

.padding {
	height: var(--status-bar-height);
	width: 100%;
	top: 0;
	position: fixed;
	background-color: #f24544;
}
</style>
