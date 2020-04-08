
<!-- 根据当日步数随机展示花的页面，展示logo等 -->

<template>
	<view class="container">
		<view class="maincontent">			<!-- 主内容容器 -->
			<view class="topcontent">		<!-- 顶部内容容器 -->
				<view class="Logo">            <!-- Logo标 -->
					Logo
				</view>
				<view class="monthflowers" @click="gotomf">		<!-- 进入花园页，有月总花数量 -->
					<image src="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.CKIC98CLlv.x4mmPngl5.IoIs9BpZu3kT5g6Ykt5YSfdQzAgb6EpA.fvJQsNaxzg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5" class="topflower"></image>进入我的花园
				</view>
			</view>
			<view class="steps">            <!-- 步数 -->
				1000
			</view>
			<view class="dateAndTime">       <!-- 日期时间 -->
				{{year}}年{{month}}月{{day}}日&nbsp;&nbsp;{{hour}}:{{minute}}&nbsp;&nbsp;星期{{week}}
			</view>
			<image src="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5" class="flowerex1"></image>			<!-- 花例图1 -->
			<image src="http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq.QVIHyOimd.aaUtt0GfF*e9iWU5mOU3OQ5cobOAxB.eaI3j1uQGrrS4YXr4OlvCaA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5" class="flowerex2"></image>			<!-- 花例图2 -->
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
				week:null
			}
		},
		onShow:function(){
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
			gotomf:function(){
				uni.navigateTo({
					url:"../monthFlower/monthFlower"
				})
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
		background-image: url("http://m.qpic.cn/psc?/V103RcfH49cCwd/N6ix9ropXhYRy3eob.4Aq3f4Y7iPfx46tWEvgQhztDVYa1XvlRj5Po5h5hmUgINjB8qxGNL4kQnkQRIro0eDfQ!!/mnull&bo=9AHlAgAAAAARByI!&rf=photolist&t=5");
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
	.topcontent{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 750rpx;
		height: auto;
		padding-top: 7px;
	}
	.steps{
		font-size: 110rpx;
		margin-top: 8vh;
		color: #900000;
	}
	.Logo{
		font-size: 50rpx;
		color: #4CD964;
		margin-left: 10px;
	}
	.monthflowers{
		margin-right: 10px;
		font-size: 25rpx;
		display: flex;
		align-items: center;
	}
	.dateAndTime{
		font-size: 30rpx;
		margin-top: 5vh;
		color: #daa937;
	}
	.tip{
		font-size: 30rpx;
		margin-top: 32vh;
		color: #4fc1f1;
	}
	.topflower{
		width: 15px;
		height: 15px;
		margin-right: 10rpx;
	}
	.flowerex1{
		position: absolute;
		width: 80rpx;
		height: 160rpx;
		top: 60vh;
		left: 30vw;
	}
	.flowerex2{
		position: absolute;
		width: 80rpx;
		height: 160rpx;
		top: 70vh;
		left: 70vw;
	}
</style>
