// pages/geren/geren.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'https://clueless.gitee.io/shangqiuimages/',
    showPopup: false
  },
  showErweimaPopup() {
    this.setData({
      showPopup: true,
    });
    // wx.previewImage({
    //   current: 'https://clueless.gitee.io/shangqiuimages/geren/erweima.png', // 当前显示图片的http链接
    //   urls: [
    //     'https://clueless.gitee.io/shangqiuimages/geren/erweima.png',
    //     'https://clueless.gitee.io/shangqiuimages/geren/user-icon.png',
    //     'https://clueless.gitee.io/shangqiuimages/geren/geren-bg.png'
    //   ] // 需要预览的图片http链接列表
    // })
  },
  erweimaPopupClose() {
    this.setData({
      showPopup: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})