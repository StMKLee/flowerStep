<template>
	<view class="container">
		<view class="Logo">
			<image src="../../static/images/teamicon.png" mode=""></image>
		</view>
		<view class="title">
			<text>印迹园丁</text>
		</view>
		<view class="text">
			<view>
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
				text:"FLowers Step是一款由我们团队打造的微信小程序，它通过种花的形式将每日的微信运动步数呈现出来，以此来展现低碳生活对于环境的重要性。",
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
		text-align: center;
		margin-top: 80upx;
	}
	image{
		width: 200rpx;
		height: 200rpx;
	}
	.title{
		text-align: center;
		font-size: 48upx;
		margin-bottom: 40upx;
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
	}
</style>
