<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		if(!wx.cloud) {
			console.error("云能力未开通");
		}else if(wx.cloud) {		/* 云初始化 */
			wx.cloud.init({
				traceUser: true,
				env: 'fsc-theid'
			});
			console.log("云能力已开通");
		};
		uni.authorize({
			scope:'scope.werun',
			success() {
				console.log("授权接口调用成功");
				wx.getWeRunData({
					success(res) {
						var cloudid=res.cloudID;
						wx.cloud.callFunction({
							name: 'myFunction',
							data: {
								weRunData: wx.cloud.CloudID(cloudid)
							},
							success:function(res){
								console.log("调用云函数成功");
								that.$store.state.stepMess=res.result.event.weRunData.data.stepInfoList;
							}
						})
					}
				})
			},
			fail() {
				console.log("授权接口调用失败");
			}
		})
	},
	onShow: function() {
		console.log('App Show');
		var that=this;
		uni.getSetting({		/* 用于应用显示时检测权限 */
			success(res) {
				if(res.authSetting['scope.userInfo']){
					uni.login({
						provider:'weixin',
						success(Lres) {
							uni.getUserInfo({
								provider:'weixin',
								success(Ires) {
									that.$store.state.userMess=Ires.userInfo;
								}
							})
						}
					})
				};
				if(res.authSetting['scope.werun']){
					wx.getWeRunData({
						success(res) {
							var cloudid=res.cloudID;
							wx.cloud.callFunction({
								name: 'myFunction',
								data: {
									weRunData: wx.cloud.CloudID(cloudid)
								},
								success:function(res){
									that.$store.state.stepMess=res.result.event.weRunData.data.stepInfoList;
								}
							})
						}
					})
				}
			}
		})
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
