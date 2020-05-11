
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
				if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqyqcuYnnrftx73ONwRvSCtes5zcvz560jDmAGFZsvPnLxGd5MxfH1cn*L.tHnoq10Q!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[0].name="使君子";
					this.flowersbook[0].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqyqcuYnnrftx73ONwRvSCtes5zcvz560jDmAGFZsvPnLxGd5MxfH1cn*L.tHnoq10Q!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq8ncN1PxDW8m.j*qCBpPIMI2OPS.flq0Zcp3gQ90*CLkZmvdhpah2xMNSbImFApJyg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[1].name="风信子";
					this.flowersbook[1].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq8ncN1PxDW8m.j*qCBpPIMI2OPS.flq0Zcp3gQ90*CLkZmvdhpah2xMNSbImFApJyg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.4w81BWUnLsxg13yvScF7o2u**PDamNVx*Z4VY3XUfw2ZDCRmYtisTHpGygzexrfw!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[2].name="三叶草";
					this.flowersbook[2].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.4w81BWUnLsxg13yvScF7o2u**PDamNVx*Z4VY3XUfw2ZDCRmYtisTHpGygzexrfw!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxvwHow5wuH9MHrS*JWJ9icNRwsPyzfeGGp5eBrE4zPYIZ85ewfc.rGfMppFCS2exw!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[3].name="四叶草";
					this.flowersbook[3].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxvwHow5wuH9MHrS*JWJ9icNRwsPyzfeGGp5eBrE4zPYIZ85ewfc.rGfMppFCS2exw!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq6jYdGy.7KxX8SEjTysGlKR91UoDFH6WPcI4TM1PUQbqAp7bVCUivrhGDS9Pm7G*NA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[4].name="满天星";
					this.flowersbook[4].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq6jYdGy.7KxX8SEjTysGlKR91UoDFH6WPcI4TM1PUQbqAp7bVCUivrhGDS9Pm7G*NA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2ZkyhccbGWECCredKj*pEauZsz9kUzITxfu4cljpKYFGju0z4kVzbKnrX1CGQfg1Q!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[5].name="紫罗兰";
					this.flowersbook[5].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq2ZkyhccbGWECCredKj*pEauZsz9kUzITxfu4cljpKYFGju0z4kVzbKnrX1CGQfg1Q!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aqw5hw8FVpD7106DUsTLM3F10o3SUyYCbBgJxh2HxUDT.FN68ObekRPEe61o1yo2.Fg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[6].name="樱花";
					this.flowersbook[6].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aqw5hw8FVpD7106DUsTLM3F10o3SUyYCbBgJxh2HxUDT.FN68ObekRPEe61o1yo2.Fg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqzfPdQOrJBUlSWHxBpDP.RWYdr6bUvURfnF6FVvr3x73eaK0QZLAMef4Slr7j9Pkqg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[7].name="向日葵";
					this.flowersbook[7].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqzfPdQOrJBUlSWHxBpDP.RWYdr6bUvURfnF6FVvr3x73eaK0QZLAMef4Slr7j9Pkqg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq0fQMuXeH1KWAiQqobyyD6xDOehtPLNwd5ERlse7wiqtfMfcHKqyAFFjG0V9QnBh0A!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[8].name="金茶花";
					this.flowersbook[8].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq0fQMuXeH1KWAiQqobyyD6xDOehtPLNwd5ERlse7wiqtfMfcHKqyAFFjG0V9QnBh0A!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxgrHlUGfsibUffq2A9PDDLcFK5aNYMQN3*PvxfN1du0QnWe2cnmUSa3Z8V9E*aZxg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[9].name="巨魔芋";
					this.flowersbook[9].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4AqxgrHlUGfsibUffq2A9PDDLcFK5aNYMQN3*PvxfN1du0QnWe2cnmUSa3Z8V9E*aZxg!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq5lvU8eEqlOqEit0RjKnb*EV*vHpzZ6NGTQ6GqUBdNtyxi0RwiX1m8xpylanKynBTA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[10].name="生石花";
					this.flowersbook[10].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq5lvU8eEqlOqEit0RjKnb*EV*vHpzZ6NGTQ6GqUBdNtyxi0RwiX1m8xpylanKynBTA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
				}else if(e=="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq0HkSTz531PCOu*PaK11iriW025VAd9Bo3G6YUpnpvoQ59S.QCLrZEGx*ok*Hc2zJA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5"){
					this.flowersbook[11].name="希望之花";
					this.flowersbook[11].imgsrc="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq0HkSTz531PCOu*PaK11iriW025VAd9Bo3G6YUpnpvoQ59S.QCLrZEGx*ok*Hc2zJA!!/mnull&bo=OASABwAAAAADB5k!&rf=photolist&t=5";
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
		background-size: cover;
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
		background-color: rgba(250, 214, 137, 0.5);
		border-color: #54c7e9;
		border-radius: 8rpx;
		border-width: 3rpx;
		border-style: outset;
		margin-top: 35rpx;
		margin-left: 116rpx;
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
