
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
		background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq3f4Y7iPfx46tWEvgQhztDVYa1XvlRj5Po5h5hmUgINjB8qxGNL4kQnkQRIro0eDfQ!!/mnull&bo=9AHlAgAAAAARByI!&rf=photolist&t=5");
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
		font-size: 70rpx;
		font-weight: 800;
		color: #b7732e;
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		padding-bottom: 10rpx;
		border-bottom: #cfd98c 2px solid;
		text-align: center;
	}
	.flowers{
		box-sizing: border-box;
		width: 300rpx;
		height: auto;
		border-color: #714819;
		border-radius: 10rpx;
		border-width: 10rpx;
		border-style: solid;
		margin-top: 20rpx;
		margin-left: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.flowerimg{
		width: 250rpx;
		height: 250rpx;
		margin-top: 20rpx;
		margin-bottom: 15rpx;
		border: #9c7722 5rpx solid;
		border-radius: 5rpx;
	}
	.flowertip{
		text-align: center;
		width: 300rpx;
		height: auto;
		font-size: 40rpx;
		font-weight: 500;
		color: #002145;
		border-top: #450000 3rpx solid;
		padding-top: 10rpx;
		margin-bottom: 5rpx;
	}
	.pagination{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: auto;
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}
</style>
