
<!-- 根据当日步数随机展示花的页面，展示logo等 -->

<template>
	<view class="container">
		<view class="maincontent">			<!-- 主内容容器 -->
			<view class="shouquan" v-if="accessNo">			<!-- 初始授权用户信息 -->
				<button open-type="getUserInfo" @getuserinfo="getUserMess" type="primary" size="mini">
					登录
				</button>
			</view>
			<view v-if="!accessNo" :class="stepclass">            <!-- 步数 -->
				今日步数：{{showStep}}
			</view>
			<view class="dateAndTime">       <!-- 日期时间 -->
				{{year}}年{{month}}月{{day}}日&nbsp;&nbsp;{{hour}}:{{minute}}&nbsp;&nbsp;星期{{week}}
			</view>
		</view>
		<view :class="item.flowerClass" class="allflowers" v-for="(item,index) in allflowers" :key="index" :style="{width:flowerWidth+'rpx'}">		
		<!-- 展示花的view -->
			<image :src="item.src" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/* 日期时间对象 */
				year:null,
				month:null,
				day:null,
				hour:null,
				minute:null,
				week:null,
				accessNo:false,
				showStep:0,
				stepTime:null,
				stepclass:"steps",
				plantnum:null,
				flowerWidth:100,
				flowerdonghua:null,
				flowernum:0,		/* 花数量 */
				donghuazt:0,		/* 代表动画状态,0是正在变大,1是正在变小 */
				allflowers:[],		/* 今日的花 */
				areaUsed:[		/* 区域的使用状况 */
					{
						id:0,
						used:false
					},
					{
						id:1,
						used:false
					},
					{
						id:2,
						used:false
					},
					{
						id:3,
						used:false
					},
					{
						id:4,
						used:false
					},
					{
						id:5,
						used:false
					},
					{
						id:6,
						used:false
					},
					{
						id:7,
						used:false
					},
					{
						id:8,
						used:false
					},
					{
						id:9,
						used:false
					},
					{
						id:10,
						used:false
					},
					{
						id:11,
						used:false
					},
					{
						id:12,
						used:false
					},
					{
						id:13,
						used:false
					},
					{
						id:14,
						used:false
					},
					{
						id:15,
						used:false
					},
					{
						id:16,
						used:false
					},
					{
						id:17,
						used:false
					},
					{
						id:18,
						used:false
					},
					{
						id:19,
						used:false
					},
					{
						id:20,
						used:false
					},
					{
						id:21,
						used:false
					},
					{
						id:22,
						used:false
					},
					{
						id:23,
						used:false
					},
					{
						id:24,
						used:false
					},
					{
						id:25,
						used:false
					},
					{
						id:26,
						used:false
					},
					{
						id:27,
						used:false
					},
					{
						id:28,
						used:false
					},
					{
						id:29,
						used:false
					}
				]		
			}
		},
		computed:{
			
		},
		onLoad:function(){
			
		},
		onReady:function(){
			
		},
		onShow:function(){
			this.checkAccess();		/* 调用检测权限方法 */
			this.tranflowers();		/* 调用花变大变小方法 */
			var _this=this;
			_this.getTheDateTime();			  /* 初始化先执行一次时间获取方法 */
			setInterval(function(){			/* 一秒执行一次时间获取方法 */
				_this.getTheDateTime();
			},1000)
		},
		methods: {
			getTheDateTime:function(){       /* 获取时间日期的方法 */
				var dt = new Date();
				this.year=dt.getFullYear();
				this.month=dt.getMonth()+1;
				this.day=dt.getDate();
				this.hour=dt.getHours();
				if(dt.getMinutes()>=0&&dt.getMinutes()<=9){
					this.minute="0"+dt.getMinutes();       /* 0分到9分前面加0字符 */
				}else{
					this.minute=dt.getMinutes();
				};
				/* 处理星期,转为汉字 */
				if(dt.getDay()==0){
					this.week="日";
				}else if(dt.getDay()==1){
					this.week="一";
				}else if(dt.getDay()==2){
					this.week="二";
				}else if(dt.getDay()==3){
					this.week="三";
				}else if(dt.getDay()==4){
					this.week="四";
				}else if(dt.getDay()==5){
					this.week="五";
				}else if(dt.getDay()==6){
					this.week="六";
				}
			},
			getUserMess:function(){		/* 获取用户信息(调用登录接口和用户信息接口) */
				var that=this;
				uni.login({
					provider:'weixin',
					success(Lres) {
						console.log("login success");
						uni.getUserInfo({
							provider:'weixin',
							success(Ires) {
								console.log("getUserInfo success");
								that.$store.state.userMess=Ires.userInfo;
								that.accessNo=false;
							},
							fail() {
								console.log("getUserInfo fail")
							}
						})
					},
					fail() {
						console("login fail")
					}
				})
			},
			checkAccess:function(){
				var that=this;
				uni.getSetting({
					success(res) {
						if(res.authSetting['scope.userInfo']){		/* 用户信息已经授权 */
							that.getUserMess();
							that.accessNo=false;
						}else if(!res.authSetting['scope.userInfo']){
							that.accessNo=true;
							uni.showModal({
								title:"登录提示",
								content:"请登录以授权",
								showCancel:false
							})
						};
						if(res.authSetting['scope.werun']){		/* 步数已经授权 */
							//获取今日步数
							uni.showLoading({
								title:"加载中，请稍等",
								mask:true,
								success() {
									console.log("Loading成功")
								},
								fail() {
									console.log("Loading失败")
								}
							});
							that.showStep=that.$store.state.stepMess[that.$store.state.stepMess.length-1].step;
							that.stepTime=that.$store.state.stepMess[that.$store.state.stepMess.length-1].timestamp;
							that.stepclass="steps";
							that.howmanyFlowers();
							uni.hideLoading();
						}else if(!res.authSetting['scope.werun']){
							that.showStep="请在 个人中心->帮助与反馈->权限设置 里打开微信步数权限";
							that.stepclass="istip";
						}
					}
				})
			},
			tranflowers:function(){		/* 花动画方法 */
				var that=this;
				clearInterval(that.flowerdonghua);
				that.flowerdonghua=setInterval(function(){
					if(that.flowerWidth<110&&that.donghuazt==0){
						that.flowerWidth+=1;
					}else if(that.flowerWidth==110&&that.donghuazt==0){
						that.donghuazt=1;
						that.flowerWidth-=1;
					}else if(that.flowerWidth>100&&that.donghuazt==1){
						that.flowerWidth-=1;
					}else if(that.flowerWidth==100&&that.donghuazt==1){
						that.donghuazt=0;
						that.flowerWidth+=1;
					}
				},100)
			},
			howmanyFlowers:function(){		/* 花多少方法 */
				if(this.showStep>=1000&&this.showStep<=10000){
					var a=this.showStep/1000;
					this.flowernum=Math.floor(a);
					this.getflowers();
				}else if(this.showStep>10000&&this.showStep<=30000){
					var b1=this.showStep-10000;
					var b2=b1/2000;
					var b3=Math.floor(b2);
					this.flowernum=b3+10;
					this.getflowers();
				}else if(this.showStep>30000&&this.showStep<=60000){
					var c1=this.showStep-30000;
					var c2=b1/3000;
					var c3=Math.floor(c2);
					this.flowernum=c3+20;
					this.getflowers();
				}else if(this.showStep>60000){
					this.flowernum=30;
					this.getflowers();
				}else if(this.showStep<1000){
					this.flowernum=0;
				};
				console.log("今日有花："+this.flowernum);
			},
			getflowers:function(){		/* 根据花数量获取花,包括产生随机位置等 */
				for (var i=0;i<this.flowernum;i++) {		/* 产生几朵花 */
					var x=Math.random();		/* 决定花种类 */
					var y=Math.random()*30;		/* 决定花位置 */
					var z=Math.floor(y);		/* 决定花位置 */
					var zhonglei;
					var weizhi;
					if(x<=0.5){
						zhonglei="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq20p7yiWK.v*cClX1OEumLAglMrFuX.mWpdsXymb7xm*dN.Tdguke8.rziwjf6pkmw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5";
					}else{
						zhonglei="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"
					};
					while(this.areaUsed[z].used==true){		/* 寻找空的位置 */
						if(this.areaUsed[z].id<29){
							z+=1;
						}else if(this.areaUsed[z]==29){
							z=0;
						}
					};
					this.areaUsed[z].used=true;
					weizhi="area"+z;
					var oneflower={		/* 一朵花的对象 */
						src:zhonglei,
						flowerClass:weizhi
					};
					/* 将一朵花的对象加入代表所有花的对象数组 */
					this.allflowers.push(oneflower);
				}
				console.log(this.allflowers);
			}
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
		background-image: url("http://m.qpic.cn/psc?/V10EvO2w4BqwM9/oGEovji5dOWVs5ze3TLFdg1oGwFW1S3sBPnp5cpHU3iMzUdH3tpJU8z98VuzZF0djr3kcpURN81BKjieWgSEQQ!!/b&bo=OATuBQAAAAARB.c!&rf=viewer_4");
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.container{
		width: 750rpx;
		min-height: 100vh;
		height: 100vh;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}
	.maincontent{
		width: 700rpx;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.steps{
		font-size: 30rpx;
		position: fixed;
		left: 0;
		color: #A5FECB;
	}
	.istip{
		font-size: 50rpx;
		margin-top: 15vh;
		color: #900000;
		text-align: center;
	}
	.dateAndTime{
		font-size: 30rpx;
		margin-top: 10vh;
		color: #f64f59;
	}
	.shouquan{
		margin-top: 15vh;
	}
	.allflowers{
		position: absolute;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.area0{
		bottom: 2vh;
		left: 10rpx;
		height: 10vh;
		z-index: 29;
	}
	.area1{
		bottom: 3vh;
		left: 115rpx;
		height: 10vh;
		z-index: 28;
	}
	.area2{
		bottom: 1vh;
		left: 212rpx;
		height: 10vh;
		z-index: 30;
	}
	.area3{
		bottom: 5vh;
		left: 300rpx;
		height: 10vh;
		z-index: 24;
	}
	.area4{
		bottom: 3vh;
		left: 405rpx;
		height: 10vh;
		z-index: 27;
	}
	.area5{
		bottom: 4vh;
		left: 520rpx;
		height: 10vh;
		z-index: 26;
	}
	.area6{
		bottom: 4vh;
		left: 640rpx;
		height: 10vh;
		z-index: 25;
	}
	.area7{
		bottom: 12vh;
		left: 8rpx;
		height: 10vh;
		z-index: 21;
	}
	.area8{
		bottom: 13vh;
		left: 100rpx;
		height: 10vh;
		z-index: 19;
	}
	.area9{
		bottom: 11vh;
		left: 190rpx;
		height: 10vh;
		z-index: 22;
	}
	.area10{
		bottom: 14vh;
		left: 275rpx;
		height: 10vh;
		z-index: 18;
	}
	.area11{
		bottom: 10vh;
		left: 380rpx;
		height: 10vh;
		z-index: 23;
	}
	.area12{
		bottom: 12vh;
		left: 480rpx;
		height: 10vh;
		z-index: 20;
	}
	.area13{
		bottom: 15vh;
		left: 570rpx;
		height: 10vh;
		z-index: 16;
	}
	.area14{
		bottom: 14vh;
		left: 650rpx;
		height: 10vh;
		z-index: 17;
	}
	.area15{
		bottom: 24vh;
		left: 14rpx;
		height: 10vh;
		z-index: 12;
	}
	.area16{
		bottom: 22vh;
		left: 120rpx;
		height: 10vh;
		z-index: 14;
	}
	.area17{
		bottom: 21vh;
		left: 225rpx;
		height: 10vh;
		z-index: 15;
	}
	.area18{
		bottom: 23vh;
		left: 345rpx;
		height: 10vh;
		z-index: 13;
	}
	.area19{
		bottom: 24vh;
		left: 470rpx;
		height: 10vh;
		z-index: 11;
	}
	.area20{
		bottom: 25vh;
		left: 605rpx;
		height: 10vh;
		z-index: 10;
	}
	.area21{
		bottom: 33vh;
		left: 20rpx;
		height: 10vh;
		z-index: 7;
	}
	.area22{
		bottom: 34vh;
		left: 150rpx;
		height: 10vh;
		z-index: 5;
	}
	.area23{
		bottom: 33vh;
		left: 280rpx;
		height: 10vh;
		z-index: 6;
	}
	.area24{
		bottom: 31vh;
		left: 410rpx;
		height: 10vh;
		z-index: 9;
	}
	.area25{
		bottom: 33vh;
		left: 580rpx;
		height: 10vh;
		z-index: 8;
	}
	.area26{
		bottom: 41vh;
		left: 50rpx;
		height: 10vh;
		z-index: 4;
	}
	.area27{
		bottom: 42vh;
		left: 200rpx;
		height: 10vh;
		z-index: 3;
	}
	.area28{
		bottom: 43vh;
		left: 400rpx;
		height: 10vh;
		z-index: 1;
	}
	.area29{
		bottom: 42vh;
		left: 590rpx;
		height: 10vh;
		z-index: 2;
	}
</style>
