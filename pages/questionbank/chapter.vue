<template>
	<view class="chapter">
		<Head :title="study.section" @navigateBack="navigateBack"></Head>
		<view class="chapter-tab">
			<v-tabs
				v-model="tab2"
				auto
				fontWeight="bold"
				fontSize="36rpx"
				activeFontSize="36rpx"
				lineColor="#DB1F13"
				color="#999999"
				activeColor="#333"
				:tabs="tabs2"
				@change="activeTabs"
			></v-tabs>
		</view>
		<view class="chapter-concent">
			<view class="chapter-concent-info">
				<v-collapse>
					<v-collapse-item nodeTop="2" :concent="v" :isPurchased="true" v-for="(v, i) in SectionConcent" :key="i">
						<template v-slot:content>
							<view class="collapse-son" v-for="(value, index) in v.questions" :key="value.id" @click="topic(v, value.id, index)">
								<text class="collapse-son-size">{{ value.subject_name }}</text>
								<view class="collapse-son-r">
									<text class="collapse-son-r-fraction">共{{ value.count_questions }}道题</text>
								</view>
							</view>
						</template>
						<template v-slot:node>
							<view class="u-node" style="background: #19be6b;"><u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon></view>
						</template>
					</v-collapse-item>
					<!-- 模板 -->
					<!-- <v-collapse-item :concent="concent[1]" nodeTop="2" :isPurchased="true" color="#00B281">
						<template v-slot:content></template>
						<template v-slot:node>
							<view class="u-node" style="background: #19be6b;"><u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon></view>
						</template>
					</v-collapse-item> -->
				</v-collapse>
			</view>
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
import { getClassCateGory, getClass } from '@/api/study.js';
export default {
	data() {
		return {
			id: 1,
			tab2: 1,
			tabs2: [],
			activeTab: 1,
			concent: [{ title: '印尼语语法初级班', name: '已完成' }, { title: '印尼语语法中级班', name: '已完成50%' }],
			SectionConcent: []
		};
	},
	onLoad() {
		this.getTabData();
	},
	computed: {
		study() {
			return this.$t('study');
		}
	},
	methods: {
		...mapMutations('study', ['changeTopic', 'changeAnswerId', 'changeClassId', 'changeanswerIndex']),
		activeTabs(e, i) {
			this.id = i;
			this.getSection();
			this.activeTab = e;
		},
		// tab
		async getTabData() {
			let data = { token: uni.getStorageSync('token') };
			let res = await getClassCateGory(data);
			console.log(res);
			this.tabs2 = res.data;
			this.tabs2.map((v, i) => {
				if (i == this.tab2) {
					this.id = v.id;
				}
			});

			this.getSection();
		},

		// 获取章节提炼
		async getSection() {
			let data = { token: uni.getStorageSync('token'), id: this.id };
			let res = await getClass(data);
			console.log(res);
			this.SectionConcent = res.data;
		},
		topic(e, id, index) {
			this.changeTopic(e.questions);
			this.changeAnswerId(id);
			this.changeClassId(e.class_iid);
			this.changeanswerIndex(index);
			uni.navigateTo({
				url: `./topic`
			});
		},
		download() {
			uni.navigateTo({
				url: './download'
			});
		},
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="less" scoped>
.collapse-son:first-child {
	padding-top: 38rpx;
}
.collapse-son {
	padding: 24rpx 0;
	// margin-right: 52rpx;
	border-bottom: 1rpx solid #eeeeee;
	// padding-left: 30rpx;
	position: relative;
	display: flex;
	width: 100%;
	// background: red;
	text {
		font-family: PingFang SC;
		font-weight: 500;
	}
	&-size {
		font-size: 30rpx;

		color: rgba(51, 51, 51, 1);
	}
	&-r {
		display: flex;
		position: absolute;
		right: 53rpx;
		&-fraction {
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333;
		}
		&-icon {
			display: block;
			width: 42rpx;
			height: 42rpx;
			margin-left: 20rpx;
			background: rgba(228, 228, 228, 1);
		}
	}

	&::before {
		content: '';
		width: 30rpx;
		height: 30rpx;
		background: rgba(255, 255, 255, 1);
		border: 2px solid rgba(238, 238, 238, 1);
		border-radius: 50%;
		// position: absolute;
		// top: 80rpx;
		// left: 4rpx;
		position: absolute;
		// top: 12rpx;
		left: -40rpx;
		transform-origin: 0;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		font-size: 24rpx;
		// border-left: 2px solid pink;
	}
}
.chapter {
	&-tab {
		padding-left: 20rpx;
	}
	&-concent {
		margin-top: 48rpx;
		padding-left: 60rpx;
		.u-node {
			border-radius: 100rpx;
		}
		.u-node /deep/ .uicon-pushpin-fill {
			height: 42rpx;
			width: 42rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100rpx;
		}
	}
}
</style>
