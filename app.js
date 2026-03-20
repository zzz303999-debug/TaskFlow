// app.js
App({
  onLaunch() {
    console.log('TaskFlow 启动');
    
    // 初始化云开发环境
    if (wx.cloud) {
      wx.cloud.init({
        env: 'cloud1-8ggxf81qe6a7d866',
        traceUser: true
      })
      console.log('☁️ 云开发初始化成功')
    }
    
    // 检查登录状态
    this.checkLogin()
  },

  globalData: {
    userInfo: null,
    darkMode: false,
    logged: false,
    openid: ''
  },

  // 检查登录状态
  checkLogin() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo && userInfo.nickName) {
      this.globalData.logged = true
      this.globalData.userInfo = userInfo
    } else {
      // 未登录，跳转到登录页
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      if (currentPage && currentPage.route !== 'pages/login/login') {
        wx.reLaunch({
          url: '/pages/login/login'
        })
      }
    }
  }
})
