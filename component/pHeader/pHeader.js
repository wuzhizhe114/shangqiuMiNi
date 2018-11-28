// component/pHeader/pHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _saoma(){
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
  }
})
