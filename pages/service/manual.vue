<template>
	<Head :title="$t('user.manual')" @navigateBack="navigateBack"></Head>
</template>



<script>
	// import Head from '../../components/navigation.vue';
	export default {
		// components: { Head },
		data() {
			return {};
		},
		methods: {
			navigateBack(){
				uni.navigateBack()
			}
		}
	};
</script>

<style>
</style>
