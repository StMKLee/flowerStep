<template>
	<view class="container">
		<view v-for="(item,index) in flowers" :key="index" v-if="item.fshow">
			<view class="" :name="item.name">
				{{item.name}}
			</view>
			<view class="" :content="item.content">
				{{item.content}}
			</view>
			<view>{{theNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flowers:[
					{
						id:0,
						name:"A花",				/* 字符串内容记得加引号! */
						content:"这是A花",
						fshow:false
					},
					{
						id:1,
						name:"B花",
						content:"这是B花",
						fshow:false
					},
				],
				theNum:0		/* 拥有过多少此种花 */
			}
		},
		onLoad: function() {
			
		},
		onShow: function() {		/* 判断方法要放这里，代表每次展示页面都判断一下，onload是初始化加载 */
			this.getDetail();		/* 获得参数的方法 */
		},
		methods: {
			getDetail:function(){
				this.flowers[this.$store.state.floDetailIdx].fshow=true;
				this.theNum=this.$store.state.userData.floNum[this.$store.state.floDetailIdx];
			}
		}
	}
</script>

<style>

</style>
