<template>
	<view>
		<view class="plant">
			<view class="intxt">FLOWERS STEP</view>
			<view class="plantin" @click="jumpto">
				　
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jumpto:function(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
page{
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq58b5*RX3i2WudyaFUdt0CCioqlgXVSIrIqvdr49f0GZm.WJ4fnLw3jonzSP1YCXXw!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5");
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.plant{
	position: fixed;
	top: 100rpx;
	width: 750rpx;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.plantin{
	margin-top: 100rpx;
	width: 230rpx;
	height: 170rpx;
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqwozVg0XITGwKqq2rMzpGeTzl4lX3MQ8Kijkmt098RJIoyQNqhdu8U2pnYRZdWkl2g!!/mnull&bo=OAQ4BAAAAAADByI!&rf=photolist&t=5");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.intxt{
	text-align: center;
	font-size: 78rpx;
	color: #a4ce09;
	font-weight: 600;
}
</style>
