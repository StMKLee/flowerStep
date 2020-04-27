<template>
	<view class="container">
		<view class="Logo">
			<view class="logoimg"></view>
		</view>
		<view class="title">
			<text>印迹园丁</text>
		</view>
		<view class="text">
			<view class="wenben">
				{{text}}
			</view>
			<view class="textstyle">
				{{text2}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"FLowers Step是一款由我们团队 <印迹园丁> 打造的微信小程序，它通过种花的形式将每日的微信运动步数呈现出来，以此来展现低碳生活对于环境的重要性，同时鼓励人们绿色出行。",
				text2:"团队成员：MKLee、nullcjm、Vance"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-image: url("https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-color: rgb(248,248,248);
	}
	.Logo{
		margin-top: 80rpx;
		height: 200rpx;
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logoimg{
		height: 200rpx;
		width: 200rpx;
		border-radius: 20rpx;
		background-image: url(../../static/images/teamicon.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.title{
		text-align: center;
		font-size: 45rpx;
		margin-bottom: 40rpx;
		margin-top: 10rpx;
	}
	.text{
		background-color: rgba(255,255,255,0.6);
		font-family: Arial, Helvetica, sans-serif;
		padding: 10upx;
		margin: 0 40upx 0 40upx;
		border: 2upx black solid;
		border-radius: 5%;
	}
	.textstyle{
		font-family: Arial, Helvetica, sans-serif;
		color: #3F536E;
		text-align: center;
		font-size: 38rpx;
	}
	.wenben{
		text-indent: 2em;
		margin-bottom: 20rpx;
		font-size: 38rpx;
	}
</style>
