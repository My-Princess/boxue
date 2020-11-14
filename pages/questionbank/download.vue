<template>
	<view class="download">
		<Head title="缓存题目"></Head>
		<view class="download-concent">
			<view class="download-concent-title">印尼语语法初级班</view>
			<view class="download-concent-c">
				<view class="download-concent-c-qx" @click="selectAll">
					<view class="download-concent-c-qx-l">
						<u-checkbox-group><u-checkbox size="30" v-model="checked" shape="circle">全选</u-checkbox></u-checkbox-group>
					</view>
					<view class="download-concent-c-qx-r">
						已选择
						<text>{{number}}</text>
						节
					</view>
				</view>

				<view class="download-concent-c-box">
					<u-checkbox-group @change="checkboxGroupChange">
						<u-checkbox
						class="check"
							shape="circle"
							size="30"
							style="width: 100%;padding:30rpx 0;"
							@change="checkboxChange"
							v-model="item.checked"
							v-for="(item, index) in list"
							:key="index"
							:name="item.name"
						>
							{{ item.name }}
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import Head from '../../components/navigation.vue';
export default {
	// components: { Head },
	data() {
		return {
			checked: false,
			borderBottom: '1rpx solid #EEEEEE',
			number:0,
			list: [
				{
					name: '第一课：你好',
					checked: false,
					disabled: false
				},
				{
					name: '第一课：你好',
					checked: false,
					disabled: false
				},
				{
					name: '第一课：你好',
					checked: false,
					disabled: false
				}
			]
		};
	},
	methods: {
		// 选中某个复选框时，由checkbox时触发
		checkboxChange(e) {
			console.log(e);
		},
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange(e) {
			console.log('11',e);
			this.number = e.length
			
		},
		selectAll(){
			console.log(this.checked)
			this.list.forEach((item)=>{
				item.checked = this.checked
			})
			if(this.checked){
				this.number = this.list.length
			}else{
				this.number = 0
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.check:last-child{
		border-bottom: none;
	}
	.check{
		border-bottom: 1rpx solid #EEEEEE;
	}
.download {
	&-concent {
		margin: 0 40rpx;
		&-title {
			font-size: $fontSize + 6;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 36rpx;
		}
		&-c {
			/deep/.u-checkbox__label {
				margin-left: 20rpx;
			}
			&-qx {
				display: flex;
				justify-content: space-between;
				align-items: center;
				&-l {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
				&-r {
					font-size: $fontSize;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					text {
						color: #db1f13;
						padding: 0 4rpx;
					}
				}
			}

			&-box {
				
			}
		}
	}
}
</style>
