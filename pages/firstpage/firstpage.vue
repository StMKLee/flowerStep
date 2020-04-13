<template>
	<view>
		<view class="plant">
			<button type="default" @click="jumpto">Plant</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jumpto:function(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
page{
	background-image: url("http://m.qpic.cn/psc?/V10EvO2w4BqwM9/oGEovji5dOWVs5ze3TLFdkWa4VmS0oT.HT2qX9Ersex5yyMp0CaHRIN5ETQyju20kFjWqhTzl9eAgCm*vAB*Sg!!/b&bo=OAQkCQAAAAARByE!&rf=viewer_4");
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.plant{
	opacity: 0;
	position: fixed;
	bottom: 0;
	left: 40%;
}
</style>
