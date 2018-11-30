// pages/yaoyiyao/yaoyiyao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'http://clueless.gitee.io/shangqiuimages/',
    showResult: false,
    footerActive: '0',
    showPopup: false,
    productCateActive: '0',
    productCategory1:[
      {
        name:'蔬菜',
        active: '0'
      },
      {
        name:'果品',
        active: '1'
      },
      {
        name:'肉类',
        active: '2'
      },
      {
        name:'粮油',
        active: '3'
      },
    ],
    productCategory2:[
      {
        name:'禽蛋',
        active: '4'
      },
      {
        name:'调料',
        active: '5'
      },
      {
        name:'副食',
        active: '6'
      },
      {
        name: '菌类',
        active: '7'
      }
    ],
    productCategory3:[
      {
        name:'种子',
        active: '8'
      },
      {
        name:'茶叶',
        active: '9'
      },
    ],
    getResult:[
      {
        picUrl: 'index/shuichan.png',
        name:'何记水产',
        no:'A301',
        score: 5,
        main:'水产，海鲜',
        number: 28,
        commcount:2105,
      },
      {
        picUrl: 'shanghu/shushi.png',
        name:'李三熟食',
        no:'B201',
        score: 4,
        main:'烧腊',
        number: 24,
        commcount:1014,
      },
      {
        picUrl: 'index/shuichan.png',
        name:'鄱阳湖大闸蟹',
        no:'A411',
        score: 4,
        main:'水产，海鲜',
        number: 20,
        commcount: 1004,
      },
      {
        picUrl: 'index/liangyou.png',
        name:'一碗香芝麻油',
        no:'C03',
        score: 3,
        main:'调料',
        number: 17,
        commcount: 965,
      },
      {
        picUrl: 'index/guopin.png',        
        name:'新疆味美葡萄',
        no:'D113',
        score: 3,
        main:'水果',
        number: 14,
        commcount:887,
      },
    ]
  },
  changeResult(){
    this.setData({
      showResult: true
    })
  },
  changeFooterAcitve(e){
    let active = e.currentTarget.dataset['active']
    if (active === "2"){
      this.setData({
        footerActive: active,
        showPopup: true
      })
    }else {
      this.setData({
        footerActive: active
      })
    }
  },
  popupClose() {
    this.setData({
      showPopup: false
    })
  },
  changeProductCategory(e){
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