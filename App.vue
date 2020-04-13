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
		}
	},
	onShow: function() {
		console.log('App Show');
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
