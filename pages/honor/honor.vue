<template>
	<view class="container">
		<view class="title">
			{{titlecontent}}
		</view>
		<view class="content" v-for="(item,index) in achievement" :key="index">
			<view class="achievement-item" :name="item.name" :class="{checked:item.nocheck}">
				<image :src="item.src" mode="" class="achievement-logo"></image>
				{{item.name}}
				<view class="tips">
					{{item.tip}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				UnlockFlowers:null,
				titlecontent:"个人成就",
				achievement: [
					{
						id:0,
						name: "第一朵花",
						src: "../../static/images/king.png",
						tip: "首次获得一朵花",
						nocheck:true
					},
					{
						id:1,
						name: "活力迸发",
						src: "../../static/images/king.png",
						tip: "一天内步数达到5000步",
						nocheck:true
					},
					{
						id:2,
						name: "活力迸发II",
						src: "../../static/images/king.png",
						tip: "一天内步数达到10000步",
						nocheck:true
					},
					{
						id:3,
						name: "活力迸发III",
						src: "../../static/images/king.png",
						tip: "一天内步数达到30000步",
						nocheck:true
					},
					{
						id:4,
						name: "活力无限",
						src: "../../static/images/king.png",
						tip: "一天内步数达到60000步",
						nocheck:true
					},
					{
						id:5,
						name: "低碳生活",
						src: "../../static/images/king.png",
						tip: "一个月内步数共达15万",
						nocheck:true
					},
					{
						id:6,
						name: "低碳生活II",
						src: "../../static/images/king.png",
						tip: "一个月内步数共达30万",
						nocheck:true
					},
					{
						id:7,
						name: "低碳生活III",
						src: "../../static/images/king.png",
						tip: "一个月内步数共达45万",
						nocheck:true
					},
					{
						id:8,
						name: "低碳战士",
						src: "../../static/images/king.png",
						tip: "一个月内步数共达60万",
						nocheck:true
					},
					{
						id:9,
						name: "植物学家",
						src: "../../static/images/king.png",
						tip: "解锁3种花",
						nocheck:true
					},
					{
						id:10,
						name: "植物学家II",
						src: "../../static/images/king.png",
						tip: "解锁5种花",
						nocheck:true
					},
					{
						id:11,
						name: "植物学家III",
						src: "../../static/images/king.png",
						tip: "解锁8种花",
						nocheck:true
					},
					{
						id:12,
						name: "植物活百科",
						src: "../../static/images/king.png",
						tip: "解锁12种花",
						nocheck:true
					},
					{
						id:13,
						name: "园丁",
						src: "../../static/images/king.png",
						tip: "至今共得50朵花",
						nocheck:true
					},
					{
						id:14,
						name: "园丁II",
						src: "../../static/images/king.png",
						tip: "至今共得200朵花",
						nocheck:true
					},
					{
						id:15,
						name: "园丁III",
						src: "../../static/images/king.png",
						tip: "至今共得500朵花",
						nocheck:true
					},
					{
						id:16,
						name: "种植大师",
						src: "../../static/images/king.png",
						tip: "至今共得1000朵花",
						nocheck:true
					}
				]
			}
		},
		onLoad:function(){
			this.checkHonor();		/* 检测方法 */
		},
		methods: {
			checkHonor:function(){
				if(this.$store.state.userData===undefined){
					console.log("用户数据未定义");
				}else{
					var fnum=this.$store.state.userData.floNum;
					if(fnum[0]>0){		/* 第一朵花 */
						this.achievement[0].src="../../static/images/king_checked.png";
						this.achievement[0].nocheck=false;
					};
					/* 园丁类的判断 */
					var fsum=fnum[0]+fnum[1]+fnum[2]+fnum[3]+fnum[4]+fnum[5]+fnum[6]+fnum[7]+fnum[8]+fnum[9]+fnum[10]+fnum[11];
					if(fsum>=50){
						this.achievement[13].src="../../static/images/king_checked.png";
						this.achievement[13].nocheck=false;
					};
					if(fsum>=200){
						this.achievement[14].src="../../static/images/king_checked.png";
						this.achievement[14].nocheck=false;
					};
					if(fsum>=500){
						this.achievement[15].src="../../static/images/king_checked.png";
						this.achievement[15].nocheck=false;
					};
					if(fsum>=1000){
						this.achievement[16].src="../../static/images/king_checked.png";
						this.achievement[16].nocheck=false;
					};
					/* 植物学家类判断 */
					var typenum=0;
					for (var i=0;i<fnum.length;i++) {
						if(fnum[i]>0){
							typenum+=1;
						}else{
							continue;
						}
					};
					if(typenum>=3){
						this.achievement[9].src="../../static/images/king_checked.png";
						this.achievement[9].nocheck=false;
					};
					if(typenum>=5){
						this.achievement[10].src="../../static/images/king_checked.png";
						this.achievement[10].nocheck=false;
					};
					if(typenum>=8){
						this.achievement[11].src="../../static/images/king_checked.png";
						this.achievement[11].nocheck=false;
					};
					if(typenum>=12){
						this.achievement[12].src="../../static/images/king_checked.png";
						this.achievement[12].nocheck=false;
					};
					/* 活力类判断 */
					var todaynum=this.$store.state.stepMess;
					if(todaynum>=5000){
						this.achievement[1].src="../../static/images/king_checked.png";
						this.achievement[1].nocheck=false;
					};
					if(todaynum>=10000){
						this.achievement[2].src="../../static/images/king_checked.png";
						this.achievement[2].nocheck=false;
					};
					if(todaynum>=30000){
						this.achievement[3].src="../../static/images/king_checked.png";
						this.achievement[3].nocheck=false;
					};
					if(todaynum>=60000){
						this.achievement[4].src="../../static/images/king_checked.png";
						this.achievement[4].nocheck=false;
					};
					/* 低碳类判断 */
					var monthnum=this.$store.state.stepsnum;
					if(monthnum>=150000){
						this.achievement[5].src="../../static/images/king_checked.png";
						this.achievement[5].nocheck=false;
					};
					if(monthnum>=300000){
						this.achievement[6].src="../../static/images/king_checked.png";
						this.achievement[6].nocheck=false;
					};
					if(monthnum>=450000){
						this.achievement[7].src="../../static/images/king_checked.png";
						this.achievement[7].nocheck=false;
					};
					if(monthnum>=600000){
						this.achievement[8].src="../../static/images/king_checked.png";
						this.achievement[8].nocheck=false;
					};
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #ecf4c4;
	}
	.title {
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
		padding: 10rpx;
		color: #3DC7C9;
		font-size: 60rpx;
		font-weight: 600;
		text-align: center;
	}

	.achievement-logo {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		left: 20rpx;
	}

	.achievement-item {
		position: relative;
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
		padding: 10rpx;
		border: #000000 2rpx solid;
		border-radius: 5%;
		text-align: center;
		background-color: #9c7d4c;
		color: #e3b81d;
	}
	
	.container{
		margin-bottom: 50rpx;
	}
	
	.checked{
		background-color: #d9d2cd;
		color: #ffffff;
	}
	
	.tips{
		font-size: 30rpx;
		color: #56d700;
	}
	
	.checked .tips{
		font-size: 35rpx;
		color: #9fab94;
	}
</style>
