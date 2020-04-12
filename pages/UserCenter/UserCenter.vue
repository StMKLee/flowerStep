<template>
	<view class="center">
		<view class="center_top">
			<view class="mask"></view>
		</view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base">
					<view class="profily_header" v-bind:style="{backgroundImage: 'url('+theHeadImgUrl+')'}">
						
					</view>
					<text>{{theUsername}}</text>
				</view>
			</view>
			<view class="baiban">

			</view>
			<view class="center_menu">
				<view class="menu_item" v-for="(item, index) in menus" :key="index" @click="jumpto(index)">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menus: [{
						name: '花朵图鉴',
						icon: '../../static/images/tujian.png',
						key: 1,
					},
					{
						name: '个人成就',
						icon: '../../static/images/chengjiu.png',
						key: 2,
					},
					{
						name: '月种植数',
						icon: '../../static/images/zhongzhi.png',
						key: 3,
					},
					{
						name: '帮助中心',
						icon: '../../static/images/8.png',
						key: 4,
					},
					{
						name: '意见反馈',
						icon: '../../static/images/9.png',
						key: 5,
					},
					{
						name: '关于我们',
						icon: '../../static/images/10.png',
						key: 6,
					}
				]
			};
		},
		onLoad() {
			
		},
		onShow() {
			if(this.$store.state.userMess.length==0){		/* 如果用户信息未获取,则提示并返回首页 */
				var that=this;
				uni.showModal({
					title:"登录提示",
					content:"请先登录，点击确定返回首页",
					showCancel:false,		/* 不显示取消按钮 */
					success(res) {
						console.log("提示成功");
						if(res.confirm){
							that.goBackIndex()
						}
					},
					fail() {
						console.log("提示失败")
					}
				})
			}
		},
		methods: {
			goBackIndex:function(){
				uni.switchTab({
					url:'../index/index',
					success() {
						console.log("返回成功")
					},
					fail() {
						console.log("返回失败")
					}
				})
			},
			jumpto:function(index){
				if(index==0){
					uni.navigateTo({
					    url: '../achievement/achievement'
					});
				}
				else if(index==1){
					uni.navigateTo({
					    url: '../honor/honor'
					});
				}
				else if(index==2){
					uni.navigateTo({
					    url: '../monthFlower/monthFlower'
					});
				}
				else if(index==3){
					uni.navigateTo({
					    url: '../help/help'
					});
				}
				else if(index==4){
					uni.navigateTo({
					    url: '../feedback/feedback'
					});
				}
				else if(index==5){
					uni.navigateTo({
					    url: '../about/about'
					});
				}
			}
		},
		computed: {
			theUsername(){
				return this.$store.state.userMess.nickName;
			},
			theHeadImgUrl(){
				return this.$store.state.userMess.avatarUrl;
			}
		}
	}
</script>

<style lang="scss">
	.touxiang{
		width: 100rpx;
		height: 100rpx;
	}
	page {
		height: 100%;
	}

	.profily,
	.profily_header {
		border-radius: 8px;
	}

	.center {
		height: 100%;

		&_top {
			height: 18%;
			background:url('http://m.qpic.cn/psc?/V10EvO2w4BqwM9/oGEovji5dOWVs5ze3TLFdu8xmOlGSBo1D57XEIzLBpnOcP3qJytAGtg.PTkXn4ZtvvyDZwwacUaFelRMK0kmbA!!/b&bo=oAU4BAAAAAARB6k!&rf=viewer_4') no-repeat 0% 50%;
			background-size: cover;

			// background: #E6E6E6;
			.mask {
				background: rgba(0, 0, 0, .4);
				height: 100%;
			}
		}

		&_box_bg {
			background: #F9F9F9;
			position: relative;

			.profily {
				position: absolute;
				width: 90%;
				// border:1px solid #F7F7F7;
				margin: 0 auto;
				top: -100rpx;
				left: 5%;
				background: #FEFEFE;
				padding: 35rpx;
				box-sizing: border-box;
				box-shadow: 0px 2px 5px #EDEDED;
			}
		}
	}

	.base {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #F6F6F6;
		padding-bottom: 35rpx;
		position: relative;
		.profily_header {
			height: 120rpx;
			width: 120rpx;
			background-size: 100%;
		}

		text {
			margin-left: 20px;
			font-size: 30rpx;
		}
		
		image{
			position: absolute;
			height: 40rpx;
			width: 40rpx;
			right: 0px;
			top:0px;
		}
	}

	.order_status {
		display: flex;
		justify-content: space-between;
		margin-top: 35rpx;

		.status {
			width: 140rpx;
			font-size: 24rpx;
			text-align: center;
			letter-spacing: .5px;
			display: flex;
			flex-direction: column;
			.icon {
				width: 50rpx;
				height: 50rpx;
				margin: 0 auto;
				margin-bottom: 5px;
				
			}
		}
	}

	.baiban {
		background: #FEFEFE;
		height: 200rpx;
	}

	.center_menu {
		width: 100%;
		display: inline-block;

		.menu_item {
			font-size: 28rpx;
			letter-spacing: 1px;
			padding: 14px 5%;
			background: #FEFEFE;
			overflow: hidden;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px solid #EFEFEF;

			&:hover {
				background: #F6F6F6 !important;
			}

			&::after {
				content: '';
				width: 30rpx;
				height: 30rpx;
				position: absolute;
				right: 5%;
				background: url('../../static/images/arrow_right.png') no-repeat;
				background-size: 100%;
			}

			text:nth-of-type(1) {
				margin-left: 10px;
			}

			image {
				width: 40rpx;
				height: 40rpx;
			}

			&:nth-of-type(4) {
				margin-top: 10px;
			}
		}
	}
</style>
