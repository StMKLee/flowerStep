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
			<view class="flowerscontent" :content="item.huayu">
				<text class="detail">花语：</text>{{item.huayu}}
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
						name: "使君子",
						/* 字符串内容记得加引号! */
						content: "使君子是使君子科，使君子属攀援灌木，叶对生，椭圆形，两面均被灰白色柔毛。穗状花序，倒挂下垂。花期夏秋。果有五棱，熟时黑色，种子白色。",
						huayu:"身体健康",
						fshow: false,
						img: "http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqzimWXuarVLoPqqtXtKfxFliye2LDvZTJJZW72I3uE2eCmDUesei5iN1EH1BPPH1yQ!!/mnull&bo=xgLGAgAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 1,
						name: "风信子",
						content: "风信子是多年草本球根类植物，鳞茎卵形，有膜质外皮，皮膜颜色与花色成正相关，未开花时形如大蒜，原产地中海沿岸及小亚细亚一带，是研究发现的会开花的植物中最香的一个品种。喜阳光充足和比较湿润的生长环境，要求排水良好和肥沃的沙壤土。",
						huayu:"胜利、竞技、喜悦、爱意、幸福、浓情、倾慕、顽固、生命、得意、永远的怀念",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2.V*CbzCmYkwj6.OkGi297UDriCVmE0dwYOVCgaIpMiTP.1u13igfhK*EaEEHFpnw!!/mnull&bo=egF6AQAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 2,
						name: "三叶草",
						content: "三叶草，又名车轴草，别名香车叶草。豆目，蝶形花科，车轴草属，多年生草本植物，身高为10-60厘米；是具有广泛栽培意义的一类重要牧草作物，也是重要的绿肥与水土保持植物。性喜凉爽湿润的气候，耐旱性差，耐湿，在稍酸性或盐碱性土壤上均能生长。",
						huayu:"三叶草的每片叶子都有着不同的意义，当中包含了人生梦寐以求的东西：名誉、财富、爱情及健康，倘若同时拥有这些东西，那就是幸运了。第一片叶子代表真爱,第二片叶子代表健康,第三片叶子代表名誉",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq4*227uDpDgsh1nc*8Yi4XVmCJHF3YHw6Qtnc5YOBoxEuuL9ENuLsh2jjMEg29n3tQ!!/mnull&bo=rgGuAQAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 3,
						name: "四叶草",
						content: "四叶草又名幸运草，学名苜蓿草，是多年生草本植物，叶形呈心形状，叶心较深色的部分亦是心形制。",
						huayu:"胜利、竞技、喜悦、爱意、幸福、浓情、倾慕、顽固、生命、得意、永远的怀念",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq5*FaggUySDnWeh*zj3cjGBICNsgFbJ6R*sai76LUFvETtwaloIFPSO8YaW2nJWsvQ!!/mnull&bo=qgGpAQAAAAADByE!&rf=photolist&t=5"
					},
					{
						id: 4,
						name: "满天星",
						content: "满天星，又名圆锥石头花，是石竹科，石头花属的多年生草本植物，根粗壮。茎单生，直立，多分枝。叶片披针形或线状披针形，顶端渐尖，中脉明显。圆锥状聚伞花序多分枝，花小而多；花梗纤细，苞片三角形，花萼宽钟形，花瓣白色或淡红色，匙形。蒴果球形，种子小，圆形。花期6-8月，果期8-9月。",
						huayu:"清纯、致远、浪漫。",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqwrPCeHI.*yIYcUoTXCh4ObG.TDwrPeA7BMQI58YFS72lmt9ld1aUM6yy78udkeCOw!!/mnull&bo=TQJ3AgAAAAADBxg!&rf=photolist&t=5"
					},
					{
						id: 5,
						name: "紫罗兰",
						content: "紫罗兰是十字花科、紫罗兰属二年生或多年生草本。全株密被灰白色具柄的分枝柔毛。茎直立，多分枝，基部稍木质化。叶片长圆形至倒披针形或匙形。",
						huayu:"永恒的美与爱；质朴，美德，盛夏的清凉。",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq1TulXQTXLDiiqbNG9vZcVbmwISqbVK.HM4PQW3PmKtXwwvHYcfNIRlpkmejWETzvA!!/mnull&bo=rQGtAQAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 6,
						name: "樱花",
						content: "樱花原产北半球温带环喜马拉雅山地区，在世界各地都有生长。花每枝3到5朵，成伞状花序，花瓣先端缺刻，花色多为白色、粉红色。花常于3月与叶同放或叶后开花，随季节变化，樱花花色幽香艳丽，常用于园林观赏。樱花可分单瓣和复瓣两类，单瓣类能开花结果，复瓣类多半不结果。",
						huayu:"爱情与希望的象征，代表着高雅，质朴纯洁的爱情。樱花宛如懵懂少女，安静地在春天开放，满树的白色粉色的樱花，是对情人诉说爱情的最美语言。心中的某个人，就如那场寂寞的樱花雨，缓缓消失在时光的深处，留下永恒的记忆。",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.DCRxfMbU3cZhfM1gK9EXu1KiHUiboEnkTPQSvnuCzQEz.hnVSlu6V757U47P80lg!!/mnull&bo=rQGtAQAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 7,
						name: "向日葵",
						content: "向日葵是菊科、向日葵属的植物。因花序随太阳转动而得名。一年生草本，高1-3.5米，最高可达9米。茎直立，圆形多棱角，质硬被白色粗硬毛。广卵形的叶片通常互生，先端锐突或渐尖，有基出3脉，边缘具粗锯齿，两面粗糙，被毛，有长柄。头状花序，直径10-30厘米，单生于茎顶或枝端。总苞片多层，叶质，覆瓦状排列，被长硬毛，夏季开花，花序边缘生中性的黄色舌状花，不结实。花序中部为两性管状花，棕色或紫色，能结实。矩卵形瘦果，果皮木质化，灰色或黑色，称葵花籽。",
						huayu:"信念、光辉、高傲、忠诚、爱慕，寓意是沉默的爱，代表着勇敢地去追求自己想要的幸福。",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq8P4ETaYihwkQVBvBNlrXuShQ9.7qx6mXEbHj40OFBKdPrvaYHgnw2COZWOD.UpAiw!!/mnull&bo=ZAJkAgAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 8,
						name: "金茶花",
						content: "金花茶属于山茶科、山茶属，与茶、山茶、南山茶、油茶、茶梅等为孪生姐妹，是国家一级保护植物之一。金花茶的花金黄色，耀眼夺目，仿佛涂着一层蜡，晶莹而油润，似有半透明之感。金花茶单生于叶腋，花开时有杯状的、壶状的或碗状的，娇艳多姿，秀丽雅致。",
						huayu:"谦逊、理想的爱、美德、可爱",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq8dpMrjPSRINlsCzYKFoBN*j5zs26wFDw8o5SrfdbIbijucEG0GQ7E.HnQk9wBEiWw!!/mnull&bo=iQGJAQAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 9,
						name: "巨魔芋",
						content: "巨魔芋是天南星科魔芋属植物, 被列为世界濒危植物。多年生球茎，块茎直径可达65厘米，最重可超过100千克，其叶柄通常高3-4米，叶片直径超过5米，覆盖面积超过20平方米。花序开放时，散发出刺鼻的尸臭。",
						huayu:"走向死亡",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq8jw9zun3NSzwhQsg6SPVZaTHXKRhA88JYyisb3o0NrOyEIkoC.5ZB3vePqyKKi4kg!!/mnull&bo=7QLtAgAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 10,
						name: "生石花",
						content: "生石花是石竹目，番杏科生石花属全属植物的总称，约有40种。多年生肉质草本，几乎无茎；球状叶色彩多变，叶表皮较硬，色彩多变，顶部具有深色树枝状凹陷纹路，或花纹斑点，称作“视窗”。植物顶部有一裂缝，裂缝中开花，花单生，雏菊状，花茎2-3厘米，花白或黄色，花期盛夏至中秋。",
						huayu:"坚强、生命宝石",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq1qFRV4niVYsIJU2Z.KaIdlDbQEXZbBviJWgSnniGrzltt45172by0mxHfy5ZsAgig!!/mnull&bo=fwJ*AgAAAAADByI!&rf=photolist&t=5"
					},
					{
						id: 11,
						name: "希望之花",
						content: "出自于TV动画《机动战士高达：铁血的奥尔芬斯》第二期的ED2的《フリージア》中的歌词“希望のはな 繋いだ絆を“。在动画48集，奥尔加·伊兹卡死亡时插入了这首片尾曲，导致这首歌也风评被害。奥尔加死时的歌词「希望之花，连接着我们的羁绊」也因此流行。",
						huayu:"不要停下来啊",
						fshow: false,
						img:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq5ATuul3xUc8iubttJRnz84iFjCaoBHsx*DM*v*gdGFlDJomzFu00KQoOHYc1tH1mg!!/mnull&bo=JAEkAQAAAAADByI!&rf=photolist&t=5"
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
