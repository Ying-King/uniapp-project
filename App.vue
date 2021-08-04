<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const updateManager = wx.getUpdateManager()
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  if (res.hasUpdate) {
			    updateManager.onUpdateReady(function () {
			      wx.showModal({
			        title: '更新提示',
			        content: '新版本已经准备好，是否重启应用？',
			        success(res) {
			          if (res.confirm) {
			            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			            updateManager.applyUpdate()
			          }
			        }
			      })
			    })
			    console.log('还有新版本')
			  }
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	@import '@/static/font/iconfont.scss';
</style>
