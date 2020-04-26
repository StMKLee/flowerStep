<template>
	<view class="container">
		<uni-list>
		    <uni-list-item title="帮助中心" :show-arrow="false" disabled="true"></uni-list-item>
		    <uni-list-item title="权限设置" @click="openSettings"></uni-list-item>
		    <uni-list-item title="如何开启微信运动" @click="howToGetWerun"></uni-list-item>
		</uni-list>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openSettings:function(){		/* 打开权限设置 */
				uni.openSetting({
					success() {
						console.log("权限设置接口调用成功");
					},
					fail() {
						console.log("权限设置接口调用失败")
					}
				})
			},
			howToGetWerun:function(){
				uni.showModal({
					title:"操作提示",
					content:"在微信的 我->设置->通用->辅助功能 里即可开启微信运动，感谢您的配合!",
					showCancel:false,
					success() {
						console.log("操作提示成功")
					},
					fail() {
						console.log("操作提示失败")
					}
				})
			}
		}
	}
</script>

<style>

</style>
