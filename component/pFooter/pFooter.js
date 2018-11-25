// component/pFooter/pFooter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    footerActive: {
      type: String,
      value: '0'
    }
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
    changeItem(e) {
      this.setData({
        footerActive: e.currentTarget.dataset['index']
      })
    }
  }
})