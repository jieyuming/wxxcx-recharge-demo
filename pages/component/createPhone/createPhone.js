// pages/component/createPhone.js
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
    show:false,
    isFocu:true,
    value:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getToastFocus:function(e){
      var that = this;
      that.setData({
        isFocu:true
      })
    },
    getToastBlur:function(e){
      var that = this;
      that.setData({
        isFocu: false
      })
    },
    showToast:function(){
      var that = this;
      that.setData({
        show: true,
      })
    },
    getPhoneValue:function(e){
      var info = e.detail.value;
      // console.log(`your phone is : ${info}`);
      this.setData({
        value: info,
      })
    },
    cancel:function(){
      var that = this;
      that.setData({
        show: false
      })
    },
    confirm: function () {
      var that = this;
      var phone = that.data.value;
      console.log(`phone is : ${phone}`+ " 传值给页面");
      if (phone){
        var myEventOption = {
          bubbles: false,
          composed: false,
        }
        var myEventDetail = {
          'phone': phone,
        }
        that.triggerEvent("confirmEvent", myEventDetail, myEventOption);
        that.setData({
          show: false
        })
      }else{
        wx.showToast({
          title: '请输入手机号码',
          icon:"none"
        })
      }
    }
  }
})
