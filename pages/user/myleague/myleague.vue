<template>
	<view class="myleague">
		<view class="myleague-box">
			<Head title="我的拼团" @navigateBack="navigateBack"></Head>
			<view class="myleague-tab">
				<u-tabs active-color="#333333" :bar-style="barStyle" inactive-color="#666666" :list="list" bar-width="40" :current="current" :is-scroll="false" @change="change"></u-tabs>
			</view>
		</view>
		<view class="myleague-body">
			<!-- 正在拼团 -->
			<view class="myleague-body-list" v-if="current == 0">
				<view class="myleague-body-list-item">
					<Grouplist>
						<template v-slot:number>
							<view class="myleague-number">
								<view class="myleague-number-l">￥5840.00</view>
								<view class="myleague-number-r">￥5040.00</view>
							</view>
						</template>
					</Grouplist>
					
				</view>
				<view class="myleague-body-list-di">
					已没有更多正在拼团的信息
				</view>
			</view>
			<!-- 拼团成功 -->
			<view class="myleague-body-list" v-if="current == 1">
				<view class="myleague-body-list-item">
					<Grouplist @click="leagueDetail">
					</Grouplist>
				</view>
				<view class="myleague-body-list-di">
					已没有更多正在拼团的信息
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barStyle: {
					background: '#DB1F13'
				},
				list: [{ name: '正在拼团' }, { name: '拼团成功' },{name: '拼团失败'}],
				current: 0,
			};
		},
		methods:{
			navigateBack(){
				uni.navigateBack()
			},
			change(index) {
				this.current = index;
			},
			leagueDetail(){
				uni.navigateTo({
					url:'./leagueDetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.myleague-number{
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		&-l {
			text-align: right;
			font-size: $fontSize - 8;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(203, 203, 203, 1);
			text-decoration: line-through;
		}
		&-r {
			font-size: $fontSize - 2;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(220, 42, 31, 1);
		}
	}
.myleague-box{
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	background: #FFFFFF;
	z-index: 99;
}
.myleague-body{
	padding-top: 200rpx;
	&-list{
		padding: 0 40rpx;
		&-di{
			text-align: center;
			margin-top: 60rpx;
			margin-bottom: 40rpx;
			font-size: $fontSize - 6;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
		&-item{}
	}
}
</style>
