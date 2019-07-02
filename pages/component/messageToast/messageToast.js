// pages/component/messageToast/messageToast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: Object,
      value: {
        txt: '我是标题',
        answer: '我是答案'
      },
      observer: function (newVal) {
        // console.log(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
    current:-1,
    canLog:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast:function(){
      var that = this;
      this.setData({
        show:true,
      })
    },
    hideToast: function () {
      var that = this;
      this.setData({
        show: false,
        canLog: true,
        current:-1,
      })
    },
    postLog:function(e){
      if (this.data.canLog){
        var id = e.currentTarget.dataset.id;
        console.log(`是否有用 : ${id}`);
        var content = id == 1 ? '谢谢你的鼓励' : '谢谢你的反馈';
        wx.showToast({
          title: content,
          icon:'none'
        })
        this.setData({
          current: id,
          canLog:false,
        })
      }
    }
  }
})
