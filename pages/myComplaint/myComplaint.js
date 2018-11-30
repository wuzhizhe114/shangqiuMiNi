// pages/myComplaint/myComplaint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData:[
      {
        pageUrl:'',
        picUrl:'https://clueless.gitee.io/shangqiuimages/shanghu/shushi.png',
        title: '李三熟食',
        time: '2018年11月26日',
        type:'价格偏离',
        score: 3
      },
      {
        pageUrl: '',
        picUrl:'https://clueless.gitee.io/shangqiuimages/shanghu/shushi.png',
        title: '余记烤鸭',
        time: '2018年11月26日',
        type: '价格偏离',
        score: 4
      },
      {
        pageUrl: '',
        picUrl:'https://clueless.gitee.io/shangqiuimages/index/shuichan.png',
        title: '莲花山水产',
        time: '2018年11月26日',
        type: '环境不佳',
        score: 3
      },
      {
        pageUrl: '',
        picUrl:'https://clueless.gitee.io/shangqiuimages/index/fushi.png',
        title: '钱大妈豆瓣酱',
        time: '2018年11月26日',
        type: '价格偏离',
        score: 3
      },
      {
        pageUrl: '',
        picUrl:'https://clueless.gitee.io/shangqiuimages/index/qiandama.png',
        title: '爱辉烘焙坊',
        time: '2018年11月26日',
        type: '价格偏离',
        score: 3
      }
    ],
    tabActive: '0'
  },
  onTabChange(){

  },
  // 去往在线投诉页
  goOnlineComplaint(){
    wx.navigateTo({
      url: '/pages/onlineComplaint/onlineComplaint',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})