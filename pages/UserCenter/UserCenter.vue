<template>
	<view class="center">
		<view class="center_top">
			<view class="mask"></view>
		</view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base">
					<view class="profily_header">

					</view>
					<text>昵称</text>
				</view>
			</view>
			<view class="baiban">

			</view>
			<view class="center_menu">
				<view class="menu_item" v-for="(item, index) in menus" :key="index">
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
						icon: '../../static/images/图鉴.png',
						key: 1,
					},
					{
						name: '个人成就',
						icon: '../../static/images/成就.png',
						key: 2,
					},
					{
						name: '月种植数',
						icon: '../../static/images/种植.png',
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
		methods: {

		},
		computed: {

		}
	}
</script>

<style lang="scss">
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
			background: url("http://m.qpic.cn/psc?/V10EvO2w4BqwM9/oGEovji5dOWVs5ze3TLFdu8xmOlGSBo1D57XEIzLBpnOcP3qJytAGtg.PTkXn4ZtvvyDZwwacUaFelRMK0kmbA!!/b&bo=oAU4BAAAAAARB6k!&rf=viewer_4") no-repeat 0% 50%;
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
			background-image: url(../../static/images/header.jpg);
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
