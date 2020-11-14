<template>
	<view>
		<!-- 详情 -->
		<view class="videoviewing-concent-box1" v-if="activeTab == 0">
			<view class="videoviewing-concent-box1-img"><u-parse :content="detailsdata.content" noData="" /></view>
		</view>
		<!-- 目录 -->
		<view class="videoviewing-concent-box2" v-if="activeTab == 1">
			<u-collapse :head-style="headStyle" :body-style="bodyStyle" event-type="close" @change="change">
				<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index" v-if="item.type">
					<view class="collapse-item" v-for="(v, i) in item.body" :key="i" @click="plays(v, i)">
						<view class="collapse-item-title" :class="i == activeIndex ? 'activeColor' : ''">{{ v.fileName || v.file_name }}</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>

		<!-- 学员评价 -->
		<view class="videoviewing-concent-box3" v-if="activeTab == 2">
			<view class="student-item">
				<problemList>
					<template v-slot:head>
						<view class="problemList-head">
							<view class="problemList-head-name">{{ study.Mycommenttxt }}</view>
							<view class="problemList-head-btn" @click="myEvaluation">{{ study.Mycomment }}</view>
						</view>
					</template>
				</problemList>
			</view>
		</view>

		<!-- 问题讨论 -->
		<view class="videoviewing-concent-box3" v-if="activeTab == 3">
			<view class="student-item">
				<problemList>
					<template v-slot:head>
						<view class="problemList-head">
							<view class="problemList-head-name">{{ study.Myquestiontxt }}</view>
							<view class="problemList-head-btn" @click="Myquestion">{{ study.Myquestion }}</view>
						</view>
					</template>
				</problemList>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(options) {
		console.log(options)
	},
};
</script>

<style lang="scss">
.student-item {
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid #eee;
}
.problemList-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&-name {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	&-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 156rpx;
		height: 55rpx;
		background: linear-gradient(25deg, #db1f13 0%, #ff473b 100%);
		border-radius: 28px;

		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #ffffff;
	}
}
.videoviewing-concent-box1 {
	&-img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 667rpx;
		height: 570rpx;
		// background: red;
	}
}
.videoviewing-concent-box2 {
	.collapse-item {
		display: flex;
		justify-content: space-between;
		// padding-right: 52rpx;
		&-img {
			width: 36rpx;
			height: 44rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
