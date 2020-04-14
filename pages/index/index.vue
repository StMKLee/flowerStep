
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
		<view>		<!-- 展示花的view -->
			
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
				showStep:"",
				stepclass:"steps",
				plantnum:null
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
							that.stepclass="steps";
							uni.hideLoading();
						}else if(!res.authSetting['scope.werun']){
							that.showStep="请在 个人中心->帮助与反馈->权限设置 里打开微信步数权限";
							that.stepclass="istip";
						}
					}
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
	.shouquan{
		margin-top: 15vh;
	}
</style>
