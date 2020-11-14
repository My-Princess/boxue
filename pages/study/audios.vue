<template>
	<view class="audios">
		<Head :title="fileName" @navigateBack="navigateBack"></Head>
		<view class="audios-centent">
			<view class="audios-centent-title">语音讲解</view>
			<view class="audios-centent-box">
				<!-- 	<view class="audios-centent-box-name">句子：</view>
				<view class="audios-centent-box-c">
					<view class="audios-centent-box-c-zw">{{ AudiosData.description }}</view>
	
					<view class="audios-centent-box-c-yw">
						          
					</view>
				</view> -->
				<rich-text :nodes="AudiosData.content"></rich-text>
			</view>
		</view>

		<view class="audios-foorter">
			<APlayer @lbBtn="lbBtn" :continue="false" color="#DB1F13" :src="itemList[courseType].body[now].src" @prev="prev" @next="next"></APlayer>
			<!-- 目录列表 -->
			<view class="popup">
				<template>
					<view>
						<u-popup v-model="show" mode="bottom">
							<view class="lb-concent">
								<u-collapse :head-style="headStyle" :item-style="itemStyle" :body-style="bodyStyle" event-type="close" @change="change">
									<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
										<view
											class="collapse-item"
											v-for="(v, i) in item.body"
											:key="i"
											@click="activeId(i, v)"
											:class="v.fileId == activeColor ? 'activeColor' : ''"
										>
											<view class="collapse-item-title">{{ v.fileName }}</view>
										</view>
									</u-collapse-item>
								</u-collapse>
							</view>
						</u-popup>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uParse from '@/components/gaoyia-parse/parse.vue'; //引入富文本组件
import { fileWatch } from '@/api/study.js';
export default {
	data() {
		return {
			// activeColor: 0,

			fileId: '',
			// fileName:'',
			AudiosData: {},
			show: false,

			headStyle: {
				height: '80rpx',
				background: '#EEEEEE',
				padding: '0 40rpx'
			},
			itemStyle: {
				marghtTop: '20rpx'
			},
			bodyStyle: {
				paddingLeft: '40rpx'
			},
			itemList: []
		};
	},
	onLoad(options) {
		// this.$nextTick(()=>{	
	     	this.getvoice();
		// })
		console.log('封杀地方就是打发时间',this.courseType)
		
	},
	computed: {
		...mapState('study', ['courseType', 'activeColor', 'activeAudios', 'now']),
		// 标题切割
		fileName: function(val) {
			console.log(this.AudiosData.fileName);
			var index = this.AudiosData.fileName.lastIndexOf('\：');
			let obj = this.AudiosData.fileName.substring(0, index);
			return obj;
		}
	},
	watch: {
		activeAudios: {
			handler(val, oldval) {
				console.log(val);
				this.getAudioData();
				this.changeColor(val.fileId);
			},
			immediate: true
		}
	},

	methods: {
		...mapMutations('study', ['changeColor', 'changeAudios', 'getcourseType', 'getNow']),
		// 获取当前数据
		getAudioData() {
			this.AudiosData = this.activeAudios;
			this.getcourseType(this.AudiosData.courseType);
		},
		// 获取列表数据
		getvoice() {
			let setCatalog = uni.getStorageSync('setCatalog');
			console.log('获取外面的数据',setCatalog)
			this.itemList = setCatalog;
		},
		// 音频详情（已弃用）
		async getAudios() {
			let data = { token: uni.getStorageSync('token'), fileId: this.fileId };
			let res = await fileWatch(data);
			console.log(res);
		},
		// 点击当前那个音频
		activeId(i, v) {
			console.log(i, v);
			this.AudiosData = v;
			this.getNow(i);
			this.changeColor(v.fileId);
			// this.activeColor = i;
		},
		// 上一首
		prev() {
			console.log('上一首', this.now);
			let now = this.now == 0 ? this.itemList[this.courseType].body.length - 1 : this.now - 1;
			console.log(now);
			let data = this.itemList[this.courseType].body[now];

			this.changeAudios(data);
			this.getNow(now);
		},
		// 下一首
		next() {
			console.log('下一首', this.now);
			let now = this.now == this.itemList[this.courseType].body.length - 1 ? 0 : this.now + 1;
			console.log(now);
			let data = this.itemList[this.courseType].body[now];

			this.changeAudios(data);
			this.getNow(now);
		},

		lbBtn() {
			this.show = true;
		},
		change(e) {
			console.log(e);
		},
		itemChange(e) {
			console.log(e);
		},

		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30upx;
	background: #fff;
	border-radius: 10upx;
	margin-top: 20upx;
	color: #333;
}

.list-title {
	font-size: 28upx;
	line-height: 88upx;
}

.list-pic {
	display: none;
	width: 28upx;
	height: 28upx;
}

.active {
	background: #169af3;
	color: #fff;
}

.active .list-pic {
	display: block;
}

.u-collapse-content .collapse-item /deep/ {
	padding: 30rpx 0;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	border-bottom: 1rpx solid #eeeeee;
}
.audios {
	&-centent {
		padding: 0 40rpx;
		&-title {
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		&-box {
			padding-top: 34rpx;
			&-name {
				font-size: $fontSize;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			&-c {
				margin-left: 110rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				&-zw {
					padding-bottom: 30rpx;
				}
				&-yw {
				}
			}
		}
	}

	&-foorter {
		.lb-concent {
			padding-bottom: 22rpx;
			.collapse-item {
				display: flex;
				justify-content: space-between;
				padding-right: 52rpx;
				&-img {
					width: 44rpx;
					height: 42rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
}
</style>
