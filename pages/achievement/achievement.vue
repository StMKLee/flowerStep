
<!-- 成就图鉴页 -->

<template>
	<view class="container">
		<view class="title">图鉴</view>
		<view class="maincontent">
			<view class="flowers" v-for="(item, index) in flowersbook" :key="index" v-show="item.show">
				<image class="flowerimg" :src="item.imgsrc" @click="jumptoflowerdetail(index)"></image>
				<view class="flowertip">{{item.name}}</view>
			</view>
			<view class="pagination">
				<uni-pagination show-icon="true" current="1" pageSize="6" total="12" @change="choosepage"></uni-pagination>
			</view>
		</view>
	</view>
</template>

<script>
	
	import uniPagination from '../../components/uni-pagination/uni-pagination.vue'
	
	export default {
		data() {
			return {
				flowersbook:[
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:1,
						show:true
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					},
					{
						name:"未解锁",
						imgsrc:"http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2tfsEtcr8zS*gsd6XmLwZ7*d83TAq1RTe4gTvYw3sgSgX*qCjstR7vD0MjghQ2o0A!!/mnull&bo=ywDIAAAAAAADByE!&rf=photolist&t=5",
						page:2,
						show:false
					}
				]
			}
		},
		methods: {
			choosepage:function(e){
				for (var i=0;i<this.flowersbook.length;i++) {
					if(this.flowersbook[i].page==e.current){
						this.flowersbook[i].show=true;
					}else{
						this.flowersbook[i].show=false;
					}
				}
			},
			getUserAchie:function(){	/* 获取用户数据库图鉴数据并解析 */
				var imgsrcls=this.$store.state.userData.hasFlo;
				if(imgsrcls!==undefined){
					for (var i=0;i<imgsrcls.length;i++) {
						let ifAchie=0;		/* 状态,等于0代表本地无相同的此imgsrc,则必须调用新花方法 */
						for (var j=0;j<this.flowersbook.length;j++) {
							if(this.flowersbook[j].imgsrc==imgsrcls[i]){
								ifAchie+=1;
							}else{
								continue;
							}
						};
						if(ifAchie!=0){
							continue;
						}else{
							this.getNew(imgsrcls[i]);
						}
					}
				}
			},
			getNew:function(e){		/* 获取图鉴新解锁的花朵 */
				if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"){
					this.flowersbook[0].name="a花";
					this.flowersbook[0].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq20p7yiWK.v*cClX1OEumLAglMrFuX.mWpdsXymb7xm*dN.Tdguke8.rziwjf6pkmw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"){
					this.flowersbook[1].name="b花";
					this.flowersbook[1].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq20p7yiWK.v*cClX1OEumLAglMrFuX.mWpdsXymb7xm*dN.Tdguke8.rziwjf6pkmw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5";
				}
			},
			jumptoflowerdetail:function(e){
				/* 先判断是否解锁了,解锁的才打开详细页 */
				if(this.flowersbook[e].name=="未解锁"){
					return;		/* 什么都不干 */
				}else{
					this.$store.state.floDetailIdx=e;
					uni.navigateTo({
						url:"../flowerdetail/flowerdetail"
					})
				}
			}
		},
		onShow:function(){
			this.getUserAchie();
		},
		components:{
			uniPagination
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;        /* 设置宽高尺寸为padding尺寸和border尺寸之和 */
	}
	page{
		background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxeNWYxbhpcyHTduW2Edpvxr70AFMIZC445KXJtlKydjbtcjdg0geJ2rk6gO83yMQg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5");
		background-color: #f0ebc2;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.container{
		width: 750rpx;
		height: auto;
		min-height: 100vh;
	}
	.maincontent{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 750rpx;
		height: auto;
	}
	.title{
		width: 750rpx;
		height: auto;
		font-size: 60rpx;
		font-weight: 800;
		color: #b7732e;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
		padding-bottom: 10rpx;
		text-align: center;
	}
	.flowers{
		box-sizing: border-box;
		width: 200rpx;
		height: auto;
		background-color: #f1f9f9;
		border-color: #54c7e9;
		border-radius: 8rpx;
		border-width: 3rpx;
		border-style: outset;
		margin-top: 35rpx;
		margin-left: 80rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.flowerimg{
		width: 150rpx;
		height: 150rpx;
		margin-top: 20rpx;
		margin-bottom: 15rpx;
		border-radius: 5rpx;
	}
	.flowertip{
		text-align: center;
		width: 200rpx;
		height: auto;
		font-size: 30rpx;
		font-weight: 500;
		color: #002145;
		padding-top: 10rpx;
		margin-bottom: 5rpx;
	}
	.pagination{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: auto;
		margin-top: 100rpx;
		margin-bottom: 10rpx;
	}
</style>
