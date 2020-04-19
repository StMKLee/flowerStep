<template>
	<view class="container">
		<view v-for="(item,index) in flowers" :key="index" v-if="item.fshow">
			<view class="" :name="item.name">
				{{item.name}}
			</view>
			<view class="" :content="item.content">
				{{item.content}}
			</view>
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
						name:A花,
						content:abcdefg,
						fshow:false
					},
					{
						id:1,
						name:B花,
						content:abcdefghijk,
						fshow:false
					},
				]
			}
		},
		onLoad: function(option) {
			console.log(option.key)
			this.showMethedetail(option.key)
		},
		methods: {
			showMethedetail:function(e){
				if(this.flowers[0].id==e){
					console.log(success)
				}
				else if(this.flowers[1].id==e){
					
				}
			}
		}
	}
</script>

<style>

</style>
