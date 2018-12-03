// pages/shanghu/shanghu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'http://clueless.gitee.io/shangqiuimages/',
    showPopup: false,
    productActive: '0',
    productCateActive: '0',
    productCategory1: [
      {
        name: '蔬菜',
        active: '0'
      },
      {
        name: '果品',
        active: '1'
      },
      {
        name: '肉类',
        active: '2'
      },
      {
        name: '粮油',
        active: '3'
      },
    ],
    productCategory2: [
      {
        name: '禽蛋',
        active: '4'
      },
      {
        name: '调料',
        active: '5'
      },
      {
        name: '副食',
        active: '6'
      },
      {
        name: '菌类',
        active: '7'
      }
    ],
    productCategory3: [
      {
        name: '种子',
        active: '8'
      },
      {
        name: '茶叶',
        active: '9'
      },
    ],
    getResult: [
      {
        picUrl: 'index/first_pic2.png',
        name: '亚亮熟食',
        no: 'A301',
        score: 5,
        main: '烧腊',
        number: 32,
        commcount: 3425,
      },
      {
        picUrl: 'index/baihuo.jpg',
        name: '超奎百货商行',
        no: 'B201',
        score: 4,
        main: '海鲜干货',
        number: 24,
        commcount: 1014,
      },
      {
        picUrl: 'index/fushi.png',
        name: '旺角副食店',
        no: 'A411',
        score: 4,
        main: '零食，饮料',
        number: 20,
        commcount: 1004,
      },
      {
        picUrl: 'index/guopin.png',
        name: '明明水果店',
        no: 'C03',
        score: 3,
        main: '时令水果',
        number: 17,
        commcount: 965,
      },
      {
        picUrl: 'index/roulei.png',
        name: '银花生鲜肉店',
        no: 'D113',
        score: 3,
        main: '各类肉制品',
        number: 14,
        commcount: 887,
      },
    ]
  },
  // 展示商品类别
  showProductCategory(){
    this.setData({
      showPopup: true
    })
  },
  // 弹出层关闭方法
  popupClose(){
    this.setData({
      showPopup: false
    })
  },
  // 
  changeProductActive(e){
    let active = e.currentTarget.dataset['active'];
    if(active === "1"){
      this.setData({
        productActive: e.currentTarget.dataset['active'],
        showPopup: true
      });
    }else{
      this.setData({
        productActive: e.currentTarget.dataset['active']
      });
    }
  },
  changeProductCategory(e) {
    // console.log(e)
    this.setData({
      productCateActive: e.currentTarget.dataset['active'],
      showPopup: false
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