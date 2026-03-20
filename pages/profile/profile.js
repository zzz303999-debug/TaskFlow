// pages/profile/profile.js
import { checkLogin, getUserProfile, logout, saveUserToCloud } from '../../utils/auth'

Page({
  data: {
    userInfo: {
      name: '用户',
      level: 5,
      exp: 2300,
      nextLevelExp: 3000
    },
    stats: {
      totalTasks: 156,
      completedTasks: 128,
      streakDays: 5
    },
    darkMode: false,
    toastShow: false,
    toastText: '',
    expPercent: 76,
    // 登录状态
    logged: false,
    nickName: '',
    avatarUrl: '',
    openid: ''
  },

  onLoad() {
    this.loadUserInfo();
  },

  onShow() {
    this.checkDarkMode();
    this.checkLoginStatus();
  },

  // 检查登录状态
  async checkLoginStatus() {
    try {
      const loginRes = await checkLogin()
      const userInfo = wx.getStorageSync('userInfo')
      
      this.setData({
        logged: loginRes.logged,
        nickName: userInfo?.nickName || '',
        avatarUrl: userInfo?.avatarUrl || '',
        openid: loginRes.openid || ''
      })
      
      // 如果已登录，更新用户名为微信昵称
      if (loginRes.logged && userInfo?.nickName) {
        this.setData({
          'userInfo.name': userInfo.nickName
        })
      }
    } catch (err) {
      console.error('检查登录状态失败', err)
    }
  },

  // 前往登录页
  goToLogin() {
    wx.reLaunch({
      url: '/pages/login/login'
    })
  },

  // 退出登录
  logout() {
    wx.showModal({
      title: '确认退出',
      content: '退出后需要重新登录才能使用',
      confirmColor: '#FF754C',
      success: (res) => {
        if (res.confirm) {
          // 清除本地存储
          wx.removeStorageSync('userInfo')
          wx.removeStorageSync('openid')
          
          // 更新全局状态
          const app = getApp()
          app.globalData.logged = false
          app.globalData.userInfo = null
          app.globalData.openid = ''
          
          // 更新页面状态
          this.setData({
            logged: false,
            nickName: '',
            avatarUrl: '',
            openid: '',
            'userInfo.name': '用户'
          })
          
          this.showToast('已退出登录')
          
          // 跳转到登录页
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/login/login'
            })
          }, 1000)
        }
      }
    })
  },

  // 加载用户信息
  loadUserInfo() {
    const userInfo = this.data.userInfo;
    const expPercent = (userInfo.exp / userInfo.nextLevelExp) * 100;
    this.setData({ expPercent });
  },

  // 检查深色模式
  checkDarkMode() {
    const darkMode = wx.getStorageSync('darkMode') || false;
    this.setData({ darkMode });
    if (darkMode) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1B1B1F'
      });
    }
  },

  // 切换深色模式
  toggleDarkMode(e) {
    const darkMode = e ? e.detail.value : !this.data.darkMode;
    this.setData({ darkMode });
    wx.setStorageSync('darkMode', darkMode);

    if (darkMode) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1B1B1F'
      });
      this.showToast('已开启深色模式 🌙');
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#F5F5F7'
      });
      this.showToast('已关闭深色模式 ☀️');
    }
  },

  // 前往设置
  goToSettings() {
    this.showToast('设置页面开发中...');
  },

  // 前往提醒设置
  goToReminders() {
    this.showToast('提醒设置开发中...');
  },

  // 前往会员中心
  goToVIP() {
    this.showToast('会员中心开发中... 💎');
  },

  // 分享应用
  shareApp() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    this.showToast('点击右上角分享好友～');
  },

  // 意见反馈
  giveFeedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
    this.showToast('感谢你的反馈！💬');
  },

  // 检查更新
  checkUpdate() {
    this.showToast('已是最新版本 v1.0.0 ✨');
  },

  // 关于应用
  aboutApp() {
    wx.showModal({
      title: '关于 TaskFlow',
      content: 'TaskFlow v1.0.0\n\n一款智能待办事项管理应用\n让任务管理更高效、更有趣',
      showCancel: false,
      confirmText: '好的'
    });
  },

  // Toast 提示
  showToast(text) {
    this.setData({
      toastText: text,
      toastShow: true
    });
    setTimeout(() => {
      this.setData({
        toastShow: false
      });
    }, 2000);
  },

  // 分享朋友圈
  onShareTimeline() {
    return {
      title: 'TaskFlow - 让任务管理更高效',
      query: ''
    };
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: 'TaskFlow - 智能待办事项管理',
      path: '/pages/index/index'
    };
  }
})
