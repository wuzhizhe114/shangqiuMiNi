// pages/productCategory/productCategory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'http://clueless.gitee.io/shangqiuimages/',
    categoryActive:'0',
    productCategory: [
      {
        picUrl:'shanghu/shushi.png',
        name:'李三熟食',
        jiage: '12.5',
        score: 5,
        addr: '华商大道西段169号附近',
        bodon: -0.5
      },
      {
        picUrl:'shanghu/huacai.png',
        name:'阿里菜店',
        jiage: '12.8',
        score: 5,
        addr: '华商大道西段169号附近',
        bodon: 0.3
      },
      {
        picUrl:'index/guopin.png',
        name: '明明水果店',
        jiage: '12.5',
        score: 4,
        addr: '华商大道西段169号附近',
        bodon: -0.3
      },
      {
        picUrl:'index/roulei.png',
        name: '银花生鲜肉店',
        jiage: '10.2',
        score: 4,
        addr: '华商大道西段169号附近',
        bodon: 0.3
      },
      {
        picUrl:'index/fushi.png',
        name: '旺角副食店',
        jiage: '8.5',
        score: 4,
        addr: '华商大道西段169号附近',
        bodon: -0.1
      },
      {
        picUrl:'index/shucai.png',
        name: '超奎百货商行',
        jiage: '6.8',
        score: 3,
        addr: '华商大道西段169号附近',
        bodon: 0.3
      },
    ]
  },
  changeCategoryActive(e){
    // console.log(e)
    this.setData({
      categoryActive: e.currentTarget.dataset['active']
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