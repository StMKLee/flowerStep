<template>
	<view class="container">
		<view class="title">
			{{titlecontent}}
		</view>
		<view class="content" v-for="(item,index) in achievement" :key="index">
			<view class="achievement-item" :name="item.name">
				<image :src="item.src" mode="" class="achievement-logo"></image>
				{{item.name}}
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
						src: "../../static/images/king.png"
					},
					{
						id:1,
						name: "活力迸发",
						src: "../../static/images/king.png"
					},
					{
						id:2,
						name: "活力迸发II",
						src: "../../static/images/king.png"
					},
					{
						id:3,
						name: "活力迸发III",
						src: "../../static/images/king.png"
					},
					{
						id:4,
						name: "低碳生活",
						src: "../../static/images/king.png"
					},
					{
						id:5,
						name: "低碳生活II",
						src: "../../static/images/king.png"
					},
					{
						id:6,
						name: "低碳生活III",
						src: "../../static/images/king.png"
					},
					{
						id:7,
						name: "园丁",
						src: "../../static/images/king.png"
					},
					{
						id:8,
						name: "园丁II",
						src: "../../static/images/king.png"
					},
					{
						id:9,
						name: "园丁III",
						src: "../../static/images/king.png"
					},
					{
						id:10,
						name: "种植大师",
						src: "../../static/images/king.png"
					},
					{
						id:11,
						name: "植物学家",
						src: "../../static/images/king.png"
					},
					{
						id:12,
						name: "植物学家II",
						src: "../../static/images/king.png"
					},
					{
						id:13,
						name: "植物学家III",
						src: "../../static/images/king.png"
					},
					{
						id:14,
						name: "植物活百科",
						src: "../../static/images/king.png"
					},
				]
			}
		},
		onLoad:function(){
			// 成就"第一朵花"与"园丁"判定
			this.CheckAchOne(this.$store.state.sumflowers);
			// 成就"活力迸发"判定
			this.CheckAchTwo(this.$store.state.stepMess);
			// 成就"低碳生活"判定
			this.CheckAchThree(this.$store.state.stepsnum);
			// 成就"植物学家"判定
			this.CheckAchFour(this.$store.state.userData);
		},
		methods: {
			CheckAchOne:function(e){
				if(e){
					this.achievement[0].src="../../static/images/king_checked.png"
				}
				if(e>500){
					this.achievement[10].src="../../static/images/king_checked.png";
					this.achievement[9].src="../../static/images/king_checked.png";
					this.achievement[8].src="../../static/images/king_checked.png";
					this.achievement[7].src="../../static/images/king_checked.png";
				}
				else if(e>300){
					this.achievement[9].src="../../static/images/king_checked.png";
					this.achievement[8].src="../../static/images/king_checked.png";
					this.achievement[7].src="../../static/images/king_checked.png";
				}
				else if(e>100){
					this.achievement[8].src="../../static/images/king_checked.png";
					this.achievement[7].src="../../static/images/king_checked.png";
				}
				else if(e>30){
					this.achievement[7].src="../../static/images/king_checked.png";
				}
			},
			CheckAchTwo:function(e){
				if(e[30].step>60000){
					this.achievement[3].src="../../static/images/king_checked.png";
					this.achievement[2].src="../../static/images/king_checked.png";
					this.achievement[1].src="../../static/images/king_checked.png";
				}
				else if(e[30].step>30000){
					this.achievement[2].src="../../static/images/king_checked.png";
					this.achievement[1].src="../../static/images/king_checked.png";
				}
				else if(e[30].step>10000){
					this.achievement[1].src="../../static/images/king_checked.png"
				}
			},
			CheckAchThree:function(e){
				if(e>500000){
					this.achievement[6].src="../../static/images/king_checked.png";
					this.achievement[5].src="../../static/images/king_checked.png";
					this.achievement[4].src="../../static/images/king_checked.png";
				}
				else if(e>300000){
					this.achievement[5].src="../../static/images/king_checked.png";
					this.achievement[4].src="../../static/images/king_checked.png";
				}
				else if(e>100000){
					this.achievement[4].src="../../static/images/king_checked.png";
				}
			},
			CheckAchFour:function(e){
				var i = 0;
				for(;i<12;i++){
					this.UnlockFlowers+=e.floNum[i]
				}
				console.log(this.UnlockFlowers)
				if(this.UnlockFlowers==12){
					this.achievement[14].src="../../static/images/king_checked.png";
					this.achievement[13].src="../../static/images/king_checked.png";
					this.achievement[12].src="../../static/images/king_checked.png";
					this.achievement[11].src="../../static/images/king_checked.png";
				}
				else if(this.UnlockFlowers>=8){
					this.achievement[13].src="../../static/images/king_checked.png";
					this.achievement[12].src="../../static/images/king_checked.png";
					this.achievement[11].src="../../static/images/king_checked.png";
				}
				else if(this.UnlockFlowers>=5){
					this.achievement[12].src="../../static/images/king_checked.png";
					this.achievement[11].src="../../static/images/king_checked.png";
				}
				else if(this.UnlockFlowers>=3){
					this.achievement[11].src="../../static/images/king_checked.png";
				}
			}
		}
	}
</script>

<style>
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
		background-color: #FCFAED;
		color: #DCD88E;
	}
	
	.container{
		margin-bottom: 50rpx;
	}
</style>
