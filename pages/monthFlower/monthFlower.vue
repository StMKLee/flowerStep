
<!-- 每月花总量展示页（暂以花园形式展示） -->

<template>
	<view>
		<view class="num" >
			近31天总步数：{{stepsnum}}
		</view>
		<view class="num sum">
			近31天总花数：{{sumflowers}}
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stepsnum:0,
				flowernum:0,
				sumflowers:0
			}
		},
		onLoad:function(){
			this.monthstepsnum(this.$store.state.stepMess)
		},
		methods: {
			monthstepsnum:function(e){
				var i=0;
				for(;i<30;i++){
					this.stepsnum+=e[i].step
					if(e[i].step>60000){
						this.flowernum=30;
					}else if(e[i].step>30000&&e[i].step<=60000){
						var a = e[i].step/3000
						this.flowernum=20+Math.floor(a)
					}else if(e[i].step>10000&&e[i].step<=30000){
						var b = e[i].step/2000
						this.flowernum=20+Math.floor(b)
					}else if(e[i].step>=1000&&e[i].step<=10000){
						var c = e[i].step/1000
						this.flowernum=Math.floor(c)
					}else if(e[i].step<1000){
						this.flowernum=0
					};
					this.sumflowers+=this.flowernum
				}
			}
		}
	}
</script>

<style>
page{
	background-color: #FEFEFF;
	color: #33A6B8;
	/* 无版权背景图 */
	/* background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587389110729&di=b69d906bb7362a55d764fb6f71b8eb0a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3701ee4cc4844e0e16e3d9128329579ec1dc5f31429f6-N8dnhq_fw658");
	background-repeat: no-repeat;
	background-size: 100% 80%;
	background-position: bottom; */
	/* 免费版权背景图 */
	background-image: url("https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?cs=srgb&dl=pexels-2395251.jpg&fm=jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: bottom;
}
.sum{
	position: fixed;
	top:0;
	right: 0;
	margin-right: 15rpx;
}
.num{
	font-size: 30rpx;
	margin-left: 15rpx;
}
</style>
