<template>
	<view class="container">
		<view class="Logo">
			<image src="../../static/images/user.png" mode=""></image>
		</view>
		<view class="title">
			<text>团队名称</text>
		</view>
		<view class="text">
			<text>团队详情团队详情团队详情团队详情团队详情团队详情团队详情团队详情团队详情
			详情团队详情团队详情团队详情团队详情团队详情团队详情团队详情
			团队详情团队详情团队详情团队详情团队详情团队详情团队</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				teamdetail:[
					队伍详情
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-image: url("http://a1.qpic.cn/psc?/V10EvO2w4BqwM9/oGEovji5dOWVs5ze3TLFduS69g.mO1x0.Koj5HuvQlyAcU1RvLd*X1uG3Y1MEzVuPRAy1wM9kckLnIQfDqpaFQ!!/b&ek=1&kp=1&pt=0&bo=vAKWAwAAAAARFws!&tl=3&vuin=1029169758&tm=1586523600&sce=60-2-2&rf=viewer_4");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-color: rgb(248,248,248);
	}
	.Logo{
		text-align: center;
		margin-top: 80upx;
	}
	.title{
		text-align: center;
		font-size: 72upx;
		margin-bottom: 40upx;
	}
	.text{
		background-color: rgba(255,255,255,0.4);
		font-family: Arial, Helvetica, sans-serif;
		padding: 10upx;
		margin: 0 40upx 0 40upx;
		border: 2upx black solid;
		border-radius: 5%;
	}
</style>
