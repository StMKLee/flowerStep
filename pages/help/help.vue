<template>
	<view class="container">
		<uni-list>
		    <uni-list-item title="帮助中心" :show-arrow="false" disabled="true"></uni-list-item>
		    <uni-list-item title="权限设置" @click="openSettings"></uni-list-item>
		    <uni-list-item title="如何开启微信运动" @click="howToGetWerun"></uni-list-item>
			<uni-list-item title="近31天花总数与各种花拥有数相关疑问" @click="whyMonthFlo"></uni-list-item>
			<uni-list-item title="关于成就的问题" @click="whyHonor"></uni-list-item>
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
			},
			whyMonthFlo:function(){
				uni.showModal({
					title:"相关解释",
					content:"关于近31天花总数和各种花拥有数不符，是因为近31天花总数是根据微信31天步数数据直接折算得到，而各种花拥有数是用户开始使用本小程序之后才开始计算。",
					showCancel:false,
					success() {
						console.log("月花相关解释成功")
					},
					fail() {
						console.log("月花相关解释失败")
					}
				})
			},
			whyHonor:function(){
				uni.showModal({
					title:"相关解释",
					content:"部分成就属于动态成就，即今日点亮，他日不一定点亮，如活力迸发。原因是这类成就判断标准是今日或近一个月等有时效性的数据，每日都会更新。",
					showCancel:false,
					success() {
						console.log("成就相关解释成功")
					},
					fail() {
						console.log("成就相关解释失败")
					}
				})
			}
		}
	}
</script>

<style>

</style>
