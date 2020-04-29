<template>
	<view class="container">
		<view v-for="(item,index) in flowers" :key="index" v-if="item.fshow">
			<image :src="item.img" mode=""></image>
			<view class="flowersname" :name="item.name">
				{{item.name}}
			</view>
			<view class="flowerscontent" :content="item.content">
				<text class="detail">详情：</text>{{item.content}}
			</view>
			<view class="flowersnum">拥有数：{{theNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flowers: [{
						id: 0,
						name: "A花",
						/* 字符串内容记得加引号! */
						content: "A花这是A花是怎么回事呢？A花相信大家都很熟悉，但是A花这是A花是怎么回事呢，下面就让小编带大家一起了解吧。A花这是A花，其实就是A花很好看，大家可能会很惊讶A花怎么会这是A花呢？但事实就是这样，小编也感到非常惊讶。这就是关于A花这是A花的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！",
						fshow: false,
						img: "http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 1,
						name: "B花",
						content: "B花是假花是怎么回事呢？B花相信大家都很熟悉，但是B花是假花是怎么回事呢，下面就让小编带大家一起了解吧。B花是假花，其实就是真花，大家可能会很惊讶B花怎么会是假花呢？但事实就是这样，小编也感到非常惊讶。这就是关于B花是假花的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq20p7yiWK.v*cClX1OEumLAglMrFuX.mWpdsXymb7xm*dN.Tdguke8.rziwjf6pkmw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"
					},
				],
				theNum: 0 /* 拥有过多少此种花 */
			}
		},
		onLoad: function() {

		},
		onShow: function() { /* 判断方法要放这里，代表每次展示页面都判断一下，onload是初始化加载 */
			this.getDetail(); /* 获得参数的方法 */
		},
		methods: {
			getDetail: function() {
				this.flowers[this.$store.state.floDetailIdx].fshow = true;
				this.theNum = this.$store.state.userData.floNum[this.$store.state.floDetailIdx];
			}
		}
	}
</script>

<style>
	page {
		background-color: #ecf4c4;
	}

	.flowersname {
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
		padding: 10rpx;
		color: #333333;
		font-size: 60rpx;
		font-weight: 600;
		text-align: center;
	}

	image {
		border: 1rpx rgba(250, 214, 137, 0.5) solid;
		border-radius: 15%;
		width: 400rpx;
		height: 400rpx;
		position: relative;
		left: 180rpx;
		background-color: rgba(250, 214, 137, 0.5);
		margin-top: 10rpx;
	}

	.detail {
		font-weight: 600;
	}

	.flowerscontent,
	.flowersnum {
		margin-left: 15rpx;
		margin-right: 15rpx;
		margin-top: 10rpx;
		padding: 15rpx;
		color: #333333;
	}

	.flowerscontent {
		border: 1rpx rgba(250, 214, 137, 0.5) solid;
		background-color: rgba(250, 214, 137, 0.5);
		border-radius: 5%;
	}

	.flowersnum {
		font-weight: 600;
		text-align: center;
	}
</style>
