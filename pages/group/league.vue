<template>
	<view class="league">
		<Head title="参团成功"></Head>
		  <Groupbox></Groupbox>
		<view class="league-line"></view>
		<view class="league-concent">
			<leagueBox></leagueBox>
		</view>

		<footerbtn footername="邀请好友，拼团成功返还23元" fontSize="28rpx"></footerbtn>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
			
		};
	}
};
</script>

<style lang="scss">
.league {
	&-line {
		width: 100%;
		height: 10rpx;
		background: rgba(238, 238, 238, 1);
	}

}
</style>
