<template>
	<view class="APlayer">
		<view class="APlayer-top">
			<view class="Player-top-l">
				<text>{{ currentTime }}</text>
			</view>
			<view class="APlayer-top-c">
				<slider
					class="audio-slider"
					:activeColor="color"
					block-size="16"
					:value="current"
					:max="duration"
					@changing="(seek = true), (current = $event.detail.value)"
					@change="change"
				></slider>
			</view>
			<view class="APlayer-top-r">
				<text>{{ durationTime }}</text>
			</view>
		</view>

		<view class="APlayer-bottom">
			<view class="APlayer-bottom-lbxh" @click="xhBtn">
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/lbxh.png" mode="" v-if="isshowxh"></image>
				<image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dkxh.png" mode="" v-if="!isshowxh"></image>
			</view>
			<view class="APlayer-bottom-syj" v-if="control" @click="prev"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/syj.png" mode=""></image></view>
			<view class="APlayer-bottom-zt" :class="{ audioLoading: loading }" @click="operation">
				<image v-if="!paused" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/bf.png" mode=""></image>
				<image v-if="paused" src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ztbf.png" mode=""></image>
			</view>
			<view class="APlayer-bottom-xyj" v-if="control" @click="next"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xyj.png" mode=""></image></view>
			<view class="APlayer-bottom-lb" @click="lbBtn"><image src="https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/lb.png" mode=""></image></view>
		</view>
	</view>
</template>

<script>
const audio = uni.createInnerAudioContext(); //创建音频
console.log(audio);

export default {
	props: {
		src: String, //音频链接
		autoplay: Boolean, //是否自动播放
		// duration: Number, //总时长（单位：s）
		control: {
			type: Boolean,
			default: true
		}, //是否需要上一曲/下一曲按钮
		// continue: Boolean, //播放完成后是否继续播放下一首，需定义@next事件
		color: {
			type: String,
			default: '#169af3'
		} //主色调
	},
	data() {
		return {
			duration:'', //总时长（单位：s）
			isshowxh: true, // 是否循环播放
			continue: true, //循序播放
			loop:false,    //是否循环播放 默认false
			currentTime: '', //当前播放时间
			durationTime: '', //总时长
			current: '', //slider当前进度
			loading: false, //是否处于读取状态
			paused: true, //是否处于暂停状态
			seek: false //是否处于拖动状态
		};
	},
	created() {
		audio.src = this.src;
		console.log(audio.src)
		audio.onCanplay((e)=>{
			console.log(audio.duration);
			this.duration = audio.duration
		});
		this.current = 0;
		this.durationTime = this.format(this.duration);
		audio.obeyMuteSwitch = false;
		// console.log(this.autoplay)
		audio.autoplay = this.autoplay;
		
		//音频进度更新事件
		audio.onTimeUpdate(() => {
			if (!this.seek) {
				this.current = audio.currentTime;
			}
		});
		//音频播放事件
		audio.onPlay(() => {
			this.paused = false;
			this.loading = false;
		});
		//音频暂停事件
		audio.onPause(() => {
			this.paused = true;
		});
		//音频结束事件
		audio.onEnded(() => {
			
			if (this.continue) {
				
				this.next();
			} else {
			
				this.paused = true;
				this.current = 0;
			}
		});
		//音频完成更改进度事件
		audio.onSeeked(() => {
			this.seek = false;
		});
	},
	watch: {
		//监听音频地址更改
		src(e) {
			audio.src = e;
			this.current = 0;
			audio.play();
			this.loading = true;
		},
		//监听总时长改变
		duration(e) {
			this.durationTime = this.format(e);
		},
		//监听当前进度改变
		current(e) {
			this.currentTime = this.format(e);
		},
		// 
		loop(e){
			console.log('是否循序播放',e)
			audio.loop = e
		}
		// current(e) { this.currentTime = this.format(e); if(this.durationTime===this.currentTime){ audio.pause() } }
	},
	methods: {
		xhBtn() {
			this.isshowxh = !this.isshowxh;
			// 顺序播放  循环播放
			this.isshowxh ?  this.loop = false : this.loop = true
		},
		lbBtn() {
			this.$emit('lbBtn');
		},
		//返回prev事件
		prev() {
			this.$emit('prev');
		},
		//返回next事件
		next() {
			this.$emit('next');
		},
		//格式化时长
		format(num) {
			return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60);
		},
		//播放/暂停操作
		operation() {
			if (audio.paused) {
				audio.play();
				this.loading = true;
			} else {
				audio.pause();
			}
		},
		//完成拖动事件
		change(e) {
			audio.seek(e.detail.value);
		}
	}
};
</script>

<style lang="scss">
@font-face {
	font-family: 'icon';
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot');
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff') format('woff'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont') format('svg');
}
.audioLoading {
	animation: loading 2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}
.APlayer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 200rpx;
	background: #ffffff;

	box-shadow: 0 4px 9px 0 #333;
	&-top {
		margin-top: 46rpx;
		margin-bottom: 18rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		&-l {
			display: flex;
			text {
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		&-c {
			/deep/.audio-slider {
				margin-top: 0;
				margin-bottom: 0;
			}
			width: 463rpx;
			overflow: hidden;
			// border-radius: 1px;
			margin: 0 18rpx;
		}
		&-r {
		}
	}

	&-bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		&-lbxh {
			width: 44rpx;
			height: 42rpx;
			image {
				width: 100%;
				height: 100%;
			}
			margin-right: 77rpx;
		}
		&-syj {
			width: 44rpx;
			height: 44rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		&-zt {
			margin: 0 65rpx;
			width: 82rpx;
			height: 82rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		&-xyj {
			width: 44rpx;
			height: 44rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		&-lb {
			width: 44rpx;
			height: 32rpx;
			margin-left: 77rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
