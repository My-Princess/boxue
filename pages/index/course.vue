<template>
	<view class="course">
		<view class="course-c">111</view>
		<u-tabbar v-model="TabBarcurrent" :list="tabBarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			TabBarcurrent:2,
		};
	},
	computed: {
		...mapState('index', ['tabBarlist'])
	}
};
</script>

<style lang="scss"></style>
