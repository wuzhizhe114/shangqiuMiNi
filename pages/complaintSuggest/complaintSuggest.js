// pages/complaintSuggest/complaintSuggest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tousuText: '价格偏高',
    tousuShow: false,
    tousuTypeList: [{
        name: '价格偏高'
      },
      {
        name: '卫生太差'
      },
      {
        name: '态度恶劣'
      },
      {
        name: '电子秤不准'
      }
    ]
  },
  tousuTypeClose(){
    this.setData({
      tousuShow: false
    })
  },
  selectTypeItem(e){
    console.log(e.detail.name)
    this.setData({
      tousuText: e.detail.name
    });
    this.tousuTypeClose();
  },
  showTousuType(){
    this.setData({
      tousuShow: true,
    })
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