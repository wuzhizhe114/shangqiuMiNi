// pages/shanghuInfo/shanghuInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'https://clueless.gitee.io/shangqiuimages/',
    valueRate: 0,
    otherActive: '0',
    tousuPopup: false,
    productRecomActive: '0',
    productListData:[
      {
        picUrl: 'shanghu/kugua.png',
        name:'印度苦瓜',
        jiage:'2.5',
        type: '蔬菜',
        chandi: '商丘瓜果基地',
        jinhuo: '2018-11-29',
        baocun: '冷藏'
      },
      {
        picUrl: 'shanghu/xiaobaicai.png',
        name:'商丘小白菜',
        jiage:'2.2',
        type: '蔬菜',
        chandi: '商丘瓜果基地',
        jinhuo: '2018-11-29',
        baocun: '冷藏'
      },
      {
        picUrl: 'shanghu/shucai.png',
        name:'生菜',
        jiage:'2.1',
        type: '蔬菜',
        chandi: '商丘瓜果基地',
        jinhuo: '2018-11-29',
        baocun: '冷藏'
      },
      {
        picUrl: 'shanghu/nangua.png',
        name:'南瓜',
        jiage:'2.0',
        type: '蔬菜',
        chandi: '商丘瓜果基地',
        jinhuo: '2018-11-29',
        baocun: '冷藏'
      },
    ]
  },
  // 评分
  rateChange(){
    console.log(this.data.valueRate)
  },
  // 切换显示其他信息
  otherChange(e){
    // console.log(e)
    this.setData({
      otherActive: e.currentTarget.dataset['otherIndex']
    })
  },
  // 打开评价反馈页面
  openPingjia(){
    wx.navigateTo({
      url: './pingjia',
    })
  },
  // 展示投诉弹窗
  showTousuPopup() {
    this.setData({
      tousuPopup: true
    })
  },
  // 弹出层关闭方法
  tousuPopupClose() {
    this.setData({
      tousuPopup: false
    })
  },
  // 拨打电话
  dialNumber(){
    this.tousuPopupClose();
    wx.makePhoneCall({
      phoneNumber: '07532235698'
    })
  },
  // 切换商品推荐方式
  changeProductActive(e){
    this.setData({
      productRecomActive: e.currentTarget.dataset['active']
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