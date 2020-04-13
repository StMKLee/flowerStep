<template>
	<view class="container">
		<uni-list>
		    <uni-list-item title="帮助中心" :show-arrow="false" disabled="true"></uni-list-item>
		    <uni-list-item title="权限设置" @click="openSettings"></uni-list-item>
		    <uni-list-item title="待定"></uni-list-item>
			<uni-list-item title="待定"></uni-list-item>
			<uni-list-item title="待定"></uni-list-item>
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
			}
		}
	}
</script>

<style>

</style>
