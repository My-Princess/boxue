<template>
	<view class="imgDetail">
		<Head>
			<template v-slot:right>
				<view>保存图片</view>
			</template>
		</Head>
		<view class="imgDetail-c">
			<ImgBox></ImgBox>
		</view>
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
/deep/.integral-top{
	
	color: #FFFFFF !important;
}
.imgDetail{
	width: 100vw;
	height: 100vh;
	background-color: #000000;
}
</style>
