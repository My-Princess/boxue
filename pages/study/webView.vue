<template>
	<view>
			<view class="content"><web-view :src="url"></web-view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'',
				 
				
			};
		},
		onLoad(options) {
			this.url = options.links
		// 	console.log(options)
		
		// 	let links = decodeURIComponent(options.links);
		
		// 	console.log(links)
		
		   // console.log(this.url)
			// this.url = `${this.viewerUrl}?file=${encodeURIComponent(options.links)}`;
			// this.url = `${this.viewerUrl}?file=${encodeURIComponent(options.links)}`;
			// console.log(`${this.url}?file=${encodeURIComponent(options.links)}`)
			
			
			
			// this.allUrl = `/hybrid/html/pdf.html?url=${links}`;
			// let fileUrl = encodeURIComponent("https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/lang_file/2019092709213810647.pdf") // encodeURIComponent 函数可把字符串作为 URI 组件进行编码。
			// this.allUrl = this.viewerUrl + '?file=' + fileUrl
		}
	}
</script>

<style lang="scss">

</style>
