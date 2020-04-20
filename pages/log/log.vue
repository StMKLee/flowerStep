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
