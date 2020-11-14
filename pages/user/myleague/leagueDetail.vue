<template>
	<view class="leagueDetail">
		<Head title="拼团成功">
			<template v-slot:right>
				<view>完成</view>
			</template>
		</Head>
		<view class="leagueDetail-box">
			<Groupbox></Groupbox>
		</view>
		<view class="leagueDetail-line"></view>
		<view class="leagueDetail-c">
			<leagueBox></leagueBox>
		</view>
		<footerbtn footername="观看课程" fontSize="26rpx"></footerbtn>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.leagueDetail-line {
		width: 100%;
		height: 10rpx;
		background: rgba(238, 238, 238, 1);
	}
</style>
