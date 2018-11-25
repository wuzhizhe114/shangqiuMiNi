//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // footerActive: '0',
    swiperData:[
      {
        url:'http://clueless.gitee.io/shangqiuimages/index/carousel1.png',
        id: '111'
      },
      {
        url:'http://clueless.gitee.io/shangqiuimages/index/carousel1.png',
        id: '222'
      },
      {
        url:'http://clueless.gitee.io/shangqiuimages/index/carousel1.png',
        id: '333'
      }
    ],
    swiperTips:[
      '市场部门开展食品安全整治111',
      '市场部门开展食品安全整治222',
      '市场部门开展食品安全整治333'
    ],
    swiperIndex: 0,
    productData:[
      [
        {
          url:'http://clueless.gitee.io/shangqiuimages/index/shucai.png',
          text:'蔬菜'
        },
        {
          url:'http://clueless.gitee.io/shangqiuimages/index/guopin.png',
          text:'果品'
        },
        {
          url:'http://clueless.gitee.io/shangqiuimages/index/roulei.png',
          text:'肉类'
        }
      ],
      [
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/liangyou.png',
          text: '粮油'
        },
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/shuichan.png',
          text: '水产'
        },
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/fushi.png',
          text: '副食'
        }
      ],
      [
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/qindan.png',
          text: '禽蛋'
        },
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/tiaoliao.png',
          text: '调料'
        },
        {
          url: 'http://clueless.gitee.io/shangqiuimages/index/junlei.png',
          text: '菌类'
        }
      ]
    ]
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
  // changeItem (e) {
  //   this.setData({
  //     footerActive: e.currentTarget.dataset['index']
  //   })
  // }
})
