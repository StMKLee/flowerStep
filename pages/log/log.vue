<template>
	<view>
		<view class="title">
			工作日志
		</view>
		
		<view class="content" v-for="(item,index) in logs" :key="index" >
			<view :logtexts="item.logtexts">
				{{index+1}}: {{item.logtexts}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logs:[
					{
						logtexts:"添加了工作日志",
					},
					{
						logtexts:"添加了花的详情页和传参方法"
					},
					{
						logtexts:"修改图鉴传参到花详情页方式，采用vuex"
					},
					{
						logtexts:"完成保存今日首页花朵数量位置种类等状态的功能"
					},
					{
						logtexts:"添加每晚0点清理数据库今日花状态数据的云函数"
					},
					{
						logtexts:"添加了月花种植数页的详细布局和月种植数计算方法"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background-color: #81C7D4;
	color: #FFFFFF;
}
.title{
	display: flex;
	font-size: 40upx;
	font-weight: bolder;
	justify-content: center;
	margin-bottom: 28upx;
}
.content{
	display: flex;
	font-size: 28upx;
	justify-content: center;
	margin-bottom: 20upx;
}
</style>
