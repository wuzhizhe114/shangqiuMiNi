//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    footerActive: '0',
    swiperData:[
      '../../images/index/carousel1.png',
      '../../images/index/carousel1.png',
      '../../images/index/carousel1.png'
    ],
    swiperTips:[
      '市场部门开展食品安全整治111',
      '市场部门开展食品安全整治222',
      '市场部门开展食品安全整治333'
    ],
    swiperIndex: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 轮播图切换
  swiperChange (e) {
    // console.log(e.detail.current)
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  // 底部导航切换
  changeItem (e) {
    this.setData({
      footerActive: e.currentTarget.dataset['index']
    })
  }
})
