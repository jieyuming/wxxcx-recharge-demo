
Page({

  data: {
    useHistory:[
      // {
      //   phone:'12345678901',
      //   text:'广东 广州 移动'
      // },
    ]
  },
  onLoad(){
    var data = wx.getStorageSync('useHistory');
    if (data){
      this.setData({
        useHistory: data,
      })
    }
  },
  onReady(){
    this.newPhone = this.selectComponent("#newPhone");
  },
  deletaRecode(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(`delete id:${id}`);
    var params = that.data.useHistory;
    wx.showModal({
      title: '提示',
      content: "是否删除号码:" + params[id].phone,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          params.splice(id, 1);
          that.setData({
            useHistory: params,
          })
          wx.setStorageSync('useHistory', params);
          wx.showToast({
            title: '删除成功',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  getNumberPhone(e){
    var phone = e.detail['phone'];
    console.log("页面接收到值 phone: "+phone);
    var obj = {
      'phone': phone,
      'text':'广东 深圳'
    }
    var param = this.data.useHistory;
    param.unshift(obj);
    this.setData({
      useHistory: param,
    })
    wx.setStorageSync('useHistory', param);
  },
  onShareAppMessage: function () {

  },
  showCreateToast(){
    var that = this;
    that.newPhone.showToast();
  }
})