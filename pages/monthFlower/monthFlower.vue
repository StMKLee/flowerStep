
<!-- 每月花总量展示页（暂以花园形式展示） -->

<template>
	<view>
		<view class="num" >
			近31天总步数：{{stepsnum}}
		</view>
		<view class="num sum">
			近31天总花数：{{sumflowers}}
		</view>
		<view class="hudie yi">　</view>
		<view class="hudie er">　</view>
		<view class="hudie san">　</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stepsnum:0,
				flowernum:0,
				sumflowers:0
			}
		},
		onLoad:function(){
			this.stepsnum=this.$store.state.stepsnum;
			this.sumflowers=this.$store.state.sumflowers;
			
		},
		methods: {
	
		}
	}
</script>

<style>
page{
	background-color: #FEFEFF;
	color: #33A6B8;
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq5HNSVX25goy4D2H01x4RAeJMA0wrxTFExzdY6JZedr4By8Zw5dxkK4Xx9hkEI0KYw!!/b&bo=OARSBgAAAAARB1g!&rf=viewer_4");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: bottom;
}
.sum{
	position: fixed;
	top:0;
	right: 0;
	margin-right: 15rpx;
}
.num{
	font-size: 30rpx;
	margin-left: 15rpx;
}
.hudie{
	position: absolute;
	width: 200rpx;
	height: 200rpx;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	opacity: 0.6;
}
.yi{
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq6q0rOoU5bzEtyBAVWVUCjjaWXUc0mWj81AclE7RJML9NqWshc9SxAXSVy3kTb0fxw!!/b&bo=0ALQAgAAAAACByM!&rf=viewer_4");
	top: 10vh;
	left: 450rpx;
}
.er{
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq1opfl21nZeWid5f2.QqlLSArRBTwS5f1Rm561QANrOqxdFIwmyfQylB2VmZNnUyng!!/b&bo=0ALQAgAAAAACByM!&rf=viewer_4");
	top: 30vh;
	left: 50rpx;
}
.san{
	background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxaVLpF4cXOpAU.3PeGKD*vpUClEFyKq9Di1.7O9QURHqfG1B2qWVwKhQe5xhDVB2w!!/b&bo=0ALQAgAAAAACByM!&rf=viewer_4");
	top: 60vh;
	left: 550rpx;
}
</style>
